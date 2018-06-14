/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["showMessage"] = showMessage;
/* harmony export (immutable) */ __webpack_exports__["confirmAge"] = confirmAge;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_js__ = __webpack_require__(3);


function showMessage() {
    alert('Hello ' + __WEBPACK_IMPORTED_MODULE_0__user_js__["a" /* user */].name);
}

function confirmAge() {
    var result = window.prompt("What's your age?");
    if(result >= 18) {
        showMessage();
    }
    else {
        location.href = 'https://youtu.be/OK03o3BHafk';
        Location.assign(location.href);
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["filterArray"] = filterArray;
/* harmony export (immutable) */ __webpack_exports__["isEmpty"] = isEmpty;
/* harmony export (immutable) */ __webpack_exports__["objKeys"] = objKeys;
/* harmony export (immutable) */ __webpack_exports__["showIsEmptyResult"] = showIsEmptyResult;
function filterArray(numbers, min, max){
    var counter = 0;
    var result = [];    
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] > min && numbers[i] < max){            
            result[counter] = numbers[i];
            counter++;
        }
    }
    return result;
}

function isEmpty(object){
    if (Object.keys(object).length > 0){
        return false;
    }
    else {
        return true;
    }
}

function objKeys(object){
    return Object.keys(object);
}

function showIsEmptyResult(result){
    if(result){
        console.log("Object is empty");
    }
    else{
        console.log("Object is`t empty");
    }
}



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const user = { name : "Vitaliy", lastName: "Khmelko" }
/* harmony export (immutable) */ __webpack_exports__["a"] = user;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrayFilters_js__ = __webpack_require__(1);


//-----------------------------------
//confirmAge();
//-----------------------------------
console.log("Homework on Friday");
var numbers = [26,31,55,18,54,43,77,39,23];
var minNumber = 25;
var maxNumber = 50;
console.log(numbers);
console.log(Object(__WEBPACK_IMPORTED_MODULE_1__arrayFilters_js__["filterArray"])(numbers, minNumber, maxNumber));

var person = {
    firstName: "Kate",
    lastName: "Kos",
    age: 21
};
var someObj = new Object();
Object(__WEBPACK_IMPORTED_MODULE_1__arrayFilters_js__["showIsEmptyResult"])(Object(__WEBPACK_IMPORTED_MODULE_1__arrayFilters_js__["isEmpty"])(person));
Object(__WEBPACK_IMPORTED_MODULE_1__arrayFilters_js__["showIsEmptyResult"])(Object(__WEBPACK_IMPORTED_MODULE_1__arrayFilters_js__["isEmpty"])(someObj));
console.log(Object(__WEBPACK_IMPORTED_MODULE_1__arrayFilters_js__["objKeys"])(person));
console.log(Object(__WEBPACK_IMPORTED_MODULE_1__arrayFilters_js__["objKeys"])(someObj));

/***/ })
/******/ ]);