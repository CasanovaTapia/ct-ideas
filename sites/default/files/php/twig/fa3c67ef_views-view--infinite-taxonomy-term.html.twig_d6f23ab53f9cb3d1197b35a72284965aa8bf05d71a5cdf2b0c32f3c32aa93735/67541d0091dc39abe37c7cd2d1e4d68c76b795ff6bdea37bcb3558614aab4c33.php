<?php

/* profiles/thunder/themes/infinite/templates/views/views-view--infinite-taxonomy-term.html.twig */
class __TwigTemplate_fa2a9fa4d363fdce6894042c69ad9ee4d467376ac6ef8701b0328c439dfc24d2 extends Twig_Template
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
        $tags = array("include" => 1);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('include'),
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
        $this->loadTemplate("@infinite/views/views-view--infinite-default-feed.html.twig", "profiles/thunder/themes/infinite/templates/views/views-view--infinite-taxonomy-term.html.twig", 1)->display($context);
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/views/views-view--infinite-taxonomy-term.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  43 => 1,);
    }
}
/* {% include '@infinite/views/views-view--infinite-default-feed.html.twig' %}*/
/* */
