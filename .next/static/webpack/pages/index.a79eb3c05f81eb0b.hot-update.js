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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"a3c5db9df393b04\",\n        children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none}\\nbody{font-family:'Open Sans', sans-serif}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\"\n    }, void 0, false, void 0, this);\n}\n_c = GlobalStyle;\nfunction Title(props) {\n    // \"props\" é a propriedade de Title (vai pegar o que estiver dentro de <Title></Title>)\n    var Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"f059564b67bf5504\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"/home/runner/aluracord/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"f059564b67bf5504\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"], \";\\nfont-size:24px;\\nfont-height:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c1 = Title;\n// backgroundColor: appConfig.theme.colors.primary[500],\nfunction HomePage() {\n    _s();\n    // const username = 'rafael-holanda';\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_3___default().useState('rafael-holanda'), 2), username = ref[0], setUsername = ref[1];\n    // console.log('stateDoReact', stateDoReact);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"/home/runner/aluracord/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundImage: 'url(https://images.pexels.com/photos/2346594/pexels-photo-2346594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',\n                    backgroundRepeat: 'no-repeat',\n                    backgroundSize: 'cover',\n                    backgroundBlendMode: 'multiply'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    styleSheet: {\n                        display: 'flex',\n                        alignItems: 'center',\n                        justifyContent: 'space-between',\n                        flexDirection: {\n                            xs: 'column',\n                            sm: 'row'\n                        },\n                        width: '100%',\n                        maxWidth: '700px',\n                        borderRadius: '5px',\n                        padding: '32px',\n                        margin: '16px',\n                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700]\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            as: \"form\",\n                            onSubmit: functi,\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                justifyContent: 'center',\n                                width: {\n                                    xs: '100%',\n                                    sm: '50%'\n                                },\n                                textAlign: 'center',\n                                marginBottom: '32px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                    tag: \"h2\",\n                                    children: \"Boas vindas de volta!\"\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    variant: \"body3\",\n                                    styleSheet: {\n                                        marginBottom: '32px',\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[300]\n                                    },\n                                    children: _config_json__WEBPACK_IMPORTED_MODULE_2__.name\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: username,\n                                    onChange: function onChange(event) {\n                                        console.log(\"O usu\\xe1rio digitou\", event.target.value);\n                                        // Onde tá o valor?\n                                        var valor = event.target.value;\n                                        // Trocar o valor da variável\n                                        // Através do React\n                                        setUsername(valor);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[600]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/runner/aluracord/pages/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                maxWidth: '200px',\n                                padding: '16px',\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800],\n                                border: '1px solid',\n                                borderColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[999],\n                                borderRadius: '10px',\n                                flex: 1,\n                                minHeight: '240px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                    styleSheet: {\n                                        borderRadius: '50%',\n                                        marginBottom: '16px'\n                                    },\n                                    src: \"https://github.com/\".concat(username, \".png\")\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 151,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    variant: \"body4\",\n                                    styleSheet: {\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[900],\n                                        padding: '3px 10px',\n                                        borderRadius: '1000px'\n                                    },\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 158,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/runner/aluracord/pages/index.js\",\n                            lineNumber: 136,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/runner/aluracord/pages/index.js\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(HomePage, \"xiGz9IQzocy0CCahc4yrr2W3SQA=\");\n_c2 = HomePage;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0R5QixHQUFHLEVBQUcsQ0FBbUIscUJBQVcsTUFBSSxDQUFiakQsUUFBUSxFQUFDLENBQUk7Ozs7Ozs0R0FFeENkLHNEQUFJO29DQUNKdUMsT0FBTyxFQUFDLENBQU87b0NBQ2Z2QixVQUFVLEVBQUUsQ0FBQzt3Q0FDWndCLEtBQUssRUFBRTVDLG9FQUFvQzt3Q0FDM0NxQyxlQUFlLEVBQUVyQyxvRUFBb0M7d0NBQ3JEa0MsT0FBTyxFQUFFLENBQVU7d0NBQ25CRCxZQUFZLEVBQUUsQ0FBUTtvQ0FDdkIsQ0FBQzs4Q0FFQWYsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoQixDQUFDO0dBMUh1QkYsUUFBUTtNQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5cbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxzdHlsZSBnbG9iYWwganN4PntgXG5cdFx0XHQqe1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBcdFx0fVxuXHRcdFx0Ym9keSB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcblx0XHRcdH1cblx0XHRcdC8qIEFwcCBmaXQgSGVpZ2h0ICovIFxuXHRcdFx0aHRtbCwgYm9keSwgI19fbmV4dCB7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0fVxuXHRcdFx0I19fbmV4dCB7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHR9XG5cdFx0XHQjX19uZXh0ID4gKiB7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHR9XG5cdFx0XHQvKiAuL0FwcCBmaXQgSGVpZ2h0ICovIFxuXHRcdGB9PC9zdHlsZT5cblx0KVxufVxuXG5mdW5jdGlvbiBUaXRsZShwcm9wcykge1xuXHQvLyBcInByb3BzXCIgw6kgYSBwcm9wcmllZGFkZSBkZSBUaXRsZSAodmFpIHBlZ2FyIG8gcXVlIGVzdGl2ZXIgZGVudHJvIGRlIDxUaXRsZT48L1RpdGxlPilcblx0Y29uc3QgVGFnID0gcHJvcHMudGFnIHx8ICdoMSc7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQke1RhZ317XG5cdFx0XHRcdFx0Y29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ119O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRmb250LWhlaWdodDogNjAwO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8vIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXHQvLyBjb25zdCB1c2VybmFtZSA9ICdyYWZhZWwtaG9sYW5kYSc7XG5cdGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJ3JhZmFlbC1ob2xhbmRhJyk7XG5cdC8vIGNvbnNvbGUubG9nKCdzdGF0ZURvUmVhY3QnLCBzdGF0ZURvUmVhY3QpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxHbG9iYWxTdHlsZSAvPlxuXHRcdFx0PEJveFxuXHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yMzQ2NTk0L3BleGVscy1waG90by0yMzQ2NTk0LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjApJyxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxCb3hcblx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG5cdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdHhzOiAnY29sdW1uJyxcblx0XHRcdFx0XHRcdFx0c206ICdyb3cnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnNzAwcHgnLFxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnNXB4JywgcGFkZGluZzogJzMycHgnLCBtYXJnaW46ICcxNnB4Jyxcblx0XHRcdFx0XHRcdGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7LyogRm9ybXVsw6FyaW8gKi99XG5cdFx0XHRcdFx0PEJveFxuXHRcdFx0XHRcdFx0YXM9XCJmb3JtXCJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXtmdW5jdGl9XG5cdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4Jyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFRpdGxlIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXRsZT5cblx0XHRcdFx0XHRcdDxUZXh0IHZhcmlhbnQ9XCJib2R5M1wiIHN0eWxlU2hlZXQ9e3sgbWFyZ2luQm90dG9tOiAnMzJweCcsIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0gfX0+XG5cdFx0XHRcdFx0XHRcdHthcHBDb25maWcubmFtZX1cblx0XHRcdFx0XHRcdDwvVGV4dD5cblxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3VzZXJuYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiTyB1c3XDoXJpbyBkaWdpdG91XCIsIGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHRcdFx0XHRcdFx0XHQvLyBPbmRlIHTDoSBvIHZhbG9yP1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIFRyb2NhciBvIHZhbG9yIGRhIHZhcmnDoXZlbFxuXHRcdFx0XHRcdFx0XHRcdC8vIEF0cmF2w6lzIGRvIFJlYWN0XG5cdFx0XHRcdFx0XHRcdFx0c2V0VXNlcm5hbWUodmFsb3IpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHsvKjxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0ZnVsbFdpZHRoXG5cdFx0XHRcdFx0XHRcdHRleHRGaWVsZENvbG9ycz17e1xuXHRcdFx0XHRcdFx0XHRcdG5ldXRyYWw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXG5cdFx0XHRcdFx0XHRcdFx0XHRtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+Ki99XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcblx0XHRcdFx0XHRcdFx0bGFiZWw9J0VudHJhcidcblx0XHRcdFx0XHRcdFx0ZnVsbFdpZHRoXG5cdFx0XHRcdFx0XHRcdGJ1dHRvbkNvbG9ycz17e1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG5cdFx0XHRcdFx0XHRcdFx0bWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcblx0XHRcdFx0XHRcdFx0XHRtYWluQ29sb3JMaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzQwMF0sXG5cdFx0XHRcdFx0XHRcdFx0bWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0ey8qIEZvcm11bMOhcmlvICovfVxuXG5cblx0XHRcdFx0XHR7LyogUGhvdG8gQXJlYSAqL31cblx0XHRcdFx0XHQ8Qm94XG5cdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogJzIwMHB4Jyxcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzE2cHgnLFxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkJyxcblx0XHRcdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcblx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTBweCcsXG5cdFx0XHRcdFx0XHRcdGZsZXg6IDEsXG5cdFx0XHRcdFx0XHRcdG1pbkhlaWdodDogJzI0MHB4Jyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcblx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiYm9keTRcIlxuXHRcdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnM3B4IDEwcHgnLFxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzEwMDBweCdcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e3VzZXJuYW1lfVxuXHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdHsvKiBQaG90byBBcmVhICovfVxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdDwvQm94PlxuXHRcdDwvPlxuXHQpO1xufVxuXG4iXSwibmFtZXMiOlsiYXBwQ29uZmlnIiwiUmVhY3QiLCJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJHbG9iYWxTdHlsZSIsIlRpdGxlIiwicHJvcHMiLCJUYWciLCJ0YWciLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwiY2hpbGRyZW4iLCJIb21lUGFnZSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImZsZXhEaXJlY3Rpb24iLCJ4cyIsInNtIiwid2lkdGgiLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcyIsIm9uU3VibWl0IiwiZnVuY3RpIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yIiwibmFtZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWxvciIsImxhYmVsIiwiZnVsbFdpZHRoIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvciIsInByaW1hcnkiLCJtYWluQ29sb3JMaWdodCIsIm1haW5Db2xvclN0cm9uZyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiZmxleCIsIm1pbkhlaWdodCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});