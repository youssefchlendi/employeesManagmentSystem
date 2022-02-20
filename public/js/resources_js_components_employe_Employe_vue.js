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
//
//
//
//
//
//
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
    document.title = 'Employe';
    this.fetchEntreprises();
    this.fetchEmployes();

    if (this.$route.params.add == 1) {
      this.alert.variant = "success";
      this.alert.msg = "Employé ajouté avec succès";
      this.alert.dismissCountDown = 5;
    } else if (this.$route.params.edit == 1) {
      this.alert.variant = "warning";
      this.alert.msg = "Employé modifié avec succès";
      this.alert.dismissCountDown = 5;
    } else if (this.$route.params.add == 2) {
      this.alert.variant = this.$route.params.alert.variant;
      this.alert.msg = this.$route.params.alert.msg;
      this.alert.dismissCountDown = 5;
    }
  },
  methods: {
    fetchEmployes: function fetchEmployes() {
      var _this = this;

      var page_url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/api/employe";
      var vm = this;
      var headersi = new Headers();
      headersi.append('auth', 5);
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

      var headersi = new Headers();
      headersi.append('auth', 5);
      fetch("/api/entreprise/", {
        method: 'GET',
        headers: headersi
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

      var headersi = new Headers();
      headersi.append('auth', 5);

      if (confirm('Delete employe ' + id)) {
        this.show = true;
        fetch('api/employe/' + id, {
          method: 'delete',
          headers: headersi
        }).then(function (res) {
          _this3.fetchEmployes();

          _this3.alert.variant = "danger";
          _this3.alert.msg = "Employé suprimée avec succès";
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

      var headersi = new Headers();
      headersi.append('auth', 5);
      headersi.append('Content-Type', 'application/json');
      this.show = true;

      if (!this.edit) {
        fetch('api/employe/add', {
          method: 'post',
          body: JSON.stringify(employe),
          headers: headersi
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          if (data.success == false) {
            _this4.alert.variant = "danger";
            var err = '';

            for (var property in data.data) {
              err += "".concat(data.data[property], "\n                                ");
            }

            _this4.alert.msg = "Employ\xE9 existant :\n                            ".concat(err);
            _this4.alert.dismissCountDown = 5;
          } else {
            _this4.alert.variant = "success";
            _this4.alert.msg = "Employé ajouté avec succès";
            _this4.alert.dismissCountDown = 5;
          }

          _this4.fetchEmployes();
        })["catch"](function (err) {
          return console.log(err);
        });
      } else {
        fetch('api/employe/' + this.employe.id, {
          method: 'put',
          body: JSON.stringify(employe),
          headers: headersi
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this4.fetchEmployes();

          _this4.edit = false;
          _this4.alert.variant = "warning";
          _this4.alert.msg = "Employé modifié avec succès";
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
    },
    entrepriseById: function entrepriseById(id) {
      var ent = '';
      var found = false;

      for (var i = 0; i < this.entreprises.length && !found; i++) {
        if (this.entreprises[i].id == id) {
          ent = this.entreprises[i].titre;
        }
      }

      return ent;
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
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    pagination: Object,
    entreprises: Array
  },
  data: function data() {
    return {
      fiches: {},
      id: ''
    };
  },
  emits: ["deleteEmploye", "updateEmploye", "fetchEmployes"],
  methods: (_methods = {
    fetchEmployes: function fetchEmployes(emp) {
      this.$emit("fetchEmployes", emp);
    },
    Delete: function Delete(id) {
      this.$emit("deleteEmploye", id);
    },
    Update: function Update(employe) {
      this.$emit("updateEmploye", employe);
    }
  }, _defineProperty(_methods, "fetchEmployes", function fetchEmployes(url) {
    this.$emit("fetchEmployes", url);
  }), _defineProperty(_methods, "getPdf", function getPdf(empId, fID) {
    window.open(window.location.protocol + "//" + window.location.host + "/generatePdf/" + empId + "/fiche/" + fID);
  }), _defineProperty(_methods, "entrepriseById", function entrepriseById(id) {
    var ent = '';
    var found = false;

    for (var i = 0; i < this.entreprises.length && !found; i++) {
      if (this.entreprises[i].id == id) {
        ent = this.entreprises[i].titre;
      }
    }

    return ent;
  }), _defineProperty(_methods, "handleAction", function handleAction(action, payload) {
    if (action == 'delete') {
      this.Delete(payload.id);
    } else if (action == 'edit') {
      //  $("#employeModal").modal('show');
      router.push({
        name: "addEmploye",
        params: {
          employe: payload,
          edit: true
        }
      });
      this.Update(payload);
    } else if (action == "view") {
      this.fiches = payload.fiches;
      this.id = payload.id;
      $("#ficheModal").modal('show');
    }

    console.log(action, payload);
  }), _methods),
  computed: {
    parameters: function parameters() {
      return {
        data: this.employes,
        text: {
          perPageText: 'Afficher :entries lignes',
          infoText: 'Affichage de :first a :last de :total lignes',
          infoTextFiltered: 'Affichage de :first a :last de :total lignes(filtrée de :total)',
          nextButtonText: 'Suiva',
          previousButtonText: 'Prec',
          paginationSearchText: 'Aller vers page',
          searchText: 'recherche',
          downloadButtonText: 'TELECHARGER',
          emptyTableText: 'Aucun employé trouvée'
        },
        actionMode: "single",
        columns: [{
          key: "nom",
          title: "Nom"
        }, {
          key: "prenom",
          title: "Prenom"
        }, {
          key: "cin",
          title: "Cin"
        }, {
          key: "mat_cnss",
          title: "Matricule cnss"
        }, {
          key: "fonction",
          title: "Fonction"
        }, {
          key: "entreprise",
          title: "Entreprise"
        }]
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btun{\n    color:white!important;\n    background-color:#d32f2f!important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employe.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _Employe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Employe.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/employe/Employe.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/employe/Employe.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/employe/Employe.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employe.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/Employe.vue?vue&type=style&index=0&lang=css&");


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
  return _c("div", {}, [
    _c("div", { staticClass: "content" }, [
      _c(
        "div",
        { staticClass: "pt-3 pb-3 container-fluid" },
        [
          _c("topnav", {
            attrs: { show: "true", search: _vm.search },
            on: { fetch: _vm.searchEmploye },
          }),
          _vm._v(" "),
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
                    "b-container",
                    { staticClass: "bv-example-row py-0" },
                    [
                      _c(
                        "b-row",
                        { staticClass: "text-center " },
                        [
                          _c("b-col", { attrs: { cols: "8" } }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary mx-1 float-start",
                                attrs: { type: "button" },
                                on: {
                                  click: function ($event) {
                                    return _vm.$router.push({
                                      name: "addEmploye",
                                      params: { edit: false },
                                    })
                                  },
                                },
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
                      staticClass: "mt-4",
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
                    attrs: {
                      employes: _vm.employes,
                      pagination: _vm.pagination,
                      entreprises: _vm.entreprises,
                    },
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
      ),
    ]),
  ])
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
        ? _c("div", { staticClass: "card card-body my-5 py-5 text-center" }, [
            _c("h3", [_vm._v("il y'a aucun employe")]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "ficheModal",
            tabindex: "-1",
            "aria-labelledby": "employeModalLabel",
            "aria-hidden": "true",
          },
        },
        [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "div",
                  { staticClass: "form-group mb-2" },
                  [
                    _c(
                      "b-row",
                      { staticClass: "jutify-content-center mb-2" },
                      [
                        _vm.fiches.length == 0
                          ? _c("b-col", { attrs: { cols: "10" } }, [
                              _vm._v("Aucune fiche de paie"),
                            ])
                          : _vm._e(),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.fiches, function (fiche) {
                      return _c(
                        "b-row",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.fiches.length != 0,
                              expression: "fiches.length != 0",
                            },
                          ],
                          key: fiche.id,
                          staticClass: "justify-content-center mb-2",
                        },
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
                                    _c("h6", [_c("b", [_vm._v("Rebriques:")])]),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-row",
                                [
                                  _c("b-col", { attrs: { cols: "9" } }, [
                                    _vm._v("total : " + _vm._s(fiche.total)),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          attrs: { variant: "success" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.getPdf(
                                                _vm.id,
                                                fiche.id
                                              )
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
                          ),
                          _vm._v(" "),
                          _c("hr"),
                        ],
                        1
                      )
                    }),
                  ],
                  2
                ),
              ]),
              _vm._v(" "),
              _vm._m(1),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.employes, function (employe) {
        return _c(
          "b-card",
          { key: employe.id },
          [
            _c(
              "md-tabs",
              [
                _c(
                  "md-tab",
                  { attrs: { id: "tab-home", "md-label": "Employe" } },
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
                                      " Prenom :  " +
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
                                    "Cin : " +
                                      _vm._s(employe.cin) +
                                      " Matricule CNSS : " +
                                      _vm._s(employe.mat_cnss) +
                                      " "
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
                            attrs: { variant: "warning" },
                            on: {
                              click: function ($event) {
                                return _vm.$router.push({
                                  name: "addEmploye",
                                  params: { employe: employe, edit: true },
                                })
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
                  "md-tab",
                  { attrs: { id: "tab-empf", "md-label": "Employe fiches" } },
                  [
                    _c(
                      "b-container",
                      {
                        staticClass:
                          " bv-example-row text-center   justify-content-center",
                        class: _vm.$screen.width < 768 ? "" : "ml-4 pl-4 row",
                      },
                      [
                        employe.fiches.length == 0
                          ? _c("h3", [_vm._v("il y'a aucun fiche")])
                          : _vm._e(),
                      ]
                    ),
                    _vm._v(" "),
                    _vm._l(employe.fiches, function (fiche) {
                      return _c(
                        "b-container",
                        {
                          key: fiche.id,
                          staticClass:
                            " bv-example-row text-center   justify-content-center",
                          class: _vm.$screen.width < 768 ? "" : "ml-4 pl-4 row",
                          staticStyle: { "text-align": "left!important" },
                        },
                        [
                          _c(
                            "b-row",
                            { staticClass: "justify-content-center mb-2" },
                            [
                              _c(
                                "b-col",
                                {
                                  attrs: {
                                    cols: _vm.$screen.width < 768 ? "12" : "10",
                                  },
                                },
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c("b-col", [
                                        _vm._v(
                                          "date : " + _vm._s(fiche.date) + " "
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
                                            " : " +
                                              _vm._s(rebrique.pivot.montant)
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
                                        _vm._v(
                                          "total : " + _vm._s(fiche.total)
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.$screen.width < 768
                                    ? _c(
                                        "b-row",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              attrs: { variant: "success" },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.getPdf(
                                                    employe.id,
                                                    fiche.id
                                                  )
                                                },
                                              },
                                            },
                                            [_vm._v("Afficher")]
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _vm.$screen.width > 768
                                ? _c(
                                    "b-col",
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          attrs: { variant: "success" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.getPdf(
                                                employe.id,
                                                fiche.id
                                              )
                                            },
                                          },
                                        },
                                        [_vm._v("Afficher")]
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("hr"),
                        ],
                        1
                      )
                    }),
                  ],
                  2
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
                  class: [
                    !_vm.pagination.prev_page_url
                      ? "disabled"
                      : "link-primary btun",
                  ],
                  on: {
                    click: function ($event) {
                      return _vm.fetchEmployes(_vm.pagination.prev_page_url)
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
                  class: [
                    !_vm.pagination.next_page_url
                      ? "disabled"
                      : "link-primary btun",
                  ],
                  on: {
                    click: function ($event) {
                      return _vm.fetchEmployes(_vm.pagination.next_page_url)
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
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "employeModalLabel" } },
        [_vm._v("Les fiches")]
      ),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-bs-dismiss": "modal" },
        },
        [_vm._v("Fermer")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);