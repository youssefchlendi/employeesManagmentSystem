"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_employe_addEmploye_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      employe: {},
      entreprises: [],
      alert: {
        dismissCountDown: 0,
        variant: "",
        msg: ""
      },
      edit: false
    };
  },
  created: function created() {
    this.fetchEntreprises();

    if (typeof this.$route.params.employe !== 'undefined') {
      this.employe = this.$route.params.employe;
      this.edit = true;
    }
  },
  methods: {
    fetchEntreprises: function fetchEntreprises() {
      var _this = this;

      fetch("/api/entreprise/", {
        method: 'GET'
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.entreprises = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    addEmploye: function addEmploye() {
      var _this2 = this;

      if (!this.edit) {
        fetch('../api/employe/add', {
          method: 'post',
          body: JSON.stringify(this.employe),
          headers: {
            "Content-Type": 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this2.employe = '';
          router.push({
            name: "Employe",
            params: {
              add: 1
            }
          });
        });
      } else {
        fetch('../api/employe/' + this.employe.id, {
          method: 'put',
          body: JSON.stringify(this.employe),
          headers: {
            "Content-Type": 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          router.push({
            name: "Employe",
            params: {
              edit: 1
            }
          });
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.title-div {\n    width: 400px;\n    height: 50px;\n    margin: 0 auto;\n    background-color: var(--bs-white);\n    border-style: solid;\n    border-width: 1px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.35);\n}\n.title-div h1 {\n    font-family: \"Open Sans\";\n    font-weight: 500;\n    text-align: center;\n    margin: 0;\n    letter-spacing: 0.6em;\n    font-size: 22px;\n    text-transform: uppercase;\n    margin-right: -0.6em;\n    text-align: right;\n}\n.btn-default,\n.btn-primary,\n.btn-success,\n.btn-info,\n.btn-warning,\n.btn-danger {\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),\n        0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.btn-default:active,\n.btn-primary:active,\n.btn-success:active,\n.btn-info:active,\n.btn-warning:active,\n.btn-danger:active,\n.btn-default.active,\n.btn-primary.active,\n.btn-success.active,\n.btn-info.active,\n.btn-warning.active,\n.btn-danger.active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn:active,\n.btn.active {\n    background-image: none;\n}\n.btn-primary {\n    background-image: linear-gradient(to bottom, #337ab7 0%, #265a88 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n    background-repeat: repeat-x;\n    border-color: #245580;\n}\n.btn-primary:hover,\n.btn-primary:focus {\n    background-color: #265a88;\n    background-position: 0 -15px;\n}\n.btn-primary:active,\n.btn-primary.active {\n    background-color: #265a88;\n    border-color: #245580;\n}\n.btn-success {\n    background-image: linear-gradient(to bottom, #5cb85c 0%, #419641 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n    background-repeat: repeat-x;\n    border-color: #3e8f3e;\n}\n.btn-success:hover,\n.btn-success:focus {\n    background-color: #419641;\n    background-position: 0 -15px;\n}\n.btn-success:active,\n.btn-success.active {\n    background-color: #419641;\n    border-color: #3e8f3e;\n}\n.btn-default,\n.btn-primary,\n.btn-success,\n.btn-info,\n.btn-warning,\n.btn-danger {\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),\n        0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.btn-default:active,\n.btn-primary:active,\n.btn-success:active,\n.btn-info:active,\n.btn-warning:active,\n.btn-danger:active,\n.btn-default.active,\n.btn-primary.active,\n.btn-success.active,\n.btn-info.active,\n.btn-warning.active,\n.btn-danger.active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn:active,\n.btn.active {\n    background-image: none;\n}\n.btn-primary {\n    background-image: linear-gradient(to bottom, #337ab7 0%, #265a88 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n    background-repeat: repeat-x;\n    border-color: #245580;\n}\n.btn-primary:hover,\n.btn-primary:focus {\n    background-color: #265a88;\n    background-position: 0 -15px;\n}\n.btn-primary:active,\n.btn-primary.active {\n    background-color: #265a88;\n    border-color: #245580;\n}\n.btn-success {\n    background-image: linear-gradient(to bottom, #5cb85c 0%, #419641 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n    background-repeat: repeat-x;\n    border-color: #3e8f3e;\n}\n.btn-success:hover,\n.btn-success:focus {\n    background-color: #419641;\n    background-position: 0 -15px;\n}\n.btn-success:active,\n.btn-success.active {\n    background-color: #419641;\n    border-color: #3e8f3e;\n}\n.btn-danger,\n.btn-default,\n.btn-info,\n.btn-primary,\n.btn-success,\n.btn-warning {\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),\n        0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.btn-danger.active,\n.btn-danger:active,\n.btn-default.active,\n.btn-default:active,\n.btn-info.active,\n.btn-info:active,\n.btn-primary.active,\n.btn-primary:active,\n.btn-success.active,\n.btn-success:active,\n.btn-warning.active,\n.btn-warning:active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn.active,\n.btn:active {\n    background-image: none;\n}\n.btn-primary {\n    background-image: linear-gradient(to bottom, #337ab7 0, #265a88 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n    background-repeat: repeat-x;\n    border-color: #245580;\n}\n.btn-primary:focus,\n.btn-primary:hover {\n    background-color: #265a88;\n    background-position: 0 -15px;\n}\n.btn-primary.active,\n.btn-primary:active {\n    background-color: #265a88;\n    border-color: #245580;\n}\n.btn-success {\n    background-image: linear-gradient(to bottom, #5cb85c 0, #419641 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n    background-repeat: repeat-x;\n    border-color: #3e8f3e;\n}\n.btn-success:focus,\n.btn-success:hover {\n    background-color: #419641;\n    background-position: 0 -15px;\n}\n.btn-success.active,\n.btn-success:active {\n    background-color: #419641;\n    border-color: #3e8f3e;\n}\n.btn-danger,\n.btn-default,\n.btn-info,\n.btn-primary,\n.btn-success,\n.btn-warning {\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),\n        0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.btn-danger.active,\n.btn-danger:active,\n.btn-default.active,\n.btn-default:active,\n.btn-info.active,\n.btn-info:active,\n.btn-primary.active,\n.btn-primary:active,\n.btn-success.active,\n.btn-success:active,\n.btn-warning.active,\n.btn-warning:active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn.active,\n.btn:active {\n    background-image: none;\n}\n.btn-primary {\n    background-image: linear-gradient(to bottom, #337ab7 0, #265a88 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n    background-repeat: repeat-x;\n    border-color: #245580;\n}\n.btn-primary:focus,\n.btn-primary:hover {\n    background-color: #265a88;\n    background-position: 0 -15px;\n}\n.btn-primary.active,\n.btn-primary:active {\n    background-color: #265a88;\n    border-color: #245580;\n}\n.btn-success {\n    background-image: linear-gradient(to bottom, #5cb85c 0, #419641 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n    background-repeat: repeat-x;\n    border-color: #3e8f3e;\n}\n.btn-success:focus,\n.btn-success:hover {\n    background-color: #419641;\n    background-position: 0 -15px;\n}\n.btn-success.active,\n.btn-success:active {\n    background-color: #419641;\n    border-color: #3e8f3e;\n}\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nlabel {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n}\nbutton {\n    border-radius: 0;\n}\nbutton:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n}\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\nbutton,\ninput {\n    overflow: visible;\n}\nbutton,\nselect {\n    text-transform: none;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    box-sizing: border-box;\n    padding: 0;\n}\n.form-control {\n    display: block;\n    width: 100%;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.25rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.form-control {\n        transition: none;\n}\n}\n.form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-group {\n    margin-bottom: 1rem;\n}\n.btn {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: 0.25rem;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.btn {\n        transition: none;\n}\n}\n.btn:hover,\n.btn:focus {\n    text-decoration: none;\n}\n.btn:focus,\n.btn.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.btn:not(:disabled):not(.disabled) {\n    cursor: pointer;\n}\n.btn:not(:disabled):not(.disabled):active,\n.btn:not(:disabled):not(.disabled).active {\n    background-image: none;\n}\n.btn-primary {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-primary:not(:disabled):not(.disabled):active,\n.btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0062cc;\n    border-color: #005cbf;\n}\n.btn-primary:not(:disabled):not(.disabled):active:focus,\n.btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-success {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34;\n}\n.btn-success:focus,\n.btn-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-success:not(:disabled):not(.disabled):active,\n.btn-success:not(:disabled):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430;\n}\n.btn-success:not(:disabled):not(.disabled):active:focus,\n.btn-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.bg-white {\n    background-color: #fff !important;\n}\n.d-flex {\n    display: flex !important;\n}\n.justify-content-end {\n    justify-content: flex-end !important;\n}\n.m-2 {\n    margin: 0.5rem !important;\n}\n.p-2 {\n    padding: 0.5rem !important;\n}\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nlabel {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n}\nbutton {\n    border-radius: 0;\n}\nbutton:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n}\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\nbutton,\ninput {\n    overflow: visible;\n}\nbutton,\nselect {\n    text-transform: none;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    box-sizing: border-box;\n    padding: 0;\n}\n.form-control {\n    display: block;\n    width: 100%;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.25rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.form-control {\n        transition: none;\n}\n}\n.form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-group {\n    margin-bottom: 1rem;\n}\n.btn {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: 0.25rem;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.btn {\n        transition: none;\n}\n}\n.btn:hover,\n.btn:focus {\n    text-decoration: none;\n}\n.btn:focus,\n.btn.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.btn:not(:disabled):not(.disabled) {\n    cursor: pointer;\n}\n.btn:not(:disabled):not(.disabled):active,\n.btn:not(:disabled):not(.disabled).active {\n    background-image: none;\n}\n.btn-primary {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-primary:not(:disabled):not(.disabled):active,\n.btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0062cc;\n    border-color: #005cbf;\n}\n.btn-primary:not(:disabled):not(.disabled):active:focus,\n.btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-success {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34;\n}\n.btn-success:focus,\n.btn-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-success:not(:disabled):not(.disabled):active,\n.btn-success:not(:disabled):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430;\n}\n.btn-success:not(:disabled):not(.disabled):active:focus,\n.btn-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.bg-white {\n    background-color: #fff !important;\n}\n.d-flex {\n    display: flex !important;\n}\n.justify-content-end {\n    justify-content: flex-end !important;\n}\n.m-2 {\n    margin: 0.5rem !important;\n}\n.p-2 {\n    padding: 0.5rem !important;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    margin: 0;\n    font: inherit;\n    color: inherit;\n}\nbutton {\n    overflow: visible;\n}\nbutton,\nselect {\n    text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button;\n    cursor: pointer;\n}\ninput {\n    line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0;\n}\n* {\n    box-sizing: border-box;\n}\n*:before,\n*:after {\n    box-sizing: border-box;\n}\ninput,\nbutton,\nselect,\ntextarea {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\n.container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n@media (min-width: 768px) {\n.container {\n        width: 750px;\n}\n}\n@media (min-width: 992px) {\n.container {\n        width: 970px;\n}\n}\n@media (min-width: 1200px) {\n.container {\n        width: 1170px;\n}\n}\nlabel {\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    font-weight: bold;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    margin: 4px 0 0;\n    margin-top: 1px \\9;\n    line-height: normal;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.form-control {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\n        0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-group {\n    margin-bottom: 15px;\n}\n.btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n    color: #333;\n    text-decoration: none;\n}\n.btn:active,\n.btn.active {\n    background-image: none;\n    outline: 0;\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-primary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n    color: #fff;\n    background-color: #204d74;\n    border-color: #122b40;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n    background-image: none;\n}\n.btn-success {\n    color: #fff;\n    background-color: #5cb85c;\n    border-color: #4cae4c;\n}\n.btn-success:focus,\n.btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n    color: #fff;\n    background-color: #398439;\n    border-color: #255625;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n    background-image: none;\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n    display: table;\n    content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n    clear: both;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    margin: 0;\n    font: inherit;\n    color: inherit;\n}\nbutton {\n    overflow: visible;\n}\nbutton,\nselect {\n    text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button;\n    cursor: pointer;\n}\ninput {\n    line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0;\n}\n* {\n    box-sizing: border-box;\n}\n*:before,\n*:after {\n    box-sizing: border-box;\n}\ninput,\nbutton,\nselect,\ntextarea {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\n.container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n@media (min-width: 768px) {\n.container {\n        width: 750px;\n}\n}\n@media (min-width: 992px) {\n.container {\n        width: 970px;\n}\n}\n@media (min-width: 1200px) {\n.container {\n        width: 1170px;\n}\n}\nlabel {\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    font-weight: bold;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    margin: 4px 0 0;\n    margin-top: 1px \\9;\n    line-height: normal;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.form-control {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\n        0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-group {\n    margin-bottom: 15px;\n}\n.btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n    color: #333;\n    text-decoration: none;\n}\n.btn:active,\n.btn.active {\n    background-image: none;\n    outline: 0;\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-primary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n    color: #fff;\n    background-color: #204d74;\n    border-color: #122b40;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n    background-image: none;\n}\n.btn-success {\n    color: #fff;\n    background-color: #5cb85c;\n    border-color: #4cae4c;\n}\n.btn-success:focus,\n.btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n    color: #fff;\n    background-color: #398439;\n    border-color: #255625;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n    background-image: none;\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n    display: table;\n    content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n    clear: both;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    margin: 0;\n    font: inherit;\n    color: inherit;\n}\nbutton {\n    overflow: visible;\n}\nbutton,\nselect {\n    text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button;\n    cursor: pointer;\n}\ninput {\n    line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0;\n}\n* {\n    box-sizing: border-box;\n}\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\n.container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n@media (min-width: 768px) {\n.container {\n        width: 750px;\n}\n}\n@media (min-width: 992px) {\n.container {\n        width: 970px;\n}\n}\n@media (min-width: 1200px) {\n.container {\n        width: 1170px;\n}\n}\nlabel {\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    font-weight: 700;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    margin: 4px 0 0;\n    margin-top: 1px\\9;\n    line-height: normal;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"checkbox\"]:focus,\ninput[type=\"radio\"]:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.form-control {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\n        0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-group {\n    margin-bottom: 15px;\n}\n.btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n.btn.active.focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn:active:focus,\n.btn:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.btn.focus,\n.btn:focus,\n.btn:hover {\n    color: #333;\n    text-decoration: none;\n}\n.btn.active,\n.btn:active {\n    background-image: none;\n    outline: 0;\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-primary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n}\n.btn-primary.focus,\n.btn-primary:focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74;\n}\n.btn-primary.active,\n.btn-primary:active,\n.open > .dropdown-toggle.btn-primary {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74;\n}\n.btn-primary.active.focus,\n.btn-primary.active:focus,\n.btn-primary.active:hover,\n.btn-primary:active.focus,\n.btn-primary:active:focus,\n.btn-primary:active:hover,\n.open > .dropdown-toggle.btn-primary.focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.open > .dropdown-toggle.btn-primary:hover {\n    color: #fff;\n    background-color: #204d74;\n    border-color: #122b40;\n}\n.btn-primary.active,\n.btn-primary:active,\n.open > .dropdown-toggle.btn-primary {\n    background-image: none;\n}\n.btn-success {\n    color: #fff;\n    background-color: #5cb85c;\n    border-color: #4cae4c;\n}\n.btn-success.focus,\n.btn-success:focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n}\n.btn-success.active,\n.btn-success:active,\n.open > .dropdown-toggle.btn-success {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n}\n.btn-success.active.focus,\n.btn-success.active:focus,\n.btn-success.active:hover,\n.btn-success:active.focus,\n.btn-success:active:focus,\n.btn-success:active:hover,\n.open > .dropdown-toggle.btn-success.focus,\n.open > .dropdown-toggle.btn-success:focus,\n.open > .dropdown-toggle.btn-success:hover {\n    color: #fff;\n    background-color: #398439;\n    border-color: #255625;\n}\n.btn-success.active,\n.btn-success:active,\n.open > .dropdown-toggle.btn-success {\n    background-image: none;\n}\n.btn-group-vertical > .btn-group:after,\n.btn-group-vertical > .btn-group:before,\n.btn-toolbar:after,\n.btn-toolbar:before,\n.clearfix:after,\n.clearfix:before,\n.container-fluid:after,\n.container-fluid:before,\n.container:after,\n.container:before,\n.dl-horizontal dd:after,\n.dl-horizontal dd:before,\n.form-horizontal .form-group:after,\n.form-horizontal .form-group:before,\n.modal-footer:after,\n.modal-footer:before,\n.modal-header:after,\n.modal-header:before,\n.nav:after,\n.nav:before,\n.navbar-collapse:after,\n.navbar-collapse:before,\n.navbar-header:after,\n.navbar-header:before,\n.navbar:after,\n.navbar:before,\n.pager:after,\n.pager:before,\n.panel-body:after,\n.panel-body:before,\n.row:after,\n.row:before {\n    display: table;\n    content: \" \";\n}\n.btn-group-vertical > .btn-group:after,\n.btn-toolbar:after,\n.clearfix:after,\n.container-fluid:after,\n.container:after,\n.dl-horizontal dd:after,\n.form-horizontal .form-group:after,\n.modal-footer:after,\n.modal-header:after,\n.nav:after,\n.navbar-collapse:after,\n.navbar-header:after,\n.navbar:after,\n.pager:after,\n.panel-body:after,\n.row:after {\n    clear: both;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    margin: 0;\n    font: inherit;\n    color: inherit;\n}\nbutton {\n    overflow: visible;\n}\nbutton,\nselect {\n    text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button;\n    cursor: pointer;\n}\ninput {\n    line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0;\n}\n* {\n    box-sizing: border-box;\n}\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\n.container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n@media (min-width: 768px) {\n.container {\n        width: 750px;\n}\n}\n@media (min-width: 992px) {\n.container {\n        width: 970px;\n}\n}\n@media (min-width: 1200px) {\n.container {\n        width: 1170px;\n}\n}\nlabel {\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    font-weight: 700;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    margin: 4px 0 0;\n    margin-top: 1px\\9;\n    line-height: normal;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"checkbox\"]:focus,\ninput[type=\"radio\"]:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.form-control {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\n        0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-group {\n    margin-bottom: 15px;\n}\n.btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n.btn.active.focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn:active:focus,\n.btn:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.btn.focus,\n.btn:focus,\n.btn:hover {\n    color: #333;\n    text-decoration: none;\n}\n.btn.active,\n.btn:active {\n    background-image: none;\n    outline: 0;\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-primary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n}\n.btn-primary.focus,\n.btn-primary:focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74;\n}\n.btn-primary.active,\n.btn-primary:active,\n.open > .dropdown-toggle.btn-primary {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74;\n}\n.btn-primary.active.focus,\n.btn-primary.active:focus,\n.btn-primary.active:hover,\n.btn-primary:active.focus,\n.btn-primary:active:focus,\n.btn-primary:active:hover,\n.open > .dropdown-toggle.btn-primary.focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.open > .dropdown-toggle.btn-primary:hover {\n    color: #fff;\n    background-color: #204d74;\n    border-color: #122b40;\n}\n.btn-primary.active,\n.btn-primary:active,\n.open > .dropdown-toggle.btn-primary {\n    background-image: none;\n}\n.btn-success {\n    color: #fff;\n    background-color: #5cb85c;\n    border-color: #4cae4c;\n}\n.btn-success.focus,\n.btn-success:focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n}\n.btn-success.active,\n.btn-success:active,\n.open > .dropdown-toggle.btn-success {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n}\n.btn-success.active.focus,\n.btn-success.active:focus,\n.btn-success.active:hover,\n.btn-success:active.focus,\n.btn-success:active:focus,\n.btn-success:active:hover,\n.open > .dropdown-toggle.btn-success.focus,\n.open > .dropdown-toggle.btn-success:focus,\n.open > .dropdown-toggle.btn-success:hover {\n    color: #fff;\n    background-color: #398439;\n    border-color: #255625;\n}\n.btn-success.active,\n.btn-success:active,\n.open > .dropdown-toggle.btn-success {\n    background-image: none;\n}\n.btn-group-vertical > .btn-group:after,\n.btn-group-vertical > .btn-group:before,\n.btn-toolbar:after,\n.btn-toolbar:before,\n.clearfix:after,\n.clearfix:before,\n.container-fluid:after,\n.container-fluid:before,\n.container:after,\n.container:before,\n.dl-horizontal dd:after,\n.dl-horizontal dd:before,\n.form-horizontal .form-group:after,\n.form-horizontal .form-group:before,\n.modal-footer:after,\n.modal-footer:before,\n.modal-header:after,\n.modal-header:before,\n.nav:after,\n.nav:before,\n.navbar-collapse:after,\n.navbar-collapse:before,\n.navbar-header:after,\n.navbar-header:before,\n.navbar:after,\n.navbar:before,\n.pager:after,\n.pager:before,\n.panel-body:after,\n.panel-body:before,\n.row:after,\n.row:before {\n    display: table;\n    content: \" \";\n}\n.btn-group-vertical > .btn-group:after,\n.btn-toolbar:after,\n.clearfix:after,\n.container-fluid:after,\n.container:after,\n.dl-horizontal dd:after,\n.form-horizontal .form-group:after,\n.modal-footer:after,\n.modal-header:after,\n.nav:after,\n.navbar-collapse:after,\n.navbar-header:after,\n.navbar:after,\n.pager:after,\n.panel-body:after,\n.row:after {\n    clear: both;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    margin: 0;\n    font: inherit;\n    color: inherit;\n}\nbutton {\n    overflow: visible;\n}\nbutton,\nselect {\n    text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button;\n    cursor: pointer;\n}\ninput {\n    line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0;\n}\n* {\n    box-sizing: border-box;\n}\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\n.container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n@media (min-width: 768px) {\n.container {\n        width: 750px;\n}\n}\n@media (min-width: 992px) {\n.container {\n        width: 970px;\n}\n}\n@media (min-width: 1200px) {\n.container {\n        width: 1170px;\n}\n}\nlabel {\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    font-weight: 700;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    margin: 4px 0 0;\n    margin-top: 1px\\9;\n    line-height: normal;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"checkbox\"]:focus,\ninput[type=\"radio\"]:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.form-control {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\n        0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-group {\n    margin-bottom: 15px;\n}\n.btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n.btn.active.focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn:active:focus,\n.btn:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.btn.focus,\n.btn:focus,\n.btn:hover {\n    color: #333;\n    text-decoration: none;\n}\n.btn.active,\n.btn:active {\n    background-image: none;\n    outline: 0;\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-primary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n}\n.btn-primary.focus,\n.btn-primary:focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74;\n}\n.btn-primary.active,\n.btn-primary:active,\n.open > .dropdown-toggle.btn-primary {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74;\n}\n.btn-primary.active.focus,\n.btn-primary.active:focus,\n.btn-primary.active:hover,\n.btn-primary:active.focus,\n.btn-primary:active:focus,\n.btn-primary:active:hover,\n.open > .dropdown-toggle.btn-primary.focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.open > .dropdown-toggle.btn-primary:hover {\n    color: #fff;\n    background-color: #204d74;\n    border-color: #122b40;\n}\n.btn-primary.active,\n.btn-primary:active,\n.open > .dropdown-toggle.btn-primary {\n    background-image: none;\n}\n.btn-success {\n    color: #fff;\n    background-color: #5cb85c;\n    border-color: #4cae4c;\n}\n.btn-success.focus,\n.btn-success:focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n}\n.btn-success.active,\n.btn-success:active,\n.open > .dropdown-toggle.btn-success {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n}\n.btn-success.active.focus,\n.btn-success.active:focus,\n.btn-success.active:hover,\n.btn-success:active.focus,\n.btn-success:active:focus,\n.btn-success:active:hover,\n.open > .dropdown-toggle.btn-success.focus,\n.open > .dropdown-toggle.btn-success:focus,\n.open > .dropdown-toggle.btn-success:hover {\n    color: #fff;\n    background-color: #398439;\n    border-color: #255625;\n}\n.btn-success.active,\n.btn-success:active,\n.open > .dropdown-toggle.btn-success {\n    background-image: none;\n}\n.btn-group-vertical > .btn-group:after,\n.btn-group-vertical > .btn-group:before,\n.btn-toolbar:after,\n.btn-toolbar:before,\n.clearfix:after,\n.clearfix:before,\n.container-fluid:after,\n.container-fluid:before,\n.container:after,\n.container:before,\n.dl-horizontal dd:after,\n.dl-horizontal dd:before,\n.form-horizontal .form-group:after,\n.form-horizontal .form-group:before,\n.modal-footer:after,\n.modal-footer:before,\n.modal-header:after,\n.modal-header:before,\n.nav:after,\n.nav:before,\n.navbar-collapse:after,\n.navbar-collapse:before,\n.navbar-header:after,\n.navbar-header:before,\n.navbar:after,\n.navbar:before,\n.pager:after,\n.pager:before,\n.panel-body:after,\n.panel-body:before,\n.row:after,\n.row:before {\n    display: table;\n    content: \" \";\n}\n.btn-group-vertical > .btn-group:after,\n.btn-toolbar:after,\n.clearfix:after,\n.container-fluid:after,\n.container:after,\n.dl-horizontal dd:after,\n.form-horizontal .form-group:after,\n.modal-footer:after,\n.modal-header:after,\n.nav:after,\n.navbar-collapse:after,\n.navbar-header:after,\n.navbar:after,\n.pager:after,\n.panel-body:after,\n.row:after {\n    clear: both;\n}\n.ladda-button {\n    position: relative;\n}\n.ladda-button .ladda-label {\n    position: relative;\n    z-index: 3;\n}\n.ladda-button,\n.ladda-button .ladda-spinner,\n.ladda-button .ladda-label {\n    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;\n}\n.btn {\n    border-radius: 3px;\n}\n.btn-primary {\n    background-color: #1ab394;\n    border-color: #1ab394;\n    color: #ffffff;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary,\n.btn-primary:active:focus,\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.btn-primary.active:focus {\n    background-color: #18a689;\n    border-color: #18a689;\n    color: #ffffff;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n    background-image: none;\n}\n.btn-success {\n    background-color: #1c84c6;\n    border-color: #1c84c6;\n    color: #ffffff;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success,\n.btn-success:active:focus,\n.btn-success:active:hover,\n.btn-success.active:hover,\n.btn-success.active:focus {\n    background-color: #1a7bb9;\n    border-color: #1a7bb9;\n    color: #ffffff;\n}\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n    background-image: none;\n}\n.form-control,\n.form-control:focus,\n.has-error .form-control:focus,\n.has-success .form-control:focus,\n.has-warning .form-control:focus,\n.navbar-collapse,\n.navbar-form,\n.navbar-form-custom .form-control:focus,\n.navbar-form-custom .form-control:hover,\n.open .btn.dropdown-toggle,\n.panel,\n.popover,\n.progress,\n.progress-bar {\n    box-shadow: none;\n}\n.btn:focus {\n    outline: none !important;\n}\n.onoffswitch {\n    position: relative;\n    width: 64px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #1ab394;\n    border-radius: 2px;\n}\n.onoffswitch-inner {\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    float: left;\n    width: 50%;\n    height: 20px;\n    padding: 0;\n    line-height: 20px;\n    font-size: 12px;\n    color: white;\n    font-family: Trebuchet, Arial, sans-serif;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"ON\";\n    padding-left: 10px;\n    background-color: #1ab394;\n    color: #ffffff;\n}\n.onoffswitch-inner:after {\n    content: \"OFF\";\n    padding-right: 10px;\n    background-color: #ffffff;\n    color: #999999;\n    text-align: right;\n}\n.onoffswitch-switch {\n    width: 20px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #1ab394;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 44px;\n    transition: all 0.3s ease-in 0s;\n}\n.form-control,\n.single-line {\n    background-color: #ffffff;\n    background-image: none;\n    border: 1px solid #e5e6e7;\n    border-radius: 1px;\n    color: inherit;\n    display: block;\n    padding: 6px 12px;\n    transition: border-color 0.15s ease-in-out 0s,\n        box-shadow 0.15s ease-in-out 0s;\n    width: 100%;\n}\n.form-control:focus,\n.single-line:focus {\n    border-color: #1ab394;\n}\n.onoffswitch {\n    position: relative;\n    width: 54px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #1ab394;\n    border-radius: 3px;\n}\n.onoffswitch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 16px;\n    padding: 0;\n    line-height: 16px;\n    font-size: 10px;\n    color: white;\n    font-family: Trebuchet, Arial, sans-serif;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"ON\";\n    padding-left: 7px;\n    background-color: #1ab394;\n    color: #ffffff;\n}\n.onoffswitch-inner:after {\n    content: \"OFF\";\n    padding-right: 7px;\n    background-color: #ffffff;\n    color: #919191;\n    text-align: right;\n}\n.onoffswitch-switch {\n    display: block;\n    width: 18px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #1ab394;\n    border-radius: 3px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 36px;\n    transition: all 0.3s ease-in 0s;\n}\n.wrapper {\n    padding: 0 20px;\n}\n.wrapper-content {\n    padding: 20px 10px 40px;\n}\n.btn {\n    border-radius: 40px;\n    padding: 1rem 1.2rem;\n    font-size: 14px;\n    line-height: 1;\n    text-transform: none;\n    font-weight: 400;\n}\n.btn-primary {\n    background-color: #002737;\n    border-color: #002737;\n    color: #ffffff;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary,\n.btn-primary:active:focus,\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.btn-primary.active:focus {\n    background-color: #003951;\n    border-color: #003951;\n    color: #ffffff;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n    background-image: none;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) inset;\n}\n.btn-success {\n    background-color: #ff0053;\n    border-color: #ff0053;\n    color: #ffffff;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success,\n.btn-success:active:focus,\n.btn-success:active:hover,\n.btn-success.active:hover,\n.btn-success.active:focus {\n    background-color: #e6004b !important;\n    border-color: #e6004b !important;\n    color: #ffffff;\n}\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n    background-color: #e6004b;\n    border-color: #e6004b;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4) inset;\n}\n.form-control,\n.form-control:focus,\n.has-error .form-control:focus,\n.has-success .form-control:focus,\n.has-warning .form-control:focus,\n.navbar-collapse,\n.navbar-form,\n.navbar-form-custom .form-control:focus,\n.navbar-form-custom .form-control:hover,\n.open .btn.dropdown-toggle,\n.panel,\n.popover,\n.progress,\n.progress-bar {\n    box-shadow: none;\n}\n.btn:focus {\n    outline: none !important;\n}\n.btn i + span {\n    margin-left: 5px;\n}\n.onoffswitch {\n    position: relative;\n    width: 64px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #002737;\n    border-radius: 2px;\n}\n.onoffswitch-inner {\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    float: left;\n    width: 50%;\n    height: 20px;\n    padding: 0;\n    line-height: 20px;\n    font-size: 12px;\n    color: white;\n    font-family: \"Roboto\", Arial, sans-serif;\n    font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"Sim\";\n    padding-left: 10px;\n    background-color: #002737;\n    color: #ffffff;\n}\n.onoffswitch-inner:after {\n    content: \"Não\";\n    padding-right: 10px;\n    background-color: #ffffff;\n    color: #999999;\n    text-align: right;\n}\n.onoffswitch-switch {\n    width: 20px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #002737;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 44px;\n    transition: all 0.3s ease-in 0s;\n}\n.onoffswitch {\n    position: relative;\n    width: 75px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #d4dadc;\n    border-radius: 40px;\n}\n.onoffswitch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 25px;\n    padding: 0;\n    line-height: 26px;\n    font-size: 10px;\n    color: white;\n    font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-weight: 500;\n    text-transform: uppercase;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"Sim\";\n    padding-left: 15px;\n    background-color: #25b26b;\n    color: #ffffff;\n    text-align: left;\n}\n.onoffswitch-inner:after {\n    content: \"Não\";\n    padding-right: 15px;\n    background-color: #ffffff;\n    color: #919191;\n    text-align: right;\n}\n.onoffswitch-switch {\n    text-align: center;\n    display: block;\n    width: 28px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #a3bcc8;\n    box-shadow: 0 0 15px rgba(2, 15, 24, 0.35);\n    border-radius: 40px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 48px;\n    transition: all 0.3s ease-in 0s;\n}\n.onoffswitch-switch:hover {\n    border-color: #638ea1;\n}\n.wrapper {\n    padding: 0 20px;\n    position: relative;\n}\n.wrapper-content {\n    padding: 10px 10px 40px;\n    min-height: 100vh;\n}\n.white-bg,\n.bg-white {\n    background-color: #ffffff;\n}\n.animation-transition,\n.button,\n.button.disabled,\n.button[disabled],\n.button:hover,\n.slider .slider-pagination .slider-page,\n.slider .slider-pagination .slider-page.active,\n.form-control:hover,\n.form-control:focus,\n.form-control:active,\n.single-line:hover,\n.single-line:focus,\n.single-line:active,\n.input-group,\n.input-group:hover,\n.input-group:focus,\n.input-group:active,\n.input-group:hover .input-group-append,\n.input-group:focus .input-group-append,\n.input-group:active .input-group-append {\n    transition: all 0.3s ease-in-out;\n}\n.switch {\n    display: flex;\n}\n.switch label {\n    font-weight: normal;\n    display: inline-block;\n    margin: 0;\n    line-height: 24px;\n}\n.switch .onoffswitch {\n    width: 42px;\n    display: inline-block;\n    margin: 0 10px;\n}\n.switch .onoffswitch .onoffswitch-inner::before {\n    content: \"\";\n    background: #456573;\n}\n.switch .onoffswitch .onoffswitch-inner::after {\n    content: \"\";\n}\n.switch .onoffswitch .onoffswitch-label {\n    border: 1px solid #c4c4c4;\n    width: 42px;\n    height: 24px;\n    background: #fff;\n    margin: 0;\n}\n.switch .onoffswitch .onoffswitch-label .onoffswitch-switch {\n    background: #fff;\n    border: 1px solid #c4c4c4;\n    width: 24px;\n    height: 24px;\n    right: 18px;\n}\n.form-group {\n    position: relative;\n    margin-bottom: 25px;\n}\n.form-group .form-control {\n    margin-bottom: 0;\n}\n.form-control,\n.single-line {\n    background: #fff;\n    border: 1px solid #c2c2c2;\n    border-radius: 40px;\n    color: #002737;\n    display: block;\n    transition: all 0.15s ease-in-out;\n    width: 100%;\n    font-size: 14px;\n    height: 40px;\n    border: 1px solid #c2c2c2;\n    box-sizing: border-box;\n    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05);\n    -webkit-appearance: none;\n    padding: 0 15px;\n}\n.form-control:hover,\n.form-control:focus,\n.form-control:active,\n.single-line:hover,\n.single-line:focus,\n.single-line:active {\n    background: #fff;\n    border-color: #002737 !important;\n    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05),\n        0px 0px 8px rgba(0, 0, 0, 0.05);\n}\n.d-flex {\n    display: flex !important;\n}\n.m-2 {\n    margin: 0.5rem !important;\n}\n.p-2 {\n    padding: 0.5rem !important;\n}\n.container {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n@media (min-width: 576px) {\n.container {\n        max-width: 540px;\n}\n}\n@media (min-width: 768px) {\n.container {\n        max-width: 720px;\n}\n}\n@media (min-width: 992px) {\n.container {\n        max-width: 960px;\n}\n}\n@media (min-width: 1200px) {\n.container {\n        max-width: 1140px;\n}\n}\n.justify-content-end {\n    justify-content: flex-end !important;\n}\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n    font-family: \"icomoon\" !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.icon-done-all:before {\n    content: \"\\e924\";\n}\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n    font-family: \"icomoon\" !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.icon-done-all:before {\n    content: \"\\e924\";\n}\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n    font-family: \"icomoon\" !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.icon-done-all:before {\n    content: \"\\e924\";\n}\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n    font-family: \"icomoon\" !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.btn i {\n    font-size: 18px;\n    vertical-align: middle;\n}\nlabel,\nth {\n    font-size: 12px !important;\n    font-weight: normal !important;\n    margin: 0 !important;\n}\n.onoffswitch-inner:before {\n    content: \"Sim\";\n}\n.onoffswitch-inner:after {\n    content: \"Não\";\n}\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n    font-family: \"icomoon\" !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.btn i {\n    font-size: 18px;\n    vertical-align: middle;\n}\nlabel,\nth {\n    font-size: 12px !important;\n    font-weight: normal !important;\n    margin: 0 !important;\n}\n.onoffswitch-inner:before {\n    content: \"Sim\";\n}\n.onoffswitch-inner:after {\n    content: \"Não\";\n}\n.btn {\n    border-radius: 3px;\n}\n.btn-primary {\n    background-color: #1ab394;\n    border-color: #1ab394;\n    color: #ffffff;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary,\n.btn-primary:active:focus,\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.btn-primary.active:focus {\n    background-color: #18a689;\n    border-color: #18a689;\n    color: #ffffff;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n    background-image: none;\n}\n.btn-success {\n    background-color: #1c84c6;\n    border-color: #1c84c6;\n    color: #ffffff;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success,\n.btn-success:active:focus,\n.btn-success:active:hover,\n.btn-success.active:hover,\n.btn-success.active:focus {\n    background-color: #1a7bb9;\n    border-color: #1a7bb9;\n    color: #ffffff;\n}\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n    background-image: none;\n}\n.form-control,\n.form-control:focus,\n.has-error .form-control:focus,\n.has-success .form-control:focus,\n.has-warning .form-control:focus,\n.navbar-collapse,\n.navbar-form,\n.navbar-form-custom .form-control:focus,\n.navbar-form-custom .form-control:hover,\n.open .btn.dropdown-toggle,\n.panel,\n.popover,\n.progress,\n.progress-bar {\n    box-shadow: none;\n}\n.btn:focus {\n    outline: none !important;\n}\n.onoffswitch {\n    position: relative;\n    width: 64px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #1ab394;\n    border-radius: 2px;\n}\n.onoffswitch-inner {\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    float: left;\n    width: 50%;\n    height: 20px;\n    padding: 0;\n    line-height: 20px;\n    font-size: 12px;\n    color: white;\n    font-family: Trebuchet, Arial, sans-serif;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"ON\";\n    padding-left: 10px;\n    background-color: #1ab394;\n    color: #ffffff;\n}\n.onoffswitch-inner:after {\n    content: \"OFF\";\n    padding-right: 10px;\n    background-color: #ffffff;\n    color: #999999;\n    text-align: right;\n}\n.onoffswitch-switch {\n    width: 20px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #1ab394;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 44px;\n    transition: all 0.3s ease-in 0s;\n}\n.form-control,\n.single-line {\n    background-color: #ffffff;\n    background-image: none;\n    border: 1px solid #e5e6e7;\n    border-radius: 1px;\n    color: inherit;\n    display: block;\n    padding: 6px 12px;\n    transition: border-color 0.15s ease-in-out 0s,\n        box-shadow 0.15s ease-in-out 0s;\n    width: 100%;\n}\n.form-control:focus,\n.single-line:focus {\n    border-color: #1ab394;\n}\n.onoffswitch {\n    position: relative;\n    width: 54px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #1ab394;\n    border-radius: 3px;\n}\n.onoffswitch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 16px;\n    padding: 0;\n    line-height: 16px;\n    font-size: 10px;\n    color: white;\n    font-family: Trebuchet, Arial, sans-serif;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"ON\";\n    padding-left: 7px;\n    background-color: #1ab394;\n    color: #ffffff;\n}\n.onoffswitch-inner:after {\n    content: \"OFF\";\n    padding-right: 7px;\n    background-color: #ffffff;\n    color: #919191;\n    text-align: right;\n}\n.onoffswitch-switch {\n    display: block;\n    width: 18px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #1ab394;\n    border-radius: 3px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 36px;\n    transition: all 0.3s ease-in 0s;\n}\n.wrapper {\n    padding: 0 20px;\n}\n.wrapper-content {\n    padding: 20px 10px 40px;\n}\n.btn {\n    border-radius: 3px;\n}\n.btn-primary {\n    background-color: #1ab394;\n    border-color: #1ab394;\n    color: #ffffff;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary,\n.btn-primary:active:focus,\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.btn-primary.active:focus {\n    background-color: #18a689;\n    border-color: #18a689;\n    color: #ffffff;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n    background-image: none;\n}\n.btn-success {\n    background-color: #1c84c6;\n    border-color: #1c84c6;\n    color: #ffffff;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success,\n.btn-success:active:focus,\n.btn-success:active:hover,\n.btn-success.active:hover,\n.btn-success.active:focus {\n    background-color: #1a7bb9;\n    border-color: #1a7bb9;\n    color: #ffffff;\n}\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n    background-image: none;\n}\n.form-control,\n.form-control:focus,\n.has-error .form-control:focus,\n.has-success .form-control:focus,\n.has-warning .form-control:focus,\n.navbar-collapse,\n.navbar-form,\n.navbar-form-custom .form-control:focus,\n.navbar-form-custom .form-control:hover,\n.open .btn.dropdown-toggle,\n.panel,\n.popover,\n.progress,\n.progress-bar {\n    box-shadow: none;\n}\n.btn:focus {\n    outline: none !important;\n}\n.onoffswitch {\n    position: relative;\n    width: 64px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #1ab394;\n    border-radius: 2px;\n}\n.onoffswitch-inner {\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    float: left;\n    width: 50%;\n    height: 20px;\n    padding: 0;\n    line-height: 20px;\n    font-size: 12px;\n    color: white;\n    font-family: Trebuchet, Arial, sans-serif;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"ON\";\n    padding-left: 10px;\n    background-color: #1ab394;\n    color: #ffffff;\n}\n.onoffswitch-inner:after {\n    content: \"OFF\";\n    padding-right: 10px;\n    background-color: #ffffff;\n    color: #999999;\n    text-align: right;\n}\n.onoffswitch-switch {\n    width: 20px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #1ab394;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 44px;\n    transition: all 0.3s ease-in 0s;\n}\n.form-control,\n.single-line {\n    background-color: #ffffff;\n    background-image: none;\n    border: 1px solid #e5e6e7;\n    border-radius: 1px;\n    color: inherit;\n    display: block;\n    padding: 6px 12px;\n    transition: border-color 0.15s ease-in-out 0s,\n        box-shadow 0.15s ease-in-out 0s;\n    width: 100%;\n}\n.form-control:focus,\n.single-line:focus {\n    border-color: #1ab394;\n}\n.onoffswitch {\n    position: relative;\n    width: 54px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #1ab394;\n    border-radius: 3px;\n}\n.onoffswitch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 16px;\n    padding: 0;\n    line-height: 16px;\n    font-size: 10px;\n    color: white;\n    font-family: Trebuchet, Arial, sans-serif;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"ON\";\n    padding-left: 7px;\n    background-color: #1ab394;\n    color: #ffffff;\n}\n.onoffswitch-inner:after {\n    content: \"OFF\";\n    padding-right: 7px;\n    background-color: #ffffff;\n    color: #919191;\n    text-align: right;\n}\n.onoffswitch-switch {\n    display: block;\n    width: 18px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #1ab394;\n    border-radius: 3px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 36px;\n    transition: all 0.3s ease-in 0s;\n}\n.wrapper {\n    padding: 0 20px;\n}\n.wrapper-content {\n    padding: 20px 10px 40px;\n}\n.btn {\n    border-radius: 40px;\n    padding: 1rem 1.2rem;\n    font-size: 14px;\n    line-height: 1;\n    text-transform: none;\n    font-weight: 400;\n}\n.btn-primary {\n    background-color: #002737;\n    border-color: #002737;\n    color: #ffffff;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary,\n.btn-primary:active:focus,\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.btn-primary.active:focus {\n    background-color: #003951;\n    border-color: #003951;\n    color: #ffffff;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n    background-image: none;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) inset;\n}\n.btn-success {\n    background-color: #ff0053;\n    border-color: #ff0053;\n    color: #ffffff;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success,\n.btn-success:active:focus,\n.btn-success:active:hover,\n.btn-success.active:hover,\n.btn-success.active:focus {\n    background-color: #e6004b !important;\n    border-color: #e6004b !important;\n    color: #ffffff;\n}\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n    background-color: #e6004b;\n    border-color: #e6004b;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4) inset;\n}\n.form-control,\n.form-control:focus,\n.has-error .form-control:focus,\n.has-success .form-control:focus,\n.has-warning .form-control:focus,\n.navbar-collapse,\n.navbar-form,\n.navbar-form-custom .form-control:focus,\n.navbar-form-custom .form-control:hover,\n.open .btn.dropdown-toggle,\n.panel,\n.popover,\n.progress,\n.progress-bar {\n    box-shadow: none;\n}\n.btn:focus {\n    outline: none !important;\n}\n.btn i + span {\n    margin-left: 5px;\n}\n.onoffswitch {\n    position: relative;\n    width: 64px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #002737;\n    border-radius: 2px;\n}\n.onoffswitch-inner {\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    float: left;\n    width: 50%;\n    height: 20px;\n    padding: 0;\n    line-height: 20px;\n    font-size: 12px;\n    color: white;\n    font-family: \"Roboto\", Arial, sans-serif;\n    font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"Sim\";\n    padding-left: 10px;\n    background-color: #002737;\n    color: #ffffff;\n}\n.onoffswitch-inner:after {\n    content: \"Não\";\n    padding-right: 10px;\n    background-color: #ffffff;\n    color: #999999;\n    text-align: right;\n}\n.onoffswitch-switch {\n    width: 20px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #002737;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 44px;\n    transition: all 0.3s ease-in 0s;\n}\n.onoffswitch {\n    position: relative;\n    width: 75px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #d4dadc;\n    border-radius: 40px;\n}\n.onoffswitch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 25px;\n    padding: 0;\n    line-height: 26px;\n    font-size: 10px;\n    color: white;\n    font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-weight: 500;\n    text-transform: uppercase;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"Sim\";\n    padding-left: 15px;\n    background-color: #25b26b;\n    color: #ffffff;\n    text-align: left;\n}\n.onoffswitch-inner:after {\n    content: \"Não\";\n    padding-right: 15px;\n    background-color: #ffffff;\n    color: #919191;\n    text-align: right;\n}\n.onoffswitch-switch {\n    text-align: center;\n    display: block;\n    width: 28px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #a3bcc8;\n    box-shadow: 0 0 15px rgba(2, 15, 24, 0.35);\n    border-radius: 40px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 48px;\n    transition: all 0.3s ease-in 0s;\n}\n.onoffswitch-switch:hover {\n    border-color: #638ea1;\n}\n.wrapper {\n    padding: 0 20px;\n    position: relative;\n}\n.wrapper-content {\n    padding: 10px 10px 40px;\n    min-height: 100vh;\n}\n.white-bg,\n.bg-white {\n    background-color: #ffffff;\n}\n.animation-transition,\n.button,\n.button.disabled,\n.button[disabled],\n.button:hover,\n.slider .slider-pagination .slider-page,\n.slider .slider-pagination .slider-page.active,\n.form-control:hover,\n.form-control:focus,\n.form-control:active,\n.single-line:hover,\n.single-line:focus,\n.single-line:active,\n.input-group,\n.input-group:hover,\n.input-group:focus,\n.input-group:active,\n.input-group:hover .input-group-append,\n.input-group:focus .input-group-append,\n.input-group:active .input-group-append {\n    transition: all 0.3s ease-in-out;\n}\n.switch {\n    display: flex;\n}\n.switch label {\n    font-weight: normal;\n    display: inline-block;\n    margin: 0;\n    line-height: 24px;\n}\n.switch .onoffswitch {\n    width: 42px;\n    display: inline-block;\n    margin: 0 10px;\n}\n.switch .onoffswitch .onoffswitch-inner::before {\n    content: \"\";\n    background: #456573;\n}\n.switch .onoffswitch .onoffswitch-inner::after {\n    content: \"\";\n}\n.switch .onoffswitch .onoffswitch-label {\n    border: 1px solid #c4c4c4;\n    width: 42px;\n    height: 24px;\n    background: #fff;\n    margin: 0;\n}\n.switch .onoffswitch .onoffswitch-label .onoffswitch-switch {\n    background: #fff;\n    border: 1px solid #c4c4c4;\n    width: 24px;\n    height: 24px;\n    right: 18px;\n}\n.form-group {\n    position: relative;\n    margin-bottom: 25px;\n}\n.form-group .form-control {\n    margin-bottom: 0;\n}\n.form-control,\n.single-line {\n    background: #fff;\n    border: 1px solid #c2c2c2;\n    border-radius: 40px;\n    color: #002737;\n    display: block;\n    transition: all 0.15s ease-in-out;\n    width: 100%;\n    font-size: 14px;\n    height: 45px;\n    border: 1px solid #c2c2c2;\n    box-sizing: border-box;\n    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05);\n    -webkit-appearance: none;\n    padding: 0 15px;\n}\n.form-control:hover,\n.form-control:focus,\n.form-control:active,\n.single-line:hover,\n.single-line:focus,\n.single-line:active {\n    background: #fff;\n    border-color: #002737 !important;\n    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05),\n        0px 0px 8px rgba(0, 0, 0, 0.05);\n}\n.d-flex {\n    display: flex !important;\n}\n.m-2 {\n    margin: 0.5rem !important;\n}\n.p-2 {\n    padding: 0.5rem !important;\n}\n.container {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n@media (min-width: 576px) {\n.container {\n        max-width: 540px;\n}\n}\n@media (min-width: 768px) {\n.container {\n        max-width: 720px;\n}\n}\n@media (min-width: 992px) {\n.container {\n        max-width: 960px;\n}\n}\n@media (min-width: 1200px) {\n.container {\n        max-width: 1140px;\n}\n}\n.justify-content-end {\n    justify-content: flex-end !important;\n}\n.btn {\n    border-radius: 40px;\n    padding: 1rem 1.2rem;\n    font-size: 14px;\n    line-height: 1;\n    text-transform: none;\n    font-weight: 400;\n}\n.btn-primary {\n    background-color: #002737;\n    border-color: #002737;\n    color: #ffffff;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary,\n.btn-primary:active:focus,\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.btn-primary.active:focus {\n    background-color: #003951;\n    border-color: #003951;\n    color: #ffffff;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n    background-image: none;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) inset;\n}\n.btn-success {\n    background-color: #ff0053;\n    border-color: #ff0053;\n    color: #ffffff;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success,\n.btn-success:active:focus,\n.btn-success:active:hover,\n.btn-success.active:hover,\n.btn-success.active:focus {\n    background-color: #e6004b !important;\n    border-color: #e6004b !important;\n    color: #ffffff;\n}\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n    background-color: #e6004b;\n    border-color: #e6004b;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4) inset;\n}\n.form-control,\n.form-control:focus,\n.has-error .form-control:focus,\n.has-success .form-control:focus,\n.has-warning .form-control:focus,\n.navbar-collapse,\n.navbar-form,\n.navbar-form-custom .form-control:focus,\n.navbar-form-custom .form-control:hover,\n.open .btn.dropdown-toggle,\n.panel,\n.popover,\n.progress,\n.progress-bar {\n    box-shadow: none;\n}\n.btn:focus {\n    outline: none !important;\n}\n.btn i + span {\n    margin-left: 5px;\n}\n.onoffswitch {\n    position: relative;\n    width: 64px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #002737;\n    border-radius: 2px;\n}\n.onoffswitch-inner {\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    float: left;\n    width: 50%;\n    height: 20px;\n    padding: 0;\n    line-height: 20px;\n    font-size: 12px;\n    color: white;\n    font-family: \"Roboto\", Arial, sans-serif;\n    font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"Sim\";\n    padding-left: 10px;\n    background-color: #002737;\n    color: #ffffff;\n}\n.onoffswitch-inner:after {\n    content: \"Não\";\n    padding-right: 10px;\n    background-color: #ffffff;\n    color: #999999;\n    text-align: right;\n}\n.onoffswitch-switch {\n    width: 20px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #002737;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 44px;\n    transition: all 0.3s ease-in 0s;\n}\n.onoffswitch {\n    position: relative;\n    width: 75px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #d4dadc;\n    border-radius: 40px;\n}\n.onoffswitch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 25px;\n    padding: 0;\n    line-height: 26px;\n    font-size: 10px;\n    color: white;\n    font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-weight: 500;\n    text-transform: uppercase;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"Sim\";\n    padding-left: 15px;\n    background-color: #25b26b;\n    color: #ffffff;\n    text-align: left;\n}\n.onoffswitch-inner:after {\n    content: \"Não\";\n    padding-right: 15px;\n    background-color: #ffffff;\n    color: #919191;\n    text-align: right;\n}\n.onoffswitch-switch {\n    text-align: center;\n    display: block;\n    width: 28px;\n    margin: 0;\n    background: #ffffff;\n    border: 2px solid #a3bcc8;\n    box-shadow: 0 0 15px rgba(2, 15, 24, 0.35);\n    border-radius: 40px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 48px;\n    transition: all 0.3s ease-in 0s;\n}\n.onoffswitch-switch:hover {\n    border-color: #638ea1;\n}\n.wrapper {\n    padding: 0 20px;\n    position: relative;\n}\n.wrapper-content {\n    padding: 10px 10px 40px;\n    min-height: 100vh;\n}\n.white-bg,\n.bg-white {\n    background-color: #ffffff;\n}\n.animation-transition,\n.button,\n.button.disabled,\n.button[disabled],\n.button:hover,\n.slider .slider-pagination .slider-page,\n.slider .slider-pagination .slider-page.active,\n.form-control:hover,\n.form-control:focus,\n.form-control:active,\n.single-line:hover,\n.single-line:focus,\n.single-line:active,\n.input-group,\n.input-group:hover,\n.input-group:focus,\n.input-group:active,\n.input-group:hover .input-group-append,\n.input-group:focus .input-group-append,\n.input-group:active .input-group-append {\n    transition: all 0.3s ease-in-out;\n}\n.switch {\n    display: flex;\n}\n.switch label {\n    font-weight: normal;\n    display: inline-block;\n    margin: 0;\n    line-height: 24px;\n}\n.switch .onoffswitch {\n    width: 42px;\n    display: inline-block;\n    margin: 0 10px;\n}\n.switch .onoffswitch .onoffswitch-inner::before {\n    content: \"\";\n    background: #456573;\n}\n.switch .onoffswitch .onoffswitch-inner::after {\n    content: \"\";\n}\n.switch .onoffswitch .onoffswitch-label {\n    border: 1px solid #c4c4c4;\n    width: 42px;\n    height: 24px;\n    background: #fff;\n    margin: 0;\n}\n.switch .onoffswitch .onoffswitch-label .onoffswitch-switch {\n    background: #fff;\n    border: 1px solid #c4c4c4;\n    width: 24px;\n    height: 24px;\n    right: 18px;\n}\n.form-group {\n    position: relative;\n    margin-bottom: 25px;\n}\n.form-group .form-control {\n    margin-bottom: 0;\n}\n.form-control,\n.single-line {\n    background: #fff;\n    border: 1px solid #c2c2c2;\n    border-radius: 40px;\n    color: #002737;\n    display: block;\n    transition: all 0.15s ease-in-out;\n    width: 100%;\n    font-size: 14px;\n    height: 34px;\n    border: 1px solid #c2c2c2;\n    box-sizing: border-box;\n    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05);\n    -webkit-appearance: none;\n    padding: 0 15px;\n}\n.form-control:hover,\n.form-control:focus,\n.form-control:active,\n.single-line:hover,\n.single-line:focus,\n.single-line:active {\n    background: #fff;\n    border-color: #002737 !important;\n    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05),\n        0px 0px 8px rgba(0, 0, 0, 0.05);\n}\n.d-flex {\n    display: flex !important;\n}\n.m-2 {\n    margin: 0.5rem !important;\n}\n.p-2 {\n    padding: 0.5rem !important;\n}\n.container {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n@media (min-width: 576px) {\n.container {\n        max-width: 540px;\n}\n}\n@media (min-width: 768px) {\n.container {\n        max-width: 720px;\n}\n}\n@media (min-width: 992px) {\n.container {\n        max-width: 960px;\n}\n}\n@media (min-width: 1200px) {\n.container {\n        max-width: 1140px;\n}\n}\n.justify-content-end {\n    justify-content: flex-end !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmploye_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addEmploye.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmploye_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmploye_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/employe/addEmploye.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/employe/addEmploye.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addEmploye_vue_vue_type_template_id_1f402bb9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEmploye.vue?vue&type=template&id=1f402bb9& */ "./resources/js/components/employe/addEmploye.vue?vue&type=template&id=1f402bb9&");
/* harmony import */ var _addEmploye_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEmploye.vue?vue&type=script&lang=js& */ "./resources/js/components/employe/addEmploye.vue?vue&type=script&lang=js&");
/* harmony import */ var _addEmploye_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addEmploye.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/employe/addEmploye.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addEmploye_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addEmploye_vue_vue_type_template_id_1f402bb9___WEBPACK_IMPORTED_MODULE_0__.render,
  _addEmploye_vue_vue_type_template_id_1f402bb9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/employe/addEmploye.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/employe/addEmploye.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/employe/addEmploye.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmploye_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addEmploye.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmploye_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/employe/addEmploye.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/employe/addEmploye.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmploye_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addEmploye.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/employe/addEmploye.vue?vue&type=template&id=1f402bb9&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/employe/addEmploye.vue?vue&type=template&id=1f402bb9& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmploye_vue_vue_type_template_id_1f402bb9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmploye_vue_vue_type_template_id_1f402bb9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmploye_vue_vue_type_template_id_1f402bb9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addEmploye.vue?vue&type=template&id=1f402bb9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=template&id=1f402bb9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=template&id=1f402bb9&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employe/addEmploye.vue?vue&type=template&id=1f402bb9& ***!
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
    { staticClass: "wrapper wrapper-content" },
    [
      _vm._m(0),
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
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "p-2 m-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Nom :")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.employe.nom,
                      expression: "employe.nom",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "youElementName" },
                  domProps: { value: _vm.employe.nom },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.employe, "nom", $event.target.value)
                    },
                  },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "p-2 m-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Prenom :")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.employe.prenom,
                      expression: "employe.prenom",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "youElementName" },
                  domProps: { value: _vm.employe.prenom },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.employe, "prenom", $event.target.value)
                    },
                  },
                }),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "p-2 m-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("CIN :")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.employe.cin,
                      expression: "employe.cin",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "youElementName" },
                  domProps: { value: _vm.employe.cin },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.employe, "cin", $event.target.value)
                    },
                  },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "p-2 m-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Matricule cnss :")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.employe.mat_cnss,
                      expression: "employe.mat_cnss",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "youElementName" },
                  domProps: { value: _vm.employe.mat_cnss },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.employe, "mat_cnss", $event.target.value)
                    },
                  },
                }),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "p-2 m-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Fonction :")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.employe.fonction,
                      expression: "employe.fonction",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "youElementName" },
                  domProps: { value: _vm.employe.fonction },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.employe, "fonction", $event.target.value)
                    },
                  },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "p-2 m-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Entreprise :")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.employe.entreprise_id,
                        expression: "employe.entreprise_id",
                      },
                    ],
                    staticClass: "form-select",
                    attrs: { "aria-label": "Default select example" },
                    on: {
                      change: function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.employe,
                          "entreprise_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  _vm._l(_vm.entreprises, function (entreprise) {
                    return _c(
                      "option",
                      {
                        key: entreprise.id,
                        domProps: {
                          selected: entreprise.entreprise_id == entreprise.id,
                          value: entreprise.id,
                        },
                      },
                      [_vm._v(_vm._s(entreprise.titre))]
                    )
                  }),
                  0
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container d-flex bg-white justify-content-end" },
        [
          _c("div", { staticClass: "p-2 m-2" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success ladda-button",
                attrs: { type: "button" },
                on: { click: _vm.addEmploye },
              },
              [_vm._m(2)]
            ),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12 col-lg-12" }, [
          _c("div", { staticClass: "title-div" }, [
            _c("h1", [_vm._v("Ajouter employé")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary ladda-button",
        attrs: { type: "button" },
      },
      [
        _c("span", { staticClass: "ladda-label" }, [
          _c("span", [_vm._v("Annuler")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "ladda-label" }, [
      _c("span", [_vm._v("Sauvegarder")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);