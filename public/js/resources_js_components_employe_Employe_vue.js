"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_employe_Employe_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue */ "./resources/js/components/employe/show.vue");
/* harmony import */ var _form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue */ "./resources/js/components/employe/form.vue");
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search.vue */ "./resources/js/components/search.vue");
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
    showEmploye: _show_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    formEmploye: _form_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    search: _search_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      entreprises: [],
      employes: [],
      employe: {},
      pagination: {},
      edit: false,
      search: "",
      show: true,
      alert: {
        dismissCountDown: 0,
        variant: "",
        msg: ""
      }
    };
  },
  created: function created() {
    this.fetchEntreprises();
    this.fetchEmployes();
  },
  methods: {
    fetchEmployes: function fetchEmployes() {
      var _this = this;

      var page_url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/api/employe";
      var vm = this; // page_url = this.search!=''?'/api/employe':page_url;

      var headersi = new Headers();
      headersi.append('Content-Type', 'application/json');
      headersi.append('Authorization', 'auth');
      fetch(page_url, {
        method: 'POST',
        body: JSON.stringify({
          'search': this.search
        }),
        headers: headersi
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.employes = res.data;
        _this.show = false;
        vm.makePagination(res);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    fetchEntreprises: function fetchEntreprises() {
      var _this2 = this;

      fetch("/api/entreprise/", {
        method: 'GET'
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.entreprises = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    makePagination: function makePagination(meta) {
      this.pagination = {
        current_page: meta.current_page,
        current_page_url: 'http://localhost:8000/api/employe?page=' + meta.current_page,
        last_page: meta.last_page,
        next_page_url: meta.next_page_url,
        prev_page_url: meta.prev_page_url
      };
    },
    deleteEmploye: function deleteEmploye(id) {
      var _this3 = this;

      if (confirm('Delete employe ' + id)) {
        this.show = true;
        fetch('api/employe/' + id, {
          method: 'delete'
        }).then(function (res) {
          _this3.fetchEmployes();

          _this3.alert.variant = "danger";
          _this3.alert.msg = "Employé suprimée avec succée";
          _this3.alert.dismissCountDown = 5;
        }).then(function (data) {})["catch"](function (err) {
          return console.log(err);
        });
      }
    },
    resetModal1: function resetModal1() {
      this.employe = {};
    },
    addEmploye: function addEmploye(employe) {
      var _this4 = this;

      this.show = true;

      if (!this.edit) {
        fetch('api/employe/add', {
          method: 'post',
          body: JSON.stringify(employe),
          headers: {
            "Content-Type": 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this4.fetchEmployes();

          _this4.alert.variant = "success";
          _this4.alert.msg = "Employé ajouté avec succée";
          _this4.alert.dismissCountDown = 5;
        })["catch"](function (err) {
          return console.log(err);
        });
      } else {
        fetch('api/employe/' + this.employe.id, {
          method: 'put',
          body: JSON.stringify(employe),
          headers: {
            "Content-Type": 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this4.fetchEmployes();

          _this4.edit = false;
          _this4.alert.variant = "warning";
          _this4.alert.msg = "Employé modifié avec succée";
          _this4.alert.dismissCountDown = 5;
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    },
    updateEmploye: function updateEmploye(employe) {
      this.edit = true;
      this.employe = employe;
    },
    searchEmploye: function searchEmploye(search) {
      this.search = search;
      this.fetchEmployes();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  props: {
    employes: Array,
    pagination: Object
  },
  emits: ["deleteEmploye", "updateEmploye", "fetchEmployes"],
  methods: {
    Delete: function Delete(id) {
      this.$emit("deleteEmploye", id);
    },
    Update: function Update(employe) {
      this.$emit("updateEmploye", employe);
    },
    fetchEmployes: function fetchEmployes(url) {
      this.$emit("fetchEmployes", url);
    },
    getPdf: function getPdf(empId, fID) {
      window.open("http://localhost:8000/generatePdf/" + empId + "/fiche/" + fID);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/employe/Employe.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/employe/Employe.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Employe_vue_vue_type_template_id_f7d557f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employe.vue?vue&type=template&id=f7d557f8& */ "./resources/js/components/employe/Employe.vue?vue&type=template&id=f7d557f8&");
/* harmony import */ var _Employe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employe.vue?vue&type=script&lang=js& */ "./resources/js/components/employe/Employe.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Employe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Employe_vue_vue_type_template_id_f7d557f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Employe_vue_vue_type_template_id_f7d557f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/employe/Employe.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/employe/show.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/employe/show.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_ec739a80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=ec739a80& */ "./resources/js/components/employe/show.vue?vue&type=template&id=ec739a80&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/employe/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_ec739a80___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_ec739a80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/employe/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/employe/Employe.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/employe/Employe.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/employe/show.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/employe/show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/employe/Employe.vue?vue&type=template&id=f7d557f8&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/employe/Employe.vue?vue&type=template&id=f7d557f8& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employe_vue_vue_type_template_id_f7d557f8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employe_vue_vue_type_template_id_f7d557f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employe_vue_vue_type_template_id_f7d557f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employe.vue?vue&type=template&id=f7d557f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=template&id=f7d557f8&");


/***/ }),

/***/ "./resources/js/components/employe/show.vue?vue&type=template&id=ec739a80&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/employe/show.vue?vue&type=template&id=ec739a80& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_ec739a80___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_ec739a80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_ec739a80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=ec739a80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/show.vue?vue&type=template&id=ec739a80&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=template&id=f7d557f8&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=template&id=f7d557f8& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
              _c("search", {
                attrs: { search: _vm.search },
                on: { fetch: _vm.searchEmploye },
              }),
              _vm._v(" "),
              _c(
                "b-container",
                { staticClass: "bv-example-row" },
                [
                  _c(
                    "b-row",
                    { staticClass: "text-center mb-2" },
                    [
                      _c("b-col", { attrs: { cols: "8" } }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary mx-1 float-start",
                            attrs: {
                              type: "button",
                              "data-bs-toggle": "modal",
                              "data-bs-target": "#employeModal",
                            },
                            on: { click: _vm.resetModal1 },
                          },
                          [_vm._v("Nouvel employé")]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("b-col"),
                    ],
                    1
                  ),
                ],
                1
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
              _c("formEmploye", {
                attrs: {
                  entreprises: _vm.entreprises,
                  oldEmploye: _vm.employe,
                },
                on: { addEmploye: _vm.addEmploye },
              }),
              _vm._v(" "),
              _c("showEmploye", {
                attrs: { employes: _vm.employes, pagination: _vm.pagination },
                on: {
                  deleteEmploye: _vm.deleteEmploye,
                  fetchEmployes: _vm.fetchEmployes,
                  updateEmploye: _vm.updateEmploye,
                },
              }),
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/show.vue?vue&type=template&id=ec739a80&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/show.vue?vue&type=template&id=ec739a80& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _vm.employes.length == 0
        ? _c("div", { staticClass: "card card-body my-2" }, [
            _c("h3", [_vm._v("il y'a aucun employe")]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.employes, function (employe) {
        return _c(
          "b-card",
          { key: employe.id },
          [
            _c(
              "b-tabs",
              { attrs: { card: "" } },
              [
                _c(
                  "b-tab",
                  { attrs: { title: "Employe", active: "" } },
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
                                    "Nom : " +
                                      _vm._s(employe.nom) +
                                      " Prenom : " +
                                      _vm._s(employe.prenom)
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
                                  _vm._v(
                                    "\n                                Cin : " +
                                      _vm._s(employe.cin) +
                                      " Matricule CNSS :\n                                " +
                                      _vm._s(employe.mat_cnss) +
                                      "\n                            "
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
                                  _vm._v(
                                    "Fonction : " + _vm._s(employe.fonction)
                                  ),
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
                            attrs: { variant: "danger" },
                            on: {
                              click: function ($event) {
                                return _vm.Delete(employe.id)
                              },
                            },
                          },
                          [_vm._v("Delete")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            attrs: {
                              variant: "warning",
                              "data-bs-toggle": "modal",
                              "data-bs-target": "#employeModal",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.Update(employe)
                              },
                            },
                          },
                          [_vm._v("Update")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-tab",
                  { attrs: { title: "Employe fiches" } },
                  _vm._l(employe.fiches, function (fiche) {
                    return _c(
                      "b-container",
                      {
                        key: fiche.id,
                        staticClass:
                          "ml-4 bv-example-row text-center pl-4 row justify-content-center",
                        staticStyle: { "text-align": "left !important" },
                      },
                      [
                        _c(
                          "b-row",
                          { staticClass: "justify-content-center mb-2" },
                          [
                            _c(
                              "b-col",
                              { attrs: { cols: "10" } },
                              [
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
                                      _c("h6", [
                                        _c("b", [_vm._v("Rebriques:")]),
                                      ]),
                                    ]),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm._l(fiche.rebriques, function (rebrique) {
                                  return _c(
                                    "b-row",
                                    { key: rebrique.id },
                                    [
                                      _c("b-col", [
                                        _c("b", [
                                          _vm._v(_vm._s(rebrique.titre)),
                                        ]),
                                        _vm._v(
                                          "\n                                    : " +
                                            _vm._s(rebrique.pivot.montant) +
                                            "\n                                "
                                        ),
                                      ]),
                                    ],
                                    1
                                  )
                                }),
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
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: { variant: "success" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.getPdf(employe.id, fiche.id)
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
                        _vm._v(" "),
                        _c("hr"),
                      ],
                      1
                    )
                  }),
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
                      return _vm.fetchEmployes(_vm.pagination.prev_page_url)
                    },
                  },
                },
                [_vm._v("Previous")]
              ),
            ]
          ),
          _vm._v(" "),
          _c("li", { staticClass: "page-item" }, [
            _c(
              "a",
              { staticClass: "page-link text-dark", attrs: { href: "#" } },
              [
                _vm._v(
                  _vm._s(
                    _vm.pagination.current_page + "/" + _vm.pagination.last_page
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
                      return _vm.fetchEmployes(_vm.pagination.next_page_url)
                    },
                  },
                },
                [_vm._v("Next")]
              ),
            ]
          ),
        ]),
      ]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);