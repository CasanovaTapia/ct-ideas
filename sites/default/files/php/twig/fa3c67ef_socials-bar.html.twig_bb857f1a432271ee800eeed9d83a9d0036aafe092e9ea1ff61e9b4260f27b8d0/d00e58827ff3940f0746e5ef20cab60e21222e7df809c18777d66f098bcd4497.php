<?php

/* profiles/thunder/modules/infinite_module/modules/infinite_blocks/templates/socials-bar.html.twig */
class __TwigTemplate_0409bc513b90dd242635137d0dde11411dec2178df162d176b32cfd505a1dd48 extends Twig_Template
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
        $tags = array("if" => 1, "set" => 5);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if', 'set'),
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
        if ( !(isset($context["use_parent_container"]) ? $context["use_parent_container"] : null)) {
            // line 2
            echo "<div class=\"socials socials-bar\">
    ";
        }
        // line 4
        echo "
    ";
        // line 5
        $context["rel_follow"] = "nofollow";
        // line 6
        echo "    ";
        if ((isset($context["follow"]) ? $context["follow"] : null)) {
            echo " ";
            $context["rel_follow"] = "follow";
            echo " ";
        }
        // line 7
        echo "
    <a class=\"item-social icon-facebook\" href=\"https://www.facebook.com/InStyleGermany\" target=\"_blank\"
       data-social-type=\"facebook\" rel=\"";
        // line 9
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["rel_follow"]) ? $context["rel_follow"] : null), "html", null, true));
        echo "\"></a>
    <a class=\"item-social icon-instagram\" href=\"https://instagram.com/InStyleGermany/\" target=\"_blank\"
       data-social-type=\"instagram\" rel=\"";
        // line 11
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["rel_follow"]) ? $context["rel_follow"] : null), "html", null, true));
        echo "\"></a>
    <a class=\"item-social icon-pinterest\" href=\"https://www.pinterest.com/instylegermany/\" target=\"_blank\"
       data-social-type=\"pinterest\" rel=\"";
        // line 13
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["rel_follow"]) ? $context["rel_follow"] : null), "html", null, true));
        echo "\"></a>
    <a class=\"item-social icon-twitter\" href=\"https://twitter.com/InStyleGermany\" target=\"_blank\"
       data-social-type=\"twitter\" rel=\"";
        // line 15
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["rel_follow"]) ? $context["rel_follow"] : null), "html", null, true));
        echo "\"></a>

    <a class=\"item-social icon-email\" href=\"/newsletter\" data-social-type=\"email\"></a>

    ";
        // line 19
        if ( !(isset($context["use_parent_container"]) ? $context["use_parent_container"] : null)) {
            // line 20
            echo "</div>
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/thunder/modules/infinite_module/modules/infinite_blocks/templates/socials-bar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  89 => 20,  87 => 19,  80 => 15,  75 => 13,  70 => 11,  65 => 9,  61 => 7,  54 => 6,  52 => 5,  49 => 4,  45 => 2,  43 => 1,);
    }
}
/* {% if not use_parent_container %}*/
/* <div class="socials socials-bar">*/
/*     {% endif %}*/
/* */
/*     {% set rel_follow = 'nofollow' %}*/
/*     {% if follow %} {% set rel_follow = 'follow' %} {% endif %}*/
/* */
/*     <a class="item-social icon-facebook" href="https://www.facebook.com/InStyleGermany" target="_blank"*/
/*        data-social-type="facebook" rel="{{ rel_follow }}"></a>*/
/*     <a class="item-social icon-instagram" href="https://instagram.com/InStyleGermany/" target="_blank"*/
/*        data-social-type="instagram" rel="{{ rel_follow }}"></a>*/
/*     <a class="item-social icon-pinterest" href="https://www.pinterest.com/instylegermany/" target="_blank"*/
/*        data-social-type="pinterest" rel="{{ rel_follow }}"></a>*/
/*     <a class="item-social icon-twitter" href="https://twitter.com/InStyleGermany" target="_blank"*/
/*        data-social-type="twitter" rel="{{ rel_follow }}"></a>*/
/* */
/*     <a class="item-social icon-email" href="/newsletter" data-social-type="email"></a>*/
/* */
/*     {% if not use_parent_container %}*/
/* </div>*/
/* {% endif %}*/
