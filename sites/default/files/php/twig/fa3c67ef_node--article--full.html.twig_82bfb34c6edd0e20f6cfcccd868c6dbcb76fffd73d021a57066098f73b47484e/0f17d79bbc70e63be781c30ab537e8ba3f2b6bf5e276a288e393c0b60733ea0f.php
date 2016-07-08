<?php

/* profiles/thunder/themes/infinite/templates/node/node--article--full.html.twig */
class __TwigTemplate_ba2d05da455fbae53394620183fcd3445c8208187cdaa959a35b96dcdbfd5f3a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'article_header_blocks' => array($this, 'block_article_header_blocks'),
            'article_node_content' => array($this, 'block_article_node_content'),
            'article_footer_blocks_lazyloading' => array($this, 'block_article_footer_blocks_lazyloading'),
            'article_footer_blocks_full' => array($this, 'block_article_footer_blocks_full'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 71, "if" => 82, "block" => 102, "include" => 106);
        $filters = array("render" => 114);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('set', 'if', 'block', 'include'),
                array('render'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setTemplateFile($this->getTemplateName());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 71
        $context["wrapper_classes"] = array(0 => "region-full-content", 1 => "infinite-item", 2 => "region-infinite-block");
        // line 77
        echo "
";
        // line 79
        $context["wrapper_attributes"] = $this->getAttribute((isset($context["wrapper_attributes"]) ? $context["wrapper_attributes"] : null), "setAttribute", array(0 => "data-view-type", 1 => "infiniteBlockView"), "method");
        // line 80
        $context["wrapper_attributes"] = $this->getAttribute((isset($context["wrapper_attributes"]) ? $context["wrapper_attributes"] : null), "setAttribute", array(0 => "data-history-url", 1 => (isset($context["path"]) ? $context["path"] : null)), "method");
        // line 81
        $context["wrapper_attributes"] = $this->getAttribute((isset($context["wrapper_attributes"]) ? $context["wrapper_attributes"] : null), "setAttribute", array(0 => "data-history-title", 1 => (isset($context["node_seo_title"]) ? $context["node_seo_title"] : null)), "method");
        // line 82
        if ( !twig_test_empty((isset($context["adsc_adunit1"]) ? $context["adsc_adunit1"] : null))) {
            // line 83
            echo "  ";
            $context["wrapper_attributes"] = $this->getAttribute((isset($context["wrapper_attributes"]) ? $context["wrapper_attributes"] : null), "setAttribute", array(0 => "data-adsc-adunit1", 1 => (isset($context["adsc_adunit1"]) ? $context["adsc_adunit1"] : null)), "method");
        }
        // line 85
        if ( !twig_test_empty((isset($context["adsc_adunit2"]) ? $context["adsc_adunit2"] : null))) {
            // line 86
            echo "  ";
            $context["wrapper_attributes"] = $this->getAttribute((isset($context["wrapper_attributes"]) ? $context["wrapper_attributes"] : null), "setAttribute", array(0 => "data-adsc-adunit2", 1 => (isset($context["adsc_adunit2"]) ? $context["adsc_adunit2"] : null)), "method");
        }
        // line 88
        if ( !twig_test_empty((isset($context["adsc_adunit3"]) ? $context["adsc_adunit3"] : null))) {
            // line 89
            echo "  ";
            $context["wrapper_attributes"] = $this->getAttribute((isset($context["wrapper_attributes"]) ? $context["wrapper_attributes"] : null), "setAttribute", array(0 => "data-adsc-adunit3", 1 => (isset($context["adsc_adunit3"]) ? $context["adsc_adunit3"] : null)), "method");
        }
        // line 91
        if ( !twig_test_empty((isset($context["adsc_keyword"]) ? $context["adsc_keyword"] : null))) {
            // line 92
            echo "  ";
            $context["wrapper_attributes"] = $this->getAttribute((isset($context["wrapper_attributes"]) ? $context["wrapper_attributes"] : null), "setAttribute", array(0 => "data-adsc-keyword", 1 => (isset($context["adsc_keyword"]) ? $context["adsc_keyword"] : null)), "method");
        }
        // line 94
        $context["wrapper_attributes"] = $this->getAttribute((isset($context["wrapper_attributes"]) ? $context["wrapper_attributes"] : null), "setAttribute", array(0 => "data-nid", 1 => (isset($context["nid"]) ? $context["nid"] : null)), "method");
        // line 95
        echo "
";
        // line 97
        if (((isset($context["view_mode"]) ? $context["view_mode"] : null) == "full")) {
            // line 98
            echo "  ";
            $context["wrapper_attributes"] = $this->getAttribute((isset($context["wrapper_attributes"]) ? $context["wrapper_attributes"] : null), "setAttribute", array(0 => "data-no-track", 1 => "true"), "method");
        }
        // line 100
        echo "
<div";
        // line 101
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["wrapper_attributes"]) ? $context["wrapper_attributes"] : null), "addClass", array(0 => (isset($context["wrapper_classes"]) ? $context["wrapper_classes"] : null)), "method"), "html", null, true));
        echo "  >
  ";
        // line 102
        $this->displayBlock('article_header_blocks', $context, $blocks);
        // line 105
        echo "  ";
        $this->displayBlock('article_node_content', $context, $blocks);
        // line 108
        echo "  ";
        $this->displayBlock('article_footer_blocks_lazyloading', $context, $blocks);
        // line 109
        echo "</div>

";
        // line 111
        if ( !twig_test_empty($this->renderBlock("article_footer_blocks_full", $context, $blocks))) {
            // line 112
            echo "  <div class=\"region-full-content region-feed\" data-view-type=\"feedView\">
    ";
            // line 113
            $this->displayBlock('article_footer_blocks_full', $context, $blocks);
            // line 119
            echo "  </div>
";
        }
    }

    // line 102
    public function block_article_header_blocks($context, array $blocks = array())
    {
        // line 103
        echo "    ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_header_blocks", array()), "html", null, true));
        echo "
  ";
    }

    // line 105
    public function block_article_node_content($context, array $blocks = array())
    {
        // line 106
        echo "    ";
        $this->loadTemplate("@infinite/node/node--article.html.twig", "profiles/thunder/themes/infinite/templates/node/node--article--full.html.twig", 106)->display($context);
        // line 107
        echo "  ";
    }

    // line 108
    public function block_article_footer_blocks_lazyloading($context, array $blocks = array())
    {
    }

    // line 113
    public function block_article_footer_blocks_full($context, array $blocks = array())
    {
        // line 114
        echo "      ";
        if ((((isset($context["view_mode"]) ? $context["view_mode"] : null) == "full") && $this->env->getExtension('drupal_core')->renderVar($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_footer_blocks", array())))) {
            // line 115
            echo "        ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_footer_blocks", array()), "html", null, true));
            echo "
        <div class=\"container-content container-content-dynamic container-feed-items\"></div>
      ";
        }
        // line 118
        echo "    ";
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/node/node--article--full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  163 => 118,  156 => 115,  153 => 114,  150 => 113,  145 => 108,  141 => 107,  138 => 106,  135 => 105,  128 => 103,  125 => 102,  119 => 119,  117 => 113,  114 => 112,  112 => 111,  108 => 109,  105 => 108,  102 => 105,  100 => 102,  96 => 101,  93 => 100,  89 => 98,  87 => 97,  84 => 95,  82 => 94,  78 => 92,  76 => 91,  72 => 89,  70 => 88,  66 => 86,  64 => 85,  60 => 83,  58 => 82,  56 => 81,  54 => 80,  52 => 79,  49 => 77,  47 => 71,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Default theme implementation to display a node.*/
/*  **/
/*  * Available variables:*/
/*  * - node: Full node entity.*/
/*  *   - id: The node ID.*/
/*  *   - bundle: The type of the node, for example, "page" or "article".*/
/*  *   - authorid: The user ID of the node author.*/
/*  *   - createdtime: Time the node was published formatted in Unix timestamp.*/
/*  *   - changedtime: Time the node was changed formatted in Unix timestamp.*/
/*  * - label: The title of the node.*/
/*  * - content: All node items. Use {{ content }} to print them all,*/
/*  *   or print a subset such as {{ content.field_example }}. Use*/
/*  *   {{ content|without('field_example') }} to temporarily suppress the printing*/
/*  *   of a given child element.*/
/*  * - author_picture: The node author user entity, rendered using the "compact"*/
/*  *   view mode.*/
/*  * - metadata: Metadata for this node.*/
/*  * - date: Themed creation date field.*/
/*  * - author_name: Themed author name field.*/
/*  * - url: Direct URL of the current node.*/
/*  * - display_submitted: Whether submission information should be displayed.*/
/*  * - attributes: HTML attributes for the containing element.*/
/*  *   The attributes.class element may contain one or more of the following*/
/*  *   classes:*/
/*  *   - node: The current template type (also known as a "theming hook").*/
/*  *   - node--type-[type]: The current node type. For example, if the node is an*/
/*  *     "Article" it would result in "node--type-article". Note that the machine*/
/*  *     name will often be in a short form of the human readable label.*/
/*  *   - node--view-mode-[view_mode]: The View Mode of the node; for example, a*/
/*  *     teaser would result in: "node--view-mode-teaser", and*/
/*  *     full: "node--view-mode-full".*/
/*  *   The following are controlled through the node publishing options.*/
/*  *   - node--promoted: Appears on nodes promoted to the front page.*/
/*  *   - node--sticky: Appears on nodes ordered above other non-sticky nodes in*/
/*  *     teaser listings.*/
/*  *   - node--unpublished: Appears on unpublished nodes visible only to site*/
/*  *     admins.*/
/*  * - title_attributes: Same as attributes, except applied to the main title*/
/*  *   tag that appears in the template.*/
/*  * - content_attributes: Same as attributes, except applied to the main*/
/*  *   content tag that appears in the template.*/
/*  * - author_attributes: Same as attributes, except applied to the author of*/
/*  *   the node tag that appears in the template.*/
/*  * - title_prefix: Additional output populated by modules, intended to be*/
/*  *   displayed in front of the main title tag that appears in the template.*/
/*  * - title_suffix: Additional output populated by modules, intended to be*/
/*  *   displayed after the main title tag that appears in the template.*/
/*  * - view_mode: View mode; for example, "teaser" or "full".*/
/*  * - teaser: Flag for the teaser state. Will be true if view_mode is 'teaser'.*/
/*  * - page: Flag for the full page state. Will be true if view_mode is 'full'.*/
/*  * - readmore: Flag for more state. Will be true if the teaser content of the*/
/*  *   node cannot hold the main body content.*/
/*  * - logged_in: Flag for authenticated user status. Will be true when the*/
/*  *   current user is a logged-in member.*/
/*  * - is_admin: Flag for admin user status. Will be true when the current user*/
/*  *   is an administrator.*/
/*  **/
/*  * @see template_preprocess_node()*/
/*  **/
/*  * @todo Remove the id attribute (or make it a class), because if that gets*/
/*  *   rendered twice on a page this is invalid CSS for example: two lists*/
/*  *   in different view modes.*/
/*  **/
/*  * @ingroup themeable*/
/*  *//* */
/* #}*/
/* {# Add wrapper classes #}*/
/* {% set wrapper_classes = [*/
/*   'region-full-content',*/
/*   'infinite-item',*/
/*   'region-infinite-block',*/
/*  ]*/
/* %}*/
/* */
/* {# Add data attributes #}*/
/* {% set wrapper_attributes = wrapper_attributes.setAttribute('data-view-type', 'infiniteBlockView') %}*/
/* {% set wrapper_attributes = wrapper_attributes.setAttribute('data-history-url', path) %}*/
/* {% set wrapper_attributes = wrapper_attributes.setAttribute('data-history-title', node_seo_title) %}*/
/* {% if adsc_adunit1 is not empty %}*/
/*   {% set wrapper_attributes = wrapper_attributes.setAttribute('data-adsc-adunit1', adsc_adunit1) %}*/
/* {% endif %}*/
/* {% if adsc_adunit2 is not empty %}*/
/*   {% set wrapper_attributes = wrapper_attributes.setAttribute('data-adsc-adunit2', adsc_adunit2) %}*/
/* {% endif %}*/
/* {% if adsc_adunit3 is not empty %}*/
/*   {% set wrapper_attributes = wrapper_attributes.setAttribute('data-adsc-adunit3', adsc_adunit3) %}*/
/* {% endif %}*/
/* {% if adsc_keyword is not empty %}*/
/*   {% set wrapper_attributes = wrapper_attributes.setAttribute('data-adsc-keyword', adsc_keyword) %}*/
/* {% endif %}*/
/* {% set wrapper_attributes = wrapper_attributes.setAttribute('data-nid', nid) %}*/
/* */
/* {# Add data attribute data-no-track only for view mode full #}*/
/* {% if view_mode == 'full' %}*/
/*   {% set wrapper_attributes = wrapper_attributes.setAttribute('data-no-track', 'true') %}*/
/* {% endif %}*/
/* */
/* <div{{ wrapper_attributes.addClass(wrapper_classes) }}  >*/
/*   {% block article_header_blocks %}*/
/*     {{ content.field_header_blocks }}*/
/*   {% endblock %}*/
/*   {% block article_node_content %}*/
/*     {% include '@infinite/node/node--article.html.twig' %}*/
/*   {% endblock %}*/
/*   {% block article_footer_blocks_lazyloading %}{% endblock %}*/
/* </div>*/
/* */
/* {% if block('article_footer_blocks_full') is not empty %}*/
/*   <div class="region-full-content region-feed" data-view-type="feedView">*/
/*     {% block article_footer_blocks_full %}*/
/*       {% if view_mode == 'full' and content.field_footer_blocks | render %}*/
/*         {{ content.field_footer_blocks }}*/
/*         <div class="container-content container-content-dynamic container-feed-items"></div>*/
/*       {% endif %}*/
/*     {% endblock %}*/
/*   </div>*/
/* {% endif %}*/
/* */
