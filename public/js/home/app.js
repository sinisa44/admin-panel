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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/home/app.js":
/*!**********************************!*\
  !*** ./resources/js/home/app.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/selectors */ "./resources/js/home/resources/selectors.js");

_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["button"].addEventListener('click', function (event) {
  displayIcon(_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["liNewUser"], 'fas fa-user-plus ');
  displayIcon(_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["liShowUser"], 'fas fa-users ');
  displayIcon(_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["liBookkeping"], 'fas fa-book ');
  displayIcon(_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["liMailInfo"], 'fas fa-envelope ');
  displayIcon(_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["liInformation"], 'fas fa-info ');
  _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["button"].classList.add('none');
  _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["buttonRight"].classList.remove('none');
  animateSidebar('5%');
});
_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["buttonRight"].addEventListener('click', function (event) {
  animateSidebar('10%');
  _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["button"].classList.remove('none');
  _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["buttonRight"].classList.add('none');
  setTimeout(function () {
    removeIcon(_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["liNewUser"], 'New User');
    removeIcon(_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["liShowUser"], 'Show Users');
    removeIcon(_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["liBookkeping"], 'Bookkeping');
    removeIcon(_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["liMailInfo"], 'Mail Info');
    removeIcon(_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["liInformation"], 'Information');
  }, 500);
});

var displayIcon = function displayIcon(selector, icon) {
  selector.textContent = ''; // selector.style.paddingRight = "1rem";

  var faIcon = document.createElement('i');
  faIcon.className = "".concat(icon);
  selector.appendChild(faIcon);
};

var removeIcon = function removeIcon(selector, text) {
  selector.removeChild(selector.firstChild);
  selector.textContent = text;
};

var animateSidebar = function animateSidebar(flexBasis) {
  _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["sideNavUl"].style.textAlign = "center"; // selector.sideNavUl.style.paddingRight = ".5rem";

  _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["sideNav"].style.flexBasis = flexBasis;
};

/***/ }),

/***/ "./resources/js/home/resources/selectors.js":
/*!**************************************************!*\
  !*** ./resources/js/home/resources/selectors.js ***!
  \**************************************************/
/*! exports provided: liNewUser, liShowUser, liBookkeping, liMailInfo, liInformation, sideNav, container, button, sideNavUl, buttonRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liNewUser", function() { return liNewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liShowUser", function() { return liShowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liBookkeping", function() { return liBookkeping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liMailInfo", function() { return liMailInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liInformation", function() { return liInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideNav", function() { return sideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideNavUl", function() { return sideNavUl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonRight", function() { return buttonRight; });
var liNewUser = document.querySelector('#li-newUser');
var liShowUser = document.querySelector('#li-showUser');
var liBookkeping = document.querySelector('#li-bookkeping');
var liMailInfo = document.querySelector('#li-mailInfo');
var liInformation = document.querySelector('#li-information');
var sideNav = document.querySelector('.sidenav');
var container = document.querySelector('.container');
var button = document.querySelector('.fa-arrow-alt-circle-left');
var buttonRight = document.querySelector('.fa-arrow-alt-circle-right');
var sideNavUl = document.querySelector('#sidenav__ul');


/***/ }),

/***/ "./resources/sass/home/app.scss":
/*!**************************************!*\
  !*** ./resources/sass/home/app.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/home/users/create/app.scss":
/*!***************************************************!*\
  !*** ./resources/sass/home/users/create/app.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/main/app.scss":
/*!**************************************!*\
  !*** ./resources/sass/main/app.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/navigation/app.scss":
/*!********************************************!*\
  !*** ./resources/sass/navigation/app.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/home/app.js ./resources/sass/main/app.scss ./resources/sass/navigation/app.scss ./resources/sass/home/app.scss ./resources/sass/home/users/create/app.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\admin-panel\resources\js\home\app.js */"./resources/js/home/app.js");
__webpack_require__(/*! C:\xampp\htdocs\admin-panel\resources\sass\main\app.scss */"./resources/sass/main/app.scss");
__webpack_require__(/*! C:\xampp\htdocs\admin-panel\resources\sass\navigation\app.scss */"./resources/sass/navigation/app.scss");
__webpack_require__(/*! C:\xampp\htdocs\admin-panel\resources\sass\home\app.scss */"./resources/sass/home/app.scss");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\admin-panel\resources\sass\home\users\create\app.scss */"./resources/sass/home/users/create/app.scss");


/***/ })

/******/ });