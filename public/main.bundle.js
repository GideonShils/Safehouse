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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\n\ttext-align: center;\n\twidth: 75%;\n  max-width: 700px;\n\tmargin: 0 auto;\n\tmargin-top: 30px;\n}\n\n#logo {\n\twidth: 110px;\n}\n\n#container h1 {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 100;\n\tcolor: #fff;\n\tmargin: 0;\n}\n\n#container h2 {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 100;\n\tmargin: 20px;\n}\n\n\n/* Keypad */\n.keypadwrapper {\n  padding: 15px;\n  text-align: center;\n  width: 75%;\n  border-radius: 6px;\n  background: rgba(255,255,255,0.7);\n  color: #6FA8D1;\n  margin: 0 auto;\n  margin-top: 40px;\n  -webkit-box-shadow: 0px 0px 53px -11px rgba(0,0,0,0.4);\n    moz-box-shadow: 0px 0px 53px -11px rgba(0,0,0,0.4);\n    box-shadow: 0px 0px 53px -11px rgba(0,0,0,0.4);\n}\n\n.keypadwrapper .keypad .numberline {\n  width: 100%;\n}\n\n.keypadwrapper .keypad .content {\n  display: inline-block;\n  margin: 0 8%;\n}\n\n.keypadwrapper .keypad .content div {\n  width: 4em;\n  height: 4em;\n  text-align: center;\n  border: 1px solid #6FA8D1;\n  border-radius: 70px;\n  display: inline-block;\n  margin-top: 20px;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; /* Safari */\n  transition: background-color 300ms, color 300ms;\n}\n\n.keypadwrapper .keypad .content div span:nth-child(1) {\n  display: block;\n  font-size: 1.8em;\n  height: 1em;\n  margin-top: 0.2em;\n  margin-top: 0.4em;\n}\n\n.keypadwrapper .keypad .content div:hover {\n  background-color: #6FA8D1;\n  color: #fff;\n  border: 1px solid #6FA8D1;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.keypadwrapper .keypad #linefour {\n\tmargin-bottom: 30px;\n}\n\n.nocircle {\n  width: auto !important;\n  border: none !important;\n  height: auto !important;\n}\n\n.led {\n  display: inline-block;\n  margin: 20px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n}\n\n.blueText {\n  color: #6FA8D1;\n}\n\n.redText {\n  color: #BC5163;\n}\n\n.greenText {\n  color: #70C278;\n}\n\n@media all and (max-width: 710px) {\n\n  #container {\n    text-align: center;\n    width: 100%;\n    max-width: 100%;\n    margin: 0 auto;\n    margin-top: 30px;\n  }\n\n\t.keypadwrapper .keypad .content {\n  \t\tdisplay: inline-block;\n  \t\tmargin: 0 6%;\n\t\t}\n\n  \t.keypadwrapper .keypad .content div {\n  \t\twidth: 3em;\n  \t\theight: 3em;\n  \t}\n\n  \t.keypadwrapper .keypad .content div span:nth-child(1) {\n  \t\tfont-size: 1.2em;\n      margin-top: 11px;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\" rel=\"stylesheet\">\n\n<div id=\"container\">\n  <!-- Header -->\n  <img id=\"logo\" src= \"{{logo}}\">\n  <h1>{{title}}</h1>\n\n  <!-- Keypad -->\n  <div class=\"keypadwrapper\">\n    <div [class]=\"headerColor\">\n      <h2>{{header}}</h2>\n    </div>\n    <div class=\"keypad\">\n      <div id=\"lineone\" class=\"numberline\">\n        <div class=\"content\" (click)=\"padPress(1)\">\n          <div>\n            <span class=\"number\">1</span>\n          </div>\n        </div>\n        <div class=\"content\" (click)=\"padPress(2)\">\n          <div>\n            <span class=\"number\">2</span>\n          </div>\n        </div>\n        <div class=\"content\" (click)=\"padPress(3)\">\n          <div>\n            <span class=\"number\">3</span>\n          </div>\n        </div>\n      </div>\n      <div id=\"linetwo\" class=\"numberline\">\n        <div class=\"content\" (click)=\"padPress(4)\">\n          <div>\n            <span class=\"number\">4</span>\n          </div>\n        </div>\n        <div class=\"content\" (click)=\"padPress(5)\">\n          <div>\n            <span class=\"number\">5</span>\n          </div>\n        </div>\n        <div class=\"content\" (click)=\"padPress(6)\">\n          <div>\n            <span class=\"number\">6</span>\n\n          </div>\n        </div>\n      </div>\n      <div id=\"linethree\" class=\"numberline\">\n        <div class=\"content\" (click)=\"padPress(7)\">\n          <div>\n            <span class=\"number\">7</span>\n\n          </div>\n        </div>\n        <div class=\"content\" (click)=\"padPress(8)\">\n          <div>\n            <span class=\"number\">8</span>\n\n          </div>\n        </div>\n        <div class=\"content\" (click)=\"padPress(9)\">\n          <div>\n            <span class=\"number\">9</span>\n          </div>\n        </div>\n      </div>\n      <div id=\"linefour\" class=\"numberline\">\n        <div class=\"content\" (click)=\"padPress('C')\">\n          <div>\n            <span class=\"number\">C</span>\n          </div>\n        </div>\n        <div class=\"content\" (click)=\"padPress(0)\">\n          <div>\n            <span class=\"number\">0</span>\n          </div>\n        </div>\n        <div class=\"content\" (click)=\"padPress('#')\">\n          <div>\n            <span class=\"number\">#</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- LED -->\n    <div [@changeColor]='red' class=\"led\"></div>\n    <div [@changeColor]='orange' class=\"led\"></div>\n    <div [@changeColor]='green' class=\"led\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_post_service__ = __webpack_require__("../../../../../src/app/http-post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
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
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.title = 'Safehouse';
        this.header = 'Enter code';
        this.logo = '../assets/logo.png';
        this.code = '';
        this.auth = 1;
        this.level = 'red';
        this.headerColor = 'blueText';
        this.red = 'red';
        this.orange = 'grey';
        this.green = 'grey';
        this.locked = false;
    }
    AppComponent.prototype.padPress = function (button) {
        var _this = this;
        if (!this.locked) {
            // Send code
            if (button == '#') {
                // Send first authentication
                if (this.auth == 1) {
                    // Send code to server and validate
                    this.httpService.postCode(this.auth, parseInt(this.code)).subscribe(function (response) {
                        _this.level = response.result;
                        // If code was correct, move to next auth step
                        if (_this.level == 'orange') {
                            _this.auth = 2;
                            _this.orange = 'orange';
                            _this.red = 'grey';
                            _this.header = 'SMS sent';
                            setTimeout(function () { return _this.header = 'Enter second code'; }, 2000);
                        }
                        else if (_this.level == 'blocked') {
                            var counter = 10;
                            var intervalId;
                            _this.headerColor = 'redText';
                            _this.header = "BLOCKED";
                            // Blink all lights red 3 times seconds
                            _this.red = 'grey';
                            setTimeout(function () { return _this.red = 'red'; }, 300);
                            setTimeout(function () { return _this.red = 'grey'; }, 600);
                            setTimeout(function () { return _this.red = 'red'; }, 900);
                            setTimeout(function () { return _this.red = 'grey'; }, 1200);
                            setTimeout(function () { return _this.red = 'red'; }, 1500);
                            setTimeout(function () { return _this.orange = 'red'; }, 300);
                            setTimeout(function () { return _this.orange = 'grey'; }, 600);
                            setTimeout(function () { return _this.orange = 'red'; }, 900);
                            setTimeout(function () { return _this.orange = 'grey'; }, 1200);
                            setTimeout(function () { return _this.orange = 'red'; }, 1500);
                            setTimeout(function () { return _this.green = 'red'; }, 300);
                            setTimeout(function () { return _this.green = 'grey'; }, 600);
                            setTimeout(function () { return _this.green = 'red'; }, 900);
                            setTimeout(function () { return _this.green = 'grey'; }, 1200);
                            setTimeout(function () { return _this.green = 'red'; }, 1500);
                            // Lock for 10 seconds
                            _this.locked = true;
                            intervalId = setInterval(function () {
                                if (counter != 0) {
                                    counter--;
                                }
                                else {
                                    _this.locked = false;
                                    clearInterval(intervalId);
                                    _this.header = 'Enter code';
                                    counter = 10;
                                    _this.orange = 'grey';
                                    _this.green = 'grey';
                                    _this.headerColor = 'blueText';
                                }
                            }, 1000);
                        }
                        else {
                            _this.header = 'Incorrect, try again';
                            // Make red blink
                            setTimeout(function () { return _this.header = 'Enter code'; }, 2000);
                            // Blink red 3 times
                            _this.red = 'grey';
                            setTimeout(function () { return _this.red = 'red'; }, 300);
                            setTimeout(function () { return _this.red = 'grey'; }, 600);
                            setTimeout(function () { return _this.red = 'red'; }, 900);
                            setTimeout(function () { return _this.red = 'grey'; }, 1200);
                            setTimeout(function () { return _this.red = 'red'; }, 1500);
                        }
                    });
                }
                // Send second authentication
                if (this.auth == 2) {
                    // Send code to server and validate
                    this.httpService.postCode(this.auth, parseInt(this.code)).subscribe(function (response) {
                        _this.level = response.result;
                        // If code was correct, move to next auth step
                        if (_this.level == 'green') {
                            _this.header = 'Success';
                            _this.green = 'green';
                            _this.orange = 'grey';
                            _this.headerColor = 'greenText';
                            // Reset for next person
                            setTimeout(function () { return _this.header = 'Enter code'; }, 2000);
                            setTimeout(function () { return _this.red = 'red'; }, 2000);
                            setTimeout(function () { return _this.green = 'grey'; }, 2000);
                            setTimeout(function () { return _this.headerColor = 'greenText'; }, 2000);
                        }
                        else {
                            _this.header = 'Incorrect, try again';
                            setTimeout(function () { return _this.header = 'Enter code'; }, 2000);
                            _this.orange = 'grey';
                            // Blink red 3 times
                            setTimeout(function () { return _this.red = 'red'; }, 300);
                            setTimeout(function () { return _this.red = 'grey'; }, 600);
                            setTimeout(function () { return _this.red = 'red'; }, 900);
                            setTimeout(function () { return _this.red = 'grey'; }, 1200);
                            setTimeout(function () { return _this.red = 'red'; }, 1500);
                        }
                    });
                    // Reset to one no matter what (for next user or for failure)
                    this.auth = 1;
                }
                // Reset code and authentication level
                if (!this.locked) {
                    this.code = '';
                }
            }
            else if (button == 'C') {
                this.code = '';
                this.header = 'Enter code';
            }
            else {
                this.code += button;
                this.header = this.code;
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('changeColor', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('red', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    backgroundColor: '#BC5163',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('orange', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    backgroundColor: '#F6C346',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('green', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    backgroundColor: '#70C278',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('grey', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    backgroundColor: '#d0d2d8',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('* <=> *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('100ms ease-in')),
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_post_service__["a" /* HttpPostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_post_service__["a" /* HttpPostService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_post_service__ = __webpack_require__("../../../../../src/app/http-post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__http_post_service__["a" /* HttpPostService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/http-post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpPostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpPostService = (function () {
    function HttpPostService(http) {
        this.http = http;
        // Set request URL
        this.url = '/auth';
    }
    // Sends code and authentication step
    // Returns 
    HttpPostService.prototype.postCode = function (authNum, codeNum) {
        var json = JSON.stringify({
            auth: authNum,
            code: codeNum
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url, json, { headers: headers }).map(function (res) { return res.json(); });
    };
    return HttpPostService;
}());
HttpPostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], HttpPostService);

var _a;
//# sourceMappingURL=http-post.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map