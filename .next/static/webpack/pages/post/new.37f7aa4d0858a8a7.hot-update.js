"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/new",{

/***/ "./pages/post/new.js":
/*!***************************!*\
  !*** ./pages/post/new.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ NewPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AppLayout/AppLayout */ \"./components/AppLayout/AppLayout.js\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction NewPost(props) {\n    _s();\n    console.log(\"new page test props = \", props);\n    const [postContent, setPostContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleClick = async ()=>{\n        const response = await fetch(\"/api/generatePost\", {\n            method: \"POST\"\n        });\n        const json = await response.json();\n        console.log(\"/post/generatePost로 보낸 결과 = \", json.post.postContent);\n        setPostContent(json.post.postContent);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"This is the new post page\"\n            }, void 0, false, {\n                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-screen h-screen overflow-hidden flex flex-col justify-center items-center relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"labe\", {\n                        children: \"Topic \"\n                    }, void 0, false, {\n                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {}, void 0, false, {\n                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"labe\", {\n                        children: \"Keywords \"\n                    }, void 0, false, {\n                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {}, void 0, false, {\n                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: handleClick,\n                        children: \"Generate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-sm p-10 \",\n                dangerouslySetInnerHTML: {\n                    __html: postContent\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(NewPost, \"6ZdQl88vWU0na5SK7lGCtg1rPZg=\");\n_c = NewPost;\nNewPost.getLayout = function getLayout(page, pageProps) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_2__.AppLayout, {\n        ...pageProps,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n        lineNumber: 43,\n        columnNumber: 10\n    }, this);\n};\nvar _c;\n$RefreshReg$(_c, \"NewPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDeUI7O0FBRWxELFNBQVNHLFFBQVFDLEtBQUssRUFBRTs7SUFDckNDLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJGO0lBQ3RDLE1BQU0sQ0FBQ0csYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNUSxjQUFjLFVBQVk7UUFDOUIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHFCQUFxQjtZQUNoREMsUUFBUTtRQUNWO1FBQ0EsTUFBTUMsT0FBTyxNQUFNSCxTQUFTRyxJQUFJO1FBRWhDUixRQUFRQyxHQUFHLENBQUMsZ0NBQWdDTyxLQUFLQyxJQUFJLENBQUNQLFdBQVc7UUFDakVDLGVBQWVLLEtBQUtDLElBQUksQ0FBQ1AsV0FBVztJQUN0QztJQUVBLHFCQUNFLDhEQUFDUTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxXQUFVOztrQ0FDZCw4REFBQ0M7a0NBQUs7Ozs7OztrQ0FDTiw4REFBQ0M7Ozs7O2tDQUNELDhEQUFDRDtrQ0FBSzs7Ozs7O2tDQUVOLDhEQUFDQzs7Ozs7a0NBRUQsOERBQUNDO3dCQUFPSCxXQUFVO3dCQUFNSSxTQUFTYjtrQ0FBYTs7Ozs7Ozs7Ozs7OzBCQUtoRCw4REFBQ007Z0JBQ0NHLFdBQVU7Z0JBQ1ZLLHlCQUF5QjtvQkFBRUMsUUFBUWpCO2dCQUFZOzs7Ozs7Ozs7Ozs7QUFJdkQsQ0FBQztHQW5DdUJKO0tBQUFBO0FBcUN4QkEsUUFBUXNCLFNBQVMsR0FBRyxTQUFTQSxVQUFVQyxJQUFJLEVBQUVDLFNBQVMsRUFBRTtJQUN0RCxxQkFBTyw4REFBQ3pCLHNFQUFTQTtRQUFFLEdBQUd5QixTQUFTO2tCQUFHRDs7Ozs7O0FBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvbmV3LmpzP2RhODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFBhZ2VBdXRoUmVxdWlyZWQgfSBmcm9tIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBMYXlvdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXQvQXBwTGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QocHJvcHMpIHtcbiAgY29uc29sZS5sb2coXCJuZXcgcGFnZSB0ZXN0IHByb3BzID0gXCIsIHByb3BzKTtcbiAgY29uc3QgW3Bvc3RDb250ZW50LCBzZXRQb3N0Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVBvc3RcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB9KTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coXCIvcG9zdC9nZW5lcmF0ZVBvc3TroZwg67O064K4IOqysOqzvCA9IFwiLCBqc29uLnBvc3QucG9zdENvbnRlbnQpO1xuICAgIHNldFBvc3RDb250ZW50KGpzb24ucG9zdC5wb3N0Q29udGVudCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRoaXMgaXMgdGhlIG5ldyBwb3N0IHBhZ2U8L2gxPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgIDxsYWJlPlRvcGljIDwvbGFiZT5cbiAgICAgICAgPHRleHRhcmVhPjwvdGV4dGFyZWE+XG4gICAgICAgIDxsYWJlPktleXdvcmRzIDwvbGFiZT5cblxuICAgICAgICA8dGV4dGFyZWE+PC90ZXh0YXJlYT5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICBHZW5lcmF0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tc20gcC0xMCBcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3RDb250ZW50IH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5OZXdQb3N0LmdldExheW91dCA9IGZ1bmN0aW9uIGdldExheW91dChwYWdlLCBwYWdlUHJvcHMpIHtcbiAgcmV0dXJuIDxBcHBMYXlvdXQgey4uLnBhZ2VQcm9wc30+e3BhZ2V9PC9BcHBMYXlvdXQ+O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhQYWdlQXV0aFJlcXVpcmVkKCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge30sXG4gIH07XG59KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXBwTGF5b3V0IiwiTmV3UG9zdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBvc3RDb250ZW50Iiwic2V0UG9zdENvbnRlbnQiLCJoYW5kbGVDbGljayIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwicG9zdCIsImRpdiIsImgxIiwiZm9ybSIsImNsYXNzTmFtZSIsImxhYmUiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldExheW91dCIsInBhZ2UiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/new.js\n"));

/***/ })

});