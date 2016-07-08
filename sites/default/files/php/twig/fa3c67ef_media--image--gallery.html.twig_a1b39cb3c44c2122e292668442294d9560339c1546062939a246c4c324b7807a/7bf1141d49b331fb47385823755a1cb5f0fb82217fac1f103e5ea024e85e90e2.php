<?php

/* profiles/thunder/themes/infinite/templates/media/media--image--gallery.html.twig */
class __TwigTemplate_c8f91bf282975e335062ea11e05664b2c352363b060fac3b1521ad86780a98f7 extends Twig_Template
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
        $tags = array("if" => 15, "include" => 18);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if', 'include'),
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

        // line 15
        if ((isset($context["content"]) ? $context["content"] : null)) {
            // line 16
            echo "    <div class=\"swiper-slide\">
        <div class=\"item-media item-media-image ";
            // line 17
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["calculated_dimension"]) ? $context["calculated_dimension"] : null), "html", null, true));
            echo "\">
            ";
            // line 18
            $this->loadTemplate("@infinite/media/media--image-base.html.twig", "profiles/thunder/themes/infinite/templates/media/media--image--gallery.html.twig", 18)->display($context);
            // line 19
            echo "        </div>
    </div>
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/media/media--image--gallery.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  54 => 19,  52 => 18,  48 => 17,  45 => 16,  43 => 15,);
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
/* {% if content %}*/
/*     <div class="swiper-slide">*/
/*         <div class="item-media item-media-image {{ calculated_dimension }}">*/
/*             {% include '@infinite/media/media--image-base.html.twig' %}*/
/*         </div>*/
/*     </div>*/
/* {% endif %}*/
/* */
