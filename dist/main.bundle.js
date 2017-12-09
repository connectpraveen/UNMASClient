webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completed_completed_component__ = __webpack_require__("../../../../../src/app/completed/completed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inprogress_inprogress_component__ = __webpack_require__("../../../../../src/app/inprogress/inprogress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_module_component__ = __webpack_require__("../../../../../src/app/module/module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__course_detail_course_detail_component__ = __webpack_require__("../../../../../src/app/course-detail/course-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__course_course_component__ = __webpack_require__("../../../../../src/app/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_student_component__ = __webpack_require__("../../../../../src/app/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__training_program_training_program_component__ = __webpack_require__("../../../../../src/app/training-program/training-program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scheduled_programs_scheduled_programs_component__ = __webpack_require__("../../../../../src/app/scheduled-programs/scheduled-programs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lesson_lesson_component__ = __webpack_require__("../../../../../src/app/lesson/lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__day_day_component__ = __webpack_require__("../../../../../src/app/day/day.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__selfregistration_selfregistration_component__ = __webpack_require__("../../../../../src/app/selfregistration/selfregistration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__training_detail_training_detail_component__ = __webpack_require__("../../../../../src/app/training-detail/training-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__training_manager_training_manager_component__ = __webpack_require__("../../../../../src/app/training-manager/training-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__authguard_guard__ = __webpack_require__("../../../../../src/app/authguard.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// const routes: Routes = [{path: '', component: LoginComponent},
var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */] },
    { path: 'training-detail', canActivate: [__WEBPACK_IMPORTED_MODULE_17__authguard_guard__["a" /* AuthguardGuard */]], component: __WEBPACK_IMPORTED_MODULE_15__training_detail_training_detail_component__["a" /* TrainingDetailComponent */] },
    { path: 'manager', canActivate: [__WEBPACK_IMPORTED_MODULE_17__authguard_guard__["a" /* AuthguardGuard */]], component: __WEBPACK_IMPORTED_MODULE_16__training_manager_training_manager_component__["a" /* TrainingManagerComponent */] },
    // { path: 'training-detail', component:  TrainingDetailComponent
    //  },
    { path: 'training-detail/courses/:id', component: __WEBPACK_IMPORTED_MODULE_13__day_day_component__["a" /* DayComponent */] },
    { path: 'courses/:id', component: __WEBPACK_IMPORTED_MODULE_13__day_day_component__["a" /* DayComponent */] },
    { path: 'training-detail/courses/:id/lessons/:id', component: __WEBPACK_IMPORTED_MODULE_12__lesson_lesson_component__["a" /* LessonComponent */] },
    { path: 'courses/:id/lessons/:id', component: __WEBPACK_IMPORTED_MODULE_12__lesson_lesson_component__["a" /* LessonComponent */] },
    { path: 'dashboard', canActivate: [__WEBPACK_IMPORTED_MODULE_17__authguard_guard__["a" /* AuthguardGuard */]], component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'scheduled-programs', component: __WEBPACK_IMPORTED_MODULE_10__scheduled_programs_scheduled_programs_component__["a" /* ScheduledProgramsComponent */] },
    { path: 'scheduled-programs/training-program/:id', component: __WEBPACK_IMPORTED_MODULE_8__training_program_training_program_component__["a" /* TrainingProgramComponent */] },
    { path: 'scheduled-programs/training-program/:id/course', component: __WEBPACK_IMPORTED_MODULE_6__course_course_component__["a" /* CourseComponent */] },
    { path: 'scheduled-programs/training-program/:id/course/course-detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__course_detail_course_detail_component__["a" /* CourseDetailComponent */] },
    { path: 'scheduled-programs/training-program/:id/course/course-detail/:id/module', component: __WEBPACK_IMPORTED_MODULE_4__module_module_component__["a" /* ModuleComponent */] },
    { path: 'inprogress/training-program/:id', component: __WEBPACK_IMPORTED_MODULE_8__training_program_training_program_component__["a" /* TrainingProgramComponent */] },
    { path: 'inprogress/training-program/:id/course', component: __WEBPACK_IMPORTED_MODULE_6__course_course_component__["a" /* CourseComponent */] },
    { path: 'inprogress/training-program/:id/course/course-detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__course_detail_course_detail_component__["a" /* CourseDetailComponent */] },
    { path: 'inprogress/training-program/:id/course/course-detail/:id/module', component: __WEBPACK_IMPORTED_MODULE_4__module_module_component__["a" /* ModuleComponent */] },
    { path: 'completed/training-program/:id', component: __WEBPACK_IMPORTED_MODULE_8__training_program_training_program_component__["a" /* TrainingProgramComponent */] },
    { path: 'completed/training-program/:id/course', component: __WEBPACK_IMPORTED_MODULE_6__course_course_component__["a" /* CourseComponent */] },
    { path: 'completed/training-program/:id/course/course-detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__course_detail_course_detail_component__["a" /* CourseDetailComponent */] },
    { path: 'completed/training-program/:id/course/course-detail/:id/module', component: __WEBPACK_IMPORTED_MODULE_4__module_module_component__["a" /* ModuleComponent */] },
    { path: 'scheduled-programs/student', component: __WEBPACK_IMPORTED_MODULE_7__student_student_component__["a" /* StudentComponent */] },
    { path: 'student', component: __WEBPACK_IMPORTED_MODULE_7__student_student_component__["a" /* StudentComponent */] },
    { path: 'training-program', component: __WEBPACK_IMPORTED_MODULE_8__training_program_training_program_component__["a" /* TrainingProgramComponent */] },
    { path: 'course-detail', component: __WEBPACK_IMPORTED_MODULE_5__course_detail_course_detail_component__["a" /* CourseDetailComponent */] },
    { path: 'course-detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__course_detail_course_detail_component__["a" /* CourseDetailComponent */] },
    { path: 'course-detail/:id/module', component: __WEBPACK_IMPORTED_MODULE_4__module_module_component__["a" /* ModuleComponent */] },
    { path: 'module', component: __WEBPACK_IMPORTED_MODULE_4__module_module_component__["a" /* ModuleComponent */] },
    { path: 'training-program/:id', component: __WEBPACK_IMPORTED_MODULE_8__training_program_training_program_component__["a" /* TrainingProgramComponent */] },
    { path: 'training-program/:id/course', component: __WEBPACK_IMPORTED_MODULE_6__course_course_component__["a" /* CourseComponent */] },
    { path: 'training-program/:id/course/course-detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__course_detail_course_detail_component__["a" /* CourseDetailComponent */] },
    { path: 'training-program/:id/course/course-detail/:id/module', component: __WEBPACK_IMPORTED_MODULE_4__module_module_component__["a" /* ModuleComponent */] },
    { path: 'manager/selfregistration/:code', component: __WEBPACK_IMPORTED_MODULE_14__selfregistration_selfregistration_component__["a" /* SelfregistrationComponent */] },
    { path: 'student/selfregistration/:code', component: __WEBPACK_IMPORTED_MODULE_14__selfregistration_selfregistration_component__["a" /* SelfregistrationComponent */] },
    { path: 'inprogress', component: __WEBPACK_IMPORTED_MODULE_3__inprogress_inprogress_component__["a" /* InprogressComponent */] },
    { path: 'completed', component: __WEBPACK_IMPORTED_MODULE_2__completed_completed_component__["a" /* CompletedComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // Create an instance of the DataService through dependency injection
    function AppComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this.title = 'app1';
        // Access the Data Service's getUsers() method we defined
        this._dataService.getUsers()
            .subscribe(function (res) { return _this.getdata(_this.users = res); });
    }
    AppComponent.prototype.getdata = function (result) {
        //console.log(res);
        var lessons = result.map(function (data) { return data.catalogue[0].UNMASTraining[0].courses[0].modules[0].lessons; });
        //console.log(lessons[0]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>',
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chapter_chapter_service__ = __webpack_require__("../../../../../src/app/chapter/chapter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lesson_lesson_service__ = __webpack_require__("../../../../../src/app/lesson/lesson.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chapter_chapter_component__ = __webpack_require__("../../../../../src/app/chapter/chapter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lesson_lesson_component__ = __webpack_require__("../../../../../src/app/lesson/lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__day_day_component__ = __webpack_require__("../../../../../src/app/day/day.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__question_bank_dynamic_form_question_dynamic_form_question_component__ = __webpack_require__("../../../../../src/app/question-bank/dynamic-form-question/dynamic-form-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__training_detail_training_detail_component__ = __webpack_require__("../../../../../src/app/training-detail/training-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__scheduled_programs_scheduled_programs_component__ = __webpack_require__("../../../../../src/app/scheduled-programs/scheduled-programs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__training_program_training_program_component__ = __webpack_require__("../../../../../src/app/training-program/training-program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__student_student_component__ = __webpack_require__("../../../../../src/app/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__course_course_component__ = __webpack_require__("../../../../../src/app/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__module_module_component__ = __webpack_require__("../../../../../src/app/module/module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__match_height_directive__ = __webpack_require__("../../../../../src/app/match-height.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__left_nav_left_nav_component__ = __webpack_require__("../../../../../src/app/left-nav/left-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__email_email_component__ = __webpack_require__("../../../../../src/app/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__course_detail_course_detail_component__ = __webpack_require__("../../../../../src/app/course-detail/course-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__authguard_guard__ = __webpack_require__("../../../../../src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__selfregistration_selfregistration_component__ = __webpack_require__("../../../../../src/app/selfregistration/selfregistration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__inprogress_inprogress_component__ = __webpack_require__("../../../../../src/app/inprogress/inprogress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__completed_completed_component__ = __webpack_require__("../../../../../src/app/completed/completed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular_io_datepicker_src_datepicker__ = __webpack_require__("../../../../angular-io-datepicker/src/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular_io_datepicker_src_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_angular_io_datepicker_src_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__training_manager_training_manager_component__ = __webpack_require__("../../../../../src/app/training-manager/training-manager.component.ts");
/* unused harmony export provideConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var config = new __WEBPACK_IMPORTED_MODULE_36_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_36_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_36_angular4_social_login__["GoogleLoginProvider"]("123010608103-3mvjgn7qmtvd1t2gd0hgk4rfebn49if1.apps.googleusercontent.com")
        //provider: new GoogleLoginProvider("1029688053841-edg82sso9d7t27fvp8dofifpdb1vtgdd.apps.googleusercontent.com")
    }
]);
function provideConfig() {
    return config;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__chapter_chapter_component__["a" /* ChapterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__lesson_lesson_component__["a" /* LessonComponent */],
            __WEBPACK_IMPORTED_MODULE_9__day_day_component__["a" /* DayComponent */],
            __WEBPACK_IMPORTED_MODULE_12__question_bank_dynamic_form_question_dynamic_form_question_component__["a" /* DynamicFormQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_13__training_detail_training_detail_component__["a" /* TrainingDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__scheduled_programs_scheduled_programs_component__["a" /* ScheduledProgramsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__training_program_training_program_component__["a" /* TrainingProgramComponent */],
            __WEBPACK_IMPORTED_MODULE_20__student_student_component__["a" /* StudentComponent */],
            __WEBPACK_IMPORTED_MODULE_21__course_course_component__["a" /* CourseComponent */],
            __WEBPACK_IMPORTED_MODULE_22__module_module_component__["a" /* ModuleComponent */],
            __WEBPACK_IMPORTED_MODULE_23__match_height_directive__["a" /* MatchHeightDirective */],
            __WEBPACK_IMPORTED_MODULE_24__left_nav_left_nav_component__["a" /* LeftNavComponent */],
            __WEBPACK_IMPORTED_MODULE_25__email_email_component__["a" /* EmailComponent */],
            __WEBPACK_IMPORTED_MODULE_26__course_detail_course_detail_component__["a" /* CourseDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_29__selfregistration_selfregistration_component__["a" /* SelfregistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_30__inprogress_inprogress_component__["a" /* InprogressComponent */],
            __WEBPACK_IMPORTED_MODULE_31__completed_completed_component__["a" /* CompletedComponent */],
            __WEBPACK_IMPORTED_MODULE_37__training_manager_training_manager_component__["a" /* TrainingManagerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_32_angular_io_datepicker_src_datepicker__["DatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_35_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_36_angular4_social_login__["SocialLoginModule"]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_36_angular4_social_login__["AuthServiceConfig"],
                useFactory: provideConfig
            },
            __WEBPACK_IMPORTED_MODULE_4__chapter_chapter_service__["a" /* ChapterService */],
            __WEBPACK_IMPORTED_MODULE_5__lesson_lesson_service__["a" /* LessonService */],
            __WEBPACK_IMPORTED_MODULE_27__shared_data_service__["a" /* SharedDataService */],
            __WEBPACK_IMPORTED_MODULE_28__authguard_guard__["a" /* AuthguardGuard */],
            __WEBPACK_IMPORTED_MODULE_33__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_34__login_login_service__["a" /* LoginService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authguard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Auth Guard to guard the pages against restricted users */
var AuthguardGuard = (function () {
    function AuthguardGuard(sharedservice) {
        this.sharedservice = sharedservice;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        return this.sharedservice.getUserLoggedIn();
    };
    return AuthguardGuard;
}());
AuthguardGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */]) === "function" && _a || Object])
], AuthguardGuard);

var _a;
//# sourceMappingURL=authguard.guard.js.map

/***/ }),

/***/ "../../../../../src/app/chapter/chapter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chapter/chapter.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/chapter/chapter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chapter_service__ = __webpack_require__("../../../../../src/app/chapter/chapter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChapterComponent = (function () {
    function ChapterComponent(chapterservice, route) {
        this.chapterservice = chapterservice;
        this.route = route;
        this.chapters = [];
    }
    /* Invoke the getChapters function of Chapter Service and fetch all the chapters  */
    // getChaptersLession1() {
    // this.chapterservice.getChaptersLession1();
    // }
    // getChaptersLession2() {
    //   this.chapterservice.getChaptersLession2();
    // }
    // getChaptersLession3() {
    //   this.chapterservice.getChaptersLession3();
    // }
    // getChaptersLession4() {
    // this.chapterservice.getChaptersLession4();
    // }
    // getChaptersLession5() {
    // this.chapterservice.getChaptersLession5();
    // }
    // getChaptersLession6() {
    // this.chapterservice.getChaptersLession6();
    // }
    ChapterComponent.prototype.ngOnInit = function () {
        // this.getChaptersLession1();
        // this.getChaptersLession2();
        // this.getChaptersLession3();
        // this.getChaptersLession4();
        // this.getChaptersLession5();
        // this.getChaptersLession6();
    };
    return ChapterComponent;
}());
ChapterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chapter-list',
        template: __webpack_require__("../../../../../src/app/chapter/chapter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chapter/chapter.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__chapter_service__["a" /* ChapterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chapter_service__["a" /* ChapterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chapter_service__["a" /* ChapterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ChapterComponent);

var _a, _b;
//# sourceMappingURL=chapter.component.js.map

/***/ }),

/***/ "../../../../../src/app/chapter/chapter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Chapter Service to do Chapter data related functions */
var ChapterService = (function () {
    /* Fetches all the Chapters from database */
    //  getChaptersLession1(): Chapter[] {
    //     return this.CHAPTERSLession1;
    //   }
    //   getChaptersLession2(): Chapter[] {
    //     return this.CHAPTERSLession2;
    //   }
    //   getChaptersLession3(): Chapter[] {
    //     return this.CHAPTERSLession3;
    //   }
    //   getChaptersLession4(): Chapter[] {
    //     return this.CHAPTERSLession4;
    //   }
    //   getChaptersLession5(): Chapter[] {
    //     return this.CHAPTERSLession5;
    //   }
    //   getChaptersLession6(): Chapter[] {
    //     return this.CHAPTERSLession6;
    //   }
    function ChapterService(_dataService) {
        this._dataService = _dataService;
        this.isDataAvailable = false;
        this.CHAPTERSLession1 = [];
        // this._dataService.getUsers()
        // .subscribe(res => this.getdata(this.users = res));  
    }
    ChapterService.prototype.getdata = function (result) {
        //console.log(res);
        //  let lessons = result.map(data => data.catalogue[0].UNMASTraining[0].courses[0].modules[0].lessons[0].chapters);  
        //  let lessionData=lessons[0];   
        //  lessionData.forEach(element => {       
        //   this.CHAPTERS.push({id: element.id ,name:element.name, chapterType: element.type, title: element.title, path: element.path, body: element.body, thumbnail:''});
        //  });        
        //  this.isDataAvailable=true;
    };
    return ChapterService;
}());
ChapterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ChapterService);

var _a;
//# sourceMappingURL=chapter.service.js.map

/***/ }),

/***/ "../../../../../src/app/completed/completed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/completed/completed.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n<body>\n  <!-- Navigation -->\n   <navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12\">\n        <div class=\"row display-flex\">\n          <div class=\"col-md-2  right-margin\">\n            <!--Left Navigation-->\n            <left-nav></left-nav>\n             \n            </div>\n          <!--col-sm-2-->\n          <div class=\"col-sm-12 col-md-10  screen\" style=\"min-height:525px\">\n           <div class=\"row\" style=\"padding-left:15px;padding-top:10px\">\n              <h6 class=\"heading-text\"> Completed Training Programmes </h6>\n            </div>\n              <!--/.com-sm-10-->\n              <div class=\"container\" *ngFor=\"let program of CompletedPrograms\">\n            <div class=\"row\" style=\"padding-bottom:50px\">\n              <div class=\"col-sm-12 col-md-12 col-lg-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\" col-sm-2 col-md-1 col-lg-1\">\n                  <img src=\"{{program.thumbnailsrc}}\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-6 col-md-5 col-lg-6 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\"> {{program.title}}</h6>\n                  <div class=\"body-text\"> Training: {{program.trainingName}}\n                    <br> Scheduled Date: {{program.trainingFromDate}} - {{program.trainingToDate}} </div>\n                </div>\n                <div class=\"col-sm-8 col-md-5 col-lg-4 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px\">\n                  <div>\n                    <button type=\"button\" class=\"btn btn-sm button-show-style\" style=\"float:left\" (click)=\"onShowDetails(program.trainingName,program.id)\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show\n                        <br> Details </h4>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-sm button-view-style\" style=\"float:right;\">\n                      <h4 class=\"body-text\" style=\"color:white\"> View\n                        <br> Students </h4>\n                    </button>\n                   </div>\n                </div>\n              </div>\n              </div>\n            </div>\n         \t</div>   \n          </div>\n         </div>\n      </div>\n     </div>\n      <!-- /.row -->\n      <!--/.container-->\n      <!--footer-->\n      <footer>\n      <myfooter></myfooter>      </footer>\n      <!-- /.container -->\n      \n      <!-- jQuery -->\n      <script src=\"js/jquery.js\"></script>\n      <!-- Bootstrap Core JavaScript -->\n      <script src=\"js/bootstrap.min.js\"></script>\n    </div>\n   \n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/completed/completed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_programs_scheduled_programs_service__ = __webpack_require__("../../../../../src/app/scheduled-programs/scheduled-programs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompletedComponent = (function () {
    function CompletedComponent(spservice, router, sharedservice, activated) {
        this.spservice = spservice;
        this.router = router;
        this.sharedservice = sharedservice;
        this.activated = activated;
    }
    /* function to fetch the inprogress training programs from the service for program coordinator  */
    CompletedComponent.prototype.getCompletedTrainingPrograms = function () {
        return this.spservice.getCompletedTrainingPrograms();
    };
    /* save the training name in shared service to fetch by other component */
    CompletedComponent.prototype.saveTrainingName = function (trainingname) {
        return this.sharedservice.saveTrainingName(trainingname);
    };
    /* function when Show Details button is clicked */
    CompletedComponent.prototype.onShowDetails = function (trainingname, trainingid) {
        this.saveTrainingName(trainingname);
        this.router.navigate(['./training-program', trainingid], { relativeTo: this.activated });
    };
    CompletedComponent.prototype.ngOnInit = function () {
        this.CompletedPrograms = this.getCompletedTrainingPrograms();
    };
    return CompletedComponent;
}());
CompletedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'completed',
        template: __webpack_require__("../../../../../src/app/completed/completed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/completed/completed.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], CompletedComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=completed.component.js.map

/***/ }),

/***/ "../../../../../src/app/course-detail/course-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/course-detail/course-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head> \n<body>\n  <!-- Navigation -->\n  <navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row display-flex\">\n          <div class=\"col-md-2 right-margin\">\n            <!--Left Navigation-->\n            <left-nav></left-nav>\n          </div>\n          <!--col-sm-2-->\n          <div class=\"col-sm-9 col-md-10\" style=\"min-height:525px\">\n          <div  *ngIf=\"show=='all-courses' then template1;\">\n          </div>\n           <div  *ngIf=\"show=='course' then template2;\">\n          </div>\n          <!-- Template to show All courses -->\n           <ng-template #template1>\n          <div class=\"row panel-margin\" style=\"padding-top:10px\">\n              <h6 class=\"heading-text\"> All Courses</h6>\n            </div>\n            <!--/.com-sm-10-->\n            <div *ngFor=\"let course of Courses\">\n            <div class=\"row panel-margin\" style=\"padding-top:10px;padding-bottom:10px\">\n              <div class=\"col-sm-12 col-md-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\"col-lg-1 col-sm-2 col-md-1\">\n                  <img src=\"{{course.thumbnailsrc}}\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-8 col-md-6 col-lg-7 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\">{{course.courseName}}</h6>\n                  <div class=\"body-text\"> Created By:{{course.createdBy}}\n                    <br> Scheduled Date: {{course.scheduledDate}}</div>\n                </div>\n                <div class=\"col-sm-5 col-md-4 col-lg-3 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px;padding-bottom:20px\">\n                  <div>\n                  <a (click)=\"onShowDetails(course.courseName,course.id)\">\n                    <button type=\"button\" class=\"btn btn-sm button-view-style show-detail-size\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show more\n                        <br> Details </h4>\n                    </button>\n                    </a>\n                  </div>\n                </div>\n              </div>\n              </div>\n            </div>\n            </div>\n          </ng-template>\n         <!-- Template to list out courses for a particular training -->\n          <ng-template #template2>\n\t\t\t<div class=\"row  panel-margin\" style=\"padding-top:10px;\">\n              <h6 class=\"heading-text\">Landmines and Explosive Remnants of War\n                <br><span style=\"padding-left:40px;\">- &gt; </span>Landmines and Explosive Remnants of War 1\n                <br><span style=\"padding-left:80px\">- &gt; {{coursename}}</span></h6>\n            </div>\n            <div class=\"row panel-margin\"  style=\"padding-top:10px;padding-bottom:10px\">\n              <div class=\"col-sm-12 col-md-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\"col-lg-1 col-sm-2 col-md-1\">\n                  <img src=\"../assets/images/thumbnail.jpg\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-8 col-md-6 col-lg-7\">\n                  <h6 class=\"heading-text image-align zero-padding\">Modules (Total: {{modulecount}})</h6>\n                  <div class=\"body-text\"> Created By: UNMAS, Libya\n                    <br> Scheduled Date: Nov-23-2016 </div>\n                </div>\n                <div class=\"col-sm-5 col-md-4 col-lg-3 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px;padding-bottom:20px\">\n                  <div>\n                  <a [routerLink]=\"['module']\">\n                    <button type=\"button\" class=\"btn btn-sm button-view-style show-detail-size\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show all\n                        <br> Modules </h4>\n                    </button>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            </div>\n            <div class=\"row panel-margin\" style=\"padding-top:20px\">\n              <div class=\"col-sm-12 col-md-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\"col-lg-1 col-sm-2 col-md-2\">\n                  <img src=\"../assets/images/thumbnail.jpg\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-8 col-md-5 col-lg-7\">\n                  <h6 class=\"heading-text image-align zero-padding\">Exercises</h6>\n                  <div class=\"body-text\"> Created By: UNMAS, Libya\n                    <br> Scheduled Date: Nov-23-2016 </div>\n                </div>\n                <div class=\"col-sm-5 col-md-4 col-lg-3 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px;padding-bottom:20px\">\n                  <div>\n                    <button type=\"button\" class=\"btn btn-sm button-view-style show-detail-size\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show all\n                        <br> Exercises </h4>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            </div>\n            <div class=\"row panel-margin\" style=\"padding-top:20px; padding-bottom:30px\">\n              <div class=\"col-sm-12 col-md-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\"col-lg-1 col-sm-2 col-md-2\">\n                  <img src=\"../assets/images/thumbnail.jpg\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-8 col-md-5 col-lg-7\">\n                  <h6 class=\"heading-text image-align zero-padding\">Random Quiz</h6>\n                  <div class=\"body-text\"> Created By: UNMAS, Libya\n                    <br> Scheduled Date: Nov-23-2016 </div>\n                </div>\n                <div class=\"col-sm-5 col-md-4 col-lg-3 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px;padding-bottom:20px\">\n                  <div>\n                    <button type=\"button\" class=\"btn btn-sm button-view-style show-detail-size\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show more\n                        <br> Details </h4>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n           </div>\n          </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /.row -->\n    <!--/.container-->\n    <!--footer-->\n    <footer>\n     <myfooter></myfooter>\n    </footer>\n    <!-- /.container -->\n    <!-- jQuery -->\n    <script src=\"js/jquery.js\"></script>\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"js/bootstrap.min.js\"></script>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/course-detail/course-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_module_service__ = __webpack_require__("../../../../../src/app/module/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_course_service__ = __webpack_require__("../../../../../src/app/course/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseDetailComponent = (function () {
    function CourseDetailComponent(moduleservice, router, courseservice, route, sharedservice) {
        this.moduleservice = moduleservice;
        this.router = router;
        this.courseservice = courseservice;
        this.route = route;
        this.sharedservice = sharedservice;
        this.show = 'all-courses';
        this.coursename = this.getCourseName();
    }
    /* function to fetch Course name from Shared Service */
    CourseDetailComponent.prototype.getCourseName = function () {
        return this.sharedservice.getCourseName();
    };
    /* function to fetch all the Courses from Course Service */
    CourseDetailComponent.prototype.getAllCourses = function () {
        return this.courseservice.getAllCourses();
    };
    /* Get the number of modules for this course */
    CourseDetailComponent.prototype.getModuleCount = function () {
        return this.moduleservice.getModuleCount();
    };
    /* Save the selected course name in shared service */
    CourseDetailComponent.prototype.saveCourseName = function (coursename) {
        return this.sharedservice.saveCourseName(coursename);
    };
    /* Navigate to course detail page on click of Show Details */
    CourseDetailComponent.prototype.onShowDetails = function (coursename, courseid) {
        this.saveCourseName(coursename);
        this.show = 'course';
        this.id = courseid;
        this.modulecount = this.moduleservice.getModuleCount();
        this.router.navigate(['./course-detail', this.id]);
    };
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        /* If id is passed as a param in url, show that course */
        if (this.route.snapshot.params.id) {
            this.show = 'course';
            this.modulecount = this.moduleservice.getModuleCount();
        } /* else show all courses*/
        else {
            this.Courses = this.getAllCourses();
            this.sharedservice.saveSelectedLink('all-courses');
        }
    };
    return CourseDetailComponent;
}());
CourseDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-course-detail',
        template: __webpack_require__("../../../../../src/app/course-detail/course-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/course-detail/course-detail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__module_module_service__["a" /* ModuleService */], __WEBPACK_IMPORTED_MODULE_2__course_course_service__["a" /* CourseService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__module_module_service__["a" /* ModuleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__module_module_service__["a" /* ModuleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__course_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__course_course_service__["a" /* CourseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["a" /* SharedDataService */]) === "function" && _e || Object])
], CourseDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=course-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/course/course.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n\t<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n\t<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head> \n<body>\n  <!-- Navigation -->\n  <navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row display-flex\">\n          <div class=\"col-md-2 right-margin\">\n            <!--Left Navigation-->\n            <left-nav></left-nav>\n          </div>\n          <!--col-sm-2-->\n          <div class=\"col-sm-9 col-md-10\" style=\"min-height:525px\">\n\t\t\t<div class=\"row panel-margin\" style=\"padding-top:10px\">\n              <h6 class=\"heading-text\"> UN SaferGuard on the IATG, Libya, Dec\n                <br><span style=\"padding-left:40px\">- &gt; UN SaferGuard on the IATG</span> \n              </h6>\n            </div>\n            <div class=\"row panel-margin\">\n              <h6 class=\"heading-text\"> Courses List </h6>\n            </div>\n            <!--/.com-sm-9 col-md-10-->\n            <!-- List all the courses -->\n           <div *ngFor=\"let course of Courses\">\n            <div class=\"row panel-margin\" style=\"padding-top:20px;padding-bottom:10px\">\n              <div class=\"col-sm-12 col-md-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\"col-lg-1 col-sm-2 col-md-1\">\n                  <img src=\"{{course.thumbnailsrc}}\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-8 col-md-6 col-lg-7 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\">{{course.courseName}}</h6>\n                  <div class=\"body-text\"> Created By:{{course.createdBy}}\n                    <br> Scheduled Date: {{course.scheduledDate}}</div>\n                </div>\n                <div class=\"col-sm-5 col-md-4 col-lg-3 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px;padding-bottom:20px\">\n                  <div>\n                  <a (click)=\"onShowDetails(course.courseName,course.id)\">\n                    <button type=\"button\" class=\"btn btn-sm button-view-style show-detail-size\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show more\n                        <br> Details </h4>\n                    </button>\n                    </a>\n                  </div>\n                </div>\n              </div>\n             </div>\n            </div>\n           </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /.row -->\n    <!--/.container-->\n    <!--footer-->\n    <footer>\n     <myfooter></myfooter>\n    </footer>\n    <!-- /.container -->\n    <!-- jQuery -->\n    <script src=\"js/jquery.js\"></script>\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"js/bootstrap.min.js\"></script>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_service__ = __webpack_require__("../../../../../src/app/course/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseComponent = (function () {
    function CourseComponent(courseservice, sharedservice, router, activated) {
        this.courseservice = courseservice;
        this.sharedservice = sharedservice;
        this.router = router;
        this.activated = activated;
    }
    /* Save course name in shared service to obtain it in the next page */
    CourseComponent.prototype.saveCourseName = function (coursename) {
        return this.sharedservice.saveCourseName(coursename);
    };
    /*  Navigate to couse detail page on click of Show Details button */
    CourseComponent.prototype.onShowDetails = function (coursename, courseid) {
        this.saveCourseName(coursename);
        this.router.navigate(['./course-detail', courseid], { relativeTo: this.activated });
    };
    /* function to fetch the courses */
    CourseComponent.prototype.getCourses = function () {
        return this.courseservice.getCourses();
    };
    /* save link in shared service to highlight the selected link in left nav */
    CourseComponent.prototype.saveSelectedLink = function (selectedlink) {
        return this.sharedservice.saveSelectedLink(selectedlink);
    };
    CourseComponent.prototype.ngOnInit = function () {
        this.Courses = this.getCourses();
    };
    return CourseComponent;
}());
CourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'course',
        template: __webpack_require__("../../../../../src/app/course/course.component.html"),
        styles: [__webpack_require__("../../../../../src/app/course/course.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__course_service__["a" /* CourseService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], CourseComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=course.component.js.map

/***/ }),

/***/ "../../../../../src/app/course/course.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Service to manipulate all Course related data */

var CourseService = (function () {
    function CourseService() {
        this.COURSES = [{ id: 1, courseName: 'SG1: Ammunition Support to UN Field Operations', scheduledDate: 'Nov-23-2016', createdBy: 'UNMAS, Libya', thumbnailsrc: '../assets/images/thumbnail.jpg' },
            { id: 2, courseName: 'SG2: Small Unit Ammunition Stockpile Management', scheduledDate: 'Nov-23-2016', createdBy: 'UNMAS, Libya', thumbnailsrc: '../assets/images/thumbnail.jpg' },
            { id: 3, courseName: 'SG3: Millitary Ammunition Stockpile Management', scheduledDate: 'Nov-23-2016', createdBy: 'UNMAS, Libya', thumbnailsrc: '../assets/images/thumbnail.jpg' },
            { id: 4, courseName: 'SG4: Ammunition Accounting and Tracing', scheduledDate: 'Nov-23-2016', createdBy: 'UNMAS, Libya', thumbnailsrc: '../assets/images/thumbnail.jpg' },
            { id: 5, courseName: 'SG5: UN Police Ammunition Tracing Support', scheduledDate: 'Nov-23-2016', createdBy: 'UNMAS, Libya', thumbnailsrc: '../assets/images/thumbnail.jpg' },
        ];
    }
    /* Function to fetch courses */
    CourseService.prototype.getCourses = function () {
        return this.COURSES;
    };
    /* Function to fetch courses depending on training id */
    CourseService.prototype.getCourseName = function (id) {
        return this.COURSES[0].courseName;
    };
    /* Function the fetch the number of courses in a training */
    CourseService.prototype.getCourseCount = function () {
        return 5;
    };
    /* Function to fetch all courses */
    CourseService.prototype.getAllCourses = function () {
        return this.COURSES;
    };
    return CourseService;
}());
CourseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CourseService);

//# sourceMappingURL=course.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <script src=\"https://code.jquery.com/jquery-3.1.1.min.js\" crossorigin=\"anonymous\"></script>\n  <script data-require=\"angular.js@1.4.x\" src=\"https://code.angularjs.org/1.4.12/angular.js\" data-semver=\"1.4.9\"></script>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n\n<body>\n  <!-- Navigation -->\n  <navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12\">\n        <div class=\"row display-flex\">\n          <div class=\"col-md-2 right-margin\">\n            <!--Left Navigation-->\n            <left-nav></left-nav>\n          </div>\n          <!--col-sm-2-->\n          <div class=\"col-sm-12 col-md-10 \" style=\"min-height:525px\">\n            <div class=\"row\" style=\"padding-left:15px;padding-top:10px\">\n              <h6 class=\"heading-text\"> Training Program </h6>\n              <br>\n              <br>\n            </div>\n            <!--/.com-sm-10-->\n\n            <!-- <div class=\"row\" style=\"padding-left:15px;padding-top:10px\">\n              <h6 class=\"heading-text\"> All Training Programmes </h6>\n            </div> -->\n            <!--/.com-sm-10-->\n            <div class=\"container\" *ngFor=\"let program of training\">\n            <div class=\"row\" style=\"padding-bottom:50px\">\n              <div class=\"col-sm-12 col-md-12 col-lg-12 panelbg zero-padding\">\n              <div class=\"row\">             \n                <div class=\"col-sm-6 col-md-5 col-lg-6 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\"> Program Name: {{program.name}}</h6>\n                  <div class=\"body-text\"> \n                    <br> Program Manager Name: {{program.program_manager}}  </div>\n                    <div class=\"body-text\"> \n                      <br> Program Manager Email: {{program.program_manager_email}}  </div>\n                  <div class=\"body-text\"> \n                    <br> Start Date: {{program.start_date}} - End Date:{{program.end_date}} </div>\n                </div>\n                <div class=\"col-sm-8 col-md-5 col-lg-4 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px\">\n                  <div>\n                    <!-- <button type=\"button\" class=\"btn btn-sm button-show-style\" style=\"float:left\" (click)=\"onShowDetails(training.trainingName,training.id)\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show\n                        <br> Details </h4>\n                    </button> -->\n                  \n                    <button type=\"button\" class=\"btn btn-sm button-view-style\" style=\"float:right;\" (click)=\"viewstudent(program.program_manager_email)\">\n                      <h4 class=\"body-text\" style=\"color:white\"> View\n                        <br> Students </h4>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              </div>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n  <!--/.container-->\n  <!--footer-->\n  <footer>\n    <myfooter></myfooter>\n  </footer>\n  <!-- /.container -->\n  <!-- jQuery -->\n  <script src=\"js/jquery.js\"></script>\n  <!-- Bootstrap Core JavaScript -->\n  <script src=\"js/bootstrap.min.js\"></script>\n\n</body>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduled_programs_scheduled_programs_service__ = __webpack_require__("../../../../../src/app/scheduled-programs/scheduled-programs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_student_service__ = __webpack_require__("../../../../../src/app/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = (function () {
    function DashboardComponent(router, _dataService, sharedservice, spservice, studservice) {
        var _this = this;
        this.router = router;
        this._dataService = _dataService;
        this.sharedservice = sharedservice;
        this.spservice = spservice;
        this.studservice = studservice;
        this.count = 0;
        this._dataLabels = [];
        /* Data Values for Doughnut Chart */
        this.doughnutChartLabels = ['Scheduled', 'Inprogress', 'Completed'];
        this.doughnutChartData = [34, 6, 60];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartOptions = {
            responsive: true
        };
        /* Data Values for Bar Chart */
        this.studbarChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.training = [];
        this.studbarChartType = 'bar';
        this.studbarChartLegend = false;
        /* Data Values for Bar Chart */
        this.statusbarChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.statusbarChartLabels = ['invited', 'enrolled', 'active', 'inactive', 'completed', 'failed'];
        this.statusbarChartType = 'bar';
        this.statusbarChartLegend = false;
        this._dataService.getTraining()
            .subscribe(function (res) { return _this.gettraining(res); });
    }
    DashboardComponent.prototype.gettraining = function (result) {
        //console.log(res);
        var lessionData;
        var lessons = result.map(function (data) { return data.training_program; });
        //this.training=lessons[0];  
        var x = lessons[0];
        if (this.sharedservice.getUserRole() != 'admin')
            for (var i = 0; i < x.length; i++) {
                if (x[i].program_manager_email == this.UserName) {
                    this.training.push(x[i]);
                    break;
                }
            }
        else
            this.training = lessons[0];
        //console.log(this.training);
    };
    DashboardComponent.prototype.getUserRole = function () {
        return this.sharedservice.getUserRole();
    };
    DashboardComponent.prototype.viewstudent = function (program_manager_email) {
        //console.log(program_manager_email);
        this.sharedservice.saveSelectedManager(program_manager_email);
        this.router.navigate(['student']);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* save the link in shared service to highlight the left nav */
        this.sharedservice.currentMessage1.subscribe(function (message) { return _this.UserName = message; });
        this.userRole = this.getUserRole();
        this.saveSelectedLink('dashboard');
        /* render the Student and Student Status Charts with dynamic data*/
        this.updateStudChart(this.getScheduledPrograms());
        this.updateStatusChart(this.statusbarChartLabels);
    };
    /* function to save the selected link in shared service */
    DashboardComponent.prototype.saveSelectedLink = function (selectedlink) {
        return this.sharedservice.saveSelectedLink(selectedlink);
    };
    /* get the scheduled programs from database */
    DashboardComponent.prototype.getScheduledPrograms = function () {
        return this.spservice.getScheduledPrograms();
    };
    /* function to fetch the inprogress training programs from the service for program coordinator  */
    DashboardComponent.prototype.getInprogressTrainingPrograms = function () {
        return this.spservice.getInprogressTrainingPrograms();
    };
    /* function to fetch the completed training programs from the service for program coordinator  */
    DashboardComponent.prototype.getCompletedTrainingPrograms = function () {
        return this.spservice.getCompletedTrainingPrograms();
    };
    /* fetches the students from the database */
    DashboardComponent.prototype.getStudents = function () {
        return this.studservice.getStudents();
    };
    /* when a slice of doughtnut chart is clicked, update the other two charts dynamically */
    DashboardComponent.prototype.chartClicked = function (e) {
        this.selectedIndex = e.active[0]._index;
        /* if Scheduled is clicked */
        if (this.selectedIndex === 0) {
            this.updateStudChart(this.getScheduledPrograms());
            this._dataLabels = ['invited', 'enrolled'];
            this.updateStatusChart(this._dataLabels);
        }
        else if (this.selectedIndex === 1) {
            this.updateStudChart(this.getInprogressTrainingPrograms());
            this._dataLabels = ['invited', 'enrolled', 'active', 'inactive'];
            this.updateStatusChart(this._dataLabels);
        }
        else if (this.selectedIndex === 2) {
            this.updateStudChart(this.getCompletedTrainingPrograms());
            this._dataLabels = ['invited', 'enrolled', 'completed', 'failed'];
            this.updateStatusChart(this._dataLabels);
        }
    };
    /* fetches the invited students from the database */
    DashboardComponent.prototype.getTrainingStudentCountByStatus = function (stat) {
        return this.studservice.getTrainingStudentCountByStatus(stat);
    };
    /* function to update the Student Bar Chart */
    DashboardComponent.prototype.updateStudChart = function (datasets) {
        /* create local arrays for labels and datasets */
        var _dataSets = new Array(datasets.length);
        var _dataLabel = new Array(datasets.length);
        /* populate the local array */
        for (var i = 0; i < datasets.length; i++) {
            _dataSets[i] = { data: new Array(datasets.length), label: datasets[i].trainingName };
            _dataLabel[i] = datasets[i].trainingName;
            for (var j = 0; j < datasets.length; j++) {
                if (i === j)
                    _dataSets[i].data[j] = datasets[i].studentCount;
                else
                    _dataSets[i].data[j] = 0;
            }
        }
        /* assign the local arrays to chart data */
        this.studbarChartData = _dataSets;
        this.studbarChartLabels = _dataLabel;
        /* redraw the chart as there are data and label changes */
        if (this.studchart !== undefined) {
            this.studchart.chart.destroy();
            this.studchart.chart = 0;
            this.studchart.datasets = _dataSets;
            this.studchart.labels = _dataLabel;
            this.studchart.ngOnInit();
        }
    };
    /* function to update the Status Bar Chart */
    DashboardComponent.prototype.updateStatusChart = function (_dataLabels) {
        var count = 0;
        /* create local array for datasets */
        var _dataSets = new Array(_dataLabels.length);
        /* populate the local array */
        for (var i = 0; i < _dataLabels.length; i++) {
            count = this.getTrainingStudentCountByStatus(_dataLabels[i]);
            _dataSets[i] = { data: new Array(_dataLabels.length), label: _dataLabels[i] };
            for (var j = 0; j < _dataLabels.length; j++) {
                if (i === j)
                    _dataSets[i].data[j] = count;
                else
                    _dataSets[i].data[j] = 0;
            }
        }
        /* assign the local arrays to chart data */
        this.statusbarChartData = _dataSets;
        this.statusbarChartLabels = _dataLabels;
        /* redraw the chart as there are data and label changes */
        if (this.statuschart !== undefined) {
            this.statuschart.chart.destroy();
            this.statuschart.chart = 0;
            this.statuschart.datasets = _dataSets;
            this.statuschart.labels = _dataLabels;
            this.statuschart.ngOnInit();
        }
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("studbaseChart"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["BaseChartDirective"]) === "function" && _a || Object)
], DashboardComponent.prototype, "studchart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("statusbaseChart"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["BaseChartDirective"]) === "function" && _b || Object)
], DashboardComponent.prototype, "statuschart", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */], __WEBPACK_IMPORTED_MODULE_4__student_student_service__["a" /* StudentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__student_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__student_student_service__["a" /* StudentService */]) === "function" && _g || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
        this.serverAddress = "http://ec2-18-216-152-50.us-east-2.compute.amazonaws.com:3000/api/";
        this.localAddress = "http://localhost:3000/api/";
    }
    DataService.prototype.getUsers = function () {
        var _this = this;
        return this._http.get(this.serverAddress + "users")
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getTraining = function () {
        var _this = this;
        //return trainingPromise;
        return this._http.get(this.serverAddress + "trainings")
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getRoles = function () {
        var _this = this;
        return this._http.get(this.serverAddress + "roles")
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.postQuotes = function (Quotes) {
        var _this = this;
        return this._http.get(this.serverAddress + "quotes?id=1&name=Praveen&id=2&name=Praveen", Quotes)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.saveEmail = function (email) {
        var _this = this;
        return this._http.get(this.serverAddress + "manageremail?email=" + email)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.manageradd = function (email) {
        var _this = this;
        return this._http.get(this.serverAddress + "manageradd?email=" + email)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.sendEmail = function (email) {
        var _this = this;
        return this._http.get(this.serverAddress + "sendemail?email=" + email)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.sendEmailStudent = function (email) {
        var _this = this;
        return this._http.get(this.serverAddress + "sendemailstudent?email=" + email)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.saveName = function (name) {
        var _this = this;
        return this._http.get(this.serverAddress + "managername?name=" + name)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.saveStudent = function (name, email, manageremail) {
        var _this = this;
        return this._http.get(this.serverAddress + "studentname?name=" + name + "&email=" + email + "&manageremail=" + manageremail + "&position=" + 0)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.saveProgram = function (programname, startdate, enddate, managername, manageremail) {
        var _this = this;
        return this._http.get(this.serverAddress + "programcreate?programname=" + programname + "&startdate=" + startdate + "&enddate=" + enddate + "&managername=" + managername + "&manageremail=" + manageremail)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.saveRegistration = function (email) {
        var _this = this;
        return this._http.get(this.serverAddress + "regsave?email=" + email)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.saveEnroll = function (email) {
        var _this = this;
        return this._http.get(this.serverAddress + "enrollsave?email=" + email)
            .map(function (result) { return _this.result = result.json().data; });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/day/day.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day/day.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n<body>\n  <!-- Navigation -->\n   <navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\" *ngFor=\"let training of Training\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-12\">\n        <div class=\"row display-flex\">\n          <div class=\"col-md-3 col-lg-2 image-align right-margin block-style\">\n            <div class=\"row\">\n              <div class=\"col-lg-10 col-md-9 image-align\">\n                <div class=\"panelbg heading-text panel-border image-align text-center\" style=\"display:table;\"> \n                <span class=\"heading-text image-align\" style=\"display:table-cell;vertical-align:middle;\">\n                  {{training.trainingName}}\n                  </span> </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <!--Left Navigation-->\n              <nav class=\"nav navbar-toggleable-xs navbar-light bg-faded\">\n              <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t    <span class=\"navbar-toggler-icon\"></span>\n  \t\t\t\t\t\t</button>\n  \t\t\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"nav flex-column body-text\">\n            <li><h6 class=\"heading-text\"> Course Home </h6>\n            \t<ul class=\"nav flex-column body-text\" data-ng-init=\"active = true\">\n            \t\t<li *ngFor=\"let day of DAYS\" class=\"nav_item\">\n        \t\t\t\t<a class=\"nav-link\" (click)=\"onClicked(day)\" *ngIf = \"day === selectedDay\" class=\"dayitemselected\">{{day.title}}</a>\n        \t\t\t\t<a class=\"nav-link\" (click)=\"onClicked(day)\" *ngIf = \"day !== selectedDay\" class=\"nav-link\">{{day.title}}</a>\n        \t\t\t</li>\n            \t</ul>\n\t\t\t</li>\n\t\t\t<li><h6 class=\"heading-text\"> Grades </h6></li>\n\t\t\t<li><h6 class=\"heading-text\"> Course Info </h6></li>\n            </ul>\n            </div>\n                </nav>\n              </div>\n            </div>\n          </div>\n          <!--col-sm-2-->\n          <div class=\"col-lg-10 col-md-9 \">\n            <div class=\"row  panel-margin\" style=\"padding-top:15px\">\n              <h5 class=\"heading-text\"> {{training.trainingName}}, {{training.trainingPlace}}, {{training.trainingMonth}} </h5>\n            </div>\n            <div class=\"row  panel-margin\">\n              <h6 class=\"heading-text\"> Lessons </h6>\n            </div>\n            <!--/.com-sm-10-->\n            <!-- Show all the Lessons -->\n            <div *ngFor=\"let lesson of LESSONS\">\n            <div class=\"row panel-margin\">\n              <div class=\"col-sm-12 col-md-12  panelbg\">\n              <div class=\"row\">\n                <div class=\"col-sm-2 col-md-1  zero-padding\">\n                  <img src={{lesson.thumbnail}} alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-9 col-md-10 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\" style=\"margin-top:5px\">\n                      <a [routerLink]=\"['./lessons', lesson.id]\" style=\"color:black\" >{{lesson.title}}</a> </h6> \n                  <div class=\"body-text\">{{lesson.body}}</div>\n                 </div>\n                </div>\n              </div>\n            </div>\n            </div>\n            <br><br>\n            <div class=\"row  panel-margin\">\n              <h6 class=\"heading-text\"> Quiz </h6>\n            </div>\n            <div class=\"row panel-margin\" style=\"padding-bottom:25px;\">\n              <div class=\"col-sm-12  col-md-12  panelbg\">\n              <div class=\"row\">\n                <div class=\"col-sm-2 col-md-1  zero-padding\">\n                  <img src=\"../assets/images/thumbnail.jpg\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-9 col-md-10  panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\">\n                  <a [routerLink]=\"['/lessons/', 'quiz']\" style=\"color:black\" >Quiz 1</a></h6>\n                  <div class=\"body-text\">Some thing has to be writ ten about quiz Some thing about quiz Some thing about quiz Some thing about quizSome thing about quiz Some thing about quiz Some andthing about quiz Some thing about quiz Some thing about quiz</div>\n                </div>\n              </div></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /.row -->\n    <!--/.container-->\n    <!--footer-->\n    <footer>\n      <myfooter></myfooter>\n    </footer>\n    <!-- /.container -->\n    <!-- jQuery -->\n    <script src=\"js/jquery.js\"></script>\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"js/bootstrap.min.js\"></script>\n  </div>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/day/day.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__day_service__ = __webpack_require__("../../../../../src/app/day/day.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lesson_lesson_service__ = __webpack_require__("../../../../../src/app/lesson/lesson.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__training_detail_training_detail_service__ = __webpack_require__("../../../../../src/app/training-detail/training-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DayComponent = (function () {
    /* This method fetches Days from Day Service */
    function DayComponent(dayservice, router, lessonservice, trainingdetailservice, route) {
        this.dayservice = dayservice;
        this.router = router;
        this.lessonservice = lessonservice;
        this.trainingdetailservice = trainingdetailservice;
        this.route = route;
        /* variables used in this class */
        this.DAYS = [{ id: 1, title: 'Day 1', lessonId: ['1', '2', '3', '4', '5', '6'] }];
        this.css = 'nav-link';
    }
    DayComponent.prototype.getDays = function () {
        return this.dayservice.getDays();
    };
    DayComponent.prototype.ngOnInit = function () {
        /* Fetch the training details */
        this.Training = this.getTrainingDetails();
        /* Fetch the number of days */
        // 
        //console.log(this.DAYS);
        // console.log('Length='+this.DAYS.length);    
        if (this.DAYS.length > 0) {
            this.selectedDay = this.DAYS[0];
            if (this.selectedDay.lessonId.length > 0) {
                this.LESSONS = this.lessonservice.getLessonsById(this.selectedDay.lessonId);
            }
        }
        this.DAYS = this.getDays();
    };
    /* function to fetch the trainings from Training Detail Service */
    DayComponent.prototype.getTrainingDetails = function () {
        return this.trainingdetailservice.getTrainings();
    };
    /* Function to invoke when a particular day is clicked*/
    DayComponent.prototype.onClicked = function (day) {
        /* Make clicked day as Selected Day */
        this.selectedDay = day;
        //this.css = 'navitemselected';
        if (this.selectedDay.lessonId.length > 0) {
            this.LESSONS = this.lessonservice.getLessonsById(this.selectedDay.lessonId);
        }
        this.router.navigate(['../', this.selectedDay.id], { relativeTo: this.route });
    };
    return DayComponent;
}());
DayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'course-detail',
        template: __webpack_require__("../../../../../src/app/day/day.component.html"),
        styles: [__webpack_require__("../../../../../src/app/day/day.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__day_service__["a" /* DayService */], __WEBPACK_IMPORTED_MODULE_2__lesson_lesson_service__["a" /* LessonService */], __WEBPACK_IMPORTED_MODULE_3__training_detail_training_detail_service__["a" /* TrainingDetailService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__day_service__["a" /* DayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__day_service__["a" /* DayService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__lesson_lesson_service__["a" /* LessonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lesson_lesson_service__["a" /* LessonService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__training_detail_training_detail_service__["a" /* TrainingDetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__training_detail_training_detail_service__["a" /* TrainingDetailService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], DayComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=day.component.js.map

/***/ }),

/***/ "../../../../../src/app/day/day.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Service to manipulate Days */
var DayService = DayService_1 = (function () {
    function DayService(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this._dataService.getUsers()
            .subscribe(function (res) { return _this.getdata(_this.users = res); });
    }
    /*Get number of Days for each course */
    DayService.prototype.getDays = function () {
        return DayService_1.Days;
    };
    DayService.prototype.getdata = function (result) {
        //console.log(res);
        var lessons = result.map(function (data) { return data.catalogue[0].UNMASTraining[0].courses[0].modules[0].lessons; });
        var lessionData = lessons[0];
        lessionData.forEach(function (element) {
            DayService_1.Days.push({ id: element.id, title: element.title, lessonId: ['1', '2', '3', '4', '5', '6'] });
        });
    };
    return DayService;
}());
DayService.Days = [];
DayService = DayService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], DayService);

var DayService_1, _a;
//# sourceMappingURL=day.service.js.map

/***/ }),

/***/ "../../../../../src/app/email/email.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n<body>\r\n<div class=\"row\" >\r\n   <div class=\"col-md-12 col-lg-12 col-sm-12 btn-group\" style=\"background:#A9A9A9\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 icon-position\" style=\"padding-left:10px\">\r\n          \t<button type=\"button\" class=\"btn btn-default btn-sm\"> <i class=\"fa fa-trash-o fa-2x\"></i> </button>\r\n          \t<button type=\"button\" class=\"btn btn-default btn-sm\"> <i class=\"fa fa-trash fa-2x\"></i> </button>\r\n        \r\n        \t<span style=\"padding-left:10px\" class=\"icon-position\">\r\n          \t<button type=\"button\" class=\"btn btn-default btn-sm\"> <i class=\"fa fa-reply fa-2x\"></i> </button>\r\n          \t<button type=\"button\" class=\"btn btn-default btn-sm\"> <i class=\"fa fa-mail-reply-all fa-2x\"></i> </button>\r\n          \t<a href=\"mailto:'{{mailIds}}'\"><button type=\"button\" class=\"btn btn-default btn-sm\"> <i class=\"fa fa-mail-forward fa-2x\"></i> </button></a>\r\n        \t</span>\r\n\r\n      \t\t<span style=\"float:right\">\r\n        \t<button type=\"button\" class=\"btn btn-default btn-sm\"> <i class=\"fa fa-print fa-2x\"></i> </button>\r\n        \t\t<span style=\"padding-left:10px\">\r\n          \t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n            \t<img src=\"../assets/images/flag.png\" alt=\"\">\r\n          \t\t<span class=\"caret\"></span>\r\n            \t<!-- caret --><span class=\"sr-only\">Toggle Dropdown</span> </button>\r\n        \t</span>\r\n        \t</span>\r\n        </div>\r\n</div>\r\n</div>\r\n<div class=\"row panel-margin panel-padding\">\r\n      <div class=\"col-md-12 col-sm-12 col-lg-12\"> \r\n          <i class=\"fa fa-star-o fa-2x\" style=\"float:left\"></i> \r\n         <span style=\"padding-left:30px\" class=\"heading-text\"> UNMAS - United Nations </span>\r\n         <span style=\"padding-left:30px\"><i class=\"fa fa-inbox fa-2x\"></i></span>   \r\n          <span style=\"padding-left:30px\" class=\"heading-text\">Inbox - UNMAS</span>\r\n    <span style=\"padding-left:30px\" class=\"heading-text\">8:47 PM</span>\r\n      </div>\r\n      </div>\r\n      \r\n     <div class=\"row spacer\">\r\n      <div class=\"col-md-11 col-sm-11 col-xs-11\">\r\n        <span class=\"heading-text\"> To: </span>\r\n      </div>\r\n    </div>\r\n\t<div class=\"row spacer\">\r\n      <div class=\"col-md-12 col-sm-10 col-xs-10 text-center\" style=\"border-bottom:1px solid #cccccc\">\r\n        <span class=\"heading-text\"> {{subject}} </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"row spacer\">\r\n      <div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n        <span class=\"heading-text\"> Hi,\r\n          <br> This is an . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n          . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n          . . . . . .\r\n          <br><a target=\"_blank\" href={{redirectLink}} style=\"background-color:#ffdab9\">\r\n          click here to register \r\n          </a>\r\n          </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"row spacer\">\r\n      <div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n        <span class=\"heading-text\"> Thank you!\r\n          <br>Administrator </span>\r\n        <br>\r\n        <img src=\"../assets/images/Log.png\" alt=\"\">\r\n        <span class=\"body-text\"> UN Mine Action Service (UNMAS)\r\n          <br> <b>Libya | Arms &amp; Ammunition Advisory Section,</b>\r\n          <br> United Nations Support Mission in Libya | Tunis <b>www.miniaction.org </b> </span>\r\n      </div>\r\n    </div>\r\n   \r\n  </body>"

/***/ }),

/***/ "../../../../../src/app/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Component to be showed in Email Modal Dialog */
var EmailComponent = (function () {
    function EmailComponent(sharedservice) {
        this.sharedservice = sharedservice;
    }
    /* Function to get the User Role */
    EmailComponent.prototype.getUserRole = function () {
        return this.sharedservice.getUserRole();
    };
    /* Function to get the selected link */
    EmailComponent.prototype.getSelectedLink = function () {
        return this.sharedservice.getSelectedLink();
    };
    /* Function to get the mailIds */
    EmailComponent.prototype.getMailIds = function () {
        return this.sharedservice.getMailIds();
    };
    EmailComponent.prototype.ngOnInit = function () {
        this.mailIds = this.getMailIds();
        this.userRole = this.getUserRole();
        this.selectedLink = this.getSelectedLink();
        if (this.selectedLink === 'scheduled-programs') {
            this.subject = 'Invitation to Register as Training Programme Manager';
            this.redirectLink = 'http://www.unmas.org.s3-website.us-east-2.amazonaws.com/manager/selfregistration/ABCD';
        }
        else if (this.selectedLink === 'students') {
            this.subject = 'Invitation to Register for Online Training Programme';
            this.redirectLink = 'http://www.unmas.org.s3-website.us-east-2.amazonaws.com/student/selfregistration/EFGH';
        }
    };
    return EmailComponent;
}());
EmailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'email',
        template: __webpack_require__("../../../../../src/app/email/email.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email/email.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */]) === "function" && _a || Object])
], EmailComponent);

var _a;
//# sourceMappingURL=email.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer  -->\n<div class=\"row footer\">\n        <div class=\"col-md-12\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-xs-6 footer-text\"> Copyright UNMAS 2014 </div>\n            <div class=\"col-sm-6 text-right footer-text\"> For all Questions contact, unmasadmin@un.com </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'myfooter',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/inprogress/inprogress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inprogress/inprogress.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n<body>\n  <!-- Navigation -->\n   <navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12\">\n        <div class=\"row display-flex\">\n          <div class=\"col-md-2  right-margin\">\n            <!--Left Navigation-->\n            <left-nav></left-nav>\n             \n            </div>\n          <!--col-sm-2-->\n          <div class=\"col-sm-12 col-md-10  screen\" style=\"min-height:525px\">\n           <div class=\"row\" style=\"padding-left:15px;padding-top:10px\">\n              <h6 class=\"heading-text\"> Inprogress Training Programmes </h6>\n            </div>\n              <!--/.com-sm-10-->\n              <div class=\"container\" *ngFor=\"let program of InprogressPrograms\">\n            <div class=\"row\" style=\"padding-bottom:50px\">\n              <div class=\"col-sm-12 col-md-12 col-lg-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\" col-sm-2 col-md-1 col-lg-1\">\n                  <img src=\"{{program.thumbnailsrc}}\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-6 col-md-5 col-lg-6 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\"> {{program.title}}</h6>\n                  <div class=\"body-text\"> Training: {{program.trainingName}}\n                    <br> Scheduled Date: {{program.trainingFromDate}} - {{program.trainingToDate}} </div>\n                </div>\n                <div class=\"col-sm-8 col-md-5 col-lg-4 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px\">\n                  <div>\n                    <button type=\"button\" class=\"btn btn-sm button-show-style\" style=\"float:left\" (click)=\"onShowDetails(program.trainingName,program.id)\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show\n                        <br> Details </h4>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-sm button-view-style\" style=\"float:right;\">\n                      <h4 class=\"body-text\" style=\"color:white\"> View\n                        <br> Students </h4>\n                    </button>\n                   </div>\n                </div>\n              </div>\n              </div>\n            </div>\n         \t</div>   \n          </div>\n         </div>\n      </div>\n     </div>\n      <!-- /.row -->\n      <!--/.container-->\n      <!--footer-->\n      <footer>\n      <myfooter></myfooter>      </footer>\n      <!-- /.container -->\n      \n      <!-- jQuery -->\n      <script src=\"js/jquery.js\"></script>\n      <!-- Bootstrap Core JavaScript -->\n      <script src=\"js/bootstrap.min.js\"></script>\n    </div>\n   \n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/inprogress/inprogress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_programs_scheduled_programs_service__ = __webpack_require__("../../../../../src/app/scheduled-programs/scheduled-programs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InprogressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InprogressComponent = (function () {
    function InprogressComponent(spservice, router, sharedservice, activated) {
        this.spservice = spservice;
        this.router = router;
        this.sharedservice = sharedservice;
        this.activated = activated;
    }
    /* function to fetch the inprogress training programs from the service for program coordinator  */
    InprogressComponent.prototype.getInprogressTrainingPrograms = function () {
        return this.spservice.getInprogressTrainingPrograms();
    };
    /* save the training name in shared service to fetch by other component */
    InprogressComponent.prototype.saveTrainingName = function (trainingname) {
        return this.sharedservice.saveTrainingName(trainingname);
    };
    /* function when Show Details button is clicked */
    InprogressComponent.prototype.onShowDetails = function (trainingname, trainingid) {
        this.saveTrainingName(trainingname);
        this.router.navigate(['./training-program', trainingid], { relativeTo: this.activated });
    };
    InprogressComponent.prototype.ngOnInit = function () {
        this.InprogressPrograms = this.getInprogressTrainingPrograms();
    };
    return InprogressComponent;
}());
InprogressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'inprogress',
        template: __webpack_require__("../../../../../src/app/inprogress/inprogress.component.html"),
        styles: [__webpack_require__("../../../../../src/app/inprogress/inprogress.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], InprogressComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=inprogress.component.js.map

/***/ }),

/***/ "../../../../../src/app/left-nav/left-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/left-nav/left-nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- Left Navigation -->\n\t\t<nav class=\"nav navbar-toggleable-xs navbar-light\">\n              <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t    <span class=\"navbar-toggler-icon\"></span>\n  \t\t\t </button>\n  \t\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                  <!-- <div style=\"background-color: lightgreen\"> Welcome {{UserName}}</div>  -->\n              <ul class=\"nav flex-column body-text\" style=\"padding-top:10px\" >\n                <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/dashboard\"  *ngIf = \"show === 'dashboard'\" class=\"dashitemselected nav-link\">Dashboard</a>\n        \t\t<a class=\"nav-link\" routerLink=\"/dashboard\"  *ngIf = \"show !== 'dashboard'\" class=\"nav-link\">Dashboard</a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/scheduled-programs\"  *ngIf = \"show === 'scheduled-programs'\" class=\"dashitemselected nav-link\">Scheduled</a>\n        \t\t<a class=\"nav-link\" routerLink=\"/scheduled-programs\"  *ngIf = \"show !== 'scheduled-programs'\" class=\"nav-link\">Scheduled</a>\n                </li>\n                \n                <li class=\"nav-item\">\n                 <a class=\"nav-link\" routerLink=\"/inprogress\" (click)=\"onClickedLink('inprogress')\" *ngIf = \"show === 'inprogress'\" class=\"dashitemselected nav-link\">Inprogress</a>\n        \t\t<a class=\"nav-link\" routerLink=\"/inprogress\"  (click)=\"onClickedLink('inprogress')\" *ngIf = \"show !== 'inprogress'\" class=\"nav-link\">Inprogress</a>\n                </li>\n                <li class=\"nav-item\">\n                   <a class=\"nav-link\" routerLink=\"/completed\" (click)=\"onClickedLink('completed')\" *ngIf = \"show === 'completed'\" class=\"dashitemselected nav-link\">Completed</a>\n        \t\t<a class=\"nav-link\" routerLink=\"/completed\" (click)=\"onClickedLink('completed')\" *ngIf = \"show !== 'completed'\" class=\"nav-link\">Completed</a>\n                </li> -->\n                      \n                <!-- <li class=\"nav-item\" style=\"padding-top:50px\" *ngIf = \"role === 'admin'\">\n                <a class=\"nav-link\" routerLink=\"/training-program\" (click)=\"onClickedLink('all-trainings')\" *ngIf = \"show === 'all-trainings'\" class=\"dashitemselected nav-link\">All Trainings</a>\n        \t\t<a class=\"nav-link\" routerLink=\"/training-program\" (click)=\"onClickedLink('all-trainings')\" *ngIf = \"show !== 'all-trainings'\" class=\"nav-link\">All Trainings</a>\n                </li>\n                <li class=\"nav-item\" *ngIf = \"role === 'manager'\">\n                <a class=\"nav-link\" routerLink=\"/course-detail\" (click)=\"onClickedLink('all-courses')\" *ngIf = \"show === 'all-courses'\" class=\"dashitemselected nav-link\">All Courses</a>\n        \t\t<a class=\"nav-link\" routerLink=\"/course-detail\" (click)=\"onClickedLink('all-courses')\" *ngIf = \"show !== 'all-courses'\" class=\"nav-link\">All Courses</a>\n                </li>\n                <li class=\"nav-item\" *ngIf = \"role === 'manager'\">\n                <a class=\"nav-link\" routerLink=\"/module\" (click)=\"onClickedLink('all-modules')\" *ngIf = \"show === 'all-modules'\" class=\"dashitemselected nav-link\">All Modules</a>\n        \t\t<a class=\"nav-link\" routerLink=\"/module\" (click)=\"onClickedLink('all-modules')\" *ngIf = \"show !== 'all-modules'\" class=\"nav-link\">All Modules</a>\n                </li> -->\n              \n                <li style=\"padding-top:50px\"  *ngIf = \"role === 'manager'\">\n                <a class=\"nav-link\" routerLink=\"/student\"  *ngIf = \"show === 'students'\"  class=\"dashitemselected nav-link\">Students</a>\n        \t\t<a class=\"nav-link\" routerLink=\"/student\"  *ngIf = \"show !== 'students'\" class=\"nav-link\">Students</a>\n                </li>\n                <li style=\"padding-top:50px\"  *ngIf = \"role === 'admin'\">\n                    <a class=\"nav-link\" routerLink=\"/manager\"  *ngIf = \"show === 'students'\"  class=\"dashitemselected nav-link\">Create New Training Programme</a>\n                    <a class=\"nav-link\" routerLink=\"/manager\"  *ngIf = \"show !== 'students'\" class=\"nav-link\">Create New Training Programme</a>\n               </li>\n              </ul>\n            \n            </div>\n            </nav>\n         "

/***/ }),

/***/ "../../../../../src/app/left-nav/left-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftNavComponent = (function () {
    function LeftNavComponent(sharedservice) {
        this.sharedservice = sharedservice;
    }
    /* Function to fetch the selected link from shared service, used for highlighting here */
    LeftNavComponent.prototype.getSelectedLink = function () {
        return this.sharedservice.getSelectedLink();
    };
    /* Function to get the User Role */
    LeftNavComponent.prototype.getUserRole = function () {
        return this.sharedservice.getUserRole();
    };
    LeftNavComponent.prototype.ngOnInit = function () {
        // this.sharedservice.currentMessage.subscribe(message => this.UserName = message)      
        this.role = this.getUserRole();
        //console.log(this.role) ;
        this.show = this.getSelectedLink();
    };
    LeftNavComponent.prototype.onClickedLink = function (link) {
        this.sharedservice.saveSelectedLink(link);
    };
    return LeftNavComponent;
}());
LeftNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'left-nav',
        template: __webpack_require__("../../../../../src/app/left-nav/left-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/left-nav/left-nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */]) === "function" && _a || Object])
], LeftNavComponent);

var _a;
//# sourceMappingURL=left-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/lesson/lesson.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lesson/lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head lang=\"en\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js\"></script>\n</head>\n\n<body>\n  <!-- Navigation -->\n  <navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row display-flex\">\n          <div class=\"col-md-2 right-margin\">\n            <!--Left Navigation-->\n            <nav class=\"nav navbar-toggleable-xs navbar-light\">\n              <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n                aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n              </button>\n              <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                <ul class=\"nav flex-column body-text\">\n                  <li>\n                    <h6 class=\"heading-text\">\n                      <span class=\"dayitemselected\"></span>\n                    </h6>\n                    <ul class=\"nav flex-column body-text\">\n                      <li *ngFor=\"let lesson of LESSONS\" class=\"nav_item\">\n                        <a class=\"nav-link\" (click)=\"onClickedLesson(lesson)\" *ngIf=\"lesson === selectedLesson\" class=\"navitemselected nav-link\">{{lesson.title}}</a>\n                        <a class=\"nav-link\" (click)=\"onClickedLesson(lesson)\" *ngIf=\"lesson !== selectedLesson\" class=\"nav-link\">{{lesson.title}}</a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li>\n                    <h6 class=\"heading-text\"> Quiz </h6>\n                    <ul class=\"nav flex-column body-text\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['./lessons', 'quiz']\" (click)=\"onClickedQuiz()\">Quiz 1</a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li>\n                    <h6 class=\"heading-text\"> Assignment </h6>\n                    <ul class=\"nav flex-column body-text\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['./lessons', 'assignment']\" href=\"\" (click)=\"onClickedAssignment()\">Assignment 1</a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li>\n                    <h6 class=\"heading-text\">Finals </h6>\n                    <ul class=\"nav flex-column body-text\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['./lessons', 'exam']\" href=\"\" (click)=\"onClickedExam()\">Test</a>\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n            </nav>\n          </div>\n          <!--  check lesson type to show template(video, picture, voice to text reader, quiz etc) -->\n          <div class=\"col-sm-12 col-md-10\" style=\"min-height:525px\">\n            <!-- \n           <div  *ngIf=\"lesson=='picture' then template2;\">\n          </div>\n           <div  *ngIf=\"lesson=='voicetotext' then template3;\">\n          </div>\n        \n          <div  *ngIf=\"lesson=='assignment' then template5;\">\n          </div>\n          <div  *ngIf=\"lesson=='exam' then template6;\">\n          </div>\n          <div  *ngIf=\"lesson=='transalate' then template7;\">\n          </div> -->\n            <div *ngIf=\"lesson!='quiz' then template1;\">\n            </div>\n            <div *ngIf=\"lesson=='quiz' then template4;\">\n            </div>\n            <!--  Show template 1 if lessonType is Video -->\n\n            <ng-template #template1>\n              <div *ngFor=\"let chapter of CHAPTERS | paginate: {itemsPerPage: 1, currentPage:page, id: '1'}; let i = index\">\n                <div *ngIf=\"chapter.chaptertype=='text'\">\n                  <div class=\"row\" style=\"padding-left:25px;padding-top:10px\">\n                    <h4 class=\"heading-text\">{{chapter.chaptertype}}</h4>\n                  </div>\n\n                  <div class=\"row\" style=\"padding-left:25px;padding-top:10px\">\n                    <h6 class=\"heading-text\">{{chapter.title}} (Text Based)</h6>\n                  </div>\n                  <div class=\"row image-align\">\n                    <div class=\"col-md-12 body-text\"> {{chapter.body}}</div>\n                  </div>\n                </div>\n                <div *ngIf=\"chapter.chaptertype=='video'\">\n                  <div class=\"row\" style=\"padding-left:25px;padding-top:10px\">\n                    <h6 class=\"heading-text\"> {{chapter.title}}(Video Based) </h6>\n                    <div class=\"embed-responsive embed-responsive-16by9\">\n                      <iframe [src]=\"sanitizer.bypassSecurityTrustResourceUrl(chapter.path)\" allowfullscreen=\"\" height=\"315\" width=\"560\" style=\"border:5px solid #eeeeee\"></iframe>\n                    </div>\n                  </div>\n                  <br>\n                  <div class=\"row image-align\">\n                    <div class=\"col-md-12 body-text\"> {{chapter.body}} </div>\n                  </div>\n                </div>\n                <div *ngIf=\"chapter.chaptertype=='image'\">\n                  <div class=\"row\" style=\"padding-left:25px;padding-top:10px\">\n                    <h6 class=\"heading-text\">{{chapter.title}} (Picture Based)</h6>\n                    <img src=\"{{chapter.path}}\" alt=\"Responsive image\" class=\"img-responsive img-fluid picture-size\">\n\n                  </div>\n                  <div class=\"row image-align\">\n                    <div class=\"col-md-12 body-text\"> {{chapter.body}}</div>\n                  </div>\n                </div>\n\n                <div *ngIf=\"chapter.chaptertype=='audio'\">\n                  <div class=\"row\" style=\"padding-left:15px;padding-top:10px\">\n                    <h6 class=\"heading-text\"> {{chapter.title}}(Text to Voice Reader) </h6>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <div class=\"row  image-align\">\n                        <div class=\"col-sm-11 col-md-11 col-lg-11 image-align\" style=\"float:left\">\n                          <span style=\"padding-right:5px\">\n                            <button type=\"button\" style=\"height:30px;width:20%\" (click)=\"onPlay()\">\n                              <span class=\"button-text\">Play &nbsp;</span>\n                              <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n                            </button>\n                          </span>\n                          <span style=\"padding-right:5px\">\n                            <button type=\"button\" style=\"height:30px;width:20%\" (click)=\"onPause()\">\n                              <span class=\"button-text\">Pause &nbsp;</span>\n                              <i class=\"fa fa-pause\" aria-hidden=\"true\"></i>\n                            </button>\n                          </span>\n                          <span style=\"padding-right:5px\">\n                            <select class=\"selectpicker\" style=\"height:30px;width:25%\" (change)=\"onVoiceSelect($event.target)\">\n                              <option *ngFor=\"let voice of voices\" value={{voice.name}}>{{voice.name}}</option>\n                            </select>\n                          </span>\n                          <span style=\"padding-right:5px\">\n                            <select class=\"selectpicker\" style=\"width:20%;height:30px\" (change)=\"onSpeedSelect($event.target.value)\">\n                              <option value=\"0\">Speed 0</option>\n                              <option value=\"0.5\">Speed 0.5</option>\n                              <option value=\"1\">Speed 1</option>\n                              <option value=\"1.5\">Speed 1.5</option>\n                              <option value=\"2\">Speed 2</option>\n                            </select>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\" style=\"padding-left:20px\">\n                    <div class=\"body-text\" style=\"border:1px solid #eeeeee;\"> {{chapter.body}}</div>\n                  </div>\n                </div>\n              </div>\n\n\n\n              <pagination-controls (pageChange)=\"page = $event\" id=\"1\" maxSize=\"50\" directionLinks=\"true\" autoHide=\"true\">\n              </pagination-controls>`\n\n\n\n\n            </ng-template>\n            <!-- </ng-template> -->\n            <!--  Show template 4 if lessonType is Quiz -->\n            <ng-template #template4>\n              <div class=\"row\" style=\"padding-left:10px;padding-top:10px\">\n                <h6 class=\"heading-text\">Final Quiz - Questions</h6>\n              </div>\n              <div class=\"row\" style=\"padding-bottom:15px;padding-left:15px;\">\n                <div class=\"col-sm-12 panelbg\" style=\"padding-left:10px\">\n                  <div class=\"row image-align\">\n                    <div *ngFor=\"let question of questions\" class=\"form-row\">\n                      <df-question [question]=\"question\" [form]=\"form\"></df-question>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 panelbg\" style=\"padding-left:10px\">\n                  <div class=\"row image-align\">\n                    <div class=\"col-sm-12 image-align body-text\"> ...... more questions will be listed here </div>\n                  </div>\n                  <div class=\"row image-align\">\n                    <div class=\"col-sm-6 col-md-6 col-lg-4 image-align\">\n                      <button type=\"submit\" (click)=\"onSubmitQuiz()\" class=\"btn btn-sm\" style=\"width:25%px\">\n                        <h6 class=\"body-text\"> Submit </h6>\n                      </button>\n                      <span style=\"padding-left:20px\">\n                        <button type=\"button\" class=\"btn btn-sm\" style=\"width:25%px;\">\n                          <h6 class=\"body-text\" (click)=\"onCancelQuiz()\"> Cancel </h6>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n            <ng-template #template5>\n              <div class=\"row\" style=\"padding-left:10px;padding-top:10px\">\n                <h6 class=\"heading-text\">Exercises</h6>\n              </div>\n              <div class=\"row\" style=\"padding-left:15px;padding-bottom:15px\">\n                <div class=\"col-sm-12 panelbg\" style=\"padding-left:10px\">\n                  <div class=\"row image-align\">\n                    <div *ngFor=\"let question of questions\" class=\"form-row\">\n                      <df-question [question]=\"question\" [form]=\"form\"></df-question>\n                    </div>\n                  </div>\n                  <div class=\"row image-align\">\n                    <div class=\"col-sm-12 image-align body-text\"> ...... more questions will be listed here </div>\n                  </div>\n                  <div class=\"row image-align\">\n                    <div class=\"col-sm-6 col-md-6 col-lg-4 image-align\">\n                      <button type=\"submit\" class=\"btn btn-sm\" (click)=\"onSubmitExercises()\" style=\"width:25%\">\n                        <h6 class=\"body-text\"> Submit </h6>\n                      </button>\n                      <span style=\"padding-left:20px\">\n                        <button type=\"button\" class=\"btn btn-sm\" (click)=\"onCancelExercises()\" style=\"width:25%\">\n                          <h6 class=\"body-text\"> Cancel </h6>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n\n            <ng-template #template6>\n              <div class=\"row\" style=\"padding-left:10px;padding-top:10px\">\n                <h6 class=\"heading-text\">Final Exam - Questions</h6>\n              </div>\n              <div class=\"row\" style=\"padding-left:15px;padding-bottom:15px\">\n                <div class=\"col-sm-12 panelbg\" style=\"padding-left:10px\">\n                  <div class=\"row image-align\">\n                    <div *ngFor=\"let question of questions\" class=\"form-row\">\n                      <df-question [question]=\"question\" [form]=\"form\"></df-question>\n                    </div>\n                  </div>\n                  <div class=\"row image-align\">\n                    <div class=\"col-sm-12 image-align body-text\"> ...... more questions will be listed here </div>\n                  </div>\n                  <div class=\"row image-align\">\n                    <div class=\"col-sm-6 col-md-6 col-lg-4 image-align\">\n                      <button type=\"submit\" class=\"btn btn-sm\" (click)=\"onSubmitExam()\" style=\"width:25%\">\n                        <h6 class=\"body-text\"> Submit </h6>\n                      </button>\n                      <span style=\"padding-left:20px\">\n                        <button type=\"button\" class=\"btn btn-sm\" (click)=\"onCancelExam()\" style=\"width:25%\">\n                          <h6 class=\"body-text\"> Cancel </h6>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n\n\n            <!--  Show template 7 if lessonType is Google Translate -->\n            <ng-template #template7>\n              <div class=\"row\" style=\"padding-left:15px;padding-top:10px\">\n                <h6 class=\"heading-text\"> {{selectedLesson.title}}(Transalate) </h6>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"row  image-align\">\n                    <div class=\"col-sm-11 col-md-11 col-lg-11 image-align\" style=\"float:left\">\n                      <span style=\"padding-right:5px\">\n                        <button type=\"button\" style=\"height:30px;width:20%\" (click)=\"onPlay()\">\n                          <span class=\"button-text\">Play &nbsp;</span>\n                          <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n                        </button>\n                      </span>\n                      <span style=\"padding-right:5px\">\n                        <button type=\"button\" style=\"height:30px;width:20%\" (click)=\"onPause()\">\n                          <span class=\"button-text\">Pause &nbsp;</span>\n                          <i class=\"fa fa-pause\" aria-hidden=\"true\"></i>\n                        </button>\n                      </span>\n                      <span style=\"padding-right:5px\">\n                        <select class=\"selectpicker\" style=\"height:30px;width:25%\" (change)=\"onVoiceSelect($event.target)\">\n                          <option *ngFor=\"let voice of voices\" value={{voice.name}}>{{voice.name}}</option>\n                        </select>\n                      </span>\n                      <span style=\"padding-right:5px\">\n                        <select class=\"selectpicker\" style=\"width:20%;height:30px\" (change)=\"onSpeedSelect($event.target.value)\">\n                          <option value=\"0\">Speed 0</option>\n                          <option value=\"0.5\">Speed 0.5</option>\n                          <option value=\"1\">Speed 1</option>\n                          <option value=\"1.5\">Speed 1.5</option>\n                          <option value=\"2\">Speed 2</option>\n                        </select>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\" style=\"padding-left:20px\">\n                <div class=\"body-text\" style=\"border:1px solid #eeeeee;\"> {{selectedChapter.body}}</div>\n              </div>\n            </ng-template>\n            <!--  end translate -->\n\n\n          </div>\n          <!-- /.row -->\n        </div>\n        <!--/.container-->\n        <!--footer-->\n        <footer>\n          <myfooter></myfooter>\n        </footer>\n        <!-- /.container -->\n        <!-- jQuery -->\n        <script src=\"js/jquery.js\"></script>\n        <!-- Bootstrap Core JavaScript -->\n        <script src=\"js/bootstrap.min.js\"></script>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/lesson/lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lesson_service__ = __webpack_require__("../../../../../src/app/lesson/lesson.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chapter_chapter_service__ = __webpack_require__("../../../../../src/app/chapter/chapter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_bank_question_service__ = __webpack_require__("../../../../../src/app/question-bank/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_bank_quiz_question_data_service__ = __webpack_require__("../../../../../src/app/question-bank/quiz-question-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_bank_assignment_data_service__ = __webpack_require__("../../../../../src/app/question-bank/assignment-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_bank_exam_data_service__ = __webpack_require__("../../../../../src/app/question-bank/exam-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LessonComponent = (function () {
    function LessonComponent(edservice, qqdservice, adservice, qcs, lessonservice, chapterservice, sanitizer, route, location, router) {
        this.edservice = edservice;
        this.qqdservice = qqdservice;
        this.adservice = adservice;
        this.qcs = qcs;
        this.lessonservice = lessonservice;
        this.chapterservice = chapterservice;
        this.sanitizer = sanitizer;
        this.route = route;
        this.location = location;
        this.router = router;
        /* variables used in this component */
        this.questions = [];
        /* Make default css as nav-link for all lessons */
        this.css = 'nav-link';
        this.LESSONS = [];
        this.CHAPTERS = [];
        this.prog_index = 0;
    }
    LessonComponent.prototype.ngOnInit = function () {
        /* empty the queue of speech synthesis */
        if (window.speechSynthesis)
            window.speechSynthesis.cancel();
        /* populate the dropdown with voices */
        this.voices = window.speechSynthesis.getVoices();
        this.voice = this.voices[0];
        this.speed = 0;
        /* if parameter in url is quiz, show quiz questions */
        if (this.route.snapshot.params.id === 'quiz') {
            this.onClickedQuiz();
        }
        else {
            /*Fetch the lesson depending on lesson clicked in Course Details Page*/
            this.selectedLesson = this.lessonservice.getLesson(this.route.snapshot.params.id);
            this.onClickedLesson(this.selectedLesson);
        }
        this.getLessons();
    };
    /* function to get the lessons froms Lesson Service */
    LessonComponent.prototype.getLessons = function () {
        this.LESSONS = this.lessonservice.getLessons();
    };
    LessonComponent.prototype.getChaptersLession = function (id) {
        this.CHAPTERS = this.lessonservice.getLessons()[id - 1].chapters;
    };
    /* function invoked any lesson is clicked*/
    LessonComponent.prototype.onClickedLesson = function (clickedlesson) {
        this.lesson = clickedlesson.lessonType;
        if (this.lesson === 'voicetotext')
            this.voices = window.speechSynthesis.getVoices();
        /* Make clicked lesson as Selected Lesson*/
        this.selectedLesson = clickedlesson;
        this.getChaptersLession(this.selectedLesson.id);
        //console.log(this.CHAPTERS);
        this.selectedChapter = this.lessonservice.getChaptersById(clickedlesson.id);
        this.path = this.selectedChapter.path;
        /* Make this Url safe */
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedChapter.path);
        this.css = 'navitemselected';
        this.router.navigate(['../', this.selectedLesson.id], { relativeTo: this.route });
    };
    /* Display the quiz questions when Quiz link is selected */
    LessonComponent.prototype.onClickedQuiz = function () {
        this.lesson = 'quiz';
        this.questions = this.qqdservice.getQuestions();
        this.form = this.qcs.toFormGroup(this.questions);
        this.router.navigate(['../', this.lesson], { relativeTo: this.route });
    };
    /* Function invoked when the quiz is submitted */
    LessonComponent.prototype.onSubmitQuiz = function () {
        this.lesson = this.selectedLesson.lessonType;
    };
    /* Function invoked when a user clicks Cancel in Quiz page */
    LessonComponent.prototype.onCancelQuiz = function () {
        this.lesson = this.selectedLesson.lessonType;
    };
    /* Function invoked when the assignments link is selected*/
    LessonComponent.prototype.onClickedAssignment = function () {
        this.lesson = 'assignment';
        this.questions = this.adservice.getQuestions();
        this.form = this.qcs.toFormGroup(this.questions);
        this.router.navigate(['../', this.lesson], { relativeTo: this.route });
    };
    /* Function invoked when the assignment is submitted */
    LessonComponent.prototype.onSubmitExercises = function () {
        this.lesson = this.selectedLesson.lessonType;
    };
    /* Function invoked when a user clicks Cancel in Exercises page */
    LessonComponent.prototype.onCancelExercises = function () {
        this.lesson = this.selectedLesson.lessonType;
    };
    /* Function invoked when the Exams link is selected*/
    LessonComponent.prototype.onClickedExam = function () {
        this.lesson = 'exam';
        this.questions = this.edservice.getQuestions();
        this.form = this.qcs.toFormGroup(this.questions);
        this.router.navigate(['../', this.lesson], { relativeTo: this.route });
    };
    /* Function invoked when the exam is submitted */
    LessonComponent.prototype.onSubmitExam = function () {
        this.lesson = this.selectedLesson.lessonType;
    };
    /* Function invoked when a user clicks Cancel in Exam page */
    LessonComponent.prototype.onCancelExam = function () {
        this.lesson = this.selectedLesson.lessonType;
    };
    /* function invoked when user clicks on Play button in Text to Speech Lesson */
    LessonComponent.prototype.onPlay = function () {
        if (window.speechSynthesis.paused)
            window.speechSynthesis.resume();
        else {
            var SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;
            var speechSynthesis = window.speechSynthesis;
            // Create a new instance of SpeechSynthesisUtterance.
            var msg = new SpeechSynthesisUtterance();
            msg.onboundary = function (e) {
                this.prog_index = e.charIndex;
            };
            // Set the text.
            msg.text = this.selectedChapter.body;
            // Set the attributes.
            msg.lang = 'en-US';
            for (var i = 0; i < this.voices.length; i++)
                if (this.voices[i].name === this.voice)
                    msg.voice = this.voices[i];
            msg.volume = 1;
            msg.rate = this.speed;
            msg.pitch = 1;
            window.speechSynthesis.speak(msg);
        }
    };
    /* Function to select a voice from dropdown */
    LessonComponent.prototype.onVoiceSelect = function (e) {
        if (window.speechSynthesis)
            window.speechSynthesis.cancel();
        this.voice = e.value;
    };
    /* Function to select the Speed from dropdown */
    LessonComponent.prototype.onSpeedSelect = function (e) {
        if (window.speechSynthesis)
            window.speechSynthesis.cancel();
        this.speed = e;
    };
    /* function invoked when user clicks on Pause button in Text to Speech Lesson */
    LessonComponent.prototype.onPause = function () {
        if (window.speechSynthesis.speaking)
            window.speechSynthesis.pause();
    };
    return LessonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LessonComponent.prototype, "questions", void 0);
LessonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'lesson-list',
        template: __webpack_require__("../../../../../src/app/lesson/lesson.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lesson/lesson.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__lesson_service__["a" /* LessonService */], __WEBPACK_IMPORTED_MODULE_4__chapter_chapter_service__["a" /* ChapterService */], __WEBPACK_IMPORTED_MODULE_5__question_bank_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_6__question_bank_quiz_question_data_service__["a" /* QuizQuestionDataService */], __WEBPACK_IMPORTED_MODULE_7__question_bank_assignment_data_service__["a" /* AssignmentDataService */], __WEBPACK_IMPORTED_MODULE_8__question_bank_exam_data_service__["a" /* ExamDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__question_bank_exam_data_service__["a" /* ExamDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__question_bank_exam_data_service__["a" /* ExamDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__question_bank_quiz_question_data_service__["a" /* QuizQuestionDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__question_bank_quiz_question_data_service__["a" /* QuizQuestionDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__question_bank_assignment_data_service__["a" /* AssignmentDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__question_bank_assignment_data_service__["a" /* AssignmentDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__question_bank_question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__question_bank_question_service__["a" /* QuestionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__lesson_service__["a" /* LessonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__lesson_service__["a" /* LessonService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__chapter_chapter_service__["a" /* ChapterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__chapter_chapter_service__["a" /* ChapterService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _k || Object])
], LessonComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=lesson.component.js.map

/***/ }),

/***/ "../../../../../src/app/lesson/lesson.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Service to manipulate Lesson Data */
var LessonService = LessonService_1 = (function () {
    function LessonService(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this._dataService.getUsers()
            .subscribe(function (res) { return _this.getdata(_this.users = res); });
    }
    /* Function to get the lessons from the database */
    LessonService.prototype.getLessons = function () {
        return LessonService_1.LESSONS;
    };
    LessonService.prototype.getChapters = function () {
        return LessonService_1.CHAPTERS;
    };
    /* Function to get the lessons by Lesson Ids */
    LessonService.prototype.getLessonsById = function (Ids) {
        return LessonService_1.LESSONS;
    };
    /* Function to get a lesson by Lesson Id */
    LessonService.prototype.getLesson = function (id) {
        return LessonService_1.LESSONS[0];
    };
    LessonService.prototype.getdata = function (result) {
        var lessons = result.map(function (data) { return data.catalogue[0].UNMASTraining[0].courses[0].modules[0].lessons; });
        var lessionData = lessons[0];
        // console.log(lessionData);   
        lessionData.forEach(function (element) {
            if (LessonService_1.LESSONS.length < 6)
                LessonService_1.LESSONS.push({ id: element.id, lessonType: element.lessiontype, title: element.title, path: element.video, body: element.body, thumbnail: '../assets/images/thumbnail.jpg', chapters: element.chapters });
        });
        LessonService_1.LESSONS.forEach(function (element) {
            element.chapters.forEach(function (element) {
                LessonService_1.CHAPTERS.push(element);
            });
        });
    };
    LessonService.prototype.getChaptersById = function (Ids) {
        this.ChaptersArray = this.getChapters();
        Ids = Ids - 1;
        return this.ChaptersArray[Ids];
    };
    return LessonService;
}());
LessonService.LESSONS = [];
LessonService.CHAPTERS = [];
LessonService = LessonService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], LessonService);

var LessonService_1, _a;
//# sourceMappingURL=lesson.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n\n<body> \n  <!-- Navigation -->\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\">\n    <div class=\"row image-align\" style=\"min-height:525px\">\n      <div class=\"col-md-12 col-sm-12\">\n        <div class=\"col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-3\">\n          <div class=\"col-md-2 offset-md-2 col-sm-8 offset-sm-2\">\n            <img src=\"../assets/images/UNMASLogo.png\">\n          </div>\n          <div class=\"row panel-margin\" style=\"padding-top:20px;padding-bottom:20px\">\n            <h5 class=\"body-text zero-padding\">\n              <b> United Nations - UNMAS Administrators only.</b>\n            </h5>\n            <h6 class=\"body-text\"> Unauthorised use may subject you to criminal prosecution. Evidence of unauthorised use collected during monitoring\n              may be used for administrative, criminal or other adverse action. Use of this system constitutes consent to\n              monitoring for these purposes. </h6>\n          </div>\n\n            <div *ngIf=\"!user\" class=\"card text-center\">\n              <h6 class=\"card-header\">\n                Login with your Gmail account\n              </h6>\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">Not signed in</h4>\n                <p class=\"card-text\">Sign in with</p>\n              </div>\n              <div class=\"card-block\">\n                  <button type=\"button\"class=\"btn btn-danger\" (click)=\"signInWithGoogle()\">\n                      <i class=\"fa fa-google-plus left\"></i>\n                      <span>Google+</span>\n                  </button>                \n              </div>\n            </div>\n            <div *ngIf=\"user\" class=\"card text-center\">\n              <h6 class=\"card-header\">\n               UNMAS Learning\n              </h6>\n              <div class=\"card-block\"></div>\n              Loading..........\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">{{ user.name }}</h4>\n                <p class=\"card-text\">{{ user.email }}</p>\n              </div>\n              <div class=\"card-block\">\n                <button class=\"btn btn-danger\" (click)=\"signOut()\">Sign out</button>\n              </div>\n            </div>        \n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Footer -->\n  <footer>\n    <div class=\"container\">\n      <div class=\"row footer footer-text\">\n        <div class=\"col-sm-12\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-xs-6\"> Copyright UNMAS 2014 </div>\n            <div class=\"col-sm-6 text-right\"> For all Questions contact, unmasadmin@un.com </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <!-- /.container -->\n  <!-- jQuery -->\n  <script src=\"js/jquery.js\"></script>\n  <!-- Bootstrap Core JavaScript -->\n  <script src=\"js/bootstrap.min.js\"></script>  \n</body>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(_dataService, router, sharedservice, route, authService, loginservice) {
        this._dataService = _dataService;
        this.router = router;
        this.sharedservice = sharedservice;
        this.route = route;
        this.authService = authService;
        this.loginservice = loginservice;
        /* variable set to show sign or login or autenticate page*/
        this.show = 'sign-in';
        this.model = {};
        this.authorizedFlag = false;
        this.isValid = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (res) { return _this.getdata(_this.user = res); });
    };
    LoginComponent.prototype.getdata = function (user) {
        var _this = this;
        this.sharedservice.currentMessage.subscribe(function (message) { return _this.message = message; });
        setTimeout(function () {
            _this.UsersData = _this.loginservice.getUsers();
            //console.log(this.UsersData);
        }, 1000);
        setTimeout(function () {
            if (user != null) {
                _this.newMessage(user.name + '!');
                _this.newMessage1(user.email);
                var found_1 = 0;
                _this.UsersData.forEach(function (element) {
                    if (element.username == user.email) {
                        found_1 = 1;
                        _this.onLogin(element.role);
                    }
                });
                if (found_1 == 0) {
                    _this.onLogin('student');
                }
            }
        }, 6000);
    };
    LoginComponent.prototype.newMessage = function (str) {
        this.sharedservice.changeMessage(str);
    };
    LoginComponent.prototype.newMessage1 = function (str) {
        this.sharedservice.changeMessage1(str);
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_4_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID);
    };
    LoginComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    /* function to set the user role : admin, program coordinator or student */
    LoginComponent.prototype.setUserRole = function (role) {
        this.sharedservice.setUserRole(role);
        //console.log(this.user.name);
        //this.sharedservice.UserName=this.user.name;
    };
    /* function to get user role : admin, program coordinator or student */
    LoginComponent.prototype.getUserRole = function () {
        return this.sharedservice.getUserRole();
    };
    /* function executed on click of Sign In Button */
    /* function executed on click of Authorize Button */
    LoginComponent.prototype.onAuthorize = function () {
        /* navigate the user depending on his role */
        var role = this.getUserRole();
        this.authorizedFlag = true;
        if (role === 'admin' && this.model.code === '984602')
            this.router.navigate(['dashboard']);
        else
            this.authorizedFlag = false;
    };
    LoginComponent.prototype.getdata1 = function (res) {
    };
    /* authenticate the user */
    LoginComponent.prototype.onLogin = function (_role) {
        var _this = this;
        //  this.newMessage(this.user.name);    
        if (_role == 'student')
            this.setUserRole('student');
        if (_role == 'admin')
            this.setUserRole('admin');
        if (_role == 'manager')
            this.setUserRole('manager');
        if (_role == 'admin' || _role == 'manager')
            this.router.navigate(['dashboard']);
        if (_role == 'student') {
            setTimeout(function () {
                _this._dataService.saveRegistration(_this.user.email).subscribe(function (res) { return _this.getdata1(res); });
            }, 1000);
            this.router.navigate(['training-detail']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular4_social_login__["AuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular4_social_login__["AuthService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this.users = [];
        this._dataService.getRoles()
            .subscribe(function (res) { return _this.getdata(res); });
    }
    /* get the trainings from the database */
    LoginService.prototype.getUsers = function () {
        return this.users;
    };
    LoginService.prototype.getdata = function (result) {
        var _this = this;
        var roles = result.map(function (data) { return data.training_program.users; });
        roles[0].forEach(function (element) {
            _this.users.push({ id: element.id, username: element.username, type: element.type, role: element.role });
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/match-height.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchHeightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* This directive is used for equal height columns */
var MatchHeightDirective = (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewChecked = function () {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    };
    MatchHeightDirective.prototype.matchHeight = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    };
    return MatchHeightDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchHeightDirective.prototype, "myMatchHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatchHeightDirective.prototype, "onResize", null);
MatchHeightDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[myMatchHeight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], MatchHeightDirective);

var _a;
//# sourceMappingURL=match-height.directive.js.map

/***/ }),

/***/ "../../../../../src/app/module/module.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/module/module.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head> \r\n<body>\r\n  <!-- Navigation -->\r\n  <navbar></navbar>\r\n  <!-- Page Content -->\r\n  <!-- Heading Row -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row display-flex\">\r\n          <div class=\"col-md-2 right-margin\">\r\n            <!--Left Navigation-->\r\n            <left-nav></left-nav>\r\n          </div>\r\n          <!--col-sm-2-->\r\n          <div class=\"col-sm-12 col-md-10\" style=\"min-height:525px\">\r\n          <div  *ngIf=\"show=='all-modules' then template1;\">\r\n          </div>\r\n          <div  *ngIf=\"show=='show-modules' then template2;\">\r\n          </div>\r\n          <div  *ngIf=\"show=='add-module' then template3;\">\r\n          </div>\r\n          <!-- Template shown when user clicks All Modules link -->\r\n          <ng-template #template1>\r\n            <div class=\"row panel-margin\" style=\"padding-top:5px;padding-left:15px;\">\r\n               <h6 class=\"heading-text\"> All Modules</h6>\r\n             </div>\r\n            <div class=\"container\" *ngFor=\"let module of Modules\">\r\n            <div class=\"row panel-margin\" style=\"padding-top:20px;padding-bottom:10px\">\r\n              <div class=\"col-sm-12  col-md-12 col-lg-12 panelbg zero-padding\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-1 col-sm-2 col-md-1\">\r\n                  <img src=\"{{module.thumbnailsrc}}\" alt=\"\" class=\"thumbnail-align\"> </div>\r\n                <div class=\"col-sm-8 col-md-6 col-lg-7 panel-margin\">\r\n                  <h6 class=\"heading-text image-align zero-padding\">{{module.moduleName}}</h6>\r\n                  <div class=\"body-text\"> Created By: {{module.createdBy}}\r\n                    <br> Scheduled Date:{{module.createdDate}}</div>\r\n                </div>\r\n                 <div class=\"col-sm-5 col-md-4 col-lg-3 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px;padding-bottom:20px\">\r\n                  <div>\r\n                    <button type=\"button\" class=\"btn btn-sm button-view-style show-detail-size\">\r\n                      <h4 class=\"body-text\" style=\"color:white\"> Show more\r\n                        <br> Details</h4>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div>\r\n            </div>\r\n            </div>\r\n           </ng-template>\r\n           <!-- Template shown when user clicks Show Modules of a particular Course -->\r\n           <ng-template #template2>\r\n              <div class=\"row  panel-margin\" style=\"padding-top:10px\">\r\n              <h6 class=\"heading-text\"> UN SaferGuard on the IATG, Libya, Dec\r\n                <br><span style=\"padding-left:40px;\">- &gt; </span>UN SaferGuard on the IATG\r\n                <br><span style=\"padding-left:80px\">- &gt; SG1: Ammunition Support to UN Field Operations</span></h6>\r\n            </div>\r\n            <!--/.com-sm-10-->\r\n            \r\n            <div class=\"row panel-margin\" style=\"padding-top:5px;padding-left:15px;\">\r\n               <h6 class=\"heading-text\"> Modules List </h6>\r\n             </div>\r\n            <div class=\"container\" *ngFor=\"let module of Modules\">\r\n            <div class=\"row panel-margin\" style=\"padding-top:10px;padding-bottom:10px\">\r\n              <div class=\"col-sm-12  col-md-12 col-lg-12 panelbg zero-padding\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-1 col-sm-2 col-md-1\">\r\n                  <img src=\"{{module.thumbnailsrc}}\" alt=\"\" class=\"thumbnail-align\"> </div>\r\n                <div class=\"col-sm-8 col-md-6 col-lg-7 panel-margin\">\r\n                  <h6 class=\"heading-text image-align zero-padding\">{{module.moduleName}}</h6>\r\n                  <div class=\"body-text\"> Created By: {{module.createdBy}}\r\n                    <br> Scheduled Date:{{module.createdDate}}</div>\r\n                </div>\r\n                 <div class=\"col-sm-5 col-md-4 col-lg-3 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px;padding-bottom:20px\">\r\n                  <div>\r\n                    <button type=\"button\" class=\"btn btn-sm button-view-style show-detail-size\">\r\n                      <h4 class=\"body-text\" style=\"color:white\"> Show more\r\n                        <br> Details</h4>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div>\r\n            </div>\r\n            </div>\r\n            <div style=\"padding-top:20px;padding-left:10px\"> <span class=\"body-text panel-margin\">List of all Modules below. . . . . . . . . . . . . . . . . . . .</span> </div>\r\n            <div class=\"row panel-margin \" style=\"padding-top:50px\">\r\n              <div class=\"col-md-12 add-new\">\r\n                <div class=\"row\">\r\n                     <div class=\"col-md-12 col-sm-12 zero-padding body-text\" style=\"padding-right:10px;padding-bottom:30px;\">\r\n                     <i class=\"fa fa-plus-circle fa-3x pull-right\"  aria-hidden=\"true\" (click)=\"onAddModule()\" style=\"padding-right:10px\"></i> \r\n                         <span style=\"float:right;padding-top:10px\">Add New Module</span>     \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n              </ng-template>\r\n              <!-- Show template when user clicks Add New Module link -->\r\n              <ng-template #template3>\r\n              <form>\r\n              <div class=\"row\" style=\"padding-left:10px;padding-top:10px\">\r\n              <h6 class=\"heading-text\">Add New Module</h6>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-left:15px;padding-bottom:15px\">\r\n              <div class=\"col-sm-12 col-md-12 panelbg\" style=\"padding-left:10px;\">\r\n                <div class=\"row\" style=\"padding-top:10px;vertical-align:middle\">\r\n                  <div class=\"col-md-5\" style=\"padding-top:10px;\">\r\n                    <h6 class=\"body-text\"> <b>Training / Catalog Name:</b> </h6>\r\n                  </div>\r\n                  <div class=\"col-md-7\"> <select class=\"selectpicker form-control zero-padding body-text\" style=\"height:30px;width:85%\">\r\n  \t\t\t\t\t\t\t<option value=\"UN SaferGuard Training on the IATG\">UN SaferGuard on ISACS</option>\r\n                    </select> </div>\r\n                </div>\r\n                <div class=\"row\" style=\"padding-top:10px;\">\r\n                  <div class=\"col-md-5\" style=\"padding-top:10px;\">\r\n                    <h6 class=\"body-text\"><b> Course Name:</b> </h6>\r\n                  </div>\r\n                  <div class=\"col-md-7\"> <select class=\"body-text selectpicker form-control zero-padding textbox-size\" style=\"height:30px;width:85%\">\r\n  \t\t\t\t\t\t\t<option value=\"UN SaferGuard Training on the IATG\">ISACS 1: Small Arms Control Standards for Libya </option>\r\n                    </select> </div>\r\n                </div>\r\n                <div class=\"row\" style=\"padding-top:10px;\">\r\n                  <div class=\"col-md-5\" style=\"padding-top:10px;\">\r\n                    <h6 class=\"body-text\"><b> New Module Name:</b> </h6>\r\n                  </div>\r\n                  <div class=\"col-md-7\">\r\n                    <input class=\"input-sm body-text\" id=\"inputsm\" type=\"text\" value=\"ISACS 1: Small Arms Control Standards for Libya\" style=\"width:85%\"> \r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" style=\"padding-top:10px;\">\r\n                  <div class=\"col-md-5\" style=\"padding-top:10px;\">\r\n                    <h6 class=\"body-text\"><b> Select Lesson/Materials:</b> </h6>\r\n                  </div>\r\n                  <div class=\"col-md-7 body-text\"> \r\n                  <select class=\"select-picker\" multiple style=\"height:100px;width:85%\"  >\r\n                       <option *ngFor=\"let course of Courses\">{{course.courseName}}</option>\r\n    \t\t\t </select>\r\n                    <br>\r\n                    <img src=\"../assets/images/person.jpg\">\r\n                    <a href=\"\">Request admin to add new Materials for this Module</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row image-align\" style=\"text-align:right\">\r\n                  <div class=\"col-sm-10 col-md-11 image-align\" style=\"float:left\">\r\n                  <span style=\"padding-right:5px\">\r\n                    <button type=\"button\" (click)=\"onSubmit()\" class=\"submit-btn-style body-text\">\r\n                      <h4 class=\"body-text\"> Submit </h4>\r\n                    </button>\r\n                   </span>\r\n                   <span style=\"padding-right:5px\">\r\n                    <button type=\"button\" class=\"save-btn-style body-text\">\r\n                      <h4 class=\"body-text\"> Save as Draft </h4>\r\n                    </button>\r\n                    </span>\r\n                    <span style=\"padding-right:5px\">\r\n                    <button type=\"button\" class=\"cancel-btn-style body-text\" style=\"float:right;\">\r\n                      <h4 class=\"body-text\"> Cancel </h4>\r\n                    </button>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            </form>\r\n              </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /.row -->\r\n    <!--/.container-->\r\n    <!--footer-->\r\n    <footer>\r\n     <myfooter></myfooter>\r\n    </footer>\r\n    <!-- /.container -->\r\n    <!-- jQuery -->\r\n    <script src=\"js/jquery.js\"></script>\r\n    <!-- Bootstrap Core JavaScript -->\r\n    <script src=\"js/bootstrap.min.js\"></script>\r\n  </div>\r\n</body>\r\n          "

/***/ }),

/***/ "../../../../../src/app/module/module.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_service__ = __webpack_require__("../../../../../src/app/module/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_course_service__ = __webpack_require__("../../../../../src/app/course/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModuleComponent = (function () {
    function ModuleComponent(moduleservice, sharedservice, courseservice, activated) {
        this.moduleservice = moduleservice;
        this.sharedservice = sharedservice;
        this.courseservice = courseservice;
        this.activated = activated;
        /* variables used in thsi component */
        this.show = 'all-modules';
    }
    ModuleComponent.prototype.ngOnInit = function () {
        /* if  a parameter is passed in the url, show modules of a particular course */
        if (this.sharedservice.getSelectedLink() === 'all-modules')
            this.Modules = this.moduleservice.getAllModules();
        else if (this.sharedservice.getSelectedLink() === 'scheduled-programs') {
            this.saveSelectedLink('scheduled-programs');
            this.modulecount = this.moduleservice.getModuleCount();
            this.Modules = this.moduleservice.getModules();
            this.show = 'show-modules';
        } /* else show all modules*/
        else {
            this.modulecount = this.moduleservice.getModuleCount();
            this.Modules = this.moduleservice.getModules();
            this.show = 'show-modules';
        }
    };
    /* save the selected link in shared service to highlight it in the left navigation */
    ModuleComponent.prototype.saveSelectedLink = function (selectedlink) {
        return this.sharedservice.saveSelectedLink(selectedlink);
    };
    /* function to get modules for a course*/
    ModuleComponent.prototype.getModules = function () {
        return this.moduleservice.getModules();
    };
    /* function to get all the modules */
    ModuleComponent.prototype.getAllModules = function () {
        return this.moduleservice.getModules();
    };
    /* function to get the number of modules in a course */
    ModuleComponent.prototype.getModuleCount = function () {
        return this.moduleservice.getModuleCount();
    };
    /* function to get the courses */
    ModuleComponent.prototype.getCourses = function () {
        return this.courseservice.getCourses();
    };
    /* function invoked when the user clicks on Add Module icon */
    ModuleComponent.prototype.onAddModule = function () {
        this.show = 'add-module';
        this.Courses = this.getCourses();
    };
    /* function invoked when the user clicks on Submit button in Add module page */
    ModuleComponent.prototype.onSubmit = function () {
        this.show = 'show-modules';
    };
    return ModuleComponent;
}());
ModuleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'module',
        template: __webpack_require__("../../../../../src/app/module/module.component.html"),
        styles: [__webpack_require__("../../../../../src/app/module/module.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__module_service__["a" /* ModuleService */], __WEBPACK_IMPORTED_MODULE_3__course_course_service__["a" /* CourseService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__module_service__["a" /* ModuleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__module_service__["a" /* ModuleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__course_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__course_course_service__["a" /* CourseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], ModuleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=module.component.js.map

/***/ }),

/***/ "../../../../../src/app/module/module.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* Service to manipulate Module Data */
var ModuleService = (function () {
    function ModuleService() {
        this.MODULES = [{ id: 1, moduleName: 'Field Operations', createdDate: 'Nov-23-2016', createdBy: 'UNMAS, Libya', thumbnailsrc: '../assets/images/thumbnail.jpg', body: '' },
            { id: 2, moduleName: 'Field and Temporary Storage', createdDate: 'Nov-23-2016', createdBy: 'UNMAS, Libya', thumbnailsrc: '../assets/images/thumbnail.jpg', body: '' }
        ];
    }
    /* Function to fetch modules in a particular course */
    ModuleService.prototype.getModules = function () {
        return this.MODULES;
    };
    /* Function to fetch all the modules */
    ModuleService.prototype.getAllModules = function () {
        return this.MODULES;
    };
    /* function to fetch the number of modules in a course */
    ModuleService.prototype.getModuleCount = function () {
        return 15;
    };
    return ModuleService;
}());
ModuleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ModuleService);

//# sourceMappingURL=module.service.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Top navigation -->\n<div class=\"container navbar-border\">\n  <nav class=\"navbar\">\n    <div class=\"row\">\n      <div class=\"col-9 navbartext zero-padding\">\n        <a href='http://www.unmas.org.s3-website.us-east-2.amazonaws.com/'>\n          <img src=\"../assets/images/UNMAS20.png\" alt=\"\">\n        </a> United Nation Mine Action Service (UNMAS)\n\n      </div>\n\n      <div class=\"col-3\" style=\"text-align: right; background-color:lightgreen;\">\n          Welcome {{UserName}}  <a style=\"text-decoration: underline; cursor:pointer;color: red;\" (click)=\"signOut()\"><h6> Log Out </h6></a>                     \n      </div>\n\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(router, sharedservice, authService) {
        this.router = router;
        this.sharedservice = sharedservice;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedservice.currentMessage.subscribe(function (message) { return _this.UserName = message; });
    };
    NavbarComponent.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut();
        setTimeout(function () {
            _this.router.navigate(['login']);
            // this.trainingmanagerservice.saveName(this.name);
        }, 1000);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular4_social_login__["AuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular4_social_login__["AuthService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/question-bank/assignment-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_radiobutton__ = __webpack_require__("../../../../../src/app/question-bank/question-radiobutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_image_radiobutton__ = __webpack_require__("../../../../../src/app/question-bank/question-image-radiobutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_textbox__ = __webpack_require__("../../../../../src/app/question-bank/question-textbox.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/* This service consists of the questions from which assignments page is formed */
var AssignmentDataService = (function () {
    function AssignmentDataService() {
    }
    AssignmentDataService.prototype.getQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_1__question_radiobutton__["a" /* RadioButtonQuestion */]({
                key: 'MCQ1',
                label: '1. This is a multiple question - more specific questions will be added later here',
                options: [
                    { key: 'Option 1', value: 'on' },
                    { key: 'Option 2', value: 'on' },
                    { key: 'Option 3', value: 'on' },
                    { key: 'Option 4', value: 'on' }
                ],
                type: 'radio',
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_3__question_textbox__["a" /* TextboxQuestion */]({
                key: 'TBQ1',
                label: '2. For this question students need to write a sentence - questions to be added later',
                value: 'Expected answer here. But evaluated later against keywords.',
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_2__question_image_radiobutton__["a" /* ImageRadioButtonQuestion */]({
                key: 'MCQ2',
                label: '3.This is student - select the right picture. More specific questions to be added later',
                options: [
                    { key: '/assets/images/MC1.jpg', value: '1' },
                    { key: '/assets/images/MC2.jpg', value: '2' },
                    { key: '/assets/images/MC3.jpg', value: '3' },
                    { key: '/assets/images/MC4.jpg', value: '4' }
                ],
                type: 'img-radio',
                order: 3
            })
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    return AssignmentDataService;
}());
AssignmentDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AssignmentDataService);

//# sourceMappingURL=assignment-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/question-bank/dynamic-form-question/dynamic-form-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-bank/dynamic-form-question/dynamic-form-question.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  Dynamic creation of form based on the data -->\n<div [formGroup]=\"form\" class=\"col-md-12 col-sm-12\">\n  <label [attr.for]=\"question.key\" class=\"heading-text\" style=\"padding-left:15px;padding-top:20px;\">{{question.label}}</label>\n  \t<div [ngSwitch]=\"question.controlType\">\n\n\t<!-- If Form Control is a Textbox  -->\n\t<div *ngSwitchCase=\"'textbox'\" style=\"padding-left:20px; padding-bottom:15px\">\n    \t<input  [formControlName]=\"question.key\" [name]=\"question.key\"\n            [id]=\"question.key\" [type]=\"question.type\"  style=\"width:90%\" [required]=\"question.required\">\n   \t\t\t<div *ngIf=\"!form.controls[question.key].valid\" class = \"alert-danger body-text\">\n   \t\t\tPlease enter an answer</div>\n    </div>\n    \n    <div *ngSwitchCase=\"'radio'\"  class=\"btn-group-vertical\" style=\"padding-left:5px; padding-bottom:10px;\">\n    <form role=\"form\" >\n  \t<!-- If Form Control is a Radio Button render Vertical Radio Buttons -->\n\t\t<div class=\"form-group\">\n \t\t<div style=\"padding-left:25px\" class=\"input-group body-text radio\" role=\"group\"  *ngFor=\"let opt of question.options;let idx = index\" required>\n    \t\t<label class=\"btn well zero-padding body-text\" style=\"background:none\">\n        \t\t<input aria-label=\"Radio button\"  type=\"radio\" [name]=\"question.key\" [required]=\"question.required\" [checked]=\"idx === 0\">{{opt.key}}\n           \t</label>\n    \t</div>\n   </div>\n \t\n</form> \t</div>\n \t<!-- If Form Control is a Image Radio Button render Radio Buttons with Image -->\n \t<div *ngSwitchCase=\"'img-radio'\"  class=\" btn-group row\" data-toggle=\"buttons\" style=\"padding-left:5px; padding-bottom:20px\">\n \t\t<div style=\"padding-left:5px\" class=\"input-group body-text col-md-3 col-sm-3 col-lg-3 \"  *ngFor=\"let opt of question.options;let idx = index\">\n \t\t\t <label for=\"{{opt.value}}\" class=\"btn btn-default\" style=\"background:none\">\n \t\t\t \t<input aria-label=\"Radio button\" type=\"radio\" name=\"{{question.key}}\" id=\"{{opt.value}}\" [checked]=\"idx === 0\">\n             \t<img src=\"{{opt.key}}\" alt=\"\"/>\n\t\t\t </label>\n         </div>\n \t</div>\n </div> \n <!--<div class=\"errorMessage\" *ngIf=\"!isValid\">Please enter an answer!</div>-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/question-bank/dynamic-form-question/dynamic-form-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_base__ = __webpack_require__("../../../../../src/app/question-bank/question-base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* This component is to create the dynamic form */
var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent() {
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.question.key].valid; },
        enumerable: true,
        configurable: true
    });
    return DynamicFormQuestionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__question_base__["a" /* QuestionBase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__question_base__["a" /* QuestionBase */]) === "function" && _a || Object)
], DynamicFormQuestionComponent.prototype, "question", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === "function" && _b || Object)
], DynamicFormQuestionComponent.prototype, "form", void 0);
DynamicFormQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'df-question',
        template: __webpack_require__("../../../../../src/app/question-bank/dynamic-form-question/dynamic-form-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question-bank/dynamic-form-question/dynamic-form-question.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DynamicFormQuestionComponent);

var _a, _b;
//# sourceMappingURL=dynamic-form-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/question-bank/exam-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_radiobutton__ = __webpack_require__("../../../../../src/app/question-bank/question-radiobutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_image_radiobutton__ = __webpack_require__("../../../../../src/app/question-bank/question-image-radiobutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_textbox__ = __webpack_require__("../../../../../src/app/question-bank/question-textbox.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/* This service consists of the questions from which exams page is formed */
var ExamDataService = (function () {
    function ExamDataService() {
    }
    ExamDataService.prototype.getQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_1__question_radiobutton__["a" /* RadioButtonQuestion */]({
                key: 'MCQ1',
                label: '1. This is a multiple question - more specific questions will be added later here',
                options: [
                    { key: 'Option 1', value: 'true' },
                    { key: 'Option 2', value: 'no' },
                    { key: 'Option 3', value: 'no' },
                    { key: 'Option 4', value: 'no' }
                ],
                type: 'radio',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_3__question_textbox__["a" /* TextboxQuestion */]({
                key: 'TBQ1',
                label: '2. For this question students need to write a sentence - questions to be added later',
                value: 'Expected answer here. But evaluated later against keywords.',
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_2__question_image_radiobutton__["a" /* ImageRadioButtonQuestion */]({
                key: 'MCQ2',
                label: '3.This is student - select the right picture. More specific questions to be added later',
                options: [
                    { key: '/assets/images/MC1.jpg', value: '1' },
                    { key: '/assets/images/MC2.jpg', value: '2' },
                    { key: '/assets/images/MC3.jpg', value: '3' },
                    { key: '/assets/images/MC4.jpg', value: '4' }
                ],
                type: 'img-radio',
                required: true,
                order: 3
            })
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    return ExamDataService;
}());
ExamDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ExamDataService);

//# sourceMappingURL=exam-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/question-bank/question-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBase; });
/* class to form the question base which can be imported in other components to form questions page */
var QuestionBase = (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
    return QuestionBase;
}());

//# sourceMappingURL=question-base.js.map

/***/ }),

/***/ "../../../../../src/app/question-bank/question-image-radiobutton.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__("../../../../../src/app/question-bank/question-base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageRadioButtonQuestion; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/* class to form Image Radio Button questions */
var ImageRadioButtonQuestion = (function (_super) {
    __extends(ImageRadioButtonQuestion, _super);
    function ImageRadioButtonQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'img-radio';
        _this.options = [];
        _this.options = options['options'] || [];
        return _this;
    }
    return ImageRadioButtonQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-image-radiobutton.js.map

/***/ }),

/***/ "../../../../../src/app/question-bank/question-radiobutton.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__("../../../../../src/app/question-bank/question-base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonQuestion; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/* class to form Radio Button questions */
var RadioButtonQuestion = (function (_super) {
    __extends(RadioButtonQuestion, _super);
    function RadioButtonQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'radio';
        _this.options = [];
        _this.options = options['options'] || [];
        return _this;
    }
    return RadioButtonQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-radiobutton.js.map

/***/ }),

/***/ "../../../../../src/app/question-bank/question-textbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__("../../../../../src/app/question-bank/question-base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextboxQuestion; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/* class to form Text Box questions */
var TextboxQuestion = (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextboxQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-textbox.js.map

/***/ }),

/***/ "../../../../../src/app/question-bank/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Service to form the Question Base */
var QuestionService = (function () {
    function QuestionService() {
    }
    QuestionService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](question.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
                : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](question.value || '');
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](group);
    };
    return QuestionService;
}());
QuestionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], QuestionService);

//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ "../../../../../src/app/question-bank/quiz-question-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_radiobutton__ = __webpack_require__("../../../../../src/app/question-bank/question-radiobutton.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizQuestionDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/* This service consists of the questions from which quiz page is formed */
var QuizQuestionDataService = (function () {
    function QuizQuestionDataService() {
    }
    QuizQuestionDataService.prototype.getQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_1__question_radiobutton__["a" /* RadioButtonQuestion */]({
                key: 'MCQ1',
                label: '1. This is a multiple question - more specific questions will be added later here',
                options: [
                    { key: 'Option 1', value: 'on' },
                    { key: 'Option 2', value: 'on' },
                    { key: 'Option 3', value: 'on' },
                    { key: 'Option 4', value: 'on' }
                ],
                type: 'radio',
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_1__question_radiobutton__["a" /* RadioButtonQuestion */]({
                key: 'MCQ2',
                label: '2. This is second multiple question - more specific questions will be added later here',
                options: [
                    { key: 'Option 1', value: 'on' },
                    { key: 'Option 2', value: 'on' },
                    { key: 'Option 3', value: 'on' },
                    { key: 'Option 4', value: 'on' }
                ],
                type: 'radio',
                order: 2
            })
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    return QuizQuestionDataService;
}());
QuizQuestionDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], QuizQuestionDataService);

//# sourceMappingURL=quiz-question-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/scheduled-programs/scheduled-programs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scheduled-programs/scheduled-programs.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n<body>\n  <!-- Navigation -->\n   <navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12\">\n        <div class=\"row display-flex\">\n          <div class=\"col-md-2  right-margin\">\n            <!--Left Navigation-->\n            <left-nav></left-nav>\n             \n            </div>\n          <!--col-sm-2-->\n          <div class=\"col-sm-12 col-md-10  screen\" style=\"min-height:525px\">\n          <div  *ngIf=\"show=='scheduled-programs' then template1;\">\n          </div>\n          <div  *ngIf=\"show=='schedule-new' then template2;\">\n          </div>\n         <div  *ngIf=\"show=='assigned-program' then template3;\">\n          </div>\n          \n        <!-- Show template 1 is user clicks scheduled program link  -->\n          <ng-template #template1>\n            <div class=\"row\" style=\"padding-left:15px;padding-top:10px\">\n              <h6 class=\"heading-text\"> Scheduled Training Programmes </h6>\n            </div>\n            <!--/.com-sm-10-->\n            <div class=\"container\" *ngFor=\"let program of Programs\">\n            <div class=\"row\" style=\"padding-bottom:50px\">\n              <div class=\"col-sm-12 col-md-12 col-lg-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\" col-sm-2 col-md-1 col-lg-1\">\n                  <img src=\"{{program.thumbnailsrc}}\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-6 col-md-5 col-lg-6 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\"> {{program.title}}</h6>\n                  <div class=\"body-text\"> Training: {{program.trainingName}}\n                    <br> Scheduled Date: {{program.trainingFromDate}} - {{program.trainingToDate}} </div>\n                </div>\n                <div class=\"col-sm-8 col-md-5 col-lg-4 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px\">\n                  <div>\n                    <a (click)=\"onShowDetails(program.trainingName,program.id)\">\n                    <button type=\"button\" class=\"btn btn-sm button-show-style\" style=\"float:left\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show\n                        <br> Details </h4>\n                    </button></a>\n                  \n                    <button type=\"button\" class=\"btn btn-sm button-view-style\" style=\"float:right;\">\n                      <h4 class=\"body-text\" style=\"color:white\"> View\n                        <br> Students </h4>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              </div>\n            </div>\n            </div>\n            <div class=\"row panel-margin \" style=\"padding-top:50px\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12  add-new\">\n                <div class=\"row\">\n                   <div class=\"col-md-12 col-sm-12 col-xs-3 zero-padding body-text\" style=\"padding-bottom:30px;padding-right:10px\">\n                  <i class=\"fa fa-plus-circle fa-3x pull-right\" aria-hidden=\"true\" (click)=\"onClickNew()\">\n                  </i> <span style=\"float:right\" >Schedule </span><br><span style=\"float:right\">New Training Programme</span></div>\n                </div>\n              </div>\n              </div>\n            </ng-template>\n            <!-- Show template 2 to scheduled a new programme -->\n          <ng-template #template2>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n             <div class=\"row\" style=\"padding-left:10px;padding-top:10px\">\n              <h6 class=\"heading-text\">Scheduled New Training Programmes</h6>\n            </div>\n            <div class=\"row\" style=\"padding-left:15px;padding-bottom:15px\">\n              <div class=\"col-sm-12 col-md-12 panelbg\" style=\"padding-left:10px\">\n                <div class=\"row\" style=\"padding-top:10px;vertical-align:middle\">\n                  <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                    <h6 class=\"body-text\"> <b>Training Programme Name:</b> </h6>\n                  </div>\n                  <div class=\"col-md-7\">\n                       <input class=\"form-control input-sm body-text\" [(ngModel)]=\"model.tpname\" #tpname=\"ngModel\" name=\"tpname\" type=\"text\" style=\"font-weight:bold;width:85%\" required>\n                          <div *ngIf=\"f.submitted && tpname.hasError('required')\" class=\"alert-danger body-text\">Please enter Training Programme Name.</div>\n                   </div>\n                </div>\n                <div class=\"row\" style=\"padding-top:10px;\">\n                  <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                    <h6 class=\"body-text\"><b> Organization / Group:</b> </h6>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <input class=\"form-control input-sm body-text\" [(ngModel)]=\"model.orgname\" #orgname=\"ngModel\" name=\"orgname\" style=\"width:85%\" id=\"inputsm\" type=\"text\" value=\"UNMAS Libya\" required>\n                    <div *ngIf=\"f.submitted && orgname.hasError('required')\" class=\"alert-danger body-text\">Please enter Organization / Group Name.</div>\n                     </div>\n                </div>\n                <div class=\"row\" style=\"padding-top:10px;\">\n                  <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                    <h6 class=\"body-text\"><b> Programme Manager Name: </b></h6>\n                  </div>\n                  <div class=\"col-md-7\">                   \n                    <input class=\"form-control input-sm body-text\" [(ngModel)]=\"model.pmname\" #pmname=\"ngModel\" name=\"pmname\" style=\"width:85%\" id=\"inputsm\" type=\"text\" required>\n                    <div *ngIf=\"f.submitted && pmname.hasError('required')\" class=\"alert-danger body-text\">Please enter Programme Manager Name.</div>\n                </div>\n                </div>\n                <div class=\"row\" style=\"padding-top:10px;\">\n                  <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                    <h6 class=\"body-text\"><b> Programme Manager Email: </b></h6>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <input class=\"form-control input-sm body-text\" style=\"width:85%\" id=\"inputsm\" type=\"text\" #mailIds=\"ngModel\" name=\"mailIds\" [(ngModel)]=\"model.mailIds\" required>\n                    <div *ngIf=\"f.submitted && mailIds.hasError('required')\" class=\"alert-danger body-text\">Please enter Programme Manager Email.</div>\n                </div></div>\n                <div class=\"row\" style=\"padding-top:10px;\">\n                  <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                    <h6 class=\"body-text\"> <b>Training / Catalog: </b></h6>\n                  </div>\n                  <div class=\"col-md-7\"> <select class=\"selectpicker form-control zero-padding body-text\" style=\"height:30px;width:85%\">\n  \t\t\t\t\t\t\t<option>UN SaferGuard Training on the IATG</option>\n\t\t\t\t\t\t\t</select> </div>\n                </div>\n                <div class=\"row\" style=\"padding-top:10px;\">\n                  <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                    <h6 class=\"body-text\"><b> Start &amp; End Date: </b></h6>\n                  </div>\n                  <div class=\"col-lg-6 col-md-6 col-sm-10\">\n                 <date-picker style=\"height:30px;width:48%;float:left\" #startdate=\"ngModel\" name=\"startdate\" [(ngModel)]=\"model.startdate\" required >\n                 </date-picker>\n                 <date-picker style=\"height:30px;width:48%;float:right\" #enddate=\"ngModel\" name=\"enddate\" [(ngModel)]=\"model.enddate\"  required>\n                 </date-picker>\n                 <div *ngIf=\"f.submitted && startdate.hasError('required')\" class=\"alert-danger body-text\">Please enter Start Date.</div>\n                 <div *ngIf=\"f.submitted && enddate.hasError('required')\" class=\"alert-danger body-text\">Please enter End Date.</div>\n                </div></div>\n                <div class=\"row\" style=\"padding-top:10px;\">\n                  <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                    <h6 class=\"body-text\"><b> Training Programme Type: </b></h6>\n                  </div>\n                  <div class=\"col-md-7\"> <select class=\"selectpicker form-control zero-padding body-text\" style=\"height:30px;width:85%\">\n  \t\t\t\t\t\t\t\t <option>Online Only</option>\n\t\t\t\t\t\t\t\t\t </select> </div>\n                \n                </div>\n                <div class=\"row image-align\">\n                  <div class=\"col-md-12 image-align\">\n                    <input type=\"checkbox\" id=\"notifychkbox\"  [(ngModel)]=\"checkboxValue\" name=\"checkboxValue\"> \n                    <span class=\"body-text\">&nbsp; Notify Programme Manager and other responsible for this Training Programme</span> </div>\n                </div>\n                <div class=\"row image-align\" style=\"text-align:right;padding-bottom:50px\">\n                  <div class=\"col-sm-10 col-md-11 image-align\" style=\"float:left\">\n                  <span style=\"padding-right:5px\">\n                    <button type=\"submit\"  class=\"submit-btn-style body-text\">\n                       Submit \n                    </button>\n                    </span>\n                    <button  #openModal [hidden]=\"true\" data-target=\"#emailModal\" data-toggle=\"modal\">showmodal</button>\n                    <span style=\"padding-right:5px\">\n                    <button type=\"button\" (click)=\"onSaveAsDraft()\" class=\"save-btn-style body-text\">\n                      Save as Draft \n                    </button>\n                    </span>\n                    <span style=\"padding-right:5px\">\n                    <button type=\"button\" (click)=\"onCancel()\" class=\"cancel-btn-style body-text\" style=\"float:right;\">\n                       Cancel \n                    </button>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              </div>\n              </form>\n               <div class=\"modal modal-fullscreen fade\"  role=\"dialog\" id=\"emailModal\" tabindex=\"-1\" >\n              <div class=\"modal-dialog modal-lg\">\n              <div class=\"modal-content\">\n              <div class=\"modal-header\" >\n              <button class=\"close\" data-dismiss=\"modal\">&times; </button>\n              </div>\n              <div class=\"modal-body\" style=\"width: 100%; height: 100%;\">\n              <email></email>\n              <button class=\"btn\" data-dismiss=\"modal\">Cancel</button>\n              </div>\n               </div>\n              </div>\n              </div>\n             </ng-template>\n             <!--  Show template if user is program coordinator, show scheduled programs assigned to him  -->\n           <ng-template #template3>\n              <div class=\"row\" style=\"padding-left:15px;padding-top:10px\">\n              <h6 class=\"heading-text\"> Scheduled Training Programmes </h6>\n            </div>\n              <!--/.com-sm-10-->\n              <div class=\"container\" *ngFor=\"let program of AssignedPrograms\">\n            <div class=\"row\" style=\"padding-bottom:50px\">\n              <div class=\"col-sm-12 col-md-12 col-lg-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\" col-sm-2 col-md-1 col-lg-1\">\n                  <img src=\"{{program.thumbnailsrc}}\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-6 col-md-5 col-lg-6 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\"> {{program.title}}</h6>\n                  <div class=\"body-text\"> Training: {{program.trainingName}}\n                    <br> Scheduled Date: {{program.trainingFromDate}} - {{program.trainingToDate}} </div>\n                </div>\n                <div class=\"col-sm-8 col-md-5 col-lg-4 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px\">\n                  <div>\n                    <button type=\"button\" class=\"btn btn-sm button-show-style\" style=\"float:left\" (click)=\"onShowDetails(program.trainingName,program.id)\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show\n                        <br> Details </h4>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-sm button-view-style\" style=\"float:right;\">\n                      <h4 class=\"body-text\" style=\"color:white\"> View\n                        <br> Students </h4>\n                    </button>\n                   </div>\n                </div>\n              </div>\n              </div>\n            </div>\n         </div> \n           </ng-template>     \n          </div>\n         \n     \n\t\t</div>\n      </div>\n     </div>\n      <!-- /.row -->\n      <!--/.container-->\n      <!--footer-->\n      <footer>\n      <myfooter></myfooter>      </footer>\n      <!-- /.container -->\n      \n      <!-- jQuery -->\n      <script src=\"js/jquery.js\"></script>\n      <!-- Bootstrap Core JavaScript -->\n      <script src=\"js/bootstrap.min.js\"></script>\n    </div>\n   \n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/scheduled-programs/scheduled-programs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_programs_service__ = __webpack_require__("../../../../../src/app/scheduled-programs/scheduled-programs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledProgramsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScheduledProgramsComponent = (function () {
    function ScheduledProgramsComponent(spservice, router, sharedservice, activated) {
        this.spservice = spservice;
        this.router = router;
        this.sharedservice = sharedservice;
        this.activated = activated;
        /* variables used in this component */
        this.model = {};
    }
    /* function to fetch the scheduled programs from the service */
    ScheduledProgramsComponent.prototype.getScheduledPrograms = function () {
        return this.spservice.getScheduledPrograms();
    };
    /* function to fetch the assigned scheduled programs from the service for program coordinator  */
    ScheduledProgramsComponent.prototype.getAssignedScheduledPrograms = function () {
        return this.spservice.getAssignedScheduledPrograms();
    };
    /* fetch the user role from the shared service */
    ScheduledProgramsComponent.prototype.getUserRole = function () {
        return this.sharedservice.getUserRole();
    };
    ScheduledProgramsComponent.prototype.ngOnInit = function () {
        this.userRole = this.getUserRole();
        if (this.userRole === 'admin') {
            this.show = 'scheduled-programs';
            this.Programs = this.getScheduledPrograms();
        }
        else if (this.userRole === 'manager') {
            this.show = 'assigned-program';
            this.AssignedPrograms = this.getAssignedScheduledPrograms();
        }
        /* save the selected link so that it can be fetched to highlight the left navigation */
        this.saveSelectedLink('scheduled-programs');
    };
    /* function to invoke when the user clicks on the Schedule New program icon */
    ScheduledProgramsComponent.prototype.onClickNew = function () {
        this.show = 'schedule-new';
    };
    /* Function to save the mailIds */
    ScheduledProgramsComponent.prototype.saveMailIds = function (mailIds) {
        this.sharedservice.saveMailIds(mailIds);
    };
    /* function to invoke when the user submits the add new scheduled program page */
    ScheduledProgramsComponent.prototype.onSubmit = function () {
        /* function add scheduled program */
        this.show = 'scheduled-programs';
        /* if checkbox is checked notify program coordinator with an email */
        if (this.checkboxValue) {
            this.openModal.nativeElement.click();
        }
        this.saveMailIds(this.mailIds);
    };
    /* function to invoke when Cancel is clicked in Schedule New Program page */
    ScheduledProgramsComponent.prototype.onCancel = function () {
        this.show = 'scheduled-programs';
    };
    /* function to invoke when Save as Draft is clicked in Schedule New Program page */
    ScheduledProgramsComponent.prototype.onSaveAsDraft = function () {
        this.show = 'scheduled-programs';
    };
    /* save the training name in shared service to fetch by other component */
    ScheduledProgramsComponent.prototype.saveTrainingName = function (trainingname) {
        return this.sharedservice.saveTrainingName(trainingname);
    };
    /* function when Show Details button is clicked */
    ScheduledProgramsComponent.prototype.onShowDetails = function (trainingname, trainingid) {
        this.saveTrainingName(trainingname);
        this.router.navigate(['./training-program', trainingid], { relativeTo: this.activated });
    };
    /* save the selected link in shared service */
    ScheduledProgramsComponent.prototype.saveSelectedLink = function (selectedlink) {
        return this.sharedservice.saveSelectedLink(selectedlink);
    };
    return ScheduledProgramsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('openModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ScheduledProgramsComponent.prototype, "openModal", void 0);
ScheduledProgramsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'scheduled-programs',
        template: __webpack_require__("../../../../../src/app/scheduled-programs/scheduled-programs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/scheduled-programs/scheduled-programs.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__scheduled_programs_service__["a" /* ScheduledProgramsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__scheduled_programs_service__["a" /* ScheduledProgramsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__scheduled_programs_service__["a" /* ScheduledProgramsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], ScheduledProgramsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=scheduled-programs.component.js.map

/***/ }),

/***/ "../../../../../src/app/scheduled-programs/scheduled-programs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledProgramsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* service to manipulate the scheduled programs */
var ScheduledProgramsService = (function () {
    function ScheduledProgramsService() {
        this.PROGRAMS = [{ id: 1, trainingName: 'Training1', trainingFromDate: 'Dec-12-2016', trainingToDate: 'Jan-12-2016',
                title: 'A Training Program', thumbnailsrc: '../assets/images/thumbnail.jpg', studentCount: 25, status: 'inprogress' },
            { id: 2, trainingName: 'Training2', trainingFromDate: 'Dec-12-2016', trainingToDate: 'Jan-12-2016',
                title: 'Second Training Program', thumbnailsrc: '../assets/images/thumbnail.jpg', studentCount: 20, status: 'completed' },
            { id: 3, trainingName: 'Training3', trainingFromDate: 'Dec-12-2016', trainingToDate: 'Jan-12-2016',
                title: 'Third Training Program', thumbnailsrc: '../assets/images/thumbnail.jpg', studentCount: 35, status: 'completed' },
            { id: 4, trainingName: 'Training4', trainingFromDate: 'Dec-12-2016', trainingToDate: 'Jan-12-2016',
                title: 'Third Training Program', thumbnailsrc: '../assets/images/thumbnail.jpg', studentCount: 15, status: 'inprogress' },
            { id: 5, trainingName: 'Training5', trainingFromDate: 'Dec-12-2016', trainingToDate: 'Jan-12-2016',
                title: 'Third Training Program', thumbnailsrc: '../assets/images/thumbnail.jpg', studentCount: 5, status: 'completed' },
            { id: 6, trainingName: 'Training6', trainingFromDate: 'Dec-12-2016', trainingToDate: 'Jan-12-2016',
                title: 'Third Training Program', thumbnailsrc: '../assets/images/thumbnail.jpg', studentCount: 32, status: 'completed' },
            { id: 7, trainingName: 'Training7', trainingFromDate: 'Dec-12-2016', trainingToDate: 'Jan-12-2016',
                title: 'Third Training Program', thumbnailsrc: '../assets/images/thumbnail.jpg', studentCount: 27, status: 'completed' },
            { id: 8, trainingName: 'Training8', trainingFromDate: 'Dec-12-2016', trainingToDate: 'Jan-12-2016',
                title: 'Third Training Program', thumbnailsrc: '../assets/images/thumbnail.jpg', studentCount: 15, status: 'scheduled' },
            { id: 9, trainingName: 'Training9', trainingFromDate: 'Dec-12-2016', trainingToDate: 'Jan-12-2016',
                title: 'Third Training Program', thumbnailsrc: '../assets/images/thumbnail.jpg', studentCount: 9, status: 'inprogress' },
            { id: 10, trainingName: 'Training10', trainingFromDate: 'Dec-12-2016', trainingToDate: 'Jan-12-2016',
                title: 'Third Training Program', thumbnailsrc: '../assets/images/thumbnail.jpg', studentCount: 29, status: 'scheduled' }
        ];
    }
    /* get the scheduled programs from database */
    ScheduledProgramsService.prototype.getScheduledPrograms = function () {
        return this.PROGRAMS;
    };
    /* get the scheduled programs from database for program coordinator */
    ScheduledProgramsService.prototype.getAssignedScheduledPrograms = function () {
        return this.PROGRAMS.slice(0, 1);
    };
    /* function to fetch the inprogress training programs from the service for program coordinator  */
    ScheduledProgramsService.prototype.getInprogressTrainingPrograms = function () {
        return this.PROGRAMS.slice(5, 9);
    };
    /* function to fetch the completed training programs from the service for program coordinator  */
    ScheduledProgramsService.prototype.getCompletedTrainingPrograms = function () {
        return this.PROGRAMS.slice(2, 7);
    };
    /* get the training program name for a particular scheduled program */
    ScheduledProgramsService.prototype.getScheduledProgramName = function (id) {
        return this.PROGRAMS[0].trainingName;
    };
    /* get all the trainings */
    ScheduledProgramsService.prototype.getAllTrainings = function () {
        return this.PROGRAMS;
    };
    return ScheduledProgramsService;
}());
ScheduledProgramsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ScheduledProgramsService);

//# sourceMappingURL=scheduled-programs.service.js.map

/***/ }),

/***/ "../../../../../src/app/selfregistration/selfregistration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selfregistration/selfregistration.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  Self registration form for Students -->\n<!DOCTYPE html>\n<html>\n<head>\n<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n</head>\n<body>\n  <!-- Navigation -->\n <navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"col-sm-12 col-md-12\" style=\"min-height:525px\">\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" [hidden]=\"!showForm\"  novalidate>\n          <div class=\"row\" style=\"padding-left:10px\">\n            <h6 class=\"heading-text\">Registration</h6>\n          </div>\n          <div class=\"row\" style=\"padding-left:15px;padding-bottom:15px\">\n            <div class=\"col-sm-12 col-md-12 panelbg\" style=\"padding-left:45px;padding-top:10px\">\n              <div class=\"row\" style=\"padding-top:10px;\">\n                <div class=\"col-md-5\">\n                  <h6 class=\"body-text\" style=\"padding-top:10px\"><b> Training Programme Name : </b></h6>\n                </div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control input-sm body-text\"  style=\"width:85%;font-weight:bold\" id=\"inputsm\" type=\"text\" value=\"UN SaferGuard Programme on the IATG, Libya, Dec 2016\" disabled> </div>\n              </div>\n              <div class=\"row\" style=\"padding-top:10px;\">\n                <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                  <h6 class=\"body-text\"><b> Organization / Group : </b></h6>\n                </div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control input-sm body-text\" style=\"width:85%\" id=\"inputsm\" type=\"text\" value=\"UNMAS Libya\" disabled> </div>\n              </div>\n              <div class=\"row\" style=\"padding-top:10px;\">\n                <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                  <h6 class=\"body-text\"><b> Start &amp; End Date : </b></h6>\n                </div>\n                <div class=\"col-md-6 col-sm-10\" >\n                  <input class=\"input-sm body-text\"  style=\"height:30px;width:45%;float:left\" type=\"text\" value=\"DEC - 12 - 2016 9:00 AM GMT\" disabled>\n                  <input class=\" input-sm  body-text\" type=\"text\" style=\"height:30px;width:45%;float:right\"  value=\"JAN - 12 - 2017 5:00 PM GMT\" disabled> </div>\n              </div>\n              <div class=\"row\" style=\"padding-top:10px;\">\n                <div class=\"col-md-5\"style=\"padding-top:10px;\">\n                  <h6 class=\"body-text\"><b> Programme Manager : </b></h6>\n                </div>\n                <div class=\"col-md-7\" >\n                  <input class=\"form-control input-sm body-text heading-text\" style=\"width:85%\" id=\"inputsm\" type=\"text\" value=\"Linda Cooper\" disabled> </div>\n              </div>\n              <div class=\"row\" style=\"padding-top:10px;\">\n                <div class=\"col-md-5 col-sm-4\" style=\"padding-top:10px;\">\n                  <h6 class=\"heading-text\"> Create your Account</h6>\n                </div>\n                <div class=\"col-md-6 col-sm-6\" style=\"padding-top:20px;text-align:right\">\n                  <h6 class=\"body-text\">\n                    <a href=\"http://www.unmas.org.s3-website.us-east-2.amazonaws.com/\">Already have an account, click here to login</a>\n                  </h6>\n                </div>\n              </div>\n              <div class=\"row\" style=\"padding-top:10px;\">\n                <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                  <h6 class=\"body-text\"><b> {{userRole}} Name : </b></h6>\n                </div>\n                <div class=\"col-md-7\" >\n                  <input class=\"form-control input-sm body-text heading-text\" style=\"width:85%\" id=\"inputsm\" type=\"text\" value=\"Philip Morris\"> </div>\n              </div>\n              <div class=\"row\" style=\"padding-top:10px;\">\n                <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                  <h6 class=\"body-text\"><b> {{userRole}} Email Address : </b></h6>\n                </div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control input-sm body-text heading-text\" style=\"width:85%\" id=\"inputsm\" type=\"text\" value=\"philip.morris@hisemail.com\"> </div>\n              </div>\n              <div class=\"row\" style=\"padding-top:10px;\">\n                <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                  <h6 class=\"body-text\"><b> Organization : </b></h6>\n                </div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control input-sm body-text heading-text\" style=\"width:85%\" id=\"inputsm\" type=\"text\" value=\"Libya Weapons and Ammunition Study\"> </div>\n              </div>\n              <div class=\"row\" style=\"padding-top:10px;\">\n                <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                  <h6 class=\"body-text\"><b> Password : </b></h6>\n                </div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control input-sm body-text heading-text\" style=\"width:85%\" id=\"inputsm\" type=\"password\" value=\"LibyaIs\"> </div>\n              </div>\n              <div class=\"row\" style=\"padding-top:10px;\">\n                <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                  <h6 class=\"body-text\"><b> Repeat Password : </b></h6>\n                </div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control input-sm body-text heading-text\" style=\"width:85%\" id=\"inputsm\" type=\"password\" value=\"LibyaIs\"> </div>\n              </div>\n              <div class=\"row\" style=\"padding-top:10px;\">\n              <div class=\"col-sm-11 col-md-11 col-lg-11 image-align\" style=\"text-align:right\" >\n                  <span>\n                    <button type=\"submit\"  class=\"submit-btn-style body-text\">\n                       Submit \n                    </button>\n                    </span>\n                <span style=\"padding-right:10px;padding-left:10px\">\n                    <button type=\"button\" (click)=\"onCancel()\" class=\"cancel-btn-style body-text\">\n                       Cancel \n                    </button>\n                    </span>\n               </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <label [hidden]=\"showForm\"  class=\"body-text\">{{userMsg}}</label>\n      </div>\n  \n    <!-- /.row -->\n    <!--/.container-->\n    <!--footer-->\n     <footer>\n      <myfooter></myfooter>      </footer>\n    <!-- /.container -->\n    <!-- jQuery -->\n    <script src=\"js/jquery.js\"></script>\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"js/bootstrap.min.js\"></script>\n  </div>\n  </div>\n    </div>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/selfregistration/selfregistration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfregistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelfregistrationComponent = (function () {
    function SelfregistrationComponent(router, route) {
        this.router = router;
        this.route = route;
        this.showForm = false;
    }
    SelfregistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* validate the code, show form if code is valid */
        this.sub = this.route.params.subscribe(function (params) {
            _this.code = params['code'];
        });
        if (this.route.snapshot.params.code === 'ABCD') {
            this.showForm = true;
            this.userRole = 'Manager';
        }
        else if (this.route.snapshot.params.code === 'EFGH') {
            this.showForm = true;
            this.userRole = 'Student';
        }
        else {
            this.showForm = false;
            this.userMsg = 'Not a Valid User !!!';
        }
    };
    SelfregistrationComponent.prototype.onSubmit = function () {
        this.showForm = false;
        this.userMsg = 'You have been registered successfully !';
    };
    SelfregistrationComponent.prototype.onCancel = function () {
    };
    return SelfregistrationComponent;
}());
SelfregistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-selfregistration',
        template: __webpack_require__("../../../../../src/app/selfregistration/selfregistration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selfregistration/selfregistration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], SelfregistrationComponent);

var _a, _b;
//# sourceMappingURL=selfregistration.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Shared Service to share data among Components */
var SharedDataService = SharedDataService_1 = (function () {
    function SharedDataService() {
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]("User!");
        this.messageSource1 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]("User!");
        this.currentMessage = this.messageSource.asObservable();
        this.currentMessage1 = this.messageSource1.asObservable();
        this.sharingData = { trainingname: 'tname', coursename: 'cname' };
        this.selectedlink = 'dashboard';
        this.userrole = 'none';
        this.mailIds = 'mailTo';
        this.SelectedManager = '';
        this.isUserLoggedIn = false;
    }
    SharedDataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    SharedDataService.prototype.changeMessage1 = function (message) {
        this.messageSource1.next(message);
    };
    /* Function to save the mailIds */
    SharedDataService.prototype.saveMailIds = function (mailIds) {
        this.mailIds = mailIds;
    };
    /* Function to get the mailIds */
    SharedDataService.prototype.getMailIds = function () {
        return this.mailIds;
    };
    /* Function to set the User Logged In Flag */
    SharedDataService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    /* Function to get the User Logged In Flag */
    SharedDataService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    /* Function to set the User Role */
    SharedDataService.prototype.setUserRole = function (role) {
        this.userrole = role;
        this.isUserLoggedIn = true;
    };
    /* Function to get the User Role */
    SharedDataService.prototype.getUserRole = function () {
        return this.userrole;
    };
    SharedDataService.prototype.getUserName = function () {
        return SharedDataService_1.UserName;
    };
    /* Function to save training name */
    SharedDataService.prototype.saveTrainingName = function (tname) {
        this.sharingData.trainingname = tname;
    };
    /* Function to get the training name */
    SharedDataService.prototype.getTrainingName = function () {
        return this.sharingData.trainingname;
    };
    /* Function to save course name */
    SharedDataService.prototype.saveCourseName = function (coursename) {
        this.sharingData.coursename = coursename;
    };
    /* Function to get course name */
    SharedDataService.prototype.getCourseName = function () {
        return this.sharingData.coursename;
    };
    /* Function to save the selected link */
    SharedDataService.prototype.saveSelectedLink = function (selectedlink) {
        this.selectedlink = selectedlink;
    };
    SharedDataService.prototype.saveSelectedManager = function (selectedManager) {
        this.SelectedManager = selectedManager;
    };
    SharedDataService.prototype.getSelectedManager = function () {
        return this.SelectedManager;
    };
    /* Function to get the selected link */
    SharedDataService.prototype.getSelectedLink = function () {
        return this.selectedlink;
    };
    return SharedDataService;
}());
SharedDataService.UserName = 'User!';
SharedDataService = SharedDataService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SharedDataService);

var SharedDataService_1;
//# sourceMappingURL=shared-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/student/student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student/student.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"css/canvasjs.min.js\"></script>\n</head>\n\n<body>\n  <!-- Navigation -->\n  <navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row display-flex\">\n          <div class=\"col-md-2 right-margin\">\n            <!--Left Navigation-->\n            <left-nav></left-nav>\n          </div>\n          <!--col-sm-2-->\n          <div class=\"col-sm-12 col-md-10\" style=\"min-height:525px\">\n            <div *ngIf=\"show=='students' then template1;\">\n            </div>\n            <div *ngIf=\"show=='student-profile' then template2;\">\n            </div>\n            <div *ngIf=\"show=='student-training-info' then template3;\">\n            </div>\n            <div *ngIf=\"show=='invite-new' then template4;\">\n            </div>\n            <!-- Show Template 1 if user clicks on all students -->\n            <ng-template #template1>\n              <div class=\"row\" style=\"padding-left:10px;padding-top:10px\">\n                <h6 class=\"heading-text\">All Students</h6>\n              </div>\n\n              <div class=\"row\" style=\"padding-left:15px;padding-bottom:15px\">\n                <div class=\"col-sm-12 col-md-12 panelbg\" style=\"padding-left:10px\">\n                  <table class=\"table table-striped\">\n                    <thead>\n                      <tr>\n                        <th width=\"10%\"> </th>\n                        <th width=\"20%\">Name</th>\n                        <th width=\"20%\" class=\"center-align\">Status</th>\n                        <th width=\"20%\" class=\"center-align\">Last Login</th>\n                        <th width=\"20%\"></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr class=\"body-text\" *ngFor=\"let student of STUDENTDETAILS\">\n                        <td>\n\n                          <td>\n                            <div class=\"heading-text zero-padding\">{{student.name}}</div>\n                            <div>{{student.email}}</div>\n\n                          </td>\n                          <td style=\"vertical-align:middle\" class=\"center-align\"></td>\n                          <td style=\"vertical-align:middle\" class=\"center-align\"></td>\n                          <!-- <td style=\"vertical-align:middle\" class=\"center-align\">\n                          <input type=\"button\" id={{student.id}} class=\"btn btn-small view-profile-style\" #elem (click)=\"onViewClick(elem.id)\" value=\"View Profile\"\n                            style=\"color:white\">\n                        </td> -->\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"col-md-12 col-sm-12 zero-padding body-text\" style=\"padding-right:10px;padding-bottom:30px;float:right\">\n                  <i class=\"fa fa-plus-circle fa-3x pull-right\" aria-hidden=\"true\" (click)=\"onInviteClick()\"></i>\n                  <span style=\"float:right;padding-top:10px\">Invite more Students</span>\n                </div>\n              </div>\n            </ng-template>\n            <!-- Show Template 2 if user clicks on a particular student profile - View Profile -->\n            <ng-template #template2>\n              <div class=\"row panel-margin\" style=\"padding-top:15px\">\n                <div class=\"col-md-12 col-sm-12 zero-padding panel-margin\">\n                  <label class=\"heading-text zero-padding\" style=\"style=float:left\">Student : {{student.name}}</label>\n                  <span style=\"float:right\">\n                    <i class=\"fa fa-arrow-circle-o-left fa-2x\" aria-hidden=\"true\" (click)=\"goBack()\"></i>\n                    <span class=\"heading-text\" style=\"font-size:18px;vertical-align:bottom\">\n                      Back</span>\n                  </span>\n                </div>\n              </div>\n              <div myMatchHeight=\"card\" class=\"row panel-margin\" style=\"padding-bottom: 20px\">\n                <div class=\"col-lg-4 col-md-5 col-sm-5 card\">\n                  <div class=\"row image-align\" style=\"padding-left:20px\">\n                    <div class=\"col-md-12 col-sm-12\">\n                      <img src=\"{{student.pic}}\" style=\"padding-top:10px;width:175px;height:175px\" class=\"img-responsive\">\n                      <h6 class=\"body-text\"> Location: {{student.companyPlace}}</h6>\n                      <h6 class=\"body-text\"> Last Login: {{student.lastLogin}} </h6>\n                    </div>\n                  </div>\n                  <div class=\"row image-align\" style=\"padding-left:20px\">\n                    <div class=\"col-md-12 col-sm-12\">\n                      <h6 class=\"heading-text zero-padding\"> Responsibilities </h6>\n                      <h6 class=\"body-text\">Security Officer Libya Mission</h6>\n                      <h6 class=\"body-text\">Teaching Faculty Libya Mission</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-7 col-md-6 col-sm-6 card\">\n                  <div class=\"row image-align\">\n                    <div class=\"col-md-12 col-sm-12\">\n                      <h6 class=\"heading-text zero-padding\" style=\"padding-top:15px\">Personal Info</h6>\n                      <h6 class=\"body-text\">First Name: Don</h6>\n                      <h6 class=\"body-text\">Middle Name: Davis</h6>\n                      <h6 class=\"body-text\">Last Name: Miller</h6>\n                      <h6 class=\"body-text\">Work Place: {{student.companyPlace}}</h6>\n                      <h6 class=\"body-text\">Email: don.miller@unmasnewyork.org</h6>\n                      <h6 class=\"heading-text zero-padding\" style=\"padding-top:15px\">Enrolled Courses</h6>\n                      <h6 class=\"body-text\">Advanced Security Measures</h6>\n                      <h6 class=\"body-text\">Understanding Landmines</h6>\n                      <h6 class=\"body-text\">Libya Mission 2017 - Security</h6>\n                      <h6 class=\"body-text\">New York Training on Advanced Security</h6>\n                      <h6 class=\"heading-text zero-padding\" style=\"padding-top:15px;\">Certifications</h6>\n                      <h6 class=\"body-text\">Certified Security Expert Libya</h6>\n                      <h6 class=\"body-text\" style=\"padding-bottom:25px\">Certified Security Faculty Libya</h6>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n            <!-- Show Template 3 if program coordinator clicks on student training info -->\n            <ng-template #template3>\n              <div class=\"row\"> </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <h6 class=\"heading-text\"> Student List </h6>\n                </div>\n              </div>\n              <div class=\"row\" style=\"padding-left:15px;padding-bottom:15px\">\n                <div class=\"col-sm-12 col-md-12 panelbg\" style=\"padding-left:10px\">\n                  <table class=\"table table-striped\">\n                    <thead>\n                      <tr>\n                        <th width=\"30%\">Name</th>\n                        <th width=\"30%\">Email</th>\n                        <th width=\"10%\">Invited</th>\n                        <th width=\"10%\">Registered</th>\n                        <th width=\"10%\">Enrolled</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr class=\"body-text\" *ngFor=\"let student of StudentDetails\">                      \n                        <td>\n                          <div class=\"heading-text zero-padding\">{{student.name}}</div>\n                        </td>\n                        <td>\n                          <div class=\"heading-text zero-padding\">{{student.email}}</div>\n                        </td>\n                        <td>\n                          <div class=\"heading-text zero-padding\">Yes</div>\n                        </td>\n                        <td>\n                          <div class=\"heading-text zero-padding\">{{student.Registered}}</div>\n                        </td>\n                        <td>\n                          <div class=\"heading-text zero-padding\">{{student.Enrolled}}</div>\n                        </td>\n                        <!-- <td style=\"vertical-align:middle\" class=\"center-align\">\n                          <input type=\"button\" id={{student.id}} class=\"btn btn-small view-profile-style\" #elem (click)=\"onViewClick(elem.id)\" value=\"View Profile\"\n                            style=\"color:white\">\n                        </td> -->\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div *ngIf=\"IsManager\" class=\"col-md-12 col-sm-12 zero-padding body-text\" style=\"padding-right:10px;padding-bottom:30px;\">\n                  <i class=\"fa fa-plus-circle fa-3x pull-right\" aria-hidden=\"true\" (click)=\"onInviteClick()\"></i>\n                  <span style=\"float:right;padding-top:10px\">Invite more Students</span>\n                </div>\n              </div>\n            </ng-template>\n            <!-- Show Template 4 to invite new students -->\n            <ng-template #template4>\n              <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                <div class=\"row\" style=\"padding-left:10px;padding-top:10px\">\n                  <h6 class=\"heading-text\">Invite Students</h6>\n                </div>\n                <div class=\"row\" style=\"padding-left:15px;padding-bottom:15px;\">\n                  <div class=\"col-sm-12 col-md-12 panelbg\" style=\"padding-left:10px;padding-top:15px\">\n                    <div class=\"row\" style=\"padding-top:10px;\">\n                      <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                        <h6 class=\"body-text\">\n                          <b>Training Programme Name: </b>\n                        </h6>\n                      </div>\n                      <div class=\"col-md-7\">\n                        <input class=\"form-control input-sm heading-text body-text\" style=\"width:85%\" id=\"inputsm\" type=\"text\" value=\"UN SaferGuard Programme on the IATG, Libya, Dec 2016\"\n                          disabled> </div>\n                    </div>\n                    <!-- <div class=\"row\" style=\"padding-top:10px;\">\n                      <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                        <h6 class=\"body-text\">\n                          <b>Organization / Group:</b>\n                        </h6>\n                      </div>\n                      <div class=\"col-md-7\">\n                        <input class=\"form-control input-sm body-text\" style=\"width:85%\" id=\"inputsm\" type=\"text\" value=\"UNMAS Libya\" disabled> </div>\n                    </div> -->\n                    <!-- <div class=\"row\" style=\"padding-top:10px;\">\n                      <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                        <h6 class=\"body-text\">\n                          <b> Programme Manager Name:</b>\n                        </h6>\n                      </div>\n                      <div class=\"col-md-7\">\n                        <input class=\"form-control input-sm body-text\" style=\"width:85%\" id=\"inputsm\" type=\"text\" value=\"Paul GRIMSLEY\" disabled> </div>\n                    </div> -->\n                    <div class=\"row\" style=\"padding-top:10px;\">\n                      <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                        <h6 class=\"body-text\">\n                          <b>Start &amp; End Date:</b>\n                        </h6>\n                      </div>\n                      <div class=\"col-md-7 \">\n                        <span style=\"padding-right:10px\">\n                          <input class=\"input-sm body-text\" id=\"inputsm\" style=\"width:41%\" type=\"text\" value=\"DEC - 12 - 2016 9:00 AM GMT\" disabled>\n                        </span>\n                        <input class=\" input-sm body-text\" id=\"inputsm\" type=\"text\" style=\"width:41%\" value=\"JAN - 12 - 2017 5:00 PM GMT\" disabled> </div>\n                    </div>\n\n                    <!-- <div class=\"row\" style=\"padding-top:10px;\">\n                      <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                        <h6 class=\"body-text\">\n                          <b>Student Name &amp; Email: </b>\n                        </h6>\n                      </div>\n                      <div class=\"col-md-7 col-xs-6\">\n                        <span style=\"padding-right:10px\">\n                          <input class=\"input-sm body-text\" id=\"inputsm1\" style=\"width:41%\" [(ngModel)]=\"name\" type=\"text\">\n                        </span>\n                        <input class=\" input-sm body-text\" id=\"inputsm2\" type=\"text\" [(ngModel)]=\"email\" style=\"width:41%\"> </div>\n                    </div> -->\n                    <div [formGroup]=\"myForm\">\n                      <div formArrayName=\"studentsdata\">\n                        <div *ngFor=\"let student of myForm.controls.studentsdata.controls; let i=index\">\n                          <div [formGroupName]=\"i\">\n                            <div class=\"row\" style=\"padding-top:10px;\">\n                              <div class=\"col-md-5\" style=\"padding-top:10px;\">\n                                <h6 class=\"body-text\">\n                                  <b> Student Name &amp; Email :</b>\n                                </h6>\n                              </div>\n                              <div class=\"col-md-7\">\n                                <span style=\"padding-right:10px\">\n                                  <input class=\"input-sm body-text\" id=\"inputsm\" style=\"width:41%\" type=\"text\" formControlName=\"name\">\n                                </span>\n                                <input class=\"input-sm body-text\" id=\"inputsm\" type=\"text\" style=\"width:41%\" formControlName=\"email\">\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"row\">\n                        <div class=\"col-md-8 zero-padding\">\n                          <div class=\"body-text\" style=\"padding-bottom:30px;padding-left:15px\">\n                            <a (click)=\"addHtml()\">\n                              <img src=\"../assets/images/plus-in-circle.png\">\n                            </a>\n                            <span class=\"body-text\">Add more Student Name &amp; Email fields</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-sm-12 col-md-12 body-text\" style=\"padding-top:20px;float:left\">\n                        <input type=\"checkbox\" id=\"notifychkbox\" [(ngModel)]=\"checkboxValue\" name=\"checkboxValue\"> &nbsp; Notify newly added Students\n                      </div>\n                    </div>\n                    <div class=\"row\" style=\"text-align:right;padding-bottom:50px\">\n                      <div class=\"col-sm-10 col-md-11 image-align\" style=\"float:left\">\n                        <span style=\"padding-right:5px\">\n\n                          <button class=\"submit-btn-style body-text\" type=\"submit\" (click)=\"Save()\">\n                            <h6> Save </h6>\n                          </button>\n                        </span>\n                        <span style=\"padding-right:5px\">\n                          <button (click)=\"onCancel()\" class=\"cancel-btn-style body-text\" style=\"float:right\">\n                            <h6> Cancel </h6>\n                          </button>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </form>\n              <button #openModal style=\"display:none\" data-target=\"#emailModal\" data-toggle=\"modal\">showmodal</button>\n\n              <div class=\"modal modal-fullscreen fade\" role=\"dialog\" id=\"emailModal\" tabindex=\"-1\">\n                <div class=\"modal-dialog modal-lg\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button class=\"close\" data-dismiss=\"modal\">&times; </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <email></email>\n                      <button class=\"btn\" data-dismiss=\"modal\">Cancel</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /.row -->\n    <!--/.container-->\n    <!--footer-->\n    <footer>\n      <myfooter></myfooter>\n    </footer>\n    <!-- /.container -->\n    <!-- jQuery -->\n    <p> </p>\n    <script src=\"js/jquery.js\"></script>\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"js/bootstrap.min.js\"></script>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/student/student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_service__ = __webpack_require__("../../../../../src/app/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentComponent = (function () {
    function StudentComponent(_dataService, router, studentservice, _location, _fb, sharedservice) {
        var _this = this;
        this._dataService = _dataService;
        this.router = router;
        this.studentservice = studentservice;
        this._location = _location;
        this._fb = _fb;
        this.sharedservice = sharedservice;
        this.StudentDetails = [];
        this.checkboxValue = true;
        this.qtd = [];
        this.indx = 0;
        this.show = 'student-training-info';
        this.IsManager = false;
        /* Bar chart data */
        this.barChartOptions = {
            scales: {
                xAxes: [{
                        stacked: true,
                        ticks: {
                            mirror: false,
                            beginAtZero: true,
                            max: 50,
                            min: 0,
                            stepSize: 25
                        }
                    }],
                yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true,
                            mirror: true,
                        }
                    }]
            },
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false
        };
        this.barChartLabels = [''];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{ data: [34, 0], label: 'Enrolled: 86%' }, { data: [16, 0], label: 'Pending: 14%' }];
        this.userRole = this.getUserRole();
        this._dataService.getTraining()
            .subscribe(function (res) { return _this.gettraining(res); });
    }
    StudentComponent.prototype.gettraining = function (result) {
        //console.log(res);
        var lessionData;
        var lessons = result.map(function (data) { return data.training_program; });
        var x = lessons[0];
        if (this.sharedservice.getUserRole() === 'admin') {
            for (var i = 0; i < x.length; i++) {
                if (x[i].program_manager_email == this.sharedservice.getSelectedManager()) {
                    lessionData = x[i];
                    for (var j = 0; j < lessionData.students.length; j++) {
                        this.StudentDetails.push({ name: lessionData.students[j].Name, email: lessionData.students[j].Email, Registered: lessionData.students[j].Registered, Enrolled: lessionData.students[j].Enrolled });
                    }
                }
            }
        }
        //console.log(lessionData);
    };
    /* function to save the selected link in shared service, used to highlight left navigation */
    StudentComponent.prototype.saveSelectedLink = function (selectedlink) {
        return this.sharedservice.saveSelectedLink(selectedlink);
    };
    /* function to fetch the students from Student Service */
    StudentComponent.prototype.getStudents = function () {
        return this.studentservice.getStudents();
    };
    /* function to fetch the invited students from Student Service */
    StudentComponent.prototype.getInvitedStudents = function () {
        return this.studentservice.getInvitedStudents();
    };
    /* function to fetch the students from Student Service by Id */
    StudentComponent.prototype.getStudentById = function (id) {
        return this.studentservice.getStudentById(id);
    };
    /* fetch the logged in user role from shared service */
    StudentComponent.prototype.getUserRole = function () {
        return this.sharedservice.getUserRole();
    };
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedservice.currentMessage1.subscribe(function (message) { return _this.UserName = message; });
        this.userRole = this.getUserRole();
        if (this.userRole === 'admin') {
            this.IsManager = false;
        }
        else if (this.userRole === 'manager') {
            this.IsManager = true;
            this.show = 'student-training-info';
            this.StudentDetails = this.studentservice.getStudentDetail();
            //this.invitedStudents = this.studentservice.getInvitedStudents();
            this.saveSelectedLink('students');
            this.myForm = this._fb.group({
                studentsdata: this._fb.array([
                    this.initStudentData()
                ])
            });
        }
    };
    /* function used in invite students form to add name and email textboxes on click of + sign */
    StudentComponent.prototype.initStudentData = function () {
        return this._fb.group({
            name: [''],
            email: [''],
        });
    };
    /* function to invoke on click of View Profile */
    StudentComponent.prototype.onViewClick = function (id) {
        this.show = 'student-profile';
        this.student = this.studentservice.getStudentById(id);
    };
    /* funtion to invoke on click of Invite Students icon */
    StudentComponent.prototype.onInviteClick = function () {
        this.show = 'invite-new';
    };
    /* function to dynamically add additional text boxes */
    StudentComponent.prototype.addHtml = function () {
        this.indx = this.indx + 2;
        var control = this.myForm.controls['studentsdata'];
        control.push(this.initStudentData());
    };
    /* function to invoke when user clicks on Go Back arrow */
    StudentComponent.prototype.goBack = function () {
        if (this.userRole === 'manager' && this.show === 'student-training-info')
            this._location.back();
        else if (this.userRole === 'manager' && this.show === 'student-profile')
            this.show = 'student-training-info';
        else if (this.userRole === 'admin' && this.show === 'student-profile')
            this.show = 'students';
    };
    /* function to invoke when user submits the invite new students form */
    StudentComponent.prototype.onSubmit = function () {
        // if (this.userRole === 'admin')
        //   this.show = 'students';
        // else if (this.userRole === 'manager')
        //   this.show = 'student-training-info';
        // if (this.checkboxValue)
        //   this.openModal.nativeElement.click();
    };
    /* function to invoke when user clicks Save as Draft in the invite new students form */
    StudentComponent.prototype.onSaveAsDraft = function () {
        // if (this.userRole === 'admin')
        //   this.show = 'students';
        // else if (this.userRole === 'manager')
        //   this.show = 'student-training-info';
    };
    /* function to invoke when user clicks Cancel in the invite new students form */
    StudentComponent.prototype.onCancel = function () {
        if (this.userRole === 'admin')
            this.show = 'students';
        else if (this.userRole === 'manager')
            this.show = 'student-training-info';
    };
    StudentComponent.prototype.Save = function () {
        var _this = this;
        var control = this.myForm.controls['studentsdata'];
        for (var i = 0; i < control.controls.length; i++) {
            if (control.controls[i].value.name != undefined && control.controls[i].value.email != undefined)
                this.studentservice.saveStudents(control.controls[i].value.name, control.controls[i].value.email, this.UserName);
            // this.studentservice.sendEmail(control.controls[i].value.email);
            setTimeout(function () {
                _this.router.navigate(['dashboard']);
                //console.log(this.UsersData);
            }, 1000);
        }
    };
    return StudentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('openModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], StudentComponent.prototype, "openModal", void 0);
StudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'student',
        template: __webpack_require__("../../../../../src/app/student/student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student/student.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_data_service__["a" /* SharedDataService */]) === "function" && _g || Object])
], StudentComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=student.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* Service to manipulate the Student data */
var StudentService = (function () {
    function StudentService(_dataService, sharedservice) {
        var _this = this;
        this._dataService = _dataService;
        this.sharedservice = sharedservice;
        this.count = 0;
        this.STUDENTDETAILS = [];
        this.STUDENTS = [{
                id: 1, name: 'Don Miller', companyName: 'UNODA', companyPlace: 'New York, NY',
                status: 'Active', thumbnailsrc: '../assets/images/listperson.png', pic: '../assets/images/person-big.png', lastLogin: 'JAN-12-2016',
                trainingName: 'Training1', trainingStatus: 'enrolled'
            },
            {
                id: 2, name: 'Brenda', companyName: 'UNODA', companyPlace: 'New York, NY',
                status: 'Active', thumbnailsrc: '../assets/images/listperson.png', pic: '../assets/images/person-big.png', lastLogin: 'JAN-12-2016',
                trainingName: 'Training1', trainingStatus: 'active'
            },
            {
                id: 3, name: 'Don Miller', companyName: 'UNODA', companyPlace: 'New York, NY',
                status: 'Active', thumbnailsrc: '../assets/images/listperson.png', pic: '../assets/images/person-big.png', lastLogin: 'JAN-12-2016',
                trainingName: 'Training2', trainingStatus: 'inactive'
            },
            {
                id: 4, name: 'Don Miller', companyName: 'UNODA', companyPlace: 'New York, NY',
                status: 'Active', thumbnailsrc: '../assets/images/listperson.png', pic: '../assets/images/person-big.png', lastLogin: 'JAN-12-2016',
                trainingName: 'Training2', trainingStatus: 'completed'
            }
        ];
        this.sharedservice.currentMessage1.subscribe(function (message) { return _this.UserName = message; });
        this._dataService.getTraining()
            .subscribe(function (res) { return _this.gettraining(res); });
    }
    /* fetches the students from the database */
    StudentService.prototype.getStudents = function () {
        return this.STUDENTS;
    };
    StudentService.prototype.getTrainingData = function () {
        return this.training;
    };
    StudentService.prototype.getStudentDetail = function () {
        return this.STUDENTDETAILS;
    };
    /* fetches the students from the database by Id */
    StudentService.prototype.getStudentById = function (id) {
        return this.STUDENTS[++id];
    };
    /* fetches the invited students from the database */
    StudentService.prototype.getInvitedStudents = function () {
        return this.STUDENTS;
    };
    /* fetches the students from the database by trainingstatus */
    StudentService.prototype.getTrainingStudentCountByStatus = function (stat) {
        this.count = 0;
        for (var i = 0; i < this.STUDENTS.length; i++) {
            if (this.STUDENTS[i].trainingStatus === stat)
                this.count++;
        }
        return this.count;
    };
    StudentService.prototype.sendEmail = function (email) {
        var _this = this;
        this._dataService.sendEmailStudent(email).subscribe(function (res) { return _this.getdata(_this.retVal = res); });
    };
    StudentService.prototype.saveStudents = function (name, email, manageremail) {
        var _this = this;
        this._dataService.saveStudent(name, email, manageremail)
            .subscribe(function (res) { return _this.getdata(_this.retVal = res); });
    };
    StudentService.prototype.getdata = function (data) {
    };
    StudentService.prototype.gettraining = function (result) {
        //console.log(res);
        var lessionData;
        var lessons = result.map(function (data) { return data.training_program; });
        var x = lessons[0];
        if (this.sharedservice.getUserRole() != 'admin')
            for (var i = 0; i < x.length; i++) {
                if (x[i].program_manager_email == this.UserName) {
                    lessionData = x[i];
                    for (var j = 0; j < lessionData.students.length; j++) {
                        this.STUDENTDETAILS.push({ name: lessionData.students[j].Name, email: lessionData.students[j].Email, Registered: lessionData.students[j].Registered, Enrolled: lessionData.students[j].Enrolled });
                    }
                }
            }
        else {
            for (var i = 0; i < x.length; i++) {
                lessionData = x[i];
                for (var j = 0; j < lessionData.students.length; j++) {
                    this.STUDENTDETAILS.push({ name: lessionData.students[j].Name, email: lessionData.students[j].Email, Registered: lessionData.students[j].Registered, Enrolled: lessionData.students[j].Enrolled });
                }
                break;
            }
        }
        //console.log(lessionData);
    };
    return StudentService;
}());
StudentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */]) === "function" && _b || Object])
], StudentService);

var _a, _b;
//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ "../../../../../src/app/training-detail/training-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training-detail/training-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n<body>\n  <!-- Navigation -->\n<navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\" *ngFor=\"let training of Training\" style=\"padding-left: 0px; padding-right: 0px;\">\n  <div class=\"container\" style=\"padding-left: 0px; padding-right: 0px;\">\n    <div class=\"row image-align\">\n      <div class=\"col-md-9 col-sm-10 col-lg-10 \" >\n        <div class=\"col-md-12 col-sm-12 col-xs-12 panelbg\" style=\"margin-right:5px\">\n          <div class=\"row\">\n            <div>\n              <h6 class=\"heading-text header-padding\"> {{training.trainingName}}, {{training.trainingPlace}}, {{training.trainingMonth}} </h6>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 col-sm-6 col-lg-4\">\n                <img src=\"../assets/images/UNMASLogo.png\" alt=\"\" class=\"header-padding\"> </div>\n              <div class=\"col-md-8 col-sm-8 col-lg-8 header-padding body-text\"> Training: {{training.trainingName}}\n                <br> Scheduled Date: {{training.trainingFromDate}} - {{training.trainingToDate}}\n                <br>\n                <br> Created by UNMAS in collaboration with UNMAS Libya Mission </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\" col-md-3 col-sm-4 col-lg-2 panelbg small-screen\">\n        <div class=\"row\">\n          <div class=\"col-md-12 col-sm-12\">             \n            <div class=\"button-padding\" style=\"text-align:center\">\n              <button type=\"button\" (click)=\"EnrollClick()\" class=\"btn btn-primary btn-md btn-custom body-text\" style=\"width:95%\"> <b>{{Enroll}}</b>\n                <br> Starts Today</button>                \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n  <div class=\"container\">\n    <h6 class=\"small-heading-text\"> About {{training.trainingName}} </h6><span class=\"body-text\">{{training.body}}</span></div>\n  <div class=\"container\">\n    <div class=\"row panel-padding\">\n      <div class=\"col-md-4 col-lg-4 col-sm-8\">\n        <div class=\"row\" style=\"margin-right:10px\">\n          <div class=\"col-sm-3 col-lg-3 col-md-4\">\n            <img src=\"../assets/images/Exams.jpg\" alt=\"\" class=\"image-size\"> </div>\n          <div class=\"col-md-8 col-sm-9 col-lg-9\">\n            <h6 class=\"heading-text\"><a [routerLink]=\"['./courses','1']\">1 Course</a></h6><span class=\"body-text\">All different courses are listed out by days schedule </span></div>\n        </div>\n      </div>\n      \n      <div class=\"col-md-4 col-lg-4 col-sm-8\">\n        <div class=\"row\" style=\"margin-right:10px\">\n          <div class=\"col-sm-3 col-lg-3 col-md-4\">\n            <img src=\"../assets/images/Exams.jpg\" alt=\"\" class=\"image-size\"> </div>\n          <div class=\"col-md-8 col-sm-9 col-lg-9\">\n            <h6 class=\"heading-text\">1 Exam</h6><span class=\"body-text\">Something to write here about Exams and related  </span></div>\n        </div>\n      </div>\n   \n      <div class=\"col-md-4 col-lg-4 col-sm-8 \">\n        <div class=\"row\">\n          <div class=\"col-sm-3 col-lg-3 col-md-4\">\n            <img src=\"../assets/images/Exams.jpg\" alt=\"\" class=\"image-size\"> </div>\n          <div class=\"col-md-8 col-sm-9 col-lg-9\">\n            <h6 class=\"heading-text\">1 Quiz</h6><span class=\"body-text\">Something to write here about Quizes and surprise quizes</span> </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <h6 class=\"small-heading-text\"> Courses </h6> <span class=\"body-text\">{{training.courseContent}}</span> </div>\n  <!-- Footer -->\n  <footer>\n    <myfooter></myfooter>\n  </footer>\n  </div>\n  <!-- /.container -->\n  <!-- jQuery -->\n  <script src=\"js/jquery.js\"></script>\n  <!-- Bootstrap Core JavaScript -->\n  <script src=\"js/bootstrap.min.js\"></script>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/training-detail/training-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_detail_service__ = __webpack_require__("../../../../../src/app/training-detail/training-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainingDetailComponent = (function () {
    function TrainingDetailComponent(_dataService, sharedservice, trainingdetailservice) {
        this._dataService = _dataService;
        this.sharedservice = sharedservice;
        this.trainingdetailservice = trainingdetailservice;
        this.Enroll = "Enroll";
    }
    /* function to fetch the trainings from the service */
    TrainingDetailComponent.prototype.getTrainingDetails = function () {
        return this.trainingdetailservice.getTrainings();
    };
    TrainingDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedservice.currentMessage1.subscribe(function (message) { return _this.UserName = message; });
        this.Training = this.getTrainingDetails();
    };
    TrainingDetailComponent.prototype.getdata1 = function (res) {
    };
    TrainingDetailComponent.prototype.EnrollClick = function () {
        var _this = this;
        alert('You have been enrolled successfully!');
        this.Enroll = "Enrolled";
        setTimeout(function () {
            _this._dataService.saveEnroll(_this.UserName).subscribe(function (res) { return _this.getdata1(res); });
        }, 1000);
    };
    return TrainingDetailComponent;
}());
TrainingDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'training-detail',
        template: __webpack_require__("../../../../../src/app/training-detail/training-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/training-detail/training-detail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__training_detail_service__["a" /* TrainingDetailService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__training_detail_service__["a" /* TrainingDetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__training_detail_service__["a" /* TrainingDetailService */]) === "function" && _c || Object])
], TrainingDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=training-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/training-detail/training-detail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingDetailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Service to manipulate the Trainings */
var TrainingDetailService = (function () {
    function TrainingDetailService(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this.isDone = false;
        this.TRAINING = [];
        this._dataService.getTraining()
            .subscribe(function (res) { return _this.getdata(_this.training = res); });
    }
    /* get the trainings from the database */
    TrainingDetailService.prototype.getTrainings = function () {
        return this.TRAINING;
    };
    TrainingDetailService.prototype.getdata = function (result) {
        //console.log(res);
        var lessons = result.map(function (data) { return data.training_program; });
        var lessionData = lessons[0];
        var program = lessionData[0];
        //console.log(lessionData)     ;
        this.TRAINING.push({ id: program.id, trainingName: program.name, trainingMonth: 'Dec 2017', trainingFromDate: program.start_date,
            trainingToDate: program.end_date, trainingPlace: 'Libya', body: program.about, courseCount: 1, examCount: 1, quizCount: 1,
            courseContent: program.course });
    };
    return TrainingDetailService;
}());
TrainingDetailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], TrainingDetailService);

var _a;
//# sourceMappingURL=training-detail.service.js.map

/***/ }),

/***/ "../../../../../src/app/training-manager/training-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training-manager/training-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n  <script src=\"https://code.jquery.com/jquery-3.1.1.min.js\" crossorigin=\"anonymous\"></script>\r\n  <script data-require=\"angular.js@1.4.x\" src=\"https://code.angularjs.org/1.4.12/angular.js\" data-semver=\"1.4.9\"></script>\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n\r\n<body>\r\n  <!-- Navigation -->\r\n  <navbar></navbar>\r\n  <!-- Page Content -->\r\n  <!-- Heading Row -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-12\">\r\n        <div class=\"row display-flex\">\r\n          <div class=\"col-md-2 right-margin\">\r\n            <!--Left Navigation-->\r\n            <left-nav></left-nav>\r\n          </div>\r\n          <!--col-sm-2-->\r\n          <div class=\"col-sm-12 col-md-10 \" style=\"min-height:525px\">\r\n            <div class=\"row\" style=\"padding-left:15px;padding-top:10px\">\r\n              <h6 class=\"heading-text\"> Dashboard </h6>\r\n            </div>\r\n            <!--/.com-sm-10-->\r\n            <div class=\"row\" style=\"padding-left:15px;padding-bottom:15px;\">\r\n              <div class=\"col-sm-12 col-md-12 panelbg\" style=\"padding-left:10px;padding-top:15px\">\r\n                <div class=\"row\" style=\"padding-top:10px;\">\r\n                  <div class=\"col\" style=\"padding-top:10px;\">\r\n                    <h6 class=\"body-text\">\r\n                      <b>Training: </b>\r\n                    </h6>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <select id=\"Id\" class=\"hideLabel form-control\" name=\"Id\">\r\n                      <option selected=\"true\" value=\"1\">--Select--</option> \r\n                      <option value=\"2\">Landmine and Explosive Remnants of War</option>                    \r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col\"></div>\r\n                </div>\r\n                <div class=\"row\" style=\"padding-top:10px;\">\r\n                  <div class=\"col\" style=\"padding-top:10px;\">\r\n                    <h6 class=\"body-text\">\r\n                      <b>Training Programme Name: </b>\r\n                    </h6>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <input class=\"form-control\" id=\"program\" style=\"width:100%\" type=\"text\" [(ngModel)]=\"programname\" required>\r\n                  </div>\r\n                  <div class=\"col\"></div>\r\n                </div>\r\n                <div class=\"row\" style=\"padding-top:10px;\">\r\n                  <div class=\"col\" style=\"padding-top:10px;\">\r\n                    <h6 class=\"body-text\">\r\n                      <b>Start Date:</b>\r\n                    </h6>\r\n                  </div>\r\n                  <div class=\"col\">\r\n\r\n                    <input class=\"form-control\" id=\"startdt\" style=\"width:100%\" type=\"text\" [(ngModel)]=\"startdate\" required>\r\n\r\n                  </div>\r\n                  <div class=\"col\"></div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"padding-top:10px;\">\r\n                  <div class=\"col\" style=\"padding-top:10px;\">\r\n                    <h6 class=\"body-text\">\r\n                      <b>End Date:</b>\r\n                    </h6>\r\n                  </div>\r\n                  <div class=\"col\">\r\n\r\n                    <input class=\"form-control\" id=\"enddt\" style=\"width:100%\" type=\"text\" [(ngModel)]=\"enddate\" required>\r\n\r\n                  </div>\r\n                  <div class=\"col\"></div>\r\n                </div>\r\n                <div class=\"row\" style=\"padding-top:10px;\">\r\n                  <div class=\"col\" style=\"padding-top:10px;\">\r\n                    <h6 class=\"body-text\">\r\n                      <b> Manager Name</b>\r\n                    </h6>\r\n                  </div>\r\n                  <div class=\"col\">\r\n\r\n                    <input class=\"form-control\" id=\"name\" style=\"width:100%\" type=\"text\" [(ngModel)]=\"managername\" required>\r\n\r\n                  </div>\r\n                  <div class=\"col\"></div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"padding-top:10px;\">\r\n                  <div class=\"col\" style=\"padding-top:10px;\">\r\n                    <h6 class=\"body-text\">\r\n                      <b> Email :</b>\r\n                    </h6>\r\n                  </div>\r\n                  <div class=\"col\">\r\n\r\n                    <input class=\"form-control\" id=\"email\" type=\"text\" style=\"width:100%\" [(ngModel)]=\"manageremail\" required>\r\n\r\n\r\n                  </div>\r\n                  <div class=\"col\"></div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-md-12 body-text\" style=\"padding-top:20px;float:left\">\r\n                    <!-- <input type=\"checkbox\" id=\"notifychkbox\" [(ngModel)]=\"checkboxValue\" name=\"checkboxValue\"> &nbsp; Notify newly added Students -->\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"padding-top:10px;\">\r\n                  <div class=\"col\">\r\n                    <button class=\"submit-btn-style body-text\" style=\"float:left; width: 100%;\" type=\"submit\" (click)=\"Save()\">\r\n                      <h6> {{SaveValue}} </h6>\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <button (click)=\"onCancel()\" class=\"cancel-btn-style body-text\" style=\"float:left; width: 100%;\">\r\n                      <h6> Cancel </h6>\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"col\"></div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"text-align:right;padding-bottom:50px\">\r\n                  <span style=\"padding-right:5px; color: green;\" *ngIf=\"isSaved\">\r\n                    Manager added successfully!\r\n                  </span>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /.row -->\r\n    <!--/.container-->\r\n    <!--footer-->\r\n    <footer>\r\n      <myfooter></myfooter>\r\n    </footer>\r\n    <!-- /.container -->\r\n    <!-- jQuery -->\r\n    <script src=\"js/jquery.js\"></script>\r\n    <!-- Bootstrap Core JavaScript -->\r\n    <script src=\"js/bootstrap.min.js\"></script>\r\n  </div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/training-manager/training-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_manager_service__ = __webpack_require__("../../../../../src/app/training-manager/training-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainingManagerComponent = (function () {
    function TrainingManagerComponent(router, trainingmanagerservice, sharedservice) {
        this.router = router;
        this.trainingmanagerservice = trainingmanagerservice;
        this.sharedservice = sharedservice;
        this.checkboxValue = true;
        this.name = "";
        this.email = "";
        this.isSaved = false;
        this.SaveValue = "Save";
        this.Enroll = "Enroll";
    }
    /* function to fetch the trainings from the service */
    TrainingManagerComponent.prototype.getTrainingDetails = function () {
        return this.trainingmanagerservice.getTrainings();
    };
    TrainingManagerComponent.prototype.ngOnInit = function () {
        this.Training = this.getTrainingDetails();
        this.program = this.Training[0];
        //console.log(this.program);
        this.saveSelectedLink('students');
    };
    TrainingManagerComponent.prototype.saveSelectedLink = function (selectedlink) {
        return this.sharedservice.saveSelectedLink(selectedlink);
    };
    TrainingManagerComponent.prototype.Save = function () {
        var _this = this;
        this.SaveValue = "Saving... Please wait...";
        setTimeout(function () {
            _this.trainingmanagerservice.saveProgram(_this.programname, _this.startdate, _this.enddate, _this.managername, _this.manageremail);
            // this.trainingmanagerservice.saveName(this.name);
        }, 5000);
        setTimeout(function () {
            _this.router.navigate(['dashboard']);
            // this.trainingmanagerservice.saveName(this.name);
        }, 5000);
    };
    return TrainingManagerComponent;
}());
TrainingManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'training-manager',
        template: __webpack_require__("../../../../../src/app/training-manager/training-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/training-manager/training-manager.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__training_manager_service__["a" /* TrainingManagerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__training_manager_service__["a" /* TrainingManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__training_manager_service__["a" /* TrainingManagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */]) === "function" && _c || Object])
], TrainingManagerComponent);

var _a, _b, _c;
//# sourceMappingURL=training-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/training-manager/training-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingManagerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Service to manipulate the Trainings */
var TrainingManagerService = (function () {
    function TrainingManagerService(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this.isDone = false;
        this.IsEmailSaved = false;
        this.IsNameSaved = false;
        this.TRAINING = [];
        this._dataService.getTraining()
            .subscribe(function (res) { return _this.getdata(_this.training = res); });
    }
    TrainingManagerService.prototype.getdata = function (result) {
        var lessons = result.map(function (data) { return data.training_program; });
        var lessionData = lessons[0];
        this.TRAINING.push({ id: lessionData.id, trainingName: lessionData.name, trainingMonth: 'Dec 2017', trainingFromDate: lessionData.start_date,
            trainingToDate: lessionData.end_date, trainingPlace: 'Libya', body: lessionData.about, courseCount: 1, examCount: 1, quizCount: 1,
            courseContent: lessionData.course });
    };
    TrainingManagerService.prototype.getTrainings = function () {
        return this.TRAINING;
    };
    TrainingManagerService.prototype.saveEmail = function (email) {
        var _this = this;
        this._dataService.saveEmail(email).subscribe(function (res) { return _this.getemailService(_this.emailService = res); });
    };
    TrainingManagerService.prototype.manageradd = function (email) {
        var _this = this;
        this._dataService.manageradd(email).subscribe(function (res) { return _this.getemailService(_this.emailService = res); });
    };
    TrainingManagerService.prototype.sendEmail = function (email) {
        var _this = this;
        this._dataService.sendEmail(email).subscribe(function (res) { return _this.getemailService(_this.emailService = res); });
    };
    TrainingManagerService.prototype.getemailService = function (emailService) {
        this.IsEmailSaved = true;
    };
    TrainingManagerService.prototype.saveName = function (name) {
        var _this = this;
        this._dataService.saveName(name).subscribe(function (res) { return _this.getnameService(_this.nameService = res); });
        ;
    };
    TrainingManagerService.prototype.saveProgram = function (programname, startdate, enddate, managername, manageremail) {
        var _this = this;
        this._dataService.saveProgram(programname, startdate, enddate, managername, manageremail).subscribe(function (res) { return _this.getnameService(_this.nameService = res); });
        ;
    };
    TrainingManagerService.prototype.getnameService = function (nameService) {
        this.IsNameSaved = true;
    };
    TrainingManagerService.prototype.getEmailUpdateStatus = function () {
        return this.IsEmailSaved;
    };
    TrainingManagerService.prototype.getNameUpdateStatus = function () {
        return this.IsNameSaved;
    };
    return TrainingManagerService;
}());
TrainingManagerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], TrainingManagerService);

var _a;
//# sourceMappingURL=training-manager.service.js.map

/***/ }),

/***/ "../../../../../src/app/training-program/training-program.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training-program/training-program.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head> \n<body>\n  <!-- Navigation -->\n  <navbar></navbar>\n  <!-- Page Content -->\n  <!-- Heading Row -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row display-flex\">\n          <div class=\"col-md-2 right-margin\">\n            <!--Left Navigation-->\n            <left-nav></left-nav>\n          </div>\n          <!--col-sm-2-->\n          <div class=\"col-sm-9 col-md-10\" style=\"min-height:525px\">\n          <div  *ngIf=\"show=='all-trainings' then template1;\">\n          </div>\n          <div  *ngIf=\"show=='training-program' then template2;\">\n          </div>\n          <!--  Show Template 1 if user clicks on All Trainings -->\n          <ng-template #template1>\n          <div class=\"row\" style=\"padding-left:15px;padding-top:10px\">\n              <h6 class=\"heading-text\"> All Training Programmes </h6>\n            </div>\n            <!--/.com-sm-10-->\n            <div class=\"container\" *ngFor=\"let training of Trainings\">\n            <div class=\"row\" style=\"padding-bottom:50px\">\n              <div class=\"col-sm-12 col-md-12 col-lg-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\" col-sm-2 col-md-1 col-lg-1\">\n                  <img src=\"{{training.thumbnailsrc}}\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-6 col-md-5 col-lg-6 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\"> {{training.title}}</h6>\n                  <div class=\"body-text\"> Training: {{training.trainingName}}\n                    <br> Scheduled Date: {{training.trainingFromDate}} - {{training.trainingToDate}} </div>\n                </div>\n                <div class=\"col-sm-8 col-md-5 col-lg-4 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px\">\n                  <div>\n                    <button type=\"button\" class=\"btn btn-sm button-show-style\" style=\"float:left\" (click)=\"onShowDetails(training.trainingName,training.id)\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show\n                        <br> Details </h4>\n                    </button>\n                  \n                    <button type=\"button\" class=\"btn btn-sm button-view-style\" style=\"float:right;\">\n                      <h4 class=\"body-text\" style=\"color:white\"> View\n                        <br> Students </h4>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              </div>\n            </div>\n            </div>\n          </ng-template>\n          <!--  Show Template 2 if user clicks on a particular Training -->\n          <ng-template #template2>\n            <div class=\"row  panel-margin\" style=\"padding-top:10px\">\n              <h6 class=\"heading-text\"> UN SaferGuard on the IATG, Libya, Dec\n                <br><span style=\"padding-left:40px\">- &gt; {{trainingname}}</span> </h6>\n            </div>\n            <!--/.com-sm-10-->\n            <div class=\"row panel-margin\">\n              <div class=\"col-sm-12 col-md-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\" col-sm-2 col-md-1 col-lg-1\">\n                  <img src=\"../assets/images/thumbnail.jpg\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-8 col-md-6 col-lg-7 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\">Courses (Total:{{coursecount}})</h6>\n                  <div class=\"body-text\"> Created By: UNMAS, Libya\n                    <br> Scheduled Date: Nov-23-2016 </div>\n                </div>\n                <div class=\"col-sm-5 col-md-4 col-lg-3 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px\">\n                  <div>\n                 \t<a [routerLink]=\"['course']\">\n                    <button type=\"button\" class=\"btn btn-sm button-view-style show-detail-size\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show all\n                        <br> Courses </h4>\n                    </button>\n                    </a>\n                  </div>\n                </div>\n              </div>\n              </div>\n            </div>\n            <div class=\"row panel-margin\" style=\"padding-top:20px\">\n              <div class=\"col-sm-12 col-md-12 panelbg zero-padding\">\n              <div class=\"row\">\n                <div class=\"col-sm-2 col-md-1 col-lg-1\">\n                  <img src=\"../assets/images/thumbnail.jpg\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-8 col-md-6 col-lg-7 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\">Final Exam/Test</h6>\n                  <div class=\"body-text\"> Created By: UNMAS, Libya\n                    <br> Scheduled Date: Nov-23-2016 </div>\n                </div>\n                <div class=\"col-sm-5 col-md-4 col-lg-3 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px\">\n                  <div>\n                    <button type=\"button\" class=\"btn btn-sm button-view-style show-detail-size\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show more\n                        <br> Details </h4>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            </div>\n            <div class=\"row panel-margin\" style=\"padding-top:20px\">\n              <div class=\"col-sm-12 col-md-12 panelbg zero-padding\">\n                <div class=\"row\">\n                <div class=\"col-sm-2 col-md-1 col-lg-1\">\n                  <img src=\"../assets/images/thumbnail.jpg\" alt=\"\" class=\"thumbnail-align\"> </div>\n                <div class=\"col-sm-8 col-md-6 col-lg-7 panel-margin\">\n                  <h6 class=\"heading-text image-align zero-padding\">Final Quiz</h6>\n                  <div class=\"body-text\"> Created By: UNMAS, Libya\n                    <br> Scheduled Date: Nov-23-2016 </div>\n                </div>\n                <div class=\"col-sm-5 col-md-4 col-lg-3 panel-margin image-align\" style=\"padding-top:10px;padding-right:30px;padding-bottom:20px\">\n                  <div>\n                    <button type=\"button\" class=\"btn btn-sm button-view-style show-detail-size\">\n                      <h4 class=\"body-text\" style=\"color:white\"> Show more\n                        <br> Details </h4>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            </div>              \n          </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /.row -->\n    <!--/.container-->\n    <!--footer-->\n    <footer>\n     <myfooter></myfooter>\n    </footer>\n    <!-- /.container -->\n    <!-- jQuery -->\n    <script src=\"js/jquery.js\"></script>\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"js/bootstrap.min.js\"></script>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/training-program/training-program.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_course_service__ = __webpack_require__("../../../../../src/app/course/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scheduled_programs_scheduled_programs_service__ = __webpack_require__("../../../../../src/app/scheduled-programs/scheduled-programs.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingProgramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrainingProgramComponent = (function () {
    function TrainingProgramComponent(courseservice, router, route, sharedservice, spservice) {
        this.courseservice = courseservice;
        this.router = router;
        this.route = route;
        this.sharedservice = sharedservice;
        this.spservice = spservice;
        this.show = 'all-trainings';
    }
    /* function to fetch the number of courses */
    TrainingProgramComponent.prototype.getCourseCount = function () {
        return this.courseservice.getCourseCount();
    };
    /* function to fetch all the trainings */
    TrainingProgramComponent.prototype.getAllTrainings = function () {
        return this.spservice.getAllTrainings();
    };
    /* fetch training name from shared service */
    TrainingProgramComponent.prototype.getTrainingName = function () {
        return this.sharedservice.getTrainingName();
    };
    /* save the training name in the shared service */
    TrainingProgramComponent.prototype.saveTrainingName = function (tname) {
        this.sharedservice.saveTrainingName(tname);
    };
    /* save the selected link in the shared service*/
    TrainingProgramComponent.prototype.saveSelectedLink = function (selectedlink) {
        return this.sharedservice.saveSelectedLink(selectedlink);
    };
    /* function invoked on Show Details button click */
    TrainingProgramComponent.prototype.onShowDetails = function (trainingname, trainingid) {
        this.saveTrainingName(trainingname);
        this.show = 'training-program';
        this.id = trainingid;
        this.coursecount = this.getCourseCount();
        this.trainingname = this.getTrainingName();
        this.router.navigate(['./training-program', this.id]);
        ;
    };
    TrainingProgramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedLink = this.sharedservice.getSelectedLink();
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.selectedLink === 'all-trainings' && !_this.id)
                _this.Trainings = _this.getAllTrainings();
            else if (_this.id) {
                _this.show = 'training-program';
                _this.coursecount = _this.getCourseCount();
                _this.trainingname = _this.getTrainingName();
                _this.sharedservice.saveSelectedLink(_this.selectedLink);
            }
        });
    };
    return TrainingProgramComponent;
}());
TrainingProgramComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'training-program',
        template: __webpack_require__("../../../../../src/app/training-program/training-program.component.html"),
        styles: [__webpack_require__("../../../../../src/app/training-program/training-program.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__course_course_service__["a" /* CourseService */], __WEBPACK_IMPORTED_MODULE_4__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__course_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__course_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__scheduled_programs_scheduled_programs_service__["a" /* ScheduledProgramsService */]) === "function" && _e || Object])
], TrainingProgramComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=training-program.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map