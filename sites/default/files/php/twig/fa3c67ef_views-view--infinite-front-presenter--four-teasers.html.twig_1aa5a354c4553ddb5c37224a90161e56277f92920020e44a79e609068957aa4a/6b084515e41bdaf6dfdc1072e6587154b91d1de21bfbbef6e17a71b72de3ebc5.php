<?php

/* profiles/thunder/themes/infinite/templates/views/views-view--infinite-front-presenter--four-teasers.html.twig */
class __TwigTemplate_5ee64470af6cea540937ed3c5b9917e840a60a63fdc2c0079d5c7f77d36d9396 extends Twig_Template
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
        $tags = array("if" => 1, "include" => 3);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if', 'include'),
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
        if ((isset($context["rows"]) ? $context["rows"] : null)) {
            // line 2
            echo "    <div class=\"region-full-content region-teaser-list region-teaser-list-horizontal  swipeable--horizontal region__teasers--horizontal\" data-view-type=\"listSwipeableView\">
        ";
            // line 3
            $this->loadTemplate("@infinite/views/views-view--infinite-default-four-teasers.html.twig", "profiles/thunder/themes/infinite/templates/views/views-view--infinite-front-presenter--four-teasers.html.twig", 3)->display($context);
            // line 4
            echo "    </div>
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/views/views-view--infinite-front-presenter--four-teasers.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  50 => 4,  48 => 3,  45 => 2,  43 => 1,);
    }
}
/* {% if rows %}*/
/*     <div class="region-full-content region-teaser-list region-teaser-list-horizontal  swipeable--horizontal region__teasers--horizontal" data-view-type="listSwipeableView">*/
/*         {% include '@infinite/views/views-view--infinite-default-four-teasers.html.twig' %}*/
/*     </div>*/
/* {% endif %}*/
/* */
