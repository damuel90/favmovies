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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LANDING\", function() { return LANDING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOME\", function() { return HOME; });\nvar LANDING = \"/\";\nvar HOME = \"/home.html\";\n\n//# sourceURL=webpack:///./src/js/constants/routes.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.scss */ \"./src/css/styles.scss\");\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ \"./src/js/services/index.js\");\n/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/routes */ \"./src/js/constants/routes.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar landing = document.getElementById(\"landing\");\nvar username = document.getElementById(\"username\");\nvar password = document.getElementById(\"password\");\nvar submit = document.getElementById(\"submit\");\n\nvar init = function init() {\n  if (_services__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].session.get()) {\n    location.replace(_constants_routes__WEBPACK_IMPORTED_MODULE_2__[\"HOME\"]);\n  }\n\n  document.addEventListener(\"DOMContentLoaded\", app);\n};\n\nvar app = function app() {\n  landing.classList.remove(\"hide\");\n  username.addEventListener(\"blur\", validate);\n  password.addEventListener(\"blur\", validate);\n  submit.addEventListener(\"click\", login);\n};\n\nvar validate = function validate(_ref) {\n  var target = _ref.target;\n  var father = target.parentElement;\n  var label = father.firstElementChild;\n\n  var _validations$target$n = _services__WEBPACK_IMPORTED_MODULE_1__[\"validations\"][target.name](target.value),\n      _validations$target$n2 = _slicedToArray(_validations$target$n, 2),\n      valid = _validations$target$n2[0],\n      message = _validations$target$n2[1];\n\n  if (!valid) {\n    father.classList.add(\"error\");\n    label.innerText = message;\n    target.addEventListener(\"input\", validate);\n  } else {\n    father.classList.remove(\"error\");\n    label.innerText = message;\n    target.removeEventListener(\"input\", validate);\n  }\n};\n\nvar login = function login(e) {\n  e.preventDefault();\n  validate({\n    target: username\n  });\n  validate({\n    target: password\n  });\n  var error = document.querySelectorAll(\".error\").length > 0;\n\n  if (!error) {\n    _services__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].session.set({\n      username: username.value.trim(),\n      password: password.value\n    });\n    location.replace(_constants_routes__WEBPACK_IMPORTED_MODULE_2__[\"HOME\"]);\n  }\n};\n\ninit();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/services/api.js":
/*!********************************!*\
  !*** ./src/js/services/api.js ***!
  \********************************/
/*! exports provided: urlBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlBase\", function() { return urlBase; });\nvar apiKey = \"b040ba33\";\nvar urlBase = \"http://www.omdbapi.com/?apikey=\".concat(apiKey);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  search: function search(value, page, callback) {\n    fetch(\"\".concat(urlBase, \"&type=movie&s=\").concat(value, \"&page=\").concat(page)).then(function (response) {\n      return response.json();\n    }).then(function (_ref) {\n      var Error = _ref.Error,\n          Search = _ref.Search;\n      return callback(Error, Search);\n    })[\"catch\"](function (_ref2) {\n      var Error = _ref2.Error;\n      return callback(Error, []);\n    });\n  },\n  details: function details(value, callback) {\n    fetch(\"\".concat(urlBase, \"&i=\").concat(value)).then(function (response) {\n      return response.json();\n    }).then(function (movie) {\n      return callback(false, movie);\n    })[\"catch\"](function (_ref3) {\n      var Error = _ref3.Error;\n      return callback(Error, {});\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/services/api.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  session: {\n    set: function set(user) {\n      return sessionStorage.setItem(\"user\", JSON.stringify(user));\n    },\n    get: function get() {\n      return JSON.parse(sessionStorage.getItem(\"user\"));\n    },\n    remove: function remove() {\n      return sessionStorage.clear();\n    }\n  },\n  data: {\n    set: function set(key, data) {\n      return localStorage.setItem(key.toString(), JSON.stringify(data));\n    },\n    get: function get(key) {\n      return JSON.parse(localStorage.getItem(key.toString()));\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/js/services/storage.js?");

/***/ }),

/***/ "./src/js/services/validations.js":
/*!****************************************!*\
  !*** ./src/js/services/validations.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  username: function username(value) {\n    if (value.length === 0) {\n      return [false, 'Nombre de usuario es requerido'];\n    } else if (/^\\s+$/.test(value)) {\n      return [false, 'Nombre de usuario es requerido'];\n    } else if (value.length < 3) {\n      return [false, 'Nombre de usuario debe tener al menos 3 caracteres'];\n    }\n\n    return [true, \"Nombre de usuario\"];\n  },\n  password: function password(value) {\n    if (value.length === 0) {\n      return [false, 'Contraseña es requerida'];\n    } else if (value.length < 6) {\n      return [false, 'Contraseña debe tener al menos 6 caracteres'];\n    }\n\n    return [true, \"Contraseña\"];\n  },\n  search: function search(value) {\n    if (value.length === 0) {\n      return false;\n    } else if (/^\\s+$/.test(value)) {\n      return false;\n    }\n\n    return true;\n  }\n});\n\n//# sourceURL=webpack:///./src/js/services/validations.js?");

/***/ })

/******/ });