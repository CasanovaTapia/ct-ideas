<?php

/* profiles/thunder/themes/infinite/templates/node/node--article--lazyloading.html.twig */
class __TwigTemplate_13b361fa30c83c4f1d79e53840285718d2fa9b2c5050fa12d3088cf79108393d extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@infinite/node/node--article--full.html.twig", "profiles/thunder/themes/infinite/templates/node/node--article--lazyloading.html.twig", 1);
        $this->blocks = array(
            'article_footer_blocks_lazyloading' => array($this, 'block_article_footer_blocks_lazyloading'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@infinite/node/node--article--full.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 3);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('set'),
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

        // line 3
        $context["wrapper_attributes"] = $this->getAttribute((isset($context["wrapper_attributes"]) ? $context["wrapper_attributes"] : null), "addClass", array(0 => "region-lazy-loading"), "method");
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 5
    public function block_article_footer_blocks_lazyloading($context, array $blocks = array())
    {
        // line 6
        echo "  ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_footer_blocks", array()), "html", null, true));
        echo "
";
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/node/node--article--lazyloading.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  58 => 6,  55 => 5,  51 => 1,  49 => 3,  11 => 1,);
    }
}
/* {% extends "@infinite/node/node--article--full.html.twig" %}*/
/* */
/* {% set wrapper_attributes = wrapper_attributes.addClass('region-lazy-loading') %}*/
/* */
/* {% block article_footer_blocks_lazyloading %}*/
/*   {{ content.field_footer_blocks }}*/
/* {% endblock %}*/
/* */
