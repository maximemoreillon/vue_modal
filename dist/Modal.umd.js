(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue-material-design-icons/Close.vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue-material-design-icons/Close.vue'], factory) :
  (global = global || self, factory(global.Modal = {}, global.CloseIcon));
}(this, (function (exports, CloseIcon) { 'use strict';

  CloseIcon = CloseIcon && CloseIcon.hasOwnProperty('default') ? CloseIcon['default'] : CloseIcon;

  //


  var script = {
    name: 'Modal',
    components: {
      CloseIcon: CloseIcon
    },
    props: {
      open: Boolean,
      close_button: {
        type: Boolean,
        default: true,
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      var options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      var hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  var isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return function (id, style) { return addStyle(id, style); };
  }
  var HEAD;
  var styles = {};
  function addStyle(id, css) {
      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          var code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  { style.element.setAttribute('media', css.media); }
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              var index = style.ids.size - 1;
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index])
                  { style.element.removeChild(nodes[index]); }
              if (nodes.length)
                  { style.element.insertBefore(textNode, nodes[index]); }
              else
                  { style.element.appendChild(textNode); }
          }
      }
  }

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "modal",
        class: { open: _vm.open },
        on: {
          click: function($event) {
            if ($event.target !== $event.currentTarget) {
              return null
            }
            return _vm.$emit("close")
          }
        }
      },
      [
        _c("div", { staticClass: "modal_window_outer" }, [
          _c(
            "div",
            { staticClass: "modal_window_inner" },
            [
              _vm.close_button
                ? _c("close-icon", {
                    staticClass: "modal_close_button",
                    attrs: { size: 48 },
                    on: {
                      click: function($event) {
                        return _vm.$emit("close")
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm._t("default")
            ],
            2
          )
        ])
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-3b3502e8_0", { source: "\n.modal[data-v-3b3502e8]{\r\n  /* poisitioning and sizing of background*/\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 100;\r\n\r\n  /* positioning of content */\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  background-color: #444444; /* fallback for ie */\r\n  background-color: #444444aa;\r\n\r\n  /* values which change when opening the modal */\r\n  /* here are the defaults */\r\n  visibility: hidden;\r\n  opacity: 0;\r\n\r\n  transition:\r\n    visibility 0.5s,\r\n    opacity 0.5s;\n}\n.modal.open[data-v-3b3502e8]{\r\n  visibility: visible;\r\n  opacity: 1;\r\n\r\n  /* Delay when OPENING */\r\n  transition-delay: 0s;\n}\n.modal[data-v-3b3502e8]{\r\n  /* delay when CLOSING */\r\n  transition-delay: 0.25s;\n}\n.modal_window_outer[data-v-3b3502e8]{\r\n  /* for elements positioned absolutely inside */\r\n  position: relative;\r\n\r\n  opacity: 0;\r\n  transform: scaleX(0);\r\n  transition:\r\n    opacity 0.25s,\r\n    transform 0.25s;\r\n\r\n  /* delay when CLOSING */\r\n  transition-delay: 0.25s;\r\n\r\n  /* ADDITIONAL VISUALS */\r\n  background-color: white;\r\n  margin: 50px;\n}\n.modal_window_inner[data-v-3b3502e8]{\r\n  opacity: 0;\r\n  transition: opacity 0.25s;\r\n  /* Delay when CLOSING */\r\n  transition-delay: 0s;\r\n\r\n  /* ADDITIONAL VISUALS */\r\n  padding: 25px;\n}\n.modal.open .modal_window_outer[data-v-3b3502e8]{\r\n  opacity: 1;\r\n  transform: scaleX(1);\r\n\r\n  /* Delay when OPENING */\r\n  transition-delay: 0s;\n}\n.modal.open .modal_window_inner[data-v-3b3502e8]{\r\n  opacity: 1;\r\n  /* Delay when OPENING */\r\n  transition-delay: 0.25s;\n}\r\n\r\n/* close button */\n.modal_close_button[data-v-3b3502e8]{\r\n  position: absolute;\r\n  top: 0.2em;\r\n  right: 0.2em;\r\n  font-size: 150%;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  color: #00000066;\n}\n.modal_close_button[data-v-3b3502e8]:hover{\r\n  color: #000000;\n}\r\n", map: {"version":3,"sources":["/home/moreillon/vue/vue_modal/src/Modal.vue"],"names":[],"mappings":";AA6CA;EACA,yCAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;;EAEA,2BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;;EAEA,yBAAA,EAAA,oBAAA;EACA,2BAAA;;EAEA,+CAAA;EACA,0BAAA;EACA,kBAAA;EACA,UAAA;;EAEA;;gBAEA;AACA;AAEA;EACA,mBAAA;EACA,UAAA;;EAEA,uBAAA;EACA,oBAAA;AACA;AAEA;EACA,uBAAA;EACA,uBAAA;AACA;AAEA;EACA,8CAAA;EACA,kBAAA;;EAEA,UAAA;EACA,oBAAA;EACA;;mBAEA;;EAEA,uBAAA;EACA,uBAAA;;EAEA,uBAAA;EACA,uBAAA;EACA,YAAA;AACA;AAGA;EACA,UAAA;EACA,yBAAA;EACA,uBAAA;EACA,oBAAA;;EAEA,uBAAA;EACA,aAAA;AACA;AAEA;EACA,UAAA;EACA,oBAAA;;EAEA,uBAAA;EACA,oBAAA;AACA;AAGA;EACA,UAAA;EACA,uBAAA;EACA,uBAAA;AACA;;AAEA,iBAAA;AACA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;AACA;AAEA;EACA,cAAA;AACA","file":"Modal.vue","sourcesContent":["<template>\r\n  <div\r\n  class=\"modal\"\r\n  v-bind:class=\"{open: open}\"\r\n  v-on:click.self=\"$emit('close')\">\r\n\r\n    <div class=\"modal_window_outer\">\r\n      <div class=\"modal_window_inner\">\r\n\r\n        <!-- CLose button -->\r\n        <close-icon\r\n          v-if=\"close_button\"\r\n          class=\"modal_close_button\"\r\n          v-bind:size=\"48\"\r\n          v-on:click=\"$emit('close')\"/>\r\n\r\n        <!-- The content of the modal goes here -->\r\n        <slot></slot>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport CloseIcon from 'vue-material-design-icons/Close.vue';\r\n\r\n\r\nexport default {\r\n  name: 'Modal',\r\n  components: {\r\n    CloseIcon\r\n  },\r\n  props: {\r\n    open: Boolean,\r\n    close_button: {\r\n      type: Boolean,\r\n      default: true,\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\r\n<style scoped>\r\n.modal{\r\n  /* poisitioning and sizing of background*/\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 100;\r\n\r\n  /* positioning of content */\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  background-color: #444444; /* fallback for ie */\r\n  background-color: #444444aa;\r\n\r\n  /* values which change when opening the modal */\r\n  /* here are the defaults */\r\n  visibility: hidden;\r\n  opacity: 0;\r\n\r\n  transition:\r\n    visibility 0.5s,\r\n    opacity 0.5s;\r\n}\r\n\r\n.modal.open{\r\n  visibility: visible;\r\n  opacity: 1;\r\n\r\n  /* Delay when OPENING */\r\n  transition-delay: 0s;\r\n}\r\n\r\n.modal{\r\n  /* delay when CLOSING */\r\n  transition-delay: 0.25s;\r\n}\r\n\r\n.modal_window_outer{\r\n  /* for elements positioned absolutely inside */\r\n  position: relative;\r\n\r\n  opacity: 0;\r\n  transform: scaleX(0);\r\n  transition:\r\n    opacity 0.25s,\r\n    transform 0.25s;\r\n\r\n  /* delay when CLOSING */\r\n  transition-delay: 0.25s;\r\n\r\n  /* ADDITIONAL VISUALS */\r\n  background-color: white;\r\n  margin: 50px;\r\n}\r\n\r\n\r\n.modal_window_inner{\r\n  opacity: 0;\r\n  transition: opacity 0.25s;\r\n  /* Delay when CLOSING */\r\n  transition-delay: 0s;\r\n\r\n  /* ADDITIONAL VISUALS */\r\n  padding: 25px;\r\n}\r\n\r\n.modal.open .modal_window_outer{\r\n  opacity: 1;\r\n  transform: scaleX(1);\r\n\r\n  /* Delay when OPENING */\r\n  transition-delay: 0s;\r\n}\r\n\r\n\r\n.modal.open .modal_window_inner{\r\n  opacity: 1;\r\n  /* Delay when OPENING */\r\n  transition-delay: 0.25s;\r\n}\r\n\r\n/* close button */\r\n.modal_close_button{\r\n  position: absolute;\r\n  top: 0.2em;\r\n  right: 0.2em;\r\n  font-size: 150%;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  color: #00000066;\r\n}\r\n\r\n.modal_close_button:hover{\r\n  color: #000000;\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = "data-v-3b3502e8";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__ = normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
  	if (install.installed) { return; }
  	install.installed = true;
  	Vue.component('Modal', __vue_component__);
  }

  // Create module definition for Vue.use()
  var plugin = {
  	install: install,
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  exports.default = __vue_component__;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
