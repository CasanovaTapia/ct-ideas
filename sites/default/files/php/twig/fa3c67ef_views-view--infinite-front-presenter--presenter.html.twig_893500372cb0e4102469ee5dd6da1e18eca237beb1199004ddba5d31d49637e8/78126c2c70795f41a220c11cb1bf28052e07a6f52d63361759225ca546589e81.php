<?php

/* profiles/thunder/themes/infinite/templates/views/views-view--infinite-front-presenter--presenter.html.twig */
class __TwigTemplate_149685830de4fca4724b91adceccbbea95a8cd54bd8e5d68d70e003b3db4de7c extends Twig_Template
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
        $tags = array("if" => 35);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if'),
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

        // line 35
        if ((isset($context["title"]) ? $context["title"] : null)) {
            // line 36
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title"]) ? $context["title"] : null), "html", null, true));
            echo "
";
        }
        // line 38
        echo "
";
        // line 39
        if ((isset($context["header"]) ? $context["header"] : null)) {
            // line 40
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["header"]) ? $context["header"] : null), "html", null, true));
            echo "
";
        }
        // line 42
        if ((isset($context["exposed"]) ? $context["exposed"] : null)) {
            // line 43
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["exposed"]) ? $context["exposed"] : null), "html", null, true));
            echo "
";
        }
        // line 45
        if ((isset($context["attachment_before"]) ? $context["attachment_before"] : null)) {
            // line 46
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["attachment_before"]) ? $context["attachment_before"] : null), "html", null, true));
            echo "
";
        }
        // line 48
        echo "
";
        // line 49
        if ((isset($context["rows"]) ? $context["rows"] : null)) {
            // line 50
            echo "<div class=\"region-full-content region-presenter\">
    ";
            // line 51
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["rows"]) ? $context["rows"] : null), "html", null, true));
            echo "
</div>
";
        } elseif (        // line 53
(isset($context["empty"]) ? $context["empty"] : null)) {
            // line 54
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["empty"]) ? $context["empty"] : null), "html", null, true));
            echo "
";
        }
        // line 56
        echo "
";
        // line 57
        if ((isset($context["pager"]) ? $context["pager"] : null)) {
            // line 58
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["pager"]) ? $context["pager"] : null), "html", null, true));
            echo "
";
        }
        // line 60
        if ((isset($context["attachment_after"]) ? $context["attachment_after"] : null)) {
            // line 61
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["attachment_after"]) ? $context["attachment_after"] : null), "html", null, true));
            echo "
";
        }
        // line 63
        echo "    ";
        if ((isset($context["more"]) ? $context["more"] : null)) {
            // line 64
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["more"]) ? $context["more"] : null), "html", null, true));
            echo "
    ";
        }
        // line 66
        if ((isset($context["footer"]) ? $context["footer"] : null)) {
            // line 67
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["footer"]) ? $context["footer"] : null), "html", null, true));
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/views/views-view--infinite-front-presenter--presenter.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  128 => 67,  126 => 66,  121 => 64,  118 => 63,  112 => 61,  110 => 60,  104 => 58,  102 => 57,  99 => 56,  93 => 54,  91 => 53,  86 => 51,  83 => 50,  81 => 49,  78 => 48,  72 => 46,  70 => 45,  64 => 43,  62 => 42,  56 => 40,  54 => 39,  51 => 38,  45 => 36,  43 => 35,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Default theme implementation for main view template.*/
/*  **/
/*  * Available variables:*/
/*  * - attributes: Remaining HTML attributes for the element.*/
/*  * - css_name: A css-safe version of the view name.*/
/*  * - css_class: The user-specified classes names, if any.*/
/*  * - header: The optional header.*/
/*  * - footer: The optional footer.*/
/*  * - rows: The results of the view query, if any.*/
/*  * - empty: The content to display if there are no rows.*/
/*  * - pager: The optional pager next/prev links to display.*/
/*  * - exposed: Exposed widget form/info to display.*/
/*  * - feed_icons: Optional feed icons to display.*/
/*  * - more: An optional link to the next page of results.*/
/*  * - title: Title of the view, only used when displaying in the admin preview.*/
/*  * - title_prefix: Additional output populated by modules, intended to be*/
/*  *   displayed in front of the view title.*/
/*  * - title_suffix: Additional output populated by modules, intended to be*/
/*  *   displayed after the view title.*/
/*  * - attachment_before: An optional attachment view to be displayed before the*/
/*  *   view content.*/
/*  * - attachment_after: An optional attachment view to be displayed after the*/
/*  *   view content.*/
/*  * - dom_id: Unique id for every view being printed to give unique class for*/
/*  *   Javascript.*/
/*  **/
/*  * @see template_preprocess_views_view()*/
/*  **/
/*  * @ingroup themeable*/
/*  *//* */
/* #}*/
/* {% if title %}*/
/*     {{ title }}*/
/* {% endif %}*/
/* */
/* {% if header %}*/
/*     {{ header }}*/
/* {% endif %}*/
/* {% if exposed %}*/
/*     {{ exposed }}*/
/* {% endif %}*/
/* {% if attachment_before %}*/
/*     {{ attachment_before }}*/
/* {% endif %}*/
/* */
/* {% if rows %}*/
/* <div class="region-full-content region-presenter">*/
/*     {{ rows }}*/
/* </div>*/
/* {% elseif empty %}*/
/*     {{ empty }}*/
/* {% endif %}*/
/* */
/* {% if pager %}*/
/*     {{ pager }}*/
/* {% endif %}*/
/* {% if attachment_after %}*/
/*     {{ attachment_after }}*/
/* {% endif %}*/
/*     {% if more %}*/
/* {{ more }}*/
/*     {% endif %}*/
/* {% if footer %}*/
/*     {{ footer }}*/
/* {% endif %}*/
