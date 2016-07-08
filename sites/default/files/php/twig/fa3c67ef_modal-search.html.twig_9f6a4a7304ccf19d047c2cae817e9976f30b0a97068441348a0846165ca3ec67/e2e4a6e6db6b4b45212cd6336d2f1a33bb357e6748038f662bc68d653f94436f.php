<?php

/* profiles/thunder/modules/infinite_module/modules/infinite_blocks/templates/modal-search.html.twig */
class __TwigTemplate_a637fa13424336a2b043740f6d098266b759b9cb5d999cc2928e85407d661114 extends Twig_Template
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
        $tags = array("set" => 2);
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

        // line 1
        echo "<!-- //TODO set the search_min_char var dynamic -->
";
        // line 2
        $context["search_min_char"] = 3;
        // line 3
        echo "
<div id=\"modal-search\" class=\"modal modal-full fade\" role=\"dialog\" data-keyboard=\"false\" data-view-context>

    <div class=\"modal-content\">
        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
            <span aria-hidden=\"true\" class=\"icon icon-close\"></span>
        </button>

        <div class=\"container-input\">
            <input id=\"modal-search-input\" data-min-char-length=\"";
        // line 12
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["search_min_char"]) ? $context["search_min_char"] : null), "html", null, true));
        echo "\"
                   class=\"item-input text-headline text-headline-size-h1 input-blank\"
                   placeholder=\"|Suchen\" type=\"search\" name=\"search\" />
        </div>
        <div class=\"h-line\"></div>
        <div class=\"container-description\">
            <div id=\"modal-search-description\">
                <div class=\"message-default text-label text-label-size-medium\">Suchbegriff eingeben</div>
                <div class=\"message-char-length icon icon-info\">Noch mind. <span
                            class=\"char-count\">";
        // line 21
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["search_min_char"]) ? $context["search_min_char"] : null), "html", null, true));
        echo "</span> Zeichen
                </div>
                <div class=\"message-active text-label text-label-size-medium\">Mit <i class=\"icon icon-return\">
                        bestätigen</i></div>
            </div>
        </div>

        <div id=\"feed-modal-search\" class=\"region-feed-teasers region-feed\" data-view-type=\"feedView\">
            <div class=\"container-content container-content-dynamic container-feed-items\"></div>
        </div>
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "profiles/thunder/modules/infinite_module/modules/infinite_blocks/templates/modal-search.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  71 => 21,  59 => 12,  48 => 3,  46 => 2,  43 => 1,);
    }
}
/* <!-- //TODO set the search_min_char var dynamic -->*/
/* {% set search_min_char = 3 %}*/
/* */
/* <div id="modal-search" class="modal modal-full fade" role="dialog" data-keyboard="false" data-view-context>*/
/* */
/*     <div class="modal-content">*/
/*         <button type="button" class="close" data-dismiss="modal" aria-label="Close">*/
/*             <span aria-hidden="true" class="icon icon-close"></span>*/
/*         </button>*/
/* */
/*         <div class="container-input">*/
/*             <input id="modal-search-input" data-min-char-length="{{ search_min_char }}"*/
/*                    class="item-input text-headline text-headline-size-h1 input-blank"*/
/*                    placeholder="|Suchen" type="search" name="search" />*/
/*         </div>*/
/*         <div class="h-line"></div>*/
/*         <div class="container-description">*/
/*             <div id="modal-search-description">*/
/*                 <div class="message-default text-label text-label-size-medium">Suchbegriff eingeben</div>*/
/*                 <div class="message-char-length icon icon-info">Noch mind. <span*/
/*                             class="char-count">{{ search_min_char }}</span> Zeichen*/
/*                 </div>*/
/*                 <div class="message-active text-label text-label-size-medium">Mit <i class="icon icon-return">*/
/*                         bestätigen</i></div>*/
/*             </div>*/
/*         </div>*/
/* */
/*         <div id="feed-modal-search" class="region-feed-teasers region-feed" data-view-type="feedView">*/
/*             <div class="container-content container-content-dynamic container-feed-items"></div>*/
/*         </div>*/
/*     </div>*/
/* </div>*/
