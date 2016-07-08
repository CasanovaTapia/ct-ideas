<?php

/* @infinite/views/views-view--infinite-attachment-before-feed.html.twig */
class __TwigTemplate_49b48472ab25329d41e0ed460de2d006a807f44211adee2a475086959dda859b extends Twig_Template
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
        $tags = array("if" => 2);
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

        // line 1
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_prefix"]) ? $context["title_prefix"] : null), "html", null, true));
        echo "
";
        // line 2
        if ((isset($context["title"]) ? $context["title"] : null)) {
            // line 3
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title"]) ? $context["title"] : null), "html", null, true));
            echo "
";
        }
        // line 5
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_suffix"]) ? $context["title_suffix"] : null), "html", null, true));
        echo "

";
        // line 7
        if (((isset($context["attachment_before"]) ? $context["attachment_before"] : null) && ($this->getAttribute((isset($context["view"]) ? $context["view"] : null), "getCurrentPage", array()) == 0))) {
            // line 8
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["attachment_before"]) ? $context["attachment_before"] : null), "html", null, true));
            echo "
";
        }
        // line 10
        if ((isset($context["header"]) ? $context["header"] : null)) {
            // line 11
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["header"]) ? $context["header"] : null), "html", null, true));
            echo "
";
        }
        // line 13
        if ((isset($context["exposed"]) ? $context["exposed"] : null)) {
            // line 14
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["exposed"]) ? $context["exposed"] : null), "html", null, true));
            echo "
";
        }
        // line 16
        echo "
";
        // line 17
        if ((isset($context["rows"]) ? $context["rows"] : null)) {
            // line 18
            echo "    <div class=\"region-full-content region-teaser-list\">
        <div class=\"container-content container-fixed-content container-row\">
            <div class=\"container-row-body teaser-list teaser-list-large teaser-list-vertical\"
                 data-view-type=\"feedTeaserView\">
                ";
            // line 22
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["rows"]) ? $context["rows"] : null), "html", null, true));
            echo "
            </div>
            <div class=\"container-row-sidebar\">
                ";
            // line 25
            if ((isset($context["sidebar"]) ? $context["sidebar"] : null)) {
                // line 26
                echo "                    <div class=\"item-sticky\" data-view-type=\"stickyView\">
                        ";
                // line 27
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["sidebar"]) ? $context["sidebar"] : null), "html", null, true));
                echo "
                    </div>
                ";
            }
            // line 30
            echo "            </div>
        </div>
    </div>
";
        } elseif (        // line 33
(isset($context["empty"]) ? $context["empty"] : null)) {
            // line 34
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["empty"]) ? $context["empty"] : null), "html", null, true));
            echo "
";
        }
        // line 36
        echo "
";
        // line 37
        if ((isset($context["pager"]) ? $context["pager"] : null)) {
            // line 38
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["pager"]) ? $context["pager"] : null), "html", null, true));
            echo "
";
        }
        // line 40
        echo "
";
        // line 41
        if ((isset($context["attachment_after"]) ? $context["attachment_after"] : null)) {
            // line 42
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["attachment_after"]) ? $context["attachment_after"] : null), "html", null, true));
            echo "
";
        }
        // line 44
        if ((isset($context["more"]) ? $context["more"] : null)) {
            // line 45
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["more"]) ? $context["more"] : null), "html", null, true));
            echo "
";
        }
        // line 47
        if ((isset($context["footer"]) ? $context["footer"] : null)) {
            // line 48
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["footer"]) ? $context["footer"] : null), "html", null, true));
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "@infinite/views/views-view--infinite-attachment-before-feed.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  157 => 48,  155 => 47,  149 => 45,  147 => 44,  141 => 42,  139 => 41,  136 => 40,  130 => 38,  128 => 37,  125 => 36,  119 => 34,  117 => 33,  112 => 30,  106 => 27,  103 => 26,  101 => 25,  95 => 22,  89 => 18,  87 => 17,  84 => 16,  78 => 14,  76 => 13,  70 => 11,  68 => 10,  62 => 8,  60 => 7,  55 => 5,  49 => 3,  47 => 2,  43 => 1,);
    }
}
/* {{ title_prefix }}*/
/* {% if title %}*/
/*     {{ title }}*/
/* {% endif %}*/
/* {{ title_suffix }}*/
/* */
/* {% if attachment_before and view.getCurrentPage == 0 %}*/
/*     {{ attachment_before }}*/
/* {% endif %}*/
/* {% if header %}*/
/*     {{ header }}*/
/* {% endif %}*/
/* {% if exposed %}*/
/*     {{ exposed }}*/
/* {% endif %}*/
/* */
/* {% if rows %}*/
/*     <div class="region-full-content region-teaser-list">*/
/*         <div class="container-content container-fixed-content container-row">*/
/*             <div class="container-row-body teaser-list teaser-list-large teaser-list-vertical"*/
/*                  data-view-type="feedTeaserView">*/
/*                 {{ rows }}*/
/*             </div>*/
/*             <div class="container-row-sidebar">*/
/*                 {% if sidebar %}*/
/*                     <div class="item-sticky" data-view-type="stickyView">*/
/*                         {{ sidebar }}*/
/*                     </div>*/
/*                 {% endif %}*/
/*             </div>*/
/*         </div>*/
/*     </div>*/
/* {% elseif empty %}*/
/*     {{ empty }}*/
/* {% endif %}*/
/* */
/* {% if pager %}*/
/*     {{ pager }}*/
/* {% endif %}*/
/* */
/* {% if attachment_after %}*/
/*     {{ attachment_after }}*/
/* {% endif %}*/
/* {% if more %}*/
/*     {{ more }}*/
/* {% endif %}*/
/* {% if footer %}*/
/*     {{ footer }}*/
/* {% endif %}*/
/* */
