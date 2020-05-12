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

/***/ "./resources/js/classes/sidenav.js":
/*!*****************************************!*\
  !*** ./resources/js/classes/sidenav.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidenav; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sidenav = /*#__PURE__*/function () {
  function Sidenav() {
    _classCallCheck(this, Sidenav);
  }

  _createClass(Sidenav, [{
    key: "changeIcon",
    value: function changeIcon(target, oldName, newName) {
      target.classList.remove(oldName);
      target.classList.add(newName);
    }
  }, {
    key: "changeWidth",
    value: function changeWidth(sidenav, container) {
      sidenav.name.style.flexBasis = sidenav.width;
      container.name.style.flexBasis = container.width;
    }
  }, {
    key: "addText",
    value: function addText(text) {
      text.forEach(function (element) {
        var childSpan = document.createElement('span');
        childSpan.textContent = element.text;
        element.selector.appendChild(childSpan);
      });
    }
  }, {
    key: "removeText",
    value: function removeText(target) {
      target.forEach(function (element) {
        element.removeChild(element.lastChild);
      });
    }
  }]);

  return Sidenav;
}();



/***/ }),

/***/ "./resources/js/home/app.js":
/*!**********************************!*\
  !*** ./resources/js/home/app.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/_selectors */ "./resources/js/home/resources/_selectors.js");
/* harmony import */ var _classes_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/sidenav */ "./resources/js/classes/sidenav.js");


_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["sideNavButton"].addEventListener('click', function (event) {
  var sideNav = new _classes_sidenav__WEBPACK_IMPORTED_MODULE_1__["default"]();

  if (event.target.classList.contains('fa-arrow-alt-circle-right')) {
    sideNav.changeIcon(event.target, 'fa-arrow-alt-circle-right', 'fa-arrow-alt-circle-left');
    var sidenav = {
      name: _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["sideNavLeft"],
      width: '8%'
    };
    var container = {
      name: _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["container"],
      width: '92%'
    };
    sideNav.changeWidth(sidenav, container);
    var sideNavText = [{
      selector: _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["linkAddUser"],
      text: 'Add User'
    }, {
      selector: _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["linkShowUser"],
      text: 'ShowUser'
    }, {
      selector: _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["linkBookkeping"],
      text: 'Bookkeping'
    }, {
      selector: _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["linkMailInfo"],
      text: 'Mail Info'
    }, {
      selector: _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["linkInformation"],
      text: 'Information'
    }];
    setTimeout(function () {
      sideNav.addText(sideNavText);
    }, 300);
  } else if (event.target.classList.contains('fa-arrow-alt-circle-left')) {
    sideNav.changeIcon(event.target, 'fa-arrow-alt-circle-left', 'fa-arrow-alt-circle-right');
    var selectorTarget = [_resources_selectors__WEBPACK_IMPORTED_MODULE_0__["linkAddUser"], _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["linkShowUser"], _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["linkBookkeping"], _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["linkMailInfo"], _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["linkInformation"]];
    sideNav.removeText(selectorTarget);
    var _sidenav = {
      name: _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["sideNavLeft"],
      width: '3%'
    };
    var _container = {
      name: _resources_selectors__WEBPACK_IMPORTED_MODULE_0__["container"],
      width: '97%'
    };
    sideNav.changeWidth(_sidenav, _container);
  }
});

/***/ }),

/***/ "./resources/js/home/resources/_selectors.js":
/*!***************************************************!*\
  !*** ./resources/js/home/resources/_selectors.js ***!
  \***************************************************/
/*! exports provided: sideNavLeft, sideNavButton, sideNavUl, linkAddUser, linkShowUser, linkBookkeping, linkMailInfo, linkInformation, container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideNavLeft", function() { return sideNavLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideNavButton", function() { return sideNavButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideNavUl", function() { return sideNavUl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkAddUser", function() { return linkAddUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkShowUser", function() { return linkShowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkBookkeping", function() { return linkBookkeping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkMailInfo", function() { return linkMailInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkInformation", function() { return linkInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
var sideNavLeft = document.querySelector('.sidenav-left');
var sideNavButton = document.querySelector('.fa-arrow-alt-circle-right');
var sideNavUl = document.querySelector('#sidenav__ul');
var linkAddUser = document.querySelector('#li-newUser');
var linkShowUser = document.querySelector('#li-showUser');
var linkBookkeping = document.querySelector('#li-bookkeping');
var linkMailInfo = document.querySelector('#li-mailInfo');
var linkInformation = document.querySelector('#li-information');
var container = document.querySelector('.container');

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