<?php

/* @infinite/embeds/api_gtm.html.twig */
class __TwigTemplate_cbc96f9c4b68f450094f900a301f2e6ecf4f709ac36210d2f732f230cc44ec86 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'api_gtm' => array($this, 'block_api_gtm'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("block" => 1, "if" => 3);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('block', 'if'),
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
        $this->displayBlock('api_gtm', $context, $blocks);
    }

    public function block_api_gtm($context, array $blocks = array())
    {
        // line 2
        echo "
  ";
        // line 3
        if ( !twig_test_empty((isset($context["gtm_id"]) ? $context["gtm_id"] : null))) {
            // line 4
            echo "    <!-- Google Tag Manager -->
    <noscript><iframe src=\"//www.googletagmanager.com/ns.html?id=";
            // line 5
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["gtm_id"]) ? $context["gtm_id"] : null), "html", null, true));
            echo "\"
                      height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>
    <script>
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer', '";
            // line 12
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["gtm_id"]) ? $context["gtm_id"] : null), "html", null, true));
            echo "');

      dataLayer = [];
    </script>
    <!-- End Google Tag Manager -->
  ";
        }
    }

    public function getTemplateName()
    {
        return "@infinite/embeds/api_gtm.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  68 => 12,  58 => 5,  55 => 4,  53 => 3,  50 => 2,  44 => 1,);
    }
}
/* {% block api_gtm %}*/
/* */
/*   {% if gtm_id is not empty %}*/
/*     <!-- Google Tag Manager -->*/
/*     <noscript><iframe src="//www.googletagmanager.com/ns.html?id={{ gtm_id }}"*/
/*                       height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>*/
/*     <script>*/
/*       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/
/*               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/
/*               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/
/*               '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/
/*       })(window,document,'script','dataLayer', '{{ gtm_id }}');*/
/* */
/*       dataLayer = [];*/
/*     </script>*/
/*     <!-- End Google Tag Manager -->*/
/*   {% endif %}*/
/* {% endblock %}*/
