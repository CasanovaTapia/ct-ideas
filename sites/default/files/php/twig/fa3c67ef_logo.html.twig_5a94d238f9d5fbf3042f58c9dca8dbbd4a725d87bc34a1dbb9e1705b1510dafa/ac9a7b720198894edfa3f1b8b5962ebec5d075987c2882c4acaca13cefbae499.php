<?php

/* profiles/thunder/modules/infinite_module/modules/infinite_blocks/templates/logo.html.twig */
class __TwigTemplate_d0834ead47f266e26dae9ae80bbd4885fe3a979ddfc5e2cfe8bb5a12b72b4516 extends Twig_Template
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
        $filters = array("t" => 5);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if'),
                array('t'),
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
        if ((isset($context["front_page"]) ? $context["front_page"] : null)) {
            // line 2
            echo "<h1>
";
        }
        // line 4
        echo "
    <a class=\"logo\" href=\"";
        // line 5
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["front_page"]) ? $context["front_page"] : null), "html", null, true));
        echo "\" title=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Home")));
        echo "\">
        <img src=\"";
        // line 6
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["logo"]) ? $context["logo"] : null), "html", null, true));
        echo "\" alt=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Home")));
        echo "\"/>
    </a>

    ";
        // line 9
        if ((isset($context["front_page"]) ? $context["front_page"] : null)) {
            // line 10
            echo "</h1>
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/thunder/modules/infinite_module/modules/infinite_blocks/templates/logo.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  68 => 10,  66 => 9,  58 => 6,  52 => 5,  49 => 4,  45 => 2,  43 => 1,);
    }
}
/* {% if front_page %}*/
/* <h1>*/
/* {% endif %}*/
/* */
/*     <a class="logo" href="{{ front_page }}" title="{{ 'Home'|t }}">*/
/*         <img src="{{ logo }}" alt="{{ 'Home'|t }}"/>*/
/*     </a>*/
/* */
/*     {% if front_page %}*/
/* </h1>*/
/* {% endif %}*/
/* */
