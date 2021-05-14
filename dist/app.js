/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: '#root',
  data: {
    // HEADER
    // Menu list
    headerMenu: [{
      link: '#',
      name: 'Home',
      isClicked: false
    }, {
      link: '#',
      name: 'Rates',
      isClicked: false
    }, {
      link: '#',
      name: 'Testimonials',
      isClicked: false
    }, {
      link: '#',
      name: 'FAQ',
      isClicked: false
    }, {
      link: '#',
      name: 'Blog',
      isClicked: false
    }, {
      link: '#',
      name: 'Contact',
      isClicked: false
    }],
    // Button
    headerMenuBtn: {
      link: '#',
      name: 'FREE QUOTE'
    },
    // SOCIAL ICONS & LINKS
    socials: [// Facebook
    {
      link: "https://www.facebook.com/TransExpresssrl/",
      icon: '<i class="fab fa-facebook-f"></i>'
    }, // Twitter
    {
      link: "#",
      icon: '<i class="fab fa-twitter"></i>'
    }, // Instagram
    {
      link: "https://www.instagram.com/transexpress_moving/",
      icon: '<i class="fab fa-instagram"></i>'
    }, // Youtube
    {
      link: "#",
      icon: '<i class="fab fa-youtube"></i>'
    }],
    // FOOTER
    // Titles
    footerMenuTitle_1: 'Avada Movers',
    footerMenuTitle_2: 'Recent Posts',
    // Menu lists
    footerMenu_1: [{
      link: '#',
      name: 'Home',
      isClicked: false
    }, {
      link: '#',
      name: 'Rates',
      isClicked: false
    }, {
      link: '#',
      name: 'Testimonials',
      isClicked: false
    }, {
      link: '#',
      name: 'Blog',
      isClicked: false
    }, {
      link: '#',
      name: 'Free Quote',
      isClicked: false
    }],
    footerMenu_2: [{
      link: '#',
      name: 'Heading Out To College?',
      isClicked: false
    }, {
      link: '#',
      name: 'Moving Your Buisiness?',
      isClicked: false
    }, {
      link: '#',
      name: 'Outstanding Quality',
      isClicked: false
    }, {
      link: '#',
      name: 'Cost of Moving',
      isClicked: false
    }, {
      link: '#',
      name: 'Best Moving Tips',
      isClicked: false
    }],
    //Copyright and Legal stuffs links
    copyAndLegal: [{
      link: '#',
      name: '© Copyright 2012 - 2020'
    }, {
      link: '#',
      name: 'Avada Theme by ThemeFusion'
    }, {
      link: '#',
      name: 'All Rights Reserved'
    }, {
      link: '#',
      name: 'Powered by Wordpress'
    }, {
      link: '#',
      name: 'Free Quote'
    }],
    // FLAGS
    // thisLink saves the index of link in the header
    thisLink: 0,
    // thisLink saves the index of link in the footer list 1
    thisFooterLink1: 0,
    // thisLink saves the index of link in the footer list 2
    thisFooterLink2: -1
  },
  methods: {
    // Functions to activate one link per time
    clicked: function clicked(index) {
      this.thisLink = index;
      this.headerMenu[index].isClicked = !this.headerMenu[index].isClicked;
    },
    clickedFooter1: function clickedFooter1(index) {
      this.thisFooterLink1 = index;
      this.footerMenu_1[index].isClicked = !this.footerMenu_1[index].isClicked;
    },
    clickedFooter2: function clickedFooter2(index) {
      this.thisFooterLink2 = index;
      this.footerMenu_2[index].isClicked = !this.footerMenu_2[index].isClicked;
    }
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkquack"] = self["webpackChunkquack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;