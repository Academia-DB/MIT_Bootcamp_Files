webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_6__);
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
    if (router.asPath == "/checkout") return false;else if (router.asPath == "/" && cart.items.length == 0) return false;else return true;
  };

  var checkUrl = setUrl();

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
              lineNumber: 36,
              columnNumber: 17
            }
          }, __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 19
            }
          }, __jsx("span", {
            id: "item-price",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 21
            }
          }, "\xA0 $", item.price), __jsx("span", {
            id: "item-name",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 21
            }
          }, "\xA0 ", item.name)), __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41,
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
              lineNumber: 42,
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
              lineNumber: 55,
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
              lineNumber: 67,
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
          lineNumber: 78,
          columnNumber: 17
        }
      });
    }
  };

  var checkoutItems = function checkoutItems() {
    checkUrl = setUrl();

    if (checkUrl) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
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
          lineNumber: 86,
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
          lineNumber: 87,
          columnNumber: 13
        }
      }, "Total:"), __jsx("h3", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }
      }, "$", cart.total)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/checkout/",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
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
          lineNumber: 91,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      }, "Order"))));
    } else {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
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
          lineNumber: 101,
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
          lineNumber: 102,
          columnNumber: 13
        }
      }, "Total:"), __jsx("h3", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
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
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    style: {
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Your Order:"), __jsx("hr", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    style: {
      padding: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "Items:")), __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, renderItems()), __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, checkoutItems()), console.log("Router Path: ".concat(router.asPath)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3161218026",
    __self: this
  }, "#item-price.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}#item-quantity.jsx-3161218026{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}#item-name.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVyZWtcXERlc2t0b3BcXENvZGVcXE1JVFxcTUlUX0Jvb3RjYW1wX0ZpbGVzXFxDYXBzdG9uZVxcY29tcG9uZW50c1xcY2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSWtCLEFBRzJCLEFBSUMsQUFLRCxnQkFSVSxBQVNBLENBTFAsbUJBQ1UsR0FKL0IsQUFTQSx1QkFKQSIsImZpbGUiOiJDOlxcVXNlcnNcXGRlcmVrXFxEZXNrdG9wXFxDb2RlXFxNSVRcXE1JVF9Cb290Y2FtcF9GaWxlc1xcQ2Fwc3RvbmVcXGNvbXBvbmVudHNcXGNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQmFkZ2UgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyXCI7XG4vLyB3ZSBjYW4gcGFzcyBjYXJ0IGRhdGEgaW4gdmlhIHByb3BzIG1ldGhvZCBcbi8vIHRoZSBhbHRlcm5hdGl2ZSBpcyB1c2luZyB1c2VDb250ZXh0IGFzIGJlbG93XG5cbmZ1bmN0aW9uIENhcnQoKSB7XG4gIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICBsZXQge2NhcnQsYWRkSXRlbSxyZW1vdmVJdGVtfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIFxuICAvL2NvbnN0IFtjYXJ0QSwgc2V0Q2FydEFdID0gdXNlU3RhdGUoe2NhcnR9KVxuICAvL2NhcnQgPSB2YWx1ZS5jYXJ0O1xuICAvL2NvbnNvbGUubG9nKCdwcm9wczonKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICBjb25zb2xlLmxvZyhgaW4gQ0FSVDogJHtKU09OLnN0cmluZ2lmeShjYXJ0KX1gKVxuICBcbiAgLy8gICBwcm9ibGVtIGlzIHRoYXQgY2FydCBtYXkgbm90IGJlIHNldCBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKGBSb3V0ZXIgUGF0aDogJHtKU09OLnN0cmluZ2lmeShyb3V0ZXIpfWApXG4gIGNvbnN0IHNldFVybCA9ICgpID0+IHtcbiAgICBpZihyb3V0ZXIuYXNQYXRoID09IFwiL2NoZWNrb3V0XCIpIHJldHVybiBmYWxzZTtcbiAgICBlbHNlIGlmKHJvdXRlci5hc1BhdGggPT0gXCIvXCIgJiYgY2FydC5pdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIGVsc2UgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGNoZWNrVXJsID0gc2V0VXJsKCk7XG5cbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoKT0+e1xuICBsZXQge2l0ZW1zfSA9IGNhcnQ7XG4gICBjb25zb2xlLmxvZyhgaXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkoaXRlbXMpfWApXG4gICAgaWYoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKXtcbiAgICAgIHZhciBpdGVtTGlzdCA9IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ucXVhbnRpdHkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtb25lXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNSB9fSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLXByaWNlXCI+Jm5ic3A7ICR7aXRlbS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+Jm5ic3A7IHtpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fXhcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xuICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KVxuICAgIH1cbiAgfVxuICBjb25zdCBjaGVja291dEl0ZW1zID0gKCk9PntcbiAgICBjaGVja1VybCA9IHNldFVybCgpO1xuICAgIGlmKGNoZWNrVXJsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCYWRnZSBzdHlsZT17eyB3aWR0aDogMjAwLCBwYWRkaW5nOiAxMCB9fSBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogMTAwLCBjb2xvcjogXCJncmF5XCIgfX0+VG90YWw6PC9oNT5cbiAgICAgICAgICAgIDxoMz4ke2NhcnQudG90YWx9PC9oMz5cbiAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXQvXCI+XG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMTAlXCIsIHdpZHRoOiBcIjYwJVwiIH19IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgPGE+T3JkZXI8L2E+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJhZGdlIHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBhZGRpbmc6IDEwIH19IGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAxMDAsIGNvbG9yOiBcImdyYXlcIiB9fT5Ub3RhbDo8L2g1PlxuICAgICAgICAgICAgPGgzPiR7Y2FydC50b3RhbH08L2gzPlxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4vLyByZXR1cm4gQ2FydFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+IENhcnQ8L2gxPlxuICAgICAgPENhcmQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDVweFwiIH19IGNsYXNzTmFtZT1cImNhcnRcIj5cbiAgICAgICAgPENhcmRUaXRsZSBzdHlsZT17eyBtYXJnaW46IDEwIH19PllvdXIgT3JkZXI6PC9DYXJkVGl0bGU+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYgfX0+XG4gICAgICAgICAgICA8c21hbGw+SXRlbXM6PC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3JlbmRlckl0ZW1zKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjaGVja291dEl0ZW1zKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAge2NvbnNvbGUubG9nKGBSb3V0ZXIgUGF0aDogJHtyb3V0ZXIuYXNQYXRofWApfVxuICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgPC9DYXJkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjaXRlbS1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICBjb2xvcjogcmdiYSg5NywgOTcsIDk3LCAxKTtcbiAgICAgICAgfVxuICAgICAgICAjaXRlbS1xdWFudGl0eSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICAjaXRlbS1uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDEpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\derek\\\\Desktop\\\\Code\\\\MIT\\\\MIT_Bootcamp_Files\\\\Capstone\\\\components\\\\cart.js */"));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwicm91dGVyIiwidXNlUm91dGVyIiwic2V0VXJsIiwiYXNQYXRoIiwiaXRlbXMiLCJsZW5ndGgiLCJjaGVja1VybCIsInJlbmRlckl0ZW1zIiwiaXRlbUxpc3QiLCJtYXAiLCJpdGVtIiwicXVhbnRpdHkiLCJtYXJnaW5Cb3R0b20iLCJpZCIsInByaWNlIiwibmFtZSIsImhlaWdodCIsInBhZGRpbmciLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImNoZWNrb3V0SXRlbXMiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJ0b3RhbCIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDZCxNQUFJQyxlQUFlLEdBQUcsSUFBdEI7O0FBRGMsb0JBRWtCQyx3REFBVSxDQUFDQyxnREFBRCxDQUY1QjtBQUFBLE1BRVRDLElBRlMsZUFFVEEsSUFGUztBQUFBLE1BRUpDLE9BRkksZUFFSkEsT0FGSTtBQUFBLE1BRUlDLFVBRkosZUFFSUEsVUFGSixFQUlkO0FBQ0E7QUFDQTs7O0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixvQkFBd0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixJQUFmLENBQXhCLEdBUGMsQ0FTZDs7QUFDQSxNQUFNTyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FMLFNBQU8sQ0FBQ0MsR0FBUix3QkFBNEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmLENBQTVCOztBQUNBLE1B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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0djLGFBQWEsRUFEaEIsQ0FQRixFQVdHekIsT0FBTyxDQUFDQyxHQUFSLHdCQUE0QkcsTUFBTSxDQUFDRyxNQUFuQyxFQVhILENBSEYsQ0FGRjtBQUFBO0FBQUE7QUFBQSxnMU5BREY7QUFxQ0Q7O0dBMUlRZCxJO1VBVVFZLHFEOzs7S0FWUlosSTtBQTJJTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTZhYTMyYzRiMmU3OWJhNmE1MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ29sLCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBCYWRnZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgcm91dGUgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXJcIjtcbi8vIHdlIGNhbiBwYXNzIGNhcnQgZGF0YSBpbiB2aWEgcHJvcHMgbWV0aG9kIFxuLy8gdGhlIGFsdGVybmF0aXZlIGlzIHVzaW5nIHVzZUNvbnRleHQgYXMgYmVsb3dcblxuZnVuY3Rpb24gQ2FydCgpIHtcbiAgbGV0IGlzQXV0aGVudGljYXRlZCA9IHRydWU7XG4gIGxldCB7Y2FydCxhZGRJdGVtLHJlbW92ZUl0ZW19ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgXG4gIC8vY29uc3QgW2NhcnRBLCBzZXRDYXJ0QV0gPSB1c2VTdGF0ZSh7Y2FydH0pXG4gIC8vY2FydCA9IHZhbHVlLmNhcnQ7XG4gIC8vY29uc29sZS5sb2coJ3Byb3BzOicrIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIGNvbnNvbGUubG9nKGBpbiBDQVJUOiAke0pTT04uc3RyaW5naWZ5KGNhcnQpfWApXG4gIFxuICAvLyAgIHByb2JsZW0gaXMgdGhhdCBjYXJ0IG1heSBub3QgYmUgc2V0IFxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2coYFJvdXRlciBQYXRoOiAke0pTT04uc3RyaW5naWZ5KHJvdXRlcil9YClcbiAgY29uc3Qgc2V0VXJsID0gKCkgPT4ge1xuICAgIGlmKHJvdXRlci5hc1BhdGggPT0gXCIvY2hlY2tvdXRcIikgcmV0dXJuIGZhbHNlO1xuICAgIGVsc2UgaWYocm91dGVyLmFzUGF0aCA9PSBcIi9cIiAmJiBjYXJ0Lml0ZW1zLmxlbmd0aCA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgY2hlY2tVcmwgPSBzZXRVcmwoKTtcblxuICBjb25zdCByZW5kZXJJdGVtcyA9ICgpPT57XG4gIGxldCB7aXRlbXN9ID0gY2FydDtcbiAgIGNvbnNvbGUubG9nKGBpdGVtczogJHtKU09OLnN0cmluZ2lmeShpdGVtcyl9YClcbiAgICBpZihpdGVtcyAmJiBpdGVtcy5sZW5ndGgpe1xuICAgICAgdmFyIGl0ZW1MaXN0ID0gY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5xdWFudGl0eSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1vbmVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tcHJpY2VcIj4mbmJzcDsgJHtpdGVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLW5hbWVcIj4mbmJzcDsge2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSXRlbShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0gaWQ9XCJpdGVtLXF1YW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9eFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXG4gICAgfVxuICB9XG4gIGNvbnN0IGNoZWNrb3V0SXRlbXMgPSAoKT0+e1xuICAgIGNoZWNrVXJsID0gc2V0VXJsKCk7XG4gICAgaWYoY2hlY2tVcmwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJhZGdlIHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBhZGRpbmc6IDEwIH19IGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAxMDAsIGNvbG9yOiBcImdyYXlcIiB9fT5Ub3RhbDo8L2g1PlxuICAgICAgICAgICAgPGgzPiR7Y2FydC50b3RhbH08L2gzPlxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dC9cIj5cbiAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIxMCVcIiwgd2lkdGg6IFwiNjAlXCIgfX0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICA8YT5PcmRlcjwvYT5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QmFkZ2Ugc3R5bGU9e3sgd2lkdGg6IDIwMCwgcGFkZGluZzogMTAgfX0gY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCwgY29sb3I6IFwiZ3JheVwiIH19PlRvdGFsOjwvaDU+XG4gICAgICAgICAgICA8aDM+JHtjYXJ0LnRvdGFsfTwvaDM+XG4gICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbi8vIHJldHVybiBDYXJ0XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4gQ2FydDwvaDE+XG4gICAgICA8Q2FyZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggNXB4XCIgfX0gY2xhc3NOYW1lPVwiY2FydFwiPlxuICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+WW91ciBPcmRlcjo8L0NhcmRUaXRsZT5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkQm9keSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICAgIDxzbWFsbD5JdGVtczo8L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cmVuZGVySXRlbXMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2NoZWNrb3V0SXRlbXMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7Y29uc29sZS5sb2coYFJvdXRlciBQYXRoOiAke3JvdXRlci5hc1BhdGh9YCl9XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNpdGVtLXByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDEpO1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLXF1YW50aXR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDEpO1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9