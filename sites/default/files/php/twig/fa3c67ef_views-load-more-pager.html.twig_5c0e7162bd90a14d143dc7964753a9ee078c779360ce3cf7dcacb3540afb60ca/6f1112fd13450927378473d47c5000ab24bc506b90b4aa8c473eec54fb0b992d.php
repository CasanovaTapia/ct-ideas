<?php

/* profiles/thunder/themes/infinite/templates/views/views-load-more-pager.html.twig */
class __TwigTemplate_d659866e1653818b61f31632c32ae6f4233cb8ab21432decc1283ac8f3a3d33b extends Twig_Template
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
        $filters = array("t" => 2);
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
        if ((isset($context["next_url"]) ? $context["next_url"] : null)) {
            // line 2
            echo "    <a class=\"infinite-more-link\" href=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["next_url"]) ? $context["next_url"] : null), "html", null, true));
            echo "\" title=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Lazy loading of next page")));
            echo "\" rel=\"next\">
        <span class=\"visually-hidden\">";
            // line 3
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Next page")));
            echo "</span>
        <span aria-hidden=\"true\">";
            // line 4
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["more_button_text"]) ? $context["more_button_text"] : null), "html", null, true));
            echo "</span>
    </a>
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/views/views-load-more-pager.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  56 => 4,  52 => 3,  45 => 2,  43 => 1,);
    }
}
/* {% if next_url %}*/
/*     <a class="infinite-more-link" href="{{ next_url }}" title="{{ 'Lazy loading of next page'|t }}" rel="next">*/
/*         <span class="visually-hidden">{{ 'Next page'|t }}</span>*/
/*         <span aria-hidden="true">{{ more_button_text }}</span>*/
/*     </a>*/
/* {% endif %}*/
