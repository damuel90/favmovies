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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/styles.scss?");

/***/ }),

/***/ "./src/js/constants/routes.js":
/*!************************************!*\
  !*** ./src/js/constants/routes.js ***!
  \************************************/
/*! exports provided: LANDING, HOME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LANDING\", function() { return LANDING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOME\", function() { return HOME; });\nconst LANDING = \"/\";\nconst HOME = \"/home.html\";\n\n//# sourceURL=webpack:///./src/js/constants/routes.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.scss */ \"./src/css/styles.scss\");\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ \"./src/js/services/index.js\");\n/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/routes */ \"./src/js/constants/routes.js\");\n\n\n\nconst landing = document.getElementById(\"landing\");\nconst username = document.getElementById(\"username\");\nconst password = document.getElementById(\"password\");\nconst submit = document.getElementById(\"submit\");\n\nconst init = () => {\n  if (_services__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].session.get()) {\n    location.replace(_constants_routes__WEBPACK_IMPORTED_MODULE_2__[\"HOME\"]);\n  }\n\n  document.addEventListener(\"DOMContentLoaded\", app);\n};\n\nconst app = () => {\n  landing.classList.remove(\"hide\");\n  username.addEventListener(\"blur\", validate);\n  password.addEventListener(\"blur\", validate);\n  submit.addEventListener(\"click\", login);\n};\n\nconst validate = function ({\n  target\n}) {\n  const father = target.parentElement;\n  const label = father.firstElementChild;\n  const [valid, message] = _services__WEBPACK_IMPORTED_MODULE_1__[\"validations\"][target.name](target.value);\n\n  if (!valid) {\n    father.classList.add(\"error\");\n    label.innerText = message;\n    target.addEventListener(\"input\", validate);\n  } else {\n    father.classList.remove(\"error\");\n    label.innerText = message;\n    target.removeEventListener(\"input\", validate);\n  }\n};\n\nconst login = function (e) {\n  e.preventDefault();\n  validate({\n    target: username\n  });\n  validate({\n    target: password\n  });\n  const error = document.querySelectorAll(\".error\").length > 0;\n\n  if (!error) {\n    _services__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].session.set({\n      username: username.value.trim(),\n      password: password.value\n    });\n    location.replace(_constants_routes__WEBPACK_IMPORTED_MODULE_2__[\"HOME\"]);\n  }\n};\n\ninit();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/services/api.js":
/*!********************************!*\
  !*** ./src/js/services/api.js ***!
  \********************************/
/*! exports provided: urlBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlBase\", function() { return urlBase; });\nconst apiKey = \"b040ba33\";\nconst urlBase = `http://www.omdbapi.com/?apikey=${apiKey}`;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  search: (value, page, callback) => {\n    fetch(`${urlBase}&type=movie&s=${value}&page=${page}`).then(response => response.json()).then(({\n      Error,\n      Search\n    }) => callback(Error, Search)).catch(({\n      Error\n    }) => callback(Error, []));\n  },\n  details: (value, callback) => {\n    fetch(`${urlBase}&i=${value}`).then(response => response.json()).then(movie => callback(false, movie)).catch(({\n      Error\n    }) => callback(Error, {}));\n  }\n});\n\n//# sourceURL=webpack:///./src/js/services/api.js?");

/***/ }),

/***/ "./src/js/services/index.js":
/*!**********************************!*\
  !*** ./src/js/services/index.js ***!
  \**********************************/
/*! exports provided: api, storage, validations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/js/services/api.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"api\", function() { return _api__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/js/services/storage.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validations */ \"./src/js/services/validations.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validations\", function() { return _validations__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/services/index.js?");

/***/ }),

/***/ "./src/js/services/storage.js":
/*!************************************!*\
  !*** ./src/js/services/storage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  session: {\n    set: user => sessionStorage.setItem(\"user\", JSON.stringify(user)),\n    get: () => JSON.parse(sessionStorage.getItem(\"user\")),\n    remove: () => sessionStorage.clear()\n  },\n  data: {\n    set: (key, data) => localStorage.setItem(key.toString(), JSON.stringify(data)),\n    get: key => JSON.parse(localStorage.getItem(key.toString()))\n  }\n});\n\n//# sourceURL=webpack:///./src/js/services/storage.js?");

/***/ }),

/***/ "./src/js/services/validations.js":
/*!****************************************!*\
  !*** ./src/js/services/validations.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  username: value => {\n    if (value.length === 0) {\n      return [false, 'Nombre de usuario es requerido'];\n    } else if (/^\\s+$/.test(value)) {\n      return [false, 'Nombre de usuario es requerido'];\n    } else if (value.length < 3) {\n      return [false, 'Nombre de usuario debe tener al menos 3 caracteres'];\n    }\n\n    return [true, \"Nombre de usuario\"];\n  },\n  password: value => {\n    if (value.length === 0) {\n      return [false, 'Contraseña es requerida'];\n    } else if (value.length < 6) {\n      return [false, 'Contraseña debe tener al menos 6 caracteres'];\n    }\n\n    return [true, \"Contraseña\"];\n  },\n  search: value => {\n    if (value.length === 0) {\n      return false;\n    } else if (/^\\s+$/.test(value)) {\n      return false;\n    }\n\n    return true;\n  }\n});\n\n//# sourceURL=webpack:///./src/js/services/validations.js?");

/***/ })

/******/ });