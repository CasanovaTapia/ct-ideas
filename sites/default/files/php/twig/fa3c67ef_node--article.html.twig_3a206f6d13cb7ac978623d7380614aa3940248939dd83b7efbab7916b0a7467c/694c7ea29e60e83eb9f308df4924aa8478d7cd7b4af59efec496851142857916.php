<?php

/* @infinite/node/node--article.html.twig */
class __TwigTemplate_878e9a6405d512a322dd61376d57d1d956754f53270ed16bf4572cbc4e721739 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@infinite/node/node.html.twig", "@infinite/node/node--article.html.twig", 1);
        $this->blocks = array(
            'content_header' => array($this, 'block_content_header'),
            'sponsored' => array($this, 'block_sponsored'),
            'content_highlighted' => array($this, 'block_content_highlighted'),
            'content_body' => array($this, 'block_content_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@infinite/node/node.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("block" => 4, "if" => 8, "include" => 5);
        $filters = array("render" => 17);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('block', 'if', 'include'),
                array('render'),
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

        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_content_header($context, array $blocks = array())
    {
        // line 4
        echo "  ";
        $this->displayBlock('sponsored', $context, $blocks);
        // line 7
        echo "
  ";
        // line 8
        if ((isset($context["has_header_block"]) ? $context["has_header_block"] : null)) {
            // line 9
            echo "    <h2 class=\"text-headline text-headline-size-h1\">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
            echo "</h2>
  ";
        } else {
            // line 11
            echo "    <h1 class=\"text-headline text-headline-size-h1\">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
            echo "</h1>
  ";
        }
        // line 13
        echo "  ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["author_teaser"]) ? $context["author_teaser"] : null), "html", null, true));
        echo "
";
    }

    // line 4
    public function block_sponsored($context, array $blocks = array())
    {
        // line 5
        echo "    ";
        $this->loadTemplate("@infinite/node/twig-block-sponsored.html.twig", "@infinite/node/node--article.html.twig", 5)->display($context);
        // line 6
        echo "  ";
    }

    // line 16
    public function block_content_highlighted($context, array $blocks = array())
    {
        // line 17
        echo "  ";
        if ($this->env->getExtension('drupal_core')->renderVar($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_top_paragraphs", array()))) {
            // line 18
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_top_paragraphs", array()), "html", null, true));
            echo "
  ";
        }
    }

    // line 22
    public function block_content_body($context, array $blocks = array())
    {
        // line 23
        echo "  ";
        if ($this->getAttribute($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_paragraphs", array()), "#items", array(), "array")) {
            // line 24
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_paragraphs", array()), "html", null, true));
            echo "
    ";
            // line 25
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_tags", array()), "html", null, true));
            echo "
  ";
        }
    }

    public function getTemplateName()
    {
        return "@infinite/node/node--article.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  120 => 25,  115 => 24,  112 => 23,  109 => 22,  101 => 18,  98 => 17,  95 => 16,  91 => 6,  88 => 5,  85 => 4,  78 => 13,  72 => 11,  66 => 9,  64 => 8,  61 => 7,  58 => 4,  55 => 3,  11 => 1,);
    }
}
/* {% extends "@infinite/node/node.html.twig" %}*/
/* */
/* {% block content_header %}*/
/*   {% block sponsored %}*/
/*     {% include '@infinite/node/twig-block-sponsored.html.twig' %}*/
/*   {% endblock %}*/
/* */
/*   {% if has_header_block %}*/
/*     <h2 class="text-headline text-headline-size-h1">{{ label }}</h2>*/
/*   {% else %}*/
/*     <h1 class="text-headline text-headline-size-h1">{{ label }}</h1>*/
/*   {% endif %}*/
/*   {{ author_teaser }}*/
/* {% endblock %}*/
/* */
/* {% block content_highlighted %}*/
/*   {% if content.field_top_paragraphs|render %}*/
/*     {{ content.field_top_paragraphs }}*/
/*   {% endif %}*/
/* {% endblock %}*/
/* */
/* {% block content_body %}*/
/*   {% if content.field_paragraphs['#items'] %}*/
/*     {{ content.field_paragraphs }}*/
/*     {{ content.field_tags }}*/
/*   {% endif %}*/
/* {% endblock %}*/
/* */
