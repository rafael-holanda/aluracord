"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ2NzA4MywiZXhwIjoxOTU5MDQzMDgzfQ.DbnKXZzN5lXRNIlXD2cAlPetDonbqGQUhfSYFNdqAmw';\nvar SUPABASE_URL = 'https://rmfupwtajnwivlurwcav.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_5__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\nfunction ChatPage() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            // id: listaDeMensagens.length + 1,\n            de: usuarioLogado,\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagens').insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log('Criando mensagem: ', data);\n            setListaDeMensagens([\n                data[0], \n            ].concat(_toConsumableArray(listaDeMensagens)));\n        });\n        setMensagem('');\n    };\n    _s();\n    var routing = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var usuarioLogado = routing.query.username;\n    console.log('routing.query', routing.query);\n    console.log('usuarioLogado', usuarioLogado);\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    // Sua lógica vai aqui\n    // Usuário\n    // - usuário digita no campo 'textarea'\n    // - aperta enter para enviar\n    // - tem que adicionar o texto na listagem\n    // Dev\n    // [x] Campo Criado\n    // [ ] Vamos usar o onChange usa o useState (ter if pra caso seja enter para limpar a variável)\n    // [ ] Lista de mensagens\n    // ./Sua lógica vai aqui\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function() {\n        supabaseClient.from('mensagens').select('*').order('id', {\n            ascending: false\n        }).then(function(param) {\n            var data = param.data;\n            console.log('Dados da consulta: ', data);\n            setListaDeMensagens(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundImage: \"url(https://images.pexels.com/photos/2346594/pexels-photo-2346594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/runner/aluracord/pages/chat.js\",\n                    lineNumber: 90,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"/home/runner/aluracord/pages/chat.js\",\n                            lineNumber: 104,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    // console.log(event);\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: '100%',\n                                    border: '0',\n                                    resize: 'none',\n                                    borderRadius: '5px',\n                                    padding: '6px 8px',\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: '12px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/runner/aluracord/pages/chat.js\",\n                                lineNumber: 120,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/runner/aluracord/pages/chat.js\",\n                            lineNumber: 113,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/runner/aluracord/pages/chat.js\",\n                    lineNumber: 91,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/runner/aluracord/pages/chat.js\",\n            lineNumber: 76,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/runner/aluracord/pages/chat.js\",\n        lineNumber: 68,\n        columnNumber: 3\n    }, this));\n};\n_s(ChatPage, \"Bbde7eT/J1H6A8cOHGfDuS2OwOU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/runner/aluracord/pages/chat.js\",\n                    lineNumber: 157,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"/home/runner/aluracord/pages/chat.js\",\n                    lineNumber: 160,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/runner/aluracord/pages/chat.js\",\n            lineNumber: 156,\n            columnNumber: 4\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props.listaDeMensagens);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/\".concat(mensagem.de, \".png\")\n                            }, void 0, false, {\n                                fileName: \"/home/runner/aluracord/pages/chat.js\",\n                                lineNumber: 204,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"/home/runner/aluracord/pages/chat.js\",\n                                lineNumber: 214,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/home/runner/aluracord/pages/chat.js\",\n                                lineNumber: 217,\n                                columnNumber: 8\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/runner/aluracord/pages/chat.js\",\n                        lineNumber: 199,\n                        columnNumber: 7\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"/home/runner/aluracord/pages/chat.js\",\n                lineNumber: 187,\n                columnNumber: 6\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/runner/aluracord/pages/chat.js\",\n        lineNumber: 174,\n        columnNumber: 3\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFLEVBQUMsQ0FBSTs7Ozs7O3dHQUUzQ2Ysc0RBQUk7Z0NBQUNpRixHQUFHLEVBQUMsQ0FBUTswQ0FDaEJuRSxRQUFRLENBQUNDLEVBQUU7Ozs7Ozt3R0FFWmYsc0RBQUk7Z0NBQ0ptQyxVQUFVLEVBQUUsQ0FBQztvQ0FDWm1ELFFBQVEsRUFBRSxDQUFNO29DQUNoQkMsVUFBVSxFQUFFLENBQUs7b0NBQ2pCNUMsS0FBSyxFQUFFdEMsb0VBQW9DO2dDQUM1QyxDQUFDO2dDQUNENEUsR0FBRyxFQUFDLENBQU07MENBRVIsR0FBRyxDQUFDTyxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O29CQUdoQzNFLFFBQVEsQ0FBQ0csS0FBSzs7ZUF4Q1ZILFFBQVEsQ0FBQzRFLEVBQUU7Ozs7O1FBMkNuQixDQUFDOzs7Ozs7QUFJSixDQUFDO01BaEVRaEMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtjcmVhdGVDbGllbnR9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuY29uc3QgU1VQQUJBU0VfQU5PTl9LRVkgPSAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnliMnhsSWpvaVlXNXZiaUlzSW1saGRDSTZNVFkwTXpRMk56QTRNeXdpWlhod0lqb3hPVFU1TURRek1EZ3pmUS5EYm5LWFp6TjVsWFJOSWxYRDJjQWxQZXREb25icUdRVWhmU1lGTmRxQW13JztcbmNvbnN0IFNVUEFCQVNFX1VSTCA9ICdodHRwczovL3JtZnVwd3Rham53aXZsdXJ3Y2F2LnN1cGFiYXNlLmNvJztcbmNvbnN0IHN1cGFiYXNlQ2xpZW50ID0gY3JlYXRlQ2xpZW50KFNVUEFCQVNFX1VSTCwgU1VQQUJBU0VfQU5PTl9LRVkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xuXHRjb25zdCByb3V0aW5nID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IHVzdWFyaW9Mb2dhZG8gPSByb3V0aW5nLnF1ZXJ5LnVzZXJuYW1lO1xuXHRjb25zb2xlLmxvZygncm91dGluZy5xdWVyeScscm91dGluZy5xdWVyeSk7XG5cdGNvbnNvbGUubG9nKCd1c3VhcmlvTG9nYWRvJywgdXN1YXJpb0xvZ2Fkbyk7XG5cdGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gUmVhY3QudXNlU3RhdGUoJycpO1xuXHRjb25zdCBbbGlzdGFEZU1lbnNhZ2Vucywgc2V0TGlzdGFEZU1lbnNhZ2Vuc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cblx0Ly8gU3VhIGzDs2dpY2EgdmFpIGFxdWlcblx0Ly8gVXN1w6FyaW9cblx0Ly8gLSB1c3XDoXJpbyBkaWdpdGEgbm8gY2FtcG8gJ3RleHRhcmVhJ1xuXHQvLyAtIGFwZXJ0YSBlbnRlciBwYXJhIGVudmlhclxuXHQvLyAtIHRlbSBxdWUgYWRpY2lvbmFyIG8gdGV4dG8gbmEgbGlzdGFnZW1cblxuXHQvLyBEZXZcblx0Ly8gW3hdIENhbXBvIENyaWFkb1xuXHQvLyBbIF0gVmFtb3MgdXNhciBvIG9uQ2hhbmdlIHVzYSBvIHVzZVN0YXRlICh0ZXIgaWYgcHJhIGNhc28gc2VqYSBlbnRlciBwYXJhIGxpbXBhciBhIHZhcmnDoXZlbClcblx0Ly8gWyBdIExpc3RhIGRlIG1lbnNhZ2Vuc1xuXHQvLyAuL1N1YSBsw7NnaWNhIHZhaSBhcXVpXG5cblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblx0XHRzdXBhYmFzZUNsaWVudFxuXHRcdFx0LmZyb20oJ21lbnNhZ2VucycpXG5cdFx0XHQuc2VsZWN0KCcqJylcblx0XHRcdC5vcmRlcignaWQnLCB7YXNjZW5kaW5nOiBmYWxzZX0pXG5cdFx0XHQudGhlbigoe2RhdGF9KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdEYWRvcyBkYSBjb25zdWx0YTogJywgZGF0YSk7XG5cdFx0XHRcdHNldExpc3RhRGVNZW5zYWdlbnMoZGF0YSk7XG5cdFx0XHR9KTtcblx0fSwgW10pO1xuXHRcblx0XG5cdGZ1bmN0aW9uIGhhbmRsZU5vdmFNZW5zYWdlbShub3ZhTWVuc2FnZW0pIHtcblx0XHRjb25zdCBtZW5zYWdlbSA9IHtcblx0XHRcdC8vIGlkOiBsaXN0YURlTWVuc2FnZW5zLmxlbmd0aCArIDEsXG5cdFx0XHRkZTogdXN1YXJpb0xvZ2Fkbyxcblx0XHRcdHRleHRvOiBub3ZhTWVuc2FnZW1cblx0XHR9O1xuXG5cdFx0c3VwYWJhc2VDbGllbnRcblx0XHRcdC5mcm9tKCdtZW5zYWdlbnMnKVxuXHRcdFx0Lmluc2VydChbXG5cdFx0XHRcdG1lbnNhZ2VtXG5cdFx0XHRdKVxuXHRcdFx0LnRoZW4oKHtkYXRhfSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnQ3JpYW5kbyBtZW5zYWdlbTogJywgZGF0YSk7XG5cdFx0XHRcdHNldExpc3RhRGVNZW5zYWdlbnMoW1xuXHRcdFx0XHRcdGRhdGFbMF0sXG5cdFx0XHRcdFx0Li4ubGlzdGFEZU1lbnNhZ2VucyxcdFx0XHRcblx0XHRcdFx0XSk7XG5cdFx0XHR9KTtcblxuXHRcdFxuXHRcdHNldE1lbnNhZ2VtKCcnKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PEJveFxuXHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yMzQ2NTk0L3BleGVscy1waG90by0yMzQ2NTk0LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjApYCxcblx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxuXHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ11cblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PEJveFxuXHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXHRcdFx0XHRcdGZsZXg6IDEsXG5cdFx0XHRcdFx0Ym94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzVweCcsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG5cdFx0XHRcdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0XHRcdFx0bWF4V2lkdGg6ICc5NSUnLFxuXHRcdFx0XHRcdG1heEhlaWdodDogJzk1dmgnLFxuXHRcdFx0XHRcdHBhZGRpbmc6ICczMnB4Jyxcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8Qm94XG5cdFx0XHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRmbGV4OiAxLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnODAlJyxcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxuXHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc1cHgnLFxuXHRcdFx0XHRcdFx0cGFkZGluZzogJzE2cHgnLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblxuXHRcdFx0XHRcdDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2xpc3RhRGVNZW5zYWdlbnN9IC8+XG5cdFx0XHRcdFx0ey8qe2xpc3RhRGVNZW5zYWdlbnMubWFwKChtZW5zYWdlbUF0dWFsKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhtZW5zYWdlbUF0dWFsKTtcblx0XHRcdFx0XHRcdHJldHVybihcblx0XHRcdFx0XHRcdFx0PGxpIGtleT17bWVuc2FnZW1BdHVhbC5pZH0+XG5cdFx0XHRcdFx0XHRcdFx0e21lbnNhZ2VtQXR1YWwuZGV9OiB7bWVuc2FnZW1BdHVhbC50ZXh0b31cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX0qL31cblx0XHRcdFx0XHQ8Qm94XG5cdFx0XHRcdFx0XHRhcz1cImZvcm1cIlxuXHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXttZW5zYWdlbX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRzZXRNZW5zYWdlbSh2YWxvcik7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdG9uS2V5UHJlc3M9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVOb3ZhTWVuc2FnZW0obWVuc2FnZW0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0XHRcdFx0XHRib3JkZXI6ICcwJyxcblx0XHRcdFx0XHRcdFx0XHRyZXNpemU6ICdub25lJyxcblx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc1cHgnLFxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICc2cHggOHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogJzEycHgnLFxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdDwvQm94PlxuXHRcdDwvQm94PlxuXHQpXG59XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJveCBzdHlsZVNoZWV0PXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpbkJvdHRvbTogJzE2cHgnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19ID5cblx0XHRcdFx0PFRleHQgdmFyaWFudD0naGVhZGluZzUnPlxuXHRcdFx0XHRcdENoYXRcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHR2YXJpYW50PSd0ZXJ0aWFyeSdcblx0XHRcdFx0XHRjb2xvclZhcmlhbnQ9J25ldXRyYWwnXG5cdFx0XHRcdFx0bGFiZWw9J0xvZ291dCdcblx0XHRcdFx0XHRocmVmPVwiL1wiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0JveD5cblx0XHQ8Lz5cblx0KVxufVxuXG5mdW5jdGlvbiBNZXNzYWdlTGlzdChwcm9wcykge1xuXHRjb25zb2xlLmxvZyhwcm9wcy5saXN0YURlTWVuc2FnZW5zKTtcblx0cmV0dXJuIChcblx0XHQ8Qm94XG5cdFx0XHR0YWc9XCJ1bFwiXG5cdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdG92ZXJmbG93OiAnc2Nyb2xsJyxcblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxuXHRcdFx0XHRmbGV4OiAxLFxuXHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcblx0XHRcdFx0bWFyZ2luQm90dG9tOiAnMTZweCcsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtwcm9wcy5tZW5zYWdlbnMubWFwKChtZW5zYWdlbSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRrZXk9e21lbnNhZ2VtLmlkfVxuXHRcdFx0XHRcdFx0dGFnPVwibGlcIlxuXHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc1cHgnLFxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnNnB4Jyxcblx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAnMTJweCcsXG5cdFx0XHRcdFx0XHRcdGhvdmVyOiB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJveFxuXHRcdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAnOHB4Jyxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICcyMHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogJzIwcHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luUmlnaHQ6ICc4cHgnLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7bWVuc2FnZW0uZGV9LnBuZ2B9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUZXh0IHRhZz1cInN0cm9uZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdHttZW5zYWdlbS5kZX1cblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTBweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5MZWZ0OiAnOHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHR0YWc9XCJzcGFuXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHsobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSl9XG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdFx0e21lbnNhZ2VtLnRleHRvfVxuXHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXG5cdFx0PC9Cb3g+XG5cdClcbn0iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiQnV0dG9uIiwiUmVhY3QiLCJhcHBDb25maWciLCJ1c2VSb3V0ZXIiLCJjcmVhdGVDbGllbnQiLCJTVVBBQkFTRV9BTk9OX0tFWSIsIlNVUEFCQVNFX1VSTCIsInN1cGFiYXNlQ2xpZW50IiwiQ2hhdFBhZ2UiLCJoYW5kbGVOb3ZhTWVuc2FnZW0iLCJub3ZhTWVuc2FnZW0iLCJtZW5zYWdlbSIsImRlIiwidXN1YXJpb0xvZ2FkbyIsInRleHRvIiwiZnJvbSIsImluc2VydCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldExpc3RhRGVNZW5zYWdlbnMiLCJsaXN0YURlTWVuc2FnZW5zIiwic2V0TWVuc2FnZW0iLCJyb3V0aW5nIiwicXVlcnkiLCJ1c2VybmFtZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJjb2xvciIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiTWVzc2FnZUxpc3QiLCJtZW5zYWdlbnMiLCJhcyIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInZhbG9yIiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwid2lkdGgiLCJib3JkZXIiLCJyZXNpemUiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvclZhcmlhbnQiLCJsYWJlbCIsImhyZWYiLCJwcm9wcyIsInRhZyIsIm92ZXJmbG93IiwibWFwIiwiaG92ZXIiLCJzcmMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});