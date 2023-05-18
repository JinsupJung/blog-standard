"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generatePost";
exports.ids = ["pages/api/generatePost"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generatePost.js":
/*!***********************************!*\
  !*** ./pages/api/generatePost.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const config = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n        apiKey: process.env.OPENAI_API_KEY\n    });\n    const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(config);\n    const topic = \"Top 10 tips for dog owners\";\n    const keywords = \"first-time dog owners, common dog health issues, best dog breeds\";\n    const response = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        temperature: 0,\n        max_tokens: 3600,\n        prompt: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-seperated keywords: ${keywords}\n    The contents should be formattted in SEO-friendly HTML.\n    The response must also include appropriate HTML title and meta description contents.\n    The return format must be stringified JSON in the following format:\n    {\n        \"postContent\": post content here\n        \"title\": title goes here\n        \"metaDescription\": meta description goes\n    }`\n    });\n    console.log(\"openai response = \", response);\n    res.status(200).json({\n        post: response.data.choices[0]?.text\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGVQb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUVuQyxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxTQUFTLElBQUlMLGlEQUFhQSxDQUFDO1FBQy9CTSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7SUFDcEM7SUFDQSxNQUFNQyxTQUFTLElBQUlULDZDQUFTQSxDQUFDSTtJQUU3QixNQUFNTSxRQUFRO0lBQ2QsTUFBTUMsV0FBVztJQUdqQixNQUFNQyxXQUFXLE1BQU1ILE9BQU9JLGdCQUFnQixDQUFDO1FBQzdDQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsWUFBWTtRQUNaQyxRQUFRLENBQUMsdURBQXVELEVBQUVQLE1BQU0sdURBQXVELEVBQUVDLFNBQVM7Ozs7Ozs7O0tBUXpJLENBQUM7SUFDSjtJQUVBTyxRQUFRQyxHQUFHLENBQUMsc0JBQXNCUDtJQUVsQ1QsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsTUFBTVYsU0FBU1csSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxFQUFFQztJQUFLO0FBQzlELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtb3BlbmFpLXN0YXJ0ZXIvLi9wYWdlcy9hcGkvZ2VuZXJhdGVQb3N0LmpzP2MxOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxuICB9KTtcbiAgY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWcpO1xuXG4gIGNvbnN0IHRvcGljID0gJ1RvcCAxMCB0aXBzIGZvciBkb2cgb3duZXJzJztcbiAgY29uc3Qga2V5d29yZHMgPSAnZmlyc3QtdGltZSBkb2cgb3duZXJzLCBjb21tb24gZG9nIGhlYWx0aCBpc3N1ZXMsIGJlc3QgZG9nIGJyZWVkcydcblxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgICB0ZW1wZXJhdHVyZTogMCxcbiAgICBtYXhfdG9rZW5zOiAzNjAwLFxuICAgIHByb21wdDogYFdyaXRlIGEgbG9uZyBhbmQgZGV0YWlsZWQgU0VPLWZyaWVuZGx5IGJsb2cgcG9zdCBhYm91dCAke3RvcGljfSwgdGhhdCB0YXJnZXRzIHRoZSBmb2xsb3dpbmcgY29tbWEtc2VwZXJhdGVkIGtleXdvcmRzOiAke2tleXdvcmRzfVxuICAgIFRoZSBjb250ZW50cyBzaG91bGQgYmUgZm9ybWF0dHRlZCBpbiBTRU8tZnJpZW5kbHkgSFRNTC5cbiAgICBUaGUgcmVzcG9uc2UgbXVzdCBhbHNvIGluY2x1ZGUgYXBwcm9wcmlhdGUgSFRNTCB0aXRsZSBhbmQgbWV0YSBkZXNjcmlwdGlvbiBjb250ZW50cy5cbiAgICBUaGUgcmV0dXJuIGZvcm1hdCBtdXN0IGJlIHN0cmluZ2lmaWVkIEpTT04gaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6XG4gICAge1xuICAgICAgICBcInBvc3RDb250ZW50XCI6IHBvc3QgY29udGVudCBoZXJlXG4gICAgICAgIFwidGl0bGVcIjogdGl0bGUgZ29lcyBoZXJlXG4gICAgICAgIFwibWV0YURlc2NyaXB0aW9uXCI6IG1ldGEgZGVzY3JpcHRpb24gZ29lc1xuICAgIH1gLFxuICB9KTtcblxuICBjb25zb2xlLmxvZygnb3BlbmFpIHJlc3BvbnNlID0gJywgcmVzcG9uc2UpXG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBwb3N0OiByZXNwb25zZS5kYXRhLmNob2ljZXNbMF0/LnRleHQgfSk7XG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJ0b3BpYyIsImtleXdvcmRzIiwicmVzcG9uc2UiLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJwcm9tcHQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsInBvc3QiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generatePost.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generatePost.js"));
module.exports = __webpack_exports__;

})();