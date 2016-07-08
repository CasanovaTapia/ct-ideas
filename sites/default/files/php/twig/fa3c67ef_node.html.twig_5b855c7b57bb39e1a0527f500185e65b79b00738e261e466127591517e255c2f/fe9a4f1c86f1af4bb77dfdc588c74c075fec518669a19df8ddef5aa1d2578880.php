<?php

/* @infinite/node/node.html.twig */
class __TwigTemplate_65864d892824445d75a6a2bd1fd1d43eb8cf34d7ea40636506784c27ef900a87 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'content_header' => array($this, 'block_content_header'),
            'content_highlighted_below_header' => array($this, 'block_content_highlighted_below_header'),
            'socials_vertical_bar' => array($this, 'block_socials_vertical_bar'),
            'content_highlighted' => array($this, 'block_content_highlighted'),
            'content_body' => array($this, 'block_content_body'),
            'socials_horizontal_bar' => array($this, 'block_socials_horizontal_bar'),
            'content_sidebar' => array($this, 'block_content_sidebar'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("block" => 72, "if" => 76, "embed" => 85);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('block', 'if', 'embed'),
                array(),
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

        // line 70
        echo "<article ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => "region-full-content item-content item-content--article"), "method"), "html", null, true));
        echo " data-view-type=\"articleView\">
  <div class=\"item-content__header\">
    ";
        // line 72
        $this->displayBlock('content_header', $context, $blocks);
        // line 75
        echo "  </div>
  ";
        // line 76
        if ( !twig_test_empty($this->renderBlock("content_highlighted_below_header", $context, $blocks))) {
            // line 77
            echo "    <div class=\"item-content-highlighted-below-header container-fixed-content\">
      ";
            // line 78
            $this->displayBlock('content_highlighted_below_header', $context, $blocks);
            // line 80
            echo "    </div>
  ";
        }
        // line 82
        echo "  <div class=\"item-content-column region-fixed-content\">
    <aside class=\"socials socials-bar socials-vertical-bar\" data-view-type=\"stickyView\">
      ";
        // line 84
        $this->displayBlock('socials_vertical_bar', $context, $blocks);
        // line 88
        echo "    </aside>
    ";
        // line 89
        if ( !twig_test_empty($this->renderBlock("content_highlighted", $context, $blocks))) {
            // line 90
            echo "      <div class=\"item-content-highlighted\">
        ";
            // line 91
            $this->displayBlock('content_highlighted', $context, $blocks);
            // line 92
            echo "      </div>
    ";
        }
        // line 94
        echo "    <div class=\"container-row\">
      <div class=\"container-row-body item-content-body\">
        ";
        // line 96
        $this->displayBlock('content_body', $context, $blocks);
        // line 99
        echo "        <div class=\"socials socials-bar socials-horizontal-bar item-block\">
          ";
        // line 100
        $this->displayBlock('socials_horizontal_bar', $context, $blocks);
        // line 104
        echo "        </div>
      </div>
      <div class=\"container-row-sidebar item-content-sidebar\">
        ";
        // line 107
        if ( !twig_test_empty($this->renderBlock("content_sidebar", $context, $blocks))) {
            // line 108
            echo "          <div class=\"item-sticky\" data-view-type=\"stickyView\">
            ";
            // line 109
            $this->displayBlock('content_sidebar', $context, $blocks);
            // line 114
            echo "          </div>
        ";
        }
        // line 116
        echo "      </div>
    </div>
  </div>
</article>
";
    }

    // line 72
    public function block_content_header($context, array $blocks = array())
    {
        // line 73
        echo "      <h1 class=\"title--article\">";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
        echo "</h1>
    ";
    }

    // line 78
    public function block_content_highlighted_below_header($context, array $blocks = array())
    {
        // line 79
        echo "      ";
    }

    // line 84
    public function block_socials_vertical_bar($context, array $blocks = array())
    {
        // line 85
        echo "        ";
        $this->loadTemplate("@infinite/node/node.html.twig", "@infinite/node/node.html.twig", 85, "1082561529")->display(array_merge($context, array("facebook_share_button" => "", "whatsapp_share_button" => "", "pinterest_share_button" => "", "twitter_share_button" => "", "email_share_button" => "")));
        // line 87
        echo "      ";
    }

    // line 91
    public function block_content_highlighted($context, array $blocks = array())
    {
    }

    // line 96
    public function block_content_body($context, array $blocks = array())
    {
        // line 97
        echo "          ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["content"]) ? $context["content"] : null), "html", null, true));
        echo "
        ";
    }

    // line 100
    public function block_socials_horizontal_bar($context, array $blocks = array())
    {
        // line 101
        echo "            ";
        $this->loadTemplate("@infinite/node/node.html.twig", "@infinite/node/node.html.twig", 101, "1582139180")->display($context);
        // line 103
        echo "          ";
    }

    // line 109
    public function block_content_sidebar($context, array $blocks = array())
    {
        // line 110
        echo "              ";
        if ($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_sidebar_blocks", array())) {
            // line 111
            echo "                ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_sidebar_blocks", array()), "html", null, true));
            echo "
              ";
        }
        // line 113
        echo "            ";
    }

    public function getTemplateName()
    {
        return "@infinite/node/node.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  191 => 113,  185 => 111,  182 => 110,  179 => 109,  175 => 103,  172 => 101,  169 => 100,  162 => 97,  159 => 96,  154 => 91,  150 => 87,  147 => 85,  144 => 84,  140 => 79,  137 => 78,  130 => 73,  127 => 72,  119 => 116,  115 => 114,  113 => 109,  110 => 108,  108 => 107,  103 => 104,  101 => 100,  98 => 99,  96 => 96,  92 => 94,  88 => 92,  86 => 91,  83 => 90,  81 => 89,  78 => 88,  76 => 84,  72 => 82,  68 => 80,  66 => 78,  63 => 77,  61 => 76,  58 => 75,  56 => 72,  50 => 70,);
    }
}


/* @infinite/node/node.html.twig */
class __TwigTemplate_65864d892824445d75a6a2bd1fd1d43eb8cf34d7ea40636506784c27ef900a87_1082561529 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 85
        $this->parent = $this->loadTemplate("@infinite/embeds/social_icons.html.twig", "@infinite/node/node.html.twig", 85);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "@infinite/embeds/social_icons.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array();
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array(),
                array(),
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

        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "@infinite/node/node.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  219 => 85,  191 => 113,  185 => 111,  182 => 110,  179 => 109,  175 => 103,  172 => 101,  169 => 100,  162 => 97,  159 => 96,  154 => 91,  150 => 87,  147 => 85,  144 => 84,  140 => 79,  137 => 78,  130 => 73,  127 => 72,  119 => 116,  115 => 114,  113 => 109,  110 => 108,  108 => 107,  103 => 104,  101 => 100,  98 => 99,  96 => 96,  92 => 94,  88 => 92,  86 => 91,  83 => 90,  81 => 89,  78 => 88,  76 => 84,  72 => 82,  68 => 80,  66 => 78,  63 => 77,  61 => 76,  58 => 75,  56 => 72,  50 => 70,);
    }
}


/* @infinite/node/node.html.twig */
class __TwigTemplate_65864d892824445d75a6a2bd1fd1d43eb8cf34d7ea40636506784c27ef900a87_1582139180 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 101
        $this->parent = $this->loadTemplate("@infinite/embeds/social_icons.html.twig", "@infinite/node/node.html.twig", 101);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "@infinite/embeds/social_icons.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array();
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array(),
                array(),
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

        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "@infinite/node/node.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  283 => 101,  219 => 85,  191 => 113,  185 => 111,  182 => 110,  179 => 109,  175 => 103,  172 => 101,  169 => 100,  162 => 97,  159 => 96,  154 => 91,  150 => 87,  147 => 85,  144 => 84,  140 => 79,  137 => 78,  130 => 73,  127 => 72,  119 => 116,  115 => 114,  113 => 109,  110 => 108,  108 => 107,  103 => 104,  101 => 100,  98 => 99,  96 => 96,  92 => 94,  88 => 92,  86 => 91,  83 => 90,  81 => 89,  78 => 88,  76 => 84,  72 => 82,  68 => 80,  66 => 78,  63 => 77,  61 => 76,  58 => 75,  56 => 72,  50 => 70,);
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
/* <article {{ attributes.addClass('region-full-content item-content item-content--article') }} data-view-type="articleView">*/
/*   <div class="item-content__header">*/
/*     {% block content_header %}*/
/*       <h1 class="title--article">{{ label }}</h1>*/
/*     {% endblock %}*/
/*   </div>*/
/*   {% if block('content_highlighted_below_header') is not empty %}*/
/*     <div class="item-content-highlighted-below-header container-fixed-content">*/
/*       {% block content_highlighted_below_header %}*/
/*       {% endblock %}*/
/*     </div>*/
/*   {% endif %}*/
/*   <div class="item-content-column region-fixed-content">*/
/*     <aside class="socials socials-bar socials-vertical-bar" data-view-type="stickyView">*/
/*       {% block socials_vertical_bar %}*/
/*         {% embed '@infinite/embeds/social_icons.html.twig' with {'facebook_share_button': '', 'whatsapp_share_button': '', 'pinterest_share_button': '', 'twitter_share_button': '', 'email_share_button': ''}  %}*/
/*         {% endembed %}*/
/*       {% endblock %}*/
/*     </aside>*/
/*     {% if block('content_highlighted') is not empty %}*/
/*       <div class="item-content-highlighted">*/
/*         {% block content_highlighted %}{% endblock %}*/
/*       </div>*/
/*     {% endif %}*/
/*     <div class="container-row">*/
/*       <div class="container-row-body item-content-body">*/
/*         {% block content_body %}*/
/*           {{ content }}*/
/*         {% endblock %}*/
/*         <div class="socials socials-bar socials-horizontal-bar item-block">*/
/*           {% block socials_horizontal_bar %}*/
/*             {% embed '@infinite/embeds/social_icons.html.twig' %}*/
/*             {% endembed %}*/
/*           {% endblock %}*/
/*         </div>*/
/*       </div>*/
/*       <div class="container-row-sidebar item-content-sidebar">*/
/*         {% if block('content_sidebar') is not empty %}*/
/*           <div class="item-sticky" data-view-type="stickyView">*/
/*             {% block content_sidebar %}*/
/*               {% if content.field_sidebar_blocks %}*/
/*                 {{ content.field_sidebar_blocks }}*/
/*               {% endif %}*/
/*             {% endblock %}*/
/*           </div>*/
/*         {% endif %}*/
/*       </div>*/
/*     </div>*/
/*   </div>*/
/* </article>*/
/* */
