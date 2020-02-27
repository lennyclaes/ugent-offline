// [AIV_SHORT]  Build version: 0.1.1 - Thursday, February 27th, 2020, 4:28:42 PM  
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link {\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  color: #1E64C8;\n  text-decoration: none;\n  margin: 5px 0; }\n\n.link {\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  color: #1E64C8;\n  text-decoration: none;\n  margin: 5px 0; }\n\n.header {\n  background: #1E64C8;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px; }\n  .header__title {\n    color: #fff;\n    font-family: 'Roboto', Arial, Helvetica, sans-serif; }\n  .header__wrap {\n    display: flex;\n    justify-content: flex-end;\n    width: 100%; }\n  .header__add {\n    background: none;\n    border: none;\n    color: #fff;\n    cursor: pointer; }\n\n.link {\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  color: #1E64C8;\n  text-decoration: none;\n  margin: 5px 0; }\n\n.day__date {\n  padding: 5px 10px;\n  font-family: 'Roboto', Arial, Helvetica, sans-serif; }\n\n.day:nth-child(even) {\n  background: #efefef; }\n\n.event {\n  padding: 5px 10px;\n  color: #000;\n  font-family: 'Roboto', Arial, Helvetica, sans-serif; }\n  .event--today {\n    background: #649ae8 !important;\n    border-bottom: 1px solid #333; }\n  .event--passed {\n    color: #9a9a9a; }\n\n.link {\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  color: #1E64C8;\n  text-decoration: none;\n  margin: 5px 0; }\n\n.add {\n  padding: 5px 10px; }\n  .add__title {\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\n    margin: 10px 0; }\n  .add-label {\n    font-family: 'Roboto', Arial, Helvetica, sans-serif; }\n  .add-btn {\n    border: none;\n    background: #1E64C8;\n    padding: 10px;\n    margin: 10px 0;\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\n    color: #fff; }\n  .add-input {\n    font-family: 'Roboto', Arial, Helvetica, sans-serif; }\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/router */ "./src/router/router.js");
/**
 * Template by Lenny Claes https://github.com/lennyclaes/start-files
 */




/***/ }),

/***/ "./src/router/router.js":
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/View */ "./src/views/View.ts");
/* harmony import */ var _views_add_add_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/add/add.html */ "./src/views/add/add.html");
/* harmony import */ var _views_add_add_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_add_add_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_404_404_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/404/404.html */ "./src/views/404/404.html");
/* harmony import */ var _views_404_404_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_404_404_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_calendar_calendar_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/calendar/calendar.html */ "./src/views/calendar/calendar.html");
/* harmony import */ var _views_calendar_calendar_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_calendar_calendar_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_add_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/add/add */ "./src/views/add/add.ts");
/* harmony import */ var _views_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/calendar/calendar */ "./src/views/calendar/calendar.ts");
/* harmony import */ var _views_home_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/home/home */ "./src/views/home/home.ts");
// import { Add } from '../views/add/add';









const addView = new _views_View__WEBPACK_IMPORTED_MODULE_0__["View"](_views_add_add_html__WEBPACK_IMPORTED_MODULE_1___default.a);
addView.addFunction(_views_add_add__WEBPACK_IMPORTED_MODULE_4__["loadFile"]);
addView.addFunction(_views_add_add__WEBPACK_IMPORTED_MODULE_4__["onLoad"]);

const calendarView = new _views_View__WEBPACK_IMPORTED_MODULE_0__["View"](_views_calendar_calendar_html__WEBPACK_IMPORTED_MODULE_3___default.a);
calendarView.addFunction(_views_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__["loadEvents"]);

const homeView = new _views_View__WEBPACK_IMPORTED_MODULE_0__["View"]('');
homeView.addFunction(_views_home_home__WEBPACK_IMPORTED_MODULE_6__["homeRedirect"]);


const routes = {
    "/": homeView,
    "add": addView,
    "calendar": calendarView,
    "404": new _views_View__WEBPACK_IMPORTED_MODULE_0__["View"](_views_404_404_html__WEBPACK_IMPORTED_MODULE_2___default.a)
}

function router () {
    const hash = window.location.hash.split('#')[1] || '/';
    try {
        document.querySelector('#js-output').innerHTML = routes[hash].html;
    } catch(err) {
        document.querySelector('#js-output').innerHTML = routes["404"].html;
    }

    try {
        routes[hash].afterRender();
    } catch(err) {
        routes["404"].afterRender();
    }
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

/***/ }),

/***/ "./src/store/Store.ts":
/*!****************************!*\
  !*** ./src/store/Store.ts ***!
  \****************************/
/*! exports provided: STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE", function() { return STORE; });
var STORE = /** @class */ (function () {
    function STORE() {
    }
    STORE.set = function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
        // if(STORE.get(key) == null) {
        // } else {
        //     STORE.set(key + '-', value);
        // }
    };
    STORE.get = function (key) {
        return window.localStorage.getItem(key);
    };
    STORE.getAll = function () {
        var all = Object.keys(window.localStorage);
        var allEvents = [];
        for (var i = 0; i < all.length; i += 1) {
            allEvents.push({
                id: all[i],
                vEvent: JSON.parse(localStorage.getItem(all[i]))
            });
        }
        return allEvents;
    };
    return STORE;
}());



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/types/events/Event.ts":
/*!***********************************!*\
  !*** ./src/types/events/Event.ts ***!
  \***********************************/
/*! exports provided: vEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vEvent", function() { return vEvent; });
var vEvent = /** @class */ (function () {
    function vEvent(event) {
        if (event.includes('END:VCALENDAR')) {
            return;
        }
        var lines = event.split('\n');
        try {
            // const aDate = new Date(`${aYear}-${aMonth}-${aDay} ${aStartHour}:${aStartMinute}:00`).getTime();
            var start = lines[3].split(';')[2].split(':')[1];
            var end = lines[4].split(';')[2].split(':')[1];
            var startHour = start.split('T')[1].slice(0, 2);
            var startMinute = start.split('T')[1].slice(2, 4);
            var endHour = end.split('T')[1].slice(0, 2);
            var endMinute = end.split('T')[1].slice(2, 4);
            var year = start.split('T')[0].slice(0, 4);
            var month = start.split('T')[0].slice(4, 6);
            var day = start.split('T')[0].slice(6, 8);
            this.startTime = new Date(year + "-" + month + "-" + day + " " + startHour + ":" + startMinute + ":00");
            this.endTime = new Date(year + "-" + month + "-" + day + " " + endHour + ":" + endMinute + ":00");
            this.summary = lines[5].split(':')[1];
            this.id = lines[6].split(':')[1];
            var desc = lines[7].split(':')[1];
            var i = 1;
            while (!lines[7 + i].includes('LOCATION')) {
                var l = lines[7 + i] + '<br>';
                desc += l;
                i++;
            }
            this.description = desc;
            this.location = lines[7 + i].split(':')[1];
        }
        catch (err) {
            console.error('Error in VEVENT: \n' + event);
        }
    }
    return vEvent;
}());



/***/ }),

/***/ "./src/views/404/404.html":
/*!********************************!*\
  !*** ./src/views/404/404.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Error: 404</h1>\r\n<h2>De gevraagde URL werd niet gevonden!</h2>";

/***/ }),

/***/ "./src/views/View.ts":
/*!***************************!*\
  !*** ./src/views/View.ts ***!
  \***************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
var View = /** @class */ (function () {
    function View(html) {
        this.html = html;
        this.onRun = [];
    }
    View.prototype.addFunction = function (func) {
        this.onRun.push(func);
    };
    View.prototype.afterRender = function () {
        this.onRun.forEach(function (func) {
            func();
        });
    };
    return View;
}());



/***/ }),

/***/ "./src/views/add/add.html":
/*!********************************!*\
  !*** ./src/views/add/add.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add\">\r\n    <h2 class=\"add__title\">Download het iCalendar bestand van Centauro</h2>\r\n    <p class=\"add__title\">\r\n        Via de knop exporteren, dan kies je voor kopiëren. <br>\r\n        Als je op de link klikt, wordt het bestand gedownloaded.\r\n    </p>\r\n    <a href=\"https://centauro.ugent.be/kalender/mijnKalender\" class=\"link\">Centauro kalender</a>\r\n\r\n    <form id=\"add-form\">\r\n        <label for=\"js-file\" class=\"add-label\">Upload een bestand</label> <br>\r\n        <input type=\"file\" class=\"add-input\" name=\"ical\" id=\"js-file\"> <br>\r\n        <button type=\"submit\" class=\"add-btn\">UPLOADEN</button>\r\n    </form>\r\n</div>";

/***/ }),

/***/ "./src/views/add/add.ts":
/*!******************************!*\
  !*** ./src/views/add/add.ts ***!
  \******************************/
/*! exports provided: loadFile, onLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFile", function() { return loadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return onLoad; });
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Store */ "./src/store/Store.ts");
/* harmony import */ var _types_events_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/events/Event */ "./src/types/events/Event.ts");


function save(data) {
    var days = {};
    try {
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            var vDay = d.startTime.getFullYear() + "-" + (d.startTime.getMonth() + 1) + "-" + d.startTime.getDate();
            // console.log(vDay);
            if (Object.keys(days).includes(vDay)) {
                days[vDay].push(d);
            }
            else {
                days[vDay] = [];
                days[vDay].push(d);
            }
        }
    }
    catch (err) { }
    finally {
        Object.keys(days).forEach(function (day) {
            _store_Store__WEBPACK_IMPORTED_MODULE_0__["STORE"].set(day, days[day].sort(function (a, b) {
                return a.startTime - b.startTime;
            }));
        });
    }
}
function loadFile() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var form = document.querySelector('#add-form');
        var input_1 = document.querySelector('#js-file');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var file = input_1.files;
            var reader = new FileReader();
            reader.onload = function (f) {
                var data = reader.result;
                var events = data.split('END:VTIMEZONE')[1].split('END:VEVENT');
                var vEvents = [];
                events.forEach(function (e) {
                    vEvents.push(new _types_events_Event__WEBPACK_IMPORTED_MODULE_1__["vEvent"](e));
                });
                save(vEvents);
                window.location.href = "#calendar";
            };
            reader.readAsText(file[0]);
        });
    }
    else {
        alert('Jouw browser ondersteund niet de nodige features voor deze applicatie');
    }
}
function onLoad() {
    if (_store_Store__WEBPACK_IMPORTED_MODULE_0__["STORE"].getAll().length != 0) {
        return window.location.hash = 'calendar';
    }
}


/***/ }),

/***/ "./src/views/calendar/calendar.html":
/*!******************************************!*\
  !*** ./src/views/calendar/calendar.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"js-calendar\"></div>";

/***/ }),

/***/ "./src/views/calendar/calendar.ts":
/*!****************************************!*\
  !*** ./src/views/calendar/calendar.ts ***!
  \****************************************/
/*! exports provided: loadEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEvents", function() { return loadEvents; });
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Store */ "./src/store/Store.ts");

var now = new Date();
function loadEvents() {
    var events = _store_Store__WEBPACK_IMPORTED_MODULE_0__["STORE"].getAll();
    if (events.length == 0) {
        return window.location.hash = 'add';
    }
    events.sort(function (a, b) {
        return new Date(a.id) - new Date(b.id);
    });
    displayEvents(events);
}
function isToday(date) {
    var time = "";
    if (date.getFullYear() == now.getFullYear() && date.getMonth() == now.getMonth() && date.getDate() == now.getDate()) {
        time = 'today';
    }
    else if (date.getFullYear() < now.getFullYear()) {
        time = "passed";
    }
    else if (date.getFullYear() == now.getFullYear()) {
        if (date.getMonth() < now.getMonth()) {
            time = "passed";
        }
        else if (date.getMonth() == now.getMonth()) {
            if (date.getDate() < now.getDate()) {
                time = 'passed';
            }
        }
    }
    else if (date.getFullYear() >= now.getFullYear() && date.getMonth() >= now.getMonth() && date.getDate() > now.getDate()) {
        time = "future";
    }
    return time;
}
function displayEvents(events) {
    var output = document.querySelector('.js-calendar');
    var _loop_1 = function (i) {
        var e = events[i].vEvent;
        try {
            var eventsHTML_1 = '';
            e.forEach(function (day) {
                var start = new Date(day.startTime);
                var end = new Date(day.endTime);
                var startHour = start.getHours();
                var startMinute = start.getMinutes();
                var endHour = end.getHours();
                var endMinute = end.getMinutes();
                var year = start.getFullYear();
                var month = start.getMonth() + 1;
                var date = start.getDate();
                var html = "\n                <div class=\"event event--" + isToday(start) + "\">\n                    <h3>" + day.summary + "</h3>\n                    <h4>" + date + "/" + month + "/" + year + " " + checkDate(startHour) + ":" + checkDate(startMinute) + " - " + checkDate(endHour) + ":" + checkDate(endMinute) + "</h4>\n                    <p>" + day.description.replace(/(\\n)/gim, '<br>').replace(/(\\)/gim, '') + "</p>\n                    <p>" + day.location.replace(/(\\)/gim, '') + "</p>\n                </div>";
                eventsHTML_1 += html;
            });
            var date = new Date(events[i].id);
            output.innerHTML += "\n                <div class=\"day\">\n                <h2 class=\"day__date\">" + checkDate(date.getDate()) + "/" + checkDate(date.getMonth() + 1) + "/" + date.getFullYear() + "</h2>\n                " + eventsHTML_1 + "\n                </div>\n            ";
        }
        catch (err) {
            console.error(err);
        }
    };
    for (var i = 0; i < events.length; i++) {
        _loop_1(i);
    }
    var today = document.querySelector('.event--today').scrollIntoView(true);
}
function checkDate(date) {
    var r = '' + date;
    if (date < 10) {
        r = '0' + date;
    }
    return r;
}


/***/ }),

/***/ "./src/views/home/home.ts":
/*!********************************!*\
  !*** ./src/views/home/home.ts ***!
  \********************************/
/*! exports provided: homeRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRedirect", function() { return homeRedirect; });
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Store */ "./src/store/Store.ts");

function homeRedirect() {
    if (_store_Store__WEBPACK_IMPORTED_MODULE_0__["STORE"].getAll().length == 0) {
        window.location.hash = "add";
    }
    else {
        window.location.hash = "calendar";
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzRjMzciLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2V2ZW50cy9FdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvNDA0LzQwNC5odG1sIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9WaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZGQvYWRkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkZC9hZGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NhbGVuZGFyL2NhbGVuZGFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NhbGVuZGFyL2NhbGVuZGFyLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVB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Q0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUksSUFBSSxTQUFJLEtBQUssU0FBSSxHQUFHLFNB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S0FDbEI7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvRkQ7QUFBQTtBQUFBO0FBQTBDO0FBRW5DLFNBQVMsWUFBWTtJQUN4QixJQUFHLGtEQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUMzQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7S0FDaEM7U0FBTTtRQUNILE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztLQUNyQztBQUNMLENBQUMiLCJmaWxlIjoiYXBwLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5saW5rIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMUU2NEM4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luOiA1cHggMDsgfVxcblxcbi5saW5rIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMUU2NEM4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luOiA1cHggMDsgfVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogIzFFNjRDODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDsgfVxcbiAgLmhlYWRlcl9fdGl0bGUge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyB9XFxuICAuaGVhZGVyX193cmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5oZWFkZXJfX2FkZCB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5saW5rIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMUU2NEM4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luOiA1cHggMDsgfVxcblxcbi5kYXlfX2RhdGUge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IH1cXG5cXG4uZGF5Om50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmOyB9XFxuXFxuLmV2ZW50IHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IH1cXG4gIC5ldmVudC0tdG9kYXkge1xcbiAgICBiYWNrZ3JvdW5kOiAjNjQ5YWU4ICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzOyB9XFxuICAuZXZlbnQtLXBhc3NlZCB7XFxuICAgIGNvbG9yOiAjOWE5YTlhOyB9XFxuXFxuLmxpbmsge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMxRTY0Qzg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDVweCAwOyB9XFxuXFxuLmFkZCB7XFxuICBwYWRkaW5nOiA1cHggMTBweDsgfVxcbiAgLmFkZF9fdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMTBweCAwOyB9XFxuICAuYWRkLWxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyB9XFxuICAuYWRkLWJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogIzFFNjRDODtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gIC5hZGQtaW5wdXQge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IH1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qKlxyXG4gKiBUZW1wbGF0ZSBieSBMZW5ueSBDbGFlcyBodHRwczovL2dpdGh1Yi5jb20vbGVubnljbGFlcy9zdGFydC1maWxlc1xyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcclxuaW1wb3J0ICcuL3JvdXRlci9yb3V0ZXInOyIsIi8vIGltcG9ydCB7IEFkZCB9IGZyb20gJy4uL3ZpZXdzL2FkZC9hZGQnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi4vdmlld3MvVmlldyc7XHJcbmltcG9ydCBhZGRIVE1MIGZyb20gJy4uL3ZpZXdzL2FkZC9hZGQuaHRtbCc7XHJcbmltcG9ydCBlcnJIVE1MIGZyb20gJy4uL3ZpZXdzLzQwNC80MDQuaHRtbCc7XHJcbmltcG9ydCBjYWxlbmRhckhUTUwgZnJvbSAnLi4vdmlld3MvY2FsZW5kYXIvY2FsZW5kYXIuaHRtbCc7XHJcblxyXG5pbXBvcnQgeyBsb2FkRmlsZSwgb25Mb2FkIH0gZnJvbSAnLi4vdmlld3MvYWRkL2FkZCc7XHJcbmltcG9ydCB7IGxvYWRFdmVudHMgfSBmcm9tICcuLi92aWV3cy9jYWxlbmRhci9jYWxlbmRhcic7XHJcbmltcG9ydCB7IGhvbWVSZWRpcmVjdCB9IGZyb20gJy4uL3ZpZXdzL2hvbWUvaG9tZSc7XHJcblxyXG5jb25zdCBhZGRWaWV3ID0gbmV3IFZpZXcoYWRkSFRNTCk7XHJcbmFkZFZpZXcuYWRkRnVuY3Rpb24obG9hZEZpbGUpO1xyXG5hZGRWaWV3LmFkZEZ1bmN0aW9uKG9uTG9hZCk7XHJcblxyXG5jb25zdCBjYWxlbmRhclZpZXcgPSBuZXcgVmlldyhjYWxlbmRhckhUTUwpO1xyXG5jYWxlbmRhclZpZXcuYWRkRnVuY3Rpb24obG9hZEV2ZW50cyk7XHJcblxyXG5jb25zdCBob21lVmlldyA9IG5ldyBWaWV3KCcnKTtcclxuaG9tZVZpZXcuYWRkRnVuY3Rpb24oaG9tZVJlZGlyZWN0KTtcclxuXHJcblxyXG5jb25zdCByb3V0ZXMgPSB7XHJcbiAgICBcIi9cIjogaG9tZVZpZXcsXHJcbiAgICBcImFkZFwiOiBhZGRWaWV3LFxyXG4gICAgXCJjYWxlbmRhclwiOiBjYWxlbmRhclZpZXcsXHJcbiAgICBcIjQwNFwiOiBuZXcgVmlldyhlcnJIVE1MKVxyXG59XHJcblxyXG5mdW5jdGlvbiByb3V0ZXIgKCkge1xyXG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcjJylbMV0gfHwgJy8nO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtb3V0cHV0JykuaW5uZXJIVE1MID0gcm91dGVzW2hhc2hdLmh0bWw7XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1vdXRwdXQnKS5pbm5lckhUTUwgPSByb3V0ZXNbXCI0MDRcIl0uaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJvdXRlc1toYXNoXS5hZnRlclJlbmRlcigpO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICByb3V0ZXNbXCI0MDRcIl0uYWZ0ZXJSZW5kZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByb3V0ZXIpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHJvdXRlcik7IiwiaW1wb3J0IHsgdkV2ZW50IH0gZnJvbSBcIi4uL3R5cGVzL2V2ZW50cy9FdmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNUT1JFIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgc3RhdGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHZFdmVudCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICAgICAgLy8gaWYoU1RPUkUuZ2V0KGtleSkgPT0gbnVsbCkge1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIFNUT1JFLnNldChrZXkgKyAnLScsIHZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IE9iamVjdC5rZXlzKHdpbmRvdy5sb2NhbFN0b3JhZ2UpO1xyXG4gICAgICAgIGxldCBhbGxFdmVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBhbGxFdmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogYWxsW2ldLFxyXG4gICAgICAgICAgICAgICAgdkV2ZW50OiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFsbFtpXSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxFdmVudHM7XHJcbiAgICB9XHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGNsYXNzIHZFdmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXJ0VGltZTogRGF0ZTtcclxuICAgIHB1YmxpYyBlbmRUaW1lOiBEYXRlO1xyXG4gICAgcHVibGljIHN1bW1hcnk6IHN0cmluZztcclxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihldmVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYoZXZlbnQuaW5jbHVkZXMoJ0VORDpWQ0FMRU5EQVInKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsaW5lcyA9IGV2ZW50LnNwbGl0KCdcXG4nKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBjb25zdCBhRGF0ZSA9IG5ldyBEYXRlKGAke2FZZWFyfS0ke2FNb250aH0tJHthRGF5fSAke2FTdGFydEhvdXJ9OiR7YVN0YXJ0TWludXRlfTowMGApLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBsaW5lc1szXS5zcGxpdCgnOycpWzJdLnNwbGl0KCc6JylbMV07XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IGxpbmVzWzRdLnNwbGl0KCc7JylbMl0uc3BsaXQoJzonKVsxXTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRIb3VyID0gc3RhcnQuc3BsaXQoJ1QnKVsxXS5zbGljZSgwLDIpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydE1pbnV0ZSA9IHN0YXJ0LnNwbGl0KCdUJylbMV0uc2xpY2UoMiw0KTtcclxuICAgICAgICAgICAgY29uc3QgZW5kSG91ciA9IGVuZC5zcGxpdCgnVCcpWzFdLnNsaWNlKDAsMik7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZE1pbnV0ZSA9IGVuZC5zcGxpdCgnVCcpWzFdLnNsaWNlKDIsNCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBzdGFydC5zcGxpdCgnVCcpWzBdLnNsaWNlKDAsNCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gc3RhcnQuc3BsaXQoJ1QnKVswXS5zbGljZSg0LDYpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXkgPSBzdGFydC5zcGxpdCgnVCcpWzBdLnNsaWNlKDYsOCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSAke3N0YXJ0SG91cn06JHtzdGFydE1pbnV0ZX06MDBgKTtcclxuICAgICAgICAgICAgdGhpcy5lbmRUaW1lID0gbmV3IERhdGUoYCR7eWVhcn0tJHttb250aH0tJHtkYXl9ICR7ZW5kSG91cn06JHtlbmRNaW51dGV9OjAwYCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VtbWFyeSA9IGxpbmVzWzVdLnNwbGl0KCc6JylbMV07XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBsaW5lc1s2XS5zcGxpdCgnOicpWzFdO1xyXG4gICAgICAgICAgICBsZXQgZGVzYzogc3RyaW5nID0gbGluZXNbN10uc3BsaXQoJzonKVsxXVxyXG4gICAgICAgICAgICBsZXQgaSA9IDE7XHJcbiAgICAgICAgICAgIHdoaWxlKCFsaW5lc1s3ICsgaV0uaW5jbHVkZXMoJ0xPQ0FUSU9OJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGw6IHN0cmluZyA9IGxpbmVzWzcgKyBpXSArICc8YnI+JztcclxuICAgICAgICAgICAgICAgIGRlc2MgKz0gbDtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzYztcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxpbmVzWzcgKyBpXS5zcGxpdCgnOicpWzFdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBWRVZFTlQ6IFxcbicgKyBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5FcnJvcjogNDA0PC9oMT5cXHJcXG48aDI+RGUgZ2V2cmFhZ2RlIFVSTCB3ZXJkIG5pZXQgZ2V2b25kZW4hPC9oMj5cIjsiLCJleHBvcnQgY2xhc3MgVmlldyB7XHJcbiAgICBodG1sOiBzdHJpbmc7XHJcbiAgICBvblJ1bjogQXJyYXk8RnVuY3Rpb24+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh0bWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICAgICAgdGhpcy5vblJ1biA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZ1bmN0aW9uKGZ1bmM6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5vblJ1bi5wdXNoKGZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMub25SdW4uZm9yRWFjaCgoZnVuYzogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgZnVuYygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYWRkXFxcIj5cXHJcXG4gICAgPGgyIGNsYXNzPVxcXCJhZGRfX3RpdGxlXFxcIj5Eb3dubG9hZCBoZXQgaUNhbGVuZGFyIGJlc3RhbmQgdmFuIENlbnRhdXJvPC9oMj5cXHJcXG4gICAgPHAgY2xhc3M9XFxcImFkZF9fdGl0bGVcXFwiPlxcclxcbiAgICAgICAgVmlhIGRlIGtub3AgZXhwb3J0ZXJlbiwgZGFuIGtpZXMgamUgdm9vciBrb3Bpw6tyZW4uIDxicj5cXHJcXG4gICAgICAgIEFscyBqZSBvcCBkZSBsaW5rIGtsaWt0LCB3b3JkdCBoZXQgYmVzdGFuZCBnZWRvd25sb2FkZWQuXFxyXFxuICAgIDwvcD5cXHJcXG4gICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9jZW50YXVyby51Z2VudC5iZS9rYWxlbmRlci9taWpuS2FsZW5kZXJcXFwiIGNsYXNzPVxcXCJsaW5rXFxcIj5DZW50YXVybyBrYWxlbmRlcjwvYT5cXHJcXG5cXHJcXG4gICAgPGZvcm0gaWQ9XFxcImFkZC1mb3JtXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImpzLWZpbGVcXFwiIGNsYXNzPVxcXCJhZGQtbGFiZWxcXFwiPlVwbG9hZCBlZW4gYmVzdGFuZDwvbGFiZWw+IDxicj5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwiYWRkLWlucHV0XFxcIiBuYW1lPVxcXCJpY2FsXFxcIiBpZD1cXFwianMtZmlsZVxcXCI+IDxicj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYWRkLWJ0blxcXCI+VVBMT0FERU48L2J1dHRvbj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlwiOyIsImltcG9ydCB7IFNUT1JFIH0gZnJvbSBcIi4uLy4uL3N0b3JlL1N0b3JlXCI7XHJcbmltcG9ydCB7IHZFdmVudCB9IGZyb20gXCIuLi8uLi90eXBlcy9ldmVudHMvRXZlbnRcIjtcclxuXHJcbmZ1bmN0aW9uIHNhdmUoZGF0YTogQXJyYXk8dkV2ZW50Pikge1xyXG4gICAgbGV0IGRheXMgPSB7fTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICBsZXQgdkRheTogc3RyaW5nID0gYCR7ZC5zdGFydFRpbWUuZ2V0RnVsbFllYXIoKX0tJHtkLnN0YXJ0VGltZS5nZXRNb250aCgpICsgMX0tJHtkLnN0YXJ0VGltZS5nZXREYXRlKCl9YDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZEYXkpO1xyXG5cclxuICAgICAgICAgICAgaWYoT2JqZWN0LmtleXMoZGF5cykuaW5jbHVkZXModkRheSkpIHtcclxuICAgICAgICAgICAgICAgIGRheXNbdkRheV0ucHVzaChkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRheXNbdkRheV0gPSBbXTtcclxuICAgICAgICAgICAgICAgIGRheXNbdkRheV0ucHVzaChkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2goZXJyKSB7fVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF5cykuZm9yRWFjaCgoZGF5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgU1RPUkUuc2V0KFxyXG4gICAgICAgICAgICAgICAgZGF5LFxyXG4gICAgICAgICAgICAgICAgZGF5c1tkYXldLnNvcnQoKGE6IHZFdmVudCwgYjogdkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuc3RhcnRUaW1lIC0gYi5zdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZpbGUoKSB7XHJcbiAgICBpZih3aW5kb3cuRmlsZSAmJiB3aW5kb3cuRmlsZVJlYWRlciAmJiB3aW5kb3cuRmlsZUxpc3QgJiYgd2luZG93LkJsb2IpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtZm9ybScpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLWZpbGUnKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlOiBGaWxlTGlzdCA9IGlucHV0LmZpbGVzO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGE6IHN0cmluZyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudHM6IEFycmF5PHN0cmluZz4gPSBkYXRhLnNwbGl0KCdFTkQ6VlRJTUVaT05FJylbMV0uc3BsaXQoJ0VORDpWRVZFTlQnKTtcclxuICAgICAgICAgICAgICAgIGxldCB2RXZlbnRzOiBBcnJheTx2RXZlbnQ+ID0gW107XHJcbiAgICAgICAgICAgICAgICBldmVudHMuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2RXZlbnRzLnB1c2gobmV3IHZFdmVudChlKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNhdmUodkV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiI2NhbGVuZGFyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlWzBdKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0pvdXcgYnJvd3NlciBvbmRlcnN0ZXVuZCBuaWV0IGRlIG5vZGlnZSBmZWF0dXJlcyB2b29yIGRlemUgYXBwbGljYXRpZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgaWYoU1RPUkUuZ2V0QWxsKCkubGVuZ3RoICE9IDApIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnY2FsZW5kYXInO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImpzLWNhbGVuZGFyXFxcIj48L2Rpdj5cIjsiLCJpbXBvcnQgeyBTVE9SRSB9IGZyb20gXCIuLi8uLi9zdG9yZS9TdG9yZVwiO1xyXG5pbXBvcnQgeyB2RXZlbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZXZlbnRzL0V2ZW50XCI7XHJcblxyXG5jb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRFdmVudHMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gU1RPUkUuZ2V0QWxsKCk7XHJcbiAgICBpZihldmVudHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnYWRkJztcclxuICAgIH1cclxuICAgIGV2ZW50cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuaWQpIC0gbmV3IERhdGUoYi5pZCk7XHJcbiAgICB9KTtcclxuICAgIGRpc3BsYXlFdmVudHMoZXZlbnRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNUb2RheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgIGxldCB0aW1lID0gXCJcIjtcclxuXHJcbiAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpID09IG5vdy5nZXRGdWxsWWVhcigpICYmIGRhdGUuZ2V0TW9udGgoKSA9PSBub3cuZ2V0TW9udGgoKSAmJiBkYXRlLmdldERhdGUoKSA9PSBub3cuZ2V0RGF0ZSgpKSB7XHJcbiAgICAgICAgdGltZSA9ICd0b2RheSc7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA8IG5vdy5nZXRGdWxsWWVhcigpKSB7XHJcbiAgICAgICAgdGltZSA9IFwicGFzc2VkXCJcclxuICAgIH0gZWxzZSBpZihkYXRlLmdldEZ1bGxZZWFyKCkgPT0gbm93LmdldEZ1bGxZZWFyKCkpIHtcclxuICAgICAgICBpZihkYXRlLmdldE1vbnRoKCkgPCBub3cuZ2V0TW9udGgoKSkge1xyXG4gICAgICAgICAgICB0aW1lID0gXCJwYXNzZWRcIjtcclxuICAgICAgICB9IGVsc2UgaWYoZGF0ZS5nZXRNb250aCgpID09IG5vdy5nZXRNb250aCgpKSB7XHJcbiAgICAgICAgICAgIGlmKGRhdGUuZ2V0RGF0ZSgpIDwgbm93LmdldERhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGltZSA9ICdwYXNzZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPj0gbm93LmdldEZ1bGxZZWFyKCkgJiYgZGF0ZS5nZXRNb250aCgpID49IG5vdy5nZXRNb250aCgpICYmIGRhdGUuZ2V0RGF0ZSgpID4gbm93LmdldERhdGUoKSkge1xyXG4gICAgICAgIHRpbWUgPSBcImZ1dHVyZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RXZlbnRzKGV2ZW50czogYW55KSB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY2FsZW5kYXInKTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZSA9IGV2ZW50c1tpXS52RXZlbnQ7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRzSFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgZS5mb3JFYWNoKChkYXk6IHZFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShkYXkuc3RhcnRUaW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKGRheS5lbmRUaW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0SG91ciA9IHN0YXJ0LmdldEhvdXJzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydE1pbnV0ZSA9IHN0YXJ0LmdldE1pbnV0ZXMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZEhvdXIgPSBlbmQuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZE1pbnV0ZSA9IGVuZC5nZXRNaW51dGVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IHN0YXJ0LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IHN0YXJ0LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHN0YXJ0LmdldERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50IGV2ZW50LS0ke2lzVG9kYXkoc3RhcnQpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz4ke2RheS5zdW1tYXJ5fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PiR7ZGF0ZX0vJHttb250aH0vJHt5ZWFyfSAke2NoZWNrRGF0ZShzdGFydEhvdXIpfToke2NoZWNrRGF0ZShzdGFydE1pbnV0ZSl9IC0gJHtjaGVja0RhdGUoZW5kSG91cil9OiR7Y2hlY2tEYXRlKGVuZE1pbnV0ZSl9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2RheS5kZXNjcmlwdGlvbi5yZXBsYWNlKC8oXFxcXG4pL2dpbSwgJzxicj4nKS5yZXBsYWNlKC8oXFxcXCkvZ2ltLCAnJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7ZGF5LmxvY2F0aW9uLnJlcGxhY2UoLyhcXFxcKS9naW0sICcnKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzSFRNTCArPSBodG1sO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZXZlbnRzW2ldLmlkKTtcclxuXHJcbiAgICAgICAgICAgIG91dHB1dC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZGF5X19kYXRlXCI+JHtjaGVja0RhdGUoZGF0ZS5nZXREYXRlKCkpfS8ke2NoZWNrRGF0ZShkYXRlLmdldE1vbnRoKCkgKyAxKX0vJHtkYXRlLmdldEZ1bGxZZWFyKCl9PC9oMj5cclxuICAgICAgICAgICAgICAgICR7ZXZlbnRzSFRNTH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ldmVudC0tdG9kYXknKS5zY3JvbGxJbnRvVmlldyh0cnVlKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRGF0ZShkYXRlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHIgPSAnJyArIGRhdGU7XHJcblxyXG4gICAgaWYoZGF0ZSA8IDEwKSB7XHJcbiAgICAgICAgciA9ICcwJyArIGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHI7XHJcbn0iLCJpbXBvcnQgeyBTVE9SRSB9IGZyb20gXCIuLi8uLi9zdG9yZS9TdG9yZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVSZWRpcmVjdCgpIHtcclxuICAgIGlmKFNUT1JFLmdldEFsbCgpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcImFkZFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiY2FsZW5kYXJcIjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= 