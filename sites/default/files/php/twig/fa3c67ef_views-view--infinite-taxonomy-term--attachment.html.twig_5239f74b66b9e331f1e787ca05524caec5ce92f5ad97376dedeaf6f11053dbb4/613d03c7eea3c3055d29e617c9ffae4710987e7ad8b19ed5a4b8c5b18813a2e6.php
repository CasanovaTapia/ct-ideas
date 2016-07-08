<?php

/* profiles/thunder/themes/infinite/templates/views/views-view--infinite-taxonomy-term--attachment.html.twig */
class __TwigTemplate_72469066cbafb7c900b6ea57e1acf23e75004f73d360197ecf06f4f443a863c3 extends Twig_Template
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
        $this->loadTemplate("@infinite/views/views-view--infinite-attachment-before-feed.html.twig", "profiles/thunder/themes/infinite/templates/views/views-view--infinite-taxonomy-term--attachment.html.twig", 1)->display($context);
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/views/views-view--infinite-taxonomy-term--attachment.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  43 => 1,);
    }
}
/* {% include '@infinite/views/views-view--infinite-attachment-before-feed.html.twig' %}*/
/* */
