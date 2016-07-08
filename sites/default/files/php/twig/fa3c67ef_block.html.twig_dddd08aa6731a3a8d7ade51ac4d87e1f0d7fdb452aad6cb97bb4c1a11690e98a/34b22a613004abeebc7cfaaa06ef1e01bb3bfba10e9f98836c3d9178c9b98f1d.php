<?php

/* profiles/thunder/themes/infinite/templates/blocks/block.html.twig */
class __TwigTemplate_e3500868b3b3da95c38b6e55a7a614ef4c2755caa8f2db7903f752e94e034f13 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 48, "block" => 70);
        $filters = array("raw" => 49);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if', 'block'),
                array('raw'),
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

        // line 37
        echo "

";
        // line 44
        echo "
";
        // line 46
        echo "

";
        // line 48
        if ((isset($context["use_container"]) ? $context["use_container"] : null)) {
            // line 49
            echo "    <";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["block_tag"]) ? $context["block_tag"] : null)));
            echo " ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["attributes"]) ? $context["attributes"] : null), "html", null, true));
            echo ">
";
        }
        // line 51
        echo "
    ";
        // line 57
        echo "
  ";
        // line 58
        if (( !twig_test_empty((isset($context["label"]) ? $context["label"] : null)) && array_key_exists("label_display", $context))) {
            // line 59
            echo "
    ";
            // line 65
            echo "
  <";
            // line 66
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_tag"]) ? $context["title_tag"] : null), "html", null, true));
            echo " ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_attributes"]) ? $context["title_attributes"] : null), "html", null, true));
            echo ">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
            echo "</";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_tag"]) ? $context["title_tag"] : null), "html", null, true));
            echo ">

  ";
        }
        // line 69
        echo "
  ";
        // line 70
        $this->displayBlock('content', $context, $blocks);
        // line 73
        echo "

";
        // line 75
        if ((isset($context["use_container"]) ? $context["use_container"] : null)) {
            // line 76
            echo "</";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["block_tag"]) ? $context["block_tag"] : null)));
            echo ">
";
        }
    }

    // line 70
    public function block_content($context, array $blocks = array())
    {
        // line 71
        echo "      ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["content"]) ? $context["content"] : null), "html", null, true));
        echo "
  ";
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/blocks/block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  113 => 71,  110 => 70,  102 => 76,  100 => 75,  96 => 73,  94 => 70,  91 => 69,  79 => 66,  76 => 65,  73 => 59,  71 => 58,  68 => 57,  65 => 51,  57 => 49,  55 => 48,  51 => 46,  48 => 44,  44 => 37,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Default theme implementation to display a block.*/
/*  **/
/*  * Available variables:*/
/*  * - plugin_id: The ID of the block implementation.*/
/*  * - label: The configured label of the block if visible.*/
/*  * - configuration: A list of the block's configuration values.*/
/*  *   - label: The configured label for the block.*/
/*  *   - label_display: The display settings for the label.*/
/*  *   - module: The module that provided this block plugin.*/
/*  *   - cache: The cache settings.*/
/*  *   - Block plugin specific settings will also be stored here.*/
/*  * - block - The full block entity.*/
/*  *   - label_hidden: The hidden block title value if the block was*/
/*  *     configured to hide the title ('label' is empty in this case).*/
/*  *   - module: The module that generated the block.*/
/*  *   - delta: An ID for the block, unique within each module.*/
/*  *   - region: The block region embedding the current block.*/
/*  * - content: The content of this block.*/
/*  * - attributes: array of HTML attributes populated by modules, intended to*/
/*  *   be added to the main container tag of this template.*/
/*  *   - id: A valid HTML ID and guaranteed unique.*/
/*  * - title_attributes: Same as attributes, except applied to the main title*/
/*  *   tag that appears in the template.*/
/*  * - title_prefix: Additional output populated by modules, intended to be*/
/*  *   displayed in front of the main title tag that appears in the template.*/
/*  * - title_suffix: Additional output populated by modules, intended to be*/
/*  *   displayed after the main title tag that appears in the template.*/
/*  **/
/*  * @see template_preprocess_block()*/
/*  **/
/*  * @ingroup themeable*/
/*  *//* */
/* #}*/
/* */
/* */
/* {#*/
/* /***/
/*  * render block container if id and classes not empty*/
/*  *//* */
/* #}*/
/* */
/* {#{{ kint(use_container) }}#}*/
/* */
/* */
/* {% if use_container %}*/
/*     <{{ block_tag|raw }} {{ attributes }}>*/
/* {% endif %}*/
/* */
/*     {#*/
/*     /***/
/*       * check if label defined and not empty*/
/*       *//* */
/*     #}*/
/* */
/*   {% if not label is empty and label_display is defined %}*/
/* */
/*     {#*/
/*     /***/
/*       * render label with specific container / div / span ...*/
/*       *//* */
/*     #}*/
/* */
/*   <{{ title_tag }} {{ title_attributes }}>{{ label }}</{{ title_tag }}>*/
/* */
/*   {% endif %}*/
/* */
/*   {% block content %}*/
/*       {{ content }}*/
/*   {% endblock %}*/
/* */
/* */
/* {% if use_container %}*/
/* </{{ block_tag|raw }}>*/
/* {% endif %}*/
