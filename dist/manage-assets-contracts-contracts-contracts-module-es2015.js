(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-assets-contracts-contracts-contracts-module"],{

/***/ "./src/app/manage-assets/contracts/contract-detail/contract-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/manage-assets/contracts/contract-detail/contract-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ContractDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDetailComponent", function() { return ContractDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/apifilter.service */ "./src/app/services/apifilter.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");


















function ContractDetailComponent_div_2_button_64_Template(rf, ctx) { if (rf & 1) {
    const _r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContractDetailComponent_div_2_button_64_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r344); const ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r343.searchClear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailComponent_div_2_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailComponent_div_2_td_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asset_r345 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", asset_r345.Name, " ");
} }
function ContractDetailComponent_div_2_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Serial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailComponent_div_2_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asset_r346 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/assetdetail/", asset_r346.Identifier, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", asset_r346.Identifier, " ");
} }
function ContractDetailComponent_div_2_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Asset Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailComponent_div_2_td_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asset_r347 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", asset_r347.Identifier, " ");
} }
function ContractDetailComponent_div_2_th_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailComponent_div_2_td_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asset_r348 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", asset_r348.SiteAddress, " ");
} }
function ContractDetailComponent_div_2_th_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contract ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailComponent_div_2_td_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asset_r349 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", asset_r349.Schedule, " ");
} }
function ContractDetailComponent_div_2_tr_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 56);
} }
function ContractDetailComponent_div_2_tr_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 57);
} }
const _c0 = function () { return [10, 25, 50, 100]; };
function ContractDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contract");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Contract # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Renewal Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Locations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Reference Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContractDetailComponent_div_2_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r352); const data_r329 = ctx.$implicit; return data_r329.RefNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContractDetailComponent_div_2_Template_input_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r352); const data_r329 = ctx.$implicit; return data_r329.EndCustomerName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContractDetailComponent_div_2_Template_input_ngModelChange_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r352); const data_r329 = ctx.$implicit; return data_r329.StartDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Renewal Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContractDetailComponent_div_2_Template_input_ngModelChange_58_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r352); const data_r329 = ctx.$implicit; return data_r329.RenewalDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContractDetailComponent_div_2_Template_input_ngModelChange_63_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r352); const ctx_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r356.searchKey = $event; })("keyup", function ContractDetailComponent_div_2_Template_input_keyup_63_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r352); const ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r357.applyFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ContractDetailComponent_div_2_button_64_Template, 3, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ContractDetailComponent_div_2_th_68_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ContractDetailComponent_div_2_td_69_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ContractDetailComponent_div_2_th_71_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ContractDetailComponent_div_2_td_72_Template, 3, 2, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ContractDetailComponent_div_2_th_74_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ContractDetailComponent_div_2_td_75_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ContractDetailComponent_div_2_th_77_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ContractDetailComponent_div_2_td_78_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ContractDetailComponent_div_2_th_80_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, ContractDetailComponent_div_2_td_81_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ContractDetailComponent_div_2_tr_82_Template, 1, 0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ContractDetailComponent_div_2_tr_83_Template, 1, 0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "mat-paginator", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Address of Asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "AssetLocFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "Button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContractDetailComponent_div_2_Template_Button_click_94_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r352); const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r358.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Go Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r329 = ctx.$implicit;
    const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r329.ScheduleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r329.RefNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 17, data_r329.RenewalDate, "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Covered Assets (", ctx_r328.assetLength == null ? null : ctx_r328.assetLength.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r329.RefNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r329.EndCustomerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r329.StartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r329.RenewalDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r328.searchKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r328.searchKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r328.assetDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r328.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r328.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0))("pageSize", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](90, 20, ctx_r328.assets, ctx_r328.asset));
} }
class ContractDetailComponent {
    constructor(filter, location, route) {
        this.filter = filter;
        this.location = location;
        this.route = route;
        this.displayedColumns = ['Name', 'Location', 'Identifier', 'Asset Tag', 'Schedule'];
    }
    ngOnInit() {
        this.getItems();
    }
    getItems() {
        const refNumber = this.route.snapshot.paramMap.get('refNumber');
        this.filter.conByRef(refNumber)
            .subscribe((returnedContract) => {
            this.contract = returnedContract;
            this.filter.assetsBySchedule(this.contract[0].ScheduleName)
                .subscribe((returnedAssetLength) => {
                this.assetLength = returnedAssetLength;
                this.assetDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](returnedAssetLength);
                this.assetDataSource.sort = this.sort;
                this.assetDataSource.paginator = this.paginator;
            });
            this.filter.assetsBySchedule(this.contract[0].ScheduleName)
                .subscribe((returnedAsset) => {
                this.assets = returnedAsset;
            });
        });
    }
    groupAddress() {
        for (let i = 0; i <= this.assetLength.length; i++) {
            if (this.assetLength[i].SiteAddress !== this.assetLength[i + 1].SiteAddress) {
                return this.assetLength[i].SiteAddress;
            }
        }
    }
    applyFilter() {
        this.assetDataSource.filter = this.searchKey.trim().toLowerCase();
        if (this.assetDataSource.paginator) {
            this.assetDataSource.paginator.firstPage();
        }
    }
    searchClear() {
        this.searchKey = '';
        this.applyFilter();
    }
    goBack() {
        this.location.back();
    }
}
ContractDetailComponent.ɵfac = function ContractDetailComponent_Factory(t) { return new (t || ContractDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apifilter_service__WEBPACK_IMPORTED_MODULE_3__["ApifilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ContractDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContractDetailComponent, selectors: [["app-contract-detail"]], viewQuery: function ContractDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 3, vars: 1, consts: [[1, "container"], [1, "col-md"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header"], [1, "row"], [1, "contract-header-wrapper"], [1, "contract-header-text"], [1, "col-md", "con-ref"], [1, "card-body"], [1, "tab-wrapper"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "detail-tab", "data-toggle", "tab", "href", "#detail", "role", "tab", "aria-controls", "detail", "aria-selected", "true", 1, "nav-link", "active"], ["id", "asset-tab", "data-toggle", "tab", "href", "#assets", "role", "tab", "aria-controls", "assets", "aria-selected", "false", 1, "nav-link"], ["id", "location-tab", "data-toggle", "tab", "href", "#location", "role", "tab", "aria-controls", "location", "aria-selected", "false", 1, "nav-link"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "detail", "role", "tabpanel", "aria-labelledby", "detail-tab", 1, "tab-pane", "detail", "fade", "show", "active"], [1, "form-group"], ["for", "refNumber"], ["readonly", "", "type", "text", "placeholder", "Reference Number", 3, "ngModel", "ngModelChange"], [1, "form-goup"], ["for", "endCustomer"], ["readonly", "", "type", "text", "placeholder", "End Customer", 3, "ngModel", "ngModelChange"], ["for", "startDate"], ["readonly", "", "type", "text", "placeholder", "Start Date", 3, "ngModel", "ngModelChange"], ["for", "renewalDate"], ["readonly", "", "type", "text", "placeholder", "Renewal Date", 3, "ngModel", "ngModelChange"], ["id", "assets", "role", "tabpanel", "aria-labelledby", "asset-tab", 1, "tab-pane", "assets", "fade"], [1, "search-div"], ["floatLabel", "never", 1, "search-form-field"], ["matInput", "", "placeholder", "Search", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "mat-table", "mattable-container"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "table", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Identifier"], [4, "matCellDef"], ["matColumnDef", "Asset Tag"], ["matColumnDef", "Location"], ["matColumnDef", "Schedule"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions", "pageSize"], ["id", "location", "role", "tabpanel", "aria-labelledby", "location-tab", 1, "tab-pane", "locations", "fade"], ["for", "siteAddress"], ["readonly", "", "type", "text", "placeholder", "Asset Location", 3, "value"], [1, "row", "button-containers"], [1, "col-sm"], [1, "btn", "btn-info", 3, "click"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "asset-link", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]], template: function ContractDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContractDetailComponent_div_2_Template, 96, 24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contract);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".card[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n\n.tab-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.detail[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nlabel[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35px;\n  outline: none !important;\n  box-shadow:none;\n  border-style: solid;\n  padding: auto;\n  background: transparent;\n  border: 0;\n  border-bottom: solid 2px #4d4d4d;\n  font-size: 18px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  }\n\ntable[_ngcontent-%COMP%] {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  }\n\nth[_ngcontent-%COMP%] {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    font-size: medium;\n    text-align: center !important;\n  }\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    border: 1px solid black;\n    padding: 15px;\n    text-align: left;\n  }\n\ntable[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n  }\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n    background-color: #e6e6e6;\n  }\n\ntr[_ngcontent-%COMP%]:nth-child(odd) {\n    background-color:   white;\n  }\n\n.mattable-container[_ngcontent-%COMP%] {\n    width: 94%;\n    margin-bottom: 50px;\n  }\n\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    color: rgb(230, 92, 0) !important;\n  }\n\n.mat-form-field-ripple[_ngcontent-%COMP%] {\n    background-color: rgb(230, 92, 0) !important;\n  }\n\n.search-div[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n\n.search-form-field[_ngcontent-%COMP%] {\n    width: 94%;\n    margin-left: 10px;\n    padding:  5px 10px;\n    background-color: #e6e6e6;\n    border-radius: 5px;\n  }\n\n\n\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    color: rgb(230, 92, 0) !important;\n}\n\n.search-form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 32px;\n    width: 32px;\n    border-radius: 8px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFzc2V0cy9jb250cmFjdHMvY29udHJhY3QtZGV0YWlsL2NvbnRyYWN0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBSUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsNkJBQTZCO0VBQy9COztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsaUNBQWlDO0VBQ25DOztBQUVBO0lBQ0UsNENBQTRDO0VBQzlDOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7QUFFQTs7S0FFRzs7QUFFSDtJQUNFLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLWFzc2V0cy9jb250cmFjdHMvY29udHJhY3QtZGV0YWlsL2NvbnRyYWN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5cblxuLnRhYi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxubGFiZWwge1xuICB3aWR0aDogODAlO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzpub25lO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwYWRkaW5nOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzRkNGQ0ZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgfVxuXG4gIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHRoLHRkIHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIH1cblxuICB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICB3aGl0ZTtcbiAgfVxuXG4gIC5tYXR0YWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlYXJjaC1kaXYge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiAgNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAvKiAuc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contract-detail',
                templateUrl: './contract-detail.component.html',
                styleUrls: ['./contract-detail.component.css']
            }]
    }], function () { return [{ type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_3__["ApifilterService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "./src/app/manage-assets/contracts/contracts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/manage-assets/contracts/contracts.component.ts ***!
  \****************************************************************/
/*! exports provided: ContractsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsComponent", function() { return ContractsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_apifilter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/apifilter.service */ "./src/app/services/apifilter.service.ts");
/* harmony import */ var _index_index_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../index/index/services/authentication.service */ "./src/app/index/index/services/authentication.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


















function ContractsComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContractsComponent_button_10_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r320); const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r319.searchClear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractsComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contract Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractsComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contract_r321 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "contractdetail/", contract_r321.RefNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contract_r321.ScheduleName);
} }
function ContractsComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractsComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contract_r322 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, contract_r322.StartDate, "shortDate"), " ");
} }
function ContractsComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Renewal Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractsComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contract_r323 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, contract_r323.RenewalDate, "shortDate"), " ");
} }
function ContractsComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contract# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractsComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contract_r324 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contract_r324.RefNumber, " ");
} }
function ContractsComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractsComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contract_r325 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contract_r325.EndCustomerName, " ");
} }
function ContractsComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractsComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contract_r326 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contract_r326.Status, " ");
} }
function ContractsComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
} }
function ContractsComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
} }
const _c0 = function () { return [10, 25, 50, 100]; };
class ContractsComponent {
    constructor(filter, authserv) {
        this.filter = filter;
        this.authserv = authserv;
        this.displayedColumns = ['Contract#', 'Contract Name', 'Start Date', 'Renewal Date', 'Customer', 'Status'];
        this.authserv.currentUser.subscribe(name => {
            this.currentProfile = name;
        });
    }
    ngOnInit() {
        this.getPartners();
        this.getContracts();
        // this.getCompanies();
    }
    getPartners() {
        this.filter.getPartners()
            .subscribe(returnedPartners => this.partnerArr = returnedPartners);
    }
    getCompanies() {
        this.filter.customerFilter(this.currentProfile)
            .subscribe((companies) => {
            this.company = companies;
        });
    }
    filterPartner(partner) {
        return this.partnerArr.find(company => company.CompanyName === partner);
    }
    getContracts() {
        if (this.currentProfile.companypartner === 'Partner') {
            this.filter.partConFilter(this.currentProfile)
                .subscribe((returnedContracts) => {
                this.contractDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](returnedContracts);
                this.contractDataSource.sort = this.sort;
                this.contractDataSource.paginator = this.paginator;
            });
        }
        else {
            this.filter.custConFilter(this.currentProfile)
                .subscribe((returnedContracts) => {
                this.contractDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](returnedContracts);
                this.contractDataSource.sort = this.sort;
                this.contractDataSource.paginator = this.paginator;
            });
        }
    }
    applyFilter() {
        this.contractDataSource.filter = this.searchKey.trim().toLowerCase();
        if (this.contractDataSource.paginator) {
            this.contractDataSource.paginator.firstPage();
        }
    }
    searchClear() {
        this.searchKey = '';
        this.applyFilter();
    }
}
ContractsComponent.ɵfac = function ContractsComponent_Factory(t) { return new (t || ContractsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apifilter_service__WEBPACK_IMPORTED_MODULE_1__["ApifilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_index_index_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
ContractsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContractsComponent, selectors: [["app-contracts"]], viewQuery: function ContractsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 34, vars: 9, consts: [[1, "edit-items-container", "d-flex", "justify-content-end"], [1, "assign-assets", "btn", "btn-primary"], ["aria-hidden", "true", 1, "fas", "fa-file-export"], [1, "btn", "btn-primary"], [1, "far", "fa-eye"], [1, "search-div"], ["floatLabel", "never", 1, "search-form-field"], ["matInput", "", "placeholder", "Search", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "mat-table", "mattable-container"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "table", 3, "dataSource"], ["matColumnDef", "Contract Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Start Date"], [4, "matCellDef"], ["matColumnDef", "Renewal Date"], ["matColumnDef", "Contract#"], ["matColumnDef", "Customer"], ["matColumnDef", "Status"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions", "pageSize"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "contract-link", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]], template: function ContractsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Export Contracts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Show Archived ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContractsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchKey = $event; })("keyup", function ContractsComponent_Template_input_keyup_9_listener($event) { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContractsComponent_button_10_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ContractsComponent_th_14_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContractsComponent_td_15_Template, 3, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContractsComponent_th_17_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContractsComponent_td_18_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContractsComponent_th_20_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ContractsComponent_td_21_Template, 3, 4, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ContractsComponent_th_23_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ContractsComponent_td_24_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ContractsComponent_th_26_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ContractsComponent_td_27_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ContractsComponent_th_29_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ContractsComponent_td_30_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ContractsComponent_tr_31_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ContractsComponent_tr_32_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-paginator", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.contractDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("pageSize", 10);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".edit-items-container[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.btn[_ngcontent-%COMP%]:click, .btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focused, .btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:visited {\n  margin: 10px;\n  background-color: rgb(230, 92, 0) !important;\n  border-color: rgb(230, 92, 0) !important;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  }\n\ntable[_ngcontent-%COMP%] {\n    border: solid black;\n    border-radius: 8px !important;\n    -moz-border-radius: 8px;\n    border-collapse: separate;\n  }\n\nth[_ngcontent-%COMP%] {\n    background-color: black;\n    color: white;\n    border-color: white;\n  }\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    font-size: medium;\n    text-align: center !important;\n  }\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    border: 1px solid black;\n    padding: 15px;\n    text-align: left;\n  }\n\ntable[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n  }\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n    background-color: #e6e6e6;\n  }\n\ntr[_ngcontent-%COMP%]:nth-child(odd) {\n    background-color:   white;\n  }\n\n.mattable-container[_ngcontent-%COMP%] {\n    width: 94%;\n    margin-bottom: 50px;\n  }\n\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    color: rgb(230, 92, 0) !important;\n  }\n\n.mat-form-field-ripple[_ngcontent-%COMP%] {\n    background-color: rgb(230, 92, 0) !important;\n  }\n\n.search-div[_ngcontent-%COMP%] {\n    margin: 10px 30px 10px 0px;\n  }\n\n.search-form-field[_ngcontent-%COMP%] {\n    width: 96%;\n    padding:  5px 10px;\n    background-color: #e6e6e6;\n    border-radius: 5px;\n  }\n\n\n\n.search-form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    height: 28px;\n    width: 28px;\n    border-radius: 8px;\n    align-content: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFzc2V0cy9jb250cmFjdHMvY29udHJhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLHdDQUF3QztBQUMxQzs7QUFFQTs7Ozs7RUFLRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLDZCQUE2QjtFQUMvQjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7QUFFQTtJQUNFLDRDQUE0QztFQUM5Qzs7QUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7QUFFQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7QUFFQTs7S0FFRzs7QUFFSDtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLWFzc2V0cy9jb250cmFjdHMvY29udHJhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1pdGVtcy1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYigyMzAsIDkyLCAwKSAhaW1wb3J0YW50O1xufVxuXG4uYnRuOmNsaWNrLFxuLmJ0bjpob3Zlcixcbi5idG46Zm9jdXNlZCxcbi5idG46YWN0aXZlLFxuLmJ0bjp2aXNpdGVkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIH1cblxuICB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIH1cblxuICB0aCx0ZCB7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICB0aCwgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB9XG5cbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICB9XG5cbiAgdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAgd2hpdGU7XG4gIH1cblxuICAubWF0dGFibGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cblxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogcmdiKDIzMCwgOTIsIDApICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCA5MiwgMCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zZWFyY2gtZGl2IHtcbiAgICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDBweDtcbiAgfVxuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBwYWRkaW5nOiAgNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAvKiAuc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuXG4gIC5zZWFyY2gtZm9ybS1maWVsZCBidXR0b24ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogMjhweDtcbiAgICB3aWR0aDogMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contracts',
                templateUrl: './contracts.component.html',
                styleUrls: ['./contracts.component.css']
            }]
    }], function () { return [{ type: _services_apifilter_service__WEBPACK_IMPORTED_MODULE_1__["ApifilterService"] }, { type: _index_index_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "./src/app/manage-assets/contracts/contracts/contracts-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/manage-assets/contracts/contracts/contracts-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ContractsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsRoutingModule", function() { return ContractsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_index_index_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/index/index/guards/auth.guard */ "./src/app/index/index/guards/auth.guard.ts");
/* harmony import */ var _contracts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts.component */ "./src/app/manage-assets/contracts/contracts.component.ts");
/* harmony import */ var _contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contract-detail/contract-detail.component */ "./src/app/manage-assets/contracts/contract-detail/contract-detail.component.ts");







const routes = [
    {
        path: '',
        component: _contracts_component__WEBPACK_IMPORTED_MODULE_3__["ContractsComponent"],
        canActivate: [src_app_index_index_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            {
                path: 'contractdetail/:refNumber',
                component: _contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContractDetailComponent"]
            },
        ]
    }
];
class ContractsRoutingModule {
}
ContractsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContractsRoutingModule });
ContractsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContractsRoutingModule_Factory(t) { return new (t || ContractsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContractsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/manage-assets/contracts/contracts/contracts.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/manage-assets/contracts/contracts/contracts.module.ts ***!
  \***********************************************************************/
/*! exports provided: ContractsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsModule", function() { return ContractsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _contracts_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contracts-routing.module */ "./src/app/manage-assets/contracts/contracts/contracts-routing.module.ts");
/* harmony import */ var _contracts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contracts.component */ "./src/app/manage-assets/contracts/contracts.component.ts");
/* harmony import */ var _contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contract-detail/contract-detail.component */ "./src/app/manage-assets/contracts/contract-detail/contract-detail.component.ts");



// Material Import











class ContractsModule {
}
ContractsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContractsModule });
ContractsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContractsModule_Factory(t) { return new (t || ContractsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _contracts_routing_module__WEBPACK_IMPORTED_MODULE_10__["ContractsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            // Material Imports
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContractsModule, { declarations: [_contracts_component__WEBPACK_IMPORTED_MODULE_11__["ContractsComponent"],
        _contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_12__["ContractDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _contracts_routing_module__WEBPACK_IMPORTED_MODULE_10__["ContractsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        // Material Imports
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _contracts_component__WEBPACK_IMPORTED_MODULE_11__["ContractsComponent"],
                    _contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_12__["ContractDetailComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _contracts_routing_module__WEBPACK_IMPORTED_MODULE_10__["ContractsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    // Material Imports
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=manage-assets-contracts-contracts-contracts-module-es2015.js.map