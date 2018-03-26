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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: config, ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ui\", function() { return ui; });\nconst config = {\r\n    apiKey: \"AIzaSyBxeb5QjCf-J4iv_r2qv-BRZRWGufYkmYw\",\r\n    authDomain: \"chaos-burst.firebaseapp.com\",\r\n    databaseURL: \"https://chaos-burst.firebaseio.com\",\r\n    projectId: \"chaos-burst\",\r\n    storageBucket: \"chaos-burst.appspot.com\",\r\n    messagingSenderId: \"332063549155\"\r\n};\r\n \r\nconst ui = {\r\n    effectDiv: $(\"#effect\"),\r\n    burstEffect: $(\"#eff\"),\r\n    prompt: $(\"#ask\"),\r\n    timeLength: $(\"#timeLength\"),\r\n    timeContainer: $(\"#timeContainer\")\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: getRandomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return getRandomInt; });\nfunction getRandomInt(max) {\r\n    // up to but not including max\r\n    return Math.floor(Math.random() * Math.floor(max));\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _storageAvailable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageAvailable */ \"./src/storageAvailable.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\r\n\r\n\r\n\r\nconst tables = {\r\n    timeResults: [],\r\n    effectResults: []\r\n};\r\n\r\n\r\nfunction App() {\r\n\r\n    firebase.initializeApp(_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"]); //eslint-disable-line\r\n    const db = firebase.database(); //eslint-disable-line\r\n\r\n    getData(db, \"/effect\", \"effectResults\");\r\n    getData(db, \"/time\", \"timeResults\");\r\n}\r\n\r\n// function initPage(ui, storageBool, tables) {\r\n//     if (storageBool) {\r\n//         //caching exists\r\n//     } else {\r\n//         //caching doesn't exist\r\n//     }\r\n// }\r\n\r\nfunction updateHTML(location, tablesKey) {\r\n    const max = tables[tablesKey].length;\r\n    const choice = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"getRandomInt\"])(max);\r\n\r\n    switch(location) {\r\n    case \"/time\":\r\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"ui\"][\"timeLength\"].text(tables[tablesKey][choice].replace(/[\"]+/g, \"\"));\r\n        break;\r\n    case \"/effect\":\r\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"ui\"][\"burstEffect\"].text(tables[tablesKey][choice].replace(/[\"]+/g, \"\"));\r\n        break;\r\n    }\r\n    // if (location === \"/time\") {\r\n    //     \r\n    // } else if (location === \"/effect\") {\r\n    //     \r\n    // }\r\n}\r\n\r\nfunction getData(db, location, tablesKey) {\r\n    db.ref(location)\r\n        .once(\"value\")\r\n        .then(snapshot => {\r\n            snapshot.forEach(x => {\r\n                let text = x.val().effect;\r\n                tables[tablesKey].push(text);\r\n            });\r\n        })\r\n        .then(() => updateHTML(location, tablesKey));\r\n}\r\n\r\n\r\n// var userId = firebase.auth().currentUser.uid;\r\n// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {\r\n//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';\r\n//   // ...\r\n// });\r\n\r\n// Keep it together, boys.\r\n// db.ref(\"/time\").on(\"value\", snapshot => {\r\n//     snapshot.forEach(x => {\r\n//         let text = x.val().effect;\r\n//         tables.timeResults.push(text);\r\n//     });\r\n//     ui.length.text(tables.timeResults[getRandomInt(100)].toLowerCase()); //eslint-disable-line\r\n// });\r\n\r\n// $(document).on(\"click\", ui.length, function () { \r\n//     ui.length.text(tables.timeResults[getRandomInt(100)].toLowerCase());\r\n// });\r\n\r\n\r\n$(\"#time\").hide();\r\n\r\n$(\"#ask\").on(\"click\", function () {\r\n    $(\"#time\").show(\"fast\");\r\n    $(this).hide();\r\n});\r\n\r\n\r\n\r\n\r\n// Let's not get confused.\r\n// db.ref(\"/effect\").on(\"value\", snapshot => {\r\n//     snapshot.forEach(x => {\r\n//         tables.effectResults.push(x.val().effect);\r\n//     });\r\n//     $(\"#eff\").text(tables.effectResults[getRandomInt(10000)].replace('\"', \"\") + \".\"); //eslint-disable-line\r\n//     shutDown();\r\n// });\r\n// $(document).on(\"click\", \"#effect\", function () { //eslint-disable-line\r\n//     $(\"#eff\").text(tables.effectResults[getRandomInt(10000)].replace('\"', \"\") + \".\"); //eslint-disable-line\r\n// });\r\n\r\n\r\n\r\nfunction shutDown() {\r\n    if (tables.effectResults.length === 10000) {\r\n        firebase.database().goOffline(); //eslint-disable-line\r\n    }\r\n}\r\n\r\n\r\nApp();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/storageAvailable.js":
/*!*********************************!*\
  !*** ./src/storageAvailable.js ***!
  \*********************************/
/*! exports provided: storageAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storageAvailable\", function() { return storageAvailable; });\nfunction storageAvailable(type) {\r\n    try {\r\n        var storage = window[type],\r\n            x = \"__storage_test__\";\r\n        storage.setItem(x, x);\r\n        storage.removeItem(x);\r\n        return true;\r\n    }\r\n    catch (e) {\r\n        return e instanceof DOMException && (\r\n            // everything except Firefox\r\n            e.code === 22 ||\r\n            // Firefox\r\n            e.code === 1014 ||\r\n            // test name field too, because code might not be present\r\n            // everything except Firefox\r\n            e.name === \"QuotaExceededError\" ||\r\n            // Firefox\r\n            e.name === \"NS_ERROR_DOM_QUOTA_REACHED\") &&\r\n            // acknowledge QuotaExceededError only if there's something already stored\r\n            storage.length !== 0;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/storageAvailable.js?");

/***/ })

/******/ });