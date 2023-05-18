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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ NewPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AppLayout/AppLayout */ \"./components/AppLayout/AppLayout.js\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction NewPost(props) {\n    _s();\n    console.log(\"new page test props = \", props);\n    const [postContent, setPostContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [topic, setTopic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [keywords, setKeywords] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const response = await fetch(\"/api/generatePost\", {\n            method: \"POST\"\n        });\n        const json = await response.json();\n        console.log(\"/post/generatePost로 보낸 결과 = \", json.post.postContent);\n        setPostContent(json.post.postContent);\n    };\n    const keywordsHandler = (e)=>{\n        setKeywords(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"블로그 게시물의 주요 토픽 :\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"resize-none border border-slate-500 w-full block my-2 px-4 pu-2 \",\n                                value: topic,\n                                onChange: (e)=>setTopic(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"블로그의 주요 키워드 : \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                value: keywords,\n                                onChange: keywordsHandler\n                            }, void 0, false, {\n                                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn\",\n                        children: \"Generate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-sm p-10 \",\n                dangerouslySetInnerHTML: {\n                    __html: postContent\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(NewPost, \"3BCXWrko6USKBgqpVrWB84D/pIQ=\");\n_c = NewPost;\nNewPost.getLayout = function getLayout(page, pageProps) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_2__.AppLayout, {\n        ...pageProps,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/blog-standard/pages/post/new.js\",\n        lineNumber: 61,\n        columnNumber: 10\n    }, this);\n};\nvar _c;\n$RefreshReg$(_c, \"NewPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDeUI7O0FBRWxELFNBQVNHLFFBQVFDLEtBQUssRUFBRTs7SUFDckNDLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJGO0lBQ3RDLE1BQU0sQ0FBQ0csYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1ZLGVBQWUsT0FBT0MsSUFBTTtRQUNoQ0EsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUJBQXFCO1lBQ2hEQyxRQUFRO1FBQ1Y7UUFDQSxNQUFNQyxPQUFPLE1BQU1ILFNBQVNHLElBQUk7UUFFaENkLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NhLEtBQUtDLElBQUksQ0FBQ2IsV0FBVztRQUNqRUMsZUFBZVcsS0FBS0MsSUFBSSxDQUFDYixXQUFXO0lBQ3RDO0lBR0EsTUFBTWMsa0JBQWtCLENBQUNQLElBQU07UUFDN0JGLFlBQVlFLEVBQUVRLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QjtJQUdBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFLQyxVQUFVYjs7a0NBQ2QsOERBQUNXOzswQ0FDQyw4REFBQ0c7MENBQ0MsNEVBQUNDOzhDQUFPOzs7Ozs7Ozs7OzswQ0FFViw4REFBQ0M7Z0NBQVNDLFdBQVU7Z0NBQW1FUCxPQUFPZDtnQ0FBT3NCLFVBQVUsQ0FBQ2pCLElBQU1KLFNBQVNJLEVBQUVRLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUUvSSw4REFBQ0M7OzBDQUNDLDhEQUFDRzswQ0FDQyw0RUFBQ0E7OENBQ0MsNEVBQUNDO2tEQUFPOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdaLDhEQUFDQztnQ0FBU04sT0FBT1o7Z0NBQVVvQixVQUFVVjs7Ozs7Ozs7Ozs7O2tDQUd2Qyw4REFBQ1c7d0JBQU9DLE1BQUs7d0JBQVNILFdBQVU7a0NBQU07Ozs7Ozs7Ozs7OzswQkFLeEMsOERBQUNOO2dCQUNDTSxXQUFVO2dCQUNWSSx5QkFBeUI7b0JBQUVDLFFBQVE1QjtnQkFBWTs7Ozs7Ozs7Ozs7O0FBSXZELENBQUM7R0FyRHVCSjtLQUFBQTtBQXVEeEJBLFFBQVFpQyxTQUFTLEdBQUcsU0FBU0EsVUFBVUMsSUFBSSxFQUFFQyxTQUFTLEVBQUU7SUFDdEQscUJBQU8sOERBQUNwQyxzRUFBU0E7UUFBRSxHQUFHb0MsU0FBUztrQkFBR0Q7Ozs7OztBQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L25ldy5qcz9kYTgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYWdlQXV0aFJlcXVpcmVkIH0gZnJvbSBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwTGF5b3V0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0L0FwcExheW91dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdQb3N0KHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKFwibmV3IHBhZ2UgdGVzdCBwcm9wcyA9IFwiLCBwcm9wcyk7XG4gIGNvbnN0IFtwb3N0Q29udGVudCwgc2V0UG9zdENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0b3BpYywgc2V0VG9waWNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBba2V5d29yZHMsIHNldEtleXdvcmRzXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlUG9zdFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIi9wb3N0L2dlbmVyYXRlUG9zdOuhnCDrs7Trgrgg6rKw6rO8ID0gXCIsIGpzb24ucG9zdC5wb3N0Q29udGVudCk7XG4gICAgc2V0UG9zdENvbnRlbnQoanNvbi5wb3N0LnBvc3RDb250ZW50KTtcbiAgfTtcblxuXG4gIGNvbnN0IGtleXdvcmRzSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0S2V5d29yZHMoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzdHJvbmc+67iU66Gc6re4IOqyjOyLnOusvOydmCDso7zsmpQg7Yag7ZS9IDo8L3N0cm9uZz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgYm9yZGVyLXNsYXRlLTUwMCB3LWZ1bGwgYmxvY2sgbXktMiBweC00IHB1LTIgXCIgdmFsdWU9e3RvcGljfSBvbkNoYW5nZT17KGUpID0+IHNldFRvcGljKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8c3Ryb25nPuu4lOuhnOq3uOydmCDso7zsmpQg7YKk7JuM65OcIDogPC9zdHJvbmc+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtrZXl3b3Jkc30gb25DaGFuZ2U9e2tleXdvcmRzSGFuZGxlcn0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgR2VuZXJhdGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXNtIHAtMTAgXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0Q29udGVudCB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuTmV3UG9zdC5nZXRMYXlvdXQgPSBmdW5jdGlvbiBnZXRMYXlvdXQocGFnZSwgcGFnZVByb3BzKSB7XG4gIHJldHVybiA8QXBwTGF5b3V0IHsuLi5wYWdlUHJvcHN9PntwYWdlfTwvQXBwTGF5b3V0Pjtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoUGFnZUF1dGhSZXF1aXJlZCgoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHt9LFxuICB9O1xufSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFwcExheW91dCIsIk5ld1Bvc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0Q29udGVudCIsInNldFBvc3RDb250ZW50IiwidG9waWMiLCJzZXRUb3BpYyIsImtleXdvcmRzIiwic2V0S2V5d29yZHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwianNvbiIsInBvc3QiLCJrZXl3b3Jkc0hhbmRsZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwic3Ryb25nIiwidGV4dGFyZWEiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInR5cGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldExheW91dCIsInBhZ2UiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/new.js\n"));

/***/ })

});