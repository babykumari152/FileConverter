"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/type-conversion/ImageToPDF.js":
/*!**************************************************!*\
  !*** ./components/type-conversion/ImageToPDF.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pdf_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdf-lib */ \"./node_modules/pdf-lib/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ \"./node_modules/jspdf/dist/jspdf.es.min.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst ImageToPDF = (param)=>{\n    let { file } = param;\n    console.log(file);\n    const convert = ()=>{\n        let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        let byteString = atob(file.split(\",\")[1]);\n        //const arrayBuffer = new ArrayBuffer(byteString.length);\n        //const uint8Array = new Uint8Array(arrayBuffer);\n        const uint8Array = new TextEncoder().encode(byteString);\n        console.log(uint8Array);\n        pdf.addImage(uint8Array, \"PNG\", 10, 10, 100);\n        pdf.save(\"converted.pdf\");\n    };\n    console.log(file);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: file,\n                width: 500,\n                height: 500\n            }, void 0, false, {\n                fileName: \"C:\\\\next-demo\\\\Next-Boilerplate\\\\components\\\\type-conversion\\\\ImageToPDF.js\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: convert,\n                children: \"convert to pdf\"\n            }, void 0, false, {\n                fileName: \"C:\\\\next-demo\\\\Next-Boilerplate\\\\components\\\\type-conversion\\\\ImageToPDF.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\next-demo\\\\Next-Boilerplate\\\\components\\\\type-conversion\\\\ImageToPDF.js\",\n        lineNumber: 21,\n        columnNumber: 12\n    }, undefined);\n};\n_c = ImageToPDF;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToPDF);\nvar _c;\n$RefreshReg$(_c, \"ImageToPDF\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3R5cGUtY29udmVyc2lvbi9JbWFnZVRvUERGLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFDRDtBQUNNO0FBQ0w7QUFFMUIsTUFBTUcsYUFBYTtRQUFDLEVBQUNDLElBQUksRUFBQztJQUN0QkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLFVBQVM7UUFDWCxJQUFJQyxNQUFNLElBQUlOLDZDQUFLQTtRQUNuQixJQUFJTyxhQUFhQyxLQUFLTixLQUFLTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEMseURBQXlEO1FBQ3pELGlEQUFpRDtRQUNqRCxNQUFNQyxhQUFhLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0w7UUFDNUNKLFFBQVFDLEdBQUcsQ0FBQ007UUFDWkosSUFBSU8sUUFBUSxDQUFDSCxZQUFZLE9BQU8sSUFBSSxJQUFHO1FBQ3ZDSixJQUFJUSxJQUFJLENBQUM7SUFFYjtJQUNBWCxRQUFRQyxHQUFHLENBQUNGO0lBQ1oscUJBQU8sOERBQUNhOzswQkFBSSw4REFBQ2hCLG1EQUFLQTtnQkFBQ2lCLEtBQUtkO2dCQUFNZSxPQUFPO2dCQUFLQyxRQUFROzs7Ozs7MEJBQzlDLDhEQUFDQztnQkFBT0MsU0FBU2Y7MEJBQVM7Ozs7Ozs7Ozs7OztBQUdsQztLQWxCTUo7QUFtQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90eXBlLWNvbnZlcnNpb24vSW1hZ2VUb1BERi5qcz9iZDE3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge30gZnJvbSAncGRmLWxpYic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGpzUERGIGZyb20gJ2pzcGRmJztcclxuXHJcbmNvbnN0IEltYWdlVG9QREYgPSAoe2ZpbGV9KT0+e1xyXG4gICAgY29uc29sZS5sb2coZmlsZSlcclxuICAgIGNvbnN0IGNvbnZlcnQgPSgpPT57XHJcbiAgICAgICAgbGV0IHBkZiA9IG5ldyBqc1BERigpO1xyXG4gICAgICAgIGxldCBieXRlU3RyaW5nID0gYXRvYihmaWxlLnNwbGl0KCcsJylbMV0pO1xyXG4gICAgICAgIC8vY29uc3QgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xyXG4gICAgICAgIC8vY29uc3QgdWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcclxuICAgICAgICBjb25zdCB1aW50OEFycmF5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGJ5dGVTdHJpbmcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVpbnQ4QXJyYXkpXHJcbiAgICAgICAgcGRmLmFkZEltYWdlKHVpbnQ4QXJyYXksICdQTkcnLCAxMCwgMTAsMTAwKTtcclxuICAgICAgICBwZGYuc2F2ZSgnY29udmVydGVkLnBkZicpO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZmlsZSlcclxuICAgIHJldHVybig8ZGl2PjxJbWFnZSBzcmM9e2ZpbGV9IHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSAgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvbnZlcnR9PmNvbnZlcnQgdG8gcGRmPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+KVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvUERGOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwianNQREYiLCJJbWFnZVRvUERGIiwiZmlsZSIsImNvbnNvbGUiLCJsb2ciLCJjb252ZXJ0IiwicGRmIiwiYnl0ZVN0cmluZyIsImF0b2IiLCJzcGxpdCIsInVpbnQ4QXJyYXkiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsImFkZEltYWdlIiwic2F2ZSIsImRpdiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/type-conversion/ImageToPDF.js\n"));

/***/ })

});