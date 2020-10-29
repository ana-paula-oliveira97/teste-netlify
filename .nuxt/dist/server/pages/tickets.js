exports.ids = [10];
exports.modules = {

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tickets.vue?vue&type=template&id=1c18736b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form"},[_vm._ssrNode("<div class=\"navegacao\">","</div>",[_vm._ssrNode("<p>","</p>",[_c('NuxtLink',{staticClass:"navegacao",attrs:{"to":"/"}},[_vm._v("Início")]),_vm._ssrNode(" &gt; Reserve seu lugar\n    ")],2)]),_vm._ssrNode(" "),_c('b-form-group',{attrs:{"id":"input-group-1","label":"Nome:","label-for":"input-2"}},[_c('b-form-input',{attrs:{"id":"input-1","required":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._ssrNode(" "),_c('b-form-group',{attrs:{"id":"input-group-2","label":"Quantidade de Pessoas:","label-for":"input-2"}},[_c('b-form-input',{attrs:{"id":"input-2","required":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._ssrNode(" "),_c('b-form-group',{attrs:{"id":"input-group-3","label":"Filmes:","label-for":"input-3"}},[_c('b-form-select',{attrs:{"id":"input-3","options":_vm.foods,"required":""},model:{value:(_vm.form.food),callback:function ($$v) {_vm.$set(_vm.form, "food", $$v)},expression:"form.food"}})],1),_vm._ssrNode(" "),_c('b-form-group',{attrs:{"id":"input-group-4","label":"Filme em 3D:","label-for":"input-4"}},[_c('b-form-checkbox-group',{attrs:{"id":"checkboxes-4"},model:{value:(_vm.form.checked),callback:function ($$v) {_vm.$set(_vm.form, "checked", $$v)},expression:"form.checked"}},[_c('b-form-checkbox',{attrs:{"value":"me"}},[_vm._v("Sim")]),_vm._v(" "),_c('b-form-checkbox',{attrs:{"value":"that"}},[_vm._v("Não")])],1)],1),_vm._ssrNode(" "),_c('b-button',{attrs:{"type":"submit","variant":"primary"}},[_vm._v("Enviar")]),_vm._ssrNode(" "),_c('b-button',{attrs:{"type":"reset","variant":"danger"}},[_vm._v("Cancelar")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tickets.vue?vue&type=template&id=1c18736b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tickets.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ticketsvue_type_script_lang_js_ = ({
  data() {
    return {
      form: {
        name: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [{
        text: "Selecione",
        value: null
      }, "Escolhida", "Morte Súbita 2", "A Gangue: Uma noite de sangue", "Sangue de Pelicano"],
      show: true
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },

    onReset(evt) {
      evt.preventDefault(); // Reset our form values

      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = []; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/tickets.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ticketsvue_type_script_lang_js_ = (ticketsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/tickets.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ticketsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "652f48c3"
  
)

/* harmony default export */ var tickets = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tickets.js.map