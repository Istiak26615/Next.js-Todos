"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/Components/Card/Page.js":
/*!*************************************!*\
  !*** ./src/Components/Card/Page.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Page(props) {\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleMouseEnter = ()=>{\n        setIsHovered(true);\n    };\n    const handleMouseLeave = ()=>{\n        setIsHovered(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-8 relative w-64 h-64 \".concat(isHovered ? \"scale-90 transition-transform\" : \"\"),\n        onMouseEnter: handleMouseEnter,\n        onMouseLeave: handleMouseLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: props.item.image,\n                alt: \"Card\",\n                className: \"w-full h-full object-cover transition-opacity duration-300 hover:opacity-50\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-todo\\\\src\\\\Components\\\\Card\\\\Page.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"text-zinc-950\",\n                                children: props.item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-todo\\\\src\\\\Components\\\\Card\\\\Page.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-zinc-500\",\n                                children: props.item.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-todo\\\\src\\\\Components\\\\Card\\\\Page.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-todo\\\\src\\\\Components\\\\Card\\\\Page.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-zinc-500\",\n                            children: [\n                                \"$\",\n                                props.item.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-todo\\\\src\\\\Components\\\\Card\\\\Page.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-todo\\\\src\\\\Components\\\\Card\\\\Page.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-todo\\\\src\\\\Components\\\\Card\\\\Page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            isHovered && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors\",\n                    children: \"Button\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-todo\\\\src\\\\Components\\\\Card\\\\Page.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-todo\\\\src\\\\Components\\\\Card\\\\Page.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-todo\\\\src\\\\Components\\\\Card\\\\Page.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL0NhcmQvUGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFFeEMsU0FBU0UsS0FBS0MsS0FBSzs7SUFDakIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1LLG1CQUFtQjtRQUN2QkQsYUFBYTtJQUNmO0lBRUEsTUFBTUUsbUJBQW1CO1FBQ3ZCRixhQUFhO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFDQ0MsV0FBVywwQkFFVixPQURDTCxZQUFZLGtDQUFrQztRQUVoRE0sY0FBY0o7UUFDZEssY0FBY0o7OzBCQUdkLDhEQUFDSztnQkFDQ0MsS0FBS1YsTUFBTVcsSUFBSSxDQUFDQyxLQUFLO2dCQUNyQkMsS0FBSTtnQkFDSlAsV0FBVTs7Ozs7OzBCQUlaLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQUdSLFdBQVU7MENBQWlCTixNQUFNVyxJQUFJLENBQUNJLEtBQUs7Ozs7OzswQ0FDL0MsOERBQUNDO2dDQUFFVixXQUFVOzBDQUFpQk4sTUFBTVcsSUFBSSxDQUFDTSxRQUFROzs7Ozs7Ozs7Ozs7a0NBRW5ELDhEQUFDWjtrQ0FDQyw0RUFBQ1c7NEJBQUVWLFdBQVU7O2dDQUFnQjtnQ0FBRU4sTUFBTVcsSUFBSSxDQUFDTyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLbERqQiwyQkFDQyw4REFBQ0k7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNhO29CQUFPYixXQUFVOzhCQUFpRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0c7R0EvQ1NQO0tBQUFBO0FBaURULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0NhcmQvUGFnZS5qcz83NWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFBhZ2UocHJvcHMpIHtcclxuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNIb3ZlcmVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0hvdmVyZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YG0tOCByZWxhdGl2ZSB3LTY0IGgtNjQgJHtcclxuICAgICAgICBpc0hvdmVyZWQgPyAnc2NhbGUtOTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0nIDogJydcclxuICAgICAgfWB9XHJcbiAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cclxuICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgPlxyXG4gICAgICB7LyogSW1hZ2UgKi99XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb3BzLml0ZW0uaW1hZ2V9XHJcbiAgICAgICAgYWx0PVwiQ2FyZFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCBob3ZlcjpvcGFjaXR5LTUwXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiBOYW1lICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC16aW5jLTk1MFwiPntwcm9wcy5pdGVtLnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwXCI+e3Byb3BzLml0ZW0uY2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwXCI+JHtwcm9wcy5pdGVtLnByaWNlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogQ2VudGVyZWQgQnV0dG9uIChDb25kaXRpb25hbCBSZW5kZXJpbmcpICovfVxyXG4gICAgICB7aXNIb3ZlcmVkICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMlwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgaG92ZXI6YmctZ3JheS0yMDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cclxuICAgICAgICAgICAgQnV0dG9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUGFnZSIsInByb3BzIiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJpbWciLCJzcmMiLCJpdGVtIiwiaW1hZ2UiLCJhbHQiLCJoNiIsInRpdGxlIiwicCIsImNhdGVnb3J5IiwicHJpY2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Card/Page.js\n"));

/***/ })

});