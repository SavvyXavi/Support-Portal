function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/accounts/accounts.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/accounts/accounts.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAccountsAccountsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-item-container d-flex justify-content-end\">\n  <button class=\"add-ticket btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add Account\n  </button>\n</div>\n<hr/>\n<div class=\"table-container table-responsive-sm\">\n    <div class=\"edit-items d-flex justify-content-end\">\n        <button class=\"btn btn-primary\">\n          <i class=\"fas fa-edit\" aria-hidden=\"true\"></i> Edit Account\n        </button>\n        <button class=\"btn btn-primary\">\n          <i class=\"far fa-file-alt\" aria-hidden=\"true\"></i> Manage Documents\n        </button>\n        <button class=\"btn btn-primary\">\n          <i class=\"fas fa-user-edit\" aria-hidden=\"true\"></i> Manage Users\n        </button>\n        <button class=\"btn btn-primary\">\n              <i class=\"far fa-compass\" aria-hidden=\"true\"></i> Manage Locations\n        </button>\n        <button class=\"btn btn-primary\">\n                <i class=\"fas fa-phone-square\" aria-hidden=\"true\"></i> Manage Supports\n        </button>\n        <button class=\"btn btn-primary\">\n          <i class=\"fas fa-cogs\" aria-hidden=\"true\"></i> Settings\n        </button>\n        <button class=\"btn btn-primary\">\n          <i class=\"far fa-trash-alt\" aria-hidden=\"true\"></i> Delete Account\n        </button>\n    </div>\n<table class=\"table\">\n  <thead>\n   <tr>\n       <th>Corporate Name</th>\n       <th>Email</th>\n       <th>Last Modified</th>\n       <th>Type</th>\n       <th>Notification</th>\n       <th>Status</th>\n     </tr>\n  </thead>\n   <!-- <tr *ngFor='let data of accounts> -->\n     <!-- <td>{{data.PrimaryCompanyName}}</td>\n     <td>{{data.FullName}}</td>\n     <td>{{data.Telephone}}</td>\n     <td>{{data.Email}}</td>\n     <td>Harmony PSA</td>\n     <td>null</td>\n     <td>null</td>\n     <td>null</td> -->\n   <!-- </tr> -->\n </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Current User Below:</h2>\n<p>\n    Company: {{this.currentProfile.company}}<br/>\n    _ID: {{this.currentProfile._id}}<br/>\n    ID: {{this.currentProfile.id}}<br/>\n    First Name: {{this.currentProfile.firstName}}<br/>\n    Last Name: {{this.currentProfile.lastName}}<br/>\n    Password: {{this.currentProfile.password}}<br/>\n    Hash: {{this.currentProfile.hash}}<br/>\n    Token: {{this.currentProfile.token}}<br/>\n    Username: {{this.currentProfile.username}}<br/>\n    Company/Partner: {{this.currentProfile.companypartner}} <br/>\n    Partner: {{this.currentProfile.partner}}<br/>\n    PartnerRole: {{this.currentProfile.partnerRole}}<br/>\n    Email: {{this.currentProfile.email}}\n\n</p>\n<div>\n  <h3>\n  All Users: <button (click)=\"loadAllUsers()\">Load Users</button>\n  <ul>\n    <li *ngFor=\"let profile of profiles\">\n      {{profile.company}}<br>\n      {{profile._id}}\n      {{profile.id}}<br>\n      {{profile.firstName}}<br>\n      {{profile.lastName}}<br>\n      {{profile.partner}}<br>\n      {{profile.partnerRole}}<br>\n      {{profile.token}}<br>\n      {{profile.hash}}<br>\n      {{profile.email}}\n    </li>\n  </ul>\n\n</h3>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customers.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customers.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCustomersCustomersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"edit-items-container d-flex justify-content-end\">\n  <button class=\"assign-assets btn btn-primary\">\n    <i class=\"fas fa-file-export\" aria-hidden=\"true\"></i> Export Customers\n  </button>\n  <button class=\"btn btn-primary\">\n    <i class=\"far fa-eye\"></i> Show Archived\n  </button>\n</div>\n<div class=\"table-container table-responsive-sm\">\n<table class=\"table table-bordered\">\n    <thead>\n     <tr>\n         <th>Account ID</th>\n         <th>Company Name</th>\n         <th>Account Manager</th>\n         <th>Primary Contact Name</th>\n         <th>Primary Contact Email</th>\n         <th>Created Date</th>\n       </tr>\n    </thead>\n    <tr *ngFor='let data of customers'>\n      <td> {{data.AccountID}} </td>\n      <td> {{data.CompanyName}} </td>\n      <td> {{data.AccountManager}}</td>\n      <td> {{data.PrimaryContactFullName}} </td>\n      <td> {{data.PrimaryContactEmail}} </td>\n      <td> {{data.CreatedDate}} </td>\n    </tr>\n   </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/local-monitor/local-monitor.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/local-monitor/local-monitor.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLocalMonitorLocalMonitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"edit-items d-flex justify-content-end\">\n    <button class=\"btn btn-primary\">\n      <i class=\"far fa-edit\" aria-hidden=\"true\"></i> Refresh\n    </button>\n</div>\n<div class=\"table-container table-responsive-sm\">\n<table class=\"table\">\n<thead>\n <tr>\n     <th>State</th>\n     <th>Host Name</th>\n     <th>Name</th>\n     <th>Host Address</th>\n     <th>Last Check</th>\n   </tr>\n</thead>\n <tr *ngFor='let data of monitor'>\n   <td>{{data.current_state}}</td>\n   <td>{{data.host_name}}</td>\n   <td>{{data.name}}</td>\n   <td>{{data.host_address}}</td>\n   <td>{{data.last_check}}</td>\n </tr>\n</table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/oem/oem.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/oem/oem.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminOemOemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-item d-flex justify-content-end\">\n    <button class=\"add-ticket btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add New OEM\n    </button>\n</div>\n<hr/>\n  <div class=\"edit-items d-flex justify-content-end\">\n      <button class=\"btn btn-primary\">\n        <i class=\"far fa-edit\" aria-hidden=\"true\"></i> Edit OEM\n      </button>\n      <button class=\"btn btn-primary\">\n        <i class=\"far fa-trash-alt\" aria-hidden=\"true\"></i> Delete OEM\n      </button>\n  </div>\n<div class=\"table-container table-responsive-sm\">\n<table class=\"table\">\n  <thead>\n   <tr>\n       <th>Company Name</th>\n       <th>Phone#</th>\n       <th>Email</th>\n       <th>Contact URL</th>\n     </tr>\n  </thead>\n   <tr *ngFor='let data of oems'>\n     <td>{{data.CompanyName}}</td>\n     <td>{{data.CompanyNumber}}</td>\n     <td>{{data.PrimaryContactEmail}}</td>\n     <td>{{data.Website}}</td>\n   </tr>\n </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"panel panel-default\" >\n  <h2 class=\"center\">Portal User Registration</h2>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row \">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n        <label for=\"companypartner\">Is this user for a Company or Partner:</label>\n        <select class=\"form-control\" id=\"companypartner\" formControlName=\"companypartner\" [ngClass]=\"{ 'is-invalid': submitted && f.companypartner.errors}\">\n          <option>Company</option>\n          <option>Partner</option>\n        </select>\n        </div>\n      </div>\n   </div>\n      <div class=\"row \">\n        <div class=\"col-md-6\">\n          <label for=\"partner\">Select Partner:</label>\n          <select class=\"form-group\" id=\"partner\" formControlName=\"partner\" [(ngModel)]=\"partner\" (ngModelChange)=\"getcompany(partner)\" [ngClass]=\"{ 'is-invalid': submitted && f.partner.errors}\">\n          <option value=\"0\">--Select--</option>\n          <option *ngFor=\"let ga of twoprofile\" value={{ga?.CompanyName}}> {{ga?.CompanyName}} </option>\n          </select>\n        </div>\n      </div><br> \n      <div class=\"row\">\n              <div class=\"form-group col-md-10\">\n                <label for=\"email\">Enter Email for username</label>\n                  <input type=\"text\" formControlName=\"email\" lowercase class=\"form-control\" autocomplete=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"  placeholder=\"Enter Users Email address for Username\" />\n                  <div *ngIf=\"submitted && !!f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"!!f.email.errors.required\">Email Address must be valid and match</div>\n                  </div>\n              </div>\n      </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-10\">\n              <label for=\"username\">Re-enter Email for username</label>\n                <input type=\"text\" formControlName=\"username\" lowercase class=\"form-control\" autocomplete=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"  placeholder=\"Re-enter Users Email address for Username\" />\n                <div *ngIf=\"submitted && !!f.username.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"!!f.username.errors.required\">Email Address must be valid and match</div>\n                </div>\n          </div>\n        </div>\n     <div class=\"row \">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" autocomplete=\"first name\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" placeholder=\"User First Name\" />\n        <div *ngIf=\"submitted && !!f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"!!f.firstName.errors.required\">First Name is required</div>\n        </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" autocomplete=\"last name\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" placeholder=\"Users Last Name\" />\n        <div *ngIf=\"submitted && !!f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"!!f.lastName.errors.required\">Last name is required</div>\n        </div>\n        </div>\n        </div>\n    </div>\n\n<div class=\"row \">\n  <div class=\"col-md-6\">\n    <div class=\"form-group\">\n    <label for=\"partnerRole\">Choose the User's Role:</label>\n    <select class=\"form-control\" id=\"partnerRole\" formControlName=\"partnerRole\" [ngClass]=\"{ 'is-invalid': submitted && f.partnerRole.errors}\">\n      <option>Admin</option>\n      <option>User</option>\n      <option>Support</option>\n    </select>\n  </div>\n  </div>\n  <div class=\"col-md-6\">\n    <label for=\"company\">Select Company:</label>\n    <select class=\"form-group\" id=\"company\" formControlName=\"company\" [(ngModel)]=\"company\" [ngClass]=\"{ 'is-invalid': submitted && f.company.errors}\">\n     <option value=\"0\">--Select--</option>\n     <option *ngFor=\"let ha of twocompany\" value={{ha?.CompanyName}}> {{ha?.CompanyName}} </option>\n    </select>\n    </div>\n</div>\n<div class=\"row\">\n<div class=\"col-md-6\">\n  <div class=\"form-group\">\n  <label for=\"password\">Password:</label>\n  <input type=\"password\" formControlName=\"password\" placeholder=\"Enter Password\">\n  <div *ngIf=\"submitted && !!f.password.errors\" class=\"invalid-feedback\" autocomplete=\"new-password\">\n    <div *ngIf=\"!!f.password.errors.required\">Passwords must be 8 characters containing 1 letter, 1 number, and one special character.</div>\n</div>\n</div>\n</div>\n<div class=\"col-md-6\">\n  <div class=\"form-group\">\n  <label for=\"confirmpassword\">Password:</label>\n  <input type=\"password\" formControlName=\"confirmpassword\" placeholder=\"Re-enter Password\">\n  <div *ngIf=\"submitted && !!f.confirmpassword.errors\" class=\"invalid-feedback\" autocomplete=\"new-password\">\n    <div *ngIf=\"!!f.confirmpassword.errors.required\">Passwords must be 8 characters containing 1 letter, 1 number, and one special character.</div>\n    </div>\n  </div>\n</div>\n</div>\n    <div class=\"row \">\n      <div class=\"col-md-6\">\n        <div class=\"form-group buttons\">\n         <button type=\"submit\" style=\"margin-right:20px;\" class=\"btn btn-primary\">Register</button>\n          <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          <button routerLink=\"admin/register\" type=\"button\" class=\"btn btn-secondary\">Cancel</button>\n        </div>\n       </div>\n    </div>\n</form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/support/support.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/support/support.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminSupportSupportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-end\">\n    <button class=\"add-ticket btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add New Support\n    </button>\n</div>\n<hr/>\n<div class=\"edit-items-container d-flex justify-content-end\">\n  <button class=\"btn btn-primary\">\n    <i class=\"fas fa-edit\"></i> Edit Support\n  </button>\n  <button class=\"btn btn-primary\">\n    <i class=\"far fa-trash-alt\"></i> Delete Support\n  </button>\n</div>\n<div class=\"table-container table-responsive-sm\">\n<table class=\"table\">\n  <thead>\n    <tr>\n       <th>Company Name</th>\n       <th>Alias</th>\n       <th>Email</th>\n       <th>Telephone</th>\n       <th>Ticketing API</th>\n       <th>Tickets</th>\n       <th>Threads</th>\n       <th>Assets</th>\n    </tr>\n  </thead>\n    <tr *ngFor='let data of supports'>\n      <td>{{data.PrimaryCompanyName}}</td>\n      <td>{{data.FullName}}</td>\n      <td>{{data.Telephone}}</td>\n      <td>{{data.Email}}</td>\n      <td>Harmony PSA</td>\n      <td>null</td>\n      <td>null</td>\n      <td>null</td>\n   </tr>\n </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"col-md\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <app-alert *ngIf=\"onSubmit()\"></app-alert>\n        <h2>Manage Users</h2>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"userForm\">\n        <div class=\"form-group\">\n          <label for=\"manageUser\"><h3>User Type</h3></label><br>\n          <div class=\"select\">\n            <select name=\"Select Type\">\n              <option value=\"New\">New User</option>\n              <option value=\"Update\">Update User</option>\n            </select>\n          </div>\n        </div>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" formControlName=\"firstname\" name=\"firstname\" class=\"form-control title shadow-none\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastname\">Last Name</label>\n      <input name=\"lastname\" type=\"text\" formControlName=\"lastname\" class=\"form-control shadow-none\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input name=\"username\" type=\"text\" formControlName=\"username\" class=\"form-control shadow-none\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input name=\"email\" type=\"email\" formControlName=\"email\" class=\"form-control shadow-none\">\n    </div>\n    <!-- <div class=\"form-group\">\n      <label for=\"phone\">Phone</label>\n      <input name=\"phone\" type=\"text\" formControlName=\"phone\" class=\"form-control shadow-none\">\n    </div> -->\n    <div class=\"form-group\">\n      <label for=\"password\">New Password</label>\n      <input name=\"password\" type=\"password\" formControlName=\"password\" class=\"form-control shadow-none\">\n    </div>\n    <!-- <div class=\"form-group\">\n      <label for=\"cpassword\">Confirm Password</label>\n      <input name=\"cpassword\" type=\"password\" formControlName=\"ConfirmPass\" class=\"form-control shadow-none\">\n    </div> -->\n    <div class=\"form-group\">\n      <label for=\"partnerRole\">User Roles</label><br>\n    </div>\n    <div class=\"form-group-button\">\n      <button class=\"btn btn-primary\" onclick=\"onSubmit()\">Save Changes</button>\n    </div>\n  </form>\n</div>\n</div>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"header fixed-top col-md\">\n<!--        <app-header *ngIf=\"router.url !== '/login' && router.url !== '/register' && router.url !== '/reset'\"></app-header> -->\n            <app-header ></app-header>\n       </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2 sidebar\">\n <!--        <app-sidebar *ngIf=\"router.url !== '/login' && router.url !== '/register'\"></app-sidebar> -->\n             <app-sidebar *ngIf=\"router.url !== '/login' && router.url !== '/forgot' && router.url.indexOf('reset-password') == -1\"></app-sidebar>\n      </div>\n      <div class=\"col-md content\">\n<!--         <app-alert *ngIf=\"router.url == '/login' || router.url == '/register'\"></app-alert> -->\n             <app-alert *ngIf=\"router.url == '/login' || router.url == '/forgot' || router.url.indexOf('reset-password') == -1\"></app-alert>\n      <br>\n      <router-outlet> </router-outlet>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/budget/budget.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/budget/budget.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBudgetBudgetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"table-container table-responsive-sm\">\n<table class=\"table\">\n  <thead>\n   <tr>\n       <th>Company Name</th>\n       <th>Alias</th>\n       <th>Email</th>\n       <th>Telephone</th>\n       <th>Ticketing API</th>\n       <th>Tickets</th>\n       <th>Threads</th>\n       <th>Assets</th>\n     </tr>\n  </thead>\n   <!-- <tr *ngFor='let data of budgets> -->\n     <!-- <td>{{data.PrimaryCompanyName}}</td>\n     <td>{{data.FullName}}</td>\n     <td>{{data.Telephone}}</td>\n     <td>{{data.Email}}</td>\n     <td>Harmony PSA</td>\n     <td>null</td>\n     <td>null</td>\n     <td>null</td> -->\n   <!-- </tr> -->\n </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompaniesCompaniesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"edit-items-container d-flex justify-content-end\">\n  <button class=\"assign-assets btn btn-primary\">\n    <i class=\"fas fa-file-export\" aria-hidden=\"true\"></i> Export Companies\n  </button>\n  <button class=\"btn btn-primary\">\n    <i class=\"far fa-eye\"></i> Show Archived\n  </button>\n</div>\n<div class=\"table-container table-responsive-sm\">\n\n<div class=\"search-div\">\n  <!-- <button mat-raised-button>\n\n  </button> -->\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput [(ngModel)]=\"searchKey\" (keyup)=\"applyFilter()\" placeholder=\"Search\" autocomplete=\"off\">\n    <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchClear()\" *ngIf=\"searchKey\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n<div class=\"mat-table mattable-container\">\n  <table mat-table [dataSource]=\"companyDataSource\" class=\"mat-elevation-z8 table\" matSort>\n\n    <!-- Description Column -->\n    <div matColumnDef=\"Company Name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Company Name </th>\n      <td mat-cell *matCellDef=\"let company\">\n        {{company.CompanyName}}\n      </td>\n    </div>\n\n    <!-- Address1 Column -->\n    <div matColumnDef=\"Street Address\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Street Address </th>\n      <td *matCellDef=\"let company\"> {{company.AddressLine1}} </td>\n    </div>\n\n    <!-- State -->\n    <div matColumnDef=\"State\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> State </th>\n      <td *matCellDef=\"let company\"> {{company.County}} </td>\n    </div>\n\n    <!-- Town Column -->\n    <div matColumnDef=\"City\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> City </th>\n      <td mat-cell *matCellDef=\"let company\"> {{company.Town}} </td>\n    </div>\n\n    <!-- PostCode Column -->\n    <div matColumnDef=\"Zip Code\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Zip Code </th>\n      <td mat-cell *matCellDef=\"let company\"> {{company.Postcode}} </td>\n    </div>\n\n    <!-- Country Column -->\n    <div matColumnDef=\"Country\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Country </th>\n      <td mat-cell *matCellDef=\"let company\"> {{company.Country}} </td>\n    </div>\n\n    <!-- Company Column -->\n    <div matColumnDef=\"Account Manager\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Account Manager </th>\n      <td mat-cell *matCellDef=\"let company\"> {{company.AccountManager}} </td>\n    </div>\n\n    <!-- Company Column -->\n    <div matColumnDef=\"Primary Contact\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Account Manager </th>\n      <td mat-cell *matCellDef=\"let company\"> {{company.PrimaryContactFullName}} </td>\n    </div>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\" [pageSize]=\"10\"></mat-paginator>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container wrapper\">\n      <div class=\"container-fluid\">\n        <div class=\"row \">\n          <div class=\"contracts-container total-container col-md\">\n            <a routerLink=\"/manageassets/contracts\">\n              <div class=\"row contract-content\">\n                <div class=\"col contract-length\">\n                  {{this.contractLength.length}}\n                </div>\n              </div>\n              <div class=\"row contract-label justify-content-center\">\n                Contracts\n              </div>\n              <div class=\"row contract-logo justify-content-end\">\n                  <img src=\"../../assets/contract2.png\">\n              </div>\n            </a>\n          </div>\n          <div class=\"assets-container total-container col-md\">\n            <a routerLink=\"/manageassets/assets\">\n              <div class=\"row asset-content\">\n                <div class=\"col asset-length\">\n                  {{this.assetLength.length}}\n                </div>\n              </div>\n              <div class=\"row asset-label justify-content-center\">\n                Assets\n              </div>\n              <div class=\"row asset-logo justify-content-end\">\n                  <img src=\"../../assets/assets.png\">\n              </div>\n            </a>\n          </div>\n          <div class=\"tickets-container total-container col-md\">\n            <a routerLink=\"/manageassets/tickets\">\n              <div class=\"row ticket-content\">\n                <div class=\"col ticket-length\">\n                  {{this.ticketLength.length}}\n                </div>\n              </div>\n              <div class=\"row ticket-label justify-content-center\">\n                Tickets\n              </div>\n              <div class=\"row ticket-logo justify-content-end\">\n                  <img src=\"../../assets/tickets.png\">\n              </div>\n            </a>\n          </div>\n          <div *ngIf=\"this.filterPartner(this.currentProfile.partner)\" class=\"companies-container total-container col-md\">\n            <a routerLink=\"/manageassets/companies\">\n              <div class=\"row companies-content\">\n                <div class=\"col companies-length\">\n                  {{this.companyLength.length}}\n                </div>\n              </div>\n              <div class=\"row companies-label justify-content-center\">\n                Companies\n              </div>\n              <div class=\"row ticket-logo justify-content-end\">\n                  <img src=\"../../assets/company3.png\">\n              </div>\n            </a>\n          </div>\n          <!-- <div *ngIf=\"currentProfile.partnerRole === 'Admin'\" class=\"users-container total-container col-md\">\n            <a routerLink=\"/admin/users\">\n              <div class=\"users-content\">\n                0 <br>\n                Users\n                <img src=\"../../assets/users.png\">\n              </div>\n            </a>\n          </div> -->\n          <!-- <div class=\"locations-container total-container col-md\">\n            <a routerLink=\"/admin/locations\"><div class=\"locations-content\">\n                0 <br>\n                Locations\n              <img src=\"../../assets/locations.png\">\n            </div>\n          </a>\n            </div> -->\n          </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <div class=\"container contracts-wrapper\">\n            <div class=\"row\">\n              <div class=\"title col-md\">\n                <h3><i class=\"fa fa-calendar\" aria-hidden=\"true\"> </i> Contracts</h3>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"legend col-md\">\n                <h6>\n                  <span class=\"badge badge-now\"><p>N</p></span> Now\n                </h6>\n                <h6>\n                  <span class=\"badge badge-15\"><p>N</p></span> 15 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-30\"><p>N</p></span> 30 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-60\"><p>N</p></span> 60 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-90\"><p>N</p></span> 90 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-plus\"><p>N</p></span> 90+ Days\n                </h6>\n              </div>\n              <div class=\"chart col-md\">\n                  <canvas id=\"contracts\" width=\"250\" height=\"250\">{{ contractsData }}</canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md\">\n                <table class=\"table\">\n                  <tr>\n                    <td>\n                      Now\n                    </td>\n                    <td>\n                      <span class=\"badge badge-now badge-table\">0</span>\n                    </td>\n                    <td>\n                     15 Days\n                    </td>\n                    <td>\n                        <span class=\"badge badge-15 badge-table\">0</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      30 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-30 badge-table\">0</span>\n                    </td>\n                    <td>\n                     60 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-60 badge-table\">0</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      90 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-90 badge-table\">0</span>\n                    </td>\n                    <td>\n                      90+ Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-plus badge-table\">0</span>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n          </div>\n        </div>\n      </div>\n\n        <div class=\"col-md\">\n          <div class=\"container assets-wrapper\">\n            <div class=\"row\">\n              <div class=\"title col-md\">\n                <h3><i class=\"fa fa-calendar\" aria-hidden=\"true\"> </i> Assets</h3>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"legend col-md\">\n                <h6>\n                  <span class=\"badge badge-now\"><p>N</p></span> Now\n                </h6>\n                <h6>\n                  <span class=\"badge badge-15\"><p>N</p></span> 15 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-30\"><p>N</p></span> 30 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-60\"><p>N</p></span> 60 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-90\"><p>N</p></span> 90 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-plus\"><p>N</p></span> 90+ Days\n                </h6>\n              </div>\n              <div class=\"chart col-md\">\n                  <canvas id=\"assets\" width=\"250\" height=\"250\">{{ assetsChart }}</canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md\">\n                  <table class=\"table\">\n                    <tr>\n                      <td>\n                        Now\n                      </td>\n                      <td>\n                        <span class=\"badge badge-now badge-table\">0</span>\n                      </td>\n                      <td>\n                       15 Days\n                      </td>\n                      <td>\n                          <span class=\"badge badge-15 badge-table\">0</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        30 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-30 badge-table\">0</span>\n                      </td>\n                      <td>\n                       60 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-60 badge-table\">0</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        90 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-90 badge-table\">0</span>\n                      </td>\n                      <td>\n                        90+ Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-plus badge-table\">0</span>\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md\">\n          <div class=\"container tickets-wrapper\">\n\n          <div class=\"row\">\n            <div class=\"title col-md\">\n              <h3><i class=\"fas fa-hdd\"></i> Tickets</h3>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md\">\n             <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Status</th>\n                  <th scope=\"col\">Count</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td scope=\"row\">New</td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td scope=\"row\">Pending</td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td scope=\"row\">Closed</td>\n                  <td>0</td>\n                </tr>\n              </tbody>\n            </table>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"view-wrapper col-md\">\n              <Button routerLink=\"/manageassets/tickets\" class=\"btn btn-info\"> View All</Button>\n            </div>\n          </div>\n\n          </div>\n      </div>\n\n      </div>\n\n        <div class=\"col-md\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              My Open Cases\n            </div>\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">#</th>\n                  <th scope=\"col\">First</th>\n                  <th scope=\"col\">Last</th>\n                  <th scope=\"col\">Handle</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">1</th>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">2</th>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">3</th>\n                  <td colspan=\"2\">Larry the Bird</td>\n                  <td>@twitter</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/generic-dash/generic-dash.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generic-dash/generic-dash.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGenericDashGenericDashComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container wrapper\">\n      <div class=\"container-fluid\">\n        <div class=\"row \">\n          <div class=\"contracts-container total-container col-md\">\n            <a routerLink=\"/manageassets/contracts\">\n              <div class=\"row contract-content\">\n                <div class=\"col contract-length\">\n                  {{this.contractLength}}\n                </div>\n              </div>\n              <div class=\"row contract-label justify-content-center\">\n                Contracts\n              </div>\n              <div class=\"row contract-logo justify-content-end\">\n                  <img class=\"contract-icon\" src=\"../../assets/Mega-Contracts.png\">\n              </div>\n            </a>\n          </div>\n          <div class=\"assets-container total-container col-md\">\n            <a routerLink=\"/manageassets/assets\">\n              <div class=\"row asset-content\">\n                <div class=\"col asset-length\">\n                  {{this.assetLength}}\n                </div>\n              </div>\n              <div class=\"row asset-label justify-content-center\">\n                Assets\n              </div>\n              <div class=\"row asset-logo justify-content-end\">\n                  <img class=\"asset-icon\" src=\"../../assets/Mega-Assets.png\">\n              </div>\n            </a>\n          </div>\n          <div class=\"tickets-container total-container col-md\">\n            <a routerLink=\"/manageassets/tickets\">\n              <div class=\"row ticket-content\">\n                <div class=\"col ticket-length\">\n                  {{this.ticketLength?.length}}\n                </div>\n              </div>\n              <div class=\"row ticket-label justify-content-center\">\n                Tickets\n              </div>\n              <div class=\"row ticket-logo justify-content-end\">\n                  <img class=\"ticket-icon\" src=\"../../assets/Mega-Tickets.png\">\n              </div>\n            </a>\n          </div>\n\n        <div *ngIf=\"this.filterPartner(this.currentProfile.partner)\" class=\"companies-container total-container col-md\">\n            <a routerLink=\"/companies\">\n              <div class=\"row companies-content\">\n                <div class=\"col companies-length\">\n                  {{this.companyLength?.length}}\n                </div>\n              </div>\n              <div class=\"row companies-label justify-content-center\">\n                Companies\n              </div>\n              <div class=\"row company-logo justify-content-end\">\n                  <img class=\"company-icon\" src=\"../../assets/Mega-Compannies.png\">\n              </div>\n            </a>\n          </div>\n          <!-- <div *ngIf=\"currentProfile.partnerRole === 'Admin'\" class=\"users-container total-container col-md\">\n            <a routerLink=\"/admin/users\">\n              <div class=\"users-content\">\n                0 <br>\n                Users\n                <img src=\"../../assets/users.png\">\n              </div>\n            </a>\n          </div> -->\n          <!-- <div class=\"locations-container total-container col-md\">\n            <a routerLink=\"/admin/locations\"><div class=\"locations-content\">\n                0 <br>\n                Locations\n              <img src=\"../../assets/locations.png\">\n            </div>\n          </a>\n            </div> -->\n          </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <div class=\"container contracts-wrapper\">\n            <div class=\"row\">\n              <div class=\"title col-md\">\n                <h3><i class=\"fa fa-calendar\" aria-hidden=\"true\"> </i> Contracts</h3>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"legend col-md\">\n                <h6>\n                  <span class=\"badge badge-now\"><p>N</p></span> Now\n                </h6>\n                <h6>\n                  <span class=\"badge badge-15\"><p>N</p></span> 15 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-30\"><p>N</p></span> 30 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-60\"><p>N</p></span> 60 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-90\"><p>N</p></span> 90 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-plus\"><p>N</p></span> 90+ Days\n                </h6>\n              </div>\n              <div class=\"chart col-md\">\n                  <canvas id=\"contracts\" width=\"250\" height=\"250\">{{ contractsData }}</canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md\">\n                <table class=\"table\">\n                  <tr>\n                    <td>\n                      Now\n                    </td>\n                    <td>\n                      <span class=\"badge badge-now badge-table\">{{this.now}}</span>\n                    </td>\n                    <td>\n                     15 Days\n                    </td>\n                    <td>\n                    <span class=\"badge badge-15 badge-table\"></span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      30 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-30 badge-table\"></span>\n                    </td>\n                    <td>\n                     60 Days\n                    </td>\n                    <td>\n                    <span class=\"badge badge-60 badge-table\"></span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      90 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-90 badge-table\"></span>\n                    </td>\n                    <td>\n                      90+ Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-plus badge-table\"></span>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n          </div>\n        </div>\n      </div>\n\n        <div class=\"col-md\">\n          <div class=\"container assets-wrapper\">\n            <div class=\"row\">\n              <div class=\"title col-md\">\n                <h3><i class=\"fa fa-calendar\" aria-hidden=\"true\"> </i> Assets</h3>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"legend col-md\">\n                <h6>\n                  <span class=\"badge badge-active\"><p>N</p></span> Active\n                </h6>\n                <h6>\n                  <span class=\"badge badge-terminated\"><p>N</p></span> Terminated\n                </h6>\n                <h6>\n                  <span class=\"badge badge-unmapped\"><p>N</p></span> Unmapped\n                </h6>\n                <h6>\n                  <span class=\"badge badge-yetToStart\"><p>N</p></span> Yet to Start\n                </h6>\n              </div>\n              <div class=\"chart col-md\">\n                  <canvas id=\"assets\" width=\"250\" height=\"250\">{{ assetsChart }}</canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md\">\n                  <table class=\"table\">\n                    <tr>\n                      <td>\n                        Active\n                      </td>\n                      <td>\n                        <span class=\"badge badge-active badge-table\">{{this.active}}</span>\n                      </td>\n                      <td>\n                        Terminated\n                      </td>\n                      <td>\n                          <span class=\"badge badge-terminated badge-table\">{{this.terminated}}</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        Unmapped\n                      </td>\n                      <td>\n                        <span class=\"badge badge-unmapped badge-table\">{{this.unmapped}}</span>\n                      </td>\n                      <td>\n                        Yet to Start\n                      </td>\n                      <td>\n                        <span class=\"badge badge-yetToStart badge-table\">{{this.yetToStart}}</span>\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md\">\n          <div class=\"container tickets-wrapper\">\n\n          <div class=\"row\">\n            <div class=\"title col-md\">\n              <h3><i class=\"fas fa-hdd\"></i> Tickets</h3>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md\">\n             <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Status</th>\n                  <th scope=\"col\">Count</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td scope=\"row\">New</td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td scope=\"row\">Pending</td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td scope=\"row\">Closed</td>\n                  <td>0</td>\n                </tr>\n              </tbody>\n            </table>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"view-wrapper col-md\">\n              <Button routerLink=\"/manageassets/tickets\" class=\"btn btn-info\"> View All</Button>\n            </div>\n          </div>\n\n          </div>\n      </div>\n\n      </div>\n\n        <div class=\"col-md\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              My Open Cases\n            </div>\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">#</th>\n                  <th scope=\"col\">First</th>\n                  <th scope=\"col\">Last</th>\n                  <th scope=\"col\">Handle</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">1</th>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">2</th>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">3</th>\n                  <td colspan=\"2\">Larry the Bird</td>\n                  <td>@twitter</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/location-details/location-details.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locations/location-details/location-details.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLocationsLocationDetailsLocationDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"col-md\">\n    <div *ngFor='let data of specLocation' class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"contract-header-wrapper\">\n            <div class=\"contract-header-text\">\n              <div>Location</div>\n              <h4>{{data.CompanyName}}</h4>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md con-ref\">\n            <h6>\n              Site\n            </h6>\n            <p>\n              {{data.Description}}\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"tab-wrapper\">\n            <ul class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"detail-tab\" data-toggle=\"tab\" href=\"#detail\" role=\"tab\" aria-controls=\"detail\" aria-selected=\"true\">Details</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"ticket-tab\" data-toggle=\"tab\" href=\"#tickets\" role=\"tab\" aria-controls=\"tickets\" aria-selected=\"false\">Tickets ({{this.ticketLocationLength?.length}})</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"asset-tab\" data-toggle=\"tab\" href=\"#assets\" role=\"tab\" aria-controls=\"assets\" aria-selected=\"false\">Assets ({{this.assetLocationLength?.length}})</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <br>\n        <br>\n        <div class=\"tab-content\" id=\"nav-tabContent\">\n\n          <div class=\"tab-pane detail fade show active\" id=\"detail\" role=\"tabpanel\" aria-labelledby=\"detail-tab\">\n            <div class=\"form-group\">\n              <label for=\"address1\">\n                Street Address <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.Address1\" placeholder=\"Reference Number\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"town\">\n                City <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.Town\" placeholder=\"End Customer\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"County\">\n                State <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.County\" placeholder=\"Start Date\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"postcode\">\n                Zip Code <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.Postcode\" placeholder=\"Zip Code\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"country\">\n                Country <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.Country\" placeholder=\"Renewal Date\" />\n              </label>\n            </div>\n          </div>\n\n          <div class=\"tab-pane tickets fade\" id=\"tickets\" role=\"tabpanel\" aria-labelledby=\"tickets-tab\">\n            <div class=\"form-goup\">\n              <div class=\"search-div\">\n                <!-- <button mat-raised-button>\n\n                </button> -->\n                <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n                  <input matInput [(ngModel)]=\"ticketSearchKey\" (keyup)=\"applyTicketFilter()\" placeholder=\"Search\" autocomplete=\"off\">\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchTicketClear()\" *ngIf=\"ticketSearchKey\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </div>\n              <div class=\"mat-table mattable-container\">\n                <table mat-table [dataSource]=\"ticketLocationDataSource\" class=\"mat-elevation-z8 table\" matSort>\n\n                  <!-- Case Column -->\n                  <div matColumnDef=\"Case#\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Case# </th>\n                    <td mat-cell *matCellDef=\"let ticket\">\n                      <a routerLink=\"/ticketdetail/{{ticket.RefNumber}}\" class=\"asset-link\"> {{ticket.RefNumber}} </a>\n                    </td>\n                  </div>\n\n                  <!-- Name Column -->\n                  <div matColumnDef=\"Name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                    <td *matCellDef=\"let ticket\"> {{ticket.Name}} </td>\n                  </div>\n\n                  <!-- Status Column -->\n                  <div matColumnDef=\"Status\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n                    <td mat-cell *matCellDef=\"let ticket\"> {{ticket.Status}} </td>\n                  </div>\n\n                  <!-- Description Column -->\n                  <div matColumnDef=\"Description\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n                    <td mat-cell *matCellDef=\"let ticket\"> {{ticket.Body}} </td>\n                  </div>\n\n                  <!-- Customer Column -->\n                  <div matColumnDef=\"Customer\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer </th>\n                    <td mat-cell *matCellDef=\"let ticket\"> {{ticket.CustomerName}} </td>\n                  </div>\n\n                  <!-- Asset ID Column -->\n                  <div matColumnDef=\"Asset ID\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Asset ID </th>\n                    <td mat-cell *matCellDef=\"let ticket\"> {{ticket.AssetIdentifier}} </td>\n                  </div>\n\n                  <!-- Schedule Column -->\n                  <div matColumnDef=\"Schedule\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Contract </th>\n                    <td mat-cell *matCellDef=\"let ticket\"> {{ticket.Schedule}} </td>\n                  </div>\n\n                  <!-- Update Column -->\n                  <div matColumnDef=\"Update Date\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Update Date </th>\n                    <td mat-cell *matCellDef=\"let ticket\"> {{ticket.UpdatedDate | date: 'shortDate'}} </td>\n                  </div>\n\n                  <!-- Update Since -->\n                  <div matColumnDef=\"Update Since\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Since Last Update </th>\n                    <td mat-cell *matCellDef=\"let ticket\"> {{ticket.TimeSinceLastUpdate}} </td>\n                  </div>\n\n                  <tr mat-header-row *matHeaderRowDef=\"ticketDisplayedColumns; sticky: true\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: ticketDisplayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\" [pageSize]=\"10\"></mat-paginator>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"tab-pane assets fade\" id=\"assets\" role=\"tabpanel\" aria-labelledby=\"asset-tab\">\n            <div class=\"form-group\">\n              <div class=\"search-div\">\n                <!-- <button mat-raised-button>\n\n                </button> -->\n                <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n                  <input matInput [(ngModel)]=\"asssetSearchKey\" (keyup)=\"applyAssetFilter()\" placeholder=\"Search\" autocomplete=\"off\">\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchAssetClear()\" *ngIf=\"assetSearchKey\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </div>\n              <div class=\"mat-table mattable-container\">\n                <table mat-table [dataSource]=\"assetLocationDataSource\" class=\"mat-elevation-z8 table\" matSort>\n\n                  <!-- Name Column -->\n                  <div matColumnDef=\"Name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.Name}} </td>\n                  </div>\n\n                  <!-- Identifier Column -->\n                  <div matColumnDef=\"Identifier\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Serial </th>\n                    <td mat-cell *matCellDef=\"let asset\">\n                      <a routerLink=\"/assetdetail/{{asset.Identifier}}\" class=\"asset-link\">\n                        {{asset.Identifier}}\n                      </a>\n                    </td>\n                  </div>\n\n                  <div matColumnDef=\"Asset Tag\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Asset Tag </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.Identifier}} </td>\n                  </div>\n\n                  <!-- Location Column -->\n                  <div matColumnDef=\"Location\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.SiteAddress}} </td>\n                  </div>\n\n                  <!-- Schedule Column -->\n                  <div matColumnDef=\"Schedule\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Contract </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.Schedule}} </td>\n                  </div>\n\n                  <tr mat-header-row *matHeaderRowDef=\"assetDisplayedColumns; sticky: true\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: assetDisplayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\" [pageSize]=\"10\"></mat-paginator>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n          <br>\n            <div class=\"row button-containers\">\n              <div class=\"col-sm\">\n                <Button (click)=\"goBack()\" class=\"btn btn-info\">\n                  Go Back\n                </Button>\n              </div>\n            </div>\n      </div>\n  </div>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLocationsLocationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"edit-items-container d-flex justify-content-end\">\n  <button class=\"assign-assets btn btn-primary\">\n    <i class=\"fas fa-file-export\" aria-hidden=\"true\"></i> Export Locations\n  </button>\n  <button class=\"btn btn-primary\">\n    <i class=\"far fa-eye\"></i> Show Archived\n  </button>\n</div>\n<div class=\"table-container table-responsive-sm\">\n\n<div class=\"search-div\">\n  <!-- <button mat-raised-button>\n\n  </button> -->\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput [(ngModel)]=\"searchKey\" (keyup)=\"applyFilter()\" placeholder=\"Search\" autocomplete=\"off\">\n    <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchClear()\" *ngIf=\"searchKey\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n<div class=\"mat-table mattable-container\">\n  <table mat-table [dataSource]=\"locationDataSource\" class=\"mat-elevation-z8 table\" matSort>\n\n    <!-- Description Column -->\n    <div matColumnDef=\"Description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n      <td mat-cell *matCellDef=\"let location\">\n        <a routerLink=\"/locationdetail/{{location.Description}}\" class=\"asset-link\"> {{location.Description}} </a>\n      </td>\n    </div>\n\n    <!-- Address1 Column -->\n    <div matColumnDef=\"Street\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Street </th>\n      <td *matCellDef=\"let location\"> {{location.Address1}} </td>\n    </div>\n\n    <!-- Town Column -->\n    <div matColumnDef=\"City\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> City </th>\n      <td mat-cell *matCellDef=\"let location\"> {{location.Town}} </td>\n    </div>\n\n    <!-- PostCode Column -->\n    <div matColumnDef=\"Zip Code\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Zip Code </th>\n      <td mat-cell *matCellDef=\"let location\"> {{location.Postcode}} </td>\n    </div>\n\n    <!-- Country Column -->\n    <div matColumnDef=\"Country\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Country </th>\n      <td mat-cell *matCellDef=\"let location\"> {{location.Country}} </td>\n    </div>\n\n    <!-- Company Column -->\n    <div matColumnDef=\"Company\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Company </th>\n      <td mat-cell *matCellDef=\"let location\"> {{location.CompanyName}} </td>\n    </div>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\" [pageSize]=\"10\"></mat-paginator>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/alert/alert.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/alert/alert.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginAlertAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message?.type === 'success', 'alert-danger': message?.type === 'error' }\">{{message.text}}</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgotpassword/forgotpassword.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgotpassword/forgotpassword.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginForgotpasswordForgotpasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h2>Forgot Password</h2>\n    <form action=\"\" [formGroup]=\"forgotForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <input _ngcontent-c0=\"\" class=\"form-control form-control-lg\" placeholder=\"email\"\n                type=\"text\" id=\"email\" formControlName=\"email\" />\n            <span *ngIf=\"!forgotForm.get('email').valid && !IsvalidForm\"\n                class=\"help-block\">Please enter a valid email!</span>\n        </div>\n        <div class=\"form-group\">\n            <div>\n                <button class=\"btn btn-primary\">Send</button>\n            </div>\n        </div>\n    </form>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/header/header.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/header/header.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <nav *ngIf=\"currentProfile\" class=\"navbar northNav navbar-expand-lg navbar-light bg-light justify-content-between\">\n    <a class=\"navbar-brand\" (click)=\"dashLink()\">\n      <img *ngIf=\"currentProfile?.partner == 'NorthSmart (Northland)'\" src=\"../../assets//favicon.ico\" style=\"width:50px; height:50px\">\n      <img *ngIf=\"currentProfile?.partner == 'Relus Technologies' || currentProfile?.partner == 'RAC King LLC' || currentProfile?.partner == 'BB&T'\" src=\"../../../assets/RelusLogo.png\" style=\"height: 50px; margin-left: 20px;\">\n      <img *ngIf=\"currentProfile?.partner == 'Noble1 Solutions' || currentProfile?.partner == 'Colwick Travel' || currentProfile?.partner == 'xByte Technologies'\" src=\"../../assets//favicon.ico\" style=\"width:50px; height:50px\">\n      <img *ngIf=\"currentProfile?.partner == 'Reliant Technology'\" src=\"../../../assets/Reliant-Logo.png\" class=\"rel-logo\">\n      <img *ngIf=\"currentProfile?.partner == 'Mega Monolithic Corp'\" src=\"../../../assets/Mega Monolithic Corp - Logo Light Small.png\" style=\"height: 50px; margin-left: 20px;\">\n    </a>\n\n    <button class=\"navbar-toggler bg-dark\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggle\" aria-controls=\"navbarToggle\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div id=\"navbarToggle\" class=\"collapse navbar-collapse\">\n      <form class=\"search-bar d-none d-md-block form-inline\" style=\"width:50%\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control shadow-none\" placeholder=\"Search\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-transparent\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n          </div>\n        </div>\n      </form>\n\n      <div class=\"dropdown d-none d-md-block account-container northsmart\" style=\"padding-right: 15px\">\n\n            <button class=\"btn bg-light shadow-none dropdown-toggle\" style=\"width:auto\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fa fa-user-circle fa-3x\"></i> {{currentProfile?.firstName}} {{currentProfile?.lastName}}\n            </button>\n\n            <ul class=\"dropdown-menu dropdown-menu-right\" style=\"padding-right:auto; width:auto\" aria-labelledby=\"dropdownMenuButton\">\n                <li>\n                  <span class=\"dropdown-item-text dropdown-separator-title\">\n                    <h4>{{currentProfile?.partnerRole}}</h4>\n                    <h5>{{currentProfile?.email}}</h5>\n                  </span>\n                </li>\n                <hr>\n                <li>\n                  <a class=\"dropdown-item\" routerLink=\"/profile\">\n                    <div class=\"icon\">\n                      <i class=\"fas fa-user\"></i>\n                    </div>\n                    <div class=\"text\">\n                      Account\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a class=\"dropdown-item\" routerLink=\"/settings\">\n                    <div class=\"icon\">\n                      <i class=\"fas fa-cog\"></i>\n                    </div>\n                    <div class=\"text\">\n                      Settings\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a class=\"dropdown-item\" routerlink=\"/notifications\">\n                    <div class=\"icon\">\n                    <i class=\"fas fa-comment-alt\"></i>\n                  </div>\n                  <div class=\"text\">\n                    Notifications\n                  </div>\n                  </a>\n                </li>\n                <li>\n                  <a class=\"dropdown-item\" (click)=\"logout()\">\n                    <div class=\"icon\">\n                      <i class=\"fas fa-sign-out-alt\"></i>\n                    </div>\n                    <div class=\"text\">\n                      Logout\n                    </div>\n                  </a>\n                </li>\n              </ul>\n      </div>\n    </div>\n  </nav>\n\n    <!-- <nav  class=\"navbar relusNav navbar-expand-lg navbar-light bg-light justify-content-between\">\n      <a class=\"navbar-brand\" routerLink=\"dashLink()\"><img *ngIf=\"currentProfile?.partner == 'Relus Technologies'\" src=\"../../../assets/RelusLogo.png\" style=\"height: 44px; margin-left: 20px;\"></a>\n      <button class=\"navbar-toggler relusToggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggle\" aria-controls=\"navbarToggle\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div id=\"navbarToggle\" class=\"collapse navbar-collapse\">\n      <form class=\"search-bar d-none d-md-block form-inline\" style=\"width:50%\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control shadow-none\" placeholder=\"Search\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-transparent\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n          </div>\n        </div>\n      </form>\n\n      <div class=\"dropdown d-none d-md-block account-container relus\" style=\"padding-right: 15px\">\n\n            <button class=\"btn bg-light shadow-none dropdown-toggle\" style=\"width:auto\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fa fa-user-circle fa-3x\"></i> {{currentProfile?.firstName}} {{currentProfile?.lastName}}\n            </button>\n\n            <ul class=\"dropdown-menu dropdown-menu-right\" style=\"padding-right:auto; width:auto\" aria-labelledby=\"dropdownMenuButton\">\n              <li>\n                <span class=\"dropdown-item-text dropdown-separator-title\">\n                  <h4>{{currentProfile?.partnerRole}}</h4>\n                  <h5>{{currentProfile?.email}}</h5>\n                </span>\n              </li>\n              <hr>\n              <li>\n                  <a class=\"dropdown-item\" routerLink=\"/profile\">\n                    <div class=\"icon\">\n                      <i class=\"fas fa-user\"></i>\n                    </div>\n                    <div class=\"text\">\n                      Account\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a class=\"dropdown-item\" routerLink=\"/settings\">\n                    <div class=\"icon\">\n                      <i class=\"fas fa-cog\"></i>\n                    </div>\n                    <div class=\"text\">\n                      Settings\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a class=\"dropdown-item\" routerlink=\"/notifications\">\n                    <div class=\"icon\">\n                    <i class=\"fas fa-comment-alt\"></i>\n                  </div>\n                  <div class=\"text\">\n                    Notifications\n                  </div>\n                  </a>\n                </li>\n                <li>\n                  <a class=\"dropdown-item\" (click)=\"logout()\">\n                    <div class=\"icon\">\n                      <i class=\"fas fa-sign-out-alt\"></i>\n                    </div>\n                    <div class=\"text\">\n                      Logout\n                    </div>\n                  </a>\n                </li>\n              </ul>\n      </div>\n    </div>\n    </nav> -->\n\n    <!-- <nav *ngIf=\"currentProfile?.partner == 'Noble1 Solutions'\" class=\"navbar northNav navbar-expand-lg navbar-light bg-light justify-content-between\">\n        <a class=\"navbar-brand\" routerLink=\"dashLink()\"><img *ngIf=\"currentProfile?.partner == 'Noble1 Solutions'\" src=\"../../assets//favicon.ico\" style=\"width:75px; height:75px\"></a>\n        <button class=\"navbar-toggler bg-dark\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggle\" aria-controls=\"navbarToggle\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div id=\"navbarToggle\" class=\"collapse navbar-collapse\">\n          <form class=\"search-bar d-none d-md-block form-inline\" style=\"width:50%\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control shadow-none\" placeholder=\"Search\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-transparent\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n              </div>\n            </div>\n          </form>\n\n          <div class=\"dropdown d-none d-md-block account-container northsmart\" style=\"padding-right: 15px\">\n\n                <button class=\"btn bg-light shadow-none dropdown-toggle\" style=\"width:auto\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"fa fa-user-circle fa-3x\"></i> {{currentProfile?.firstName}} {{currentProfile?.lastName}}\n                </button>\n\n                <ul class=\"dropdown-menu dropdown-menu-right\" style=\"padding-right:auto; width:auto\" aria-labelledby=\"dropdownMenuButton\">\n                    <li>\n                      <span class=\"dropdown-item-text dropdown-separator-title\">\n                        <h4>{{currentProfile?.partnerRole}}</h4>\n                        <h5>{{currentProfile?.email}}</h5>\n                      </span>\n                    </li>\n                    <hr>\n                    <li>\n                      <a class=\"dropdown-item\" routerLink=\"/profile\">\n                        <i class=\"fas fa-user\"></i> Account\n                      </a>\n                    </li>\n                    <li>\n                      <a class=\"dropdown-item\" routerLink=\"/settings\">\n                        <i class=\"fas fa-cog\"></i> Settings\n                      </a>\n                    </li>\n                    <li>\n                      <a class=\"dropdown-item\" (click)=\"logout()\">\n                          <i class=\"fas fa-sign-out-alt\"></i>  Logout\n                      </a>\n                    </li>\n                  </ul>\n          </div>\n        </div>\n      </nav> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h2>Support Login</h2>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" formControlName=\"username\" class=\"form-control\" autocomplete=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n      <div *ngIf=\"submitted && !!f.username.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"!!f.username.errors.required\">Username is required!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\"  formControlName=\"password\" class=\"form-control\" autocomplete=\"current password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n      <div *ngIf=\"submitted && !!f.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"!!f.password.errors.required\">Password is required!</div>\n      </div>\n    </div>\n    <div class=\"form-group buttons\">\n      <button class=\"btn btn-primary\" style=\"margin-right:20px;\">Login</button>\n      <button routerLink=\"/forgot\" class=\"btn btn-primary\">Forgot password?</button>\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/reset/reset.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/reset/reset.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginResetResetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"validToken\">\n    <div class=\"container\">\n      <h2>Reset Password</h2>\n      <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"password\">Password:</label>\n              <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Enter Password\"  [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" >\n              <div *ngIf=\"submitted && !!f.password.errors\" class=\"invalid-feedback\" autocomplete=\"new-password\">\n                <div *ngIf=\"!!f.password.errors.required\">Passwords must be 8 characters containing 1 letter, 1 number, and one special character.</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"confirmpassword\">Password Confirmation:</label>\n              <input type=\"password\" formControlName=\"confirmpassword\" class=\"form-control\"  placeholder=\"Re-enter Password\"  [ngClass]=\"{ 'is-invalid': submitted && f.confirmpassword.errors }\" >\n              {{ f.password.errors.mustMatch }}\n              <div *ngIf=\"submitted && !!f.confirmpassword.errors\" class=\"invalid-feedback\" autocomplete=\"new-password\">\n                <div *ngIf=\"!!f.confirmpassword.errors.required\">Passwords must be 8 characters containing 1 letter, 1 number, and one special character.</div>\n                <div *ngIf=\"!!f.confirmpassword.errors.mustMatch\">Passwords must match</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row \">\n          <div class=\"col-md-6\">\n            <div class=\"form-group buttons\">\n             <button type=\"submit\" style=\"margin-right:20px;\" class=\"btn btn-primary\">Reset</button>\n              <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            </div>\n           </div>\n        </div>\n\n      </form>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/asset-detail/asset-detail.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/asset-detail/asset-detail.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageAssetsAssetDetailAssetDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"col-md\">\n    <div *ngFor='let data of asset' class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"contract-header-wrapper\">\n            <div class=\"contract-header-text\">\n              <div>Covered Product</div>\n              <h4>{{data.Name}}</h4>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md con-ref\">\n            <h6>\n              Contract\n            </h6>\n            <p>\n              {{data.Schedule}}\n            </p>\n          </div>\n          <div class=\"col-md con-ref\">\n            <h6>\n              Start Date\n            </h6>\n            <p>\n              {{this.contract[0]?.StartDate | date: 'shortDate'}}\n            </p>\n          </div>\n          <div class=\"col-md con-ref\">\n            <h6>\n              Renewal Date\n            </h6>\n            <p>\n              {{this.contract[0]?.RenewalDate | date: 'shortDate'}}\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"tab-wrapper\">\n            <ul class=\"nav nav-tabs\" id=\"contractTabs\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"detail-tab\" data-toggle=\"tab\" href=\"#detail\" role=\"tab\" aria-controls=\"detail\" aria-selected=\"true\">Details</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"asset-tab\" data-toggle=\"tab\" href=\"#contract\" role=\"tab\" aria-controls=\"assets\" aria-selected=\"false\">Contract ({{this.contractLength?.length}})</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <br>\n        <br>\n        <div class=\"tab-content\" id=\"nav-tabContent\">\n\n          <div class=\"tab-pane detail fade show active\" id=\"detail\" role=\"tabpanel\" aria-labelledby=\"detail-tab\">\n            <div class=\"form-group\">\n              <label for=\"refNumber\">\n                Asset Name <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.Name\" placeholder=\"Asset Name\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"endCustomer\">\n                Serial #/Asset ID <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.Identifier\" placeholder=\"Serial #/Asset ID\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"startDate\">\n                SLA Terms <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.Sla\" placeholder=\"SLA Terms\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"renewalDate\">\n                Location <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.SiteAddress\" placeholder=\"Location\" />\n              </label>\n            </div>\n          </div>\n\n          <div class=\"tab-pane contract fade\" id=\"contract\" role=\"tabpanel\" aria-labelledby=\"asset-tab\">\n            <div class=\"form-group\">\n              <div class=\"search-div\">\n                <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n                  <input matInput [(ngModel)]=\"searchKey\" (keyup)=\"applyFilter()\" placeholder=\"Search\" autocomplete=\"off\">\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchClear()\" *ngIf=\"searchKey\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </div>\n              <div class=\"mat-table mattable-container\">\n                <table mat-table [dataSource]=\"contractDataSource\" class=\"mat-elevation-z8 table\" matSort>\n\n                  <!-- Contract Name Column -->\n                  <div matColumnDef=\"Contract Name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Contract Name </th>\n                    <td mat-cell *matCellDef=\"let contract\">\n                      <a routerLink=\"/contractdetail/{{contract.RefNumber}}\" class=\"contract-link\">{{contract.ScheduleName}}</a>\n                    </td>\n                  </div>\n\n                  <!-- Start Date Column -->\n                  <div matColumnDef=\"Start Date\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Start Date </th>\n                    <td *matCellDef=\"let contract\"> {{contract.StartDate | date: 'shortDate'}} </td>\n                  </div>\n\n                  <!-- Renewal Column -->\n                  <div matColumnDef=\"Renewal Date\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Renewal Date </th>\n                    <td mat-cell *matCellDef=\"let contract\"> {{contract.RenewalDate | date: 'shortDate'}} </td>\n                  </div>\n\n                  <!-- Contract# Column -->\n                  <div matColumnDef=\"Contract#\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Contract# </th>\n                    <td mat-cell *matCellDef=\"let contract\"> {{contract.RefNumber}} </td>\n                  </div>\n\n                  <!-- Customer Column -->\n                  <div matColumnDef=\"Customer\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer </th>\n                    <td mat-cell *matCellDef=\"let contract\"> {{contract.EndCustomerName}} </td>\n                  </div>\n\n                  <!-- Status Column -->\n                  <div matColumnDef=\"Status\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n                    <td mat-cell *matCellDef=\"let contract\"> {{contract.Status}} </td>\n                  </div>\n\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\" [pageSize]=\"10\"></mat-paginator>\n              </div>\n            </div>\n          </div>\n\n        </div>\n          <br>\n            <div class=\"row button-containers\">\n              <div class=\"col-sm\">\n                <Button (click)=\"goBack()\" class=\"btn btn-info\">\n                  Go Back\n                </Button>\n              </div>\n            </div>\n      </div>\n  </div>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/contracts/contract-detail/contract-detail.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/contracts/contract-detail/contract-detail.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageAssetsContractsContractDetailContractDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"col-md\">\n    <div *ngFor='let data of contract' class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"contract-header-wrapper\">\n            <div class=\"contract-header-text\">\n              <div>Contract</div>\n              <h4>{{data.ScheduleName}}</h4>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md con-ref\">\n            <h6>\n              Contract #\n            </h6>\n            <p>\n              {{data.RefNumber}}\n            </p>\n          </div>\n          <div class=\"col-md con-ref\">\n            <h6>\n              Renewal Date\n            </h6>\n            <p>\n              {{data.RenewalDate | date: 'shortDate'}}\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"tab-wrapper\">\n            <ul class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"detail-tab\" data-toggle=\"tab\" href=\"#detail\" role=\"tab\" aria-controls=\"detail\" aria-selected=\"true\">Details</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"asset-tab\" data-toggle=\"tab\" href=\"#assets\" role=\"tab\" aria-controls=\"assets\" aria-selected=\"false\">Covered Assets ({{this.assetLength?.length}})</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"location-tab\" data-toggle=\"tab\" href=\"#location\" role=\"tab\" aria-controls=\"location\" aria-selected=\"false\">Locations</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <br>\n        <br>\n        <div class=\"tab-content\" id=\"nav-tabContent\">\n\n          <div class=\"tab-pane detail fade show active\" id=\"detail\" role=\"tabpanel\" aria-labelledby=\"detail-tab\">\n            <div class=\"form-group\">\n              <label for=\"refNumber\">\n                Reference Number <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.RefNumber\" placeholder=\"Reference Number\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"endCustomer\">\n                Customer <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.EndCustomerName\" placeholder=\"End Customer\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"startDate\">\n                Start Date <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.StartDate\" placeholder=\"Start Date\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"renewalDate\">\n                Renewal Date <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.RenewalDate\" placeholder=\"Renewal Date\" />\n              </label>\n            </div>\n          </div>\n\n\n          <div class=\"tab-pane assets fade\" id=\"assets\" role=\"tabpanel\" aria-labelledby=\"asset-tab\">\n            <div class=\"form-group\">\n              <div class=\"search-div\">\n                <!-- <button mat-raised-button>\n\n                </button> -->\n                <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n                  <input matInput [(ngModel)]=\"searchKey\" (keyup)=\"applyFilter()\" placeholder=\"Search\" autocomplete=\"off\">\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchClear()\" *ngIf=\"searchKey\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </div>\n              <div class=\"mat-table mattable-container\">\n                <table mat-table [dataSource]=\"assetDataSource\" class=\"mat-elevation-z8 table\" matSort>\n\n                  <!-- Name Column -->\n                  <div matColumnDef=\"Name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.Name}} </td>\n                  </div>\n\n                  <!-- Identifier Column -->\n                  <div matColumnDef=\"Identifier\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Serial </th>\n                      <td *matCellDef=\"let asset\">\n                        <a routerLink=\"/assetdetail/{{asset.Identifier}}\" class=\"asset-link\">\n                         {{asset.Identifier}}\n                        </a>\n                      </td>\n\n                  </div>\n\n                  <div matColumnDef=\"Asset Tag\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Asset Tag </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.Identifier}} </td>\n                  </div>\n\n                  <!-- Location Column -->\n                  <div matColumnDef=\"Location\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.SiteAddress}} </td>\n                  </div>\n\n                  <!-- Schedule Column -->\n                  <div matColumnDef=\"Schedule\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Contract </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.Schedule}} </td>\n                  </div>\n\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\" [pageSize]=\"10\"></mat-paginator>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"tab-pane locations fade\" id=\"location\" role=\"tabpanel\" aria-labelledby=\"location-tab\">\n            <div class=\"form-goup\">\n              <label *ngFor=\"let asset of assets | assetLocFilter:asset\" for=\"siteAddress\">\n                Address of Asset\n                <input readonly type=\"text\" [(ngModel)]=\"asset.SiteAddress\" placeholder=\"Asset Location\">\n              </label>\n            </div>\n          </div>\n        </div>\n          <br>\n            <div class=\"row button-containers\">\n              <div class=\"col-sm\">\n                <Button (click)=\"goBack()\" class=\"btn btn-info\">\n                  Go Back\n                </Button>\n              </div>\n            </div>\n      </div>\n  </div>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/contracts/contracts.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/contracts/contracts.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageAssetsContractsContractsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"edit-items-container d-flex justify-content-end\">\n    <button class=\"assign-assets btn btn-primary\">\n      <i class=\"fas fa-file-export\" aria-hidden=\"true\"></i> Export Contracts\n    </button>\n    <button class=\"btn btn-primary\">\n      <i class=\"far fa-eye\"></i> Show Archived\n    </button>\n  </div>\n\n<div class=\"search-div\">\n  <!-- <button mat-raised-button>\n\n  </button> -->\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput [(ngModel)]=\"searchKey\" (keyup)=\"applyFilter()\" placeholder=\"Search\" autocomplete=\"off\">\n    <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchClear()\" *ngIf=\"searchKey\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n\n<div class=\"mat-table mattable-container\">\n  <table mat-table [dataSource]=\"contractDataSource\" class=\"mat-elevation-z8 table\" matSort>\n\n    <!-- Contract Name Column -->\n    <div matColumnDef=\"Contract Name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Contract Name </th>\n      <td mat-cell *matCellDef=\"let contract\">\n        <a routerLink=\"/contractdetail/{{contract.RefNumber}}\" class=\"contract-link\">{{contract.ScheduleName}}</a>\n      </td>\n    </div>\n\n    <!-- Start Date Column -->\n    <div matColumnDef=\"Start Date\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Start Date </th>\n      <td *matCellDef=\"let contract\"> {{contract.StartDate | date: 'shortDate'}} </td>\n    </div>\n\n    <!-- Renewal Column -->\n    <div matColumnDef=\"Renewal Date\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Renewal Date </th>\n      <td mat-cell *matCellDef=\"let contract\"> {{contract.RenewalDate | date: 'shortDate'}} </td>\n    </div>\n\n    <!-- Contract# Column -->\n    <div matColumnDef=\"Contract#\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Contract# </th>\n      <td mat-cell *matCellDef=\"let contract\"> {{contract.RefNumber}} </td>\n    </div>\n\n    <!-- Customer Column -->\n    <div matColumnDef=\"Customer\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer </th>\n      <td mat-cell *matCellDef=\"let contract\"> {{contract.EndCustomerName}} </td>\n    </div>\n\n    <!-- Status Column -->\n    <div matColumnDef=\"Status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n      <td mat-cell *matCellDef=\"let contract\"> {{contract.Status}} </td>\n    </div>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\" [pageSize]=\"10\"></mat-paginator>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/lists/lists.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/lists/lists.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageAssetsListsListsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-end\">\n    <button class=\"add-ticket btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add New List\n    </button>\n</div>\n<hr/>\n<div class=\"edit-items-container d-flex justify-content-end\">\n  <button class=\"assign-assets btn btn-primary\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Assign Assets\n  </button>\n  <button class=\"btn btn-primary\">\n    <i class=\"fas fa-edit\"></i> Edit List\n  </button>\n  <button class=\"btn btn-primary\">\n    <i class=\"far fa-trash-alt\"></i> Delete List\n  </button>\n</div>\n<div class=\"table-container\">\n<table class=\"table table-responsive-sm\">\n  <thead>\n   <tr>\n       <th>List Name</th>\n       <th>Customer</th>\n       <th>User</th>\n       <th>Service Ends</th>\n       <th>Assets</th>\n     </tr>\n  </thead>\n   <!-- <tr *ngFor='let data of lists> -->\n     <!-- <td>{{data.PrimaryCompanyName}}</td>\n     <td>{{data.FullName}}</td>\n     <td>{{data.Telephone}}</td>\n     <td>{{data.Email}}</td>\n     <td>Harmony PSA</td>\n     <td>null</td>\n     <td>null</td>\n     <td>null</td> -->\n   <!-- </tr> -->\n </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/manage-assets.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/manage-assets.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageAssetsManageAssetsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"edit-items-container d-flex justify-content-end\">\n  <button class=\"assign-assets btn btn-primary\">\n    <i class=\"fas fa-file-export\" aria-hidden=\"true\"></i> Export Assets\n  </button>\n  <button class=\"btn btn-primary\">\n    <i class=\"far fa-eye\"></i> Show Archived\n  </button>\n</div>\n\n<div class=\"search-div\">\n  <!-- <button mat-raised-button>\n\n  </button> -->\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput [(ngModel)]=\"searchKey\" (keyup)=\"applyFilter()\" placeholder=\"Search\" autocomplete=\"off\">\n    <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchClear()\" *ngIf=\"searchKey\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n<div class=\"mat-table mattable-container\">\n  <table mat-table [dataSource]=\"assetDataSource\" class=\"mat-elevation-z8 table\" matSort>\n\n    <!-- Name Column -->\n    <div matColumnDef=\"Name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let asset\">\n        <a routerLink=\"/assetdetail/{{asset.Identifier}}\" class=\"asset-link\"> {{asset.Name}} </a>\n      </td>\n    </div>\n\n    <!-- Identifier Column -->\n    <div matColumnDef=\"Identifier\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Serial </th>\n      <td *matCellDef=\"let asset\"> {{asset.Identifier}} </td>\n    </div>\n\n    <div matColumnDef=\"Asset Tag\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Asset Tag </th>\n      <td mat-cell *matCellDef=\"let asset\"> {{asset.Identifier}} </td>\n    </div>\n\n    <!-- Location Column -->\n    <div matColumnDef=\"Location\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>\n      <td mat-cell *matCellDef=\"let asset\"> {{asset.SiteAddress}} </td>\n    </div>\n\n    <!-- Schedule Column -->\n    <div matColumnDef=\"Schedule\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Contract </th>\n      <td mat-cell *matCellDef=\"let asset\"> {{asset.Schedule}} </td>\n    </div>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\" [pageSize]=\"10\"></mat-paginator>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/tickets/ticket-detail/ticket-detail.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/tickets/ticket-detail/ticket-detail.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageAssetsTicketsTicketDetailTicketDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"col-md\">\n    <div *ngFor='let data of ticket' class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"contract-header-wrapper\">\n            <div class=\"contract-header-text\">\n              <div>Ticket</div>\n              <h4>{{data.Name}}</h4>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md con-ref\">\n            <h6>\n              Ticket #\n            </h6>\n            <p>\n              {{data.RefNumber}}\n            </p>\n          </div>\n          <div class=\"col-md con-ref\">\n            <h6>\n              Asset ID\n            </h6>\n            <p>\n              {{data.AssetIdentifier}}\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"tab-wrapper\">\n            <ul class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"detail-tab\" data-toggle=\"tab\" href=\"#detail\" role=\"tab\" aria-controls=\"detail\" aria-selected=\"true\">Details</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"asset-tab\" data-toggle=\"tab\" href=\"#assets\" role=\"tab\" aria-controls=\"assets\" aria-selected=\"false\">Asset</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"contract-tab\" data-toggle=\"tab\" href=\"#contract\" role=\"tab\" aria-controls=\"contracts\" aria-selected=\"false\">Contract</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <br>\n        <br>\n        <div class=\"tab-content\" id=\"nav-tabContent\">\n\n          <div class=\"tab-pane detail fade show active\" id=\"detail\" role=\"tabpanel\" aria-labelledby=\"detail-tab\">\n            <div class=\"form-group\">\n              <label for=\"refNumber\">\n                Reference Number <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.RefNumber\" placeholder=\"Reference Number\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"endCustomer\">\n                Status <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.Status\" placeholder=\"Status\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"startDate\">\n                Description <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.Body\" placeholder=\"Description\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"renewalDate\">\n                Created Date <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.CreatedDate\" placeholder=\"Created Date\" />\n              </label>\n            </div>\n            <div class=\"form-goup\">\n              <label for=\"renewalDate\">\n                Updated On <br>\n                <input readonly type=\"text\" [(ngModel)]=\"data.UpdatedDate\" placeholder=\"Updated Date\" />\n              </label>\n            </div>\n          </div>\n\n\n          <div class=\"tab-pane assets fade\" id=\"assets\" role=\"tabpanel\" aria-labelledby=\"asset-tab\">\n            <div class=\"form-group\">\n              <div class=\"search-div\">\n                <!-- <button mat-raised-button>\n\n                </button> -->\n                <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n                  <input matInput [(ngModel)]=\"searchKey\" (keyup)=\"applyFilter()\" placeholder=\"Search\" autocomplete=\"off\">\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchClear()\" *ngIf=\"searchKey\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </div>\n              <div class=\"mat-table mattable-container\">\n                <table mat-table [dataSource]=\"assetDataSource\" class=\"mat-elevation-z8 table\" matSort>\n\n                  <!-- Name Column -->\n                  <div matColumnDef=\"Name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.Name}} </td>\n                  </div>\n\n                  <!-- Identifier Column -->\n                  <div matColumnDef=\"Identifier\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Serial </th>\n                      <td *matCellDef=\"let asset\">\n                        <a routerLink=\"/assetdetail/{{asset.Identifier}}\" class=\"asset-link\">\n                         {{asset.Identifier}}\n                        </a>\n                      </td>\n\n                  </div>\n\n                  <div matColumnDef=\"Asset Tag\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Asset Tag </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.Identifier}} </td>\n                  </div>\n\n                  <!-- Location Column -->\n                  <div matColumnDef=\"Location\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.SiteAddress}} </td>\n                  </div>\n\n                  <!-- Schedule Column -->\n                  <div matColumnDef=\"Schedule\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Contract </th>\n                    <td mat-cell *matCellDef=\"let asset\"> {{asset.Schedule}} </td>\n                  </div>\n\n                  <tr mat-header-row *matHeaderRowDef=\"assetdisplayedColumns; sticky: true\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: assetdisplayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\" [pageSize]=\"10\"></mat-paginator>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"tab-pane contract fade\" id=\"contract\" role=\"tabpanel\" aria-labelledby=\"contract-tab\">\n            <div class=\"form-goup\">\n              <label *ngFor=\"let asset of assets\" for=\"siteAddress\">\n                Address of Asset\n                <input readonly type=\"text\" [(ngModel)]=\"asset.Identifier + ' - ' + asset.SiteAddress\" placeholder=\"Asset Location\">\n              </label>\n            </div>\n          </div>\n        </div>\n          <br>\n            <div class=\"row button-containers\">\n              <div class=\"col-sm\">\n                <Button (click)=\"goBack()\" class=\"btn btn-info\">\n                  Go Back\n                </Button>\n              </div>\n            </div>\n      </div>\n  </div>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/tickets/tickets.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/tickets/tickets.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageAssetsTicketsTicketsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"createItem d-flex justify-content-end\">\n<button class=\"add-ticket btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create New Ticket\n</button>\n</div>\n<div class=\"collapse\" id=\"collapseExample\">\n<div class=\"card card-body no-outline\">\n<div class=\"form-container col-md-6 col-md-offset-3\">\n<form [formGroup]=\"ticketForm\">\n  <h2>Ticket Form</h2>\n  <div class=\"form-group\">\n    <label for=\"ticketType\">Ticket Type:</label><br>\n    <div class=\"radio\">\n        <label>\n            <input formControlName=\"TicketType\" type=\"radio\" name=\"TicketType\" value=\"Contract Support\" > Support\n        </label><br>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"title\">Title: </label>\n    <input type=\"text\" formControlName=\"Title\" name=\"Title\" class=\"form-control title shadow-none\">\n  </div>\n  <div class=\"form-group\">\n      <label for=\"title\">Asset Id: </label>\n      <input value=\"\" name=\"CustomerNameOrId\" type=\"text\" formControlName=\"AssetId\" class=\"form-control shadow-none\">\n    </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description: </label> <br>\n    <textarea class=\"shadow-none\" formControlName=\"Description\" name=\"Description\" cols=\"50%\" rows=\"5px\">\n    </textarea>\n  </div>\n  <div class=\"form-group-button\">\n    <button (click)=\"createTicket()\" class=\"btn btn-primary\"> Submit </button>\n  </div>\n</form>\n</div>\n</div>\n</div>\n<hr/>\n\n<div class=\"table-container table-responsive-sm\">\n    <div class=\"edit-items d-flex justify-content-end\">\n        <button class=\"btn btn-primary\">\n            <i class=\"fas fa-edit\"></i> Edit List\n        </button>\n        <button class=\"btn btn-primary\">\n          <i class=\"fas fa-info-circle\" aria-hidden=\"true\"></i> Ticket Details\n        </button>\n    </div>\n\n\n    <!-- <div class=\"table-container table-responsive-sm\">\n      <table class=\"table table-bordered\">\n          <thead>\n           <tr>\n               <th>Title</th>\n               <th>Description</th>\n               <th>Ticket#</th>\n\n             </tr>\n          </thead>\n          <tr *ngFor='let data of ticketLength'>\n            <td> {{data.Name}} </td>\n            <td> {{data.Body}} </td>\n            <td> {{data.RefNumber}}</td>\n          </tr>\n         </table>\n         {{this.testin}}\n      </div> -->\n\n<div class=\"search-div\">\n\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput [(ngModel)]=\"searchKey\" (keyup)=\"applyFilter()\" placeholder=\"Search\" autocomplete=\"off\">\n    <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchClear()\" *ngIf=\"searchKey\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n\n<div class=\"mat-table mattable-container\">\n  <table mat-table [dataSource]=\"ticketDataSource\" class=\"mat-elevation-z8 table\" matSort>\n\n    <!-- Case Column -->\n    <div matColumnDef=\"Case#\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Case# </th>\n      <td mat-cell *matCellDef=\"let ticket\">\n        <a routerLink=\"/ticketdetail/{{ticket.RefNumber}}\" class=\"asset-link\"> {{ticket.RefNumber}} </a>\n      </td>\n    </div>\n\n    <!-- Name Column -->\n    <div matColumnDef=\"Name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td *matCellDef=\"let ticket\"> {{ticket.Name}} </td>\n    </div>\n\n    <!-- Status Column -->\n   <div matColumnDef=\"Status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n      <td mat-cell *matCellDef=\"let ticket\"> {{ticket.Status}} </td>\n    </div>\n\n    <!-- Description Column -->\n <div matColumnDef=\"Description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n      <td mat-cell *matCellDef=\"let ticket\"> {{ticket.Body}} </td>\n    </div>\n\n    <!-- Customer Column -->\n  <div matColumnDef=\"Customer\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer </th>\n      <td mat-cell *matCellDef=\"let ticket\"> {{ticket.CustomerName}} </td>\n    </div>\n\n    <!-- Asset ID Column -->\n  <div matColumnDef=\"Asset ID\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Asset ID </th>\n      <td mat-cell *matCellDef=\"let ticket\"> {{ticket.AssetIdentifier}} </td>\n    </div>\n\n    <!-- Schedule Column -->\n    <div matColumnDef=\"Schedule\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Contract </th>\n      <td mat-cell *matCellDef=\"let ticket\"> {{ticket.Schedule}} </td>\n    </div>\n\n    <!-- Update Column -->\n <div matColumnDef=\"Update Date\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Update Date </th>\n      <td mat-cell *matCellDef=\"let ticket\"> {{ticket.UpdatedDate | date: 'shortDate'}} </td>\n    </div>\n\n    <!-- Update Since -->\n  <div matColumnDef=\"Update Since\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Since Last Update </th>\n      <td mat-cell *matCellDef=\"let ticket\"> {{ticket.TimeSinceLastUpdate}} </td>\n    </div>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n   <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\" [pageSize]=\"10\"></mat-paginator>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/north/north.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/north/north.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNorthNorthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container wrapper\">\n      <div class=\"container-fluid\">\n        <div class=\"row \">\n          <div class=\"contracts-container total-container col-md\">\n            <a routerLink=\"/manageassets/contracts\">\n              <div class=\"contract-content\">\n                {{this.contractLength.length}} <br>\n                Contracts\n              </div>\n              <img src=\"../../assets/contract2.png\">\n            </a>\n          </div>\n          <div class=\"assets-container total-container col-md\">\n            <a routerLink=\"/manageassets/assets\">\n              <div class=\"assets-content\">\n                {{this.assetLength.length}} <br>\n                Assets\n                <img src=\"../../assets/assets.png\">\n              </div>\n            </a>\n          </div>\n          <div class=\"tickets-container total-container col-md\">\n            <a routerLink=\"/manageassets/tickets\">\n              <div class=\"tickets-content\">\n                {{this.ticketLength.length}} <br>\n                Tickets\n                <img src=\"../../assets/tickets.png\">\n              </div>\n            </a>\n          </div>\n          <div *ngIf=\"this.filterPartner(this.currentProfile.partner)\" class=\"companies-container total-container col-md\">\n            <a routerLink=\"/admin/companies\">\n              <div class=\"companies-content\">\n                {{this.companyLength.length}}<br>\n                Companies\n                <img src=\"../../assets/company3.png\">\n              </div>\n            </a>\n          </div>\n          <!-- <div *ngIf=\"currentProfile.partnerRole === 'Admin'\" class=\"users-container total-container col-md\">\n            <a routerLink=\"/admin/users\">\n              <div class=\"users-content\">\n                0 <br>\n                Users\n                <img src=\"../../assets/users.png\">\n              </div>\n            </a>\n          </div> -->\n          <!-- <div class=\"locations-container total-container col-md\">\n            <a routerLink=\"/admin/locations\"><div class=\"locations-content\">\n                0 <br>\n                Locations\n              <img src=\"../../assets/locations.png\">\n            </div>\n          </a>\n            </div> -->\n          </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <div class=\"container contracts-wrapper\">\n            <div class=\"row\">\n              <div class=\"title col-md\">\n                <h3><i class=\"fa fa-calendar\" aria-hidden=\"true\"> </i> Contracts</h3>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"legend col-md\">\n                <h6>\n                  <span class=\"badge badge-now\"><p>N</p></span> Now\n                </h6>\n                <h6>\n                  <span class=\"badge badge-15\"><p>N</p></span> 15 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-30\"><p>N</p></span> 30 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-60\"><p>N</p></span> 60 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-90\"><p>N</p></span> 90 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-plus\"><p>N</p></span> 90+ Days\n                </h6>\n              </div>\n              <div class=\"chart col-md\">\n                  <canvas id=\"contracts\" width=\"250\" height=\"250\">{{ contractsData }}</canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md\">\n                <table class=\"table\">\n                  <tr>\n                    <td>\n                      Now\n                    </td>\n                    <td>\n                      <span class=\"badge badge-now badge-table\">0</span>\n                    </td>\n                    <td>\n                     15 Days\n                    </td>\n                    <td>\n                        <span class=\"badge badge-15 badge-table\">0</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      30 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-30 badge-table\">0</span>\n                    </td>\n                    <td>\n                     60 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-60 badge-table\">0</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      90 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-90 badge-table\">0</span>\n                    </td>\n                    <td>\n                      90+ Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-plus badge-table\">0</span>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n          </div>\n        </div>\n      </div>\n\n        <div class=\"col-md\">\n          <div class=\"container assets-wrapper\">\n            <div class=\"row\">\n              <div class=\"title col-md\">\n                <h3><i class=\"fa fa-calendar\" aria-hidden=\"true\"> </i> Assets</h3>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"legend col-md\">\n                <h6>\n                  <span class=\"badge badge-now\"><p>N</p></span> Now\n                </h6>\n                <h6>\n                  <span class=\"badge badge-15\"><p>N</p></span> 15 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-30\"><p>N</p></span> 30 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-60\"><p>N</p></span> 60 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-90\"><p>N</p></span> 90 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-plus\"><p>N</p></span> 90+ Days\n                </h6>\n              </div>\n              <div class=\"chart col-md\">\n                  <canvas id=\"assets\" width=\"250\" height=\"250\">{{ assetsChart }}</canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md\">\n                  <table class=\"table\">\n                    <tr>\n                      <td>\n                        Now\n                      </td>\n                      <td>\n                        <span class=\"badge badge-now badge-table\">0</span>\n                      </td>\n                      <td>\n                       15 Days\n                      </td>\n                      <td>\n                          <span class=\"badge badge-15 badge-table\">0</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        30 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-30 badge-table\">0</span>\n                      </td>\n                      <td>\n                       60 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-60 badge-table\">0</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        90 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-90 badge-table\">0</span>\n                      </td>\n                      <td>\n                        90+ Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-plus badge-table\">0</span>\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md\">\n          <div class=\"container tickets-wrapper\">\n\n          <div class=\"row\">\n            <div class=\"title col-md\">\n              <h3><i class=\"fas fa-hdd\"></i> Tickets</h3>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md\">\n             <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Status</th>\n                  <th scope=\"col\">Count</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td scope=\"row\">New</td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td scope=\"row\">Pending</td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td scope=\"row\">Closed</td>\n                  <td>0</td>\n                </tr>\n              </tbody>\n            </table>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"view-wrapper col-md\">\n              <Button routerLink=\"/manageassets/tickets\" class=\"btn btn-info\"> View All</Button>\n            </div>\n          </div>\n\n          </div>\n      </div>\n\n      </div>\n\n        <div class=\"col-md\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              My Open Cases\n            </div>\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">#</th>\n                  <th scope=\"col\">First</th>\n                  <th scope=\"col\">Last</th>\n                  <th scope=\"col\">Handle</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">1</th>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">2</th>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">3</th>\n                  <td colspan=\"2\">Larry the Bird</td>\n                  <td>@twitter</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"col-md\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>Update Account </h3>\n      </div>\n      <div class=\"card-body\">\n          <form [formGroup]=\"profileForm\">\n            <div class=\"form-group\">\n              <label for=\"partner\">Company </label>\n              <select [disabled]=\"changePartner()\" formControlName=\"partner\" class=\"form-control\" id=\"company\">\n                <option default>{{currentProfile?.partner}}</option>\n                <option >NorthSmart</option>\n                <option>Noble 1 Solutions</option>\n                <option>Relus Technologies</option>\n                <option>Reliant Technology</option>\n              </select>\n            </div>\n              <div class=\"form-group\">\n                <label for=\"firstName\">First Name</label><br>\n                <input type=\"text\" formControlName=\"firstName\" class=\"firstName input\" value=\"{{currentProfile?.firstName}}\">\n                <div *ngIf=\"submitted && !!f.firstName.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"!!f.username.errors.required\">First Name required!</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"lastName\">Last Name</label><br>\n                  <input type=\"text\" formControlName=\"lastName\" class=\"lastName input\" value=\"{{currentProfile?.lastName}}\">\n                </div>\n              <div class=\"form-group\">\n                <label for=\"userName\">Username</label><br>\n                <input type=\"text\" formControlName=\"username\" class=\"username input\" value=\"{{currentProfile?.username}}\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label><br>\n                <input type=\"text\" formControlName=\"email\" class=\"email input\" value=\"{{currentProfile?.email}}\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"phone\">Phone</label><br>\n                <input type=\"text\" formControlName=\"phone\" class=\"email input\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"ticketingAlias\">Ticketing Alias</label><br>\n                <input type=\"text\" formControlName=\"ticketingAlias\" class=\"ticketingAlias\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label><br>\n                <button name=\"password\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#changePassword\">\n                  <i class=\"fas fa-lock\"></i> Change Password\n                </button>\n              </div>\n              <div class=\"modal fade\" id=\"changePassword\"  role=\"dialog\" aria-labelledby=\"modalCentered\" aria-hidden=\"true\">\n                <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Update Password</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"form-group\">\n                        <label for=\"newPassword\">New Password</label><br>\n                        <input class=\"passwordChange\" formControlName=\"password\" name=\"newPassword\" type=\"password\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"confirmPassword\">Confirm Password</label><br>\n                        <input class=\"passwordChange\" formControlName=\"conpass\" name=\"confirmwPassword\" type=\"password\">\n                      </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                      <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group form-check\">\n                <label for=\"ticketCopy\">Ticket Copy  </label>\n                <input name=\"ticketCopy\" class=\"checkbox shadow-none\" type=\"checkbox\">\n              </div>\n              <div class=\"form-group form-check\">\n                <label for=\"expnotification\">Expiration Notification </label>\n                <input name=\"expnotification\" class=\"checkbox shadow-none\" type=\"checkbox\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"role\">Role</label><br>\n                <div data-toggle=\"tooltip\" data-placement=\"top\" title=\"Changing your own role is not allowed!\" class=\"wrapper\">\n                <select [disabled]=\"true\" formControlName=\"role\" class=\"form-control\" id=\"role\">\n                  <option>List of Roles</option>\n                  <option selected>{{currentProfile?.partnerRole}}</option>\n                  <option>Option 2</option>\n                  <option>option 3</option>\n                  <option>option4</option>\n                </select>\n              </div>\n            </div>\n              <div class=\"form-group-button\">\n                <button class=\"btn btn-primary\">Update User</button>\n              </div>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reliant-dash/reliant-dash.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reliant-dash/reliant-dash.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReliantDashReliantDashComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container wrapper\">\n    <li *ngFor=\"let profile of profiles\">\n      <h4>\n        Profiles: {{this.profiles}}</h4>\n    </li>\n      <div class=\"container-fluid\">\n        <div class=\"row \">\n          <div class=\"contracts-container total-container col-md\">\n            <a routerLink=\"/manageassets/contracts\">\n              <div class=\"row contract-content\">\n                <div class=\"col contract-length\">\n                  {{this.contractLength?.length}}\n                </div>\n              </div>\n              <div class=\"row contract-label justify-content-center\">\n                Contracts\n              </div>\n              <div class=\"row contract-logo justify-content-end\">\n                  <img src=\"../../assets/contract2.png\">\n              </div>\n            </a>\n          </div>\n          <div class=\"assets-container total-container col-md\">\n            <a routerLink=\"/manageassets/assets\">\n              <div class=\"row asset-content\">\n                <div class=\"col asset-length\">\n                  {{this.assetLength?.length}}\n                </div>\n              </div>\n              <div class=\"row asset-label justify-content-center\">\n                Assets\n              </div>\n              <div class=\"row asset-logo justify-content-end\">\n                  <img src=\"../../assets/assets.png\">\n              </div>\n            </a>\n          </div>\n          <div class=\"tickets-container total-container col-md\">\n            <a routerLink=\"/manageassets/tickets\">\n              <div class=\"row ticket-content\">\n                <div class=\"col ticket-length\">\n                  {{this.ticketLength?.length}}\n                </div>\n              </div>\n              <div class=\"row ticket-label justify-content-center\">\n                Tickets\n              </div>\n              <div class=\"row ticket-logo justify-content-end\">\n                  <img src=\"../../assets/tickets.png\">\n              </div>\n            </a>\n          </div>\n          <div *ngIf=\"this.filterPartner(this.currentProfile.partner)\" class=\"companies-container total-container col-md\">\n            <a routerLink=\"/manageassets/companies\">\n              <div class=\"row companies-content\">\n                <div class=\"col companies-length\">\n                  {{this.companyLength?.length}}\n                </div>\n              </div>\n              <div class=\"row companies-label justify-content-center\">\n                Companies\n              </div>\n              <div class=\"row ticket-logo justify-content-end\">\n                  <img src=\"../../assets/company3.png\">\n              </div>\n            </a>\n          </div>\n          <!-- <div *ngIf=\"currentProfile.partnerRole === 'Admin'\" class=\"users-container total-container col-md\">\n            <a routerLink=\"/admin/users\">\n              <div class=\"users-content\">\n                0 <br>\n                Users\n                <img src=\"../../assets/users.png\">\n              </div>\n            </a>\n          </div> -->\n          <!-- <div class=\"locations-container total-container col-md\">\n            <a routerLink=\"/admin/locations\"><div class=\"locations-content\">\n                0 <br>\n                Locations\n              <img src=\"../../assets/locations.png\">\n            </div>\n          </a>\n            </div> -->\n          </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <div class=\"container contracts-wrapper\">\n            <div class=\"row\">\n              <div class=\"title col-md\">\n                <h3><i class=\"fa fa-calendar\" aria-hidden=\"true\"> </i> Contracts</h3>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"legend col-md\">\n                <h6>\n                  <span class=\"badge badge-now\"><p>N</p></span> Now\n                </h6>\n                <h6>\n                  <span class=\"badge badge-15\"><p>N</p></span> 15 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-30\"><p>N</p></span> 30 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-60\"><p>N</p></span> 60 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-90\"><p>N</p></span> 90 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-plus\"><p>N</p></span> 90+ Days\n                </h6>\n              </div>\n              <div class=\"chart col-md\">\n                  <canvas id=\"contracts\" width=\"250\" height=\"250\">{{ contractsData }}</canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md\">\n                <table class=\"table\">\n                  <tr>\n                    <td>\n                      Now\n                    </td>\n                    <td>\n                      <span class=\"badge badge-now badge-table\">0</span>\n                    </td>\n                    <td>\n                     15 Days\n                    </td>\n                    <td>\n                        <span class=\"badge badge-15 badge-table\">0</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      30 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-30 badge-table\">0</span>\n                    </td>\n                    <td>\n                     60 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-60 badge-table\">0</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      90 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-90 badge-table\">0</span>\n                    </td>\n                    <td>\n                      90+ Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-plus badge-table\">0</span>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n          </div>\n        </div>\n      </div>\n\n        <div class=\"col-md\">\n          <div class=\"container assets-wrapper\">\n            <div class=\"row\">\n              <div class=\"title col-md\">\n                <h3><i class=\"fa fa-calendar\" aria-hidden=\"true\"> </i> Assets</h3>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"legend col-md\">\n                <h6>\n                  <span class=\"badge badge-now\"><p>N</p></span> Now\n                </h6>\n                <h6>\n                  <span class=\"badge badge-15\"><p>N</p></span> 15 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-30\"><p>N</p></span> 30 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-60\"><p>N</p></span> 60 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-90\"><p>N</p></span> 90 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-plus\"><p>N</p></span> 90+ Days\n                </h6>\n              </div>\n              <div class=\"chart col-md\">\n                  <canvas id=\"assets\" width=\"250\" height=\"250\">{{ assetsChart }}</canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md\">\n                  <table class=\"table\">\n                    <tr>\n                      <td>\n                        Now\n                      </td>\n                      <td>\n                        <span class=\"badge badge-now badge-table\">0</span>\n                      </td>\n                      <td>\n                       15 Days\n                      </td>\n                      <td>\n                          <span class=\"badge badge-15 badge-table\">0</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        30 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-30 badge-table\">0</span>\n                      </td>\n                      <td>\n                       60 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-60 badge-table\">0</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        90 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-90 badge-table\">0</span>\n                      </td>\n                      <td>\n                        90+ Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-plus badge-table\">0</span>\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md\">\n          <div class=\"container tickets-wrapper\">\n\n          <div class=\"row\">\n            <div class=\"title col-md\">\n              <h3><i class=\"fas fa-hdd\"></i> Tickets</h3>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md\">\n             <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Status</th>\n                  <th scope=\"col\">Count</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td scope=\"row\">New</td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td scope=\"row\">Pending</td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td scope=\"row\">Closed</td>\n                  <td>0</td>\n                </tr>\n              </tbody>\n            </table>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"view-wrapper col-md\">\n              <Button routerLink=\"/manageassets/tickets\" class=\"btn btn-info\"> View All</Button>\n            </div>\n          </div>\n\n          </div>\n      </div>\n\n      </div>\n\n        <div class=\"col-md\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              My Open Cases\n            </div>\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">#</th>\n                  <th scope=\"col\">First</th>\n                  <th scope=\"col\">Last</th>\n                  <th scope=\"col\">Handle</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">1</th>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">2</th>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">3</th>\n                  <td colspan=\"2\">Larry the Bird</td>\n                  <td>@twitter</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/relus-dash/relus-dash.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/relus-dash/relus-dash.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRelusDashRelusDashComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container wrapper\">\n      <div class=\"container-fluid\">\n        <div class=\"row \">\n          <div class=\"contracts-container total-container col-md\">\n            <a routerLink=\"/manageassets/contracts\">\n              <div class=\"row contract-content\">\n                <div class=\"col contract-length\">\n                  {{this.contractLength.length}}\n                </div>\n              </div>\n              <div class=\"row contract-label justify-content-center\">\n                Contracts\n              </div>\n              <div class=\"row contract-logo justify-content-end\">\n                  <img src=\"../../assets/contract2.png\">\n              </div>\n            </a>\n          </div>\n          <div class=\"assets-container total-container col-md\">\n            <a routerLink=\"/manageassets/assets\">\n              <div class=\"row asset-content\">\n                <div class=\"col asset-length\">\n                  {{this.assetLength.length}}\n                </div>\n              </div>\n              <div class=\"row asset-label justify-content-center\">\n                Assets\n              </div>\n              <div class=\"row asset-logo justify-content-end\">\n                  <img src=\"../../assets/assets.png\">\n              </div>\n            </a>\n          </div>\n          <div class=\"tickets-container total-container col-md\">\n            <a routerLink=\"/manageassets/tickets\">\n              <div class=\"row ticket-content\">\n                <div class=\"col ticket-length\">\n                  {{this.ticketLength.length}}\n                </div>\n              </div>\n              <div class=\"row ticket-label justify-content-center\">\n                Tickets\n              </div>\n              <div class=\"row ticket-logo justify-content-end\">\n                  <img src=\"../../assets/tickets.png\">\n              </div>\n            </a>\n          </div>\n          <div *ngIf=\"this.filterPartner(this.currentProfile.partner)\" class=\"companies-container total-container col-md\">\n            <a routerLink=\"/manageassets/companies\">\n              <div class=\"row companies-content\">\n                <div class=\"col companies-length\">\n                  {{this.companyLength.length}}\n                </div>\n              </div>\n              <div class=\"row companies-label justify-content-center\">\n                Companies\n              </div>\n              <div class=\"row ticket-logo justify-content-end\">\n                  <img src=\"../../assets/company3.png\">\n              </div>\n            </a>\n          </div>\n          <!-- <div *ngIf=\"currentProfile.partnerRole === 'Admin'\" class=\"users-container total-container col-md\">\n            <a routerLink=\"/admin/users\">\n              <div class=\"users-content\">\n                0 <br>\n                Users\n                <img src=\"../../assets/users.png\">\n              </div>\n            </a>\n          </div> -->\n          <!-- <div class=\"locations-container total-container col-md\">\n            <a routerLink=\"/admin/locations\"><div class=\"locations-content\">\n                0 <br>\n                Locations\n              <img src=\"../../assets/locations.png\">\n            </div>\n          </a>\n            </div> -->\n          </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <div class=\"container contracts-wrapper\">\n            <div class=\"row\">\n              <div class=\"title col-md\">\n                <h3><i class=\"fa fa-calendar\" aria-hidden=\"true\"> </i> Contracts</h3>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"legend col-md\">\n                <h6>\n                  <span class=\"badge badge-now\"><p>N</p></span> Now\n                </h6>\n                <h6>\n                  <span class=\"badge badge-15\"><p>N</p></span> 15 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-30\"><p>N</p></span> 30 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-60\"><p>N</p></span> 60 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-90\"><p>N</p></span> 90 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-plus\"><p>N</p></span> 90+ Days\n                </h6>\n              </div>\n              <div class=\"chart col-md\">\n                  <canvas id=\"contracts\" width=\"250\" height=\"250\">{{ contractsData }}</canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md\">\n                <table class=\"table\">\n                  <tr>\n                    <td>\n                      Now\n                    </td>\n                    <td>\n                      <span class=\"badge badge-now badge-table\">0</span>\n                    </td>\n                    <td>\n                     15 Days\n                    </td>\n                    <td>\n                        <span class=\"badge badge-15 badge-table\">0</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      30 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-30 badge-table\">0</span>\n                    </td>\n                    <td>\n                     60 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-60 badge-table\">0</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      90 Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-90 badge-table\">0</span>\n                    </td>\n                    <td>\n                      90+ Days\n                    </td>\n                    <td>\n                      <span class=\"badge badge-plus badge-table\">0</span>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n          </div>\n        </div>\n      </div>\n\n        <div class=\"col-md\">\n          <div class=\"container assets-wrapper\">\n            <div class=\"row\">\n              <div class=\"title col-md\">\n                <h3><i class=\"fa fa-calendar\" aria-hidden=\"true\"> </i> Assets</h3>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"legend col-md\">\n                <h6>\n                  <span class=\"badge badge-now\"><p>N</p></span> Now\n                </h6>\n                <h6>\n                  <span class=\"badge badge-15\"><p>N</p></span> 15 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-30\"><p>N</p></span> 30 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-60\"><p>N</p></span> 60 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-90\"><p>N</p></span> 90 Days\n                </h6>\n                <h6>\n                  <span class=\"badge badge-plus\"><p>N</p></span> 90+ Days\n                </h6>\n              </div>\n              <div class=\"chart col-md\">\n                  <canvas id=\"assets\" width=\"250\" height=\"250\">{{ assetsChart }}</canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md\">\n                  <table class=\"table\">\n                    <tr>\n                      <td>\n                        Now\n                      </td>\n                      <td>\n                        <span class=\"badge badge-now badge-table\">0</span>\n                      </td>\n                      <td>\n                       15 Days\n                      </td>\n                      <td>\n                          <span class=\"badge badge-15 badge-table\">0</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        30 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-30 badge-table\">0</span>\n                      </td>\n                      <td>\n                       60 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-60 badge-table\">0</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        90 Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-90 badge-table\">0</span>\n                      </td>\n                      <td>\n                        90+ Days\n                      </td>\n                      <td>\n                        <span class=\"badge badge-plus badge-table\">0</span>\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md\">\n          <div class=\"container tickets-wrapper\">\n\n          <div class=\"row\">\n            <div class=\"title col-md\">\n              <h3><i class=\"fas fa-hdd\"></i> Tickets</h3>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md\">\n             <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Status</th>\n                  <th scope=\"col\">Count</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td scope=\"row\">New</td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td scope=\"row\">Pending</td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td scope=\"row\">Closed</td>\n                  <td>0</td>\n                </tr>\n              </tbody>\n            </table>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"view-wrapper col-md\">\n              <Button routerLink=\"/manageassets/tickets\" class=\"btn btn-info\"> View All</Button>\n            </div>\n          </div>\n\n          </div>\n      </div>\n\n      </div>\n\n        <div class=\"col-md\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              My Open Cases\n            </div>\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">#</th>\n                  <th scope=\"col\">First</th>\n                  <th scope=\"col\">Last</th>\n                  <th scope=\"col\">Handle</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">1</th>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">2</th>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">3</th>\n                  <td colspan=\"2\">Larry the Bird</td>\n                  <td>@twitter</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-user/reset-user.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-user/reset-user.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResetUserResetUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>reset-user works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"col-md\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h3>{{currentProfile?.partner}} Settings</h3>\n        </div>\n        <div class=\"card-body\">\n            <form>\n              <h4 class=\"alert alert-dark\">Ticket Settings</h4>\n                <div class=\"form-group\">\n                  <label for=\"ticketEmail\">Ticketing Email</label><br>\n                  <input type=\"text\" name=\"ticketEmail\" class=\"shadow-none\" value=\"{{currentProfile?.email}}\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"openEmail\">Open Ticket Notifications Email</label><br>\n                    <input type=\"text\" name=\"openEmail\" class=\"shadow-none\" value=\"{{currentProfile?.email}}\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"closedEmail\">Closed Ticket Email</label><br>\n                  <input type=\"text\" name=\"closedEmail\" class=\"shadow-none\" value=\"{{currentProfile?.email}}\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"phone\">Phone</label><br>\n                  <input type=\"text\" name=\"phone\" class=\"shadow-none\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"support\">Default T&M Support</label><br>\n                  <input type=\"text\" name=\"support\" class=\"shadow-none\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label><br>\n                  <button name=\"password\" class=\"btn btn-primary\">Change Password</button>\n                </div>\n                <div class=\"form-group form-check\">\n                  <label for=\"hardwareDesc\">Replacement Hardware Desc.</label>\n                  <input name=\"hardwareDesc\" class=\"checkbox shadow-none\" type=\"checkbox\">\n                </div>\n                <div class=\"form-group form-check\">\n                  <label for=\"responseLevel\">Use Response Level</label>\n                  <input name=\"responseLevel\" class=\"checkbox shadow-none\" type=\"checkbox\">\n                </div>\n                <h4 classs=\"alert alert-dark\">Contract & Asset Settings</h4>\n                <div class=\"form-group-button\">\n                  <button class=\"btn btn-primary\">Update User</button>\n                </div>\n              </form>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "        <!-- Ng If to read User Role -->\n        <nav class=\"navbar-nav sticky-top text-center\">\n\n          <div *ngIf=\"currentRole?.partnerRole === 'Admin'\" id=\"container\" class=\"icon-bar text-center\">\n            <div width=\"100%\" class=\"ham-wrapper text-center\">\n            <button class=\"col-auto btn btn-lg custom-btn\" role=\"button\">\n              <i class=\"fa fa-bars\"></i>\n            </button>\n          </div>\n\n\n                <a (click)=\"dashLink()\" class=\"dashboard\">\n                  <div class=\"dashboard-icon icon-wrapper\">\n                    <i class=\"icon fas fa-tachometer-alt\"></i>\n                  </div>\n                <div class=\"dashboard-content col-auto\">\n                    <span>\n                      Dashboard\n                    </span>\n                </div>\n                </a>\n\n\n                <a class=\"assets-btn\">\n                    <div class=\"assets-icon icon-wrapper\">\n                      <i routerLink=\"manageassets/assets\" class=\"icon fas fa-file-alt\"></i>\n                  </div>\n                  <div class=\"assets-text dropdown-toggle dropdown-btn col-auto\" id=\"dropdown\" data-toggle=\"collapse\" data-target=\"#dd\">\n                      <span>\n                        Assets\n                      </span>\n                  </div>\n                </a>\n\n\n              <div id=\"dd\" class=\"dropdown-container collapse\" aria-labelledby=\"dropdown01\">\n                    <a class=\"dropdown\" routerLink=\"manageassets/contracts\">Contracts</a>\n                    <a class=\"dropdown\" routerLink=\"manageassets/assets\">Assets</a>\n              </div>\n\n\n              <a routerLink=\"manageassets/tickets\" class=\"tickets\">\n                <div class=\"tickets-icon icon-wrapper\">\n                    <i routerLink=\"manageassets/tickets\" class=\"icon fas fa-ticket-alt\"></i>\n                </div>\n                <div class=\"tickets-content col-auto\">\n                    <span>Tickets</span>\n                </div>\n                </a>\n\n                <a routerLink=\"locations\" class=\"locations\">\n                  <div class=\"locations-icon icon-wrapper\">\n                      <i routerLink=\"locations\" class=\"icon fas fa-map\"></i>\n                  </div>\n                  <div class=\"tickets-content col-auto\">\n                      <span>Locations</span>\n                  </div>\n                  </a>\n\n                <a class=\"admin\">\n                  <div class=\"admin-icon icon-wrapper\">\n                    <i routerLink=\"\" class=\"icon fas fa-users-cog\"></i>\n                </div>\n                <div class=\"dropdown-toggle dropdown-btn col-auto\" id=\"dropdown02\" data-toggle=\"collapse\" data-target=\"#dd2\">\n                    <span>Admin</span>\n                </div>\n                </a>\n\n                <div id=\"dd2\" class=\"dropdown-container collapse\" aria-labelledby=\"dropdown02\">\n                    <!-- <a class=\"dropdown\" routerLink=\"admin/oem\">OEM</a> -->\n                    <a class=\"dropdown\" routerLink=\"admin/customers\">Customers</a>\n                    <a *ngIf=\"currentRole?.partner === 'Noble1Solutions'\" class=\"dropdown\" routerLink=\"admin/admin\">Admin</a>\n                    <a *ngIf=\"currentRole?.partner === 'Noble1Solutions'\" class=\"dropdown\" routerLink=\"admin/register\">Register Users</a>\n                    <a *ngIf=\"currentRole?.partner === 'Noble1Solutions'\" class=\"dropdown\" routerLink=\"admin/localMonitor\">Local Monitor</a>\n              </div>\n          </div>\n    </nav>\n\n    <nav *ngIf=\"currentRole?.partnerRole === 'User'\" class=\"navbar-nav\">\n        <div id=\"container\" class=\"icon-bar\">\n            <div class=\"ham-wrapper\">\n            <button class=\"col-auto btn btn-lg custom-btn\" (click)=\"collapseMenu()\">\n              <i class=\"fa fa-bars\"></i>\n            </button>\n          </div>\n                <a (click)=\"dashLink()\" class=\"dashboard\">\n                  <div class=\"dashboard-icon\">\n                    <i class=\"icon fas fa-tachometer-alt\"></i>\n                  </div>\n                <div class=\"dashboard-content col-auto\">\n                    <span>Dashboard</span>\n                    <i class=\"fa fa-caret-down\"></i>\n                </div>\n                </a>\n                <a class=\"assets-btn\">\n                    <div class=\"assets-icon\">\n                      <i routerLink=\"manageassets/assets\" class=\"icon fas fa-file-alt\"></i>\n                  </div>\n                  <div (click)=\"dropdownMA()\" class=\"dropdown-btn col-auto\">\n                      <span>Assets</span>\n                      <i class=\"fa fa-caret-down\"></i>\n                  </div>\n                </a>\n              <div id=\"dropdown\" class=\"dropdown-container\">\n                    <a class=\"dropdown\" routerLink=\"manageassets/contracts\">Contracts</a>\n                    <a class=\"dropdown\" routerLink=\"manageassets/assets\">Assets</a>\n              </div>\n              <a routerLink=\"manageassets/tickets\" class=\"tickets\">\n                  <div class=\"tickets-icon\">\n                    <i routerLink=\"manageassets/tickets\" class=\"icon fas fa-ticket-alt\"></i>\n                </div>\n                <div class=\"tickets-content col-auto\">\n                    <span>Tickets</span>\n                </div>\n                </a>\n                <a class=\"admin\">\n                  <div class=\"admin-icon\">\n                    <i class=\"icon fas fa-users-cog\"></i>\n                </div>\n                <div  class=\"admin-content col-auto\">\n                    <span>Admin</span>\n                    <i class=\"fa fa-caret-down\"></i>\n                </div>\n                </a>\n                <div id=\"dropdownTwo\" class=\"dropdown-container-two\">\n                    <a class=\"dropdown\" routerLink=\"admin/customers\">Customers</a>\n              </div>\n          </div>\n    </nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/suppdash/suppdash.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/suppdash/suppdash.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuppdashSuppdashComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  suppdash works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin/accounts/accounts.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/admin/accounts/accounts.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAccountsAccountsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-item-container {\n  margin-right: 20px;\n}\n\n.edit-items {\n  margin-right: 20px;\n}\n\nhr {\n  margin-right: 30px;\n}\n\n.btn {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.btn:click,\n.btn:hover,\n.btn:focused,\n.btn:active,\n.btn:visited {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.table-container {\n  margin-right: 30px;\n}\n\ntable {\n  border: 3px solid black;\n}\n\nth {\n  background-color: black;\n  color: white;\n  border-color: white;\n}\n\nth, td {\n  border: 1px solid black;\n  padding: 15px;\n  text-align: left;\n}\n\ntable {\n  border-collapse: collapse;\n\n}\n\ntr:nth-child(even) {\n  background-color: #e6e6e6;\n}\n\ntr:nth-child(odd) {\n  background-color:   white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWNjb3VudHMvYWNjb3VudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsd0NBQXdDO0FBQzFDOztBQUVBOzs7OztFQUtFLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hY2NvdW50cy9hY2NvdW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmVkaXQtaXRlbXMge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cblxuLmJ0bjpjbGljayxcbi5idG46aG92ZXIsXG4uYnRuOmZvY3VzZWQsXG4uYnRuOmFjdGl2ZSxcbi5idG46dmlzaXRlZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxudGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblxufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG50cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICAgd2hpdGU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/accounts/accounts.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/accounts/accounts.component.ts ***!
    \******************************************************/

  /*! exports provided: AccountsComponent */

  /***/
  function srcAppAdminAccountsAccountsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsComponent", function () {
      return AccountsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AccountsComponent =
    /*#__PURE__*/
    function () {
      function AccountsComponent() {
        _classCallCheck(this, AccountsComponent);
      }

      _createClass(AccountsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccountsComponent;
    }();

    AccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accounts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accounts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/accounts/accounts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accounts.component.css */
      "./src/app/admin/accounts/accounts.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AccountsComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.component.css":
  /*!*******************************************!*\
    !*** ./src/app/admin/admin.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _login_services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../login/services/profile.service */
    "./src/app/login/services/profile.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(authenticationService, profileService) {
        var _this = this;

        _classCallCheck(this, AdminComponent);

        this.authenticationService = authenticationService;
        this.profileService = profileService;
        this.currentProfileSubscription = this.authenticationService.currentUser.subscribe(function (profile) {
          _this.currentProfile = profile;
        });
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadAllUsers",
        value: function loadAllUsers() {
          var _this2 = this;

          this.profileService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (profile) {
            _this2.profiles = profile;
          });
          console.log(this.profiles);
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _login_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/admin/admin.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _login_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])], AdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/customers/customers.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/admin/customers/customers.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCustomersCustomersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".d-flex {\n  margin-right: 20px;\n}\n\n.btn {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.btn:click,\n.btn:hover,\n.btn:focused,\n.btn:active,\n.btn:visited {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border: rgb(230, 92, 0) !important;\n}\n\n.table-container {\n  margin-right: 30px;\n}\n\ntable {\n  border: 3px solid black;\n}\n\nth {\n  background-color: black;\n  color: white;\n  border-color: white;\n}\n\nth, td {\n  border: 1px solid black;\n  padding: 15px;\n  text-align: left;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ntr:nth-child(even) {\n  background-color: #e6e6e6;\n}\n\ntr:nth-child(odd) {\n  background-color:   white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRDQUE0QztFQUM1Qyx3Q0FBd0M7QUFDMUM7O0FBRUE7Ozs7O0VBS0UsWUFBWTtFQUNaLDRDQUE0QztFQUM1QyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG59XG5cbi5idG46Y2xpY2ssXG4uYnRuOmhvdmVyLFxuLmJ0bjpmb2N1c2VkLFxuLmJ0bjphY3RpdmUsXG4uYnRuOnZpc2l0ZWQge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbnRoLCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogICB3aGl0ZTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/customers/customers.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/customers/customers.component.ts ***!
    \********************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppAdminCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");

    var CustomersComponent =
    /*#__PURE__*/
    function () {
      function CustomersComponent(filter, auth) {
        var _this3 = this;

        _classCallCheck(this, CustomersComponent);

        this.filter = filter;
        this.auth = auth;
        this.filterSubscription = this.auth.currentUser.subscribe(function (profile) {
          _this3.filteredProfile = profile;
        });
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCustomers();
        }
      }, {
        key: "getCustomers",
        value: function getCustomers() {
          var _this4 = this;

          this.filter.customerFilter(this.filteredProfile).subscribe(function (returnedCustomers) {
            _this4.customers = returnedCustomers;
          });
        }
      }]);

      return CustomersComponent;
    }();

    CustomersComponent.ctorParameters = function () {
      return [{
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__["ApifilterService"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customers.component.css */
      "./src/app/admin/customers/customers.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__["ApifilterService"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], CustomersComponent);
    /***/
  },

  /***/
  "./src/app/admin/local-monitor/local-monitor.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/local-monitor/local-monitor.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLocalMonitorLocalMonitorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xvY2FsLW1vbml0b3IvbG9jYWwtbW9uaXRvci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/local-monitor/local-monitor.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/local-monitor/local-monitor.component.ts ***!
    \****************************************************************/

  /*! exports provided: LocalMonitorComponent */

  /***/
  function srcAppAdminLocalMonitorLocalMonitorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalMonitorComponent", function () {
      return LocalMonitorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_oem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/oem.service */
    "./src/app/admin/services/oem.service.ts");

    var LocalMonitorComponent =
    /*#__PURE__*/
    function () {
      function LocalMonitorComponent(api) {
        _classCallCheck(this, LocalMonitorComponent);

        this.api = api;
      }

      _createClass(LocalMonitorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.api.getMon().subscribe(function (returnedMon) {
            _this5.monitor = returnedMon;
          });
        }
      }, {
        key: "pullMon",
        value: function pullMon() {
          var _this6 = this;

          this.api.getMon().subscribe(function (returnedMon) {
            _this6.monitor = returnedMon;
          });
        }
      }]);

      return LocalMonitorComponent;
    }();

    LocalMonitorComponent.ctorParameters = function () {
      return [{
        type: _services_oem_service__WEBPACK_IMPORTED_MODULE_2__["OemService"]
      }];
    };

    LocalMonitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-local-monitor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./local-monitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/local-monitor/local-monitor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./local-monitor.component.css */
      "./src/app/admin/local-monitor/local-monitor.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_oem_service__WEBPACK_IMPORTED_MODULE_2__["OemService"]])], LocalMonitorComponent);
    /***/
  },

  /***/
  "./src/app/admin/oem/oem.component.css":
  /*!*********************************************!*\
    !*** ./src/app/admin/oem/oem.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminOemOemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".d-flex {\n  margin-right: 20px;\n}\n\n.btn {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.btn:click,\n.btn:hover,\n.btn:focused,\n.btn:active,\n.btn:visited {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border: rgb(230, 92, 0) !important;\n}\n\n.table-container {\n  margin-right: 30px;\n}\n\ntable {\n  border: 3px solid black;\n}\n\nth {\n  background-color: black;\n  color: white;\n  border-color: white;\n}\n\nth, td {\n  border: 1px solid black;\n  padding: 15px;\n  text-align: left;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ntr:nth-child(even) {\n  background-color: #e6e6e6;\n}\n\ntr:nth-child(odd) {\n  background-color:   white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vb2VtL29lbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRDQUE0QztFQUM1Qyx3Q0FBd0M7QUFDMUM7O0FBRUE7Ozs7O0VBS0UsWUFBWTtFQUNaLDRDQUE0QztFQUM1QyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vb2VtL29lbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG59XG5cbi5idG46Y2xpY2ssXG4uYnRuOmhvdmVyLFxuLmJ0bjpmb2N1c2VkLFxuLmJ0bjphY3RpdmUsXG4uYnRuOnZpc2l0ZWQge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbnRoLCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogICB3aGl0ZTtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/oem/oem.component.ts":
  /*!********************************************!*\
    !*** ./src/app/admin/oem/oem.component.ts ***!
    \********************************************/

  /*! exports provided: OemComponent */

  /***/
  function srcAppAdminOemOemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OemComponent", function () {
      return OemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_oem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/oem.service */
    "./src/app/admin/services/oem.service.ts");

    var OemComponent =
    /*#__PURE__*/
    function () {
      function OemComponent(api) {
        _classCallCheck(this, OemComponent);

        this.api = api;
      }

      _createClass(OemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "pullOem",
        value: function pullOem() {
          var _this7 = this;

          this.api.getOem().subscribe(function (returnedOem) {
            _this7.oems = returnedOem;
          });
        }
      }]);

      return OemComponent;
    }();

    OemComponent.ctorParameters = function () {
      return [{
        type: _services_oem_service__WEBPACK_IMPORTED_MODULE_2__["OemService"]
      }];
    };

    OemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-oem',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./oem.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/oem/oem.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./oem.component.css */
      "./src/app/admin/oem/oem.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_oem_service__WEBPACK_IMPORTED_MODULE_2__["OemService"]])], OemComponent);
    /***/
  },

  /***/
  "./src/app/admin/register/register.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/admin/register/register.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .col-md-6 {\n  margin: auto;\n  padding-bottom: 1px;\n  padding-top: 5px;\n  background-color: navy;\n  border-radius: 10px;\n  color: white;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);\n  max-width: 650px;\n  top: 100px;\n  bottom: 50%;\n}\n\n.buttons {\n  margin-bottom: 40px;\n} */\n\n.panel {\n  margin: auto;\n  padding-bottom: 1px;\n  padding-top: 5px;\n  background-color: black;\n  border-radius: 10px;\n  color: #d9d9d9;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);\n  max-width: 650px;\n  top: 100px;\n  bottom: 50%;\n}\n\n.row {\n  margin: auto;\n  padding-bottom: 1px;\n  padding-top: 5px;\n  background-color: black;\n  border-radius: 10px;\n  color: #d9d9d9;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);\n  max-width: 650px;\n  top: 100px;\n  bottom: 50%;\n}\n\n.center {\n  height: 90%;\ntext-align:center;\ndisplay:table;\nwidth:100%;\n}\n\n.buttons {\n  margin-bottom: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7O0FBRUg7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx3RUFBd0U7RUFDeEUsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx3RUFBd0U7RUFDeEUsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxXQUFXO0FBQ2IsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixVQUFVO0FBQ1Y7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbC1tZC02IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgbWF4LXdpZHRoOiA2NTBweDtcbiAgdG9wOiAxMDBweDtcbiAgYm90dG9tOiA1MCU7XG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn0gKi9cblxuLnBhbmVsIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNkOWQ5ZDk7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgbWF4LXdpZHRoOiA2NTBweDtcbiAgdG9wOiAxMDBweDtcbiAgYm90dG9tOiA1MCU7XG59XG4ucm93IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNkOWQ5ZDk7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgbWF4LXdpZHRoOiA2NTBweDtcbiAgdG9wOiAxMDBweDtcbiAgYm90dG9tOiA1MCU7XG59XG4uY2VudGVyIHtcbiAgaGVpZ2h0OiA5MCU7XG50ZXh0LWFsaWduOmNlbnRlcjtcbmRpc3BsYXk6dGFibGU7XG53aWR0aDoxMDAlO1xufVxuLmJ1dHRvbnMge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/register/register.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/register/register.component.ts ***!
    \******************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAdminRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _login_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../login/services/alert.service */
    "./src/app/login/services/alert.service.ts");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _login_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../login/services/profile.service */
    "./src/app/login/services/profile.service.ts");
    /* harmony import */


    var _login_helpers_must_match__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../login/helpers/must-match */
    "./src/app/login/helpers/must-match.ts");
    /* harmony import */


    var _login_services_loginpulls_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../login/services/loginpulls.service */
    "./src/app/login/services/loginpulls.service.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(formBuilder, router, authenticationService, alertService, profileService, loginpullsService) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.profileService = profileService;
        this.loginpullsService = loginpullsService;
        this.loading = false;
        this.submitted = false;
        this.randNumberOne = Math.random() * 10000;
        this.randNumberTwo = Math.random() * 10000;
        this.randNumber = this.randNumberOne * this.randNumberTwo * 1000; // redirects to dashboard if already logged in
        //   if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/dashboard']);
        //   }
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.loginpullsService.getPartnerList().subscribe(function (profile) {
            _this8.twoprofile = profile;
          });
          this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            companypartner: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            partner: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            partnerRole: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$')]],
            confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$')]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            id: [this.randNumber]
          }, {
            validator: [Object(_login_helpers_must_match__WEBPACK_IMPORTED_MODULE_8__["MustMatch"])('password', 'confirmpassword'), Object(_login_helpers_must_match__WEBPACK_IMPORTED_MODULE_8__["MustMatch"])('email', 'username')]
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.registerForm.invalid) {
            return;
          }

          this.loading = true;
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
          this.profileService.register(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            _this9.alertService.success('Registration successful', true);

            _this9.router.navigate(['/']);
          }, function (error) {
            _this9.alertService.error(error);

            _this9.loading = false;
          });
        }
      }, {
        key: "getcompany",
        value: function getcompany(partner) {
          var _this10 = this;

          this.loginpullsService.getCompanyList(partner).subscribe(function (company) {
            _this10.twocompany = company;
            console.log(_this10.twocompany);
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _login_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _login_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
      }, {
        type: _login_services_loginpulls_service__WEBPACK_IMPORTED_MODULE_9__["LoginpullsService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/admin/register/register.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _login_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _login_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"], _login_services_loginpulls_service__WEBPACK_IMPORTED_MODULE_9__["LoginpullsService"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/admin/services/oem.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/services/oem.service.ts ***!
    \***********************************************/

  /*! exports provided: OemService */

  /***/
  function srcAppAdminServicesOemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OemService", function () {
      return OemService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var OemService =
    /*#__PURE__*/
    function () {
      function OemService(http) {
        _classCallCheck(this, OemService);

        this.http = http;
        this.monApi = '?apikey=ZKA6LZUGglahNSrnisEm2EoSj3qeee5kouo0W7aq4AlHTZpoCN5hLG98TW8uVN0I&pretty=1';
        this.oemPull = 'https://n1sharmonypull.azurewebsites.net/api/OEMPull?code=1d9quTWcruk3APk5NqxpPyN8Qez0flIun778ihBgIfB/QKj1eGDMyQ==';
        this.monPull = 'https://localmonitor.noble1it.com/nagiosxi/api/v1/objects/servicestatus';
      }

      _createClass(OemService, [{
        key: "getOem",
        value: function getOem() {
          return this.http.get(this.oemPull);
        }
      }, {
        key: "getMon",
        value: function getMon() {
          return this.http.get(this.monPull + this.monApi);
        }
      }]);

      return OemService;
    }();

    OemService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    OemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], OemService);
    /***/
  },

  /***/
  "./src/app/admin/support/services/support.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin/support/services/support.service.ts ***!
    \***********************************************************/

  /*! exports provided: SupportService */

  /***/
  function srcAppAdminSupportServicesSupportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportService", function () {
      return SupportService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SupportService =
    /*#__PURE__*/
    function () {
      function SupportService(http) {
        _classCallCheck(this, SupportService);

        this.http = http;
        this.pullSupport = 'https://n1sharmonypull.azurewebsites.net/api/ContactsPull?code=qLBOWarRjj0PHTWEewFsPhR4sYftDLgE9N49p44Kk9kFyv5aqNuxbg==';
      }

      _createClass(SupportService, [{
        key: "getSupport",
        value: function getSupport() {
          return this.http.get(this.pullSupport);
        }
      }]);

      return SupportService;
    }();

    SupportService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SupportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], SupportService);
    /***/
  },

  /***/
  "./src/app/admin/support/support.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/admin/support/support.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminSupportSupportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".d-flex {\n  margin-right: 20px;\n}\n\n.btn {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.btn:click,\n.btn:hover,\n.btn:focused,\n.btn:active,\n.btn:visited {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border: rgb(230, 92, 0) !important;\n}\n\n.table-container {\n  margin-right: 30px;\n}\n\ntable {\n  border: 3px solid black;\n}\n\nth {\n  background-color: black;\n  color: white;\n  border-color: white;\n}\n\nth, td {\n  border: 1px solid black;\n  padding: 15px;\n  text-align: left;\n}\n\ntable {\n  border-collapse: collapse;\n\n}\n\n/* tr:nth-child(even) {\n  background-color: #e65c00;\n}\n\ntr:nth-child(odd) {\n  background-color: #8c8c8c;\n} */\n\ntr:nth-child(even) {\n  background-color: #e6e6e6;\n}\n\ntr:nth-child(odd) {\n  background-color:   white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLHdDQUF3QztBQUMxQzs7QUFFQTs7Ozs7RUFLRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7O0FBRTNCOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG59XG5cbi5idG46Y2xpY2ssXG4uYnRuOmhvdmVyLFxuLmJ0bjpmb2N1c2VkLFxuLmJ0bjphY3RpdmUsXG4uYnRuOnZpc2l0ZWQge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbnRoLCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cbn1cblxuLyogdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NWMwMDtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM4YzhjO1xufSAqL1xuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG50cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICAgd2hpdGU7XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/support/support.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/support/support.component.ts ***!
    \****************************************************/

  /*! exports provided: SupportComponent */

  /***/
  function srcAppAdminSupportSupportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportComponent", function () {
      return SupportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_support_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/support.service */
    "./src/app/admin/support/services/support.service.ts");

    var SupportComponent =
    /*#__PURE__*/
    function () {
      function SupportComponent(api) {
        _classCallCheck(this, SupportComponent);

        this.api = api;
      }

      _createClass(SupportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pullSupport();
        }
      }, {
        key: "pullSupport",
        value: function pullSupport() {
          var _this11 = this;

          this.api.getSupport().subscribe(function (returnedSupport) {
            _this11.supports = returnedSupport;
          });
        }
      }]);

      return SupportComponent;
    }();

    SupportComponent.ctorParameters = function () {
      return [{
        type: _services_support_service__WEBPACK_IMPORTED_MODULE_2__["SupportService"]
      }];
    };

    SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-support',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./support.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/support/support.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./support.component.css */
      "./src/app/admin/support/support.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_support_service__WEBPACK_IMPORTED_MODULE_2__["SupportService"]])], SupportComponent);
    /***/
  },

  /***/
  "./src/app/admin/users/users.component.css":
  /*!*************************************************!*\
    !*** ./src/app/admin/users/users.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminUsersUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);\n  margin-bottom: 30px;\n  font-size: 22px;\n}\n\n.card-header {\n  background-color: black;\n  color: white;\n}\n\ninput {\n  width: 45%;\n  height: 35px;\n  outline: none !important;\n  box-shadow:none;\n  border-style: solid;\n  padding: auto;\n  background: transparent;\n  border: 0;\n  border-bottom: solid 2px #4d4d4d;\n  font-size: 18px;\n}\n\n.checkbox {\n  width: auto !important;\n  height: auto !important;\n}\n\nbutton {\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdFQUF3RTtFQUN4RSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1Qyx3Q0FBd0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzpub25lO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwYWRkaW5nOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzRkNGQ0ZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2hlY2tib3gge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/users/users.component.ts":
  /*!************************************************!*\
    !*** ./src/app/admin/users/users.component.ts ***!
    \************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppAdminUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _login_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../login/services/profile.service */
    "./src/app/login/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../login/services/alert.service */
    "./src/app/login/services/alert.service.ts");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(formBuilder, authenticationService, router, profileService, alertService) {
        _classCallCheck(this, UsersComponent);

        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.router = router;
        this.profileService = profileService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userForm = this.formBuilder.group({
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            partner: [this.authenticationService.currentUserValue.partner, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            partnerRole: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this12 = this;

          this.submitted = true; // let subalert = false;
          // let fname = false;
          // let lname = false;
          // let phone = false;
          // let email = false;
          // let npass = false;
          // let cpass = false;

          if (this.f.invalid) {
            return;
          }

          if (this.f.userType.value === 'New') {
            this.profileService.register(this.userForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (data) {
              _this12.alertService.success('Registration Successful', true);
            }, function (error) {
              _this12.alertService.error(error);
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.userForm.controls;
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _login_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
      }, {
        type: _login_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
      }];
    };

    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.css */
      "./src/app/admin/users/users.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _login_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _login_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])], UsersComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _manage_assets_tickets_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./manage-assets/tickets/ticket-detail/ticket-detail.component */
    "./src/app/manage-assets/tickets/ticket-detail/ticket-detail.component.ts");
    /* harmony import */


    var _companies_companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./companies/companies.component */
    "./src/app/companies/companies.component.ts");
    /* harmony import */


    var _locations_location_details_location_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./locations/location-details/location-details.component */
    "./src/app/locations/location-details/location-details.component.ts");
    /* harmony import */


    var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/register/register.component */
    "./src/app/admin/register/register.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin/users/users.component */
    "./src/app/admin/users/users.component.ts");
    /* harmony import */


    var _manage_assets_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./manage-assets/contracts/contracts.component */
    "./src/app/manage-assets/contracts/contracts.component.ts");
    /* harmony import */


    var _admin_support_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin/support/support.component */
    "./src/app/admin/support/support.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login/login.component */
    "./src/app/login/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _suppdash_suppdash_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./suppdash/suppdash.component */
    "./src/app/suppdash/suppdash.component.ts");
    /* harmony import */


    var _north_north_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./north/north.component */
    "./src/app/north/north.component.ts");
    /* harmony import */


    var _reliant_dash_reliant_dash_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./reliant-dash/reliant-dash.component */
    "./src/app/reliant-dash/reliant-dash.component.ts");
    /* harmony import */


    var _relus_dash_relus_dash_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./relus-dash/relus-dash.component */
    "./src/app/relus-dash/relus-dash.component.ts");
    /* harmony import */


    var _generic_dash_generic_dash_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./generic-dash/generic-dash.component */
    "./src/app/generic-dash/generic-dash.component.ts");
    /* harmony import */


    var _login_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./login/forgotpassword/forgotpassword.component */
    "./src/app/login/forgotpassword/forgotpassword.component.ts");
    /* harmony import */


    var _manage_assets_manage_assets_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./manage-assets/manage-assets.component */
    "./src/app/manage-assets/manage-assets.component.ts");
    /* harmony import */


    var _manage_assets_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./manage-assets/tickets/tickets.component */
    "./src/app/manage-assets/tickets/tickets.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/settings/settings.component.ts");
    /* harmony import */


    var _locations_locations_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./locations/locations.component */
    "./src/app/locations/locations.component.ts");
    /* harmony import */


    var _login_reset_reset_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./login/reset/reset.component */
    "./src/app/login/reset/reset.component.ts");
    /* harmony import */


    var _login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./login/guards/auth.guard */
    "./src/app/login/guards/auth.guard.ts");
    /* harmony import */


    var _admin_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./admin/accounts/accounts.component */
    "./src/app/admin/accounts/accounts.component.ts");
    /* harmony import */


    var _manage_assets_lists_lists_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./manage-assets/lists/lists.component */
    "./src/app/manage-assets/lists/lists.component.ts");
    /* harmony import */


    var _admin_oem_oem_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./admin/oem/oem.component */
    "./src/app/admin/oem/oem.component.ts");
    /* harmony import */


    var _budget_budget_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./budget/budget.component */
    "./src/app/budget/budget.component.ts");
    /* harmony import */


    var _admin_customers_customers_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./admin/customers/customers.component */
    "./src/app/admin/customers/customers.component.ts");
    /* harmony import */


    var _manage_assets_contracts_contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./manage-assets/contracts/contract-detail/contract-detail.component */
    "./src/app/manage-assets/contracts/contract-detail/contract-detail.component.ts");
    /* harmony import */


    var _manage_assets_asset_detail_asset_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./manage-assets/asset-detail/asset-detail.component */
    "./src/app/manage-assets/asset-detail/asset-detail.component.ts");
    /* harmony import */


    var _admin_local_monitor_local_monitor_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./admin/local-monitor/local-monitor.component */
    "./src/app/admin/local-monitor/local-monitor.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: '',
      component: _suppdash_suppdash_component__WEBPACK_IMPORTED_MODULE_13__["SuppdashComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: '',
      component: _north_north_component__WEBPACK_IMPORTED_MODULE_14__["NorthComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: '',
      component: _reliant_dash_reliant_dash_component__WEBPACK_IMPORTED_MODULE_15__["ReliantDashComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: '',
      component: _relus_dash_relus_dash_component__WEBPACK_IMPORTED_MODULE_16__["RelusDashComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: '',
      component: _generic_dash_generic_dash_component__WEBPACK_IMPORTED_MODULE_17__["GenericDashComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: '',
      component: _suppdash_suppdash_component__WEBPACK_IMPORTED_MODULE_13__["SuppdashComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'settings',
      component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_22__["SettingsComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
    }, {
      path: 'reset-password',
      component: _login_reset_reset_component__WEBPACK_IMPORTED_MODULE_24__["ResetComponent"]
    }, {
      path: 'forgot',
      component: _login_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_18__["ForgotpasswordComponent"]
    }, {
      path: 'forgotpassword',
      component: _login_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_18__["ForgotpasswordComponent"]
    }, {
      path: 'reset',
      component: _login_reset_reset_component__WEBPACK_IMPORTED_MODULE_24__["ResetComponent"]
    }, {
      path: 'login/reset-password',
      component: _login_reset_reset_component__WEBPACK_IMPORTED_MODULE_24__["ResetComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'northdash',
      component: _north_north_component__WEBPACK_IMPORTED_MODULE_14__["NorthComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'reliantdash',
      component: _reliant_dash_reliant_dash_component__WEBPACK_IMPORTED_MODULE_15__["ReliantDashComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'relusdash',
      component: _relus_dash_relus_dash_component__WEBPACK_IMPORTED_MODULE_16__["RelusDashComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'genericdash',
      component: _generic_dash_generic_dash_component__WEBPACK_IMPORTED_MODULE_17__["GenericDashComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'suppdash',
      component: _suppdash_suppdash_component__WEBPACK_IMPORTED_MODULE_13__["SuppdashComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'manageassets/assets',
      component: _manage_assets_manage_assets_component__WEBPACK_IMPORTED_MODULE_19__["ManageAssetsComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'manageassets/tickets',
      component: _manage_assets_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_20__["TicketsComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'manageassets/lists',
      component: _manage_assets_lists_lists_component__WEBPACK_IMPORTED_MODULE_27__["ListsComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'manageassets/contracts',
      component: _manage_assets_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_7__["ContractsComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'contractdetail/:refNumber',
      component: _manage_assets_contracts_contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_31__["ContractDetailComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'assetdetail/:identifier',
      component: _manage_assets_asset_detail_asset_detail_component__WEBPACK_IMPORTED_MODULE_32__["AssetDetailComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'locationdetail/:description',
      component: _locations_location_details_location_details_component__WEBPACK_IMPORTED_MODULE_3__["LocationDetailsComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'ticketdetail/:refNumber',
      component: _manage_assets_tickets_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_1__["TicketDetailComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'companies',
      component: _companies_companies_component__WEBPACK_IMPORTED_MODULE_2__["CompaniesComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'budgets',
      component: _budget_budget_component__WEBPACK_IMPORTED_MODULE_29__["BudgetComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'locations',
      component: _locations_locations_component__WEBPACK_IMPORTED_MODULE_23__["LocationsComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'admin/accounts',
      component: _admin_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_26__["AccountsComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'admin/admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'admin/support',
      component: _admin_support_support_component__WEBPACK_IMPORTED_MODULE_8__["SupportComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'admin/register',
      component: _admin_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'admin/oem',
      component: _admin_oem_oem_component__WEBPACK_IMPORTED_MODULE_28__["OemComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'admin/customers',
      component: _admin_customers_customers_component__WEBPACK_IMPORTED_MODULE_30__["CustomersComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'admin/users',
      component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }, {
      path: 'admin/localMonitor',
      component: _admin_local_monitor_local_monitor_component__WEBPACK_IMPORTED_MODULE_33__["LocalMonitorComponent"],
      canActivate: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n}\n\n.content {\n  margin-top: 40px;\n  padding-top: 30px;\n  /* align-items: flex; */\n}\n\napp-alert {\n  margin: auto;\n  max-width: 500px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgLyogYWxpZ24taXRlbXM6IGZsZXg7ICovXG59XG5cbmFwcC1hbGVydCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _login_models_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login/models/profile */
    "./src/app/login/models/profile.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, authenticationService) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'Support Portal';
        this.loginusername = _login_models_profile__WEBPACK_IMPORTED_MODULE_1__["Profile"];
        this.authenticationService.logout(); //     this.router.navigate(['/login']);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _login_helpers_jwt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/helpers/jwt.service */
    "./src/app/login/helpers/jwt.service.ts");
    /* harmony import */


    var _login_helpers_error_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/helpers/error-interceptor.service */
    "./src/app/login/helpers/error-interceptor.service.ts");
    /* harmony import */


    var _login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/guards/auth.guard */
    "./src/app/login/guards/auth.guard.ts");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _login_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/services/alert.service */
    "./src/app/login/services/alert.service.ts");
    /* harmony import */


    var _login_services_loginpulls_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/services/loginpulls.service */
    "./src/app/login/services/loginpulls.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login/login/login.component */
    "./src/app/login/login/login.component.ts");
    /* harmony import */


    var _login_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./login/alert/alert.component */
    "./src/app/login/alert/alert.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _suppdash_suppdash_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./suppdash/suppdash.component */
    "./src/app/suppdash/suppdash.component.ts");
    /* harmony import */


    var _north_north_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./north/north.component */
    "./src/app/north/north.component.ts");
    /* harmony import */


    var _reliant_dash_reliant_dash_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./reliant-dash/reliant-dash.component */
    "./src/app/reliant-dash/reliant-dash.component.ts");
    /* harmony import */


    var _relus_dash_relus_dash_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./relus-dash/relus-dash.component */
    "./src/app/relus-dash/relus-dash.component.ts");
    /* harmony import */


    var _generic_dash_generic_dash_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./generic-dash/generic-dash.component */
    "./src/app/generic-dash/generic-dash.component.ts");
    /* harmony import */


    var _login_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./login/header/header.component */
    "./src/app/login/header/header.component.ts");
    /* harmony import */


    var _manage_assets_manage_assets_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./manage-assets/manage-assets.component */
    "./src/app/manage-assets/manage-assets.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _admin_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin/accounts/accounts.component */
    "./src/app/admin/accounts/accounts.component.ts");
    /* harmony import */


    var _manage_assets_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./manage-assets/tickets/tickets.component */
    "./src/app/manage-assets/tickets/tickets.component.ts");
    /* harmony import */


    var _manage_assets_lists_lists_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./manage-assets/lists/lists.component */
    "./src/app/manage-assets/lists/lists.component.ts");
    /* harmony import */


    var _budget_budget_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./budget/budget.component */
    "./src/app/budget/budget.component.ts");
    /* harmony import */


    var _admin_support_support_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./admin/support/support.component */
    "./src/app/admin/support/support.component.ts");
    /* harmony import */


    var _admin_oem_oem_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./admin/oem/oem.component */
    "./src/app/admin/oem/oem.component.ts");
    /* harmony import */


    var _manage_assets_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./manage-assets/contracts/contracts.component */
    "./src/app/manage-assets/contracts/contracts.component.ts");
    /* harmony import */


    var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./admin/users/users.component */
    "./src/app/admin/users/users.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/settings/settings.component.ts");
    /* harmony import */


    var _admin_customers_customers_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./admin/customers/customers.component */
    "./src/app/admin/customers/customers.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _reset_user_reset_user_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./reset-user/reset-user.component */
    "./src/app/reset-user/reset-user.component.ts");
    /* harmony import */


    var _manage_assets_contracts_contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./manage-assets/contracts/contract-detail/contract-detail.component */
    "./src/app/manage-assets/contracts/contract-detail/contract-detail.component.ts");
    /* harmony import */


    var _manage_assets_asset_detail_asset_detail_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./manage-assets/asset-detail/asset-detail.component */
    "./src/app/manage-assets/asset-detail/asset-detail.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _locations_locations_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./locations/locations.component */
    "./src/app/locations/locations.component.ts");
    /* harmony import */


    var _locations_location_details_location_details_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./locations/location-details/location-details.component */
    "./src/app/locations/location-details/location-details.component.ts");
    /* harmony import */


    var _login_reset_reset_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./login/reset/reset.component */
    "./src/app/login/reset/reset.component.ts");
    /* harmony import */


    var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./admin/register/register.component */
    "./src/app/admin/register/register.component.ts");
    /* harmony import */


    var _login_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./login/forgotpassword/forgotpassword.component */
    "./src/app/login/forgotpassword/forgotpassword.component.ts");
    /* harmony import */


    var _manage_assets_tickets_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./manage-assets/tickets/ticket-detail/ticket-detail.component */
    "./src/app/manage-assets/tickets/ticket-detail/ticket-detail.component.ts");
    /* harmony import */


    var _companies_companies_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./companies/companies.component */
    "./src/app/companies/companies.component.ts");
    /* harmony import */


    var _manage_assets_contracts_contract_detail_assetlocfilter_asset_loc_filter_pipe__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./manage-assets/contracts/contract-detail/assetlocfilter/asset-loc-filter.pipe */
    "./src/app/manage-assets/contracts/contract-detail/assetlocfilter/asset-loc-filter.pipe.ts");
    /* harmony import */


    var _admin_local_monitor_local_monitor_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./admin/local-monitor/local-monitor.component */
    "./src/app/admin/local-monitor/local-monitor.component.ts"); // Material Import


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _login_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _login_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__["AlertComponent"], _admin_register_register_component__WEBPACK_IMPORTED_MODULE_48__["RegisterComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], _suppdash_suppdash_component__WEBPACK_IMPORTED_MODULE_16__["SuppdashComponent"], _north_north_component__WEBPACK_IMPORTED_MODULE_17__["NorthComponent"], _reliant_dash_reliant_dash_component__WEBPACK_IMPORTED_MODULE_18__["ReliantDashComponent"], _relus_dash_relus_dash_component__WEBPACK_IMPORTED_MODULE_19__["RelusDashComponent"], _generic_dash_generic_dash_component__WEBPACK_IMPORTED_MODULE_20__["GenericDashComponent"], _login_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"], _manage_assets_manage_assets_component__WEBPACK_IMPORTED_MODULE_22__["ManageAssetsComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["SidebarComponent"], _admin_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_24__["AccountsComponent"], _manage_assets_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_25__["TicketsComponent"], _manage_assets_lists_lists_component__WEBPACK_IMPORTED_MODULE_26__["ListsComponent"], _budget_budget_component__WEBPACK_IMPORTED_MODULE_27__["BudgetComponent"], _admin_support_support_component__WEBPACK_IMPORTED_MODULE_28__["SupportComponent"], _admin_oem_oem_component__WEBPACK_IMPORTED_MODULE_29__["OemComponent"], _manage_assets_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_30__["ContractsComponent"], _admin_users_users_component__WEBPACK_IMPORTED_MODULE_31__["UsersComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_32__["ProfileComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_33__["SettingsComponent"], _admin_customers_customers_component__WEBPACK_IMPORTED_MODULE_34__["CustomersComponent"], _login_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_49__["ForgotpasswordComponent"], _reset_user_reset_user_component__WEBPACK_IMPORTED_MODULE_41__["ResetUserComponent"], _manage_assets_contracts_contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_42__["ContractDetailComponent"], _manage_assets_asset_detail_asset_detail_component__WEBPACK_IMPORTED_MODULE_43__["AssetDetailComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_44__["AdminComponent"], _locations_locations_component__WEBPACK_IMPORTED_MODULE_45__["LocationsComponent"], _locations_location_details_location_details_component__WEBPACK_IMPORTED_MODULE_46__["LocationDetailsComponent"], _login_reset_reset_component__WEBPACK_IMPORTED_MODULE_47__["ResetComponent"], _admin_register_register_component__WEBPACK_IMPORTED_MODULE_48__["RegisterComponent"], _manage_assets_tickets_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_50__["TicketDetailComponent"], _companies_companies_component__WEBPACK_IMPORTED_MODULE_51__["CompaniesComponent"], _manage_assets_contracts_contract_detail_assetlocfilter_asset_loc_filter_pipe__WEBPACK_IMPORTED_MODULE_52__["AssetLocFilterPipe"], _admin_local_monitor_local_monitor_component__WEBPACK_IMPORTED_MODULE_53__["LocalMonitorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"], // Material Imports
      _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__["MatSliderModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatFormFieldModule"]],
      providers: [_login_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _login_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"], _login_services_loginpulls_service__WEBPACK_IMPORTED_MODULE_11__["LoginpullsService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _login_helpers_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _login_helpers_error_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/budget/budget.component.css":
  /*!*********************************************!*\
    !*** ./src/app/budget/budget.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBudgetBudgetComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".table-container {\n  margin-right: 30px;\n}\n\ntable {\n  border: 3px solid black;\n}\n\nth {\n  background-color: black;\n  color: white;\n  border-color: white;\n}\n\nth, td {\n  border: 1px solid black;\n  padding: 15px;\n  text-align: left;\n}\n\ntable {\n  border-collapse: collapse;\n\n}\n\ntr:nth-child(even) {\n  background-color: #e65c00;\n}\n\ntr:nth-child(odd) {\n  background-color: #8c8c8c;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVkZ2V0L2J1ZGdldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9idWRnZXQvYnVkZ2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbnRoLCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NWMwMDtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM4YzhjO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/budget/budget.component.ts":
  /*!********************************************!*\
    !*** ./src/app/budget/budget.component.ts ***!
    \********************************************/

  /*! exports provided: BudgetComponent */

  /***/
  function srcAppBudgetBudgetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BudgetComponent", function () {
      return BudgetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BudgetComponent =
    /*#__PURE__*/
    function () {
      function BudgetComponent() {
        _classCallCheck(this, BudgetComponent);
      }

      _createClass(BudgetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BudgetComponent;
    }();

    BudgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-budget',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./budget.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/budget/budget.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./budget.component.css */
      "./src/app/budget/budget.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BudgetComponent);
    /***/
  },

  /***/
  "./src/app/companies/companies.component.css":
  /*!***************************************************!*\
    !*** ./src/app/companies/companies.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompaniesCompaniesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title, .assetRef {\n  width: 250px;\n}\n\n.edit-items-container {\n  margin-right: 20px;\n}\n\n.btn {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.btn:click,\n.btn:hover,\n.btn:focused,\n.btn:active,\n.btn:visited {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.table-container {\n  margin-right: 30px;\n  }\n\ntable {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  }\n\nth {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\nth,td {\n    font-size: medium;\n    text-align: center !important;\n  }\n\nth, td {\n    border: 1px solid black;\n    padding: 15px;\n  }\n\ntable {\n    border-collapse: collapse;\n  }\n\ntr:nth-child(even) {\n    background-color: #e6e6e6;\n  }\n\ntr:nth-child(odd) {\n    background-color:   white;\n  }\n\n.mattable-container {\n    width: 94%;\n    margin-bottom: 50px;\n  }\n\n.mat-focused .mat-form-field-label {\n    color: rgb(230, 92, 0) !important;\n  }\n\n.mat-form-field-ripple {\n    background-color: rgb(230, 92, 0) !important;\n  }\n\n.search-div {\n    margin: 10px;\n  }\n\n.search-form-field {\n    width: 94%;\n    margin-left: 10px;\n    padding:  5px 10px;\n    background-color: #e6e6e6;\n    border-radius: 5px;\n  }\n\n/* .search-form-field div.mat-form-field-underline {\n    display: none;\n  } */\n\n.search-form-field button {\n    height: 32px;\n    width: 32px;\n    border-radius: 8px;\n  }\n\n/* mat-table {\n    border-radius: 8px;\n  }\n\n  mat-table {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  } */\n\n/* mat-header-cel {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\n  mat-header-cell, mat-cell {\n    border: 1px solid black;\n    padding: 15px;\n    text-align: left;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFuaWVzL2NvbXBhbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRDQUE0QztFQUM1Qyx3Q0FBd0M7QUFDMUM7O0FBRUE7Ozs7O0VBS0UsWUFBWTtFQUNaLDRDQUE0QztFQUM1Qyx3Q0FBd0M7QUFDMUM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEI7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQiw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtFQUNmOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7QUFFQTtJQUNFLDRDQUE0QztFQUM5Qzs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0FBRUE7O0tBRUc7O0FBRUg7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7QUFDQTs7Ozs7Ozs7O0tBU0c7O0FBRUg7Ozs7Ozs7Ozs7S0FVRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSwgLmFzc2V0UmVmIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uZWRpdC1pdGVtcy1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xufVxuXG4uYnRuOmNsaWNrLFxuLmJ0bjpob3Zlcixcbi5idG46Zm9jdXNlZCxcbi5idG46YWN0aXZlLFxuLmJ0bjp2aXNpdGVkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cbi50YWJsZS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICB9XG5cbiAgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgdGgsdGQge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIH1cblxuICB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICB3aGl0ZTtcbiAgfVxuXG4gIC5tYXR0YWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlYXJjaC1kaXYge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiAgNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAvKiAuc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCBidXR0b24ge1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgLyogbWF0LXRhYmxlIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuICBtYXQtdGFibGUge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgfSAqL1xuXG4gIC8qIG1hdC1oZWFkZXItY2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIG1hdC1oZWFkZXItY2VsbCwgbWF0LWNlbGwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfSAqL1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/companies/companies.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/companies/companies.component.ts ***!
    \**************************************************/

  /*! exports provided: CompaniesComponent */

  /***/
  function srcAppCompaniesCompaniesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function () {
      return CompaniesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var CompaniesComponent =
    /*#__PURE__*/
    function () {
      function CompaniesComponent(filter, authserv) {
        var _this13 = this;

        _classCallCheck(this, CompaniesComponent);

        this.filter = filter;
        this.authserv = authserv;
        this.displayedColumns = ['Company Name', 'Account Manager', 'Street Address', 'City', 'State', 'Zip Code', 'Country', 'Primary Contact'];
        this.authserv.currentUser.subscribe(function (profile) {
          return _this13.currentProfile = profile;
        });
      }

      _createClass(CompaniesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCompanies();
        }
      }, {
        key: "getCompanies",
        value: function getCompanies() {
          var _this14 = this;

          this.filter.customerFilter(this.currentProfile).subscribe(function (returnedLocations) {
            _this14.companiesLength = returnedLocations;
            _this14.companyDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](returnedLocations);
            _this14.companyDataSource.sort = _this14.sort;
            _this14.companyDataSource.paginator = _this14.paginator;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.companyDataSource.filter = this.searchKey.trim().toLowerCase();

          if (this.companyDataSource.paginator) {
            this.companyDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "searchClear",
        value: function searchClear() {
          this.searchKey = '';
          this.applyFilter();
        }
      }]);

      return CompaniesComponent;
    }();

    CompaniesComponent.ctorParameters = function () {
      return [{
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__["ApifilterService"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])], CompaniesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])], CompaniesComponent.prototype, "sort", void 0);
    CompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-companies',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./companies.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./companies.component.css */
      "./src/app/companies/companies.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__["ApifilterService"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], CompaniesComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.col-md {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n\n.wrapper {\n  margin: 0 !important;\n  padding-top: 20px;\n}\n\n.container-fluid {\n  background-color: #d9d9d9;\n  margin: 0;\n  padding: 0;\n  margin-top: 10px;\n}\n\n.total-container {\n  background-color: white;\n  border-radius: 8px;\n  margin: 15px;\n  font-size: 32px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15), 0 0 20px 0 rgba(0, 0, 0, 0.12);\n  color: black;\n}\n\na {\n  text-decoration: none;\n}\n\na .contract-length, .contract-label{\n  color: black;\n  text-decoration: none;\n }\n\n.contract-content {\n   overflow: hidden;\n   color: black;\n }\n\n.contracts-container {\n   padding-right: 0;\n   padding-bottom: 0;\n   overflow: hidden;\n }\n\n.contract-logo{\n   opacity: .2;\n   position: relative;\n   left: 20px;\n   top: 15px;\n }\n\na .asset-length, .asset-label{\n   color: black;\n   text-decoration: none;\n  }\n\n.asset-content {\n    overflow: hidden;\n    color: black;\n  }\n\n.assets-container {\n    padding-right: 0;\n    padding-bottom: 0;\n    overflow: hidden;\n  }\n\n.asset-logo{\n    opacity: .2;\n    position: relative;\n    left: 20px;\n    top: 15px;\n  }\n\na .ticket-length, .ticket-label{\n   color: black;\n   text-decoration: none;\n  }\n\n.ticket-content {\n    overflow: hidden;\n    color: black;\n  }\n\n.tickets-container {\n    padding-right: 0;\n    padding-bottom: 0;\n    overflow: hidden;\n  }\n\n.ticket-logo{\n    opacity: .2;\n    position: relative;\n    left: 20px;\n    top: 15px;\n  }\n\na .companies-length, .companies-label{\n   color: black;\n   text-decoration: none;\n  }\n\n.companies-content {\n    overflow: hidden;\n    color: black;\n  }\n\n.companies-container {\n    padding-right: 0;\n    padding-bottom: 0;\n    overflow: hidden;\n  }\n\n.users-container {\n  padding-right: 0;\n}\n\n.users-content {\n  overflow: hidden;\n  Padding-left: 15;\n  color: black;\n}\n\n.users-content img{\n  opacity: .2;\n  position: relative;\n  top: 20px;\n  left: 50px;\n}\n\n.locations-container {\n  Padding-right: 0;\n}\n\n.locations-content {\n  overflow: hidden;\n  color: black;\n}\n\n.locations-content img{\n  opacity: .2;\n  position: relative;\n  top: 20px;\n  left: 60px;\n}\n\n.contracts-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.badge {\n  width: 15px;\n  height: 15px;\n  color: white;\n}\n\n.badge-table {\n  width: 30px !important;\n  padding-bottom: 3px;\n}\n\np {\n  display: none;\n}\n\n.badge-now {\n  background-color: red;\n  text-align: center;\n}\n\n.badge-15 {\n  background-color: purple;\n}\n\n.badge-30 {\n  background-color: orange;\n}\n\n.badge-60 {\n  background-color: teal;\n}\n\n.badge-90 {\n  background-color: blue;\n}\n\n.badge-plus {\n  background-color: green;\n}\n\n.assets-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.tickets-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.view-wrapper {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHlFQUF5RTtFQUN6RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0NBQ3RCOztBQUVBO0dBQ0UsZ0JBQWdCO0dBQ2hCLFlBQVk7Q0FDZDs7QUFFQTtHQUNFLGdCQUFnQjtHQUNoQixpQkFBaUI7R0FDakIsZ0JBQWdCO0NBQ2xCOztBQUVBO0dBQ0UsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsU0FBUztDQUNYOztBQUVBO0dBQ0UsWUFBWTtHQUNaLHFCQUFxQjtFQUN0Qjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7QUFFRDtHQUNFLFlBQVk7R0FDWixxQkFBcUI7RUFDdEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0FBRUE7R0FDQyxZQUFZO0dBQ1oscUJBQXFCO0VBQ3RCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbC1tZCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udG90YWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBmb250LXNpemU6IDMycHg7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYSAuY29udHJhY3QtbGVuZ3RoLCAuY29udHJhY3QtbGFiZWx7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuIH1cblxuIC5jb250cmFjdC1jb250ZW50IHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICBjb2xvcjogYmxhY2s7XG4gfVxuXG4gLmNvbnRyYWN0cy1jb250YWluZXIge1xuICAgcGFkZGluZy1yaWdodDogMDtcbiAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiB9XG5cbiAuY29udHJhY3QtbG9nb3tcbiAgIG9wYWNpdHk6IC4yO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgbGVmdDogMjBweDtcbiAgIHRvcDogMTVweDtcbiB9XG5cbiBhIC5hc3NldC1sZW5ndGgsIC5hc3NldC1sYWJlbHtcbiAgIGNvbG9yOiBibGFjaztcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5hc3NldC1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5hc3NldHMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuYXNzZXQtbG9nb3tcbiAgICBvcGFjaXR5OiAuMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMjBweDtcbiAgICB0b3A6IDE1cHg7XG4gIH1cblxuIGEgLnRpY2tldC1sZW5ndGgsIC50aWNrZXQtbGFiZWx7XG4gICBjb2xvcjogYmxhY2s7XG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAudGlja2V0LWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLnRpY2tldHMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAudGlja2V0LWxvZ297XG4gICAgb3BhY2l0eTogLjI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgdG9wOiAxNXB4O1xuICB9XG5cbiAgYSAuY29tcGFuaWVzLWxlbmd0aCwgLmNvbXBhbmllcy1sYWJlbHtcbiAgIGNvbG9yOiBibGFjaztcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5jb21wYW5pZXMtY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuY29tcGFuaWVzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi51c2Vycy1jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udXNlcnMtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFBhZGRpbmctbGVmdDogMTU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnVzZXJzLWNvbnRlbnQgaW1ne1xuICBvcGFjaXR5OiAuMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbi5sb2NhdGlvbnMtY29udGFpbmVyIHtcbiAgUGFkZGluZy1yaWdodDogMDtcbn1cblxuLmxvY2F0aW9ucy1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubG9jYXRpb25zLWNvbnRlbnQgaW1ne1xuICBvcGFjaXR5OiAuMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDYwcHg7XG59XG5cblxuLmNvbnRyYWN0cy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmJhZGdlIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFkZ2UtdGFibGUge1xuICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG5wIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJhZGdlLW5vdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFkZ2UtMTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG59XG5cbi5iYWRnZS0zMCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmJhZGdlLTYwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbn1cblxuLmJhZGdlLTkwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmJhZGdlLXBsdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmFzc2V0cy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnRpY2tldHMtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi52aWV3LXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../login/services/profile.service */
    "./src/app/login/services/profile.service.ts");
    /* harmony import */


    var _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../manage-assets/services/api-call.service */
    "./src/app/manage-assets/services/api-call.service.ts");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_7__);

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(authenticationService, profileService, api, filter) {
        var _this15 = this;

        _classCallCheck(this, DashboardComponent);

        this.authenticationService = authenticationService;
        this.profileService = profileService;
        this.api = api;
        this.filter = filter;
        this.contractsData = [];
        this.assetsData = [];
        this.currentProfileSubscription = this.authenticationService.currentUser.subscribe(function (profile) {
          _this15.currentProfile = profile;
        });
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPartners();
          this.contractsChart();
          this.assetsChart();
          this.displayData();
          this.contractsCount();
          this.assetsCount();
          this.ticketsCount();
          this.companiesCount();
        } // ngOnDestroy() {
        //   this.currentProfileSubscription.unsubscribe();
        // }

      }, {
        key: "getPartners",
        value: function getPartners() {
          var _this16 = this;

          this.filter.getPartners().subscribe(function (returnedPartners) {
            return _this16.partnerArr = returnedPartners;
          });
        }
      }, {
        key: "filterPartner",
        value: function filterPartner(partner) {
          return this.partnerArr.find(function (company) {
            return company.CompanyName === partner;
          });
        }
      }, {
        key: "contractsCount",
        value: function contractsCount() {
          var _this17 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partConFilter(this.currentProfile).subscribe(function (returnedConLength) {
              return _this17.contractLength = returnedConLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
            this.filter.custConFilter(this.currentProfile).subscribe(function (returnedConLength) {
              return _this17.contractLength = returnedConLength;
            });
          }
        }
      }, {
        key: "assetsCount",
        value: function assetsCount() {
          var _this18 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partAssetsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this18.assetLength = returnedAssetLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
            this.filter.custAssetsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this18.assetLength = returnedAssetLength;
            });
          }
        }
      }, {
        key: "ticketsCount",
        value: function ticketsCount() {
          var _this19 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partTicketsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this19.ticketLength = returnedAssetLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {// this.filter.custAssetsFilter(this.currentProfile)
            // .subscribe(
            //   (returnedAssetLength: Assets[]) => this.assetLength = returnedAssetLength
            // );
          }
        }
      }, {
        key: "companiesCount",
        value: function companiesCount() {
          var _this20 = this;

          this.filter.customerFilter(this.currentProfile).subscribe(function (returnedCompanies) {
            _this20.companyLength = returnedCompanies;
          });
        }
      }, {
        key: "ticketsChart",
        value: function ticketsChart() {
          var _this21 = this;

          this.api.getTickets().subscribe(function (returnedTickets) {
            _this21.tickets = returnedTickets;
          });
        }
      }, {
        key: "displayData",
        value: function displayData() {
          var array = this.filter.partConFilter(this.currentProfile).subscribe(function (res) {
            // const price = res.map(res => res.AnnualValue);
            var length = Object.keys(res).map(function (key) {
              return [String(key), res[key]];
            });
            console.log(length); // console.log(price);
          });
        }
      }, {
        key: "getAssets",
        value: function getAssets() {
          var _this22 = this;

          this.api.getAssets().subscribe(function (returnedAssets) {
            _this22.assets = returnedAssets;
          });
        }
      }, {
        key: "contractsChart",
        value: function contractsChart() {
          var status = [];
          this.filter.partConFilter(this.currentProfile).subscribe(function (res) {
            // status.push(res.status);
            var length = Object.keys(res).map(function (key) {
              return [String(key), res[key]];
            });
            console.log(res); // console.log(res.status);
            // console.log(length);
          });
          this.contractsData = new chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]('contracts', {
            type: 'pie',
            data: {
              labels: status,
              datasets: [{
                label: '# of Contracts',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
              }]
            },
            options: {}
          });
        }
      }, {
        key: "assetsChart",
        value: function assetsChart() {
          this.assetsData = new chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]('assets', {
            type: 'pie',
            data: {
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
              }]
            },
            options: {}
          });
        }
      }, {
        key: "deleteProfile",
        value: function deleteProfile(id) {
          var _this23 = this;

          this.profileService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
            _this23.loadAllUsers();
          });
        }
      }, {
        key: "loadAllUsers",
        value: function loadAllUsers() {
          var _this24 = this;

          this.profileService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (profile) {
            _this24.profiles = profile;
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
      }, {
        type: _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__["ApiCallService"]
      }, {
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_6__["ApifilterService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__["ApiCallService"], _services_apifilter_service__WEBPACK_IMPORTED_MODULE_6__["ApifilterService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/generic-dash/generic-dash.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/generic-dash/generic-dash.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGenericDashGenericDashComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.col-md {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n\n.wrapper {\n  margin: 0 !important;\n  padding-top: 20px;\n}\n\n.container-fluid {\n  background-color: #d9d9d9;\n  margin: 0;\n  padding: 0;\n  margin-top: 10px;\n}\n\n.total-container {\n  background-color: white;\n  border-radius: 8px;\n  margin: 15px;\n  font-size: 32px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15), 0 0 20px 0 rgba(0, 0, 0, 0.12);\n  color: black;\n}\n\na {\n  text-decoration: none;\n}\n\na .contract-length, .contract-label{\n color: black;\n text-decoration: none;\n}\n\n.contract-content {\n  overflow: hidden;\n  color: black;\n}\n\n.contracts-container {\n  padding-right: 0;\n  padding-bottom: 0;\n  overflow: hidden;\n}\n\n.contract-logo{\n  opacity: .3;\n  position: relative;\n  left: 8px;\n  top: 10px;\n}\n\n.contract-icon {\n  width: 128px !important;\n  height: 128px !important;\n}\n\na .asset-length, .asset-label{\n  color: black;\n  text-decoration: none;\n }\n\n.asset-content {\n   overflow: hidden;\n   color: black;\n }\n\n.assets-container {\n   padding-right: 0;\n   padding-bottom: 0;\n   overflow: hidden;\n  }\n\n.asset-logo{\n   opacity: .3;\n   position: relative;\n   left: 8px;\n   top: 10px;\n }\n\n.asset-icon {\n  width: 128px !important;\n  height: 128px !important;\n }\n\na .ticket-length, .ticket-label{\n  color: black;\n  text-decoration: none;\n }\n\n.ticket-content {\n   overflow: hidden;\n   color: black;\n }\n\n.tickets-container {\n   padding-right: 0;\n   padding-bottom: 0;\n   overflow: hidden;\n }\n\n.ticket-logo{\n   opacity: .3;\n   position: relative;\n   left: 20px;\n   top: 10px;\n }\n\n.ticket-icon {\n  width: 130px !important;\n  height: 130px !important;\n }\n\na .companies-length, .companies-label{\n  color: black;\n  text-decoration: none;\n }\n\n.companies-content {\n   overflow: hidden;\n   color: black;\n }\n\n.companies-container {\n   padding-right: 0;\n   padding-bottom: 0;\n   overflow: hidden;\n }\n\n.company-logo{\n  opacity: .3;\n  position: relative;\n  left: 8px;\n  top: 10px;\n}\n\n.company-icon {\n  width: 128px !important;\n  height: 128px !important;\n}\n\n.ticket-logo{\n   opacity: .2;\n   position: relative;\n   left: 20px;\n   top: 15px;\n }\n\n.users-container {\n  padding-right: 0;\n}\n\n.users-content {\n  overflow: hidden;\n  Padding-left: 15;\n  color: black;\n}\n\n.users-content img{\n  opacity: .2;\n  position: relative;\n  top: 20px;\n  left: 50px;\n}\n\n.locations-container {\n  Padding-right: 0;\n}\n\n.locations-content {\n  overflow: hidden;\n  color: black;\n}\n\n.locations-content img{\n  opacity: .2;\n  position: relative;\n  top: 20px;\n  left: 60px;\n}\n\n.contracts-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.badge {\n  width: 15px;\n  height: 15px;\n  color: white;\n}\n\n.badge-table {\n  width: 30px !important;\n  padding-bottom: 3px;\n}\n\np {\n  display: none;\n}\n\n.badge-now {\n  background-color: red;\n  text-align: center;\n}\n\n.badge-15 {\n  background-color: purple;\n}\n\n.badge-30 {\n  background-color: orange;\n}\n\n.badge-60 {\n  background-color: teal;\n}\n\n.badge-90 {\n  background-color: blue;\n}\n\n.badge-plus {\n  background-color: green;\n}\n\n.badge-active {\n  background-color: rgba(255, 0, 0, 1);\n  text-align: center;\n}\n\n.badge-terminated {\n  background-color: rgba(54, 162, 235, 1);\n}\n\n.badge-unmapped {\n  background-color: rgba(255, 206, 86, 1);\n}\n\n.badge-yetToStart {\n  background-color: rgba(75, 192, 192, 1);\n}\n\n.assets-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.tickets-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.view-wrapper {\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJpYy1kYXNoL2dlbmVyaWMtZGFzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHlFQUF5RTtFQUN6RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oscUJBQXFCO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7Q0FDdEI7O0FBRUE7R0FDRSxnQkFBZ0I7R0FDaEIsWUFBWTtDQUNkOztBQUVBO0dBQ0UsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixnQkFBZ0I7RUFDakI7O0FBRUQ7R0FDRSxXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLFNBQVM7R0FDVCxTQUFTO0NBQ1g7O0FBRUE7RUFDQyx1QkFBdUI7RUFDdkIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtDQUN0Qjs7QUFFQTtHQUNFLGdCQUFnQjtHQUNoQixZQUFZO0NBQ2Q7O0FBRUE7R0FDRSxnQkFBZ0I7R0FDaEIsaUJBQWlCO0dBQ2pCLGdCQUFnQjtDQUNsQjs7QUFFQTtHQUNFLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLFNBQVM7Q0FDWDs7QUFFQTtFQUNDLHVCQUF1QjtFQUN2Qix3QkFBd0I7Q0FDekI7O0FBRUE7RUFDQyxZQUFZO0VBQ1oscUJBQXFCO0NBQ3RCOztBQUVBO0dBQ0UsZ0JBQWdCO0dBQ2hCLFlBQVk7Q0FDZDs7QUFFQTtHQUNFLGdCQUFnQjtHQUNoQixpQkFBaUI7R0FDakIsZ0JBQWdCO0NBQ2xCOztBQUVBO0VBQ0MsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVDO0VBQ0MsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQztHQUNFLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLFNBQVM7Q0FDWDs7QUFFRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJpYy1kYXNoL2dlbmVyaWMtZGFzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29sLW1kIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLndyYXBwZXIge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50b3RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hIC5jb250cmFjdC1sZW5ndGgsIC5jb250cmFjdC1sYWJlbHtcbiBjb2xvcjogYmxhY2s7XG4gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udHJhY3QtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbnRyYWN0cy1jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRyYWN0LWxvZ297XG4gIG9wYWNpdHk6IC4zO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDhweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uY29udHJhY3QtaWNvbiB7XG4gIHdpZHRoOiAxMjhweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEyOHB4ICFpbXBvcnRhbnQ7XG59XG5cbmEgLmFzc2V0LWxlbmd0aCwgLmFzc2V0LWxhYmVse1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiB9XG5cbiAuYXNzZXQtY29udGVudCB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgY29sb3I6IGJsYWNrO1xuIH1cblxuIC5hc3NldHMtY29udGFpbmVyIHtcbiAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuIC5hc3NldC1sb2dve1xuICAgb3BhY2l0eTogLjM7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBsZWZ0OiA4cHg7XG4gICB0b3A6IDEwcHg7XG4gfVxuXG4gLmFzc2V0LWljb24ge1xuICB3aWR0aDogMTI4cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMjhweCAhaW1wb3J0YW50O1xuIH1cblxuYSAudGlja2V0LWxlbmd0aCwgLnRpY2tldC1sYWJlbHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gfVxuXG4gLnRpY2tldC1jb250ZW50IHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICBjb2xvcjogYmxhY2s7XG4gfVxuXG4gLnRpY2tldHMtY29udGFpbmVyIHtcbiAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gfVxuXG4gLnRpY2tldC1sb2dve1xuICAgb3BhY2l0eTogLjM7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBsZWZ0OiAyMHB4O1xuICAgdG9wOiAxMHB4O1xuIH1cblxuIC50aWNrZXQtaWNvbiB7XG4gIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XG4gfVxuXG4gYSAuY29tcGFuaWVzLWxlbmd0aCwgLmNvbXBhbmllcy1sYWJlbHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gfVxuXG4gLmNvbXBhbmllcy1jb250ZW50IHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICBjb2xvcjogYmxhY2s7XG4gfVxuXG4gLmNvbXBhbmllcy1jb250YWluZXIge1xuICAgcGFkZGluZy1yaWdodDogMDtcbiAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiB9XG5cbiAuY29tcGFueS1sb2dve1xuICBvcGFjaXR5OiAuMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA4cHg7XG4gIHRvcDogMTBweDtcbn1cblxuIC5jb21wYW55LWljb24ge1xuICB3aWR0aDogMTI4cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMjhweCAhaW1wb3J0YW50O1xufVxuXG4gLnRpY2tldC1sb2dve1xuICAgb3BhY2l0eTogLjI7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBsZWZ0OiAyMHB4O1xuICAgdG9wOiAxNXB4O1xuIH1cblxuLnVzZXJzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi51c2Vycy1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgUGFkZGluZy1sZWZ0OiAxNTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXNlcnMtY29udGVudCBpbWd7XG4gIG9wYWNpdHk6IC4yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNTBweDtcbn1cblxuLmxvY2F0aW9ucy1jb250YWluZXIge1xuICBQYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubG9jYXRpb25zLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sb2NhdGlvbnMtY29udGVudCBpbWd7XG4gIG9wYWNpdHk6IC4yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNjBweDtcbn1cblxuXG4uY29udHJhY3RzLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYmFkZ2Uge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWRnZS10YWJsZSB7XG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbnAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmFkZ2Utbm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWRnZS0xNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbn1cblxuLmJhZGdlLTMwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uYmFkZ2UtNjAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xufVxuXG4uYmFkZ2UtOTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uYmFkZ2UtcGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uYmFkZ2UtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWRnZS10ZXJtaW5hdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NCwgMTYyLCAyMzUsIDEpO1xufVxuXG4uYmFkZ2UtdW5tYXBwZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjA2LCA4NiwgMSk7XG59XG5cbi5iYWRnZS15ZXRUb1N0YXJ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgMTkyLCAxOTIsIDEpO1xufVxuXG4uYXNzZXRzLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4udGlja2V0cy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnZpZXctd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/generic-dash/generic-dash.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/generic-dash/generic-dash.component.ts ***!
    \********************************************************/

  /*! exports provided: GenericDashComponent */

  /***/
  function srcAppGenericDashGenericDashComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenericDashComponent", function () {
      return GenericDashComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _login_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/services/profile.service */
    "./src/app/login/services/profile.service.ts");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../manage-assets/services/api-call.service */
    "./src/app/manage-assets/services/api-call.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_7__);

    var GenericDashComponent =
    /*#__PURE__*/
    function () {
      function GenericDashComponent(authenticationService, profileService, api, filter) {
        var _this25 = this;

        _classCallCheck(this, GenericDashComponent);

        this.authenticationService = authenticationService;
        this.profileService = profileService;
        this.api = api;
        this.filter = filter;
        this.contractsData = [];
        this.assetsData = [];
        this.now = 0;
        this.fifteenDays = 0;
        this.thirtyDays = 0;
        this.sixtyDays = 0;
        this.ninetyDays = 0;
        this.active = 0;
        this.terminated = 0;
        this.unmapped = 0;
        this.yetToStart = 0;
        this.currentProfileSubscription = this.authenticationService.currentUser.subscribe(function (profile) {
          _this25.currentProfile = profile;
        });
      }

      _createClass(GenericDashComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPartners();
          this.contractsChart();
          this.assetsChart();
          this.ticketsCount();
          this.companiesCount();
        }
      }, {
        key: "getPartners",
        value: function getPartners() {
          var _this26 = this;

          this.filter.getPartners().subscribe(function (returnedPartners) {
            return _this26.partnerArr = returnedPartners;
          });
        }
      }, {
        key: "filterPartner",
        value: function filterPartner(partner) {
          return this.partnerArr.find(function (company) {
            return company.CompanyName === partner;
          });
        }
      }, {
        key: "ticketsCount",
        value: function ticketsCount() {
          var _this27 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partTicketsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this27.ticketLength = returnedAssetLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {// this.filter.custAssetsFilter(this.currentProfile)
            // .subscribe(
            //   (returnedAssetLength: Assets[]) => this.assetLength = returnedAssetLength
            // );
          }
        }
      }, {
        key: "companiesCount",
        value: function companiesCount() {
          var _this28 = this;

          this.filter.customerFilter(this.currentProfile).subscribe(function (returnedCompanies) {
            _this28.companyLength = returnedCompanies;
          });
        }
      }, {
        key: "ticketsChart",
        value: function ticketsChart() {
          var _this29 = this;

          this.api.getTickets().subscribe(function (returnedTickets) {
            _this29.tickets = returnedTickets;
          });
        }
      }, {
        key: "contractsChart",
        value: function contractsChart() {
          var _this30 = this;

          var status = [];

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partConFilter(this.currentProfile).subscribe(function (returnedContracts) {
              _this30.contractLength = returnedContracts.length;
              status = returnedContracts.map(function (x) {
                var date1 = Date.now();
                var date2 = Date.parse(x.StartDate);
                var diff = date1 - date2;
                var diff2 = diff / (1000 * 3600 * 24);
                return diff2.toFixed(0);
              });

              for (var i = 0; i <= status.length; i++) {
                if (status[i] <= 14) {
                  _this30.now++;
                }

                if (status[i] <= 30) {
                  _this30.fifteenDays++;
                }

                if (status[i] <= 60) {
                  _this30.thirtyDays++;
                }

                if (status[i] <= 90) {
                  _this30.sixtyDays++;
                }

                if (status[i] = 90) {
                  _this30.ninetyDays++;
                }
              }

              _this30.contractsData = new chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]('contracts', {
                type: 'pie',
                data: {
                  datasets: [{
                    label: '# of Contracts',
                    data: [_this30.fifteenDays, _this30.thirtyDays, _this30.sixtyDays, _this30.ninetyDays],
                    backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                    borderColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                    borderWidth: 1
                  }]
                },
                options: {}
              });
            });
          }
        }
      }, {
        key: "assetsChart",
        value: function assetsChart() {
          var _this31 = this;

          var status = [];

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partAssetsFilter(this.currentProfile).subscribe(function (returnedAssets) {
              _this31.assetLength = returnedAssets.length;
              _this31.assets = returnedAssets;
              status = _this31.assets.map(function (asset) {
                return asset.ContractCoverage;
              });

              for (var i = 0; i <= status.length; i++) {
                if (status[i] === 'Active') {
                  _this31.active++;
                } else if (status[i] === 'Terminated') {
                  _this31.terminated++;
                } else if (status[i] === 'Unmapped') {
                  _this31.unmapped++;
                } else if (status[i] === 'Yet to Start') {
                  _this31.yetToStart++;
                }
              }

              _this31.contractsData = new chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]('assets', {
                type: 'pie',
                data: {
                  datasets: [{
                    label: 'Asset Status',
                    data: [_this31.active, _this31.terminated, _this31.unmapped, _this31.yetToStart],
                    backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                    borderColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                    borderWidth: 1
                  }]
                },
                options: {}
              });
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
            this.filter.custAssetsFilter(this.currentProfile).subscribe(function (returnedAssets) {
              _this31.assetLength = returnedAssets.length;
              _this31.assets = returnedAssets;
              status = _this31.assets.map(function (asset) {
                return asset.ContractCoverage;
              });

              for (var i = 0; i <= status.length; i++) {
                if (status[i] === 'Active') {
                  _this31.active++;
                } else if (status[i] === 'Terminated') {
                  _this31.terminated++;
                } else if (status[i] === 'Unmapped') {
                  _this31.unmapped++;
                } else if (status[i] === 'Yet to Start') {
                  _this31.yetToStart++;
                }
              }

              _this31.assetsData = new chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]('assets', {
                type: 'pie',
                data: {
                  labels: ['Active', 'Terminated', 'Unmapped', 'Yet to Start'],
                  datasets: [{
                    label: 'Asset Status',
                    data: [_this31.active, _this31.terminated, _this31.unmapped, _this31.yetToStart],
                    backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                    borderColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                    borderWidth: 1
                  }]
                },
                options: {}
              });
            });
          }
        }
      }, {
        key: "loadAllUsers",
        value: function loadAllUsers() {
          var _this32 = this;

          this.profileService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (profile) {
            _this32.profiles = profile;
          });
        }
      }]);

      return GenericDashComponent;
    }();

    GenericDashComponent.ctorParameters = function () {
      return [{
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _login_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }, {
        type: _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__["ApiCallService"]
      }, {
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"]
      }];
    };

    GenericDashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-generic-dash',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./generic-dash.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/generic-dash/generic-dash.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./generic-dash.component.css */
      "./src/app/generic-dash/generic-dash.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _login_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__["ApiCallService"], _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"]])], GenericDashComponent);
    /***/
  },

  /***/
  "./src/app/locations/location-details/location-details.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/locations/location-details/location-details.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLocationsLocationDetailsLocationDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  padding: 15px;\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card-header {\n  padding-bottom: 0;\n}\n\n.tab-wrapper {\n  width: 100%;\n}\n\n.detail {\n  width: 100%;\n}\n\nlabel {\n  width: 80%;\n}\n\ninput {\n  width: 100%;\n  height: 35px;\n  outline: none !important;\n  box-shadow:none;\n  border-style: solid;\n  padding: auto;\n  background: transparent;\n  border: 0;\n  border-bottom: solid 2px #4d4d4d;\n  font-size: 18px;\n}\n\n.table-container {\n  margin-right: 30px;\n  }\n\ntable {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  }\n\nth {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\nth,td {\n    font-size: medium;\n    text-align: center !important;\n  }\n\nth, td {\n    border: 1px solid black;\n    padding: 15px;\n    text-align: left;\n  }\n\ntable {\n    border-collapse: collapse;\n  }\n\ntr:nth-child(even) {\n    background-color: #e6e6e6;\n  }\n\ntr:nth-child(odd) {\n    background-color:   white;\n  }\n\n.mattable-container {\n    width: 94%;\n    margin-bottom: 50px;\n  }\n\n.mat-focused .mat-form-field-label {\n    color: rgb(230, 92, 0) !important;\n  }\n\n.mat-form-field-ripple {\n    background-color: rgb(230, 92, 0) !important;\n  }\n\n.search-div {\n    margin: 10px;\n  }\n\n.search-form-field {\n    width: 94%;\n    margin-left: 10px;\n    padding:  5px 10px;\n    background-color: #e6e6e6;\n    border-radius: 5px;\n  }\n\n/* .search-form-field div.mat-form-field-underline {\n    display: none;\n  } */\n\n.mat-focused .mat-form-field-label {\n    color: rgb(230, 92, 0) !important;\n}\n\n.search-form-field button {\n    height: 32px;\n    width: 32px;\n    border-radius: 8px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb25zL2xvY2F0aW9uLWRldGFpbHMvbG9jYXRpb24tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBSUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsNkJBQTZCO0VBQy9COztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsaUNBQWlDO0VBQ25DOztBQUVBO0lBQ0UsNENBQTRDO0VBQzlDOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7QUFFQTs7S0FFRzs7QUFFSDtJQUNFLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb25zL2xvY2F0aW9uLWRldGFpbHMvbG9jYXRpb24tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5cblxuLnRhYi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxubGFiZWwge1xuICB3aWR0aDogODAlO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzpub25lO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwYWRkaW5nOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzRkNGQ0ZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgfVxuXG4gIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHRoLHRkIHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIH1cblxuICB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICB3aGl0ZTtcbiAgfVxuXG4gIC5tYXR0YWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlYXJjaC1kaXYge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiAgNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAvKiAuc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/locations/location-details/location-details.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/locations/location-details/location-details.component.ts ***!
    \**************************************************************************/

  /*! exports provided: LocationDetailsComponent */

  /***/
  function srcAppLocationsLocationDetailsLocationDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationDetailsComponent", function () {
      return LocationDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var LocationDetailsComponent =
    /*#__PURE__*/
    function () {
      function LocationDetailsComponent(location, route, filter, authserv) {
        var _this33 = this;

        _classCallCheck(this, LocationDetailsComponent);

        this.location = location;
        this.route = route;
        this.filter = filter;
        this.authserv = authserv;
        this.assetDisplayedColumns = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
        this.ticketDisplayedColumns = ['Case#', 'Name', 'Status', 'Description', 'Schedule', 'Asset ID', 'Customer', 'Update Date', 'Update Since'];
        this.authserv.currentUser.subscribe(function (profile) {
          return _this33.currentProfile = profile;
        });
      }

      _createClass(LocationDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getLocation();
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this34 = this;

          var description = this.route.snapshot.paramMap.get('description');
          this.filter.locationFilter(description).subscribe(function (returnedLocation) {
            _this34.specLocation = returnedLocation;
            var siteAddress = description + ' - ' + _this34.specLocation[0].Address1 + ', ' + _this34.specLocation[0].Town + ', ' + _this34.specLocation[0].County + ', ' + _this34.specLocation[0].Postcode + ', ' + _this34.specLocation[0].Country;

            _this34.filter.assetsByLocation(siteAddress).subscribe(function (returnedAssets) {
              _this34.assetLocationLength = returnedAssets;
              _this34.assetLocationDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](returnedAssets);
              _this34.assetLocationDataSource.sort = _this34.sort;
              _this34.assetLocationDataSource.paginator = _this34.paginator;
            });

            _this34.filter.ticketsLocationFilter(siteAddress).subscribe(function (returnedTickets) {
              _this34.ticketLocationLength = returnedTickets;
              _this34.ticketLocationDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](returnedTickets);
              _this34.ticketLocationDataSource.sort = _this34.sort;
              _this34.ticketLocationDataSource.paginator = _this34.paginator;
            });
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "applyTicketFilter",
        value: function applyTicketFilter() {
          this.ticketLocationDataSource.filter = this.assetSearchKey.trim().toLowerCase();

          if (this.ticketLocationDataSource.paginator) {
            this.ticketLocationDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "searchTicketClear",
        value: function searchTicketClear() {
          this.ticketSearchKey = '';
          this.applyTicketFilter();
        }
      }, {
        key: "applyAssetFilter",
        value: function applyAssetFilter() {
          this.assetLocationDataSource.filter = this.assetSearchKey.trim().toLowerCase();

          if (this.assetLocationDataSource.paginator) {
            this.assetLocationDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "searchAssetClear",
        value: function searchAssetClear() {
          this.assetSearchKey = '';
          this.applyAssetFilter();
        }
      }]);

      return LocationDetailsComponent;
    }();

    LocationDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], LocationDetailsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])], LocationDetailsComponent.prototype, "sort", void 0);
    LocationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-location-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./location-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/location-details/location-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./location-details.component.css */
      "./src/app/locations/location-details/location-details.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])], LocationDetailsComponent);
    /***/
  },

  /***/
  "./src/app/locations/locations.component.css":
  /*!***************************************************!*\
    !*** ./src/app/locations/locations.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLocationsLocationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title, .assetRef {\n  width: 250px;\n}\n\n.edit-items-container {\n  margin-right: 20px;\n}\n\n.btn {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.btn:click,\n.btn:hover,\n.btn:focused,\n.btn:active,\n.btn:visited {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.table-container {\n  margin-right: 30px;\n  }\n\ntable {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  }\n\nth {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\nth,td {\n    font-size: medium;\n    text-align: center !important;\n  }\n\nth, td {\n    border: 1px solid black;\n    padding: 15px;\n  }\n\ntable {\n    border-collapse: collapse;\n  }\n\ntr:nth-child(even) {\n    background-color: #e6e6e6;\n  }\n\ntr:nth-child(odd) {\n    background-color:   white;\n  }\n\n.mattable-container {\n    width: 94%;\n    margin-bottom: 50px;\n  }\n\n.mat-focused .mat-form-field-label {\n    color: rgb(230, 92, 0) !important;\n  }\n\n.mat-form-field-ripple {\n    background-color: rgb(230, 92, 0) !important;\n  }\n\n.search-div {\n    margin: 10px;\n  }\n\n.search-form-field {\n    width: 94%;\n    margin-left: 10px;\n    padding:  5px 10px;\n    background-color: #e6e6e6;\n    border-radius: 5px;\n  }\n\n/* .search-form-field div.mat-form-field-underline {\n    display: none;\n  } */\n\n.search-form-field button {\n    height: 32px;\n    width: 32px;\n    border-radius: 8px;\n  }\n\n/* mat-table {\n    border-radius: 8px;\n  }\n\n  mat-table {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  } */\n\n/* mat-header-cel {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\n  mat-header-cell, mat-cell {\n    border: 1px solid black;\n    padding: 15px;\n    text-align: left;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb25zL2xvY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRDQUE0QztFQUM1Qyx3Q0FBd0M7QUFDMUM7O0FBRUE7Ozs7O0VBS0UsWUFBWTtFQUNaLDRDQUE0QztFQUM1Qyx3Q0FBd0M7QUFDMUM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEI7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQiw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtFQUNmOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7QUFFQTtJQUNFLDRDQUE0QztFQUM5Qzs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0FBRUE7O0tBRUc7O0FBRUg7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7QUFDQTs7Ozs7Ozs7O0tBU0c7O0FBRUg7Ozs7Ozs7Ozs7S0FVRyIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9ucy9sb2NhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSwgLmFzc2V0UmVmIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uZWRpdC1pdGVtcy1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xufVxuXG4uYnRuOmNsaWNrLFxuLmJ0bjpob3Zlcixcbi5idG46Zm9jdXNlZCxcbi5idG46YWN0aXZlLFxuLmJ0bjp2aXNpdGVkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cbi50YWJsZS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICB9XG5cbiAgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgdGgsdGQge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIH1cblxuICB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICB3aGl0ZTtcbiAgfVxuXG4gIC5tYXR0YWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlYXJjaC1kaXYge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiAgNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAvKiAuc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCBidXR0b24ge1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgLyogbWF0LXRhYmxlIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuICBtYXQtdGFibGUge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgfSAqL1xuXG4gIC8qIG1hdC1oZWFkZXItY2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIG1hdC1oZWFkZXItY2VsbCwgbWF0LWNlbGwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfSAqL1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/locations/locations.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/locations/locations.component.ts ***!
    \**************************************************/

  /*! exports provided: LocationsComponent */

  /***/
  function srcAppLocationsLocationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationsComponent", function () {
      return LocationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var LocationsComponent =
    /*#__PURE__*/
    function () {
      function LocationsComponent(filter, authserv) {
        var _this35 = this;

        _classCallCheck(this, LocationsComponent);

        this.filter = filter;
        this.authserv = authserv;
        this.displayedColumns = ['Description', 'Street', 'City', 'Zip Code', 'Country', 'Company'];
        this.authserv.currentUser.subscribe(function (profile) {
          return _this35.currentProfile = profile;
        });
      }

      _createClass(LocationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPartners();
          this.getLocations();
        }
      }, {
        key: "getPartners",
        value: function getPartners() {
          var _this36 = this;

          this.filter.getPartners().subscribe(function (returnedPartners) {
            return _this36.partnerArr = returnedPartners;
          });
        }
      }, {
        key: "filterPartner",
        value: function filterPartner(partner) {
          return this.partnerArr.find(function (company) {
            return company.CompanyName === partner;
          });
        }
      }, {
        key: "getLocations",
        value: function getLocations() {
          var _this37 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partLocationFilter(this.currentProfile).subscribe(function (returnedLocations) {
              _this37.locationLength = returnedLocations;
              _this37.locationDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](returnedLocations);
              _this37.locationDataSource.sort = _this37.sort;
              _this37.locationDataSource.paginator = _this37.paginator;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
            this.filter.custLocationFilter(this.currentProfile).subscribe(function (returnedLocations) {
              _this37.locationLength = returnedLocations;
              _this37.locationDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](returnedLocations);
              _this37.locationDataSource.sort = _this37.sort;
              _this37.locationDataSource.paginator = _this37.paginator;
            });
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.locationDataSource.filter = this.searchKey.trim().toLowerCase();

          if (this.locationDataSource.paginator) {
            this.locationDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "searchClear",
        value: function searchClear() {
          this.searchKey = '';
          this.applyFilter();
        }
      }]);

      return LocationsComponent;
    }();

    LocationsComponent.ctorParameters = function () {
      return [{
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__["ApifilterService"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])], LocationsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])], LocationsComponent.prototype, "sort", void 0);
    LocationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-locations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./locations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./locations.component.css */
      "./src/app/locations/locations.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__["ApifilterService"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], LocationsComponent);
    /***/
  },

  /***/
  "./src/app/login/alert/alert.component.css":
  /*!*************************************************!*\
    !*** ./src/app/login/alert/alert.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginAlertAlertComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  width: 75%;\n  top: 100px;\n  bottom: 75%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIHdpZHRoOiA3NSU7XG4gIHRvcDogMTAwcHg7XG4gIGJvdHRvbTogNzUlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/login/alert/alert.component.ts":
  /*!************************************************!*\
    !*** ./src/app/login/alert/alert.component.ts ***!
    \************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppLoginAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/alert.service */
    "./src/app/login/services/alert.service.ts");

    var AlertComponent =
    /*#__PURE__*/
    function () {
      function AlertComponent(alertService) {
        _classCallCheck(this, AlertComponent);

        this.alertService = alertService;
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.subcscription = this.alertService.getMessage().subscribe(function (message) {
            _this38.message = message;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subcscription.unsubscribe();
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ctorParameters = function () {
      return [{
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }];
    };

    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/alert/alert.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alert.component.css */
      "./src/app/login/alert/alert.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])], AlertComponent);
    /***/
  },

  /***/
  "./src/app/login/forgotpassword/forgotpassword.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/login/forgotpassword/forgotpassword.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginForgotpasswordForgotpasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  /* margin: auto; */\n  padding-bottom: 1px;\n  padding-top: 5px;\n  background-color: navy;\n  border-radius: 10px;\n  color: white;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);\n  max-width: 650px;\n  top: 210px;\n  left: 15%;\n  background-color: black;\n  position: absolute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdFQUF3RTtFQUN4RSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAvKiBtYXJnaW46IGF1dG87ICovXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICB0b3A6IDIxMHB4O1xuICBsZWZ0OiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/forgotpassword/forgotpassword.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/login/forgotpassword/forgotpassword.component.ts ***!
    \******************************************************************/

  /*! exports provided: ForgotpasswordComponent */

  /***/
  function srcAppLoginForgotpasswordForgotpasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function () {
      return ForgotpasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../login/services/alert.service */
    "./src/app/login/services/alert.service.ts");

    var ForgotpasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotpasswordComponent(authenticationService, router, alertService) {
        _classCallCheck(this, ForgotpasswordComponent);

        this.authenticationService = authenticationService;
        this.router = router;
        this.alertService = alertService;
        this.IsvalidForm = true;
      } // token = '1f4914e8f3ffdccd28220e';
      // username = 'xjohnson@nasupport.com';
      //  password = 'Pass123Word!'


      _createClass(ForgotpasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forgotForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email], this.forbiddenEmails)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this39 = this;

          //    console.log(this.forgotForm)
          if (this.forgotForm.valid) {
            this.IsvalidForm = true;
            this.authenticationService.requestForgotPassword(this.forgotForm.value).subscribe(function (data) {
              _this39.forgotForm.reset();

              _this39.successMessage = 'Forgot password link sent to email sucessfully.';

              _this39.alertService.success('We have just sent you a link to reset password', true);

              _this39.router.navigate(['login']);
            }, function (err) {
              _this39.alertService.error(err);
            });
          } else {
            this.IsvalidForm = false;
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.forgotForm.controls;
        }
      }]);

      return ForgotpasswordComponent;
    }();

    ForgotpasswordComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _login_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }];
    };

    ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-forgotpassword',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgotpassword.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgotpassword/forgotpassword.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgotpassword.component.css */
      "./src/app/login/forgotpassword/forgotpassword.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _login_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])], ForgotpasswordComponent);
    /***/
  },

  /***/
  "./src/app/login/guards/auth.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/login/guards/auth.guard.ts ***!
    \********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppLoginGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/login/services/authentication.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser) {
            return true;
          }

          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/login/header/header.component.css":
  /*!***************************************************!*\
    !*** ./src/app/login/header/header.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0px 0px 0px 0px;\n}\n\n\nform {\n  margin-left: 150px;\n  margin-right: 150px;\n}\n\n\nhr {\n  border-color: #8c8c8c;\n}\n\n\nnav {\n  width: 102vw;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);\n  /* position: sticky;\n  position: -webkit-sticky; */\n}\n\n\n.navbar-brand {\n cursor: pointer;\n}\n\n\n.rel-log {\n  margin-top: 10px;\n}\n\n\n.dropdown-item {\n  display: -webkit-box;\n  display: flex;\n  cursor: pointer;\n}\n\n\n.text {\n  margin-left: 13px;\n}\n\n\n.northsmart button {\n  color: black;\n}\n\n\n.relusNav button {\n  color: black;\n}\n\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  background-color:#8c8c8c;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWix3RUFBd0U7RUFDeEU7NkJBQzJCO0FBQzdCOzs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7OztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufVxuXG5cbmZvcm0ge1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTUwcHg7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWNvbG9yOiAjOGM4YzhjO1xufVxuXG5uYXYge1xuICB3aWR0aDogMTAydnc7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgLyogcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAqL1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVsLWxvZyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZHJvcGRvd24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHQge1xuICBtYXJnaW4tbGVmdDogMTNweDtcbn1cblxuLm5vcnRoc21hcnQgYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucmVsdXNOYXYgYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciwgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM4YzhjOGM7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/header/header.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/login/header/header.component.ts ***!
    \**************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLoginHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/login/services/authentication.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router, authenticationService) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'Support Portal';
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          this.authenticationService.currentUser.subscribe(function (name) {
            _this40.currentProfile = name;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "dashLink",
        value: function dashLink() {
          var dash = this.authenticationService.currentUserValue.partner;

          switch (dash) {
            case 'NorthSmart (Northland)':
              this.router.navigate(['/northdash']);
              break;

            case 'Noble1 Solutions' || false || false:
              this.router.navigate(['/dashboard']);
              break;

            case 'Reliant Technology':
              this.router.navigate(['/reliantdash']);
              break;

            case 'Relus Technologies' || false || false:
              this.router.navigate(['/relusdash']);
              break;

            case 'Support':
              this.router.navigate(['/suppdash']);
              break;

            default:
              this.router.navigate(['/genericdash']);
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/login/header/header.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/login/helpers/error-interceptor.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/login/helpers/error-interceptor.service.ts ***!
    \************************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppLoginHelpersErrorInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/login/services/authentication.service.ts");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(authenticationService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this41 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
              // auto-logout if 401 response returned from api
              _this41.authenticationService.logout();

              location.reload(true);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/login/helpers/jwt.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/login/helpers/jwt.service.ts ***!
    \**********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppLoginHelpersJwtServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/login/services/authentication.service.ts");

    var JwtInterceptor =
    /*#__PURE__*/
    function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with jwt token if available
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser && currentUser.token) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/login/helpers/must-match.ts":
  /*!*********************************************!*\
    !*** ./src/app/login/helpers/must-match.ts ***!
    \*********************************************/

  /*! exports provided: MustMatch */

  /***/
  function srcAppLoginHelpersMustMatchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/login/login/login.component.css":
  /*!*************************************************!*\
    !*** ./src/app/login/login/login.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  /* margin: auto; */\n  padding-bottom: 1px;\n  padding-top: 5px;\n  background-color: navy;\n  border-radius: 10px;\n  color: white;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);\n  max-width: 650px;\n  top: 210px;\n  left: 15%;\n  background-color: black;\n  position: absolute;\n}\n\n.buttons {\n  margin-bottom: 40px;\n}\n\nbutton {\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdFQUF3RTtFQUN4RSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLHdDQUF3QztBQUMxQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgbWF4LXdpZHRoOiA2NTBweDtcbiAgdG9wOiAyMTBweDtcbiAgbGVmdDogMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/login/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/login/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../services/alert.service */
    "./src/app/login/services/alert.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../services/authentication.service */
    "./src/app/login/services/authentication.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, router, route, authenticationService, alertService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.adminHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this42 = this;

          this.submitted = true;

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.authenticationService.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            var dash = _this42.authenticationService.currentUserValue.partner;

            switch (dash) {
              case 'NorthSmart (Northland)':
                _this42.router.navigate(['/northdash']);

                break;

              case 'Noble1 Solutions' || false || false:
                _this42.router.navigate(['/dashboard']);

                break;

              case 'Reliant Technology':
                _this42.router.navigate(['/reliantdash']);

                break;

              case 'Relus Technologies' || false:
                _this42.router.navigate(['/relusdash']);

                break;

              case 'BB&T':
                _this42.router.navigate(['/relusdash']);

                break;

              case 'Support':
                _this42.router.navigate(['/suppdash']);

                break;

              default:
                _this42.router.navigate(['/genericdash']);

            }
          }, function (error) {
            _this42.alertService.error(error);

            _this42.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], LoginComponent.prototype, "adminHeader", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login/login.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/login/models/profile.ts":
  /*!*****************************************!*\
    !*** ./src/app/login/models/profile.ts ***!
    \*****************************************/

  /*! exports provided: Profile */

  /***/
  function srcAppLoginModelsProfileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Profile", function () {
      return Profile;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Profile = function Profile() {
      _classCallCheck(this, Profile);
    };
    /***/

  },

  /***/
  "./src/app/login/reset/reset.component.css":
  /*!*************************************************!*\
    !*** ./src/app/login/reset/reset.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginResetResetComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  /* margin: auto; */\n  padding-bottom: 1px;\n  padding-top: 5px;\n  background-color: navy;\n  border-radius: 10px;\n  color: white;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);\n  max-width: 650px;\n  top: 210px;\n  left: 15%;\n  background-color: black;\n  position: absolute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcmVzZXQvcmVzZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdFQUF3RTtFQUN4RSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vcmVzZXQvcmVzZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAvKiBtYXJnaW46IGF1dG87ICovXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICB0b3A6IDIxMHB4O1xuICBsZWZ0OiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/reset/reset.component.ts":
  /*!************************************************!*\
    !*** ./src/app/login/reset/reset.component.ts ***!
    \************************************************/

  /*! exports provided: ResetComponent */

  /***/
  function srcAppLoginResetResetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetComponent", function () {
      return ResetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _helpers_must_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../helpers/must-match */
    "./src/app/login/helpers/must-match.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../login/services/alert.service */
    "./src/app/login/services/alert.service.ts");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _login_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../login/services/profile.service */
    "./src/app/login/services/profile.service.ts");

    var ResetComponent =
    /*#__PURE__*/
    function () {
      function ResetComponent(formBuilder, authService, router, route, alertService, profileService) {
        _classCallCheck(this, ResetComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.profileService = profileService;
        this.validToken = true;
        this.loading = false;
        this.submitted = false;
      }

      _createClass(ResetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this43 = this;

          this.resetPasswordForm = this.formBuilder.group({
            // password:  ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$') ]],
            // confirmpassword: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$') ]]
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }, {
            validator: [Object(_helpers_must_match__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmpassword')]
          });
          var resetToken = this.route.snapshot.queryParams['token'];
          this.authService.validResetToken({
            resetToken: resetToken
          }).subscribe(function (data) {
            _this43.validToken = true;
            _this43.errorMessage = '';
          }, function (err) {
            _this43.validToken = false;

            _this43.alertService.error(err);
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this44 = this;

          this.submitted = true;

          if (this.resetPasswordForm.invalid) {
            return;
          }

          this.loading = true;
          this.profileService.resetPassword({
            params: this.resetPasswordForm.value,
            token: this.route.snapshot.queryParams['token']
          }).subscribe(function (data) {
            _this44.alertService.success('Password reset successful', true);

            _this44.loading = false;
          }, function (error) {
            _this44.alertService.error(error);

            _this44.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.resetPasswordForm.controls;
        }
      }]);

      return ResetComponent;
    }();

    ResetComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _login_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _login_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
      }];
    };

    ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/reset/reset.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset.component.css */
      "./src/app/login/reset/reset.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _login_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _login_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]])], ResetComponent);
    /***/
  },

  /***/
  "./src/app/login/services/alert.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/login/services/alert.service.ts ***!
    \*************************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppLoginServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService(router) {
        var _this45 = this;

        _classCallCheck(this, AlertService);

        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            if (_this45.keepAfterNavigationChange) {
              _this45.keepAfterNavigationChange = false;
            } else {
              _this45.subject.next();
            }
          }
        });
      }

      _createClass(AlertService, [{
        key: "success",
        value: function success(message) {
          var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterNavigationChange = keepAfterNavigationChange;
          this.subject.next({
            type: 'success',
            text: message
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterNavigationChange = keepAfterNavigationChange;
          this.subject.next({
            type: 'error',
            text: message
          });
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          return this.subject.asObservable();
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AlertService);
    /***/
  },

  /***/
  "./src/app/login/services/authentication.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/login/services/authentication.service.ts ***!
    \**********************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppLoginServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(username, password) {
          var _this46 = this;

          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverUrl, "/profile/authenticate"), {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (profile) {
            if (profile && profile.token) {
              var saveInfo = {
                'token': profile.token,
                'partner': profile.partner,
                'company': profile.company,
                'companypartner': profile.companypartner,
                'partnerRole': profile.partnerRole
              };
              localStorage.setItem('currentUser', JSON.stringify(saveInfo));

              _this46.currentUserSubject.next(profile);
            }

            return profile;
          }));
        }
      }, {
        key: "requestForgotPassword",
        value: function requestForgotPassword(body) {
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverUrl, "/profile/forgot-password"), body);
        }
      }, {
        key: "newPassword",
        value: function newPassword(body) {
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverUrl, "/profile/new-password"), body);
        }
      }, {
        key: "validResetToken",
        value: function validResetToken(body) {
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverUrl, "/profile/valid-reset-token"), body);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/login/services/loginpulls.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/login/services/loginpulls.service.ts ***!
    \******************************************************/

  /*! exports provided: LoginpullsService */

  /***/
  function srcAppLoginServicesLoginpullsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginpullsService", function () {
      return LoginpullsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _partner_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../partner-list */
    "./src/app/partner-list.ts");

    var LoginpullsService =
    /*#__PURE__*/
    function () {
      function LoginpullsService(auth, http) {
        _classCallCheck(this, LoginpullsService);

        this.auth = auth;
        this.http = http; // partner: Partner;

        this.partnerlist = _partner_list__WEBPACK_IMPORTED_MODULE_5__["PartnerList"];
        this.code = 'https://harmonyprodcustomersone.azurewebsites.net/api/CompanyListByPartner?code=rhtQGzt22H6Z0VQb7iUNZYazTiZpKrCmkSEA71oORrDu/lUFysLEoA==';
        this.locationsapi = 'https://prodharmony.azurewebsites.net/api/LocationsByCustomer?code=lOUnhasaC78wc6wyFKiG/loAC7aa0blBIca91Y/BdexlvkqGyEGMXw==';
      }

      _createClass(LoginpullsService, [{
        key: "getPartnerList",
        value: function getPartnerList() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].LoginPull, "PartnerList?code=6W5az23O1cyKatIJp7F/ayclp8hQal5rYbCywjOXN6kF5ZMzNluuVA=="));
        } //  oldgetCompanyList(filter: Filter): Observable<any> {
        //     return this.http.get(this.code, filter.partner);
        //  }

      }, {
        key: "getCompanyList",
        value: function getCompanyList(partner) {
          var params = {
            'partner': partner
          };
          return this.http.post(this.code, params);
        }
      }]);

      return LoginpullsService;
    }();

    LoginpullsService.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginpullsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LoginpullsService);
    /***/
  },

  /***/
  "./src/app/login/services/profile.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/login/services/profile.service.ts ***!
    \***************************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppLoginServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var ProfileService =
    /*#__PURE__*/
    function () {
      function ProfileService(http) {
        _classCallCheck(this, ProfileService);

        this.http = http;
      }

      _createClass(ProfileService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl, "/profile"));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl, "/profile/").concat(id));
        }
      }, {
        key: "getByRole",
        value: function getByRole(role) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl, "/profile/").concat(role));
        }
      }, {
        key: "register",
        value: function register(profile) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl, "/profile/register"), profile);
        }
      }, {
        key: "update",
        value: function update(profile) {
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl, "/profile/").concat(profile.id), profile);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl, "/profile/").concat(id));
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(body) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl, "/profile/reset-password"), body);
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ProfileService);
    /***/
  },

  /***/
  "./src/app/manage-assets/asset-detail/asset-detail.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/manage-assets/asset-detail/asset-detail.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageAssetsAssetDetailAssetDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  padding: 15px;\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card-header {\n  padding-bottom: 0;\n}\n\n.tab-wrapper {\n  width: 100%;\n}\n\n.detail {\n  width: 100%;\n}\n\nlabel {\n  width: 75%;\n}\n\ninput {\n  width: 100%;\n  height: 35px;\n  outline: none !important;\n  box-shadow:none;\n  border-style: solid;\n  padding: auto;\n  background: transparent;\n  border: 0;\n  border-bottom: solid 2px #4d4d4d;\n  font-size: 18px;\n}\n\n.table-container {\n  margin-right: 30px;\n  }\n\ntable {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  }\n\nth {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\nth,td {\n    font-size: medium;\n    text-align: center !important;\n  }\n\nth, td {\n    border: 1px solid black;\n    padding: 15px;\n    text-align: left;\n  }\n\ntable {\n    border-collapse: collapse;\n  }\n\ntr:nth-child(even) {\n    background-color: #e6e6e6;\n  }\n\ntr:nth-child(odd) {\n    background-color:   white;\n  }\n\n.mattable-container {\n    width: 94%;\n    margin-bottom: 50px;\n  }\n\n.mat-focused .mat-form-field-label {\n    color: rgb(230, 92, 0) !important;\n  }\n\n.mat-form-field-ripple {\n    background-color: rgb(230, 92, 0) !important;\n  }\n\n.search-div {\n    margin: 10px;\n  }\n\n.search-form-field {\n    width: 94%;\n    margin-left: 10px;\n    padding:  5px 10px;\n    background-color: #e6e6e6;\n    border-radius: 5px;\n  }\n\n/* .search-form-field div.mat-form-field-underline {\n    display: none;\n  } */\n\n.search-form-field button {\n    height: 32px;\n    width: 32px;\n    border-radius: 8px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFzc2V0cy9hc3NldC1kZXRhaWwvYXNzZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEI7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQiw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0FBRUE7SUFDRSw0Q0FBNEM7RUFDOUM7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCOztBQUVBOztLQUVHOztBQUVIO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2UtYXNzZXRzL2Fzc2V0LWRldGFpbC9hc3NldC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuXG4udGFiLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFpbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5sYWJlbCB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93Om5vbmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBhZGRpbmc6IGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjNGQ0ZDRkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICB9XG5cbiAgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgdGgsdGQge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgfVxuXG4gIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIHdoaXRlO1xuICB9XG5cbiAgLm1hdHRhYmxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2VhcmNoLWRpdiB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG5cbiAgLnNlYXJjaC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6ICA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gIC8qIC5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9ICovXG5cbiAgLnNlYXJjaC1mb3JtLWZpZWxkIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/manage-assets/asset-detail/asset-detail.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/manage-assets/asset-detail/asset-detail.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AssetDetailComponent */

  /***/
  function srcAppManageAssetsAssetDetailAssetDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetDetailComponent", function () {
      return AssetDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AssetDetailComponent =
    /*#__PURE__*/
    function () {
      function AssetDetailComponent(filter, location, route) {
        _classCallCheck(this, AssetDetailComponent);

        this.filter = filter;
        this.location = location;
        this.route = route;
        this.displayedColumns = ['Contract Name', 'Start Date', 'Renewal Date', 'Contract#', 'Customer', 'Status'];
      }

      _createClass(AssetDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getItems();
        }
      }, {
        key: "getItems",
        value: function getItems() {
          var _this47 = this;

          var assetid = this.route.snapshot.paramMap.get('identifier');
          this.filter.assetsBySerial(assetid).subscribe(function (returnedAsset) {
            _this47.asset = returnedAsset;

            _this47.filter.conByName(_this47.asset[0].Schedule).subscribe(function (returnedContractLength) {
              _this47.contractLength = returnedContractLength;
              _this47.contractDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](returnedContractLength);
              _this47.contractDataSource.sort = _this47.sort;
              _this47.contractDataSource.paginator = _this47.paginator;
            });

            _this47.filter.conByName(_this47.asset[0].Schedule).subscribe(function (returnedContract) {
              _this47.contract = returnedContract;
            });
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.contractDataSource.filter = this.searchKey.trim().toLowerCase();

          if (this.contractDataSource.paginator) {
            this.contractDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "searchClear",
        value: function searchClear() {
          this.searchKey = '';
          this.applyFilter();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);

      return AssetDetailComponent;
    }();

    AssetDetailComponent.ctorParameters = function () {
      return [{
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])], AssetDetailComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], AssetDetailComponent.prototype, "sort", void 0);
    AssetDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-asset-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./asset-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/asset-detail/asset-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./asset-detail.component.css */
      "./src/app/manage-assets/asset-detail/asset-detail.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], AssetDetailComponent);
    /***/
  },

  /***/
  "./src/app/manage-assets/contracts/contract-detail/assetlocfilter/asset-loc-filter.pipe.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/manage-assets/contracts/contract-detail/assetlocfilter/asset-loc-filter.pipe.ts ***!
    \*************************************************************************************************/

  /*! exports provided: AssetLocFilterPipe */

  /***/
  function srcAppManageAssetsContractsContractDetailAssetlocfilterAssetLocFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetLocFilterPipe", function () {
      return AssetLocFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AssetLocFilterPipe =
    /*#__PURE__*/
    function () {
      function AssetLocFilterPipe() {
        _classCallCheck(this, AssetLocFilterPipe);
      }

      _createClass(AssetLocFilterPipe, [{
        key: "transform",
        value: function transform(value, filter) {
          return _toConsumableArray(new Set(value.map(function (ad) {
            return ad.SiteAddress;
          })));
        }
      }]);

      return AssetLocFilterPipe;
    }();

    AssetLocFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'assetLocFilter'
    })], AssetLocFilterPipe);
    /***/
  },

  /***/
  "./src/app/manage-assets/contracts/contract-detail/contract-detail.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/manage-assets/contracts/contract-detail/contract-detail.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageAssetsContractsContractDetailContractDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  padding: 15px;\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card-header {\n  padding-bottom: 0;\n}\n\n.tab-wrapper {\n  width: 100%;\n}\n\n.detail {\n  width: 100%;\n}\n\nlabel {\n  width: 80%;\n}\n\ninput {\n  width: 100%;\n  height: 35px;\n  outline: none !important;\n  box-shadow:none;\n  border-style: solid;\n  padding: auto;\n  background: transparent;\n  border: 0;\n  border-bottom: solid 2px #4d4d4d;\n  font-size: 18px;\n}\n\n.table-container {\n  margin-right: 30px;\n  }\n\ntable {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  }\n\nth {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\nth,td {\n    font-size: medium;\n    text-align: center !important;\n  }\n\nth, td {\n    border: 1px solid black;\n    padding: 15px;\n    text-align: left;\n  }\n\ntable {\n    border-collapse: collapse;\n  }\n\ntr:nth-child(even) {\n    background-color: #e6e6e6;\n  }\n\ntr:nth-child(odd) {\n    background-color:   white;\n  }\n\n.mattable-container {\n    width: 94%;\n    margin-bottom: 50px;\n  }\n\n.mat-focused .mat-form-field-label {\n    color: rgb(230, 92, 0) !important;\n  }\n\n.mat-form-field-ripple {\n    background-color: rgb(230, 92, 0) !important;\n  }\n\n.search-div {\n    margin: 10px;\n  }\n\n.search-form-field {\n    width: 94%;\n    margin-left: 10px;\n    padding:  5px 10px;\n    background-color: #e6e6e6;\n    border-radius: 5px;\n  }\n\n/* .search-form-field div.mat-form-field-underline {\n    display: none;\n  } */\n\n.mat-focused .mat-form-field-label {\n    color: rgb(230, 92, 0) !important;\n}\n\n.search-form-field button {\n    height: 32px;\n    width: 32px;\n    border-radius: 8px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFzc2V0cy9jb250cmFjdHMvY29udHJhY3QtZGV0YWlsL2NvbnRyYWN0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBSUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsNkJBQTZCO0VBQy9COztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsaUNBQWlDO0VBQ25DOztBQUVBO0lBQ0UsNENBQTRDO0VBQzlDOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7QUFFQTs7S0FFRzs7QUFFSDtJQUNFLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLWFzc2V0cy9jb250cmFjdHMvY29udHJhY3QtZGV0YWlsL2NvbnRyYWN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5cblxuLnRhYi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxubGFiZWwge1xuICB3aWR0aDogODAlO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzpub25lO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwYWRkaW5nOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzRkNGQ0ZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgfVxuXG4gIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHRoLHRkIHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIH1cblxuICB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICB3aGl0ZTtcbiAgfVxuXG4gIC5tYXR0YWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlYXJjaC1kaXYge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiAgNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAvKiAuc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/manage-assets/contracts/contract-detail/contract-detail.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/manage-assets/contracts/contract-detail/contract-detail.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ContractDetailComponent */

  /***/
  function srcAppManageAssetsContractsContractDetailContractDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContractDetailComponent", function () {
      return ContractDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ContractDetailComponent =
    /*#__PURE__*/
    function () {
      function ContractDetailComponent(filter, location, route) {
        _classCallCheck(this, ContractDetailComponent);

        this.filter = filter;
        this.location = location;
        this.route = route;
        this.displayedColumns = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
      }

      _createClass(ContractDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getItems();
        }
      }, {
        key: "getItems",
        value: function getItems() {
          var _this48 = this;

          var refNumber = this.route.snapshot.paramMap.get('refNumber');
          this.filter.conByRef(refNumber).subscribe(function (returnedContract) {
            _this48.contract = returnedContract;

            _this48.filter.assetsBySchedule(_this48.contract[0].ScheduleName).subscribe(function (returnedAssetLength) {
              _this48.assetLength = returnedAssetLength;
              _this48.assetDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](returnedAssetLength);
              _this48.assetDataSource.sort = _this48.sort;
              _this48.assetDataSource.paginator = _this48.paginator;
            });

            _this48.filter.assetsBySchedule(_this48.contract[0].ScheduleName).subscribe(function (returnedAsset) {
              _this48.assets = returnedAsset;
            });
          });
        }
      }, {
        key: "groupAddress",
        value: function groupAddress() {
          for (var i = 0; i <= this.assetLength.length; i++) {
            if (this.assetLength[i].SiteAddress !== this.assetLength[i + 1].SiteAddress) {
              return this.assetLength[i].SiteAddress;
            }
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.assetDataSource.filter = this.searchKey.trim().toLowerCase();

          if (this.assetDataSource.paginator) {
            this.assetDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "searchClear",
        value: function searchClear() {
          this.searchKey = '';
          this.applyFilter();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);

      return ContractDetailComponent;
    }();

    ContractDetailComponent.ctorParameters = function () {
      return [{
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])], ContractDetailComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], ContractDetailComponent.prototype, "sort", void 0);
    ContractDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contract-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contract-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/contracts/contract-detail/contract-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contract-detail.component.css */
      "./src/app/manage-assets/contracts/contract-detail/contract-detail.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ContractDetailComponent);
    /***/
  },

  /***/
  "./src/app/manage-assets/contracts/contracts.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/manage-assets/contracts/contracts.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageAssetsContractsContractsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edit-items-container {\n  margin-right: 20px;\n}\n\n.btn {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.btn:click,\n.btn:hover,\n.btn:focused,\n.btn:active,\n.btn:visited {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.table-container {\n  margin-right: 30px;\n  }\n\ntable {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  }\n\nth {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\nth,td {\n    font-size: medium;\n    text-align: center !important;\n  }\n\nth, td {\n    border: 1px solid black;\n    padding: 15px;\n    text-align: left;\n  }\n\ntable {\n    border-collapse: collapse;\n  }\n\ntr:nth-child(even) {\n    background-color: #e6e6e6;\n  }\n\ntr:nth-child(odd) {\n    background-color:   white;\n  }\n\n.mattable-container {\n    width: 94%;\n    margin-bottom: 50px;\n  }\n\n.mat-focused .mat-form-field-label {\n    color: rgb(230, 92, 0) !important;\n  }\n\n.mat-form-field-ripple {\n    background-color: rgb(230, 92, 0) !important;\n  }\n\n.search-div {\n    margin: 10px;\n  }\n\n.search-form-field {\n    width: 94%;\n    margin-left: 10px;\n    padding:  5px 10px;\n    background-color: #e6e6e6;\n    border-radius: 5px;\n  }\n\n/* .search-form-field div.mat-form-field-underline {\n    display: none;\n  } */\n\n.search-form-field button {\n    height: 32px;\n    width: 32px;\n    border-radius: 8px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFzc2V0cy9jb250cmFjdHMvY29udHJhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLHdDQUF3QztBQUMxQzs7QUFFQTs7Ozs7RUFLRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLDZCQUE2QjtFQUMvQjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7QUFFQTtJQUNFLDRDQUE0QztFQUM5Qzs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0FBRUE7O0tBRUc7O0FBRUg7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1hc3NldHMvY29udHJhY3RzL2NvbnRyYWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtaXRlbXMtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cblxuLmJ0bjpjbGljayxcbi5idG46aG92ZXIsXG4uYnRuOmZvY3VzZWQsXG4uYnRuOmFjdGl2ZSxcbi5idG46dmlzaXRlZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICB9XG5cbiAgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgdGgsdGQge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgfVxuXG4gIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIHdoaXRlO1xuICB9XG5cbiAgLm1hdHRhYmxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2VhcmNoLWRpdiB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG5cbiAgLnNlYXJjaC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6ICA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gIC8qIC5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9ICovXG5cbiAgLnNlYXJjaC1mb3JtLWZpZWxkIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/manage-assets/contracts/contracts.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/manage-assets/contracts/contracts.component.ts ***!
    \****************************************************************/

  /*! exports provided: ContractsComponent */

  /***/
  function srcAppManageAssetsContractsContractsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContractsComponent", function () {
      return ContractsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");

    var ContractsComponent =
    /*#__PURE__*/
    function () {
      function ContractsComponent(filter, authserv) {
        var _this49 = this;

        _classCallCheck(this, ContractsComponent);

        this.filter = filter;
        this.authserv = authserv;
        this.displayedColumns = ['Contract#', 'Contract Name', 'Start Date', 'Renewal Date', 'Customer', 'Status'];
        this.authserv.currentUser.subscribe(function (name) {
          _this49.currentProfile = name;
        });
      }

      _createClass(ContractsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPartners();
          this.getContracts(); // this.getCompanies();
        }
      }, {
        key: "getPartners",
        value: function getPartners() {
          var _this50 = this;

          this.filter.getPartners().subscribe(function (returnedPartners) {
            return _this50.partnerArr = returnedPartners;
          });
        }
      }, {
        key: "getCompanies",
        value: function getCompanies() {
          var _this51 = this;

          this.filter.customerFilter(this.currentProfile).subscribe(function (companies) {
            _this51.company = companies;
          });
        }
      }, {
        key: "filterPartner",
        value: function filterPartner(partner) {
          return this.partnerArr.find(function (company) {
            return company.CompanyName === partner;
          });
        }
      }, {
        key: "getContracts",
        value: function getContracts() {
          var _this52 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partConFilter(this.currentProfile).subscribe(function (returnedContracts) {
              _this52.contractDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](returnedContracts);
              _this52.contractDataSource.sort = _this52.sort;
              _this52.contractDataSource.paginator = _this52.paginator;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
            this.filter.custConFilter(this.currentProfile).subscribe(function (returnedContracts) {
              _this52.contractDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](returnedContracts);
              _this52.contractDataSource.sort = _this52.sort;
              _this52.contractDataSource.paginator = _this52.paginator;
            });
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.contractDataSource.filter = this.searchKey.trim().toLowerCase();

          if (this.contractDataSource.paginator) {
            this.contractDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "searchClear",
        value: function searchClear() {
          this.searchKey = '';
          this.applyFilter();
        }
      }]);

      return ContractsComponent;
    }();

    ContractsComponent.ctorParameters = function () {
      return [{
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__["ApifilterService"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])], ContractsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])], ContractsComponent.prototype, "sort", void 0);
    ContractsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contracts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contracts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/contracts/contracts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contracts.component.css */
      "./src/app/manage-assets/contracts/contracts.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__["ApifilterService"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], ContractsComponent);
    /***/
  },

  /***/
  "./src/app/manage-assets/lists/lists.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/manage-assets/lists/lists.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageAssetsListsListsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-container {\n  border-color: black;\n  border-style: solid;\n  padding: 15px;\n  border-radius: 4px;\n}\n\n.title, .assetRef {\n  width: 250px;\n}\n\n.d-flex {\n  margin-right: 20px;\n}\n\n.btn {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.btn:click,\n.btn:hover,\n.btn:focused,\n.btn:active,\n.btn:visited {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\ntextarea {\n  outline: none !important;\n  box-shadow: none;\n}\n\n.table-container {\n  margin-right: 30px;\n}\n\ntable {\n  border: 3px solid black;\n}\n\nth {\n  background-color: black;\n  color: white;\n  border-color: white;\n}\n\nth, td {\n  border: 1px solid black;\n  padding: 15px;\n  text-align: left;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ntr:nth-child(even) {\n  background-color: #e6e6e6;\n}\n\ntr:nth-child(odd) {\n  background-color:   white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFzc2V0cy9saXN0cy9saXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRDQUE0QztFQUM1Qyx3Q0FBd0M7QUFDMUM7O0FBRUE7Ozs7O0VBS0UsWUFBWTtFQUNaLDRDQUE0QztFQUM1Qyx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1hc3NldHMvbGlzdHMvbGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnRpdGxlLCAuYXNzZXRSZWYge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5kLWZsZXgge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xufVxuXG4uYnRuOmNsaWNrLFxuLmJ0bjpob3Zlcixcbi5idG46Zm9jdXNlZCxcbi5idG46YWN0aXZlLFxuLmJ0bjp2aXNpdGVkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxudGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIHdoaXRlO1xufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/manage-assets/lists/lists.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/manage-assets/lists/lists.component.ts ***!
    \********************************************************/

  /*! exports provided: ListsComponent */

  /***/
  function srcAppManageAssetsListsListsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListsComponent", function () {
      return ListsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ListsComponent =
    /*#__PURE__*/
    function () {
      function ListsComponent() {
        _classCallCheck(this, ListsComponent);
      }

      _createClass(ListsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListsComponent;
    }();

    ListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lists',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lists.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/lists/lists.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lists.component.css */
      "./src/app/manage-assets/lists/lists.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ListsComponent);
    /***/
  },

  /***/
  "./src/app/manage-assets/manage-assets.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/manage-assets/manage-assets.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageAssetsManageAssetsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title, .assetRef {\n  width: 250px;\n}\n\n.edit-items-container {\n  margin-right: 20px;\n}\n\n.btn {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.btn:click,\n.btn:hover,\n.btn:focused,\n.btn:active,\n.btn:visited {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.table-container {\nmargin-right: 30px;\n}\n\ntable {\n  border: solid black;\n  border-radius: 8px !important;\n  -moz-border-radius: 8px;\n  border-collapse: separate;\n}\n\nth {\n  background-color: black;\n  color: white;\n  border-color: white;\n}\n\nth,td {\n  font-size: medium;\n  text-align: center !important;\n}\n\nth, td {\n  border: 1px solid black;\n  padding: 15px;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ntr:nth-child(even) {\n  background-color: #e6e6e6;\n}\n\ntr:nth-child(odd) {\n  background-color:   white;\n}\n\n.mattable-container {\n  width: 94%;\n  margin-bottom: 50px;\n}\n\n.mat-focused .mat-form-field-label {\n  color: rgb(230, 92, 0) !important;\n}\n\n.mat-form-field-ripple {\n  background-color: rgb(230, 92, 0) !important;\n}\n\n.search-div {\n  margin: 10px;\n}\n\n.search-form-field {\n  width: 94%;\n  margin-left: 10px;\n  padding:  5px 10px;\n  background-color: #e6e6e6;\n  border-radius: 5px;\n}\n\n/* .search-form-field div.mat-form-field-underline {\n  display: none;\n} */\n\n.search-form-field button {\n  height: 32px;\n  width: 32px;\n  border-radius: 8px;\n}\n\n/* mat-table {\n  border-radius: 8px;\n}\n\nmat-table {\n  border: solid black;\n  border-radius: 8px !important;\n  -moz-border-radius: 8px;\n  border-collapse: separate;\n} */\n\n/* mat-header-cel {\n  background-color: black;\n  color: white;\n  border-color: white;\n}\n\nmat-header-cell, mat-cell {\n  border: 1px solid black;\n  padding: 15px;\n  text-align: left;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFzc2V0cy9tYW5hZ2UtYXNzZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLHdDQUF3QztBQUMxQzs7QUFFQTs7Ozs7RUFLRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLHdDQUF3QztBQUMxQzs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUNBOzs7Ozs7Ozs7R0FTRzs7QUFFSDs7Ozs7Ozs7OztHQVVHIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLWFzc2V0cy9tYW5hZ2UtYXNzZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUsIC5hc3NldFJlZiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmVkaXQtaXRlbXMtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cblxuLmJ0bjpjbGljayxcbi5idG46aG92ZXIsXG4uYnRuOmZvY3VzZWQsXG4uYnRuOmFjdGl2ZSxcbi5idG46dmlzaXRlZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xubWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG50aCx0ZCB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxudGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIHdoaXRlO1xufVxuXG4ubWF0dGFibGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWRpdiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6ICA1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKiAuc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59ICovXG5cbi5zZWFyY2gtZm9ybS1maWVsZCBidXR0b24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4vKiBtYXQtdGFibGUge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbm1hdC10YWJsZSB7XG4gIGJvcmRlcjogc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn0gKi9cblxuLyogbWF0LWhlYWRlci1jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtaGVhZGVyLWNlbGwsIG1hdC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59ICovXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/manage-assets/manage-assets.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/manage-assets/manage-assets.component.ts ***!
    \**********************************************************/

  /*! exports provided: ManageAssetsComponent */

  /***/
  function srcAppManageAssetsManageAssetsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageAssetsComponent", function () {
      return ManageAssetsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ManageAssetsComponent =
    /*#__PURE__*/
    function () {
      function ManageAssetsComponent(filter, authserv, route, router) {
        var _this53 = this;

        _classCallCheck(this, ManageAssetsComponent);

        this.filter = filter;
        this.authserv = authserv;
        this.route = route;
        this.router = router;
        this.displayedColumns = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
        this.authserv.currentUser.subscribe(function (name) {
          _this53.filteredProfile = name;
        });
      }

      _createClass(ManageAssetsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPartners();
          this.getAssets();
        }
      }, {
        key: "getPartners",
        value: function getPartners() {
          var _this54 = this;

          this.filter.getPartners().subscribe(function (returnedPartners) {
            return _this54.partnerArr = returnedPartners;
          });
        }
      }, {
        key: "filterPartner",
        value: function filterPartner(partner) {
          return this.partnerArr.find(function (company) {
            return company.CompanyName === partner;
          });
        }
      }, {
        key: "getAssets",
        value: function getAssets() {
          var _this55 = this;

          if (this.filterPartner(this.filteredProfile.partner)) {
            this.filter.partAssetsFilter(this.filteredProfile).subscribe(function (returnedAssets) {
              _this55.assetLength = returnedAssets;
              _this55.assetDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](returnedAssets);
              _this55.assetDataSource.sort = _this55.sort;
              _this55.assetDataSource.paginator = _this55.paginator;
            });
          } else if (this.filterPartner(this.filteredProfile.partner) === undefined) {
            this.filter.custAssetsFilter(this.filteredProfile).subscribe(function (returnedAssetLength) {
              _this55.assetLength = returnedAssetLength;
              _this55.assetDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](returnedAssetLength);
              _this55.assetDataSource.sort = _this55.sort;
              _this55.assetDataSource.paginator = _this55.paginator;
            });
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.assetDataSource.filter = this.searchKey.trim().toLowerCase();

          if (this.assetDataSource.paginator) {
            this.assetDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "searchClear",
        value: function searchClear() {
          this.searchKey = '';
          this.applyFilter();
        }
      }]);

      return ManageAssetsComponent;
    }();

    ManageAssetsComponent.ctorParameters = function () {
      return [{
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_3__["ApifilterService"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])], ManageAssetsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], ManageAssetsComponent.prototype, "sort", void 0);
    ManageAssetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-assets',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-assets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/manage-assets.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-assets.component.css */
      "./src/app/manage-assets/manage-assets.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apifilter_service__WEBPACK_IMPORTED_MODULE_3__["ApifilterService"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ManageAssetsComponent);
    /***/
  },

  /***/
  "./src/app/manage-assets/services/api-call.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/manage-assets/services/api-call.service.ts ***!
    \************************************************************/

  /*! exports provided: ApiCallService */

  /***/
  function srcAppManageAssetsServicesApiCallServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiCallService", function () {
      return ApiCallService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiCallService =
    /*#__PURE__*/
    function () {
      function ApiCallService(http) {
        _classCallCheck(this, ApiCallService);

        this.http = http;
        this.postTicket = 'https://n1sharmonypull.azurewebsites.net/api/MakeHamonyQuote?code=PJLcheEaYAITwiQ2Juxi0PBHJp8PZJZgwAAA03n9rbBbqwJ2m4gRJw==';
        this.getTicket = 'https://n1sharmonypull.azurewebsites.net/api/HttpTrigger1?code=lsPvad3uQA6s/pe1imbqoK0egnysVrGlsZXvaFsZ1jc69X6OdKQHcw==';
        this.oldgetAsset = 'https://n1sharmonypull.azurewebsites.net/api/AssetsPull?code=qQXwJm1YBabl4J8QlK6a2n2/JpY/mTacr66EYRdsZ2i3RfUkAucX4g==';
        this.getassetUrl = 'https://harmonyprodpartnersone.azurewebsites.net/api/AssetsByPartner';
        this.getassetFilter = '?code=7/NKrYdcf8OCvktozIiDED7X2KaMUQrvv7AkMQQKPeMPATj3aGTP6Q==';
        this.getAsset = 'getassetUrl + getassetFilter';
      }

      _createClass(ApiCallService, [{
        key: "getTickets",
        value: function getTickets() {
          return this.http.get(this.getTicket);
        }
      }, {
        key: "addTicket",
        value: function addTicket(ticket) {
          return this.http.post(this.postTicket, ticket);
        }
      }, {
        key: "getAssets",
        value: function getAssets() {
          return this.http.get(this.getAsset);
        }
      }]);

      return ApiCallService;
    }();

    ApiCallService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiCallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiCallService); // module.exports =  function (context, req) {
    //   var request = require('request');
    //   var baseAPIKey = '?api_key=81756df42a7f4766b58a4523357a8ed9';
    //   if (req.body.TicketType === "Quote") {
    //      var baseUrl = 'https://nasupporttest.harmonypsa.com/webapi/v1/tickets/createticket';
    //       var OutData = {
    //           "Title": req.body.Title,
    //           "Description": req.body.Description,
    //           "CustomerNameOrId": req.body.CustomerNameOrId,
    //           "AssetRefOrId": req.body.AssetRefOrId,
    //           "ContactEmailOrId": req.body.ContactEmailOrId,
    //           "VisibleToCustomer": true,
    //           "TicketTypeNameOrId": req.body.TicketTypeNameOrId,
    //           "TicketCategoryNameOrId": req.body.TicketCategoryNameOrId
    //           };
    //       }
    //   if (req.body.TicketType === "Add Comment") {
    //      var baseUrl = 'https://nasupporttest.harmonypsa.com/webapi/v1/tickets/addcomment';
    //      }
    //       var OutData = {
    //           "TicketRefOrId": req.body.TicketRefOrId,
    //           "Comment": req.body.Comment
    //       };
    //   var wholeUrl = baseUrl + baseAPIKey ;
    //   var OutOptions = {
    //       method: 'post',
    //       body: OutData,
    //       json: true,
    //       url: wholeUrl
    //       };
    //   request(OutOptions, function (error, response, body) {
    //       if (!error && response.statusCode == 200) {
    //             context.res.body = {body};
    //       }
    //       else {
    //            context.res.body = {body};
    //       }
    //       context.done();
    //   }

    /***/
  },

  /***/
  "./src/app/manage-assets/tickets/ticket-detail/ticket-detail.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/manage-assets/tickets/ticket-detail/ticket-detail.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageAssetsTicketsTicketDetailTicketDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  padding: 15px;\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card-header {\n  padding-bottom: 0;\n}\n\n.tab-wrapper {\n  width: 100%;\n}\n\n.detail {\n  width: 100%;\n}\n\nlabel {\n  width: 80%;\n}\n\ninput {\n  width: 100%;\n  height: 35px;\n  outline: none !important;\n  box-shadow:none;\n  border-style: solid;\n  padding: auto;\n  background: transparent;\n  border: 0;\n  border-bottom: solid 2px #4d4d4d;\n  font-size: 18px;\n}\n\n.table-container {\n  margin-right: 30px;\n  }\n\ntable {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  }\n\nth {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\nth,td {\n    font-size: medium;\n    text-align: center !important;\n  }\n\nth, td {\n    border: 1px solid black;\n    padding: 15px;\n    text-align: left;\n  }\n\ntable {\n    border-collapse: collapse;\n  }\n\ntr:nth-child(even) {\n    background-color: #e6e6e6;\n  }\n\ntr:nth-child(odd) {\n    background-color:   white;\n  }\n\n.mattable-container {\n    width: 94%;\n    margin-bottom: 50px;\n  }\n\n.mat-focused .mat-form-field-label {\n    color: rgb(230, 92, 0) !important;\n  }\n\n.mat-form-field-ripple {\n    background-color: rgb(230, 92, 0) !important;\n  }\n\n.search-div {\n    margin: 10px;\n  }\n\n.search-form-field {\n    width: 94%;\n    margin-left: 10px;\n    padding:  5px 10px;\n    background-color: #e6e6e6;\n    border-radius: 5px;\n  }\n\n/* .search-form-field div.mat-form-field-underline {\n    display: none;\n  } */\n\n.mat-focused .mat-form-field-label {\n    color: rgb(230, 92, 0) !important;\n}\n\n.search-form-field button {\n    height: 32px;\n    width: 32px;\n    border-radius: 8px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFzc2V0cy90aWNrZXRzL3RpY2tldC1kZXRhaWwvdGlja2V0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBSUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsNkJBQTZCO0VBQy9COztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsaUNBQWlDO0VBQ25DOztBQUVBO0lBQ0UsNENBQTRDO0VBQzlDOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7QUFFQTs7S0FFRzs7QUFFSDtJQUNFLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLWFzc2V0cy90aWNrZXRzL3RpY2tldC1kZXRhaWwvdGlja2V0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5cblxuLnRhYi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxubGFiZWwge1xuICB3aWR0aDogODAlO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzpub25lO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwYWRkaW5nOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzRkNGQ0ZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgfVxuXG4gIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHRoLHRkIHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIH1cblxuICB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICB3aGl0ZTtcbiAgfVxuXG4gIC5tYXR0YWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlYXJjaC1kaXYge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiAgNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAvKiAuc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/manage-assets/tickets/ticket-detail/ticket-detail.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/manage-assets/tickets/ticket-detail/ticket-detail.component.ts ***!
    \********************************************************************************/

  /*! exports provided: TicketDetailComponent */

  /***/
  function srcAppManageAssetsTicketsTicketDetailTicketDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketDetailComponent", function () {
      return TicketDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var TicketDetailComponent =
    /*#__PURE__*/
    function () {
      function TicketDetailComponent(filter, location, route) {
        _classCallCheck(this, TicketDetailComponent);

        this.filter = filter;
        this.location = location;
        this.route = route;
        this.assetdisplayedColumns = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
      }

      _createClass(TicketDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getItems();
        }
      }, {
        key: "getItems",
        value: function getItems() {
          var _this56 = this;

          var refNumber = this.route.snapshot.paramMap.get('refNumber');
          this.filter.ticketRefFilter(refNumber).subscribe(function (returnedTickets) {
            _this56.ticket = returnedTickets;

            _this56.filter.assetsBySerial(_this56.ticket[0].assetId).subscribe(function (returnedAsset) {
              _this56.assetDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](returnedAsset);
              _this56.assetDataSource.sort = _this56.sort;
              _this56.assetDataSource.paginator = _this56.paginator;
            });
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.assetDataSource.filter = this.searchKey.trim().toLowerCase();

          if (this.assetDataSource.paginator) {
            this.assetDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "searchClear",
        value: function searchClear() {
          this.searchKey = '';
          this.applyFilter();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);

      return TicketDetailComponent;
    }();

    TicketDetailComponent.ctorParameters = function () {
      return [{
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__["ApifilterService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])], TicketDetailComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], TicketDetailComponent.prototype, "sort", void 0);
    TicketDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ticket-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ticket-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/tickets/ticket-detail/ticket-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ticket-detail.component.css */
      "./src/app/manage-assets/tickets/ticket-detail/ticket-detail.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apifilter_service__WEBPACK_IMPORTED_MODULE_2__["ApifilterService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], TicketDetailComponent);
    /***/
  },

  /***/
  "./src/app/manage-assets/tickets/tickets.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/manage-assets/tickets/tickets.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageAssetsTicketsTicketsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-container {\n  border-color: black;\n  border-style: solid;\n  padding: 15px;\n  border-radius: 4px;\n}\n\n.card {\n  border: none;\n}\n\n.title, .assetRef {\n  width: 250px;\n}\n\n.createItem{\n  margin-right: 30px;\n}\n\ntextarea {\n  outline: none !important;\n  box-shadow: none;\n}\n\n.btn {\n  margin: 10px 10px 10px 0px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.btn:click,\n.btn:hover,\n.btn:focused,\n.btn:active,\n.btn:visited {\n  margin: 10px 10px 10px 0px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.table-container {\n  margin-right: 30px;\n  }\n\ntable {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  }\n\nth {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\nth,td {\n    font-size: medium;\n    text-align: center !important;\n  }\n\nth, td {\n    border: 1px solid black;\n    padding: 15px;\n    text-align: left;\n  }\n\ntable {\n    border-collapse: collapse;\n  }\n\ntr:nth-child(even) {\n    background-color: #e6e6e6;\n  }\n\ntr:nth-child(odd) {\n    background-color:   white;\n  }\n\n.mattable-container {\n    width: 94%;\n    margin-bottom: 50px;\n  }\n\n.mat-focused .mat-form-field-label {\n    color: rgb(230, 92, 0) !important;\n  }\n\n.mat-form-field-ripple {\n    background-color: rgb(230, 92, 0) !important;\n  }\n\n.search-div {\n    margin: 10px;\n  }\n\n.search-form-field {\n    width: 94%;\n    margin-left: 10px;\n    padding:  5px 10px;\n    background-color: #e6e6e6;\n    border-radius: 5px;\n  }\n\n/* .search-form-field div.mat-form-field-underline {\n    display: none;\n  } */\n\n.search-form-field button {\n    height: 32px;\n    width: 32px;\n    border-radius: 8px;\n  }\n\n/* mat-table {\n    border-radius: 8px;\n  }\n\n  mat-table {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  } */\n\n/* mat-header-cel {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\n  mat-header-cell, mat-cell {\n    border: 1px solid black;\n    padding: 15px;\n    text-align: left;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFzc2V0cy90aWNrZXRzL3RpY2tldHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQztFQUNDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNENBQTRDO0VBQzVDLHdDQUF3QztBQUMxQzs7QUFFQTs7Ozs7RUFLRSwwQkFBMEI7RUFDMUIsNENBQTRDO0VBQzVDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLDZCQUE2QjtFQUMvQjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7QUFFQTtJQUNFLDRDQUE0QztFQUM5Qzs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0FBRUE7O0tBRUc7O0FBRUg7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7QUFDQTs7Ozs7Ozs7O0tBU0c7O0FBRUg7Ozs7Ozs7Ozs7S0FVRyIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1hc3NldHMvdGlja2V0cy90aWNrZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udGl0bGUsIC5hc3NldFJlZiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuIC5jcmVhdGVJdGVte1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xufVxuXG4uYnRuOmNsaWNrLFxuLmJ0bjpob3Zlcixcbi5idG46Zm9jdXNlZCxcbi5idG46YWN0aXZlLFxuLmJ0bjp2aXNpdGVkIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgfVxuXG4gIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHRoLHRkIHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIH1cblxuICB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICB3aGl0ZTtcbiAgfVxuXG4gIC5tYXR0YWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlYXJjaC1kaXYge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiAgNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAvKiAuc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCBidXR0b24ge1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgLyogbWF0LXRhYmxlIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuICBtYXQtdGFibGUge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgfSAqL1xuXG4gIC8qIG1hdC1oZWFkZXItY2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIG1hdC1oZWFkZXItY2VsbCwgbWF0LWNlbGwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfSAqL1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/manage-assets/tickets/tickets.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/manage-assets/tickets/tickets.component.ts ***!
    \************************************************************/

  /*! exports provided: TicketsComponent */

  /***/
  function srcAppManageAssetsTicketsTicketsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketsComponent", function () {
      return TicketsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _services_api_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/api-call.service */
    "./src/app/manage-assets/services/api-call.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var TicketsComponent =
    /*#__PURE__*/
    function () {
      function TicketsComponent(api, formBuilder, authenticationService, filter) {
        var _this57 = this;

        _classCallCheck(this, TicketsComponent);

        this.api = api;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.filter = filter;
        this.displayedColumns = ['Case#', 'Name', 'Status', 'Description', 'Schedule', 'Asset ID', 'Customer', 'Update Date', 'Update Since'];
        this.authenticationService.currentUser.subscribe(function (typeName) {
          _this57.currentProfile = typeName;
        });
      }

      _createClass(TicketsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ticketForm = this.formBuilder.group({
            Title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            CustomerNameOrId: [this.authenticationService.currentUserValue.partner, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            TicketType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            AssetId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            TicketCategoryNameOrId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            TicketTypeNameOrId: [this.authenticationService.currentUserValue.partner + ' Quotes', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.getPartners();
          this.getTickets();
        }
      }, {
        key: "createTicket",
        value: function createTicket() {
          var _this58 = this;

          this.api.addTicket(this.ticketForm.value).subscribe(function (ticket) {
            var ticketData = _this58.ticketForm.value;
            ticketData = ticket;
          });
        }
      }, {
        key: "getPartners",
        value: function getPartners() {
          var _this59 = this;

          this.filter.getPartners().subscribe(function (returnedPartners) {
            return _this59.partnerArr = returnedPartners;
          });
        }
      }, {
        key: "filterPartner",
        value: function filterPartner(partner) {
          return this.partnerArr.find(function (company) {
            return company.CompanyName === partner;
          });
        }
      }, {
        key: "getTickets",
        value: function getTickets() {
          var _this60 = this;

          if (this.currentProfile.companypartner === 'Partner') {
            this.filter.partTicketsFilter(this.currentProfile).subscribe(function (returnedTickets) {
              _this60.testin = 'in the loop';
              _this60.ticketLength = returnedTickets;
              _this60.ticketDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this60.ticketLength);
              _this60.ticketDataSource.sort = _this60.sort;
              _this60.ticketDataSource.paginator = _this60.paginator;
            });
          } else {
            this.filter.ticketsFilter(this.currentProfile.company).subscribe(function (returnedTickets) {
              _this60.testin = 'Completely skipped';
              _this60.ticketLength = returnedTickets;
              _this60.ticketDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](returnedTickets);
              _this60.ticketDataSource.sort = _this60.sort;
              _this60.ticketDataSource.paginator = _this60.paginator;
            });
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.ticketDataSource.filter = this.searchKey.trim().toLowerCase();

          if (this.ticketDataSource.paginator) {
            this.ticketDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "searchClear",
        value: function searchClear() {
          this.searchKey = '';
          this.applyFilter();
        }
      }, {
        key: "getTicketTypeName",
        value: function getTicketTypeName() {
          if (this.authenticationService.currentUserValue.partner === this.currentProfile.partner) {
            return this.currentProfile.partner + ' Quotes';
          } else {
            return 'Support Quotes';
          }
        }
      }]);

      return TicketsComponent;
    }();

    TicketsComponent.ctorParameters = function () {
      return [{
        type: _services_api_call_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_3__["ApifilterService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], TicketsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])], TicketsComponent.prototype, "sort", void 0);
    TicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tickets',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tickets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-assets/tickets/tickets.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tickets.component.css */
      "./src/app/manage-assets/tickets/tickets.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_call_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _services_apifilter_service__WEBPACK_IMPORTED_MODULE_3__["ApifilterService"]])], TicketsComponent);
    /***/
  },

  /***/
  "./src/app/north/north.component.css":
  /*!*******************************************!*\
    !*** ./src/app/north/north.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppNorthNorthComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.col-md {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n\n.wrapper {\n  margin: 0 !important;\n  padding-top: 20px;\n}\n\n.container-fluid {\n  background-color: #d9d9d9;\n  margin: 0;\n  padding: 0;\n  margin-top: 10px;\n}\n\n.card {\n  border-radius: 8px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15), 0 0 20px 0 rgba(0, 0, 0, 0.12);\n}\n\n.total-container {\n  background-color: white;\n  border-radius: 8px;\n  margin: 10px;\n  font-size: 32px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15), 0 0 20px 0 rgba(0, 0, 0, 0.12);\n  color: black;\n}\n\n/* .contract-content:hover {\n  color: orange;\n} */\n\n/* .contracts-container:hover{\n  opacity:1;\n} */\n\na {\n  text-decoration: none;\n}\n\n.contract-content {\n  overflow: hidden;\n  color: black;\n}\n\n.contracts-container {\n  padding-right: 0;\n  overflow: hidden;\n}\n\n.contracts-container img{\n  opacity: .2;\n  position: relative;\n  left: 50px;\n  top: 10px;\n}\n\n.assets-container{\n  padding-right: 0;\n}\n\n.assets-content {\n  overflow: hidden;\n  Padding-left: 15;\n  padding-right: none !important;\n  color: black;\n}\n\n.assets-content img{\n  opacity: .2;\n  position: relative;\n  top: 10px;\n  left: 40px;\n}\n\n.tickets-container{\n  padding-right: 0;\n}\n\n.tickets-content {\n  overflow: hidden;\n  Padding-left: 15;\n  padding-right: none !important;\n  color: black;\n}\n\n.tickets-content img{\n  opacity: .2;\n  position: relative;\n  top: 20px;\n  left: 50px;\n}\n\n.companies-container{\n  padding-right: 0;\n}\n\n.companies-content {\n  overflow: hidden;\n  Padding-left: 15;\n  padding-right: 0;\n  color: black;\n}\n\n.companies-content img{\n  opacity: .2;\n  position: relative;\n  top: 10px;\n  left: 55px;\n}\n\n.users-container {\n  padding-right: 0;\n}\n\n.users-content {\n  overflow: hidden;\n  Padding-left: 15;\n  color: black;\n}\n\n.users-content img{\n  opacity: .2;\n  position: relative;\n  top: 20px;\n  left: 50px;\n}\n\n.locations-container {\n  Padding-right: 0;\n}\n\n.locations-content {\n  overflow: hidden;\n  color: black;\n}\n\n.locations-content img{\n  opacity: .2;\n  position: relative;\n  top: 20px;\n  left: 60px;\n}\n\n.contracts-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.badge {\n  width: 15px;\n  height: 15px;\n  color: white;\n}\n\n.badge-table {\n  width: 30px !important;\n  padding-bottom: 3px;\n}\n\np {\n  display: none;\n}\n\n.badge-now {\n  background-color: red;\n  text-align: center;\n}\n\n.badge-15 {\n  background-color: purple;\n}\n\n.badge-30 {\n  background-color: orange;\n}\n\n.badge-60 {\n  background-color: teal;\n}\n\n.badge-90 {\n  background-color: blue;\n}\n\n.badge-plus {\n  background-color: green;\n}\n\n.assets-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.tickets-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.view-wrapper {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9ydGgvbm9ydGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUVBQXlFO0VBQ3pFLFlBQVk7QUFDZDs7QUFFQTs7R0FFRzs7QUFFSDs7R0FFRzs7QUFFSDtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL25vcnRoL25vcnRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb2wtbWQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi50b3RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiAuY29udHJhY3QtY29udGVudDpob3ZlciB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59ICovXG5cbi8qIC5jb250cmFjdHMtY29udGFpbmVyOmhvdmVye1xuICBvcGFjaXR5OjE7XG59ICovXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250cmFjdC1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29udHJhY3RzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250cmFjdHMtY29udGFpbmVyIGltZ3tcbiAgb3BhY2l0eTogLjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTBweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uYXNzZXRzLWNvbnRhaW5lcntcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLmFzc2V0cy1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgUGFkZGluZy1sZWZ0OiAxNTtcbiAgcGFkZGluZy1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hc3NldHMtY29udGVudCBpbWd7XG4gIG9wYWNpdHk6IC4yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNDBweDtcbn1cblxuLnRpY2tldHMtY29udGFpbmVye1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udGlja2V0cy1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgUGFkZGluZy1sZWZ0OiAxNTtcbiAgcGFkZGluZy1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50aWNrZXRzLWNvbnRlbnQgaW1ne1xuICBvcGFjaXR5OiAuMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbi5jb21wYW5pZXMtY29udGFpbmVye1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4uY29tcGFuaWVzLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBQYWRkaW5nLWxlZnQ6IDE1O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb21wYW5pZXMtY29udGVudCBpbWd7XG4gIG9wYWNpdHk6IC4yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNTVweDtcbn1cblxuLnVzZXJzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi51c2Vycy1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgUGFkZGluZy1sZWZ0OiAxNTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXNlcnMtY29udGVudCBpbWd7XG4gIG9wYWNpdHk6IC4yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNTBweDtcbn1cblxuLmxvY2F0aW9ucy1jb250YWluZXIge1xuICBQYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubG9jYXRpb25zLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sb2NhdGlvbnMtY29udGVudCBpbWd7XG4gIG9wYWNpdHk6IC4yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNjBweDtcbn1cblxuXG4uY29udHJhY3RzLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYmFkZ2Uge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWRnZS10YWJsZSB7XG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbnAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmFkZ2Utbm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWRnZS0xNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbn1cblxuLmJhZGdlLTMwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uYmFkZ2UtNjAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xufVxuXG4uYmFkZ2UtOTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uYmFkZ2UtcGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uYXNzZXRzLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4udGlja2V0cy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnZpZXctd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/north/north.component.ts":
  /*!******************************************!*\
    !*** ./src/app/north/north.component.ts ***!
    \******************************************/

  /*! exports provided: NorthComponent */

  /***/
  function srcAppNorthNorthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NorthComponent", function () {
      return NorthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _login_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/services/profile.service */
    "./src/app/login/services/profile.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../manage-assets/services/api-call.service */
    "./src/app/manage-assets/services/api-call.service.ts");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");

    var NorthComponent =
    /*#__PURE__*/
    function () {
      function NorthComponent(authenticationService, profileService, api, filter) {
        var _this61 = this;

        _classCallCheck(this, NorthComponent);

        this.authenticationService = authenticationService;
        this.profileService = profileService;
        this.api = api;
        this.filter = filter;
        this.contractsData = [];
        this.assetsData = [];
        this.currentProfileSubscription = this.authenticationService.currentUser.subscribe(function (profile) {
          _this61.currentProfile = profile;
        });
      }

      _createClass(NorthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPartners();
          this.contractsChart();
          this.assetsChart();
          this.displayData();
          this.contractsCount();
          this.assetsCount();
          this.ticketsCount();
          this.companiesCount();
        } // ngOnDestroy() {
        //   this.currentProfileSubscription.unsubscribe();
        // }

      }, {
        key: "getPartners",
        value: function getPartners() {
          var _this62 = this;

          this.filter.getPartners().subscribe(function (returnedPartners) {
            return _this62.partnerArr = returnedPartners;
          });
        }
      }, {
        key: "filterPartner",
        value: function filterPartner(partner) {
          return this.partnerArr.find(function (company) {
            return company.CompanyName === partner;
          });
        }
      }, {
        key: "contractsCount",
        value: function contractsCount() {
          var _this63 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partConFilter(this.currentProfile).subscribe(function (returnedConLength) {
              return _this63.contractLength = returnedConLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
            this.filter.custConFilter(this.currentProfile).subscribe(function (returnedConLength) {
              return _this63.contractLength = returnedConLength;
            });
          }
        }
      }, {
        key: "assetsCount",
        value: function assetsCount() {
          var _this64 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partAssetsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this64.assetLength = returnedAssetLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
            this.filter.custAssetsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this64.assetLength = returnedAssetLength;
            });
          }
        }
      }, {
        key: "ticketsCount",
        value: function ticketsCount() {
          var _this65 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partTicketsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this65.ticketLength = returnedAssetLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {// this.filter.custAssetsFilter(this.currentProfile)
            // .subscribe(
            //   (returnedAssetLength: Assets[]) => this.assetLength = returnedAssetLength
            // );
          }
        }
      }, {
        key: "companiesCount",
        value: function companiesCount() {
          var _this66 = this;

          this.filter.customerFilter(this.currentProfile).subscribe(function (returnedCompanies) {
            _this66.companyLength = returnedCompanies;
          });
        }
      }, {
        key: "ticketsChart",
        value: function ticketsChart() {
          var _this67 = this;

          this.api.getTickets().subscribe(function (returnedTickets) {
            _this67.tickets = returnedTickets;
          });
        }
      }, {
        key: "displayData",
        value: function displayData() {
          var array = this.filter.partConFilter(this.currentProfile).subscribe(function (res) {
            // const price = res.map(res => res.AnnualValue);
            var length = Object.keys(res).map(function (key) {
              return [String(key), res[key]];
            });
            console.log(length); // console.log(price);
          });
        }
      }, {
        key: "getAssets",
        value: function getAssets() {
          var _this68 = this;

          this.api.getAssets().subscribe(function (returnedAssets) {
            _this68.assets = returnedAssets;
          });
        }
      }, {
        key: "contractsChart",
        value: function contractsChart() {
          var status = [];
          this.filter.partConFilter(this.currentProfile).subscribe(function (res) {
            // status.push(res.status);
            var length = Object.keys(res).map(function (key) {
              return [String(key), res[key]];
            });
            console.log(res); // console.log(res.status);
            // console.log(length);
          });
          this.contractsData = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"]('contracts', {
            type: 'pie',
            data: {
              labels: status,
              datasets: [{
                label: '# of Contracts',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
              }]
            },
            options: {}
          });
        }
      }, {
        key: "assetsChart",
        value: function assetsChart() {
          this.assetsData = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"]('assets', {
            type: 'pie',
            data: {
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
              }]
            },
            options: {}
          });
        } // deleteProfile(id: number) {
        //    this.profileService.delete(id).pipe(first()).subscribe(() => {
        //     this.loadAllUsers();
        //   });
        // }

      }, {
        key: "loadAllUsers",
        value: function loadAllUsers() {
          var _this69 = this;

          this.profileService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (profile) {
            _this69.profiles = profile;
          });
        }
      }]);

      return NorthComponent;
    }();

    NorthComponent.ctorParameters = function () {
      return [{
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _login_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }, {
        type: _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_6__["ApiCallService"]
      }, {
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_7__["ApifilterService"]
      }];
    };

    NorthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-north',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./north.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/north/north.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./north.component.css */
      "./src/app/north/north.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _login_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_6__["ApiCallService"], _services_apifilter_service__WEBPACK_IMPORTED_MODULE_7__["ApifilterService"]])], NorthComponent);
    /***/
  },

  /***/
  "./src/app/partner-list.ts":
  /*!*********************************!*\
    !*** ./src/app/partner-list.ts ***!
    \*********************************/

  /*! exports provided: PartnerList */

  /***/
  function srcAppPartnerListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartnerList", function () {
      return PartnerList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PartnerList = [{
      'AccountID': 'Part-001',
      'CompanyName': 'Noble1Solutions'
    }, {
      'AccountID': 'Part-002',
      'CompanyName': 'Barrister Global Services Network, Inc'
    }, {
      'AccountID': 'Part-003',
      'CompanyName': 'Big Data Supply Inc'
    }, {
      'AccountID': 'Part-004',
      'CompanyName': 'Covenant Data Solutions'
    }, {
      'AccountID': 'Part-005',
      'CompanyName': 'Encore Federal Solutions, LLC'
    }, {
      'AccountID': 'Part-006',
      'CompanyName': 'Enterasource, LLC'
    }, {
      'AccountID': 'Part-007',
      'CompanyName': 'Frontier Computer Corp'
    }, {
      'AccountID': 'Part-008',
      'CompanyName': 'n3rdParty'
    }, {
      'AccountID': 'Part-009',
      'CompanyName': 'North American Systems International'
    }, {
      'AccountID': 'Part-010',
      'CompanyName': 'Plurium Technologies'
    }, {
      'AccountID': 'Part-011',
      'CompanyName': 'Pro Network LLC'
    }, {
      'AccountID': 'Part-012',
      'CompanyName': 'Pyramid Technology Services, Inc'
    }, {
      'AccountID': 'Part-013',
      'CompanyName': 'Reliant Technology'
    }, {
      'AccountID': 'Part-014',
      'CompanyName': 'Relutech'
    }, {
      'AccountID': 'Part-015',
      'CompanyName': 'SPADAFY'
    }, {
      'AccountID': 'Part-016',
      'CompanyName': 'xByte Technologies'
    }, {
      'AccountID': 'Part-017',
      'CompanyName': 'Alucid Solutions'
    }, {
      'AccountID': 'Part-018',
      'CompanyName': 'B2X Global'
    }, {
      'AccountID': 'Part-019',
      'CompanyName': 'Bluestone Network Solutions'
    }, {
      'AccountID': 'Part-020',
      'CompanyName': 'Critical Systems'
    }, {
      'AccountID': 'Part-021',
      'CompanyName': 'CXTec'
    }, {
      'AccountID': 'Part-022',
      'CompanyName': 'Integrity'
    }, {
      'AccountID': 'Part-023',
      'CompanyName': 'International Systems Management Inc'
    }, {
      'AccountID': 'Part-024',
      'CompanyName': 'Integrated Service Partners'
    }, {
      'AccountID': 'Part-025',
      'CompanyName': 'IT Xchange Corp'
    }, {
      'AccountID': 'Part-026',
      'CompanyName': 'Integrated Technical Services (ITSco)'
    }, {
      'AccountID': 'Part-027',
      'CompanyName': 'Northland Systems, Inc'
    }, {
      'AccountID': 'Part-028',
      'CompanyName': 'Procurri'
    }, {
      'AccountID': 'Part-029',
      'CompanyName': 'Riverstone Technology LLC'
    }, {
      'AccountID': 'Part-030',
      'CompanyName': 'Scale Logic'
    }, {
      'AccountID': 'Part-031',
      'CompanyName': 'Summit Information Resources'
    }, {
      'AccountID': 'Part-032',
      'CompanyName': 'Sword & Shield - New Name - Avertium'
    }, {
      'AccountID': 'Part-033',
      'CompanyName': 'Verus Global'
    }, {
      'AccountID': 'Part-034',
      'CompanyName': 'Dynamic'
    }, {
      'AccountID': 'Part-035',
      'CompanyName': 'Georgia Computer'
    }, {
      'AccountID': 'Part-036',
      'CompanyName': 'Atlantix Global Systems'
    }, {
      'AccountID': 'Part-037',
      'CompanyName': 'Avnet'
    }, {
      'AccountID': 'Part-038',
      'CompanyName': 'Delta Computer Group'
    }, {
      'AccountID': 'Part-039',
      'CompanyName': 'Anova IT'
    }, {
      'AccountID': 'Part-040',
      'CompanyName': 'Mojo Systems'
    }, {
      'AccountID': 'Part-041',
      'CompanyName': 'neoRhino IT Solutions'
    }, {
      'AccountID': 'Part-042',
      'CompanyName': 'Ace IT Technologies, Inc'
    }, {
      'AccountID': 'Part-043',
      'CompanyName': 'Mega Monolithic Corp'
    }];
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);\n  margin-bottom: 30px;\n  font-size: 22px;\n}\n\n.card-header {\n  background-color: black;\n  color: white;\n}\n\ninput {\n  width: 45%;\n  height: 35px;\n  outline: none !important;\n  box-shadow:none;\n  border-style: solid;\n  padding: auto;\n  background: transparent;\n  border: 0;\n  border-bottom: solid 2px #4d4d4d;\n  font-size: 18px;\n}\n\n.checkbox {\n  width: auto !important;\n  height: auto !important;\n}\n\nbutton {\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RUFBd0U7RUFDeEUsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsd0NBQXdDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA0NSU7XG4gIGhlaWdodDogMzVweDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93Om5vbmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBhZGRpbmc6IGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjNGQ0ZDRkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jaGVja2JveCB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login/services/profile.service */
    "./src/app/login/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(authenticationService, formBuilder, profileService, router) {
        _classCallCheck(this, ProfileComponent);

        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.profileService = profileService;
        this.router = router;
        this.profiles = [];
        this.submitted = false;
      }

      _createClass(ProfileComponent, [{
        key: "changePartner",
        value: function changePartner() {
          if (this.authenticationService.currentUserValue.partner !== 'Noble1') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this70 = this;

          this.nameSubscription = this.authenticationService.currentUser.subscribe(function (name) {
            _this70.currentProfile = name;
          });
          this.profileForm = this.formBuilder.group({
            partner: [this.currentProfile.partner, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: [''],
            ticketingAlias: [''],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7)],
            conpass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7)],
            role: [this.currentProfile.partnerRole, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;
          var passmatch = false;

          if (this.profileForm.invalid) {
            return;
          }

          if (this.f.password.value !== this.f.conpass.value) {
            passmatch = false;
            return;
          } else if (this.f.password.value === this.f.conpass.value) {
            passmatch = true;
            this.profileService.update(this.profileForm.value);
            console.log('Successfully updated!');
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.profileForm.controls;
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/reliant-dash/reliant-dash.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/reliant-dash/reliant-dash.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReliantDashReliantDashComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.col-md {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n\n.wrapper {\n  margin: 0 !important;\n  padding-top: 20px;\n}\n\n.container-fluid {\n  background-color: #d9d9d9;\n  margin: 0;\n  padding: 0;\n  margin-top: 10px;\n}\n\n.total-container {\n  background-color: white;\n  border-radius: 8px;\n  margin: 15px;\n  font-size: 32px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15), 0 0 20px 0 rgba(0, 0, 0, 0.12);\n  color: black;\n}\n\na {\n  text-decoration: none;\n}\n\na .contract-length, .contract-label{\n  color: black;\n  text-decoration: none;\n }\n\n.contract-content {\n   overflow: hidden;\n   color: black;\n }\n\n.contracts-container {\n   padding-right: 0;\n   padding-bottom: 0;\n   overflow: hidden;\n }\n\n.contract-logo{\n   opacity: .2;\n   position: relative;\n   left: 20px;\n   top: 15px;\n }\n\na .asset-length, .asset-label{\n   color: black;\n   text-decoration: none;\n  }\n\n.asset-content {\n    overflow: hidden;\n    color: black;\n  }\n\n.assets-container {\n    padding-right: 0;\n    padding-bottom: 0;\n    overflow: hidden;\n  }\n\n.asset-logo{\n    opacity: .2;\n    position: relative;\n    left: 20px;\n    top: 15px;\n  }\n\na .ticket-length, .ticket-label{\n   color: black;\n   text-decoration: none;\n  }\n\n.ticket-content {\n    overflow: hidden;\n    color: black;\n  }\n\n.tickets-container {\n    padding-right: 0;\n    padding-bottom: 0;\n    overflow: hidden;\n  }\n\n.ticket-logo{\n    opacity: .2;\n    position: relative;\n    left: 20px;\n    top: 15px;\n  }\n\na .companies-length, .companies-label{\n   color: black;\n   text-decoration: none;\n  }\n\n.companies-content {\n    overflow: hidden;\n    color: black;\n  }\n\n.companies-container {\n    padding-right: 0;\n    padding-bottom: 0;\n    overflow: hidden;\n  }\n\n.users-container {\n  padding-right: 0;\n}\n\n.users-content {\n  overflow: hidden;\n  Padding-left: 15;\n  color: black;\n}\n\n.users-content img{\n  opacity: .2;\n  position: relative;\n  top: 20px;\n  left: 50px;\n}\n\n.locations-container {\n  Padding-right: 0;\n}\n\n.locations-content {\n  overflow: hidden;\n  color: black;\n}\n\n.locations-content img{\n  opacity: .2;\n  position: relative;\n  top: 20px;\n  left: 60px;\n}\n\n.contracts-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.badge {\n  width: 15px;\n  height: 15px;\n  color: white;\n}\n\n.badge-table {\n  width: 30px !important;\n  padding-bottom: 3px;\n}\n\np {\n  display: none;\n}\n\n.badge-now {\n  background-color: red;\n  text-align: center;\n}\n\n.badge-15 {\n  background-color: purple;\n}\n\n.badge-30 {\n  background-color: orange;\n}\n\n.badge-60 {\n  background-color: teal;\n}\n\n.badge-90 {\n  background-color: blue;\n}\n\n.badge-plus {\n  background-color: green;\n}\n\n.assets-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.tickets-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.view-wrapper {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVsaWFudC1kYXNoL3JlbGlhbnQtZGFzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHlFQUF5RTtFQUN6RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0NBQ3RCOztBQUVBO0dBQ0UsZ0JBQWdCO0dBQ2hCLFlBQVk7Q0FDZDs7QUFFQTtHQUNFLGdCQUFnQjtHQUNoQixpQkFBaUI7R0FDakIsZ0JBQWdCO0NBQ2xCOztBQUVBO0dBQ0UsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsU0FBUztDQUNYOztBQUVBO0dBQ0UsWUFBWTtHQUNaLHFCQUFxQjtFQUN0Qjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7QUFFRDtHQUNFLFlBQVk7R0FDWixxQkFBcUI7RUFDdEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0FBRUE7R0FDQyxZQUFZO0dBQ1oscUJBQXFCO0VBQ3RCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlbGlhbnQtZGFzaC9yZWxpYW50LWRhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbC1tZCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udG90YWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBmb250LXNpemU6IDMycHg7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYSAuY29udHJhY3QtbGVuZ3RoLCAuY29udHJhY3QtbGFiZWx7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuIH1cblxuIC5jb250cmFjdC1jb250ZW50IHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICBjb2xvcjogYmxhY2s7XG4gfVxuXG4gLmNvbnRyYWN0cy1jb250YWluZXIge1xuICAgcGFkZGluZy1yaWdodDogMDtcbiAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiB9XG5cbiAuY29udHJhY3QtbG9nb3tcbiAgIG9wYWNpdHk6IC4yO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgbGVmdDogMjBweDtcbiAgIHRvcDogMTVweDtcbiB9XG5cbiBhIC5hc3NldC1sZW5ndGgsIC5hc3NldC1sYWJlbHtcbiAgIGNvbG9yOiBibGFjaztcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5hc3NldC1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5hc3NldHMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuYXNzZXQtbG9nb3tcbiAgICBvcGFjaXR5OiAuMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMjBweDtcbiAgICB0b3A6IDE1cHg7XG4gIH1cblxuIGEgLnRpY2tldC1sZW5ndGgsIC50aWNrZXQtbGFiZWx7XG4gICBjb2xvcjogYmxhY2s7XG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAudGlja2V0LWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLnRpY2tldHMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAudGlja2V0LWxvZ297XG4gICAgb3BhY2l0eTogLjI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgdG9wOiAxNXB4O1xuICB9XG5cbiAgYSAuY29tcGFuaWVzLWxlbmd0aCwgLmNvbXBhbmllcy1sYWJlbHtcbiAgIGNvbG9yOiBibGFjaztcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5jb21wYW5pZXMtY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuY29tcGFuaWVzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi51c2Vycy1jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udXNlcnMtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFBhZGRpbmctbGVmdDogMTU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnVzZXJzLWNvbnRlbnQgaW1ne1xuICBvcGFjaXR5OiAuMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbi5sb2NhdGlvbnMtY29udGFpbmVyIHtcbiAgUGFkZGluZy1yaWdodDogMDtcbn1cblxuLmxvY2F0aW9ucy1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubG9jYXRpb25zLWNvbnRlbnQgaW1ne1xuICBvcGFjaXR5OiAuMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDYwcHg7XG59XG5cblxuLmNvbnRyYWN0cy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmJhZGdlIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFkZ2UtdGFibGUge1xuICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG5wIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJhZGdlLW5vdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFkZ2UtMTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG59XG5cbi5iYWRnZS0zMCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmJhZGdlLTYwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbn1cblxuLmJhZGdlLTkwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmJhZGdlLXBsdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmFzc2V0cy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnRpY2tldHMtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi52aWV3LXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/reliant-dash/reliant-dash.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/reliant-dash/reliant-dash.component.ts ***!
    \********************************************************/

  /*! exports provided: ReliantDashComponent */

  /***/
  function srcAppReliantDashReliantDashComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReliantDashComponent", function () {
      return ReliantDashComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../login/services/profile.service */
    "./src/app/login/services/profile.service.ts");
    /* harmony import */


    var _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../manage-assets/services/api-call.service */
    "./src/app/manage-assets/services/api-call.service.ts");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_7__);

    var ReliantDashComponent =
    /*#__PURE__*/
    function () {
      function ReliantDashComponent(authenticationService, profileService, api, filter) {
        var _this71 = this;

        _classCallCheck(this, ReliantDashComponent);

        this.authenticationService = authenticationService;
        this.profileService = profileService;
        this.api = api;
        this.filter = filter;
        this.contractsData = [];
        this.assetsData = [];
        this.currentProfileSubscription = this.authenticationService.currentUser.subscribe(function (profile) {
          _this71.currentProfile = profile;
        });
      }

      _createClass(ReliantDashComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPartners();
          this.contractsChart();
          this.assetsChart();
          this.displayData();
          this.contractsCount();
          this.assetsCount();
          this.ticketsCount();
          this.companiesCount();
        } // ngOnDestroy() {
        //   this.currentProfileSubscription.unsubscribe();
        // }

      }, {
        key: "getPartners",
        value: function getPartners() {
          var _this72 = this;

          this.filter.getPartners().subscribe(function (returnedPartners) {
            return _this72.partnerArr = returnedPartners;
          });
        }
      }, {
        key: "filterPartner",
        value: function filterPartner(partner) {
          return this.partnerArr.find(function (company) {
            return company.CompanyName === partner;
          });
        }
      }, {
        key: "contractsCount",
        value: function contractsCount() {
          var _this73 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partConFilter(this.currentProfile).subscribe(function (returnedConLength) {
              return _this73.contractLength = returnedConLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
            this.filter.custConFilter(this.currentProfile).subscribe(function (returnedConLength) {
              return _this73.contractLength = returnedConLength;
            });
          }
        }
      }, {
        key: "assetsCount",
        value: function assetsCount() {
          var _this74 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partAssetsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this74.assetLength = returnedAssetLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
            this.filter.custAssetsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this74.assetLength = returnedAssetLength;
            });
          }
        }
      }, {
        key: "ticketsCount",
        value: function ticketsCount() {
          var _this75 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partTicketsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this75.ticketLength = returnedAssetLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {// this.filter.custAssetsFilter(this.currentProfile)
            // .subscribe(
            //   (returnedAssetLength: Assets[]) => this.assetLength = returnedAssetLength
            // );
          }
        }
      }, {
        key: "companiesCount",
        value: function companiesCount() {
          var _this76 = this;

          this.filter.customerFilter(this.currentProfile).subscribe(function (returnedCompanies) {
            _this76.companyLength = returnedCompanies;
          });
        }
      }, {
        key: "ticketsChart",
        value: function ticketsChart() {
          var _this77 = this;

          this.api.getTickets().subscribe(function (returnedTickets) {
            _this77.tickets = returnedTickets;
          });
        }
      }, {
        key: "displayData",
        value: function displayData() {
          var array = this.filter.partConFilter(this.currentProfile).subscribe(function (res) {
            // const price = res.map(res => res.AnnualValue);
            var length = Object.keys(res).map(function (key) {
              return [String(key), res[key]];
            }); // console.log(length);
            // console.log(price);
          });
        }
      }, {
        key: "getAssets",
        value: function getAssets() {
          var _this78 = this;

          this.api.getAssets().subscribe(function (returnedAssets) {
            _this78.assets = returnedAssets;
          });
        }
      }, {
        key: "contractsChart",
        value: function contractsChart() {
          var status = [];
          this.filter.partConFilter(this.currentProfile).subscribe(function (res) {
            // status.push(res.status);
            var length = Object.keys(res).map(function (key) {
              return [String(key), res[key]];
            }); // console.log(res);
            // console.log(res.status);
            // console.log(length);
          });
          this.contractsData = new chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]('contracts', {
            type: 'pie',
            data: {
              labels: status,
              datasets: [{
                label: '# of Contracts',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
              }]
            },
            options: {}
          });
        }
      }, {
        key: "assetsChart",
        value: function assetsChart() {
          this.assetsData = new chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]('assets', {
            type: 'pie',
            data: {
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderColor: [' rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
              }]
            },
            options: {}
          });
        }
      }, {
        key: "deleteProfile",
        value: function deleteProfile(id) {
          var _this79 = this;

          this.profileService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
            _this79.loadAllUsers();
          });
        }
      }, {
        key: "loadAllUsers",
        value: function loadAllUsers() {
          var _this80 = this;

          this.profileService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (profile) {
            _this80.profiles = profile;
          });
        }
      }]);

      return ReliantDashComponent;
    }();

    ReliantDashComponent.ctorParameters = function () {
      return [{
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
      }, {
        type: _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__["ApiCallService"]
      }, {
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_6__["ApifilterService"]
      }];
    };

    ReliantDashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reliant-dash',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reliant-dash.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reliant-dash/reliant-dash.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reliant-dash.component.css */
      "./src/app/reliant-dash/reliant-dash.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__["ApiCallService"], _services_apifilter_service__WEBPACK_IMPORTED_MODULE_6__["ApifilterService"]])], ReliantDashComponent);
    /***/
  },

  /***/
  "./src/app/relus-dash/relus-dash.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/relus-dash/relus-dash.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRelusDashRelusDashComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.col-md {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n\n.wrapper {\n  margin: 0 !important;\n  padding-top: 20px;\n}\n\n.container-fluid {\n  background-color: #d9d9d9;\n  margin: 0;\n  padding: 0;\n  margin-top: 10px;\n}\n\n.card {\n  border-radius: 8px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15), 0 0 20px 0 rgba(0, 0, 0, 0.12);\n}\n\n.total-container {\n  background-color: white;\n  border-radius: 8px;\n  margin: 10px;\n  font-size: 32px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15), 0 0 20px 0 rgba(0, 0, 0, 0.12);\n  color: black;\n}\n\n/* .contract-content:hover {\n  color: orange;\n} */\n\n/* .contracts-container:hover{\n  opacity:1;\n} */\n\na {\n  text-decoration: none;\n}\n\na .contract-length, .contract-label{\n  color: black;\n  text-decoration: none;\n }\n\n.contract-content {\n   overflow: hidden;\n   color: black;\n }\n\n.contracts-container {\n   padding-right: 0;\n   padding-bottom: 0;\n   overflow: hidden;\n }\n\n.contract-logo{\n   opacity: .2;\n   position: relative;\n   left: 20px;\n   top: 15px;\n }\n\na .asset-length, .asset-label{\n   color: black;\n   text-decoration: none;\n  }\n\n.asset-content {\n    overflow: hidden;\n    color: black;\n  }\n\n.assets-container {\n    padding-right: 0;\n    padding-bottom: 0;\n    overflow: hidden;\n  }\n\n.asset-logo{\n    opacity: .2;\n    position: relative;\n    left: 20px;\n    top: 15px;\n  }\n\na .ticket-length, .ticket-label{\n   color: black;\n   text-decoration: none;\n  }\n\n.ticket-content {\n    overflow: hidden;\n    color: black;\n  }\n\n.tickets-container {\n    padding-right: 0;\n    padding-bottom: 0;\n    overflow: hidden;\n  }\n\n.ticket-logo{\n    opacity: .2;\n    position: relative;\n    left: 20px;\n    top: 15px;\n  }\n\na .companies-length, .companies-label{\n   color: black;\n   text-decoration: none;\n  }\n\n.companies-content {\n    overflow: hidden;\n    color: black;\n  }\n\n.companies-container {\n    padding-right: 0;\n    padding-bottom: 0;\n    overflow: hidden;\n  }\n\n.users-container {\n  padding-right: 0;\n}\n\n.users-content {\n  overflow: hidden;\n  Padding-left: 15;\n  color: black;\n}\n\n.users-content img{\n  opacity: .2;\n  position: relative;\n  top: 20px;\n  left: 50px;\n}\n\n.locations-container {\n  Padding-right: 0;\n}\n\n.locations-content {\n  overflow: hidden;\n  color: black;\n}\n\n.locations-content img{\n  opacity: .2;\n  position: relative;\n  top: 20px;\n  left: 60px;\n}\n\n.contracts-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.badge {\n  width: 15px;\n  height: 15px;\n  color: white;\n}\n\n.badge-table {\n  width: 30px !important;\n  padding-bottom: 3px;\n}\n\np {\n  display: none;\n}\n\n.badge-now {\n  background-color: red;\n  text-align: center;\n}\n\n.badge-15 {\n  background-color: purple;\n}\n\n.badge-30 {\n  background-color: orange;\n}\n\n.badge-60 {\n  background-color: teal;\n}\n\n.badge-90 {\n  background-color: blue;\n}\n\n.badge-plus {\n  background-color: green;\n}\n\n.assets-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.tickets-wrapper {\n  background: white;\n  border-radius: 8px;\n}\n\n.view-wrapper {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVsdXMtZGFzaC9yZWx1cy1kYXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUVBQXlFO0FBQzNFOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHlFQUF5RTtFQUN6RSxZQUFZO0FBQ2Q7O0FBRUE7O0dBRUc7O0FBRUg7O0dBRUc7O0FBRUg7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0NBQ3RCOztBQUVBO0dBQ0UsZ0JBQWdCO0dBQ2hCLFlBQVk7Q0FDZDs7QUFFQTtHQUNFLGdCQUFnQjtHQUNoQixpQkFBaUI7R0FDakIsZ0JBQWdCO0NBQ2xCOztBQUVBO0dBQ0UsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsU0FBUztDQUNYOztBQUVBO0dBQ0UsWUFBWTtHQUNaLHFCQUFxQjtFQUN0Qjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7QUFFRDtHQUNFLFlBQVk7R0FDWixxQkFBcUI7RUFDdEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0FBRUE7R0FDQyxZQUFZO0dBQ1oscUJBQXFCO0VBQ3RCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlbHVzLWRhc2gvcmVsdXMtZGFzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29sLW1kIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLndyYXBwZXIge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4udG90YWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDMycHg7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogLmNvbnRyYWN0LWNvbnRlbnQ6aG92ZXIge1xuICBjb2xvcjogb3JhbmdlO1xufSAqL1xuXG4vKiAuY29udHJhY3RzLWNvbnRhaW5lcjpob3ZlcntcbiAgb3BhY2l0eToxO1xufSAqL1xuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hIC5jb250cmFjdC1sZW5ndGgsIC5jb250cmFjdC1sYWJlbHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gfVxuXG4gLmNvbnRyYWN0LWNvbnRlbnQge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIGNvbG9yOiBibGFjaztcbiB9XG5cbiAuY29udHJhY3RzLWNvbnRhaW5lciB7XG4gICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgcGFkZGluZy1ib3R0b206IDA7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuIH1cblxuIC5jb250cmFjdC1sb2dve1xuICAgb3BhY2l0eTogLjI7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBsZWZ0OiAyMHB4O1xuICAgdG9wOiAxNXB4O1xuIH1cblxuIGEgLmFzc2V0LWxlbmd0aCwgLmFzc2V0LWxhYmVse1xuICAgY29sb3I6IGJsYWNrO1xuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLmFzc2V0LWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmFzc2V0cy1jb250YWluZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5hc3NldC1sb2dve1xuICAgIG9wYWNpdHk6IC4yO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHRvcDogMTVweDtcbiAgfVxuXG4gYSAudGlja2V0LWxlbmd0aCwgLnRpY2tldC1sYWJlbHtcbiAgIGNvbG9yOiBibGFjaztcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC50aWNrZXQtY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAudGlja2V0cy1jb250YWluZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC50aWNrZXQtbG9nb3tcbiAgICBvcGFjaXR5OiAuMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMjBweDtcbiAgICB0b3A6IDE1cHg7XG4gIH1cblxuICBhIC5jb21wYW5pZXMtbGVuZ3RoLCAuY29tcGFuaWVzLWxhYmVse1xuICAgY29sb3I6IGJsYWNrO1xuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLmNvbXBhbmllcy1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5jb21wYW5pZXMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuLnVzZXJzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi51c2Vycy1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgUGFkZGluZy1sZWZ0OiAxNTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXNlcnMtY29udGVudCBpbWd7XG4gIG9wYWNpdHk6IC4yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNTBweDtcbn1cblxuLmxvY2F0aW9ucy1jb250YWluZXIge1xuICBQYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubG9jYXRpb25zLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sb2NhdGlvbnMtY29udGVudCBpbWd7XG4gIG9wYWNpdHk6IC4yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNjBweDtcbn1cblxuXG4uY29udHJhY3RzLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYmFkZ2Uge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWRnZS10YWJsZSB7XG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbnAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmFkZ2Utbm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWRnZS0xNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbn1cblxuLmJhZGdlLTMwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uYmFkZ2UtNjAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xufVxuXG4uYmFkZ2UtOTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uYmFkZ2UtcGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uYXNzZXRzLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4udGlja2V0cy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnZpZXctd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/relus-dash/relus-dash.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/relus-dash/relus-dash.component.ts ***!
    \****************************************************/

  /*! exports provided: RelusDashComponent */

  /***/
  function srcAppRelusDashRelusDashComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelusDashComponent", function () {
      return RelusDashComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../manage-assets/services/api-call.service */
    "./src/app/manage-assets/services/api-call.service.ts");
    /* harmony import */


    var _login_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../login/services/profile.service */
    "./src/app/login/services/profile.service.ts");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");

    var RelusDashComponent =
    /*#__PURE__*/
    function () {
      function RelusDashComponent(authenticationService, profileService, api, filter) {
        var _this81 = this;

        _classCallCheck(this, RelusDashComponent);

        this.authenticationService = authenticationService;
        this.profileService = profileService;
        this.api = api;
        this.filter = filter;
        this.contractsData = [];
        this.assetsData = [];
        this.currentProfileSubscription = this.authenticationService.currentUser.subscribe(function (profile) {
          _this81.currentProfile = profile;
        });
      }

      _createClass(RelusDashComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPartners();
          this.contractsChart();
          this.assetsChart();
          this.displayData();
          this.contractsCount();
          this.assetsCount();
          this.ticketsCount();
          this.companiesCount();
        } // ngOnDestroy() {
        //   this.currentProfileSubscription.unsubscribe();
        // }

      }, {
        key: "getPartners",
        value: function getPartners() {
          var _this82 = this;

          this.filter.getPartners().subscribe(function (returnedPartners) {
            return _this82.partnerArr = returnedPartners;
          });
        }
      }, {
        key: "filterPartner",
        value: function filterPartner(partner) {
          return this.partnerArr.find(function (company) {
            return company.CompanyName === partner;
          });
        }
      }, {
        key: "contractsCount",
        value: function contractsCount() {
          var _this83 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partConFilter(this.currentProfile).subscribe(function (returnedConLength) {
              return _this83.contractLength = returnedConLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
            this.filter.custConFilter(this.currentProfile).subscribe(function (returnedConLength) {
              return _this83.contractLength = returnedConLength;
            });
          }
        }
      }, {
        key: "assetsCount",
        value: function assetsCount() {
          var _this84 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partAssetsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this84.assetLength = returnedAssetLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {
            this.filter.custAssetsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this84.assetLength = returnedAssetLength;
            });
          }
        }
      }, {
        key: "ticketsCount",
        value: function ticketsCount() {
          var _this85 = this;

          if (this.filterPartner(this.currentProfile.partner)) {
            this.filter.partTicketsFilter(this.currentProfile).subscribe(function (returnedAssetLength) {
              return _this85.ticketLength = returnedAssetLength;
            });
          } else if (this.filterPartner(this.currentProfile.partner) === undefined) {// this.filter.custAssetsFilter(this.currentProfile)
            // .subscribe(
            //   (returnedAssetLength: Assets[]) => this.assetLength = returnedAssetLength
            // );
          }
        }
      }, {
        key: "companiesCount",
        value: function companiesCount() {
          var _this86 = this;

          this.filter.customerFilter(this.currentProfile).subscribe(function (returnedCompanies) {
            _this86.companyLength = returnedCompanies;
          });
        }
      }, {
        key: "ticketsChart",
        value: function ticketsChart() {
          var _this87 = this;

          this.api.getTickets().subscribe(function (returnedTickets) {
            _this87.tickets = returnedTickets;
          });
        }
      }, {
        key: "displayData",
        value: function displayData() {
          var array = this.filter.partConFilter(this.currentProfile).subscribe(function (res) {
            // const price = res.map(res => res.AnnualValue);
            var length = Object.keys(res).map(function (key) {
              return [String(key), res[key]];
            });
            console.log(length); // console.log(price);
          });
        }
      }, {
        key: "getAssets",
        value: function getAssets() {
          var _this88 = this;

          this.api.getAssets().subscribe(function (returnedAssets) {
            _this88.assets = returnedAssets;
          });
        }
      }, {
        key: "contractsChart",
        value: function contractsChart() {
          var status = [];
          this.filter.partConFilter(this.currentProfile).subscribe(function (res) {
            // status.push(res.status);
            var length = Object.keys(res).map(function (key) {
              return [String(key), res[key]];
            });
            console.log(res); // console.log(res.status);
            // console.log(length);
          });
          this.contractsData = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"]('contracts', {
            type: 'pie',
            data: {
              labels: status,
              datasets: [{
                label: '# of Contracts',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
              }]
            },
            options: {}
          });
        }
      }, {
        key: "assetsChart",
        value: function assetsChart() {
          this.assetsData = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"]('assets', {
            type: 'pie',
            data: {
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderColor: ['rgba(255, 0, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
              }]
            },
            options: {}
          });
        }
      }, {
        key: "deleteProfile",
        value: function deleteProfile(id) {
          var _this89 = this;

          this.profileService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
            _this89.loadAllUsers();
          });
        }
      }, {
        key: "loadAllUsers",
        value: function loadAllUsers() {
          var _this90 = this;

          this.profileService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (profile) {
            _this90.profiles = profile;
          });
        }
      }]);

      return RelusDashComponent;
    }();

    RelusDashComponent.ctorParameters = function () {
      return [{
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
      }, {
        type: _login_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
      }, {
        type: _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__["ApiCallService"]
      }, {
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"]
      }];
    };

    RelusDashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-north',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./relus-dash.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/relus-dash/relus-dash.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./relus-dash.component.css */
      "./src/app/relus-dash/relus-dash.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], _login_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _manage_assets_services_api_call_service__WEBPACK_IMPORTED_MODULE_5__["ApiCallService"], _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"]])], RelusDashComponent);
    /***/
  },

  /***/
  "./src/app/reset-user/reset-user.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/reset-user/reset-user.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResetUserResetUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXVzZXIvcmVzZXQtdXNlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/reset-user/reset-user.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/reset-user/reset-user.component.ts ***!
    \****************************************************/

  /*! exports provided: ResetUserComponent */

  /***/
  function srcAppResetUserResetUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetUserComponent", function () {
      return ResetUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ResetUserComponent =
    /*#__PURE__*/
    function () {
      function ResetUserComponent() {
        _classCallCheck(this, ResetUserComponent);
      }

      _createClass(ResetUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResetUserComponent;
    }();

    ResetUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-user/reset-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-user.component.css */
      "./src/app/reset-user/reset-user.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ResetUserComponent);
    /***/
  },

  /***/
  "./src/app/services/apifilter.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/apifilter.service.ts ***!
    \***********************************************/

  /*! exports provided: ApifilterService */

  /***/
  function srcAppServicesApifilterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApifilterService", function () {
      return ApifilterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login/services/profile.service */
    "./src/app/login/services/profile.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _partner_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../partner-list */
    "./src/app/partner-list.ts");

    var ApifilterService =
    /*#__PURE__*/
    function () {
      function ApifilterService(profileService, auth, http) {
        _classCallCheck(this, ApifilterService);

        this.profileService = profileService;
        this.auth = auth;
        this.http = http;
        this.partnerlist = _partner_list__WEBPACK_IMPORTED_MODULE_6__["PartnerList"];
        this.customerApi = 'https://harmonyprodcustomersone.azurewebsites.net/api/CompanyListByPartner?code=rhtQGzt22H6Z0VQb7iUNZYazTiZpKrCmkSEA71oORrDu/lUFysLEoA==';
        this.partnerApi = 'https://prodharmony.azurewebsites.net/api/PartnerList?code=2e6AULJLQxO60bOdJxfX6oxo57jkNueQEn4nsCKixFMjoheKzBc48w==';
        this.pContractsApi = 'https://harmonyprodpartnersone.azurewebsites.net/api/ContractsByPartner?code=4QQzdPj2j4LgMuJ9wnzmomSadWCLJEpbSOKcJqhBPRDswDZUCq6NqA==';
        this.cContractsApi = 'https://harmonyprodcustomersone.azurewebsites.net/api/ContractsByCustomer?code=bpca1PGS/szLyokaPXrzwhbTmpIv1NIC8St234Ce8anUtUKo8uUWkg==';
        this.refConApi = 'https://harmonyprodpartnersone.azurewebsites.net/api/ContractByRefNumber?code=NU4mL4qSFBbCJm9JJYRL75iYb3jljdjT5gicDiZxy0sUz/HfI2DfHw==';
        this.nameConApi = 'https://harmonyprodpartnersone.azurewebsites.net/api/ContractsByName?code=IZMBTTmJ5l7M3WPeKg46l/3lfEaAKMgKdagfNCM8T07vyO05QqqBSg==';
        this.oldpartassetsapi = 'https://prodharmonytwo.azurewebsites.net/api/PartnerPullAssets?code=jZK5Np57XB8xaTlNIlnyj9Pga9ar34hvOD4fkzGj/xTAlHNCemQvpw==';
        this.partassetsapi = 'https://harmonyprodpartnersone.azurewebsites.net/api/AssetsByPartner?code=7/NKrYdcf8OCvktozIiDED7X2KaMUQrvv7AkMQQKPeMPATj3aGTP6Q==';
        this.custassetsapi = 'https://harmonyprodcustomersone.azurewebsites.net/api/AssetByCustomer?code=srg4TRFO6Uvo2YxaFGKlpJ59714bHNlgBTtSXdxDvk7WwBfX8VkdTw==';
        this.schedassetsapi = 'https://harmonyprodpartnersone.azurewebsites.net/api/AssetsBySchedule?code=Q3Yjx/KXbuErLesg4oBVs5BJrdFdOMkXn0T/HoLO6hDrCavd45iN9A==';
        this.serialassetsapi = 'https://harmonyprodcustomersone.azurewebsites.net/api/AssetDrillDown?code=cwjoeQCF3Qx5PwX0xfLJDclqyxjEyW/gZppvvS6K/g07nFSOTfudrg==';
        this.assetlocationapi = 'https://harmonyprodcustomersone.azurewebsites.net/api/AssetsByLocation?code=aO2JTfqrHEJNatGh3FIlDHs90/fGncezd7CVxMfZX/lqR9ZoyHvIYw==';
        this.pTicketsApi = 'https://prodharmonytwo.azurewebsites.net/api/PartnerPullTickets?code=gQ1Dy1X0aUP27jaL/65LTEV3Pkxm3ptezl8a8/Rg5rhDOOCQblpmgA==';
        this.ticketsApi = 'https://harmonyprodcustomersone.azurewebsites.net/api/TicketsByCustomer?code=wRFojwmWCLa85RKi5UtEg6VLQ1T8ENAdIMeCoRmaRQTaFwEEqGLHBw==';
        this.ticketsLocationapi = 'https://harmonyprodcustomersone.azurewebsites.net/api/TicketsByLocation?code=Dj9Nn0m5gd3RuNDO5E/xq9r7AqN7S0z34mrL2bsSwxkANwga/1iJyQ==';
        this.ticketRefApi = 'https://harmonyprodcustomersone.azurewebsites.net/api/TicketsByRefNumber?code=O1Sok3K9e4QIPE/IGmb7YPdn/WlwY97zxeufiVVCmD2iw5FN8/8jyg==';
        this.pLocationsapi = 'https://harmonyprodpartnersone.azurewebsites.net/api/LocationsByPartner?code=4rYRhjsKV710lRV0tXwOXlfMJkzwUp3mPnvpn2dpKA/FgbAYEPIxow==';
        this.cLocationsapi = '';
        this.locationdescfilterapi = 'https://harmonyprodcustomersone.azurewebsites.net/api/LocationByDescription?code=LlWycAaW502tdZ9EMsNbkqapKMVLR7yfsFJRapYhwAlXuqwpnp9ELA==';
      }

      _createClass(ApifilterService, [{
        key: "partAssetsFilter",
        value: function partAssetsFilter(filter) {
          var params = {
            'role': filter.partnerRole,
            'partner': filter.partner
          };
          return this.http.post(this.partassetsapi, params);
        }
      }, {
        key: "custAssetsFilter",
        value: function custAssetsFilter(filter) {
          var params = {
            'role': filter.partnerRole,
            'partner': filter.partner
          };
          return this.http.post(this.custassetsapi, params);
        }
      }, {
        key: "assetsBySchedule",
        value: function assetsBySchedule(schedule) {
          var params = {
            'schedule': schedule
          };
          return this.http.post(this.schedassetsapi, params);
        }
      }, {
        key: "assetsBySerial",
        value: function assetsBySerial(serial) {
          var params = {
            'serial': serial
          };
          return this.http.post(this.serialassetsapi, params);
        }
      }, {
        key: "assetsByLocation",
        value: function assetsByLocation(filter) {
          var params = {
            'location': filter
          };
          return this.http.post(this.assetlocationapi, params);
        }
      }, {
        key: "ticketsFilter",
        value: function ticketsFilter(filter) {
          var params = {
            'company': filter
          };
          return this.http.post(this.ticketsApi, params);
        }
      }, {
        key: "partTicketsFilter",
        value: function partTicketsFilter(filter) {
          var params = {
            'role': filter.partnerRole,
            'partner': filter.partner
          };
          return this.http.post(this.pTicketsApi, params);
        }
      }, {
        key: "ticketsLocationFilter",
        value: function ticketsLocationFilter(filter) {
          var params = {
            'location': filter
          };
          return this.http.post(this.ticketsLocationapi, params);
        }
      }, {
        key: "ticketRefFilter",
        value: function ticketRefFilter(filter) {
          var params = {
            'refnumber': filter
          };
          return this.http.post(this.ticketRefApi, params);
        }
      }, {
        key: "partConFilter",
        value: function partConFilter(filter) {
          var params = {
            'role': filter.partnerRole,
            'partner': filter.partner
          };
          return this.http.post(this.pContractsApi, params);
        }
      }, {
        key: "conByRef",
        value: function conByRef(refNum) {
          var params = {
            'refnumber': refNum
          };
          return this.http.post(this.refConApi, params);
        }
      }, {
        key: "conByName",
        value: function conByName(name) {
          var params = {
            'schedName': name
          };
          return this.http.post(this.nameConApi, params);
        }
      }, {
        key: "custConFilter",
        value: function custConFilter(filter) {
          var params = {
            'role': filter.partnerRole,
            'partner': filter.partner
          };
          return this.http.post(this.cContractsApi, params);
        }
      }, {
        key: "getPartners",
        value: function getPartners() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.partnerlist);
        }
      }, {
        key: "customerFilter",
        value: function customerFilter(filter) {
          var params = {
            'partner': filter.partner
          };
          return this.http.post(this.customerApi, params);
        }
      }, {
        key: "partLocationFilter",
        value: function partLocationFilter(filter) {
          var params = {
            'partner': filter.partner
          };
          return this.http.post(this.pLocationsapi, params);
        }
      }, {
        key: "custLocationFilter",
        value: function custLocationFilter(filter) {
          var params = {
            'company': filter.company
          };
          return this.http.post(this.cLocationsapi, params);
        }
      }, {
        key: "locationFilter",
        value: function locationFilter(desc) {
          var params = {
            'description': desc
          };
          return this.http.post(this.locationdescfilterapi, params);
        }
      }]);

      return ApifilterService;
    }();

    ApifilterService.ctorParameters = function () {
      return [{
        type: _login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    ApifilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])], ApifilterService);
    /***/
  },

  /***/
  "./src/app/settings/settings.component.css":
  /*!*************************************************!*\
    !*** ./src/app/settings/settings.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsSettingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);\n  margin-bottom: 30px;\n}\n\n.card-header {\n  background-color: black;\n  color: white;\n}\n\ninput {\n  width: 45%;\n  height: 35px;\n  outline: none !important;\n  box-shadow:none;\n  border-radius: 6px;\n  border-style: solid;\n  padding: auto;\n}\n\n.checkbox {\n  width: auto !important;\n  height: auto !important;\n}\n\nbutton {\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdFQUF3RTtFQUN4RSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1Qyx3Q0FBd0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDQ1JTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6bm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwYWRkaW5nOiBhdXRvO1xufVxuXG4uY2hlY2tib3gge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/settings/settings.component.ts":
  /*!************************************************!*\
    !*** ./src/app/settings/settings.component.ts ***!
    \************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");

    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent(authenticationService) {
        _classCallCheck(this, SettingsComponent);

        this.authenticationService = authenticationService;
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this91 = this;

          this.nameSubscription = this.authenticationService.currentUser.subscribe(function (name) {
            _this91.currentProfile = name;
          });
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.css */
      "./src/app/settings/settings.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/sidebar/services/loadsidebar.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/sidebar/services/loadsidebar.service.ts ***!
    \*********************************************************/

  /*! exports provided: Sidebars */

  /***/
  function srcAppSidebarServicesLoadsidebarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sidebars", function () {
      return Sidebars;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Sidebars = [{
      id: 1,
      name: 'Dashboard',
      visible: true,
      link: '/dashboard',
      menu: 'main',
      mainmenu: 'dash'
    }, {
      id: 2,
      name: 'Manage Assets',
      visible: true,
      link: '/manageassets',
      menu: 'mainsub-a',
      mainmenu: 'assets'
    }, {
      id: 2.1,
      name: 'Lists',
      visible: false,
      link: '/manageassets/lists',
      menu: 'sub-A',
      mainmenu: 'assets'
    }, {
      id: 2.2,
      name: 'Assets',
      visible: false,
      link: '/manageassets/assets',
      menu: 'sub-A',
      mainmenu: 'assets'
    }, {
      id: 2.3,
      name: 'Tickets',
      visible: false,
      link: '/manageassets/tickets',
      menu: 'sub-A',
      mainmenu: 'assets'
    }, {
      id: 2.4,
      name: 'Contracts',
      visible: false,
      link: '/manageassets/contracts',
      menu: 'usub-A',
      mainmenu: 'assets'
    }, {
      id: 2.5,
      name: 'Assets',
      visible: false,
      link: 'manageassets/assets',
      menu: 'usub-A',
      mainmenu: 'assets'
    }, {
      id: 2.6,
      name: 'Tickets',
      visible: false,
      link: 'manageassets/tickets',
      menu: 'usub-A',
      mainmenu: 'assets'
    }, {
      id: 4,
      name: 'Admin',
      visible: true,
      link: '/admin',
      menu: 'mainsub-b',
      mainmenu: 'admin'
    }, {
      id: 4.1,
      name: 'Accounts',
      visible: false,
      link: '/admin/accounts',
      menu: 'sub-B',
      mainmenu: 'admin'
    }, {
      id: 4.2,
      name: 'Support',
      visible: false,
      link: '/admin/support',
      menu: 'sub-B',
      mainmenu: 'admin'
    }, {
      id: 4.3,
      name: 'OEM',
      visible: false,
      link: '/admin/oem',
      menu: 'sub-B',
      mainmenu: 'admin'
    }, {
      id: 4.4,
      name: 'Users',
      visible: false,
      link: 'admin/users',
      menu: 'usub-B',
      mainmenu: 'admin'
    }, {
      id: 4.5,
      name: 'Asset Locations',
      visible: false,
      link: 'admin/locations',
      menu: 'usub-B',
      mainmenu: 'admin'
    }];
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  margin-top: 4.5%;\n  padding: 0;\n  color: white;\n  font-size: 1vw;\n  position: fixed;\n  height: 53.2em;\n  overflow-x: hidden;\n  background: transparent;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.icon-bar {\n  margin: 0;\n  padding: 0;\n  color: white;\n  font-size: 1vw;\n  position: -webkit-sticky;\n  position: sticky;\n  height: 100%;\n}\n\nnav a {\n  cursor: pointer;\n}\n\nspan {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.row {\n  margin: 0px;\n  padding: 0px;\n}\n\n#container {\n  -webkit-transition:all .5s;\n  transition:all .5s;\n}\n\n.btn, .btn:focus {\n  background-color: transparent;\n  align-content: right;\n  color: black;\n  outline: 0;\n  margin-left: 7px;\n}\n\n.btn:hover {\n  color: white;\n}\n\n.dropdown-btn {\n  cursor: pointer;\n}\n\n.icon-bar {\n  width: 100%;\n  background-color: #555;\n  margin: 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.assets-icon {\n  margin-left: 5px;\n}\n\n.assets-text {\n  margin-left: 5px;\n}\n\n.icon-bar a {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 18px 8px 18px 12px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  color: white;\n  font-size: 120%;\n  overflow: hidden;\n}\n\na {\n  text-decoration: none !important;\n  border-bottom: solid white 1px;\n  padding-left: 20px;\n}\n\n.fa-caret-down {\n  margin-left: 4px;\n}\n\n.icon {\n  margin-right: 25px;\n  margin-left: 8px;\n}\n\n.icon-bar a:hover {\n  background-color: #000;\n}\n\n.active {\n  background-color: #e65c00;\n}\n\n.dropdown-container{\n  background-color: #808080;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBb0I7RUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFHQTtFQUNFLDBCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsU0FBUztFQUNULDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixpQ0FBeUI7RUFBekIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUM7RUFDQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICBtYXJnaW4tdG9wOiA0LjUlO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogNTMuMmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5pY29uLWJhciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDF2dztcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm5hdiBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5yb3cge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5cbiNjb250YWluZXIge1xuICB0cmFuc2l0aW9uOmFsbCAuNXM7XG59XG5cbi5idG4sIC5idG46Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYWxpZ24tY29udGVudDogcmlnaHQ7XG4gIGNvbG9yOiBibGFjaztcbiAgb3V0bGluZTogMDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRyb3Bkb3duLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24tYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmFzc2V0cy1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmFzc2V0cy10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmljb24tYmFyIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxOHB4IDhweCAxOHB4IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMjAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlIDFweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZmEtY2FyZXQtZG93biB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbiAuaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmljb24tYmFyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NWMwMDtcbn1cblxuLmRyb3Bkb3duLWNvbnRhaW5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/services/authentication.service */
    "./src/app/login/services/authentication.service.ts");
    /* harmony import */


    var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/apifilter.service */
    "./src/app/services/apifilter.service.ts");
    /* harmony import */


    var _services_loadsidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/loadsidebar.service */
    "./src/app/sidebar/services/loadsidebar.service.ts");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(router, authenticationService, filter) {
        var _this92 = this;

        _classCallCheck(this, SidebarComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.filter = filter;
        this.title = 'Support Portal';
        this.admin = true;
        this.sidebars = _services_loadsidebar_service__WEBPACK_IMPORTED_MODULE_5__["Sidebars"];
        this.roleSubscription = this.authenticationService.currentUser.subscribe(function (role) {
          _this92.currentRole = role;
        });
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "collapseMenu",
        value: function collapseMenu() {
          if (document.getElementById('container').style.width = '100%') {
            return document.getElementById('container').style.width = '40%';
          } else {
            return document.getElementById('container').style.width = '100%';
          }
        }
      }, {
        key: "getPartners",
        value: function getPartners() {
          var _this93 = this;

          this.filter.getPartners().subscribe(function (returnedPartners) {
            return _this93.partnerArr = returnedPartners;
          });
        }
      }, {
        key: "filterPartner",
        value: function filterPartner(partner) {
          return this.partnerArr.find(function (company) {
            return company.CompanyName === partner;
          });
        }
      }, {
        key: "dropdownMA",
        value: function dropdownMA() {
          if (document.getElementById('dropdown').style.display === 'none') {
            document.getElementById('dropdown').style.display = 'block';
          } else {
            document.getElementById('dropdown').style.display = 'none';
          }
        }
      }, {
        key: "dashLink",
        value: function dashLink() {
          var dash = this.authenticationService.currentUserValue.partner;

          switch (dash) {
            case 'NorthSmart (Northland)':
              this.router.navigate(['/northdash']);
              break;

            case 'Noble1 Solutions':
              this.router.navigate(['/dashboard']);
              break;

            case 'Reliant Technology':
              this.router.navigate(['/reliantdash']);
              break;

            case 'Relus Technologies':
              this.router.navigate(['/relusdash']);
              break;

            case 'BB&T':
              this.router.navigate(['/relusdash']);
              break;

            case 'Support':
              this.router.navigate(['/suppdash']);
              break;

            default:
              this.router.navigate(['/genericdash']);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/sidebar/sidebar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _login_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services_apifilter_service__WEBPACK_IMPORTED_MODULE_4__["ApifilterService"]])], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/suppdash/suppdash.component.css":
  /*!*************************************************!*\
    !*** ./src/app/suppdash/suppdash.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuppdashSuppdashComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-md {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n\n.container {\n  background-color: #d9d9d9;\n  margin: 0;\n  padding: 0;\n  margin-right: 20px;\n}\n\n.card {\n  border-radius: 8px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15), 0 0 20px 0 rgba(0, 0, 0, 0.12);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwcGRhc2gvc3VwcGRhc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUVBQXlFO0FBQzNFIiwiZmlsZSI6InNyYy9hcHAvc3VwcGRhc2gvc3VwcGRhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/suppdash/suppdash.component.ts":
  /*!************************************************!*\
    !*** ./src/app/suppdash/suppdash.component.ts ***!
    \************************************************/

  /*! exports provided: SuppdashComponent */

  /***/
  function srcAppSuppdashSuppdashComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuppdashComponent", function () {
      return SuppdashComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuppdashComponent =
    /*#__PURE__*/
    function () {
      function SuppdashComponent() {
        _classCallCheck(this, SuppdashComponent);
      }

      _createClass(SuppdashComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuppdashComponent;
    }();

    SuppdashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-suppdash',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./suppdash.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/suppdash/suppdash.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./suppdash.component.css */
      "./src/app/suppdash/suppdash.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SuppdashComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      serverUrl: 'https://finalauth.noble1it.com',
      secret: 'Noble1Solutions',
      LoginPull: 'https://harmonyprodpartnersone.azurewebsites.net/api/',
      CusLoginPull: 'https://harmonyprodcustomersone.azurewebsites.net/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/xavierjohnson/Documents/Support-Portal/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map