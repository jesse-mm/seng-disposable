(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SengDisposable"] = factory();
	else
		root["SengDisposable"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Disposable_1 = __webpack_require__(2);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Disposable_1.default;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var Disposable = (function () {
	    function Disposable() {
	        this._isDisposed = false;
	    }
	    /**
	     * After {@link dispose} has been called, this method returns true.
	     * Use this method to determine whether dispose() should be run again.
	     */
	    Disposable.prototype.isDisposed = function () {
	        return this._isDisposed;
	    };
	    /**
	     * Destruct this class.
	     */
	    Disposable.prototype.dispose = function () {
	        this._isDisposed = true;
	    };
	    return Disposable;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Disposable;


/***/ }
/******/ ])
});
;