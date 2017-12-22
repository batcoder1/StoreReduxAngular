webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOGGLE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_VISIBILITY_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VisibilityFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setVisibilityFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return toggleItem; });
var ADD_ITEM = 'ADD_TODO';
var TOGGLE_ITEM = 'TOGGLE_TODO';
var SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
var VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
var nextItemId = 0;
var addItem = function (text) {
    return {
        type: ADD_ITEM,
        id: nextItemId++,
        text: text
    };
};
var setVisibilityFilter = function (filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: filter
    };
};
var toggleItem = function (id) {
    return {
        type: TOGGLE_ITEM,
        id: id
    };
};


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lista {\n\n    display: -webkit-box;\n\n    display: -ms-flexbox;\n\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center;\n}\n.item {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.box {\n  min-height: 200px;\n}\n.filter {\n    text-decoration: none;\n    font-size: 14px;\n    color: grey;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"lista\">\n    <h1>LISTA COMPRA</h1>\n  <div class=\"item\">\n    <input type=\"text\" [(ngModel)]=\"tarea\">\n    <button type=\"button\" (click)=\"addItem(tarea)\">+</button>\n  </div>\n  <div class=\"box\">\n    <div class=\"item\" *ngFor =\"let item of items \">\n      <input type=\"checkbox\" name=\"completed\" [(ngModel)]=\"item.completed\" (click)=\"complete(item)\">{{item.text}}\n    </div>\n\n\n  </div>\n  <div class=\"item\">\n    <a *ngIf=\"filter!==filters[0]\" class=\"filter\" href=\"#\" (click)=\"changeFilter(0)\">Todos</a>\n    <a *ngIf=\"filter!==filters[1]\" class=\"filter\" href=\"#\" (click)=\"changeFilter(1)\">Activos</a>\n    <a *ngIf=\"filter!==filters[2]\" class=\"filter\" href=\"#\" (click)=\"changeFilter(2)\">Completados</a>\n\n  </div>\n</div> \n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__("../../../../../src/app/reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.tarea = '';
        this.filters = ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'];
        this.filter = this.filters[0];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["b" /* createStore */])(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* reducer */]);
        var unsubscribe = this.store.subscribe(function () {
            var filter = _this.store.getState().visibilityFilter;
            if (filter === __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* VisibilityFilters */].SHOW_COMPLETED) {
                _this.items = _this.store.getState().items.filter(function (t) { return t.completed; });
            }
            else {
                if (filter === __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* VisibilityFilters */].SHOW_ACTIVE) {
                    _this.items = _this.store.getState().items.filter(function (t) { return !t.completed; });
                }
                else {
                    _this.items = _this.store.getState().items;
                }
            }
            console.log(_this.store.getState());
            _this.filter = filter;
        });
    };
    AppComponent.prototype.addItem = function (task) {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["e" /* addItem */])(task));
        this.tarea = '';
    };
    AppComponent.prototype.complete = function (item) {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["g" /* toggleItem */])(item.id));
    };
    AppComponent.prototype.changeFilter = function (id) {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["f" /* setVisibilityFilter */])(this.filters[id]));
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export visibilityFilter */
/* unused harmony export items */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var SHOW_ALL = __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* VisibilityFilters */].SHOW_ALL;
var initialState = {
    visibilityFilter: __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* VisibilityFilters */].SHOW_ALL,
    items: []
};
var visibilityFilter = function (state, action) {
    if (state === void 0) { state = SHOW_ALL; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* SET_VISIBILITY_FILTER */]:
            return action.payload;
        default:
            return state;
    }
};
var items = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* ADD_ITEM */]:
            return state.concat([
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* TOGGLE_ITEM */]:
            return state.map(function (item) {
                return (item.id === action.id)
                    ? __assign({}, item, { completed: !item.completed }) : item;
            });
        default:
            return state;
    }
};
var reducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* combineReducers */])({ visibilityFilter: visibilityFilter, items: items });


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map