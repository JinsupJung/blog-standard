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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ NewPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AppLayout/AppLayout */ \"./components/AppLayout/AppLayout.js\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction NewPost(props) {\n    _s();\n    console.log(\"new page test props = \", props);\n    const [postContent, setPostContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [topic, setTopic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [keywords, setKeywords] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const response = await fetch(\"/api/generatePost\", {\n            method: \"POST\"\n        });\n        const json = await response.json();\n        console.log(\"/post/generatePost로 보낸 결과 = \", json.post.postContent);\n        setPostContent(json.post.postContent);\n    };\n    const keywordsHandler = (e)=>{\n        setKeywords(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"블로그 게시물의 주요 토픽 :\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"resize-none border border-slate-500 w-full block my-2 px-4 py-2 \",\n                                value: topic,\n                                onChange: (e)=>setTopic(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"블로그의 주요 키워드 : \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"resize-none border border-slate-500 w-full block my-2 px-4 py-2 \",\n                                value: keywords,\n                                onChange: keywordsHandler\n                            }, void 0, false, {\n                                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn\",\n                        children: \"Generate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-sm p-10 \",\n                dangerouslySetInnerHTML: {\n                    __html: postContent\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(NewPost, \"3BCXWrko6USKBgqpVrWB84D/pIQ=\");\n_c = NewPost;\nNewPost.getLayout = function getLayout(page, pageProps) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_2__.AppLayout, {\n        ...pageProps,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n        lineNumber: 61,\n        columnNumber: 10\n    }, this);\n};\nvar _c;\n$RefreshReg$(_c, \"NewPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDeUI7O0FBRWxELFNBQVNHLFFBQVFDLEtBQUssRUFBRTs7SUFDckNDLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJGO0lBQ3RDLE1BQU0sQ0FBQ0csYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1ZLGVBQWUsT0FBT0MsSUFBTTtRQUNoQ0EsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUJBQXFCO1lBQ2hEQyxRQUFRO1FBQ1Y7UUFDQSxNQUFNQyxPQUFPLE1BQU1ILFNBQVNHLElBQUk7UUFFaENkLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NhLEtBQUtDLElBQUksQ0FBQ2IsV0FBVztRQUNqRUMsZUFBZVcsS0FBS0MsSUFBSSxDQUFDYixXQUFXO0lBQ3RDO0lBR0EsTUFBTWMsa0JBQWtCLENBQUNQLElBQU07UUFDN0JGLFlBQVlFLEVBQUVRLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QjtJQUdBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFLQyxVQUFVYjs7a0NBQ2QsOERBQUNXOzswQ0FDQyw4REFBQ0c7MENBQ0MsNEVBQUNDOzhDQUFPOzs7Ozs7Ozs7OzswQ0FFViw4REFBQ0M7Z0NBQVNDLFdBQVU7Z0NBQW1FUCxPQUFPZDtnQ0FBT3NCLFVBQVUsQ0FBQ2pCLElBQU1KLFNBQVNJLEVBQUVRLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUUvSSw4REFBQ0M7OzBDQUNDLDhEQUFDRzswQ0FDQyw0RUFBQ0E7OENBQ0MsNEVBQUNDO2tEQUFPOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdaLDhEQUFDQztnQ0FBU0MsV0FBVTtnQ0FBbUVQLE9BQU9aO2dDQUFVb0IsVUFBVVY7Ozs7Ozs7Ozs7OztrQ0FHcEgsOERBQUNXO3dCQUFPQyxNQUFLO3dCQUFTSCxXQUFVO2tDQUFNOzs7Ozs7Ozs7Ozs7MEJBS3hDLDhEQUFDTjtnQkFDQ00sV0FBVTtnQkFDVkkseUJBQXlCO29CQUFFQyxRQUFRNUI7Z0JBQVk7Ozs7Ozs7Ozs7OztBQUl2RCxDQUFDO0dBckR1Qko7S0FBQUE7QUF1RHhCQSxRQUFRaUMsU0FBUyxHQUFHLFNBQVNBLFVBQVVDLElBQUksRUFBRUMsU0FBUyxFQUFFO0lBQ3RELHFCQUFPLDhEQUFDcEMsc0VBQVNBO1FBQUUsR0FBR29DLFNBQVM7a0JBQUdEOzs7Ozs7QUFDcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9uZXcuanM/ZGE4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUGFnZUF1dGhSZXF1aXJlZCB9IGZyb20gXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcExheW91dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FwcExheW91dC9BcHBMYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UG9zdChwcm9wcykge1xuICBjb25zb2xlLmxvZyhcIm5ldyBwYWdlIHRlc3QgcHJvcHMgPSBcIiwgcHJvcHMpO1xuICBjb25zdCBbcG9zdENvbnRlbnQsIHNldFBvc3RDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdG9waWMsIHNldFRvcGljXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2tleXdvcmRzLCBzZXRLZXl3b3Jkc10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVBvc3RcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB9KTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coXCIvcG9zdC9nZW5lcmF0ZVBvc3TroZwg67O064K4IOqysOqzvCA9IFwiLCBqc29uLnBvc3QucG9zdENvbnRlbnQpO1xuICAgIHNldFBvc3RDb250ZW50KGpzb24ucG9zdC5wb3N0Q29udGVudCk7XG4gIH07XG5cblxuICBjb25zdCBrZXl3b3Jkc0hhbmRsZXIgPSAoZSkgPT4ge1xuICAgIHNldEtleXdvcmRzKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8c3Ryb25nPuu4lOuhnOq3uCDqsozsi5zrrLzsnZgg7KO87JqUIO2GoO2UvSA6PC9zdHJvbmc+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIGJvcmRlci1zbGF0ZS01MDAgdy1mdWxsIGJsb2NrIG15LTIgcHgtNCBweS0yIFwiIHZhbHVlPXt0b3BpY30gb25DaGFuZ2U9eyhlKSA9PiBzZXRUb3BpYyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPHN0cm9uZz7ruJTroZzqt7jsnZgg7KO87JqUIO2CpOybjOuTnCA6IDwvc3Ryb25nPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgYm9yZGVyLXNsYXRlLTUwMCB3LWZ1bGwgYmxvY2sgbXktMiBweC00IHB5LTIgXCIgdmFsdWU9e2tleXdvcmRzfSBvbkNoYW5nZT17a2V5d29yZHNIYW5kbGVyfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICBHZW5lcmF0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tc20gcC0xMCBcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3RDb250ZW50IH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5OZXdQb3N0LmdldExheW91dCA9IGZ1bmN0aW9uIGdldExheW91dChwYWdlLCBwYWdlUHJvcHMpIHtcbiAgcmV0dXJuIDxBcHBMYXlvdXQgey4uLnBhZ2VQcm9wc30+e3BhZ2V9PC9BcHBMYXlvdXQ+O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhQYWdlQXV0aFJlcXVpcmVkKCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge30sXG4gIH07XG59KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXBwTGF5b3V0IiwiTmV3UG9zdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBvc3RDb250ZW50Iiwic2V0UG9zdENvbnRlbnQiLCJ0b3BpYyIsInNldFRvcGljIiwia2V5d29yZHMiLCJzZXRLZXl3b3JkcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwicG9zdCIsImtleXdvcmRzSGFuZGxlciIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJzdHJvbmciLCJ0ZXh0YXJlYSIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwidHlwZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0TGF5b3V0IiwicGFnZSIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/new.js\n"));

/***/ })

});