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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const config = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n        apiKey: process.env.OPENAI_API_KEY\n    });\n    const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(config);\n    const topic = \"Top 10 tips for dog owners\";\n    const keywords = \"first-time dog owners, common dog health issues, best dog breeds\";\n    const response = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        temperature: 0,\n        max_tokens: 3600,\n        prompt: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-seperated keywords: ${keywords}\n    The contents should be formattted in SEO-friendly HTML.\n    The response must also include appropriate HTML title and meta description contents.\n    The return format must be stringified JSON in the following format:\n    {\n        \"postContent\": post content here\n        \"title\": title goes here\n        \"metaDescription\": meta description goes\n    }`\n    });\n    console.log(\"openai response = \", response);\n    res.status(200).json({\n        post: JSON.parse(response.data.choices[0]?.text.split(\"\\n\").join(\"\"))\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGVQb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUVuQyxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxTQUFTLElBQUlMLGlEQUFhQSxDQUFDO1FBQy9CTSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7SUFDcEM7SUFDQSxNQUFNQyxTQUFTLElBQUlULDZDQUFTQSxDQUFDSTtJQUU3QixNQUFNTSxRQUFRO0lBQ2QsTUFBTUMsV0FBVztJQUdqQixNQUFNQyxXQUFXLE1BQU1ILE9BQU9JLGdCQUFnQixDQUFDO1FBQzdDQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsWUFBWTtRQUNaQyxRQUFRLENBQUMsdURBQXVELEVBQUVQLE1BQU0sdURBQXVELEVBQUVDLFNBQVM7Ozs7Ozs7O0tBUXpJLENBQUM7SUFDSjtJQUVBTyxRQUFRQyxHQUFHLENBQUMsc0JBQXNCUDtJQUVsQ1QsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDWixTQUFTYSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLEVBQUVDLEtBQUtDLEtBQUssQ0FBQyxNQUFNQyxJQUFJLENBQUM7SUFBSztBQUMvRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW9wZW5haS1zdGFydGVyLy4vcGFnZXMvYXBpL2dlbmVyYXRlUG9zdC5qcz9jMTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBjb25maWcgPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbiAgfSk7XG4gIGNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlnKTtcblxuICBjb25zdCB0b3BpYyA9ICdUb3AgMTAgdGlwcyBmb3IgZG9nIG93bmVycyc7XG4gIGNvbnN0IGtleXdvcmRzID0gJ2ZpcnN0LXRpbWUgZG9nIG93bmVycywgY29tbW9uIGRvZyBoZWFsdGggaXNzdWVzLCBiZXN0IGRvZyBicmVlZHMnXG5cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXG4gICAgdGVtcGVyYXR1cmU6IDAsXG4gICAgbWF4X3Rva2VuczogMzYwMCxcbiAgICBwcm9tcHQ6IGBXcml0ZSBhIGxvbmcgYW5kIGRldGFpbGVkIFNFTy1mcmllbmRseSBibG9nIHBvc3QgYWJvdXQgJHt0b3BpY30sIHRoYXQgdGFyZ2V0cyB0aGUgZm9sbG93aW5nIGNvbW1hLXNlcGVyYXRlZCBrZXl3b3JkczogJHtrZXl3b3Jkc31cbiAgICBUaGUgY29udGVudHMgc2hvdWxkIGJlIGZvcm1hdHR0ZWQgaW4gU0VPLWZyaWVuZGx5IEhUTUwuXG4gICAgVGhlIHJlc3BvbnNlIG11c3QgYWxzbyBpbmNsdWRlIGFwcHJvcHJpYXRlIEhUTUwgdGl0bGUgYW5kIG1ldGEgZGVzY3JpcHRpb24gY29udGVudHMuXG4gICAgVGhlIHJldHVybiBmb3JtYXQgbXVzdCBiZSBzdHJpbmdpZmllZCBKU09OIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuICAgIHtcbiAgICAgICAgXCJwb3N0Q29udGVudFwiOiBwb3N0IGNvbnRlbnQgaGVyZVxuICAgICAgICBcInRpdGxlXCI6IHRpdGxlIGdvZXMgaGVyZVxuICAgICAgICBcIm1ldGFEZXNjcmlwdGlvblwiOiBtZXRhIGRlc2NyaXB0aW9uIGdvZXNcbiAgICB9YCxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coJ29wZW5haSByZXNwb25zZSA9ICcsIHJlc3BvbnNlKVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcG9zdDogSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLmNob2ljZXNbMF0/LnRleHQuc3BsaXQoXCJcXG5cIikuam9pbihcIlwiKSkgfSk7XG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJ0b3BpYyIsImtleXdvcmRzIiwicmVzcG9uc2UiLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJwcm9tcHQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsInBvc3QiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJzcGxpdCIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generatePost.js\n");

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