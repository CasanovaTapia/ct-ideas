<?php

/* profiles/thunder/themes/infinite/templates/system/html.html.twig */
class __TwigTemplate_d8bcbe7cca0e62a99a04b6d9e2073bee322b09d90231c8788aad75e9b1078d23 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'api_gtm' => array($this, 'block_api_gtm'),
            'api_fb' => array($this, 'block_api_fb'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 1, "block" => 20, "if" => 21, "embed" => 22);
        $filters = array("clean_class" => 3, "raw" => 13, "safe_join" => 14);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('set', 'block', 'if', 'embed'),
                array('clean_class', 'raw', 'safe_join'),
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
        $context["body_classes"] = array(0 => ((        // line 2
(isset($context["logged_in"]) ? $context["logged_in"] : null)) ? ("user-logged-in") : ("")), 1 => (( !        // line 3
(isset($context["root_path"]) ? $context["root_path"] : null)) ? ("page-front") : (("page-" . \Drupal\Component\Utility\Html::getClass((isset($context["root_path"]) ? $context["root_path"] : null))))), 2 => ((        // line 4
(isset($context["node_type"]) ? $context["node_type"] : null)) ? (("page-" . \Drupal\Component\Utility\Html::getClass((isset($context["node_type"]) ? $context["node_type"] : null)))) : ("")), 3 => ((        // line 5
(isset($context["db_offline"]) ? $context["db_offline"] : null)) ? ("db-offline") : ("")));
        // line 7
        echo "
<!DOCTYPE html>
<html";
        // line 9
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["html_attributes"]) ? $context["html_attributes"] : null), "html", null, true));
        echo ">
    <head>
        <meta charset=\"utf-8\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <head-placeholder token=\"";
        // line 13
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["placeholder_token"]) ? $context["placeholder_token"] : null)));
        echo "\">
        <title>";
        // line 14
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar($this->env->getExtension('drupal_core')->safeJoin($this->env, (isset($context["head_title"]) ? $context["head_title"] : null), " | ")));
        echo "</title>
        <css-placeholder token=\"";
        // line 15
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["placeholder_token"]) ? $context["placeholder_token"] : null)));
        echo "\">
        <js-placeholder token=\"";
        // line 16
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["placeholder_token"]) ? $context["placeholder_token"] : null)));
        echo "\">

    </head>
    <body class=\"";
        // line 19
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["body_classes"]) ? $context["body_classes"] : null)), "method"), "class", array()), "html", null, true));
        echo "\">
        ";
        // line 20
        $this->displayBlock('api_gtm', $context, $blocks);
        // line 25
        echo "        ";
        $this->displayBlock('api_fb', $context, $blocks);
        // line 30
        echo "        <div id=\"page-wrapper\">
            ";
        // line 31
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["page_top"]) ? $context["page_top"] : null), "html", null, true));
        echo "
            ";
        // line 32
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["page"]) ? $context["page"] : null), "html", null, true));
        echo "
            ";
        // line 33
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["page_bottom"]) ? $context["page_bottom"] : null), "html", null, true));
        echo "

        </div>
        <js-bottom-placeholder token=\"";
        // line 36
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["placeholder_token"]) ? $context["placeholder_token"] : null)));
        echo "\">
    </body>
</html>
";
    }

    // line 20
    public function block_api_gtm($context, array $blocks = array())
    {
        // line 21
        echo "            ";
        if ((isset($context["gtm_vars"]) ? $context["gtm_vars"] : null)) {
            // line 22
            echo "                ";
            $this->loadTemplate("profiles/thunder/themes/infinite/templates/system/html.html.twig", "profiles/thunder/themes/infinite/templates/system/html.html.twig", 22, "3906427")->display(array_merge($context, (isset($context["gtm_vars"]) ? $context["gtm_vars"] : null)));
            // line 23
            echo "            ";
        }
        // line 24
        echo "        ";
    }

    // line 25
    public function block_api_fb($context, array $blocks = array())
    {
        // line 26
        echo "            ";
        if ((isset($context["fb_vars"]) ? $context["fb_vars"] : null)) {
            // line 27
            echo "                ";
            $this->loadTemplate("profiles/thunder/themes/infinite/templates/system/html.html.twig", "profiles/thunder/themes/infinite/templates/system/html.html.twig", 27, "1994681632")->display(array_merge($context, (isset($context["fb_vars"]) ? $context["fb_vars"] : null)));
            // line 28
            echo "            ";
        }
        // line 29
        echo "        ";
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/system/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  142 => 29,  139 => 28,  136 => 27,  133 => 26,  130 => 25,  126 => 24,  123 => 23,  120 => 22,  117 => 21,  114 => 20,  106 => 36,  100 => 33,  96 => 32,  92 => 31,  89 => 30,  86 => 25,  84 => 20,  80 => 19,  74 => 16,  70 => 15,  66 => 14,  62 => 13,  55 => 9,  51 => 7,  49 => 5,  48 => 4,  47 => 3,  46 => 2,  45 => 1,);
    }
}


/* profiles/thunder/themes/infinite/templates/system/html.html.twig */
class __TwigTemplate_d8bcbe7cca0e62a99a04b6d9e2073bee322b09d90231c8788aad75e9b1078d23_3906427 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 22
        $this->parent = $this->loadTemplate("@infinite/embeds/api_gtm.html.twig", "profiles/thunder/themes/infinite/templates/system/html.html.twig", 22);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "@infinite/embeds/api_gtm.html.twig";
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

        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/system/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  170 => 22,  142 => 29,  139 => 28,  136 => 27,  133 => 26,  130 => 25,  126 => 24,  123 => 23,  120 => 22,  117 => 21,  114 => 20,  106 => 36,  100 => 33,  96 => 32,  92 => 31,  89 => 30,  86 => 25,  84 => 20,  80 => 19,  74 => 16,  70 => 15,  66 => 14,  62 => 13,  55 => 9,  51 => 7,  49 => 5,  48 => 4,  47 => 3,  46 => 2,  45 => 1,);
    }
}


/* profiles/thunder/themes/infinite/templates/system/html.html.twig */
class __TwigTemplate_d8bcbe7cca0e62a99a04b6d9e2073bee322b09d90231c8788aad75e9b1078d23_1994681632 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 27
        $this->parent = $this->loadTemplate("@infinite/embeds/api_fb.html.twig", "profiles/thunder/themes/infinite/templates/system/html.html.twig", 27);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "@infinite/embeds/api_fb.html.twig";
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

        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "profiles/thunder/themes/infinite/templates/system/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  234 => 27,  170 => 22,  142 => 29,  139 => 28,  136 => 27,  133 => 26,  130 => 25,  126 => 24,  123 => 23,  120 => 22,  117 => 21,  114 => 20,  106 => 36,  100 => 33,  96 => 32,  92 => 31,  89 => 30,  86 => 25,  84 => 20,  80 => 19,  74 => 16,  70 => 15,  66 => 14,  62 => 13,  55 => 9,  51 => 7,  49 => 5,  48 => 4,  47 => 3,  46 => 2,  45 => 1,);
    }
}
/* {% set body_classes = [*/
/* logged_in ? 'user-logged-in',*/
/* not root_path ? 'page-front' : 'page-' ~ root_path|clean_class,*/
/* node_type ? 'page-' ~ node_type|clean_class,*/
/* db_offline ? 'db-offline',*/
/* ] %}*/
/* */
/* <!DOCTYPE html>*/
/* <html{{ html_attributes }}>*/
/*     <head>*/
/*         <meta charset="utf-8">*/
/*         <meta name="viewport" content="width=device-width, initial-scale=1.0">*/
/*         <head-placeholder token="{{ placeholder_token|raw }}">*/
/*         <title>{{ head_title|safe_join(' | ') }}</title>*/
/*         <css-placeholder token="{{ placeholder_token|raw }}">*/
/*         <js-placeholder token="{{ placeholder_token|raw }}">*/
/* */
/*     </head>*/
/*     <body class="{{ attributes.addClass(body_classes).class }}">*/
/*         {% block api_gtm %}*/
/*             {% if gtm_vars %}*/
/*                 {% embed '@infinite/embeds/api_gtm.html.twig' with gtm_vars %}{% endembed %}*/
/*             {% endif %}*/
/*         {% endblock %}*/
/*         {% block api_fb %}*/
/*             {% if fb_vars %}*/
/*                 {% embed '@infinite/embeds/api_fb.html.twig' with fb_vars %}{% endembed %}*/
/*             {% endif %}*/
/*         {% endblock %}*/
/*         <div id="page-wrapper">*/
/*             {{ page_top }}*/
/*             {{ page }}*/
/*             {{ page_bottom }}*/
/* */
/*         </div>*/
/*         <js-bottom-placeholder token="{{ placeholder_token|raw }}">*/
/*     </body>*/
/* </html>*/
/* */
