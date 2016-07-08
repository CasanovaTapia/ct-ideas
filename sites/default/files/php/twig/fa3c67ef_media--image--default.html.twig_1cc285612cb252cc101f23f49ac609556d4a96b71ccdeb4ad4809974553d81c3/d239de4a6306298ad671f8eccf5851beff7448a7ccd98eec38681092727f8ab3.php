<?php

/* profiles/thunder/themes/infinite/templates/media/media--image--default.html.twig */
class __TwigTemplate_3ca1d23705b79a26215eb61ec3a5f98998ce879634c595135669f1e8525ff2cd extends Twig_Template
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
        $tags = array("if" => 15, "include" => 17);
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
            echo "    <div class=\"item-media item-media-image ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["calculated_dimension"]) ? $context["calculated_dimension"] : null), "html", null, true));
            echo "\">
        ";
            // line 17
            $this->loadTemplate("@infinite/media/media--image-base.html.twig", "profiles/thunder/themes/infinite/templates/media/media--image--default.html.twig", 17)->display($context);
            // line 18
            echo "    </div>
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/media/media--image--default.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  52 => 18,  50 => 17,  45 => 16,  43 => 15,);
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
/*     <div class="item-media item-media-image {{ calculated_dimension }}">*/
/*         {% include '@infinite/media/media--image-base.html.twig' %}*/
/*     </div>*/
/* {% endif %}*/
/* */
