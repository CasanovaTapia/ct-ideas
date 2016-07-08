<?php

/* profiles/thunder/themes/infinite/templates/menus/menu-local-tasks.html.twig */
class __TwigTemplate_346a44bf9c4a132986308241ca24994a51b75e287eedb22c17515f335ae5a3fc extends Twig_Template
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
        echo "<ul class=\"tabs secondary clearfix\">
    ";
        // line 2
        if ((isset($context["primary"]) ? $context["primary"] : null)) {
            // line 3
            echo "        ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["primary"]) ? $context["primary"] : null), "html", null, true));
            echo "
    ";
        }
        // line 5
        echo "    ";
        if ((isset($context["secondary"]) ? $context["secondary"] : null)) {
            // line 6
            echo "        ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["secondary"]) ? $context["secondary"] : null), "html", null, true));
            echo "
    ";
        }
        // line 8
        echo "</ul>
";
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/menus/menu-local-tasks.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  63 => 8,  57 => 6,  54 => 5,  48 => 3,  46 => 2,  43 => 1,);
    }
}
/* <ul class="tabs secondary clearfix">*/
/*     {% if primary %}*/
/*         {{ primary }}*/
/*     {% endif %}*/
/*     {% if secondary %}*/
/*         {{ secondary }}*/
/*     {% endif %}*/
/* </ul>*/
/* */
