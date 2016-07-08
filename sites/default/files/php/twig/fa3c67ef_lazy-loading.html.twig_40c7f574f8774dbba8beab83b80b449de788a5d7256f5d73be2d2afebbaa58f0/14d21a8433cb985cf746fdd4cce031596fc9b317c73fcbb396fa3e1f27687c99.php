<?php

/* profiles/thunder/modules/infinite_module/templates/lazy-loading.html.twig */
class __TwigTemplate_a8de290a2e3f48ad701ff5bb79168452e6d12fb5122b21ddc630bfcfe141ae74 extends Twig_Template
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
        $tags = array();
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array(),
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
        echo "<a class=\"infinite-more-link use-ajax\" href=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["lazy_loading_url"]) ? $context["lazy_loading_url"] : null), "html", null, true));
        echo "\"
   title=\"Lazy loading of next page\" rel=\"next\">
    <span class=\"visually-hidden\">Next page</span>
    <span aria-hidden=\"true\">next ›</span>
</a>
";
    }

    public function getTemplateName()
    {
        return "profiles/thunder/modules/infinite_module/templates/lazy-loading.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  43 => 1,);
    }
}
/* <a class="infinite-more-link use-ajax" href="{{ lazy_loading_url }}"*/
/*    title="Lazy loading of next page" rel="next">*/
/*     <span class="visually-hidden">Next page</span>*/
/*     <span aria-hidden="true">next ›</span>*/
/* </a>*/
/* */
