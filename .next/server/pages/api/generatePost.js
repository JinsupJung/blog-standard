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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const config = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n        apiKey: process.env.OPENAI_API_KEY\n    });\n    const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(config);\n    const { topic , keywords  } = req.body;\n    const response = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        temperature: 0,\n        max_tokens: 3600,\n        prompt: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-seperated keywords: ${keywords}\n    The contents should be formattted in SEO-friendly HTML.\n    The response must also include appropriate HTML title and meta description contents.\n    The return format must be stringified JSON in the following format:\n    {\n        \"postContent\": post content here\n        \"title\": title goes here\n        \"metaDescription\": meta description goes\n    }`\n    });\n    console.log(\"openai response = \", response);\n    res.status(200).json({\n        post: JSON.parse(response.data.choices[0]?.text.split(\"\\n\").join(\"\"))\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGVQb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUVuQyxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxTQUFTLElBQUlMLGlEQUFhQSxDQUFDO1FBQy9CTSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7SUFDcEM7SUFDQSxNQUFNQyxTQUFTLElBQUlULDZDQUFTQSxDQUFDSTtJQUU3QixNQUFNLEVBQUVNLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUVULElBQUlVLElBQUk7SUFLbkMsTUFBTUMsV0FBVyxNQUFNSixPQUFPSyxnQkFBZ0IsQ0FBQztRQUM3Q0MsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLFlBQVk7UUFDWkMsUUFBUSxDQUFDLHVEQUF1RCxFQUFFUixNQUFNLHVEQUF1RCxFQUFFQyxTQUFTOzs7Ozs7OztLQVF6SSxDQUFDO0lBQ0o7SUFFQVEsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQlA7SUFFbENWLElBQUlrQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ1osU0FBU2EsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxFQUFFQyxLQUFLQyxLQUFLLENBQUMsTUFBTUMsSUFBSSxDQUFDO0lBQUs7QUFDL0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1vcGVuYWktc3RhcnRlci8uL3BhZ2VzL2FwaS9nZW5lcmF0ZVBvc3QuanM/YzE5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgY29uZmlnID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG4gIH0pO1xuICBjb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZyk7XG5cbiAgY29uc3QgeyB0b3BpYywga2V5d29yZHMgfSA9cmVxLmJvZHk7XG5cblxuXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxuICAgIHRlbXBlcmF0dXJlOiAwLFxuICAgIG1heF90b2tlbnM6IDM2MDAsXG4gICAgcHJvbXB0OiBgV3JpdGUgYSBsb25nIGFuZCBkZXRhaWxlZCBTRU8tZnJpZW5kbHkgYmxvZyBwb3N0IGFib3V0ICR7dG9waWN9LCB0aGF0IHRhcmdldHMgdGhlIGZvbGxvd2luZyBjb21tYS1zZXBlcmF0ZWQga2V5d29yZHM6ICR7a2V5d29yZHN9XG4gICAgVGhlIGNvbnRlbnRzIHNob3VsZCBiZSBmb3JtYXR0dGVkIGluIFNFTy1mcmllbmRseSBIVE1MLlxuICAgIFRoZSByZXNwb25zZSBtdXN0IGFsc28gaW5jbHVkZSBhcHByb3ByaWF0ZSBIVE1MIHRpdGxlIGFuZCBtZXRhIGRlc2NyaXB0aW9uIGNvbnRlbnRzLlxuICAgIFRoZSByZXR1cm4gZm9ybWF0IG11c3QgYmUgc3RyaW5naWZpZWQgSlNPTiBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiAgICB7XG4gICAgICAgIFwicG9zdENvbnRlbnRcIjogcG9zdCBjb250ZW50IGhlcmVcbiAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSBnb2VzIGhlcmVcbiAgICAgICAgXCJtZXRhRGVzY3JpcHRpb25cIjogbWV0YSBkZXNjcmlwdGlvbiBnb2VzXG4gICAgfWAsXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKCdvcGVuYWkgcmVzcG9uc2UgPSAnLCByZXNwb25zZSlcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHBvc3Q6IEpTT04ucGFyc2UocmVzcG9uc2UuZGF0YS5jaG9pY2VzWzBdPy50ZXh0LnNwbGl0KFwiXFxuXCIpLmpvaW4oXCJcIikpIH0pO1xufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwidG9waWMiLCJrZXl3b3JkcyIsImJvZHkiLCJyZXNwb25zZSIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsInByb21wdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwicG9zdCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsInNwbGl0Iiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generatePost.js\n");

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