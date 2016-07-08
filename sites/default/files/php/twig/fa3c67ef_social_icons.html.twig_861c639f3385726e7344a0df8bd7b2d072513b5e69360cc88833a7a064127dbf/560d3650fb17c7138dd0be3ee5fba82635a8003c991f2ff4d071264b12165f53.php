<?php

/* @infinite/embeds/social_icons.html.twig */
class __TwigTemplate_dc8a3cd2c3334e3534bba737095bbe0d7781af8c49f1d1585e56cb2348a7b1d0 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'social_facebook' => array($this, 'block_social_facebook'),
            'social_facebook_button' => array($this, 'block_social_facebook_button'),
            'social_whatsapp' => array($this, 'block_social_whatsapp'),
            'social_whatsapp_button' => array($this, 'block_social_whatsapp_button'),
            'social_pinterest' => array($this, 'block_social_pinterest'),
            'social_pinterest_button' => array($this, 'block_social_pinterest_button'),
            'social_twitter' => array($this, 'block_social_twitter'),
            'social_twitter_button' => array($this, 'block_social_twitter_button'),
            'social_email' => array($this, 'block_social_email'),
            'social_email_button' => array($this, 'block_social_email_button'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 2, "block" => 5, "if" => 8);
        $filters = array("trim" => 2, "plain_text" => 2, "e" => 6);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('set', 'block', 'if'),
                array('trim', 'plain_text', 'e'),
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

        // line 2
        $context["label"] = trim($this->env->getExtension('filter_extension')->plainText((isset($context["label"]) ? $context["label"] : null)));
        // line 3
        $context["whatsapp_share_text"] = trim($this->env->getExtension('filter_extension')->plainText((isset($context["whatsapp_share_text"]) ? $context["whatsapp_share_text"] : null)));
        // line 4
        echo "
";
        // line 5
        $this->displayBlock('social_facebook', $context, $blocks);
        // line 14
        $this->displayBlock('social_whatsapp', $context, $blocks);
        // line 23
        echo "
";
        // line 24
        $this->displayBlock('social_pinterest', $context, $blocks);
        // line 33
        echo "
";
        // line 34
        $this->displayBlock('social_twitter', $context, $blocks);
        // line 43
        echo "
";
        // line 44
        $this->displayBlock('social_email', $context, $blocks);
    }

    // line 5
    public function block_social_facebook($context, array $blocks = array())
    {
        // line 6
        echo "  <div class=\"item-social icon-facebook\" data-url=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["url"]) ? $context["url"] : null), "html_attr"));
        echo "\" data-description=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html_attr"));
        echo "\"  data-social-type=\"facebook\">
    ";
        // line 7
        $this->displayBlock('social_facebook_button', $context, $blocks);
        // line 12
        echo "  </div>
";
    }

    // line 7
    public function block_social_facebook_button($context, array $blocks = array())
    {
        // line 8
        echo "      ";
        if ((isset($context["facebook_share_button"]) ? $context["facebook_share_button"] : null)) {
            // line 9
            echo "        <span>";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["facebook_share_button"]) ? $context["facebook_share_button"] : null), "html", null, true));
            echo "</span>
      ";
        }
        // line 11
        echo "    ";
    }

    // line 14
    public function block_social_whatsapp($context, array $blocks = array())
    {
        // line 15
        echo "  <a class=\"item-social icon-whatsapp\" href=\"whatsapp://send?text=";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->env->getExtension('drupal_core')->escapeFilter($this->env, ((((isset($context["whatsapp_share_text"]) ? $context["whatsapp_share_text"] : null) . (isset($context["label"]) ? $context["label"] : null)) . " - ") . (isset($context["url"]) ? $context["url"] : null)), "url"), "html", null, true));
        echo "\" data-social-type=\"whatsapp\">
    ";
        // line 16
        $this->displayBlock('social_whatsapp_button', $context, $blocks);
        // line 21
        echo "  </a>
";
    }

    // line 16
    public function block_social_whatsapp_button($context, array $blocks = array())
    {
        // line 17
        echo "      ";
        if ((isset($context["whatsapp_share_button"]) ? $context["whatsapp_share_button"] : null)) {
            // line 18
            echo "        <span>";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["whatsapp_share_button"]) ? $context["whatsapp_share_button"] : null), "html", null, true));
            echo "</span>
      ";
        }
        // line 20
        echo "    ";
    }

    // line 24
    public function block_social_pinterest($context, array $blocks = array())
    {
        // line 25
        echo "  <div class=\"item-social icon-pinterest\" data-url=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["url"]) ? $context["url"] : null), "html_attr"));
        echo "\" data-media-url=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["share_img_url"]) ? $context["share_img_url"] : null), "html_attr"));
        echo "\" data-description=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html_attr"));
        echo "\" data-social-type=\"pinterest\">
    ";
        // line 26
        $this->displayBlock('social_pinterest_button', $context, $blocks);
        // line 31
        echo "  </div>
";
    }

    // line 26
    public function block_social_pinterest_button($context, array $blocks = array())
    {
        // line 27
        echo "      ";
        if ((isset($context["pinterest_share_button"]) ? $context["pinterest_share_button"] : null)) {
            // line 28
            echo "        <span>";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["pinterest_share_button"]) ? $context["pinterest_share_button"] : null), "html", null, true));
            echo "</span>
      ";
        }
        // line 30
        echo "    ";
    }

    // line 34
    public function block_social_twitter($context, array $blocks = array())
    {
        // line 35
        echo "  <a class=\"item-social icon-twitter\" href=\"https://twitter.com/intent/tweet?text=";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (((($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "url") . "&url=") . $this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["url"]) ? $context["url"] : null), "url")) . "&via=") . $this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["twitter_share_via"]) ? $context["twitter_share_via"] : null), "url")), "html", null, true));
        echo "\" target=\"_blank\" data-social-type=\"twitter\">
    ";
        // line 36
        $this->displayBlock('social_twitter_button', $context, $blocks);
        // line 41
        echo "  </a>
";
    }

    // line 36
    public function block_social_twitter_button($context, array $blocks = array())
    {
        // line 37
        echo "      ";
        if ((isset($context["twitter_share_button"]) ? $context["twitter_share_button"] : null)) {
            // line 38
            echo "        <span>";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["twitter_share_button"]) ? $context["twitter_share_button"] : null), "html", null, true));
            echo "</span>
      ";
        }
        // line 40
        echo "    ";
    }

    // line 44
    public function block_social_email($context, array $blocks = array())
    {
        // line 45
        echo "  <div class=\"item-social icon-email\" data-url=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["url"]) ? $context["url"] : null), "html_attr"));
        echo "\" data-email-share-text=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["email_share_text"]) ? $context["email_share_text"] : null), "html_attr"));
        echo "\" data-email-subject=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["email_subject"]) ? $context["email_subject"] : null), "html_attr"));
        echo "\" data-description=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html_attr"));
        echo "\" data-social-type=\"email\">
    ";
        // line 46
        $this->displayBlock('social_email_button', $context, $blocks);
        // line 51
        echo "  </div>
";
    }

    // line 46
    public function block_social_email_button($context, array $blocks = array())
    {
        // line 47
        echo "      ";
        if ((isset($context["email_share_button"]) ? $context["email_share_button"] : null)) {
            // line 48
            echo "        <span>";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["email_share_button"]) ? $context["email_share_button"] : null), "html", null, true));
            echo "</span>
      ";
        }
        // line 50
        echo "    ";
    }

    public function getTemplateName()
    {
        return "@infinite/embeds/social_icons.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  244 => 50,  238 => 48,  235 => 47,  232 => 46,  227 => 51,  225 => 46,  214 => 45,  211 => 44,  207 => 40,  201 => 38,  198 => 37,  195 => 36,  190 => 41,  188 => 36,  183 => 35,  180 => 34,  176 => 30,  170 => 28,  167 => 27,  164 => 26,  159 => 31,  157 => 26,  148 => 25,  145 => 24,  141 => 20,  135 => 18,  132 => 17,  129 => 16,  124 => 21,  122 => 16,  117 => 15,  114 => 14,  110 => 11,  104 => 9,  101 => 8,  98 => 7,  93 => 12,  91 => 7,  84 => 6,  81 => 5,  77 => 44,  74 => 43,  72 => 34,  69 => 33,  67 => 24,  64 => 23,  62 => 14,  60 => 5,  57 => 4,  55 => 3,  53 => 2,);
    }
}
/* {# Process label to be plain_text and trimmed always #}*/
/* {% set label = label|plain_text|trim %}*/
/* {% set whatsapp_share_text = whatsapp_share_text|plain_text|trim %}*/
/* */
/* {% block social_facebook %}*/
/*   <div class="item-social icon-facebook" data-url="{{ url | e('html_attr')}}" data-description="{{ label | e('html_attr') }}"  data-social-type="facebook">*/
/*     {% block social_facebook_button %}*/
/*       {% if facebook_share_button %}*/
/*         <span>{{ facebook_share_button }}</span>*/
/*       {% endif %}*/
/*     {% endblock %}*/
/*   </div>*/
/* {% endblock %}*/
/* {% block social_whatsapp %}*/
/*   <a class="item-social icon-whatsapp" href="whatsapp://send?text={{ (whatsapp_share_text ~ label ~ ' - ' ~ url) | e('url') }}" data-social-type="whatsapp">*/
/*     {% block social_whatsapp_button %}*/
/*       {% if whatsapp_share_button %}*/
/*         <span>{{ whatsapp_share_button }}</span>*/
/*       {% endif %}*/
/*     {% endblock %}*/
/*   </a>*/
/* {% endblock %}*/
/* */
/* {% block social_pinterest %}*/
/*   <div class="item-social icon-pinterest" data-url="{{ url | e('html_attr')}}" data-media-url="{{ share_img_url | e('html_attr')}}" data-description="{{ label | e('html_attr') }}" data-social-type="pinterest">*/
/*     {% block social_pinterest_button %}*/
/*       {% if pinterest_share_button %}*/
/*         <span>{{ pinterest_share_button }}</span>*/
/*       {% endif %}*/
/*     {% endblock %}*/
/*   </div>*/
/* {% endblock %}*/
/* */
/* {% block social_twitter %}*/
/*   <a class="item-social icon-twitter" href="https://twitter.com/intent/tweet?text={{ label | e('url') ~ '&url=' ~ url | e('url') ~ '&via=' ~ twitter_share_via | e('url') }}" target="_blank" data-social-type="twitter">*/
/*     {% block social_twitter_button %}*/
/*       {% if twitter_share_button %}*/
/*         <span>{{ twitter_share_button }}</span>*/
/*       {% endif %}*/
/*     {% endblock %}*/
/*   </a>*/
/* {% endblock %}*/
/* */
/* {% block social_email %}*/
/*   <div class="item-social icon-email" data-url="{{ url | e('html_attr') }}" data-email-share-text="{{ email_share_text | e('html_attr')}}" data-email-subject="{{ email_subject | e('html_attr') }}" data-description="{{ label | e('html_attr') }}" data-social-type="email">*/
/*     {% block social_email_button %}*/
/*       {% if email_share_button %}*/
/*         <span>{{ email_share_button }}</span>*/
/*       {% endif %}*/
/*     {% endblock %}*/
/*   </div>*/
/* {% endblock %}*/
