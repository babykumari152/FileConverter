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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pdf_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdf-lib */ \"./node_modules/pdf-lib/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ \"./node_modules/jspdf/dist/jspdf.es.min.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ImageToPDF = (param)=>{\n    let { file } = param;\n    _s();\n    const [pdfFile, setPDF] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log(file);\n    const convert = ()=>{\n        let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        let byteString = atob(file.split(\",\")[1]);\n        let uint8Array = new Uint8Array(byteString.length);\n        for(let i = 0; i < byteString.length; i++){\n            uint8Array[i] = byteString.charCodeAt(i);\n        }\n        console.log(uint8Array);\n        pdf.addImage(uint8Array, \"PNG\", 10, 10, 100, 100);\n        setPDF(pdf);\n    };\n    const download = ()=>{\n        pdfFile.save(\"converted.pdf\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: file,\n                width: 150,\n                height: 150\n            }, void 0, false, {\n                fileName: \"C:\\\\next-demo\\\\Next-Boilerplate\\\\components\\\\type-conversion\\\\ImageToPDF.js\",\n                lineNumber: 29,\n                columnNumber: 39\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: convert,\n                children: \"convert to pdf\"\n            }, void 0, false, {\n                fileName: \"C:\\\\next-demo\\\\Next-Boilerplate\\\\components\\\\type-conversion\\\\ImageToPDF.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            pdfFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: download,\n                children: \"Download\"\n            }, void 0, false, {\n                fileName: \"C:\\\\next-demo\\\\Next-Boilerplate\\\\components\\\\type-conversion\\\\ImageToPDF.js\",\n                lineNumber: 31,\n                columnNumber: 20\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\next-demo\\\\Next-Boilerplate\\\\components\\\\type-conversion\\\\ImageToPDF.js\",\n        lineNumber: 29,\n        columnNumber: 12\n    }, undefined);\n};\n_s(ImageToPDF, \"2FNvAwoTSaxslJu/9fRXODPtGvg=\");\n_c = ImageToPDF;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToPDF);\nvar _c;\n$RefreshReg$(_c, \"ImageToPDF\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3R5cGUtY29udmVyc2lvbi9JbWFnZVRvUERGLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ2Y7QUFDTTtBQUNMO0FBRTFCLE1BQU1JLGFBQWE7UUFBQyxFQUFDQyxJQUFJLEVBQUM7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBUUMsT0FBTyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNsQ08sUUFBUUMsR0FBRyxDQUFDSjtJQUNaLE1BQU1LLFVBQVM7UUFDWCxJQUFJQyxNQUFNLElBQUlSLDZDQUFLQTtRQUNuQixJQUFJUyxhQUFhQyxLQUFLUixLQUFLUyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEMsSUFBSUMsYUFBYSxJQUFJQyxXQUFXSixXQUFXSyxNQUFNO1FBRWpELElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJTixXQUFXSyxNQUFNLEVBQUVDLElBQUs7WUFDMUNILFVBQVUsQ0FBQ0csRUFBRSxHQUFHTixXQUFXTyxVQUFVLENBQUNEO1FBQ3hDO1FBQ0FWLFFBQVFDLEdBQUcsQ0FBQ007UUFDWkosSUFBSVMsUUFBUSxDQUFDTCxZQUFZLE9BQU8sSUFBSSxJQUFHLEtBQUk7UUFDM0NSLE9BQU9JO0lBR1g7SUFDQSxNQUFNVSxXQUFVO1FBQ1pmLFFBQVFnQixJQUFJLENBQUM7SUFFakI7SUFFQSxxQkFBTyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQVksOERBQUN0QixtREFBS0E7Z0JBQUN1QixLQUFLcEI7Z0JBQU1xQixPQUFPO2dCQUFLQyxRQUFROzs7Ozs7MEJBQ3BFLDhEQUFDQztnQkFBT0MsU0FBU25COzBCQUFTOzs7Ozs7WUFDekJKLHlCQUFVLDhEQUFDc0I7Z0JBQU9DLFNBQVNSOzBCQUFVOzs7Ozs7Ozs7Ozs7QUFHOUM7R0EzQk1qQjtLQUFBQTtBQTRCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3R5cGUtY29udmVyc2lvbi9JbWFnZVRvUERGLmpzP2JkMTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt9IGZyb20gJ3BkZi1saWInO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XHJcblxyXG5jb25zdCBJbWFnZVRvUERGID0gKHtmaWxlfSk9PntcclxuICAgIGNvbnN0IFtwZGZGaWxlLHNldFBERl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlKVxyXG4gICAgY29uc3QgY29udmVydCA9KCk9PntcclxuICAgICAgICBsZXQgcGRmID0gbmV3IGpzUERGKCk7XHJcbiAgICAgICAgbGV0IGJ5dGVTdHJpbmcgPSBhdG9iKGZpbGUuc3BsaXQoJywnKVsxXSk7XHJcbiAgICAgICAgbGV0IHVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlU3RyaW5nLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdWludDhBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codWludDhBcnJheSlcclxuICAgICAgICBwZGYuYWRkSW1hZ2UodWludDhBcnJheSwgJ1BORycsIDEwLCAxMCwxMDAsMTAwKTtcclxuICAgICAgICBzZXRQREYocGRmKTtcclxuICAgICAgICBcclxuICBcclxuICAgIH07XHJcbiAgICBjb25zdCBkb3dubG9hZCA9KCk9PntcclxuICAgICAgICBwZGZGaWxlLnNhdmUoJ2NvbnZlcnRlZC5wZGYnKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz48SW1hZ2Ugc3JjPXtmaWxlfSB3aWR0aD17MTUwfSBoZWlnaHQ9ezE1MH0gIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb252ZXJ0fT5jb252ZXJ0IHRvIHBkZjwvYnV0dG9uPlxyXG4gICAgICAgIHtwZGZGaWxlICYmPGJ1dHRvbiBvbkNsaWNrPXtkb3dubG9hZH0+RG93bmxvYWQ8L2J1dHRvbj59XHJcbiAgICAgICAgPC9kaXY+KVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvUERGOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJqc1BERiIsIkltYWdlVG9QREYiLCJmaWxlIiwicGRmRmlsZSIsInNldFBERiIsImNvbnNvbGUiLCJsb2ciLCJjb252ZXJ0IiwicGRmIiwiYnl0ZVN0cmluZyIsImF0b2IiLCJzcGxpdCIsInVpbnQ4QXJyYXkiLCJVaW50OEFycmF5IiwibGVuZ3RoIiwiaSIsImNoYXJDb2RlQXQiLCJhZGRJbWFnZSIsImRvd25sb2FkIiwic2F2ZSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/type-conversion/ImageToPDF.js\n"));

/***/ })

});