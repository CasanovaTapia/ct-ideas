<?php

/* profiles/thunder/themes/infinite/templates/node/node--article--teaser-square-s.html.twig */
class __TwigTemplate_34d682b0b9be48c58d9373c9d52d81a21af81b0dae1165488e64c577cf0605c7 extends Twig_Template
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
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 2, "block" => 14, "if" => 35, "include" => 24);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('set', 'block', 'if', 'include'),
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
        $context["wrapper_classes"] = array(0 => "teaser", 1 => "teaser-square-small", 2 => "swipeable__item", 3 => "contextual-region");
        // line 9
        $context["attributes"] = $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "setAttribute", array(0 => "data-nid", 1 => (isset($context["nid"]) ? $context["nid"] : null)), "method");
        // line 10
        $context["attributes"] = $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "setAttribute", array(0 => "data-internal-url", 1 => (isset($context["url"]) ? $context["url"] : null)), "method");
        // line 11
        echo "
<article";
        // line 12
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["wrapper_classes"]) ? $context["wrapper_classes"] : null)), "method"), "html", null, true));
        echo ">
  <div class=\"img-container\" itemscope=\"\" itemtype=\"http://schema.org/imageObject\">
    ";
        // line 14
        $this->displayBlock('teaser_img_container', $context, $blocks);
        // line 17
        echo "  </div>

  <div class=\"caption caption-teaser\">

    ";
        // line 21
        $this->displayBlock('teaser_caption_channel', $context, $blocks);
        // line 22
        echo "
    ";
        // line 23
        $this->displayBlock('sponsored', $context, $blocks);
        // line 26
        echo "
    ";
        // line 27
        $this->displayBlock('teaser_text_headline', $context, $blocks);
        // line 32
        echo "
  </div>

  ";
        // line 35
        if ((isset($context["show_contextual_links"]) ? $context["show_contextual_links"] : null)) {
            // line 36
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["title_suffix"]) ? $context["title_suffix"] : null), "contextual_links", array()), "html", null, true));
            echo "
  ";
        }
        // line 38
        echo "
</article>
";
    }

    // line 14
    public function block_teaser_img_container($context, array $blocks = array())
    {
        // line 15
        echo "      ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_teaser_media", array()), "html", null, true));
        echo "
    ";
    }

    // line 21
    public function block_teaser_caption_channel($context, array $blocks = array())
    {
    }

    // line 23
    public function block_sponsored($context, array $blocks = array())
    {
        // line 24
        echo "      ";
        $this->loadTemplate("@infinite/node/twig-block-sponsored.html.twig", "profiles/thunder/themes/infinite/templates/node/node--article--teaser-square-s.html.twig", 24)->display($context);
        // line 25
        echo "    ";
    }

    // line 27
    public function block_teaser_text_headline($context, array $blocks = array())
    {
        // line 28
        echo "      <h2 class=\"text-headline\">
        <a href=\"";
        // line 29
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["url"]) ? $context["url"] : null), "html", null, true));
        echo "\" target=\"_self\">";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
        echo "</a>
      </h2>
    ";
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/node/node--article--teaser-square-s.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  131 => 29,  128 => 28,  125 => 27,  121 => 25,  118 => 24,  115 => 23,  110 => 21,  103 => 15,  100 => 14,  94 => 38,  88 => 36,  86 => 35,  81 => 32,  79 => 27,  76 => 26,  74 => 23,  71 => 22,  69 => 21,  63 => 17,  61 => 14,  56 => 12,  53 => 11,  51 => 10,  49 => 9,  47 => 2,);
    }
}
/* {%*/
/*   set wrapper_classes = [*/
/*     'teaser',*/
/*     'teaser-square-small',*/
/*     'swipeable__item',*/
/*     'contextual-region',*/
/*   ]*/
/* %}*/
/* {% set attributes = attributes.setAttribute('data-nid', nid) %}*/
/* {% set attributes = attributes.setAttribute('data-internal-url', url) %}*/
/* */
/* <article{{ attributes.addClass(wrapper_classes) }}>*/
/*   <div class="img-container" itemscope="" itemtype="http://schema.org/imageObject">*/
/*     {% block teaser_img_container %}*/
/*       {{ content.field_teaser_media }}*/
/*     {% endblock %}*/
/*   </div>*/
/* */
/*   <div class="caption caption-teaser">*/
/* */
/*     {% block teaser_caption_channel %}{% endblock %}*/
/* */
/*     {% block sponsored %}*/
/*       {% include '@infinite/node/twig-block-sponsored.html.twig' %}*/
/*     {% endblock %}*/
/* */
/*     {% block teaser_text_headline %}*/
/*       <h2 class="text-headline">*/
/*         <a href="{{ url }}" target="_self">{{ label }}</a>*/
/*       </h2>*/
/*     {% endblock %}*/
/* */
/*   </div>*/
/* */
/*   {% if (show_contextual_links) %}*/
/*     {{ title_suffix.contextual_links }}*/
/*   {% endif %}*/
/* */
/* </article>*/
/* */
