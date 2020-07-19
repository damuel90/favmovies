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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LANDING\", function() { return LANDING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOME\", function() { return HOME; });\nconst LANDING = \"/\";\nconst HOME = \"/home.html\";\n\n//# sourceURL=webpack:///./src/js/constants/routes.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.scss */ \"./src/css/styles.scss\");\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/routes */ \"./src/js/constants/routes.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ \"./src/js/services/index.js\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates */ \"./src/js/templates/index.js\");\n\n\n\n\nconst movieCacheKey = \"movies_cache\";\nconst search = document.getElementById(\"search\");\nconst submit = document.getElementById(\"submit\");\nconst movies = document.getElementById(\"movies\");\nconst cardlist = movies.lastElementChild;\nconst back = movies.firstElementChild.firstElementChild;\nconst span = movies.firstElementChild.children[1];\nconst center = movies.firstElementChild.children[2];\nconst forward = movies.firstElementChild.lastElementChild;\nconst modal = document.getElementById(\"modal\");\nconst logout = document.getElementById(\"logout\");\nlet user;\nlet page = 1;\n\nconst init = () => {\n  viewFavorites();\n  document.addEventListener(\"DOMContentLoaded\", app);\n};\n\nconst app = e => {\n  e.preventDefault();\n  search.addEventListener(\"keyup\", onSearch);\n  submit.addEventListener(\"click\", onSearch);\n  movies.addEventListener(\"click\", onMovie);\n  modal.addEventListener(\"click\", onModal);\n  logout.addEventListener(\"click\", onLogout);\n};\n\nconst onSearch = function (e) {\n  e.preventDefault();\n  if (e.code !== \"Enter\" && e.type !== 'click' || !_services__WEBPACK_IMPORTED_MODULE_2__[\"validations\"].search(search.value)) return;\n  const value = search.value.replace(/ /gi, \"+\");\n  resetHead();\n  span.textContent = \"Buscando...\";\n  _services__WEBPACK_IMPORTED_MODULE_2__[\"api\"].search(value, page, (error, data) => {\n    span.classList.add(\"hide\");\n    center.classList.remove(\"hide\");\n    if (error) return center.firstElementChild.textContent = \"No se econtró resultados\";\n    if (page > 1) back.classList.remove(\"hide\");\n    if (data.length >= 10 || page == 100) forward.classList.remove(\"hide\");\n    _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.set(movieCacheKey, data);\n    const myfavorites = [..._services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(user)];\n    addCards(false, data, cardlist, myfavorites);\n  });\n};\n\nconst onMovie = function (e) {\n  e.preventDefault();\n  let elements = e.path.slice(0, e.path.length - 5);\n\n  for (const element of elements) {\n    if (element.classList.contains('removefavorite')) {\n      const card = element.parentElement.parentElement;\n      removeFavorite(card.id);\n      return card.remove();\n    } else if (element.classList.contains('switchfavorite')) {\n      const card = element.parentElement.parentElement;\n\n      if (element.classList.contains('favorite')) {\n        removeFavorite(card.id);\n        return element.classList.remove(\"favorite\");\n      } else {\n        addFavorite(card.id);\n        return element.classList.add(\"favorite\");\n      }\n    } else if (element.classList.contains('card')) {\n      return viewDetails(element);\n    } else if (element.classList.contains('goback')) {\n      page -= 1;\n      if (page < 0) page = 0;\n      return onSearch(e);\n    } else if (element.classList.contains('gofavorites')) {\n      resetHead();\n      return viewFavorites();\n    } else if (element.classList.contains('goforward')) {\n      page += 1;\n      if (page > 100) page = 100;\n      return onSearch(e);\n    }\n  }\n};\n\nconst onModal = function (e) {\n  e.preventDefault();\n  let elements = e.path.slice(0, e.path.length - 5);\n\n  for (const element of elements) {\n    if (element.classList.contains('switchfavorite')) {\n      const detailsModal = modal.firstElementChild;\n\n      if (detailsModal.classList.contains('favorite')) {\n        removeFavorite(detailsModal.id);\n      } else {\n        addFavorite(detailsModal.id);\n      }\n\n      if (modal.classList.contains('athome')) {\n        resetHead();\n        viewFavorites();\n      } else {\n        const cache = [..._services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(movieCacheKey)];\n        const myfavorites = [..._services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(user)];\n        cardlist.innerHTML = \"\";\n        addCards(false, cache, cardlist, myfavorites);\n      }\n\n      modal.textContent = \"\";\n      return modal.classList.add(\"hide\");\n    } else if (element.classList.contains('cancel')) {\n      modal.textContent = \"\";\n      return modal.classList.add(\"hide\");\n    }\n  }\n};\n\nconst viewDetails = function (card) {\n  modal.innerHTML = 'Cargando...';\n  const favorite = card.firstElementChild.lastElementChild.classList.contains('favorite');\n  const home = card.firstElementChild.lastElementChild.classList.contains('removefavorite');\n\n  if (home) {\n    modal.classList.add(\"athome\");\n  } else {\n    modal.classList.remove(\"athome\");\n  }\n\n  modal.classList.remove(\"hide\");\n  _services__WEBPACK_IMPORTED_MODULE_2__[\"api\"].details(card.id, (error, data) => {\n    if (error) return modal.classList.add(\"hide\");\n    modal.innerHTML = Object(_templates__WEBPACK_IMPORTED_MODULE_3__[\"detailsModal\"])(data, favorite);\n  });\n};\n\nconst resetHead = () => {\n  back.classList.add(\"hide\");\n  center.classList.add(\"hide\");\n  forward.classList.add(\"hide\");\n  span.classList.remove(\"hide\");\n  cardlist.innerHTML = \"\";\n  span.textContent = \"Mis películas favoritas\";\n};\n\nconst viewFavorites = () => {\n  const {\n    username = null,\n    password = null\n  } = { ..._services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].session.get()\n  };\n\n  if (!username || !password) {\n    return location.replace(_constants_routes__WEBPACK_IMPORTED_MODULE_1__[\"LANDING\"]);\n  }\n\n  const favorites = getFavorite(username, password);\n  addCards(true, favorites, movies.lastElementChild);\n};\n\nconst addCards = (myPanel, data, root, myfavorites = null) => {\n  data.forEach(item => {\n    const favorite = myfavorites ? myfavorites.findIndex(favorite => favorite.imdbID === item.imdbID) : 0;\n    root.innerHTML += Object(_templates__WEBPACK_IMPORTED_MODULE_3__[\"card\"])(item, myPanel, favorite !== -1);\n  });\n};\n\nconst removeFavorite = id => {\n  let favorites = [..._services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(user)];\n  favorites.findIndex;\n  favorites = favorites.filter(favorite => favorite.imdbID !== id);\n  _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.set(user, favorites);\n};\n\nconst addFavorite = id => {\n  let favorites = [..._services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(user)];\n  let cache = [..._services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(movieCacheKey)];\n  const favorite = cache.find(movie => movie.imdbID === id);\n\n  if (favorite) {\n    favorites.push(favorite);\n    _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.set(user, favorites);\n  }\n};\n\nconst getFavorite = (username, password) => {\n  user = `${username.replace(/ /gi, \"_\")}@${password}`;\n  const favorites = _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.get(user);\n\n  if (!favorites) {\n    _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].data.set(user, []);\n    return [];\n  }\n\n  return favorites;\n};\n\nconst onLogout = function (e) {\n  _services__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].session.remove();\n  return location.replace(_constants_routes__WEBPACK_IMPORTED_MODULE_1__[\"LANDING\"]);\n};\n\ninit();\n\n//# sourceURL=webpack:///./src/js/home.js?");

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

/***/ }),

/***/ "./src/js/templates/card.js":
/*!**********************************!*\
  !*** ./src/js/templates/card.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst card = ({\n  Title,\n  Year,\n  imdbID,\n  Poster\n}, myPanel, isfavorite) => {\n  let classFasv = myPanel ? \"removefavorite\" : \"switchfavorite\";\n  classFasv = isfavorite ? `${classFasv} favorite` : classFasv;\n  return `\n        <div class=\"card\" id=\"${imdbID}\">\n            <div class=\"poster\">\n                ${Poster !== 'N/A' ? `<img src=\"${Poster}\" alt=\"poster\"></img>` : '<div></div>'}\n                <a class=\"${classFasv}\">\n                    <i class=\"material-icons\">${myPanel ? \"clear\" : \"favorite\"}</i>\n                </a>\n            </div>\n            <div class=\"info\">\n                <span>${Title} (${Year})</span>\n            </div>\n        </div>     \n    `;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (card);\n\n//# sourceURL=webpack:///./src/js/templates/card.js?");

/***/ }),

/***/ "./src/js/templates/detailsModal.js":
/*!******************************************!*\
  !*** ./src/js/templates/detailsModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst detailsModal = (movie, favorite) => `\n    <div class=\"${favorite ? 'panel favorite' : 'panel'}\" id=\"${movie.imdbID}\">\n        <div class=\"aside\">\n            <div class=\"poster\">\n                <img src=\"${movie.Poster}\">\n            </div>\n            <div>\n                <span><strong>Año:</strong> ${movie.Year}</span>\n                <span><strong>Clasificación:</strong> ${movie.Rated}</span>\n                <span><strong>Duración:</strong> ${movie.Runtime}</span>\n                <span><strong>Pais:</strong> ${movie.Country}</span>\n                <span><strong>Productora:</strong> ${movie.Production}</span>\n            </div>\n        </div>\n        <div class=\"main\">\n            <div>\n                <span><strong>Titulo:</strong> ${movie.Title}</span>\n                <span><strong>Genero:</strong> ${movie.Genre}</span>\n                <span><strong>Escritor(a):</strong> ${movie.Writer}</span>\n                <span><strong>Director(a):</strong> ${movie.Director}</span>\n                <span><strong>Reparto:</strong> ${movie.Actors}</span>\n                <span><strong>Premios:</strong> ${movie.Awards}</span>\n                <span><strong>Resumen:</strong> ${movie.Plot}</span>\n            </div>\n            <div class=\"btns\">\n                <button class=\"cancel\">Cerrar</button>\n                <button class=\"switchfavorite\">${favorite ? 'Remover de favorito' : 'Añadir a favorito'}</button>\n            </div>\n        </div>\n    </div>      \n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (detailsModal);\n\n//# sourceURL=webpack:///./src/js/templates/detailsModal.js?");

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