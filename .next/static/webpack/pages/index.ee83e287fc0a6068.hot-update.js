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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"a3c5db9df393b04\",\n        children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none}\\nbody{font-family:'Open Sans', sans-serif}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\"\n    }, void 0, false, void 0, this);\n}\n_c = GlobalStyle;\nfunction Title(props) {\n    // \"props\" é a propriedade de Title (vai pegar o que estiver dentro de <Title></Title>)\n    var Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"f059564b67bf5504\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"/home/runner/aluracord/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"f059564b67bf5504\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"], \";\\nfont-size:24px;\\nfont-height:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c1 = Title;\n// backgroundColor: appConfig.theme.colors.primary[500],\nfunction HomePage() {\n    _s();\n    // const username = 'rafael-holanda';\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_3___default().useState('rafael-holanda'), 2), username = ref[0], setUsername = ref[1];\n    // console.log('stateDoReact', stateDoReact);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"/home/runner/aluracord/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundImage: 'url(https://images.pexels.com/photos/2346594/pexels-photo-2346594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',\n                    backgroundRepeat: 'no-repeat',\n                    backgroundSize: 'cover',\n                    backgroundBlendMode: 'multiply'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    styleSheet: {\n                        display: 'flex',\n                        alignItems: 'center',\n                        justifyContent: 'space-between',\n                        flexDirection: {\n                            xs: 'column',\n                            sm: 'row'\n                        },\n                        width: '100%',\n                        maxWidth: '700px',\n                        borderRadius: '5px',\n                        padding: '32px',\n                        margin: '16px',\n                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700]\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                justifyContent: 'center',\n                                width: {\n                                    xs: '100%',\n                                    sm: '50%'\n                                },\n                                textAlign: 'center',\n                                marginBottom: '32px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                    tag: \"h2\",\n                                    children: \"Boas vindas de volta!\"\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    variant: \"body3\",\n                                    styleSheet: {\n                                        marginBottom: '32px',\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[300]\n                                    },\n                                    children: _config_json__WEBPACK_IMPORTED_MODULE_2__.name\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: username,\n                                    onChange: function onChange(event) {\n                                        console.log(\"O usu\\xe1rio digitou\", event.target.value);\n                                        // Onde tá o valor?\n                                        var valor = event.target.value;\n                                        // Trocar o valor da variável\n                                        // Através do \n                                        setUsername(valor);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[600]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/runner/aluracord/pages/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                maxWidth: '200px',\n                                padding: '16px',\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800],\n                                border: '1px solid',\n                                borderColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[999],\n                                borderRadius: '10px',\n                                flex: 1,\n                                minHeight: '240px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                    styleSheet: {\n                                        borderRadius: '50%',\n                                        marginBottom: '16px'\n                                    },\n                                    src: \"https://github.com/\".concat(username, \".png\")\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 150,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    variant: \"body4\",\n                                    styleSheet: {\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[900],\n                                        padding: '3px 10px',\n                                        borderRadius: '1000px'\n                                    },\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                                    lineNumber: 157,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/runner/aluracord/pages/index.js\",\n                            lineNumber: 135,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/runner/aluracord/pages/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/runner/aluracord/pages/index.js\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(HomePage, \"xiGz9IQzocy0CCahc4yrr2W3SQA=\");\n_c2 = HomePage;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQUksQ0FBYi9DLFFBQVEsRUFBQyxDQUFJOzs7Ozs7NEdBRXhDZCxzREFBSTtvQ0FDSnFDLE9BQU8sRUFBQyxDQUFPO29DQUNmckIsVUFBVSxFQUFFLENBQUM7d0NBQ1pzQixLQUFLLEVBQUUxQyxvRUFBb0M7d0NBQzNDcUMsZUFBZSxFQUFFckMsb0VBQW9DO3dDQUNyRGtDLE9BQU8sRUFBRSxDQUFVO3dDQUNuQkQsWUFBWSxFQUFFLENBQVE7b0NBQ3ZCLENBQUM7OENBRUFmLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEIsQ0FBQztHQXpIdUJGLFFBQVE7TUFBUkEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuXG5mdW5jdGlvbiBHbG9iYWxTdHlsZSgpIHtcblx0cmV0dXJuIChcblx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXHRcdFx0Kntcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuICAgICAgXHRcdH1cblx0XHRcdGJvZHkge1xuXHRcdFx0XHRmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG5cdFx0XHR9XG5cdFx0XHQvKiBBcHAgZml0IEhlaWdodCAqLyBcblx0XHRcdGh0bWwsIGJvZHksICNfX25leHQge1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleDogMTtcblx0XHRcdH1cblx0XHRcdCNfX25leHQge1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0fVxuXHRcdFx0I19fbmV4dCA+ICoge1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0fVxuXHRcdFx0LyogLi9BcHAgZml0IEhlaWdodCAqLyBcblx0XHRgfTwvc3R5bGU+XG5cdClcbn1cblxuZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcblx0Ly8gXCJwcm9wc1wiIMOpIGEgcHJvcHJpZWRhZGUgZGUgVGl0bGUgKHZhaSBwZWdhciBvIHF1ZSBlc3RpdmVyIGRlbnRybyBkZSA8VGl0bGU+PC9UaXRsZT4pXG5cdGNvbnN0IFRhZyA9IHByb3BzLnRhZyB8fCAnaDEnO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0JHtUYWd9e1xuXHRcdFx0XHRcdGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddfTtcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0Zm9udC1oZWlnaHQ6IDYwMDtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvPlxuXHQpO1xufVxuXG4vLyBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcblx0Ly8gY29uc3QgdXNlcm5hbWUgPSAncmFmYWVsLWhvbGFuZGEnO1xuXHRjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCdyYWZhZWwtaG9sYW5kYScpO1xuXHQvLyBjb25zb2xlLmxvZygnc3RhdGVEb1JlYWN0Jywgc3RhdGVEb1JlYWN0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8R2xvYmFsU3R5bGUgLz5cblx0XHRcdDxCb3hcblx0XHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjM0NjU5NC9wZXhlbHMtcGhvdG8tMjM0NjU5NC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD03NTAmdz0xMjYwKScsXG5cdFx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8Qm94XG5cdFx0XHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuXHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHR4czogJ2NvbHVtbicsXG5cdFx0XHRcdFx0XHRcdHNtOiAncm93Jyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLCBtYXhXaWR0aDogJzcwMHB4Jyxcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXG5cdFx0XHRcdFx0XHRib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0ey8qIEZvcm11bMOhcmlvICovfVxuXHRcdFx0XHRcdDxCb3hcblx0XHRcdFx0XHRcdGFzPVwiZm9ybVwiXG5cdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4Jyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFRpdGxlIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXRsZT5cblx0XHRcdFx0XHRcdDxUZXh0IHZhcmlhbnQ9XCJib2R5M1wiIHN0eWxlU2hlZXQ9e3sgbWFyZ2luQm90dG9tOiAnMzJweCcsIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0gfX0+XG5cdFx0XHRcdFx0XHRcdHthcHBDb25maWcubmFtZX1cblx0XHRcdFx0XHRcdDwvVGV4dD5cblxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3VzZXJuYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiTyB1c3XDoXJpbyBkaWdpdG91XCIsIGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHRcdFx0XHRcdFx0XHQvLyBPbmRlIHTDoSBvIHZhbG9yP1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIFRyb2NhciBvIHZhbG9yIGRhIHZhcmnDoXZlbFxuXHRcdFx0XHRcdFx0XHRcdC8vIEF0cmF2w6lzIGRvIFxuXHRcdFx0XHRcdFx0XHRcdHNldFVzZXJuYW1lKHZhbG9yKTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7Lyo8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdGZ1bGxXaWR0aFxuXHRcdFx0XHRcdFx0XHR0ZXh0RmllbGRDb2xvcnM9e3tcblx0XHRcdFx0XHRcdFx0XHRuZXV0cmFsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcblx0XHRcdFx0XHRcdFx0XHRcdG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWFpbkNvbG9ySGlnaGxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPiovfVxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXG5cdFx0XHRcdFx0XHRcdGxhYmVsPSdFbnRyYXInXG5cdFx0XHRcdFx0XHRcdGZ1bGxXaWR0aFxuXHRcdFx0XHRcdFx0XHRidXR0b25Db2xvcnM9e3tcblx0XHRcdFx0XHRcdFx0XHRjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuXHRcdFx0XHRcdFx0XHRcdG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG5cdFx0XHRcdFx0XHRcdFx0bWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxuXHRcdFx0XHRcdFx0XHRcdG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF0sXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdHsvKiBGb3JtdWzDoXJpbyAqL31cblxuXG5cdFx0XHRcdFx0ey8qIFBob3RvIEFyZWEgKi99XG5cdFx0XHRcdFx0PEJveFxuXHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0bWF4V2lkdGg6ICcyMDBweCcsXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxNnB4Jyxcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCcsXG5cdFx0XHRcdFx0XHRcdGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXG5cdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzEwcHgnLFxuXHRcdFx0XHRcdFx0XHRmbGV4OiAxLFxuXHRcdFx0XHRcdFx0XHRtaW5IZWlnaHQ6ICcyNDBweCcsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxNnB4Jyxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0c3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImJvZHk0XCJcblx0XHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzNweCAxMHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICcxMDAwcHgnXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHt1c2VybmFtZX1cblx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHR7LyogUGhvdG8gQXJlYSAqL31cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHQ8L0JveD5cblx0XHQ8Lz5cblx0KTtcbn1cblxuIl0sIm5hbWVzIjpbImFwcENvbmZpZyIsIlJlYWN0IiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiR2xvYmFsU3R5bGUiLCJUaXRsZSIsInByb3BzIiwiVGFnIiwidGFnIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsImNoaWxkcmVuIiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJmbGV4RGlyZWN0aW9uIiwieHMiLCJzbSIsIndpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZENvbG9yIiwiYXMiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3IiLCJuYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbG9yIiwibGFiZWwiLCJmdWxsV2lkdGgiLCJidXR0b25Db2xvcnMiLCJjb250cmFzdENvbG9yIiwibWFpbkNvbG9yIiwicHJpbWFyeSIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});