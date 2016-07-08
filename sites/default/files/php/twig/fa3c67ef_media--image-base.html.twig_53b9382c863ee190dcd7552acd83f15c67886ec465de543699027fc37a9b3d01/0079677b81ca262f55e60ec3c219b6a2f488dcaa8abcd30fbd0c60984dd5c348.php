<?php

/* @infinite/media/media--image-base.html.twig */
class __TwigTemplate_d2dc093997276d7063db86a9b121afc02a720462c8e22347df0e44b506174790 extends Twig_Template
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
        $tags = array("if" => 17);
        $filters = array("plain_text" => 22, "e" => 37);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if'),
                array('plain_text', 'e'),
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
        // line 17
        if ((isset($context["content"]) ? $context["content"] : null)) {
            // line 18
            echo "    <div class=\"img-container\" itemscope=\"\" itemtype=\"http://schema.org/imageObject\">
        ";
            // line 19
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_image", array()), "html", null, true));
            echo "
    </div>
    <div class=\"caption\">
        ";
            // line 22
            if (($this->env->getExtension('filter_extension')->plainText($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_copyright", array())) || $this->env->getExtension('filter_extension')->plainText($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_source", array())))) {
                // line 23
                echo "            <div class=\"text-copyright\">
                ";
                // line 24
                if ($this->env->getExtension('filter_extension')->plainText($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_copyright", array()))) {
                    // line 25
                    echo "                    <span>";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_copyright", array()), "html", null, true));
                    echo "</span>
                ";
                }
                // line 27
                echo "                ";
                if ($this->env->getExtension('filter_extension')->plainText($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_source", array()))) {
                    // line 28
                    echo "                    <span>";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_source", array()), "html", null, true));
                    echo "</span>
                ";
                }
                // line 30
                echo "            </div>
        ";
            }
            // line 32
            echo "        ";
            if ($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_description", array())) {
                // line 33
                echo "            <div class=\"text-description\">";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_description", array()), "html", null, true));
                echo "</div>
        ";
            }
            // line 35
            echo "
        <div class=\"socials socials-bar\">
            <div class=\"item-social icon-facebook\" data-url=\"";
            // line 37
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["absolute_node_url"]) ? $context["absolute_node_url"] : null), "html_attr"));
            echo "\" data-media-url=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["share_img_url"]) ? $context["share_img_url"] : null), "html_attr"));
            echo "\" data-description=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->env->getExtension('filter_extension')->plainText($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_description", array())), "html_attr"));
            echo "\" target=\"_blank\" data-social-type=\"facebook\"></div>
            <div class=\"item-social icon-pinterest\" data-url=\"";
            // line 38
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["absolute_node_url"]) ? $context["absolute_node_url"] : null), "html_attr"));
            echo "\" data-media-url=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["share_img_url"]) ? $context["share_img_url"] : null), "html_attr"));
            echo "\" data-description=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->env->getExtension('filter_extension')->plainText($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_description", array())), "html_attr"));
            echo "\" data-social-type=\"pinterest\"></div>
        </div>
    </div>
";
        }
    }

    public function getTemplateName()
    {
        return "@infinite/media/media--image-base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  105 => 38,  97 => 37,  93 => 35,  87 => 33,  84 => 32,  80 => 30,  74 => 28,  71 => 27,  65 => 25,  63 => 24,  60 => 23,  58 => 22,  52 => 19,  49 => 18,  47 => 17,  43 => 15,);
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
/* */
/* {% if content %}*/
/*     <div class="img-container" itemscope="" itemtype="http://schema.org/imageObject">*/
/*         {{ content.field_image }}*/
/*     </div>*/
/*     <div class="caption">*/
/*         {% if content.field_copyright | plain_text or content.field_source | plain_text %}*/
/*             <div class="text-copyright">*/
/*                 {% if content.field_copyright | plain_text %}*/
/*                     <span>{{ content.field_copyright }}</span>*/
/*                 {% endif %}*/
/*                 {% if content.field_source | plain_text %}*/
/*                     <span>{{ content.field_source }}</span>*/
/*                 {% endif %}*/
/*             </div>*/
/*         {% endif %}*/
/*         {% if content.field_description %}*/
/*             <div class="text-description">{{ content.field_description }}</div>*/
/*         {% endif %}*/
/* */
/*         <div class="socials socials-bar">*/
/*             <div class="item-social icon-facebook" data-url="{{ absolute_node_url | e('html_attr')}}" data-media-url="{{ share_img_url | e('html_attr')}}" data-description="{{ content.field_description | plain_text | e('html_attr') }}" target="_blank" data-social-type="facebook"></div>*/
/*             <div class="item-social icon-pinterest" data-url="{{ absolute_node_url | e('html_attr')}}" data-media-url="{{ share_img_url | e('html_attr')}}" data-description="{{ content.field_description | plain_text | e('html_attr') }}" data-social-type="pinterest"></div>*/
/*         </div>*/
/*     </div>*/
/* {% endif %}*/
/* */
