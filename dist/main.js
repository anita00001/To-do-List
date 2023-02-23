/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.edit-bg {\\r\\n  background-color: rgba(0, 0, 255, 0.05);\\r\\n}\\r\\n\\r\\ninput[type=text] {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background-color: inherit;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  height: 100vh;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  margin: auto;\\r\\n  width: 80%;\\r\\n  height: auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.49);\\r\\n  -webkit-box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.49);\\r\\n  -moz-box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.49);\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  padding: 1em;\\r\\n  border-bottom: 2px solid lightgray;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  width: 100%;\\r\\n  padding: 0.5em;\\r\\n}\\r\\n\\r\\n.title i {\\r\\n  font-size: 1rem;\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\\r\\n.title i:hover {\\r\\n  transform: rotate(180deg);\\r\\n  transition: 0.7s;\\r\\n}\\r\\n\\r\\n#button-hover {\\r\\n  z-index: 1;\\r\\n  padding: 0;\\r\\n  margin-top: -1.5rem;\\r\\n  color: green;\\r\\n  border: 1px solid black;\\r\\n  border-bottom: none;\\r\\n  display: none;\\r\\n  width: fit-content;\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n#error {\\r\\n  margin-top: -1.5rem;\\r\\n  width: fit-content;\\r\\n  align-self: center;\\r\\n  color: red;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#press-enter {\\r\\n  margin: 0;\\r\\n  margin-right: 1rem;\\r\\n  border: none;\\r\\n  background-color: #fff;\\r\\n  font-size: 1rem;\\r\\n  font-weight: 100;\\r\\n  transform: rotate(90deg);\\r\\n}\\r\\n\\r\\n.strike-through {\\r\\n  text-decoration: line-through;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.display-list {\\r\\n  list-style: none;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.new-task {\\r\\n  display: flex;\\r\\n  padding: 1em;\\r\\n  border-bottom: 2px solid lightgray;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.checkbox-and-task-description {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  flex: 2;\\r\\n}\\r\\n\\r\\n.new-task > span {\\r\\n  cursor: pointer;\\r\\n  color: lightgray;\\r\\n  flex: 0.1;\\r\\n}\\r\\n\\r\\n.checkbox-and-task-description > .checkbox {\\r\\n  margin: 0 1em 0 0;\\r\\n}\\r\\n\\r\\n#my-task {\\r\\n  font-style: italic;\\r\\n  height: 100%;\\r\\n  padding: 0.5em 0;\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#clear-button {\\r\\n  width: 100%;\\r\\n  padding: 1em;\\r\\n  align-self: center;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  background-color: rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DeleteAll.js":
/*!**************************!*\
  !*** ./src/DeleteAll.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SaveFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveFunction.js */ \"./src/SaveFunction.js\");\n\n\nconst deleteAllCompleted = (tasks) => {\n  const updateTodo = tasks.filter((it) => it.completed !== true);\n  for (let i = 0; i < updateTodo.length; i += 1) {\n    updateTodo[i].index = i;\n  }\n  (0,_SaveFunction_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(updateTodo);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteAllCompleted);\n\n//# sourceURL=webpack://to-do-list/./src/DeleteAll.js?");

/***/ }),

/***/ "./src/DeleteFunction.js":
/*!*******************************!*\
  !*** ./src/DeleteFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SaveFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveFunction.js */ \"./src/SaveFunction.js\");\n\n\nconst deleteToDo = (tasks, index) => {\n  const updateTodo = tasks.filter((it) => index !== it);\n  for (let i = 0; i < updateTodo.length; i += 1) {\n    updateTodo[i].index = i;\n  }\n  (0,_SaveFunction_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(updateTodo);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteToDo);\n\n//# sourceURL=webpack://to-do-list/./src/DeleteFunction.js?");

/***/ }),

/***/ "./src/SaveFunction.js":
/*!*****************************!*\
  !*** ./src/SaveFunction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst saveToStorage = (task) => {\n  localStorage.setItem('todos', JSON.stringify(task));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveToStorage);\n\n//# sourceURL=webpack://to-do-list/./src/SaveFunction.js?");

/***/ }),

/***/ "./src/UpdateStorage.js":
/*!******************************!*\
  !*** ./src/UpdateStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SaveFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveFunction.js */ \"./src/SaveFunction.js\");\n\n\nconst updateToDo = (todotask, index, boolvalue) => {\n  todotask[index].description = boolvalue;\n  (0,_SaveFunction_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todotask);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateToDo);\n\n//# sourceURL=webpack://to-do-list/./src/UpdateStorage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _UpdateStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateStorage.js */ \"./src/UpdateStorage.js\");\n/* harmony import */ var _DeleteFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteFunction.js */ \"./src/DeleteFunction.js\");\n/* harmony import */ var _DeleteAll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteAll.js */ \"./src/DeleteAll.js\");\n\n\n\n\n\n\n\n\nconst pressEnter = document.getElementById('press-enter');\nconst hoverText = document.getElementById('button-hover');\n\n// Hover message when hover over enter icon\npressEnter.addEventListener('mouseover', () => {\n  hoverText.style.display = 'block';\n});\n\npressEnter.addEventListener('mouseout', () => {\n  hoverText.style.display = 'none';\n});\n\nconst showToDo = () => {\n  const tasks = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getFromStorage)();\n  const tasksList = document.getElementById('tasks-list');\n  tasksList.innerHTML = '';\n  tasks.forEach((todo, index) => {\n    const li = document.createElement('li');\n    li.className = 'new-task';\n\n    const todoItemLeft = document.createElement('div');\n    todoItemLeft.className = 'checkbox-and-task-description';\n\n    const input = document.createElement('input');\n    input.className = 'checkbox';\n    input.type = 'checkbox';\n    if (todo.completed) {\n      input.setAttribute('checked', '');\n    }\n\n    input.onchange = (e) => {\n      if (e.target.checked) {\n        tasks[index].completed = true;\n        e.target.parentNode.children[1].classList.add('strike-through');\n      } else {\n        tasks[index].completed = false;\n        e.target.parentNode.children[1].classList.remove('strike-through');\n      }\n      (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)(tasks);\n    };\n\n    todoItemLeft.appendChild(input);\n\n    const taskDescription = document.createElement('p');\n    taskDescription.classList.add('show');\n    if (todo.completed) {\n      taskDescription.classList.add('strike-through');\n    } else {\n      taskDescription.classList.remove('strike-through');\n    }\n    taskDescription.innerText = todo.description;\n    todoItemLeft.appendChild(taskDescription);\n\n    const editInput = document.createElement('input');\n    editInput.className = 'hide';\n    editInput.type = 'text';\n    editInput.value = todo.description;\n    editInput.addEventListener('focusout', (e) => {\n      li.classList.toggle('edit-bg');\n      (0,_UpdateStorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tasks, index, e.target.value);\n      showToDo();\n    });\n    todoItemLeft.appendChild(editInput);\n\n    li.appendChild(todoItemLeft);\n\n    const deleteIcon = document.createElement('span');\n    deleteIcon.className = 'hide';\n    deleteIcon.innerHTML = 'delete';\n    deleteIcon.addEventListener('click', () => {\n      (0,_DeleteFunction_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(tasks, index);\n      showToDo();\n    });\n    li.appendChild(deleteIcon);\n\n    const moreVert = document.createElement('span');\n    moreVert.className = 'material-symbols-outlined';\n    moreVert.innerHTML = 'more_vert';\n    moreVert.addEventListener('click', () => {\n      moreVert.className = 'hide';\n      deleteIcon.className = 'material-symbols-outlined';\n\n      taskDescription.className = 'hide';\n      editInput.className = 'show';\n      li.classList.toggle('edit-bg');\n      editInput.focus();\n    });\n    li.appendChild(moreVert);\n    tasksList.appendChild(li);\n\n    const clearList = document.getElementById('clear-button');\n    clearList.addEventListener('click', () => {\n      (0,_DeleteAll_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(tasks);\n      showToDo();\n    });\n  });\n};\n\nwindow.addEventListener('load', () => {\n  const addNewTodo = document.getElementById('press-enter');\n  addNewTodo.addEventListener('click', () => {\n    // if condition\n    (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.addToDo)();\n    showToDo();\n  });\n\n  const todoInput = document.getElementById('my-task');\n  todoInput.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.addToDo)();\n      showToDo();\n    }\n  });\n\n  showToDo();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToDo\": () => (/* binding */ addToDo),\n/* harmony export */   \"getFromStorage\": () => (/* binding */ getFromStorage),\n/* harmony export */   \"saveToStorage\": () => (/* binding */ saveToStorage)\n/* harmony export */ });\nconst getFromStorage = () => {\n  let data = JSON.parse(localStorage.getItem('todos'));\n  if (!data) {\n    data = [];\n  }\n  return data;\n};\n\nconst saveToStorage = (todos) => {\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\nconst addToDo = () => {\n  const todos = getFromStorage();\n  const newTodoDescription = document.getElementById('my-task');\n  const error = document.getElementById('error');\n  const duplicate = todos.find((task) => task.description === newTodoDescription.value);\n  if (newTodoDescription.value.length === 0) {\n    error.innerText = 'Fields cannot be empty!';\n    error.style.display = 'block';\n  } else if (duplicate) {\n    error.innerText = 'Task already added to the To-Do!!';\n    error.style.display = 'block';\n  } else {\n    error.style.display = 'none';\n    const newTodo = {\n      description: newTodoDescription.value,\n      completed: false,\n      index: todos.length,\n    };\n    newTodoDescription.value = '';\n    todos.push(newTodo);\n  }\n  saveToStorage(todos);\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;