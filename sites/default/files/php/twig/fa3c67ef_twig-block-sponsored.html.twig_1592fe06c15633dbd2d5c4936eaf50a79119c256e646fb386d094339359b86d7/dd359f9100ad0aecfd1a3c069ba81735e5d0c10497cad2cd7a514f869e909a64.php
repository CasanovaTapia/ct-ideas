<?php

/* @infinite/node/twig-block-sponsored.html.twig */
class __TwigTemplate_cfa92de2952265114c894ced01d104d5c1dedd35def658e48afcb7a12c91287d extends Twig_Template
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
        if (((isset($context["sponsor_type"]) ? $context["sponsor_type"] : null) == "advertorial")) {
            // line 2
            echo "    <div class=\"item-marketing-sponsored item-marketing-advertorial\">Anzeige</div>
";
        } elseif ((        // line 3
(isset($context["sponsor_type"]) ? $context["sponsor_type"] : null) == "native")) {
            // line 4
            echo "    <div class=\"item-marketing-sponsored item-marketing-native\">
        ";
            // line 5
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_sponsor_tag", array()), "html", null, true));
            echo "
    </div>
";
        }
    }

    public function getTemplateName()
    {
        return "@infinite/node/twig-block-sponsored.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  53 => 5,  50 => 4,  48 => 3,  45 => 2,  43 => 1,);
    }
}
/* {% if sponsor_type == 'advertorial' %}*/
/*     <div class="item-marketing-sponsored item-marketing-advertorial">Anzeige</div>*/
/* {% elseif sponsor_type == 'native' %}*/
/*     <div class="item-marketing-sponsored item-marketing-native">*/
/*         {{ content.field_sponsor_tag }}*/
/*     </div>*/
/* {% endif %}*/
/* */
