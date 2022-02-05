"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_rebrique_Rebrique_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rebrique/Rebrique.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rebrique/Rebrique.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      visible: true,
      Rebriques: [],
      Rebrique: {
        titre: "",
        id: 'false'
      },
      check: [],
      edit: false,
      show: true,
      alert: {
        dismissCountDown: 0,
        variant: "",
        msg: ""
      }
    };
  },
  created: function created() {
    this.fetchRebriques();
  },
  methods: {
    fetchRebriques: function fetchRebriques() {
      var _this = this;

      var page_url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/api/rebrique";
      var vm = this;
      fetch(page_url, {
        method: 'GET'
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.Rebriques = res;
        _this.show = false;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    deleteRebrique: function deleteRebrique(id) {
      var _this2 = this;

      if (confirm('Delete Rebrique ' + id)) {
        fetch('api/rebrique/' + id, {
          method: 'delete'
        }).then(function (res) {
          _this2.fetchRebriques();

          _this2.alert.variant = "danger";
          _this2.alert.msg = "Rebrique suprimée avec succès";
          _this2.alert.dismissCountDown = 5;
        }).then(function (data) {})["catch"](function (err) {
          return console.log(err);
        });
      }
    },
    resetModal1: function resetModal1() {
      this.rebrique = {};
    },
    addRebrique: function addRebrique() {
      var _this3 = this;

      if (!this.edit) {
        fetch('api/rebrique/', {
          method: 'post',
          body: JSON.stringify(this.Rebrique),
          headers: {
            "Content-Type": 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this3.Rebrique.titre = "";
          _this3.alert.variant = "success";
          _this3.alert.msg = "rebriqe ajoutée avec succès";
          _this3.alert.dismissCountDown = 5;

          _this3.fetchRebriques();
        })["catch"](function (err) {
          return console.log(err);
        });
      } else {
        fetch('api/rebrique/' + this.Rebrique.id, {
          method: 'put',
          body: JSON.stringify(this.Rebrique),
          headers: {
            "Content-Type": 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this3.fetchRebriques();

          _this3.alert.variant = "warning";
          _this3.alert.msg = "rebriqe modifiée avec succès";
          _this3.alert.dismissCountDown = 5;
          _this3.Rebrique = {
            titre: "",
            id: 'false'
          };
          _this3.edit = false;
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    },
    updateRebrique: function updateRebrique(Rebrique) {
      this.edit = true;
      this.Rebrique = Rebrique;
    }
  },
  computed: {}
});

/***/ }),

/***/ "./resources/js/components/rebrique/Rebrique.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/rebrique/Rebrique.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rebrique_vue_vue_type_template_id_4a7c4518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rebrique.vue?vue&type=template&id=4a7c4518& */ "./resources/js/components/rebrique/Rebrique.vue?vue&type=template&id=4a7c4518&");
/* harmony import */ var _Rebrique_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rebrique.vue?vue&type=script&lang=js& */ "./resources/js/components/rebrique/Rebrique.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Rebrique_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Rebrique_vue_vue_type_template_id_4a7c4518___WEBPACK_IMPORTED_MODULE_0__.render,
  _Rebrique_vue_vue_type_template_id_4a7c4518___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/rebrique/Rebrique.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/rebrique/Rebrique.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/rebrique/Rebrique.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rebrique_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rebrique.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rebrique/Rebrique.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rebrique_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/rebrique/Rebrique.vue?vue&type=template&id=4a7c4518&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/rebrique/Rebrique.vue?vue&type=template&id=4a7c4518& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rebrique_vue_vue_type_template_id_4a7c4518___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rebrique_vue_vue_type_template_id_4a7c4518___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rebrique_vue_vue_type_template_id_4a7c4518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rebrique.vue?vue&type=template&id=4a7c4518& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rebrique/Rebrique.vue?vue&type=template&id=4a7c4518&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rebrique/Rebrique.vue?vue&type=template&id=4a7c4518&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rebrique/Rebrique.vue?vue&type=template&id=4a7c4518& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mt-4" },
    [
      _vm.show
        ? _c("b-overlay", {
            staticClass: "d-inline-block",
            staticStyle: { height: "500px", width: "100%" },
            attrs: { show: _vm.show },
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.show
        ? _c(
            "div",
            [
              _c(
                "div",
                {
                  staticClass: "input-group mb-4",
                  staticStyle: { width: "50%", left: "25%" },
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.Rebrique.titre,
                        expression: "Rebrique.titre",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "rebname",
                      placeholder: "titre",
                    },
                    domProps: { value: _vm.Rebrique.titre },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.Rebrique, "titre", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-append" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: { click: _vm.addRebrique },
                      },
                      [_vm._v("Sauvegarder")]
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-alert",
                {
                  attrs: {
                    show: _vm.alert.dismissCountDown,
                    dismissible: "",
                    variant: _vm.alert.variant,
                  },
                  on: {
                    dismissed: function ($event) {
                      _vm.alert.dismissCountDown = 0
                    },
                  },
                },
                [_c("p", [_vm._v(_vm._s(_vm.alert.msg))])]
              ),
              _vm._v(" "),
              _c(
                "b-card",
                _vm._l(_vm.Rebriques, function (rebrique) {
                  return _c(
                    "li",
                    {
                      key: rebrique.id,
                      staticClass: "container list-unstyled",
                    },
                    [
                      _c("div", { staticClass: "row shadow-sm" }, [
                        _c("div", { staticClass: "col-10" }, [
                          _c("div", [
                            _c(
                              "label",
                              {
                                on: {
                                  dblclick: function ($event) {
                                    rebrique.edit = true
                                  },
                                },
                              },
                              [_vm._v(_vm._s(rebrique.titre))]
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-2" }, [
                          _c(
                            "button",
                            {
                              staticClass: "float-end btn",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  return _vm.deleteRebrique(rebrique.id)
                                },
                              },
                            },
                            [
                              _c("b-icon", {
                                attrs: {
                                  icon: "trash",
                                  scale: "1",
                                  variant: "danger",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "float-end btn",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  return _vm.updateRebrique(rebrique)
                                },
                              },
                            },
                            [
                              _c("b-icon", {
                                attrs: {
                                  icon: "pen",
                                  scale: "1",
                                  variant: "warning",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]
                  )
                }),
                0
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);