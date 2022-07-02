webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/cart.js":
/*!****************************!*\
  !*** ./components/cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\derek\\Desktop\\Code\\MIT\\MIT_Bootcamp_Files\\Capstone\\components\\cart.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // we can pass cart data in via props method 
// the alternative is using useContext as below

function Cart() {
  _s();

  var _this = this;

  var isAuthenticated = true;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem; //const [cartA, setCartA] = useState({cart})
  //cart = value.cart;
  //console.log('props:'+ JSON.stringify(value));


  console.log("in CART: ".concat(JSON.stringify(cart))); //   problem is that cart may not be set 

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log("Router Path: ".concat(JSON.stringify(router)));

  var setUrl = function setUrl() {
    if (router.asPath == "/checkout") return false;else if (router.asPath == "/" && cart.length == 0) return;else return true;
  };

  var renderItems = function renderItems() {
    var items = cart.items;
    console.log("items: ".concat(JSON.stringify(items)));

    if (items && items.length) {
      var itemList = cart.items.map(function (item) {
        if (item.quantity > 0) {
          return __jsx("div", {
            className: "items-one",
            style: {
              marginBottom: 15
            },
            key: item.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 17
            }
          }, __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 19
            }
          }, __jsx("span", {
            id: "item-price",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 21
            }
          }, "\xA0 $", item.price), __jsx("span", {
            id: "item-name",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 21
            }
          }, "\xA0 ", item.name)), __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 19
            }
          }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 5,
              marginLeft: 10
            },
            onClick: function onClick() {
              return addItem(item);
            },
            color: "link",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 21
            }
          }, "+"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 10
            },
            onClick: function onClick() {
              return removeItem(item);
            },
            color: "link",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 21
            }
          }, "-"), __jsx("span", {
            style: {
              marginLeft: 5
            },
            id: "item-quantity",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 21
            }
          }, item.quantity, "x")));
        }
      });
      return itemList;
    } else {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      });
    }
  };

  var checkoutItems = function checkoutItems() {
    var checkUrl = setUrl();

    if (checkUrl) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
        style: {
          width: 200,
          padding: 10
        },
        color: "light",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }
      }, __jsx("h5", {
        style: {
          fontWeight: 100,
          color: "gray"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, "Total:"), __jsx("h3", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      }, "$", cart.total)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/checkout/",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        style: {
          marginLeft: "10%",
          width: "60%"
        },
        color: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }
      }, "Order"))));
    } else {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
        style: {
          width: 200,
          padding: 10
        },
        color: "light",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      }, __jsx("h5", {
        style: {
          fontWeight: 100,
          color: "gray"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }, "Total:"), __jsx("h3", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      }, "$", cart.total)));
    }
  }; // return Cart


  return __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, " Cart"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    style: {
      padding: "10px 5px"
    },
    className: "cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    style: {
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "Your Order:"), __jsx("hr", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    style: {
      padding: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      marginBottom: 6
    },
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "Items:")), __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, renderItems()), __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, checkoutItems()), console.log("Router Path: ".concat(router.asPath)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3161218026",
    __self: this
  }, "#item-price.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}#item-quantity.jsx-3161218026{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}#item-name.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVyZWtcXERlc2t0b3BcXENvZGVcXE1JVFxcTUlUX0Jvb3RjYW1wX0ZpbGVzXFxDYXBzdG9uZVxcY29tcG9uZW50c1xcY2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSWtCLEFBRzJCLEFBSUMsQUFLRCxnQkFSVSxBQVNBLENBTFAsbUJBQ1UsR0FKL0IsQUFTQSx1QkFKQSIsImZpbGUiOiJDOlxcVXNlcnNcXGRlcmVrXFxEZXNrdG9wXFxDb2RlXFxNSVRcXE1JVF9Cb290Y2FtcF9GaWxlc1xcQ2Fwc3RvbmVcXGNvbXBvbmVudHNcXGNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQmFkZ2UgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbi8vIHdlIGNhbiBwYXNzIGNhcnQgZGF0YSBpbiB2aWEgcHJvcHMgbWV0aG9kIFxuLy8gdGhlIGFsdGVybmF0aXZlIGlzIHVzaW5nIHVzZUNvbnRleHQgYXMgYmVsb3dcblxuZnVuY3Rpb24gQ2FydCgpIHtcbiAgbGV0IGlzQXV0aGVudGljYXRlZCA9IHRydWU7XG4gIGxldCB7Y2FydCxhZGRJdGVtLHJlbW92ZUl0ZW19ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgXG4gIC8vY29uc3QgW2NhcnRBLCBzZXRDYXJ0QV0gPSB1c2VTdGF0ZSh7Y2FydH0pXG4gIC8vY2FydCA9IHZhbHVlLmNhcnQ7XG4gIC8vY29uc29sZS5sb2coJ3Byb3BzOicrIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIGNvbnNvbGUubG9nKGBpbiBDQVJUOiAke0pTT04uc3RyaW5naWZ5KGNhcnQpfWApXG4gIFxuICAvLyAgIHByb2JsZW0gaXMgdGhhdCBjYXJ0IG1heSBub3QgYmUgc2V0IFxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2coYFJvdXRlciBQYXRoOiAke0pTT04uc3RyaW5naWZ5KHJvdXRlcil9YClcbiAgY29uc3Qgc2V0VXJsID0gKCkgPT4ge1xuICAgIGlmKHJvdXRlci5hc1BhdGggPT0gXCIvY2hlY2tvdXRcIikgcmV0dXJuIGZhbHNlO1xuICAgIGVsc2UgaWYocm91dGVyLmFzUGF0aCA9PSBcIi9cIiAmJiBjYXJ0Lmxlbmd0aCA9PSAwKSByZXR1cm5cbiAgICBlbHNlIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoKT0+e1xuICBsZXQge2l0ZW1zfSA9IGNhcnQ7XG4gICBjb25zb2xlLmxvZyhgaXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkoaXRlbXMpfWApXG4gICAgaWYoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKXtcbiAgICAgIHZhciBpdGVtTGlzdCA9IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ucXVhbnRpdHkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtb25lXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNSB9fSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLXByaWNlXCI+Jm5ic3A7ICR7aXRlbS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+Jm5ic3A7IHtpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fXhcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xuICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KVxuICAgIH1cbiAgfVxuICBjb25zdCBjaGVja291dEl0ZW1zID0gKCk9PntcbiAgICBsZXQgY2hlY2tVcmwgPSBzZXRVcmwoKTtcbiAgICBpZihjaGVja1VybCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QmFkZ2Ugc3R5bGU9e3sgd2lkdGg6IDIwMCwgcGFkZGluZzogMTAgfX0gY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCwgY29sb3I6IFwiZ3JheVwiIH19PlRvdGFsOjwvaDU+XG4gICAgICAgICAgICA8aDM+JHtjYXJ0LnRvdGFsfTwvaDM+XG4gICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0L1wiPlxuICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjEwJVwiLCB3aWR0aDogXCI2MCVcIiB9fSBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIDxhPk9yZGVyPC9hPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCYWRnZSBzdHlsZT17eyB3aWR0aDogMjAwLCBwYWRkaW5nOiAxMCB9fSBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogMTAwLCBjb2xvcjogXCJncmF5XCIgfX0+VG90YWw6PC9oNT5cbiAgICAgICAgICAgIDxoMz4ke2NhcnQudG90YWx9PC9oMz5cbiAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuLy8gcmV0dXJuIENhcnRcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPiBDYXJ0PC9oMT5cbiAgICAgIDxDYXJkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCA1cHhcIiB9fSBjbGFzc05hbWU9XCJjYXJ0XCI+XG4gICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5Zb3VyIE9yZGVyOjwvQ2FyZFRpdGxlPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPENhcmRCb2R5IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA2IH19PlxuICAgICAgICAgICAgPHNtYWxsPkl0ZW1zOjwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtyZW5kZXJJdGVtcygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Y2hlY2tvdXRJdGVtcygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIHtjb25zb2xlLmxvZyhgUm91dGVyIFBhdGg6ICR7cm91dGVyLmFzUGF0aH1gKX1cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI2l0ZW0tcHJpY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XG4gICAgICAgIH1cbiAgICAgICAgI2l0ZW0tcXVhbnRpdHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgI2l0ZW0tbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICBjb2xvcjogcmdiYSg5NywgOTcsIDk3LCAxKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\derek\\\\Desktop\\\\Code\\\\MIT\\\\MIT_Bootcamp_Files\\\\Capstone\\\\components\\\\cart.js */"));
}

_s(Cart, "zjvHgEWyW4pydBS6SysqRJX2VQA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Cart;
/* harmony default export */ __webpack_exports__["default"] = (Cart);

var _c;

$RefreshReg$(_c, "Cart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cart */ "./components/cart.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _components_restaurantList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/restaurantList */ "./components/restaurantList.js");
/* harmony import */ var _components_dishes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/dishes */ "./components/dishes.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\Users\\derek\\Desktop\\Code\\MIT\\MIT_Bootcamp_Files\\Capstone\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Home() {
  _s();

  var API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  console.log("URL: ".concat(API_URL));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      query = _useState[0],
      setQuery = _useState[1];

  var link = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
    uri: "".concat(API_URL, "/graphql")
  });
  var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]();
  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
    link: link,
    cache: cache
  });
  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
    client: client,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, " Local Restaurants"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupAddon"], {
    addonType: "append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, " Search "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    onChange: function onChange(e) {
      return setQuery(e.target.value.toLocaleLowerCase());
    },
    value: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 30
    }
  })), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    search: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, " "));
}

_s(Home, "HYX2QbDDdTtlu7GfoQbAPZOIM6k=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDYXJ0IiwiaXNBdXRoZW50aWNhdGVkIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInJvdXRlciIsInVzZVJvdXRlciIsInNldFVybCIsImFzUGF0aCIsImxlbmd0aCIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJpdGVtTGlzdCIsIm1hcCIsIml0ZW0iLCJxdWFudGl0eSIsIm1hcmdpbkJvdHRvbSIsImlkIiwicHJpY2UiLCJuYW1lIiwiaGVpZ2h0IiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiY2hlY2tvdXRJdGVtcyIsImNoZWNrVXJsIiwiZm9udFdlaWdodCIsImNvbG9yIiwidG90YWwiLCJtYXJnaW4iLCJIb21lIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwidXNlU3RhdGUiLCJxdWVyeSIsInNldFF1ZXJ5IiwibGluayIsIkh0dHBMaW5rIiwidXJpIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb2NhbGVMb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDZCxNQUFJQyxlQUFlLEdBQUcsSUFBdEI7O0FBRGMsb0JBRWtCQyx3REFBVSxDQUFDQyxnREFBRCxDQUY1QjtBQUFBLE1BRVRDLElBRlMsZUFFVEEsSUFGUztBQUFBLE1BRUpDLE9BRkksZUFFSkEsT0FG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TSxFQUFFRSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUVNLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsMERBQUQ7QUFBaUIsYUFBUyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFFQSxNQUFDLGdEQUFEO0FBQ0ksWUFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsYUFDVlIsUUFBUSxDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxpQkFBZixFQUFELENBREU7QUFBQSxLQURkO0FBSUksU0FBSyxFQUFFWixLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQUZOLEVBVW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWbkIsQ0FERixFQWFJLE1BQUMsa0VBQUQ7QUFBZ0IsVUFBTSxFQUFFQSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosRUFlSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FmSixDQURKO0FBbUJEOztHQTNCTU4sSTs7S0FBQUEsSTtBQTRCUUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kM2M4NTYzYjAxOGFkMDQyNTU3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIENhcmRCb2R5LCBDYXJkVGl0bGUsIEJhZGdlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG4vLyB3ZSBjYW4gcGFzcyBjYXJ0IGRhdGEgaW4gdmlhIHByb3BzIG1ldGhvZCBcbi8vIHRoZSBhbHRlcm5hdGl2ZSBpcyB1c2luZyB1c2VDb250ZXh0IGFzIGJlbG93XG5cbmZ1bmN0aW9uIENhcnQoKSB7XG4gIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICBsZXQge2NhcnQsYWRkSXRlbSxyZW1vdmVJdGVtfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIFxuICAvL2NvbnN0IFtjYXJ0QSwgc2V0Q2FydEFdID0gdXNlU3RhdGUoe2NhcnR9KVxuICAvL2NhcnQgPSB2YWx1ZS5jYXJ0O1xuICAvL2NvbnNvbGUubG9nKCdwcm9wczonKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICBjb25zb2xlLmxvZyhgaW4gQ0FSVDogJHtKU09OLnN0cmluZ2lmeShjYXJ0KX1gKVxuICBcbiAgLy8gICBwcm9ibGVtIGlzIHRoYXQgY2FydCBtYXkgbm90IGJlIHNldCBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKGBSb3V0ZXIgUGF0aDogJHtKU09OLnN0cmluZ2lmeShyb3V0ZXIpfWApXG4gIGNvbnN0IHNldFVybCA9ICgpID0+IHtcbiAgICBpZihyb3V0ZXIuYXNQYXRoID09IFwiL2NoZWNrb3V0XCIpIHJldHVybiBmYWxzZTtcbiAgICBlbHNlIGlmKHJvdXRlci5hc1BhdGggPT0gXCIvXCIgJiYgY2FydC5sZW5ndGggPT0gMCkgcmV0dXJuXG4gICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlckl0ZW1zID0gKCk9PntcbiAgbGV0IHtpdGVtc30gPSBjYXJ0O1xuICAgY29uc29sZS5sb2coYGl0ZW1zOiAke0pTT04uc3RyaW5naWZ5KGl0ZW1zKX1gKVxuICAgIGlmKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCl7XG4gICAgICB2YXIgaXRlbUxpc3QgPSBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLW9uZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTUgfX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1wcmljZVwiPiZuYnNwOyAke2l0ZW0ucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tbmFtZVwiPiZuYnNwOyB7aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBpZD1cIml0ZW0tcXVhbnRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX14XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcbiAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2PjwvZGl2PilcbiAgICB9XG4gIH1cbiAgY29uc3QgY2hlY2tvdXRJdGVtcyA9ICgpPT57XG4gICAgbGV0IGNoZWNrVXJsID0gc2V0VXJsKCk7XG4gICAgaWYoY2hlY2tVcmwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJhZGdlIHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBhZGRpbmc6IDEwIH19IGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAxMDAsIGNvbG9yOiBcImdyYXlcIiB9fT5Ub3RhbDo8L2g1PlxuICAgICAgICAgICAgPGgzPiR7Y2FydC50b3RhbH08L2gzPlxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dC9cIj5cbiAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIxMCVcIiwgd2lkdGg6IFwiNjAlXCIgfX0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICA8YT5PcmRlcjwvYT5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QmFkZ2Ugc3R5bGU9e3sgd2lkdGg6IDIwMCwgcGFkZGluZzogMTAgfX0gY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCwgY29sb3I6IFwiZ3JheVwiIH19PlRvdGFsOjwvaDU+XG4gICAgICAgICAgICA8aDM+JHtjYXJ0LnRvdGFsfTwvaDM+XG4gICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbi8vIHJldHVybiBDYXJ0XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4gQ2FydDwvaDE+XG4gICAgICA8Q2FyZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggNXB4XCIgfX0gY2xhc3NOYW1lPVwiY2FydFwiPlxuICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+WW91ciBPcmRlcjo8L0NhcmRUaXRsZT5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkQm9keSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICAgIDxzbWFsbD5JdGVtczo8L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cmVuZGVySXRlbXMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2NoZWNrb3V0SXRlbXMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7Y29uc29sZS5sb2coYFJvdXRlciBQYXRoOiAke3JvdXRlci5hc1BhdGh9YCl9XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNpdGVtLXByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDEpO1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLXF1YW50aXR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDEpO1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRcIlxuaW1wb3J0IHtBcG9sbG9Qcm92aWRlcixBcG9sbG9DbGllbnQsSHR0cExpbmssIEluTWVtb3J5Q2FjaGV9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBSZXN0YXVyYW50TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3RhdXJhbnRMaXN0JztcbmltcG9ydCBEaXNoZXMgZnJvbSAnLi4vY29tcG9uZW50cy9kaXNoZXMnXG5pbXBvcnQgeyBJbnB1dEdyb3VwLCBJbnB1dEdyb3VwQWRkb24sSW5wdXR9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuICAgIGNvbnNvbGUubG9nKGBVUkw6ICR7QVBJX1VSTH1gKVxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgbGluayA9IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX1VSTH0vZ3JhcGhxbGB9KVxuICAgIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKVxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe2xpbmssY2FjaGV9KTtcbiBcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgICAgIDxoMj4gTG9jYWwgUmVzdGF1cmFudHM8L2gyPlxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwID5cbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cImFwcGVuZFwiPiBTZWFyY2ggPC9JbnB1dEdyb3VwQWRkb24+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+PGJyPjwvYnI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxSZXN0YXVyYW50TGlzdCBzZWFyY2g9e3F1ZXJ5fSAvPlxuICAgICAgICAgICAgey8qIDxEaXNoZXMgc2VhcmNoPXtxdWVyeX0vPiAqL31cbiAgICAgICAgICAgIDxDYXJ0PiA8L0NhcnQ+XG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxuICBleHBvcnQgZGVmYXVsdCBIb21lO1xuICAiXSwic291cmNlUm9vdCI6IiJ9