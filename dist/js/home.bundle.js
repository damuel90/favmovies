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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/home.js");
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

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.scss */ \"./src/css/styles.scss\");\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/routes */ \"./src/js/constants/routes.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ \"./src/js/services/index.js\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates */ \"./src/js/templates/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nvar movieCacheKey = \"movies_cache\";\nvar search = document.getElementById(\"search\");\nvar submit = document.getElementById(\"submit\");\nvar movies = document.getElementById(\"movies\");\nvar cardlist = movies.lastElementChild;\nvar back = movies.firstElementChild.firstElementChild;\nvar span = movies.firstElementChild.children[1];\nvar center = movies.firstElementChild.children[2];\nvar forward = movies.firstElementChild.lastElementChild;\nvar modal = document.getElementById(\"modal\");\nvar logout = document.getElementById(\"logout\");\nvar user;\nvar page = 1;\n\nvar init = function init() {\n  viewFavorites();\n  document.addEventListener(\"DOMContentLoaded\", app);\n};\n\nvar app = function app(e) {\n  e.preventDefault();\n  search.addEventListener(\"keyup\", onSearch);\n  submit.addEventListener(\"click\", onSearch);\n  movies.addEventListener(\"click\", onMovie);\n  modal.addEventListener(\"click\", onModal);\n  logout.addEventListener(\"click\", onLogout);\n};\n\nvar onSearch = function onSearch(e) {\n  e.preventDefault();\n  if (e.code !== \"Enter\" && e.type !== 'click' || !_services__WEBPACK_IMPORTED_MODULE_2__[\"validations\"].search(search.value)) return;\n  var value = search.value.replace(/ /gi, \"+\");\n  resetHead();\n  span.textContent = \"Buscando...\";\n  _services__WEBPACK_IMPORTED_MODULE_2__[\"api\"].search(value, page, function (error, data) {\n    span.classList.add(\"hide\");\n    center.classList.remove(\"hide\");\n    if (error) return center.firstElementChild.textContent = \"No se econtró resultados\";\n    if (page > 1) back.classList.remove(\"hide\");\n    if (data.length >= 10 || page == 100) forward.classList.remove(\"hide\");\n    _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.set(movieCacheKey, data);\n\n    var myfavorites = _toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(user));\n\n    addCards(false, data, cardlist, myfavorites);\n  });\n};\n\nvar onMovie = function onMovie(e) {\n  e.preventDefault();\n  var elements = e.path.slice(0, e.path.length - 5);\n\n  var _iterator = _createForOfIteratorHelper(elements),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var element = _step.value;\n\n      if (element.classList.contains('removefavorite')) {\n        var _card = element.parentElement.parentElement;\n        removeFavorite(_card.id);\n        return _card.remove();\n      } else if (element.classList.contains('switchfavorite')) {\n        var _card2 = element.parentElement.parentElement;\n\n        if (element.classList.contains('favorite')) {\n          removeFavorite(_card2.id);\n          return element.classList.remove(\"favorite\");\n        } else {\n          addFavorite(_card2.id);\n          return element.classList.add(\"favorite\");\n        }\n      } else if (element.classList.contains('card')) {\n        return viewDetails(element);\n      } else if (element.classList.contains('goback')) {\n        page -= 1;\n        if (page < 0) page = 0;\n        return onSearch(e);\n      } else if (element.classList.contains('gofavorites')) {\n        resetHead();\n        return viewFavorites();\n      } else if (element.classList.contains('goforward')) {\n        page += 1;\n        if (page > 100) page = 100;\n        return onSearch(e);\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\nvar onModal = function onModal(e) {\n  e.preventDefault();\n  var elements = e.path.slice(0, e.path.length - 5);\n\n  var _iterator2 = _createForOfIteratorHelper(elements),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var element = _step2.value;\n\n      if (element.classList.contains('switchfavorite')) {\n        var _detailsModal = modal.firstElementChild;\n\n        if (_detailsModal.classList.contains('favorite')) {\n          removeFavorite(_detailsModal.id);\n        } else {\n          addFavorite(_detailsModal.id);\n        }\n\n        if (modal.classList.contains('athome')) {\n          resetHead();\n          viewFavorites();\n        } else {\n          var cache = _toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(movieCacheKey));\n\n          var myfavorites = _toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(user));\n\n          cardlist.innerHTML = \"\";\n          addCards(false, cache, cardlist, myfavorites);\n        }\n\n        modal.textContent = \"\";\n        return modal.classList.add(\"hide\");\n      } else if (element.classList.contains('cancel')) {\n        modal.textContent = \"\";\n        return modal.classList.add(\"hide\");\n      }\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n};\n\nvar viewDetails = function viewDetails(card) {\n  modal.innerHTML = 'Cargando...';\n  var favorite = card.firstElementChild.lastElementChild.classList.contains('favorite');\n  var home = card.firstElementChild.lastElementChild.classList.contains('removefavorite');\n\n  if (home) {\n    modal.classList.add(\"athome\");\n  } else {\n    modal.classList.remove(\"athome\");\n  }\n\n  modal.classList.remove(\"hide\");\n  _services__WEBPACK_IMPORTED_MODULE_2__[\"api\"].details(card.id, function (error, data) {\n    if (error) return modal.classList.add(\"hide\");\n    modal.innerHTML = Object(_templates__WEBPACK_IMPORTED_MODULE_3__[\"detailsModal\"])(data, favorite);\n  });\n};\n\nvar resetHead = function resetHead() {\n  back.classList.add(\"hide\");\n  center.classList.add(\"hide\");\n  forward.classList.add(\"hide\");\n  span.classList.remove(\"hide\");\n  cardlist.innerHTML = \"\";\n  span.textContent = \"Mis películas favoritas\";\n};\n\nvar viewFavorites = function viewFavorites() {\n  var _storage$session$get = _objectSpread({}, _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].session.get()),\n      _storage$session$get$ = _storage$session$get.username,\n      username = _storage$session$get$ === void 0 ? null : _storage$session$get$,\n      _storage$session$get$2 = _storage$session$get.password,\n      password = _storage$session$get$2 === void 0 ? null : _storage$session$get$2;\n\n  if (!username || !password) {\n    return location.replace(_constants_routes__WEBPACK_IMPORTED_MODULE_1__[\"LANDING\"]);\n  }\n\n  var favorites = getFavorite(username, password);\n  addCards(true, favorites, movies.lastElementChild);\n};\n\nvar addCards = function addCards(myPanel, data, root) {\n  var myfavorites = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n  data.forEach(function (item) {\n    var favorite = myfavorites ? myfavorites.findIndex(function (favorite) {\n      return favorite.imdbID === item.imdbID;\n    }) : 0;\n    root.innerHTML += Object(_templates__WEBPACK_IMPORTED_MODULE_3__[\"card\"])(item, myPanel, favorite !== -1);\n  });\n};\n\nvar removeFavorite = function removeFavorite(id) {\n  var favorites = _toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(user));\n\n  favorites.findIndex;\n  favorites = favorites.filter(function (favorite) {\n    return favorite.imdbID !== id;\n  });\n  _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.set(user, favorites);\n};\n\nvar addFavorite = function addFavorite(id) {\n  var favorites = _toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(user));\n\n  var cache = _toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(movieCacheKey));\n\n  var favorite = cache.find(function (movie) {\n    return movie.imdbID === id;\n  });\n\n  if (favorite) {\n    favorites.push(favorite);\n    _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.set(user, favorites);\n  }\n};\n\nvar getFavorite = function getFavorite(username, password) {\n  user = \"\".concat(username.replace(/ /gi, \"_\"), \"@\").concat(password);\n  var favorites = _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(user);\n\n  if (!favorites) {\n    _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.set(user, []);\n    return [];\n  }\n\n  return favorites;\n};\n\nvar onLogout = function onLogout(e) {\n  _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].session.remove();\n  return location.replace(_constants_routes__WEBPACK_IMPORTED_MODULE_1__[\"LANDING\"]);\n};\n\ninit();\n\n//# sourceURL=webpack:///./src/js/home.js?");

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

/***/ }),

/***/ "./src/js/templates/card.js":
/*!**********************************!*\
  !*** ./src/js/templates/card.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar card = function card(_ref, myPanel, isfavorite) {\n  var Title = _ref.Title,\n      Year = _ref.Year,\n      imdbID = _ref.imdbID,\n      Poster = _ref.Poster;\n  var classFasv = myPanel ? \"removefavorite\" : \"switchfavorite\";\n  classFasv = isfavorite ? \"\".concat(classFasv, \" favorite\") : classFasv;\n  return \"\\n        <div class=\\\"card\\\" id=\\\"\".concat(imdbID, \"\\\">\\n            <div class=\\\"poster\\\">\\n                \").concat(Poster !== 'N/A' ? \"<img src=\\\"\".concat(Poster, \"\\\" alt=\\\"poster\\\"></img>\") : '<div></div>', \"\\n                <a class=\\\"\").concat(classFasv, \"\\\">\\n                    <i class=\\\"material-icons\\\">\").concat(myPanel ? \"clear\" : \"favorite\", \"</i>\\n                </a>\\n            </div>\\n            <div class=\\\"info\\\">\\n                <span>\").concat(Title, \" (\").concat(Year, \")</span>\\n            </div>\\n        </div>     \\n    \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (card);\n\n//# sourceURL=webpack:///./src/js/templates/card.js?");

/***/ }),

/***/ "./src/js/templates/detailsModal.js":
/*!******************************************!*\
  !*** ./src/js/templates/detailsModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar detailsModal = function detailsModal(movie, favorite) {\n  return \"\\n    <div class=\\\"\".concat(favorite ? 'panel favorite' : 'panel', \"\\\" id=\\\"\").concat(movie.imdbID, \"\\\">\\n        <div class=\\\"aside\\\">\\n            <div class=\\\"poster\\\">\\n                <img src=\\\"\").concat(movie.Poster, \"\\\">\\n            </div>\\n            <div>\\n                <span><strong>A\\xF1o:</strong> \").concat(movie.Year, \"</span>\\n                <span><strong>Clasificaci\\xF3n:</strong> \").concat(movie.Rated, \"</span>\\n                <span><strong>Duraci\\xF3n:</strong> \").concat(movie.Runtime, \"</span>\\n                <span><strong>Pais:</strong> \").concat(movie.Country, \"</span>\\n                <span><strong>Productora:</strong> \").concat(movie.Production, \"</span>\\n            </div>\\n        </div>\\n        <div class=\\\"main\\\">\\n            <div>\\n                <span><strong>Titulo:</strong> \").concat(movie.Title, \"</span>\\n                <span><strong>Genero:</strong> \").concat(movie.Genre, \"</span>\\n                <span><strong>Escritor(a):</strong> \").concat(movie.Writer, \"</span>\\n                <span><strong>Director(a):</strong> \").concat(movie.Director, \"</span>\\n                <span><strong>Reparto:</strong> \").concat(movie.Actors, \"</span>\\n                <span><strong>Premios:</strong> \").concat(movie.Awards, \"</span>\\n                <span><strong>Resumen:</strong> \").concat(movie.Plot, \"</span>\\n            </div>\\n            <div class=\\\"btns\\\">\\n                <button class=\\\"cancel\\\">Cerrar</button>\\n                <button class=\\\"switchfavorite\\\">\").concat(favorite ? 'Remover de favorito' : 'Añadir a favorito', \"</button>\\n            </div>\\n        </div>\\n    </div>      \\n\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (detailsModal);\n\n//# sourceURL=webpack:///./src/js/templates/detailsModal.js?");

/***/ }),

/***/ "./src/js/templates/index.js":
/*!***********************************!*\
  !*** ./src/js/templates/index.js ***!
  \***********************************/
/*! exports provided: card, detailsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/js/templates/card.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"card\", function() { return _card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _detailsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailsModal */ \"./src/js/templates/detailsModal.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"detailsModal\", function() { return _detailsModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/templates/index.js?");

/***/ })

/******/ });