<?php

/* @infinite/node/node--article--teaser-default.html.twig */
class __TwigTemplate_b45889cfceb88b8080e51ee6cfc7319eff324e19d41e27d79ceb570e00187a1b extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'teaser_img_container' => array($this, 'block_teaser_img_container'),
            'teaser_caption_channel' => array($this, 'block_teaser_caption_channel'),
            'sponsored' => array($this, 'block_sponsored'),
            'teaser_text_headline' => array($this, 'block_teaser_text_headline'),
            'teaser_author' => array($this, 'block_teaser_author'),
            'teaser_content' => array($this, 'block_teaser_content'),
            'teaser_social_bar' => array($this, 'block_teaser_social_bar'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 2, "block" => 12, "if" => 49, "include" => 27, "embed" => 43);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('set', 'block', 'if', 'include', 'embed'),
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

        // line 2
        $context["wrapper_classes"] = array(0 => "teaser", 1 => "contextual-region");
        // line 7
        echo "
";
        // line 8
        $context["attributes"] = $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "setAttribute", array(0 => "data-nid", 1 => (isset($context["nid"]) ? $context["nid"] : null)), "method");
        // line 9
        echo "
<article";
        // line 10
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["wrapper_classes"]) ? $context["wrapper_classes"] : null)), "method"), "html", null, true));
        echo ">
  <div class=\"img-container\" itemscope=\"\" itemtype=\"http://schema.org/imageObject\" data-internal-url=\"";
        // line 11
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["url"]) ? $context["url"] : null), "html", null, true));
        echo "\">
    ";
        // line 12
        $this->displayBlock('teaser_img_container', $context, $blocks);
        // line 19
        echo "  </div>

  <div class=\"caption caption-teaser\">
    ";
        // line 22
        $this->displayBlock('teaser_caption_channel', $context, $blocks);
        // line 25
        echo "
    ";
        // line 26
        $this->displayBlock('sponsored', $context, $blocks);
        // line 29
        echo "
    ";
        // line 30
        $this->displayBlock('teaser_text_headline', $context, $blocks);
        // line 35
        echo "
    <header>
      ";
        // line 37
        $this->displayBlock('teaser_author', $context, $blocks);
        // line 40
        echo "      ";
        $this->displayBlock('teaser_content', $context, $blocks);
        // line 41
        echo "      <div class=\"socials socials-bar\">
        ";
        // line 42
        $this->displayBlock('teaser_social_bar', $context, $blocks);
        // line 46
        echo "      </div>
    </header>
  </div>
  ";
        // line 49
        if ((isset($context["show_contextual_links"]) ? $context["show_contextual_links"] : null)) {
            // line 50
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["title_suffix"]) ? $context["title_suffix"] : null), "contextual_links", array()), "html", null, true));
            echo "
  ";
        }
        // line 52
        echo "</article>
";
    }

    // line 12
    public function block_teaser_img_container($context, array $blocks = array())
    {
        // line 13
        echo "      ";
        if ((((isset($context["view_mode"]) ? $context["view_mode"] : null) == "presenter_half") &&  !twig_test_empty($this->getAttribute($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_presenter_media", array()), "#items", array(), "array")))) {
            // line 14
            echo "        ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_presenter_media", array()), "html", null, true));
            echo "
      ";
        } else {
            // line 16
            echo "        ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_teaser_media", array()), "html", null, true));
            echo "
      ";
        }
        // line 18
        echo "    ";
    }

    // line 22
    public function block_teaser_caption_channel($context, array $blocks = array())
    {
        // line 23
        echo "      ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_channel", array()), "html", null, true));
        echo "
    ";
    }

    // line 26
    public function block_sponsored($context, array $blocks = array())
    {
        // line 27
        echo "        ";
        $this->loadTemplate("@infinite/node/twig-block-sponsored.html.twig", "@infinite/node/node--article--teaser-default.html.twig", 27)->display($context);
        // line 28
        echo "    ";
    }

    // line 30
    public function block_teaser_text_headline($context, array $blocks = array())
    {
        // line 31
        echo "      <h2 class=\"text-headline\">
        <a href=\"";
        // line 32
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["url"]) ? $context["url"] : null), "html", null, true));
        echo "\" target=\"_self\" rel=\"bookmark\">";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
        echo "</a>
      </h2>
    ";
    }

    // line 37
    public function block_teaser_author($context, array $blocks = array())
    {
        // line 38
        echo "        ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["author_teaser"]) ? $context["author_teaser"] : null), "html", null, true));
        echo "
      ";
    }

    // line 40
    public function block_teaser_content($context, array $blocks = array())
    {
    }

    // line 42
    public function block_teaser_social_bar($context, array $blocks = array())
    {
        // line 43
        echo "          ";
        $this->loadTemplate("@infinite/node/node--article--teaser-default.html.twig", "@infinite/node/node--article--teaser-default.html.twig", 43, "1071501207")->display(array_merge($context, array("facebook_share_button" => "", "whatsapp_share_button" => "", "pinterest_share_button" => "", "twitter_share_button" => "", "email_share_button" => "")));
        // line 45
        echo "        ";
    }

    public function getTemplateName()
    {
        return "@infinite/node/node--article--teaser-default.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  197 => 45,  194 => 43,  191 => 42,  186 => 40,  179 => 38,  176 => 37,  167 => 32,  164 => 31,  161 => 30,  157 => 28,  154 => 27,  151 => 26,  144 => 23,  141 => 22,  137 => 18,  131 => 16,  125 => 14,  122 => 13,  119 => 12,  114 => 52,  108 => 50,  106 => 49,  101 => 46,  99 => 42,  96 => 41,  93 => 40,  91 => 37,  87 => 35,  85 => 30,  82 => 29,  80 => 26,  77 => 25,  75 => 22,  70 => 19,  68 => 12,  64 => 11,  60 => 10,  57 => 9,  55 => 8,  52 => 7,  50 => 2,);
    }
}


/* @infinite/node/node--article--teaser-default.html.twig */
class __TwigTemplate_b45889cfceb88b8080e51ee6cfc7319eff324e19d41e27d79ceb570e00187a1b_1071501207 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 43
        $this->parent = $this->loadTemplate("@infinite/embeds/social_icons.html.twig", "@infinite/node/node--article--teaser-default.html.twig", 43);
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
        return "@infinite/node/node--article--teaser-default.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  225 => 43,  197 => 45,  194 => 43,  191 => 42,  186 => 40,  179 => 38,  176 => 37,  167 => 32,  164 => 31,  161 => 30,  157 => 28,  154 => 27,  151 => 26,  144 => 23,  141 => 22,  137 => 18,  131 => 16,  125 => 14,  122 => 13,  119 => 12,  114 => 52,  108 => 50,  106 => 49,  101 => 46,  99 => 42,  96 => 41,  93 => 40,  91 => 37,  87 => 35,  85 => 30,  82 => 29,  80 => 26,  77 => 25,  75 => 22,  70 => 19,  68 => 12,  64 => 11,  60 => 10,  57 => 9,  55 => 8,  52 => 7,  50 => 2,);
    }
}
/* {# Add wrapper classes #}*/
/* {% set wrapper_classes = [*/
/* 'teaser',*/
/* 'contextual-region',*/
/* ]*/
/* %}*/
/* */
/* {% set attributes = attributes.setAttribute('data-nid', nid) %}*/
/* */
/* <article{{ attributes.addClass(wrapper_classes) }}>*/
/*   <div class="img-container" itemscope="" itemtype="http://schema.org/imageObject" data-internal-url="{{ url }}">*/
/*     {% block teaser_img_container %}*/
/*       {% if (view_mode == 'presenter_half' and content.field_presenter_media['#items'] is not empty) %}*/
/*         {{ content.field_presenter_media }}*/
/*       {% else %}*/
/*         {{ content.field_teaser_media }}*/
/*       {% endif %}*/
/*     {% endblock %}*/
/*   </div>*/
/* */
/*   <div class="caption caption-teaser">*/
/*     {% block teaser_caption_channel %}*/
/*       {{ content.field_channel }}*/
/*     {% endblock %}*/
/* */
/*     {% block sponsored %}*/
/*         {% include '@infinite/node/twig-block-sponsored.html.twig' %}*/
/*     {% endblock %}*/
/* */
/*     {% block teaser_text_headline %}*/
/*       <h2 class="text-headline">*/
/*         <a href="{{ url }}" target="_self" rel="bookmark">{{ label }}</a>*/
/*       </h2>*/
/*     {% endblock %}*/
/* */
/*     <header>*/
/*       {% block teaser_author %}*/
/*         {{ author_teaser }}*/
/*       {% endblock %}*/
/*       {% block teaser_content %}{% endblock %}*/
/*       <div class="socials socials-bar">*/
/*         {% block teaser_social_bar %}*/
/*           {% embed '@infinite/embeds/social_icons.html.twig' with {'facebook_share_button': '', 'whatsapp_share_button': '', 'pinterest_share_button': '', 'twitter_share_button': '', 'email_share_button': ''}  %}*/
/*           {% endembed %}*/
/*         {% endblock %}*/
/*       </div>*/
/*     </header>*/
/*   </div>*/
/*   {% if (show_contextual_links) %}*/
/*     {{ title_suffix.contextual_links }}*/
/*   {% endif %}*/
/* </article>*/
/* */
