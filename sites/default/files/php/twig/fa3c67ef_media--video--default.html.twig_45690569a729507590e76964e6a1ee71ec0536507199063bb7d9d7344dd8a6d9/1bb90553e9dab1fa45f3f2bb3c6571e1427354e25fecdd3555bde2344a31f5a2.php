<?php

/* profiles/thunder/themes/infinite/templates/media/media--video--default.html.twig */
class __TwigTemplate_b031f910a442c83156ad4aae8bbbef13387a41c0e0eed1b55b82dac5d4905e6c extends Twig_Template
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
        $tags = array("if" => 15);
        $filters = array("render" => 20);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if'),
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

        // line 15
        if ((isset($context["content"]) ? $context["content"] : null)) {
            // line 16
            echo "    <div class=\"embed-responsive embed-responsive-16by9 video-container\" itemscope=\"\" itemtype=\"http://schema.org/videoObject\">
        ";
            // line 17
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_media_video_embed_field", array()), "html", null, true));
            echo "
    </div>
    <div class=\"caption\">
        ";
            // line 20
            if ($this->env->getExtension('drupal_core')->renderVar($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_copyright", array()))) {
                // line 21
                echo "            <div class=\"text-copyright\">";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_copyright", array()), "html", null, true));
                echo "</div>
        ";
            }
            // line 23
            echo "        ";
            if ($this->env->getExtension('drupal_core')->renderVar($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_description", array()))) {
                // line 24
                echo "            <div class=\"text-description\">";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_description", array()), "html", null, true));
                echo "</div>
        ";
            }
            // line 26
            echo "
        <div class=\"socials socials-bar\">
            <div class=\"item-social icon-facebook\" data-url=\"";
            // line 28
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_media_video_embed_field", array()), 0, array()), "children", array(), "array"), "#url", array(), "array"), "html", null, true));
            echo "\"  data-social-type=\"facebook\"></div>
        </div>
    </div>
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/media/media--video--default.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  75 => 28,  71 => 26,  65 => 24,  62 => 23,  56 => 21,  54 => 20,  48 => 17,  45 => 16,  43 => 15,);
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
/*     <div class="embed-responsive embed-responsive-16by9 video-container" itemscope="" itemtype="http://schema.org/videoObject">*/
/*         {{ content.field_media_video_embed_field }}*/
/*     </div>*/
/*     <div class="caption">*/
/*         {% if content.field_copyright|render  %}*/
/*             <div class="text-copyright">{{ content.field_copyright }}</div>*/
/*         {% endif %}*/
/*         {% if content.field_description|render %}*/
/*             <div class="text-description">{{ content.field_description }}</div>*/
/*         {% endif %}*/
/* */
/*         <div class="socials socials-bar">*/
/*             <div class="item-social icon-facebook" data-url="{{ content.field_media_video_embed_field.0['children']['#url'] }}"  data-social-type="facebook"></div>*/
/*         </div>*/
/*     </div>*/
/* {% endif %}*/
/* */
