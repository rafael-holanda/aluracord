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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ2NzA4MywiZXhwIjoxOTU5MDQzMDgzfQ.DbnKXZzN5lXRNIlXD2cAlPetDonbqGQUhfSYFNdqAmw';\nvar SUPABASE_URL = 'https://rmfupwtajnwivlurwcav.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\nfunction ChatPage() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            // id: listaDeMensagens.length + 1,\n            de: 'vanessametonini',\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagens').insert([\n            mensagem\n        ]).then(function(resposta) {\n            console.log('Criando mensagem: ', resposta);\n        });\n        setMensagem('');\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    // Sua lógica vai aqui\n    // Usuário\n    // - usuário digita no campo 'textarea'\n    // - aperta enter para enviar\n    // - tem que adicionar o texto na listagem\n    // Dev\n    // [x] Campo Criado\n    // [ ] Vamos usar o onChange usa o useState (ter if pra caso seja enter para limpar a variável)\n    // [ ] Lista de mensagens\n    // ./Sua lógica vai aqui\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function() {\n        supabaseClient.from('mensagens').select('*').then(function(param) {\n            var data = param.data;\n            console.log('Dados da consulta: ', data);\n            setListaDeMensagens(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundImage: \"url(https://images.pexels.com/photos/2346594/pexels-photo-2346594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/runner/aluracord/pages/chat.js\",\n                    lineNumber: 80,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"/home/runner/aluracord/pages/chat.js\",\n                            lineNumber: 94,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    // console.log(event);\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: '100%',\n                                    border: '0',\n                                    resize: 'none',\n                                    borderRadius: '5px',\n                                    padding: '6px 8px',\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: '12px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/runner/aluracord/pages/chat.js\",\n                                lineNumber: 110,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/runner/aluracord/pages/chat.js\",\n                            lineNumber: 103,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/runner/aluracord/pages/chat.js\",\n                    lineNumber: 81,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/runner/aluracord/pages/chat.js\",\n            lineNumber: 66,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/runner/aluracord/pages/chat.js\",\n        lineNumber: 58,\n        columnNumber: 3\n    }, this));\n};\n_s(ChatPage, \"5NzR+Jyf7t+pkrBZ4a9a51tLhhk=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/runner/aluracord/pages/chat.js\",\n                    lineNumber: 147,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"/home/runner/aluracord/pages/chat.js\",\n                    lineNumber: 150,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/runner/aluracord/pages/chat.js\",\n            lineNumber: 146,\n            columnNumber: 4\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props.listaDeMensagens);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/\".concat(mensagem.de, \".png\")\n                            }, void 0, false, {\n                                fileName: \"/home/runner/aluracord/pages/chat.js\",\n                                lineNumber: 194,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"/home/runner/aluracord/pages/chat.js\",\n                                lineNumber: 204,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/home/runner/aluracord/pages/chat.js\",\n                                lineNumber: 207,\n                                columnNumber: 8\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/runner/aluracord/pages/chat.js\",\n                        lineNumber: 189,\n                        columnNumber: 7\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"/home/runner/aluracord/pages/chat.js\",\n                lineNumber: 177,\n                columnNumber: 6\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/runner/aluracord/pages/chat.js\",\n        lineNumber: 164,\n        columnNumber: 3\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanM/NGNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcbmltcG9ydCB7Y3JlYXRlQ2xpZW50fSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXG5cbmNvbnN0IFNVUEFCQVNFX0FOT05fS0VZID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5YjJ4bElqb2lZVzV2YmlJc0ltbGhkQ0k2TVRZME16UTJOekE0TXl3aVpYaHdJam94T1RVNU1EUXpNRGd6ZlEuRGJuS1haek41bFhSTklsWEQyY0FsUGV0RG9uYnFHUVVoZlNZRk5kcUFtdyc7XG5jb25zdCBTVVBBQkFTRV9VUkwgPSAnaHR0cHM6Ly9ybWZ1cHd0YWpud2l2bHVyd2Nhdi5zdXBhYmFzZS5jbyc7XG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChTVVBBQkFTRV9VUkwsIFNVUEFCQVNFX0FOT05fS0VZKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcblx0Y29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtsaXN0YURlTWVuc2FnZW5zLCBzZXRMaXN0YURlTWVuc2FnZW5zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuXHQvLyBTdWEgbMOzZ2ljYSB2YWkgYXF1aVxuXHQvLyBVc3XDoXJpb1xuXHQvLyAtIHVzdcOhcmlvIGRpZ2l0YSBubyBjYW1wbyAndGV4dGFyZWEnXG5cdC8vIC0gYXBlcnRhIGVudGVyIHBhcmEgZW52aWFyXG5cdC8vIC0gdGVtIHF1ZSBhZGljaW9uYXIgbyB0ZXh0byBuYSBsaXN0YWdlbVxuXG5cdC8vIERldlxuXHQvLyBbeF0gQ2FtcG8gQ3JpYWRvXG5cdC8vIFsgXSBWYW1vcyB1c2FyIG8gb25DaGFuZ2UgdXNhIG8gdXNlU3RhdGUgKHRlciBpZiBwcmEgY2FzbyBzZWphIGVudGVyIHBhcmEgbGltcGFyIGEgdmFyacOhdmVsKVxuXHQvLyBbIF0gTGlzdGEgZGUgbWVuc2FnZW5zXG5cdC8vIC4vU3VhIGzDs2dpY2EgdmFpIGFxdWlcblxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHN1cGFiYXNlQ2xpZW50XG5cdFx0XHQuZnJvbSgnbWVuc2FnZW5zJylcblx0XHRcdC5zZWxlY3QoJyonKVxuXHRcdFx0LnRoZW4oKHtkYXRhfSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRGFkb3MgZGEgY29uc3VsdGE6ICcsIGRhdGEpO1xuXHRcdFx0XHRzZXRMaXN0YURlTWVuc2FnZW5zKGRhdGEpO1xuXHRcdFx0fSk7XG5cdH0sIFtdKTtcblx0XG5cdFxuXHRmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0obm92YU1lbnNhZ2VtKSB7XG5cdFx0Y29uc3QgbWVuc2FnZW0gPSB7XG5cdFx0XHQvLyBpZDogbGlzdGFEZU1lbnNhZ2Vucy5sZW5ndGggKyAxLFxuXHRcdFx0ZGU6ICd2YW5lc3NhbWV0b25pbmknLFxuXHRcdFx0dGV4dG86IG5vdmFNZW5zYWdlbVxuXHRcdH07XG5cblx0XHRzdXBhYmFzZUNsaWVudFxuXHRcdFx0LmZyb20oJ21lbnNhZ2VucycpXG5cdFx0XHQuaW5zZXJ0KFtcblx0XHRcdFx0bWVuc2FnZW1cblx0XHRcdF0pXG5cdFx0XHQudGhlbigocmVzcG9zdGEpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0NyaWFuZG8gbWVuc2FnZW06ICcsIHJlc3Bvc3RhKTtcblx0XHRcdH0pO1xuXG5cdFx0XG5cdFx0c2V0TWVuc2FnZW0oJycpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8Qm94XG5cdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzIzNDY1OTQvcGV4ZWxzLXBob3RvLTIzNDY1OTQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MClgLFxuXHRcdFx0XHRiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXG5cdFx0XHRcdGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXVxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHQ8Qm94XG5cdFx0XHRcdHN0eWxlU2hlZXQ9e3tcblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0XHRcdFx0ZmxleDogMSxcblx0XHRcdFx0XHRib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnNXB4Jyxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcblx0XHRcdFx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRcdFx0XHRtYXhXaWR0aDogJzk1JScsXG5cdFx0XHRcdFx0bWF4SGVpZ2h0OiAnOTV2aCcsXG5cdFx0XHRcdFx0cGFkZGluZzogJzMycHgnLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdDxCb3hcblx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRcdGZsZXg6IDEsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICc4MCUnLFxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXG5cdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzVweCcsXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTZweCcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXG5cdFx0XHRcdFx0PE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17bGlzdGFEZU1lbnNhZ2Vuc30gLz5cblx0XHRcdFx0XHR7Lyp7bGlzdGFEZU1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtQXR1YWwpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKG1lbnNhZ2VtQXR1YWwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXttZW5zYWdlbUF0dWFsLmlkfT5cblx0XHRcdFx0XHRcdFx0XHR7bWVuc2FnZW1BdHVhbC5kZX06IHttZW5zYWdlbUF0dWFsLnRleHRvfVxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pfSovfVxuXHRcdFx0XHRcdDxCb3hcblx0XHRcdFx0XHRcdGFzPVwiZm9ybVwiXG5cdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0dmFsdWU9e21lbnNhZ2VtfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZXZlbnQpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdHNldE1lbnNhZ2VtKHZhbG9yKTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0b25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZU5vdmFNZW5zYWdlbShtZW5zYWdlbSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogJzAnLFxuXHRcdFx0XHRcdFx0XHRcdHJlc2l6ZTogJ25vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzVweCcsXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzZweCA4cHgnLFxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpblJpZ2h0OiAnMTJweCcsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9Cb3g+XG5cdClcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Qm94IHN0eWxlU2hlZXQ9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnMTZweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0gPlxuXHRcdFx0XHQ8VGV4dCB2YXJpYW50PSdoZWFkaW5nNSc+XG5cdFx0XHRcdFx0Q2hhdFxuICAgICAgICAgICAgICAgIDwvVGV4dD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdHZhcmlhbnQ9J3RlcnRpYXJ5J1xuXHRcdFx0XHRcdGNvbG9yVmFyaWFudD0nbmV1dHJhbCdcblx0XHRcdFx0XHRsYWJlbD0nTG9nb3V0J1xuXHRcdFx0XHRcdGhyZWY9XCIvXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvQm94PlxuXHRcdDwvPlxuXHQpXG59XG5cbmZ1bmN0aW9uIE1lc3NhZ2VMaXN0KHByb3BzKSB7XG5cdGNvbnNvbGUubG9nKHByb3BzLmxpc3RhRGVNZW5zYWdlbnMpO1xuXHRyZXR1cm4gKFxuXHRcdDxCb3hcblx0XHRcdHRhZz1cInVsXCJcblx0XHRcdHN0eWxlU2hlZXQ9e3tcblx0XHRcdFx0b3ZlcmZsb3c6ICdzY3JvbGwnLFxuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXG5cdFx0XHRcdGZsZXg6IDEsXG5cdFx0XHRcdGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuXHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxNnB4Jyxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e3Byb3BzLm1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdGtleT17bWVuc2FnZW0uaWR9XG5cdFx0XHRcdFx0XHR0YWc9XCJsaVwiXG5cdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzVweCcsXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICc2cHgnLFxuXHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxMnB4Jyxcblx0XHRcdFx0XHRcdFx0aG92ZXI6IHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8Qm94XG5cdFx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICc4cHgnLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogJzIwcHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAnMjBweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogJzhweCcsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHttZW5zYWdlbS5kZX0ucG5nYH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRleHQgdGFnPVwic3Ryb25nXCI+XG5cdFx0XHRcdFx0XHRcdFx0e21lbnNhZ2VtLmRlfVxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxMHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkxlZnQ6ICc4cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdHRhZz1cInNwYW5cIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0eyhuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKX1cblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHR7bWVuc2FnZW0udGV4dG99XG5cdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cblx0XHQ8L0JveD5cblx0KVxufSJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJCdXR0b24iLCJSZWFjdCIsImFwcENvbmZpZyIsImNyZWF0ZUNsaWVudCIsIlNVUEFCQVNFX0FOT05fS0VZIiwiU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VDbGllbnQiLCJDaGF0UGFnZSIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiZGUiLCJ0ZXh0byIsImZyb20iLCJpbnNlcnQiLCJ0aGVuIiwicmVzcG9zdGEiLCJjb25zb2xlIiwibG9nIiwic2V0TWVuc2FnZW0iLCJ1c2VTdGF0ZSIsImxpc3RhRGVNZW5zYWdlbnMiLCJzZXRMaXN0YURlTWVuc2FnZW5zIiwidXNlRWZmZWN0Iiwic2VsZWN0IiwiZGF0YSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJNZXNzYWdlTGlzdCIsIm1lbnNhZ2VucyIsImFzIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidmFsb3IiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ3aWR0aCIsImJvcmRlciIsInJlc2l6ZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yVmFyaWFudCIsImxhYmVsIiwiaHJlZiIsInByb3BzIiwidGFnIiwib3ZlcmZsb3ciLCJtYXAiLCJob3ZlciIsInNyYyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});