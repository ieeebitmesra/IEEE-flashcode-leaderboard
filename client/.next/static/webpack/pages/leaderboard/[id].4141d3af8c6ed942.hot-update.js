"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/leaderboard/[id]",{

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n// user = {\n//     \"rank\": 21,\n//     \"name\": \"mahakshah252432\",\n//     \"total_score\": 0.5,\n//     \"total_penalty\": 117,\n//     \"problems\": {\n//          \"solved_time\",\n//          \"penalty\" [failed attempts * problem_penalty]\n//          \"verdict\"\n//      }\n// }\nvar User = function(param) {\n    var user = param.user;\n    console.log(user);\n    // console.log(Object.keys(user.problems)[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            user.rank,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sarvjot/programming/dev/projects/flashcode-frontend/components/User.js\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            user.name,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sarvjot/programming/dev/projects/flashcode-frontend/components/User.js\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            user.total_score,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sarvjot/programming/dev/projects/flashcode-frontend/components/User.js\",\n                        lineNumber: 22,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            user.total_penalty,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sarvjot/programming/dev/projects/flashcode-frontend/components/User.js\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sarvjot/programming/dev/projects/flashcode-frontend/components/User.js\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Object.values(user.problems).map(function(param) {\n                    var solved_time = param.solved_time, failed_attempts = param.failed_attempts, problem_penalty = param.problem_penalty, verdict = param.verdict;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    solved_time === null ? NA : solved_time,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sarvjot/programming/dev/projects/flashcode-frontend/components/User.js\",\n                                lineNumber: 30,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    failed_attempts * problem_penalty,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sarvjot/programming/dev/projects/flashcode-frontend/components/User.js\",\n                                lineNumber: 31,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    verdict,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sarvjot/programming/dev/projects/flashcode-frontend/components/User.js\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true);\n                })\n            }, void 0, false, {\n                fileName: \"/home/sarvjot/programming/dev/projects/flashcode-frontend/components/User.js\",\n                lineNumber: 25,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = User;\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFFMUIsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixpQ0FBaUM7QUFDakMsMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1QixvQkFBb0I7QUFDcEIsMEJBQTBCO0FBQzFCLHlEQUF5RDtBQUN6RCxxQkFBcUI7QUFDckIsU0FBUztBQUNULElBQUk7QUFDRyxJQUFNQyxJQUFJLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJO0lBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7SUFDckIsOENBQThDO0lBQzlDLHFCQUNDOzswQkFDQyw4REFBQ0csS0FBRzs7a0NBQ0gsOERBQUNDLE1BQUk7OzRCQUFFSixJQUFJLENBQUNLLElBQUk7NEJBQUMsR0FBQzs7Ozs7OzZCQUFPO2tDQUN6Qiw4REFBQ0QsTUFBSTs7NEJBQUVKLElBQUksQ0FBQ00sSUFBSTs0QkFBQyxHQUFDOzs7Ozs7NkJBQU87a0NBQ3pCLDhEQUFDRixNQUFJOzs0QkFBRUosSUFBSSxDQUFDTyxXQUFXOzRCQUFDLEdBQUM7Ozs7Ozs2QkFBTztrQ0FDaEMsOERBQUNILE1BQUk7OzRCQUFFSixJQUFJLENBQUNRLGFBQWE7NEJBQUMsR0FBQzs7Ozs7OzZCQUFPOzs7Ozs7cUJBQzdCOzBCQUNOLDhEQUFDTCxLQUFHOzBCQUVGTSxNQUFNLENBQUNDLE1BQU0sQ0FBQ1YsSUFBSSxDQUFDVyxRQUFRLENBQUMsQ0FBQ0MsR0FBRyxDQUMvQjt3QkFBR0MsV0FBVyxTQUFYQSxXQUFXLEVBQUVDLGVBQWUsU0FBZkEsZUFBZSxFQUFFQyxlQUFlLFNBQWZBLGVBQWUsRUFBRUMsT0FBTyxTQUFQQSxPQUFPO3lDQUN4RDs7MENBQ0MsOERBQUNaLE1BQUk7O29DQUFFUyxXQUFXLEtBQUssSUFBSSxHQUFHSSxFQUFFLEdBQUdKLFdBQVc7b0NBQUMsR0FBQzs7Ozs7O3FDQUFPOzBDQUN2RCw4REFBQ1QsTUFBSTs7b0NBQUVVLGVBQWUsR0FBR0MsZUFBZTtvQ0FBQyxHQUFDOzs7Ozs7cUNBQU87MENBQ2pELDhEQUFDWCxNQUFJOztvQ0FBRVksT0FBTztvQ0FBQyxHQUFDOzs7Ozs7cUNBQU87O29DQUNyQjtpQkFDSCxDQUNEOzs7OztxQkFHRzs7b0JBQ0osQ0FDRjtBQUNILENBQUMsQ0FBQztBQTNCV2pCLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyLmpzP2Q2ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyB1c2VyID0ge1xuLy8gICAgIFwicmFua1wiOiAyMSxcbi8vICAgICBcIm5hbWVcIjogXCJtYWhha3NoYWgyNTI0MzJcIixcbi8vICAgICBcInRvdGFsX3Njb3JlXCI6IDAuNSxcbi8vICAgICBcInRvdGFsX3BlbmFsdHlcIjogMTE3LFxuLy8gICAgIFwicHJvYmxlbXNcIjoge1xuLy8gICAgICAgICAgXCJzb2x2ZWRfdGltZVwiLFxuLy8gICAgICAgICAgXCJwZW5hbHR5XCIgW2ZhaWxlZCBhdHRlbXB0cyAqIHByb2JsZW1fcGVuYWx0eV1cbi8vICAgICAgICAgIFwidmVyZGljdFwiXG4vLyAgICAgIH1cbi8vIH1cbmV4cG9ydCBjb25zdCBVc2VyID0gKHsgdXNlciB9KSA9PiB7XG4gICAgY29uc29sZS5sb2codXNlcik7XG5cdC8vIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHVzZXIucHJvYmxlbXMpWzBdKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHNwYW4+e3VzZXIucmFua30gPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj57dXNlci5uYW1lfSA8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPnt1c2VyLnRvdGFsX3Njb3JlfSA8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPnt1c2VyLnRvdGFsX3BlbmFsdHl9IDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdE9iamVjdC52YWx1ZXModXNlci5wcm9ibGVtcykubWFwKFxuXHRcdFx0XHRcdFx0KHsgc29sdmVkX3RpbWUsIGZhaWxlZF9hdHRlbXB0cywgcHJvYmxlbV9wZW5hbHR5LCB2ZXJkaWN0IH0pID0+IChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57c29sdmVkX3RpbWUgPT09IG51bGwgPyBOQSA6IHNvbHZlZF90aW1lfSA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2ZhaWxlZF9hdHRlbXB0cyAqIHByb2JsZW1fcGVuYWx0eX0gPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPnt2ZXJkaWN0fSA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuICAgICAgICAgICAgICAgIHsvKiBEZWJ1ZyAqL31cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlVzZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRpdiIsInNwYW4iLCJyYW5rIiwibmFtZSIsInRvdGFsX3Njb3JlIiwidG90YWxfcGVuYWx0eSIsIk9iamVjdCIsInZhbHVlcyIsInByb2JsZW1zIiwibWFwIiwic29sdmVkX3RpbWUiLCJmYWlsZWRfYXR0ZW1wdHMiLCJwcm9ibGVtX3BlbmFsdHkiLCJ2ZXJkaWN0IiwiTkEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/User.js\n"));

/***/ })

});