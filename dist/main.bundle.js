/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Courier New', Courier, monospace;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nbody,\\r\\n.title,\\r\\n.new-task {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 80%;\\r\\n  margin-top: 3rem;\\r\\n  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.49);\\r\\n}\\r\\n\\r\\n.title {\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.title,\\r\\n.new-task,\\r\\n.task-row {\\r\\n  border-bottom: 2px solid lightgray;\\r\\n}\\r\\n\\r\\ninput,\\r\\np,\\r\\nbutton {\\r\\n  border: none;\\r\\n  background-color: #fff;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nbutton,\\r\\ni,\\r\\ninput {\\r\\n  cursor: pointer;\\r\\n  color: rgba(0, 0, 0, 0.25);\\r\\n}\\r\\n\\r\\n.new-task {\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\ninput[type=text] {\\r\\n  width: 90%;\\r\\n  margin: 0 1.5rem;\\r\\n  padding: 1rem 3rem;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#press-enter {\\r\\n  transform: rotate(90deg);\\r\\n}\\r\\n\\r\\n.task-row {\\r\\n  display: grid;\\r\\n  grid-template-columns: 3fr 18fr 1fr;\\r\\n  height: 2.5rem;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n#task-description {\\r\\n  padding: 0.5rem 0;\\r\\n}\\r\\n\\r\\n.task-row i {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.options > .trash {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#clear-button {\\r\\n  width: 100%;\\r\\n  padding: 0.75rem 0;\\r\\n  background-color: rgba(0, 0, 0, 0.1);\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _modules_localstorage_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_completedCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/completedCheck.js */ \"./src/modules/completedCheck.js\");\n/* harmony import */ var _modules_completedCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_completedCheck_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_deleteAll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/deleteAll.js */ \"./src/modules/deleteAll.js\");\n/* harmony import */ var _modules_deleteAll_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_deleteAll_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_remove_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/remove.js */ \"./src/modules/remove.js\");\n/* harmony import */ var _modules_remove_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_remove_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_add_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_edit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/edit.js */ \"./src/modules/edit.js\");\n/* harmony import */ var _modules_edit_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_edit_js__WEBPACK_IMPORTED_MODULE_6__);\n// index.js\n\n\n\n\n\n\n\n\n\nconst description = document.getElementById('my-task');\nconst targetPressEnter = document.getElementById('press-enter');\n\nlet todos = (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.getFromStorage)();\n\nconst showToDo = () => {\n  const ul = document.getElementById('tasks-list');\n  ul.innerHTML = '';\n\n  todos.forEach((todo, index) => {\n    const li = document.createElement('li');\n    li.className = 'task-row';\n    const isChecked = todo.completed ? 'checked' : '';\n\n    li.innerHTML = `\n      <input id=\"checkbox\" type=\"checkbox\" ${isChecked}>\n      <p id=\"task-description\" contenteditable=\"true\">${todo.description}</p>\n      <div class=\"options\">\n        <button class=\"dots\"><i class=\"fa-solid fa-ellipsis-vertical\"></i></button>\n        <span class=\"trash\" onclick=\"removeTask(${index})\"><i class=\"fa-solid fa-trash-can\"></i></span>\n      </div>\n      `;\n    ul.appendChild(li);\n\n    // Call toggleCompleted function on checkbox change\n    const checkbox = li.querySelector('#checkbox');\n    checkbox.addEventListener('change', () => {\n      todos = _modules_completedCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(index, todos);\n      (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(todos);\n      showToDo();\n    });\n\n    // Edit task description\n    const editInputTask = li.querySelector('#task-description');\n\n    editInputTask.addEventListener('blur', () => {\n      const editTaskContent = editInputTask.textContent.trim();\n      todos = _modules_edit_js__WEBPACK_IMPORTED_MODULE_6___default()(todos, index, editTaskContent);\n      (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(todos);\n    });\n\n    editInputTask.addEventListener('keydown', (event) => {\n      if (event.key === 'Enter') {\n        event.preventDefault();\n        editInputTask.blur();\n      }\n    });\n\n    // Visibility for options: dots/trash when editing the task\n    const dots = li.querySelector('.dots');\n    const trash = li.querySelector('.trash');\n\n    editInputTask.addEventListener('click', () => {\n      dots.style.display = 'none';\n      trash.style.display = 'inline-block';\n    });\n  });\n  (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(todos);\n};\n\n// Add task given by user when clicked on 'Enter' icon\ntargetPressEnter.addEventListener('click', (e) => {\n  e.preventDefault();\n  _modules_add_js__WEBPACK_IMPORTED_MODULE_5___default()(todos, description.value);\n  showToDo();\n  description.value = '';\n});\n\n// Add task given by user when pressed on 'Enter' key on keyboard\ntargetPressEnter.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    e.preventDefault();\n    _modules_add_js__WEBPACK_IMPORTED_MODULE_5___default()(todos, description.value);\n    showToDo();\n    description.value = '';\n  }\n});\n\n// Removing a task\nwindow.removeTask = (index) => {\n  todos = _modules_remove_js__WEBPACK_IMPORTED_MODULE_4___default()(todos, index);\n  (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(todos);\n  showToDo();\n};\n\n// Clear All Completed\nconst clearButton = document.getElementById('clear-button');\n\nclearButton.addEventListener('click', () => {\n  todos = _modules_deleteAll_js__WEBPACK_IMPORTED_MODULE_3___default()(todos);\n  (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(todos);\n  showToDo();\n});\n\nshowToDo();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((module) => {

eval("// add.js\nconst addToDo = (todos, description) => {\n  const updatedToDo = {\n    completed: false,\n    description,\n    index: todos.length + 1,\n  };\n  todos.push(updatedToDo);\n  return todos;\n};\n\nmodule.exports = addToDo;\n\n//# sourceURL=webpack://to-do-list/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/completedCheck.js":
/*!***************************************!*\
  !*** ./src/modules/completedCheck.js ***!
  \***************************************/
/***/ ((module) => {

eval("// completedCheck.js\nconst toggleCompleted = (index, tasks) => {\n  const newTasks = [...tasks];\n  newTasks[index] = {\n    ...newTasks[index],\n    completed: !newTasks[index].completed,\n  };\n  return newTasks;\n};\n\nmodule.exports = toggleCompleted;\n\n//# sourceURL=webpack://to-do-list/./src/modules/completedCheck.js?");

/***/ }),

/***/ "./src/modules/deleteAll.js":
/*!**********************************!*\
  !*** ./src/modules/deleteAll.js ***!
  \**********************************/
/***/ ((module) => {

eval("// deleteAll.js\nconst clearCompleted = (tasks) => {\n  const updatedTasks = tasks.filter((task) => !task.completed);\n  for (let i = 0; i < updatedTasks.length; i += 1) {\n    updatedTasks[i].index = i + 1;\n  }\n  return updatedTasks;\n};\n\nmodule.exports = clearCompleted;\n\n//# sourceURL=webpack://to-do-list/./src/modules/deleteAll.js?");

/***/ }),

/***/ "./src/modules/edit.js":
/*!*****************************!*\
  !*** ./src/modules/edit.js ***!
  \*****************************/
/***/ ((module) => {

eval("const editTask = (todos, index, newDescription) => {\n  todos[index].description = newDescription;\n  return todos;\n};\n\nmodule.exports = editTask;\n\n//# sourceURL=webpack://to-do-list/./src/modules/edit.js?");

/***/ }),

/***/ "./src/modules/localstorage.js":
/*!*************************************!*\
  !*** ./src/modules/localstorage.js ***!
  \*************************************/
/***/ ((module) => {

eval("// localstorage.js\nconst getFromStorage = () => {\n  let storedData = JSON.parse(window.localStorage.getItem('ToDo-storage'));\n  storedData = Array.isArray(storedData) ? storedData : [];\n  return storedData;\n};\n\nconst updateStorage = (data) => {\n  window.localStorage.setItem('ToDo-storage', JSON.stringify(data));\n};\n\nmodule.exports = { getFromStorage, updateStorage };\n\n//# sourceURL=webpack://to-do-list/./src/modules/localstorage.js?");

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((module) => {

eval("// remove.js\nconst removeFunction = (tasks, index) => {\n  const updatedToDo = tasks.filter((it) => it.index !== index + 1);\n  for (let i = 0; i < updatedToDo.length; i += 1) {\n    updatedToDo[i].index = i + 1;\n  }\n  return updatedToDo;\n};\n\nmodule.exports = removeFunction;\n\n//# sourceURL=webpack://to-do-list/./src/modules/remove.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);