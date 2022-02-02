"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_DemoPages_Components_ProgressBar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_Components_PageTitle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layout/Components/PageTitle.vue */ "./resources/js/Layout/Components/PageTitle.vue");
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
  components: {
    PageTitle: _Layout_Components_PageTitle_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      heading: 'Progress Bar',
      subheading: 'You can use the progress bars on their own or in combination with other widgets.',
      icon: 'pe-7s-filter icon-gradient bg-grow-early',
      counter: 45,
      max: 100,
      bars: [{
        variant: 'success',
        value: 75
      }, {
        variant: 'info',
        value: 75
      }, {
        variant: 'warning',
        value: 75
      }, {
        variant: 'danger',
        value: 75
      }, {
        variant: 'primary',
        value: 75
      }, {
        variant: 'secondary',
        value: 75
      }, {
        variant: 'dark',
        value: 75
      }, {
        variant: 'alternate',
        value: 75
      }, {
        variant: 'focus',
        value: 75
      }],
      timer: null,
      striped: true,
      value: 75
    };
  },
  methods: {
    clicked: function clicked() {
      this.counter = Math.random() * this.max;
      console.log('Change progress to ' + Math.round(this.counter * 100) / 100);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.timer = setInterval(function () {
      _this.bars.forEach(function (bar) {
        return bar.value = 25 + Math.random() * 75;
      });
    }, 2000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layout/Components/PageTitle.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layout/Components/PageTitle.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
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



_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPlus);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    'font-awesome-icon': _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon
  },
  props: {
    icon: String,
    heading: String,
    subheading: String
  }
});

/***/ }),

/***/ "./resources/js/DemoPages/Components/ProgressBar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/DemoPages/Components/ProgressBar.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProgressBar_vue_vue_type_template_id_44275679___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=template&id=44275679& */ "./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=template&id=44275679&");
/* harmony import */ var _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=script&lang=js& */ "./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProgressBar_vue_vue_type_template_id_44275679___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProgressBar_vue_vue_type_template_id_44275679___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/DemoPages/Components/ProgressBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Layout/Components/PageTitle.vue":
/*!******************************************************!*\
  !*** ./resources/js/Layout/Components/PageTitle.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageTitle_vue_vue_type_template_id_5847ad32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=template&id=5847ad32& */ "./resources/js/Layout/Components/PageTitle.vue?vue&type=template&id=5847ad32&");
/* harmony import */ var _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=script&lang=js& */ "./resources/js/Layout/Components/PageTitle.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageTitle_vue_vue_type_template_id_5847ad32___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageTitle_vue_vue_type_template_id_5847ad32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layout/Components/PageTitle.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProgressBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layout/Components/PageTitle.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Layout/Components/PageTitle.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layout/Components/PageTitle.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=template&id=44275679&":
/*!******************************************************************************************!*\
  !*** ./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=template&id=44275679& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_44275679___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_44275679___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_44275679___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProgressBar.vue?vue&type=template&id=44275679& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=template&id=44275679&");


/***/ }),

/***/ "./resources/js/Layout/Components/PageTitle.vue?vue&type=template&id=5847ad32&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Layout/Components/PageTitle.vue?vue&type=template&id=5847ad32& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_5847ad32___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_5847ad32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_5847ad32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTitle.vue?vue&type=template&id=5847ad32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layout/Components/PageTitle.vue?vue&type=template&id=5847ad32&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=template&id=44275679&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/DemoPages/Components/ProgressBar.vue?vue&type=template&id=44275679& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    [
      _c("page-title", {
        attrs: {
          heading: _vm.heading,
          subheading: _vm.subheading,
          icon: _vm.icon,
        },
      }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-3", attrs: { title: "Basic" } },
                [
                  _c("b-progress", {
                    attrs: {
                      value: _vm.counter,
                      max: _vm.max,
                      "show-progress": "",
                      animated: "",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "b-progress",
                    {
                      staticClass: "mt-1",
                      attrs: { max: _vm.max, "show-value": "" },
                    },
                    [
                      _c("b-progress-bar", {
                        attrs: {
                          value: _vm.counter * (6 / 10),
                          variant: "success",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-progress-bar", {
                        attrs: {
                          value: _vm.counter * (2.5 / 10),
                          variant: "warning",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-progress-bar", {
                        attrs: {
                          value: _vm.counter * (1.5 / 10),
                          variant: "danger",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-btn",
                    { staticClass: "mt-4", on: { click: _vm.clicked } },
                    [_vm._v("Click me")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                { staticClass: "mb-3", attrs: { title: "Colors" } },
                _vm._l(_vm.bars, function (bar) {
                  return _c("div", { staticClass: "row mb-1" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _vm._v(_vm._s(bar.variant) + ":"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10 pt-1" },
                      [
                        _c("b-progress", {
                          key: bar.variant,
                          attrs: { value: bar.value, variant: bar.variant },
                        }),
                      ],
                      1
                    ),
                  ])
                }),
                0
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-3", attrs: { title: "Sizing" } },
                [
                  _c("b-progress", {
                    staticClass: "mb-3",
                    attrs: { value: _vm.value, "show-progress": "" },
                  }),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "mb-2",
                    attrs: {
                      height: "2rem",
                      value: _vm.value,
                      "show-progress": "",
                    },
                  }),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "mb-2",
                    attrs: {
                      height: "20px",
                      value: _vm.value,
                      "show-progress": "",
                    },
                  }),
                  _vm._v(" "),
                  _c("b-progress", {
                    attrs: { height: "2px", value: _vm.value },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                { staticClass: "mb-3", attrs: { title: "Striped" } },
                [
                  _c("b-progress", {
                    staticClass: "mb-2",
                    attrs: {
                      value: 25,
                      variant: "success",
                      striped: _vm.striped,
                    },
                  }),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "mb-2",
                    attrs: { value: 50, variant: "info", striped: _vm.striped },
                  }),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "mb-2",
                    attrs: {
                      value: 75,
                      variant: "warning",
                      striped: _vm.striped,
                    },
                  }),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "mb-2",
                    attrs: {
                      value: 100,
                      variant: "danger",
                      striped: _vm.striped,
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "secondary" },
                      on: {
                        click: function ($event) {
                          _vm.striped = !_vm.striped
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.striped ? "Remove" : "Add") +
                          " Striped\n        "
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layout/Components/PageTitle.vue?vue&type=template&id=5847ad32&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layout/Components/PageTitle.vue?vue&type=template&id=5847ad32& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "app-page-title" }, [
    _c("div", { staticClass: "page-title-wrapper" }, [
      _c("div", { staticClass: "page-title-heading" }, [
        _c("div", { staticClass: "page-title-icon" }, [
          _c("i", { class: _vm.icon }),
        ]),
        _vm._v(" "),
        _c("div", [
          _vm._v(
            "\n                " + _vm._s(_vm.heading) + "\n                "
          ),
          _c("div", { staticClass: "page-title-subheading" }, [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.subheading) +
                "\n                "
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "page-title-actions" }, [
        _c(
          "button",
          {
            staticClass: "btn-shadow mr-3 btn btn-dark",
            attrs: { type: "button" },
          },
          [_c("font-awesome-icon", { attrs: { icon: "star" } })],
          1
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn-shadow d-inline-flex align-items-center btn btn-success",
            attrs: { type: "button" },
          },
          [
            _c("font-awesome-icon", {
              staticClass: "mr-2",
              attrs: { icon: "plus" },
            }),
            _vm._v("\n                Create New\n            "),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);