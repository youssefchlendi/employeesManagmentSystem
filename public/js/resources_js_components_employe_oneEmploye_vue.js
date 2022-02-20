"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_employe_oneEmploye_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/oneEmploye.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/oneEmploye.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _topnav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../topnav.vue */ "./resources/js/components/topnav.vue");
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
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    navb: _topnav_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      name: '',
      id: '',
      fiches: '',
      pagination: {},
      show: true
    };
  },
  created: function created() {
    this.getSessionId();
  },
  methods: {
    fetchFiches: function fetchFiches() {
      var _this = this;

      var page_url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/api/fichea/" + this.id;
      var vm = this;
      page_url = "/api/fichea/" + this.id;
      var headersi = new Headers();
      headersi.append('Content-Type', 'application/json');
      fetch(page_url, {
        method: 'POST',
        body: JSON.stringify({
          'search': this.search
        }),
        headers: headersi
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.fiches = res.data;
        _this.show = false;
        vm.makePagination(res);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    makePagination: function makePagination(meta) {
      this.pagination = {
        current_page: meta.current_page,
        current_page_url: 'http://localhost:8000/api/fiche/' + this.id + '/?page=' + meta.current_page,
        last_page: meta.last_page,
        next_page_url: meta.next_page_url,
        prev_page_url: meta.prev_page_url
      };
    },
    getSessionId: function getSessionId() {
      var _this2 = this;

      fetch('../session', {
        method: 'get'
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.id = res.id;
        _this2.name = res.nom + " " + res.prenom;

        _this2.fetchFiches();
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    getPdf: function getPdf(fiche) {
      window.open(window.location.protocol + "//" + window.location.host + "/generatePdf/" + fiche.employes.id + "/fiche/" + fiche.id);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/employe/oneEmploye.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/employe/oneEmploye.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _oneEmploye_vue_vue_type_template_id_5b9dce58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oneEmploye.vue?vue&type=template&id=5b9dce58& */ "./resources/js/components/employe/oneEmploye.vue?vue&type=template&id=5b9dce58&");
/* harmony import */ var _oneEmploye_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oneEmploye.vue?vue&type=script&lang=js& */ "./resources/js/components/employe/oneEmploye.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _oneEmploye_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _oneEmploye_vue_vue_type_template_id_5b9dce58___WEBPACK_IMPORTED_MODULE_0__.render,
  _oneEmploye_vue_vue_type_template_id_5b9dce58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/employe/oneEmploye.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/employe/oneEmploye.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/employe/oneEmploye.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_oneEmploye_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./oneEmploye.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/oneEmploye.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_oneEmploye_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/employe/oneEmploye.vue?vue&type=template&id=5b9dce58&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/employe/oneEmploye.vue?vue&type=template&id=5b9dce58& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_oneEmploye_vue_vue_type_template_id_5b9dce58___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_oneEmploye_vue_vue_type_template_id_5b9dce58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_oneEmploye_vue_vue_type_template_id_5b9dce58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./oneEmploye.vue?vue&type=template&id=5b9dce58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/oneEmploye.vue?vue&type=template&id=5b9dce58&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/oneEmploye.vue?vue&type=template&id=5b9dce58&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/oneEmploye.vue?vue&type=template&id=5b9dce58& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
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
              _c("navb", { attrs: { name: _vm.name, show: "false" } }),
              _vm._v(" "),
              _vm.fiches.length == 0
                ? _c(
                    "b-card",
                    [
                      _c(
                        "b-card-body",
                        [
                          _c(
                            "b-container",
                            { staticClass: "bv-example-row text-center" },
                            [
                              _c(
                                "b-row",
                                { staticClass: "mb-2" },
                                [
                                  _c("b-row", [
                                    _c("h6", [
                                      _vm._v("Aucun fiche a afficher"),
                                    ]),
                                  ]),
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
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.fiches, function (fiche) {
                return _c(
                  "b-card",
                  { key: fiche.id },
                  [
                    _c(
                      "b-card-body",
                      [
                        _c(
                          "b-container",
                          { staticClass: "bv-example-row text-center" },
                          [
                            _c(
                              "b-row",
                              { staticClass: "mb-2" },
                              [
                                _c(
                                  "b-row",
                                  [
                                    _c("b-col", [
                                      _vm._v(
                                        "employe :" +
                                          _vm._s(
                                            fiche.employes.nom +
                                              " " +
                                              fiche.employes.prenom
                                          )
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-row",
                                  [
                                    _c("b-col", [
                                      _vm._v("date : " + _vm._s(fiche.date)),
                                    ]),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-row",
                                  [
                                    _c("b-col", [
                                      _vm._v("total : " + _vm._s(fiche.total)),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                attrs: { variant: "success" },
                                on: {
                                  click: function ($event) {
                                    return _vm.getPdf(fiche)
                                  },
                                },
                              },
                              [_vm._v("Afficher")]
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
              }),
              _vm._v(" "),
              _c("nav", { staticClass: "row" }, [
                _c("ul", { staticClass: "pagination w-auto mx-auto" }, [
                  _c(
                    "li",
                    {
                      staticClass: "page-item",
                      class: [{ disabled: !_vm.pagination.prev_page_url }],
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "btn page-link",
                          on: {
                            click: function ($event) {
                              return _vm.fetchFiches(
                                _vm.pagination.prev_page_url
                              )
                            },
                          },
                        },
                        [_vm._v("Precedent")]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link text-dark",
                        attrs: { href: "#" },
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.pagination.current_page +
                              "/" +
                              _vm.pagination.last_page
                          )
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "page-item",
                      class: [{ disabled: !_vm.pagination.next_page_url }],
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "btn page-link",
                          on: {
                            click: function ($event) {
                              return _vm.fetchFiches(
                                _vm.pagination.next_page_url
                              )
                            },
                          },
                        },
                        [_vm._v("Suivant")]
                      ),
                    ]
                  ),
                ]),
              ]),
            ],
            2
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