<?php

/**
 * @file
 * Contains \Drupal\thunder_article\Breadcrumb\ThunderArticleBreadcrumbBuilder.
 */

namespace Drupal\thunder_article\Breadcrumb;

use Drupal\Core\Breadcrumb\Breadcrumb;
use Drupal\Core\Breadcrumb\BreadcrumbBuilderInterface;
use Drupal\Core\Link;
use Drupal\Core\ParamConverter\ParamNotConvertedException;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Drupal\node\Entity\Node;
use Drupal\Core\Entity\EntityManagerInterface;

/**
 * Class to define the menu_link breadcrumb builder.
 */
class ThunderArticleBreadcrumbBuilder implements BreadcrumbBuilderInterface {
  use StringTranslationTrait;

  /**
   * The router request context.
   *
   * @var \Drupal\Core\Routing\RequestContext
   */
  protected $context;

  /**
   * The menu link access service.
   *
   * @var \Drupal\Core\Access\AccessManagerInterface
   */
  protected $accessManager;

  /**
   * The dynamic router service.
   *
   * @var \Symfony\Component\Routing\Matcher\RequestMatcherInterface
   */
  protected $router;

  /**
   * The dynamic router service.
   *
   * @var \Drupal\Core\PathProcessor\InboundPathProcessorInterface
   */
  protected $pathProcessor;

  /**
   * Site config object.
   *
   * @var \Drupal\Core\Config\Config
   */
  protected $config;

  /**
   * The title resolver.
   *
   * @var \Drupal\Core\Controller\TitleResolverInterface
   */
  protected $titleResolver;

  /**
   * The current user object.
   *
   * @var \Drupal\Core\Session\AccountInterface
   */
  protected $currentUser;

  /**
   * The entity manager.
   *
   * @var \Drupal\Core\Entity\EntityManagerInterface
   */
  protected $entityManager;

  /**
   * The taxonomy storage.
   *
   * @var \Drupal\Taxonomy\TermStorageInterface
   */
  protected $termStorage;

  /**
   * Constructs the PathBasedBreadcrumbBuilder.
   *
   * @param \Drupal\Core\Routing\RequestContext $context
   *   The router request context.
   * @param \Drupal\Core\Access\AccessManagerInterface $access_manager
   *   The menu link access service.
   * @param \Symfony\Component\Routing\Matcher\RequestMatcherInterface $router
   *   The dynamic router service.
   * @param \Drupal\Core\PathProcessor\InboundPathProcessorInterface $path_processor
   *   The inbound path processor.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config factory service.
   * @param \Drupal\Core\Controller\TitleResolverInterface $title_resolver
   *   The title resolver service.
   * @param \Drupal\Core\Session\AccountInterface $current_user
   *   The current user object.
   * @param \Drupal\Core\Path\CurrentPathStack $current_path
   *   The current path.
   */
  public function __construct(EntityManagerInterface $entityManager) {
    $this->entityManager = $entityManager;
    $this->termStorage = $entityManager->getStorage('taxonomy_term');
  }

  /**
   * {@inheritdoc}
   */
  public function applies(RouteMatchInterface $route_match) {
    // This breadcrumb apply only for all articles
    $parameters = $route_match->getParameters()->all();
    if (isset($parameters['node'])) {
      return $parameters['node']->getType() == 'article';
    }
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function build(RouteMatchInterface $route_match) {
    $breadcrumb = new Breadcrumb();
    $breadcrumb->addCacheContexts(['route']);

    // Add all parent forums to breadcrumbs.
    /** @var Node $node */
    $node = $route_match->getParameter('node');
    $breadcrumb->addCacheableDependency($node);

    // Add all parent forums to breadcrumbs.
    /** @var \Drupal\Taxonomy\TermInterface $term */
    $term = $node->field_channel->entity;

    if ($term) {
      $breadcrumb->addCacheableDependency($term);

      $channels = $this->termStorage->loadAllParents($term->id());
      foreach (array_reverse($channels) as $term) {
        $term = $this->entityManager->getTranslationFromContext($term);
        $breadcrumb->addCacheableDependency($term);
        $links[] = Link::createFromRoute($term->getName(), 'entity.taxonomy_term.canonical', array('taxonomy_term' => $term->id()));
      }
    }
    else {
      $links[] = Link::createFromRoute($this->t('Home'), '<front>');
    }

    return $breadcrumb->setLinks($links);
  }

  /**
   * Matches a path in the router.
   *
   * @param string $path
   *   The request path with a leading slash.
   * @param array $exclude
   *   An array of paths or system paths to skip.
   *
   * @return \Symfony\Component\HttpFoundation\Request
   *   A populated request object or NULL if the path couldn't be matched.
   */
  protected function getRequestForPath($path, array $exclude) {
    if (!empty($exclude[$path])) {
      return NULL;
    }
    // @todo Use the RequestHelper once https://www.drupal.org/node/2090293 is
    //   fixed.
    $request = Request::create($path);
    // Performance optimization: set a short accept header to reduce overhead in
    // AcceptHeaderMatcher when matching the request.
    $request->headers->set('Accept', 'text/html');
    // Find the system path by resolving aliases, language prefix, etc.
    $processed = $this->pathProcessor->processInbound($path, $request);
    if (empty($processed) || !empty($exclude[$processed])) {
      // This resolves to the front page, which we already add.
      return NULL;
    }
    $this->currentPath->setPath($processed, $request);
    // Attempt to match this path to provide a fully built request.
    try {
      $request->attributes->add($this->router->matchRequest($request));
      return $request;
    }
    catch (ParamNotConvertedException $e) {
      return NULL;
    }
    catch (ResourceNotFoundException $e) {
      return NULL;
    }
    catch (MethodNotAllowedException $e) {
      return NULL;
    }
    catch (AccessDeniedHttpException $e) {
      return NULL;
    }
  }

}
