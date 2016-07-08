<?php

/* @infinite/views/views-view--infinite-default-feed.html.twig */
class __TwigTemplate_df7811b2365afb647b4608de747aff04373b867118d93c88373fc987ee1abff1 extends Twig_Template
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
        $tags = array("if" => 1);
        $filters = array("replace" => 19, "plain_text" => 19);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if'),
                array('replace', 'plain_text'),
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
        if (((isset($context["attachment_before"]) ? $context["attachment_before"] : null) && ($this->getAttribute((isset($context["view"]) ? $context["view"] : null), "getCurrentPage", array()) == 0))) {
            // line 2
            echo "    <div class=\"region-full-content region-infinite-block\" data-view-type=\"infiniteBlockView\">
        ";
            // line 3
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["attachment_before"]) ? $context["attachment_before"] : null), "html", null, true));
            echo "
    </div>
";
        }
        // line 6
        echo "
<div data-view-type=\"infiniteBlockView\"
        ";
        // line 8
        if (($this->getAttribute((isset($context["view"]) ? $context["view"] : null), "getCurrentPage", array()) == 0)) {
            // line 9
            echo "            class=\"region-full-content region-infinite-block\"
        ";
        }
        // line 11
        echo "
        ";
        // line 12
        if (($this->getAttribute((isset($context["view"]) ? $context["view"] : null), "getCurrentPage", array()) > 0)) {
            // line 13
            echo "            class=\"region-full-content region-infinite-block region-lazy-loading infinite-item\"
            ";
            // line 14
            if ((isset($context["path"]) ? $context["path"] : null)) {
                // line 15
                echo "                data-history-url=\"";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["path"]) ? $context["path"] : null), "html", null, true));
                echo "\"
            ";
            }
            // line 17
            echo "
            ";
            // line 18
            if ($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_seo_title", array())) {
                // line 19
                echo "                data-history-title=\"";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, twig_replace_filter($this->env->getExtension('filter_extension')->plainText($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_seo_title", array())), array("\"" => "")), "html", null, true));
                echo "\"
            ";
            }
            // line 21
            echo "        ";
        }
        // line 22
        echo "        >

    ";
        // line 24
        if ((isset($context["header"]) ? $context["header"] : null)) {
            // line 25
            echo "        ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["header"]) ? $context["header"] : null), "html", null, true));
            echo "
    ";
        }
        // line 27
        echo "
    ";
        // line 28
        if ((isset($context["rows"]) ? $context["rows"] : null)) {
            // line 29
            echo "        <div class=\"region-full-content region-teaser-list\">
            <div class=\"container-content container-fixed-content container-row\">
                <div class=\"container-row-body teaser-list teaser-list-large teaser-list-vertical\"
                     data-view-type=\"feedTeaserView\">
                    ";
            // line 33
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["rows"]) ? $context["rows"] : null), "html", null, true));
            echo "
                </div>
                <div class=\"container-row-sidebar\">
                    ";
            // line 36
            if ((isset($context["sidebar"]) ? $context["sidebar"] : null)) {
                // line 37
                echo "                        <div class=\"item-sticky\" data-view-type=\"stickyView\">
                            ";
                // line 38
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["sidebar"]) ? $context["sidebar"] : null), "html", null, true));
                echo "
                        </div>
                    ";
            }
            // line 41
            echo "                </div>
            </div>
        </div>
    ";
        } elseif (        // line 44
(isset($context["empty"]) ? $context["empty"] : null)) {
            // line 45
            echo "        ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["empty"]) ? $context["empty"] : null), "html", null, true));
            echo "
    ";
        }
        // line 47
        echo "
    ";
        // line 48
        if ((isset($context["footer"]) ? $context["footer"] : null)) {
            // line 49
            echo "        ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["footer"]) ? $context["footer"] : null), "html", null, true));
            echo "
    ";
        }
        // line 51
        echo "</div>

";
        // line 53
        if ((isset($context["attachment_after"]) ? $context["attachment_after"] : null)) {
            // line 54
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["attachment_after"]) ? $context["attachment_after"] : null), "html", null, true));
            echo "
";
        }
        // line 56
        echo "
";
        // line 57
        if (($this->getAttribute((isset($context["view"]) ? $context["view"] : null), "getCurrentPage", array()) == 0)) {
            // line 58
            echo "<div class=\"region-full-content region-feed\"
        ";
            // line 59
            if (( !array_key_exists("use_view_type", $context) || ((isset($context["use_view_type"]) ? $context["use_view_type"] : null) != false))) {
                // line 60
                echo "            data-view-type=\"feedView\"
        ";
            }
            // line 62
            echo "        >
    <div class=\"container-content container-content-dynamic container-feed-items\"></div>
    ";
        }
        // line 65
        echo "    ";
        if ((isset($context["pager"]) ? $context["pager"] : null)) {
            // line 66
            echo "        ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["pager"]) ? $context["pager"] : null), "html", null, true));
            echo "
    ";
        }
        // line 68
        echo "    ";
        if (($this->getAttribute((isset($context["view"]) ? $context["view"] : null), "getCurrentPage", array()) == 0)) {
            // line 69
            echo "</div>
";
        }
    }

    public function getTemplateName()
    {
        return "@infinite/views/views-view--infinite-default-feed.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  201 => 69,  198 => 68,  192 => 66,  189 => 65,  184 => 62,  180 => 60,  178 => 59,  175 => 58,  173 => 57,  170 => 56,  164 => 54,  162 => 53,  158 => 51,  152 => 49,  150 => 48,  147 => 47,  141 => 45,  139 => 44,  134 => 41,  128 => 38,  125 => 37,  123 => 36,  117 => 33,  111 => 29,  109 => 28,  106 => 27,  100 => 25,  98 => 24,  94 => 22,  91 => 21,  85 => 19,  83 => 18,  80 => 17,  74 => 15,  72 => 14,  69 => 13,  67 => 12,  64 => 11,  60 => 9,  58 => 8,  54 => 6,  48 => 3,  45 => 2,  43 => 1,);
    }
}
/* {% if attachment_before and view.getCurrentPage == 0 %}*/
/*     <div class="region-full-content region-infinite-block" data-view-type="infiniteBlockView">*/
/*         {{ attachment_before }}*/
/*     </div>*/
/* {% endif %}*/
/* */
/* <div data-view-type="infiniteBlockView"*/
/*         {% if view.getCurrentPage == 0 %}*/
/*             class="region-full-content region-infinite-block"*/
/*         {% endif %}*/
/* */
/*         {% if view.getCurrentPage > 0 %}*/
/*             class="region-full-content region-infinite-block region-lazy-loading infinite-item"*/
/*             {% if path %}*/
/*                 data-history-url="{{ path }}"*/
/*             {% endif %}*/
/* */
/*             {% if content.field_seo_title %}*/
/*                 data-history-title="{{ content.field_seo_title | plain_text | replace({'"': ''}) }}"*/
/*             {% endif %}*/
/*         {% endif %}*/
/*         >*/
/* */
/*     {% if header %}*/
/*         {{ header }}*/
/*     {% endif %}*/
/* */
/*     {% if rows %}*/
/*         <div class="region-full-content region-teaser-list">*/
/*             <div class="container-content container-fixed-content container-row">*/
/*                 <div class="container-row-body teaser-list teaser-list-large teaser-list-vertical"*/
/*                      data-view-type="feedTeaserView">*/
/*                     {{ rows }}*/
/*                 </div>*/
/*                 <div class="container-row-sidebar">*/
/*                     {% if sidebar %}*/
/*                         <div class="item-sticky" data-view-type="stickyView">*/
/*                             {{ sidebar }}*/
/*                         </div>*/
/*                     {% endif %}*/
/*                 </div>*/
/*             </div>*/
/*         </div>*/
/*     {% elseif empty %}*/
/*         {{ empty }}*/
/*     {% endif %}*/
/* */
/*     {% if footer %}*/
/*         {{ footer }}*/
/*     {% endif %}*/
/* </div>*/
/* */
/* {% if attachment_after %}*/
/*     {{ attachment_after }}*/
/* {% endif %}*/
/* */
/* {% if view.getCurrentPage == 0 %}*/
/* <div class="region-full-content region-feed"*/
/*         {% if use_view_type is not defined or use_view_type != false %}*/
/*             data-view-type="feedView"*/
/*         {% endif %}*/
/*         >*/
/*     <div class="container-content container-content-dynamic container-feed-items"></div>*/
/*     {% endif %}*/
/*     {% if pager %}*/
/*         {{ pager }}*/
/*     {% endif %}*/
/*     {% if view.getCurrentPage == 0 %}*/
/* </div>*/
/* {% endif %}*/
/* */
