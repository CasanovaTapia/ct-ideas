<?php

/* profiles/thunder/themes/infinite/templates/media/media--gallery.html.twig */
class __TwigTemplate_34cda6e4397839ef0b5fccfd303c728bc45fdfc42714c6df70399bc54adadc0c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 16, "if" => 18);
        $filters = array("length" => 16);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('set', 'if'),
                array('length'),
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

        // line 15
        echo "
";
        // line 16
        $context["count"] = twig_length_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_media_images", array()), "#items", array(), "array"));
        // line 17
        echo "
";
        // line 18
        if ((isset($context["content"]) ? $context["content"] : null)) {
            // line 19
            echo "    <div class=\"item-media-gallery gallery-container\" data-view-type=\"galleryView\" data-media-id=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["media_id"]) ? $context["media_id"] : null), "html", null, true));
            echo "\">
        <div class=\"gallery-header\">
            <div class=\"text-item-count\"><span>1</span> / ";
            // line 21
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["count"]) ? $context["count"] : null), "html", null, true));
            echo "</div>
            <div class=\"gallery-navigation\">
                <span class=\"icon icon-gallery-arrow-left swiper-button-prev\"></span>
                <span class=\"icon icon-gallery-arrow-right swiper-button-next\"></span>
            </div>
        </div>
        <div class=\"gallery-wrapper swiper-wrapper\">
            ";
            // line 28
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_media_images", array()), "html", null, true));
            echo "
        </div>
    </div>
";
        }
        // line 32
        echo "
";
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/media/media--gallery.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  76 => 32,  69 => 28,  59 => 21,  53 => 19,  51 => 18,  48 => 17,  46 => 16,  43 => 15,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Default theme implementation to present a media entity.*/
/*  **/
/*  * Available variables:*/
/*  * - name: Name of the media.*/
/*  * - content: Media content.*/
/*  **/
/*  * @see template_preprocess_media()*/
/*  **/
/*  * @ingroup themeable*/
/*  *//* */
/* #}*/
/* */
/* {% set count = content.field_media_images['#items']|length %}*/
/* */
/* {% if content %}*/
/*     <div class="item-media-gallery gallery-container" data-view-type="galleryView" data-media-id="{{ media_id }}">*/
/*         <div class="gallery-header">*/
/*             <div class="text-item-count"><span>1</span> / {{ count }}</div>*/
/*             <div class="gallery-navigation">*/
/*                 <span class="icon icon-gallery-arrow-left swiper-button-prev"></span>*/
/*                 <span class="icon icon-gallery-arrow-right swiper-button-next"></span>*/
/*             </div>*/
/*         </div>*/
/*         <div class="gallery-wrapper swiper-wrapper">*/
/*             {{ content.field_media_images }}*/
/*         </div>*/
/*     </div>*/
/* {% endif %}*/
/* */
/* */
