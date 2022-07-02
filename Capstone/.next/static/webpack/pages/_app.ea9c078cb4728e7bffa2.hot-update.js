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
    if (router.asPath == "/checkout") return false;else if (router.asPath == "/" && cart.length == 0) return false;else return true;
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
  }, "#item-price.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}#item-quantity.jsx-3161218026{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}#item-name.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVyZWtcXERlc2t0b3BcXENvZGVcXE1JVFxcTUlUX0Jvb3RjYW1wX0ZpbGVzXFxDYXBzdG9uZVxcY29tcG9uZW50c1xcY2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSWtCLEFBRzJCLEFBSUMsQUFLRCxnQkFSVSxBQVNBLENBTFAsbUJBQ1UsR0FKL0IsQUFTQSx1QkFKQSIsImZpbGUiOiJDOlxcVXNlcnNcXGRlcmVrXFxEZXNrdG9wXFxDb2RlXFxNSVRcXE1JVF9Cb290Y2FtcF9GaWxlc1xcQ2Fwc3RvbmVcXGNvbXBvbmVudHNcXGNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQmFkZ2UgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyXCI7XG4vLyB3ZSBjYW4gcGFzcyBjYXJ0IGRhdGEgaW4gdmlhIHByb3BzIG1ldGhvZCBcbi8vIHRoZSBhbHRlcm5hdGl2ZSBpcyB1c2luZyB1c2VDb250ZXh0IGFzIGJlbG93XG5cbmZ1bmN0aW9uIENhcnQoKSB7XG4gIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICBsZXQge2NhcnQsYWRkSXRlbSxyZW1vdmVJdGVtfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIFxuICAvL2NvbnN0IFtjYXJ0QSwgc2V0Q2FydEFdID0gdXNlU3RhdGUoe2NhcnR9KVxuICAvL2NhcnQgPSB2YWx1ZS5jYXJ0O1xuICAvL2NvbnNvbGUubG9nKCdwcm9wczonKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICBjb25zb2xlLmxvZyhgaW4gQ0FSVDogJHtKU09OLnN0cmluZ2lmeShjYXJ0KX1gKVxuICBcbiAgLy8gICBwcm9ibGVtIGlzIHRoYXQgY2FydCBtYXkgbm90IGJlIHNldCBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKGBSb3V0ZXIgUGF0aDogJHtKU09OLnN0cmluZ2lmeShyb3V0ZXIpfWApXG4gIGNvbnN0IHNldFVybCA9ICgpID0+IHtcbiAgICBpZihyb3V0ZXIuYXNQYXRoID09IFwiL2NoZWNrb3V0XCIpIHJldHVybiBmYWxzZTtcbiAgICBlbHNlIGlmKHJvdXRlci5hc1BhdGggPT0gXCIvXCIgJiYgY2FydC5sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlXG4gICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgY2hlY2tVcmwgPSBzZXRVcmwoKTtcblxuICBjb25zdCByZW5kZXJJdGVtcyA9ICgpPT57XG4gIGxldCB7aXRlbXN9ID0gY2FydDtcbiAgIGNvbnNvbGUubG9nKGBpdGVtczogJHtKU09OLnN0cmluZ2lmeShpdGVtcyl9YClcbiAgICBpZihpdGVtcyAmJiBpdGVtcy5sZW5ndGgpe1xuICAgICAgdmFyIGl0ZW1MaXN0ID0gY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5xdWFudGl0eSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1vbmVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tcHJpY2VcIj4mbmJzcDsgJHtpdGVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLW5hbWVcIj4mbmJzcDsge2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSXRlbShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0gaWQ9XCJpdGVtLXF1YW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9eFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXG4gICAgfVxuICB9XG4gIGNvbnN0IGNoZWNrb3V0SXRlbXMgPSAoKT0+e1xuICAgIGNoZWNrVXJsID0gc2V0VXJsKCk7XG4gICAgaWYoY2hlY2tVcmwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJhZGdlIHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBhZGRpbmc6IDEwIH19IGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAxMDAsIGNvbG9yOiBcImdyYXlcIiB9fT5Ub3RhbDo8L2g1PlxuICAgICAgICAgICAgPGgzPiR7Y2FydC50b3RhbH08L2gzPlxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dC9cIj5cbiAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIxMCVcIiwgd2lkdGg6IFwiNjAlXCIgfX0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICA8YT5PcmRlcjwvYT5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QmFkZ2Ugc3R5bGU9e3sgd2lkdGg6IDIwMCwgcGFkZGluZzogMTAgfX0gY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCwgY29sb3I6IFwiZ3JheVwiIH19PlRvdGFsOjwvaDU+XG4gICAgICAgICAgICA8aDM+JHtjYXJ0LnRvdGFsfTwvaDM+XG4gICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbi8vIHJldHVybiBDYXJ0XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4gQ2FydDwvaDE+XG4gICAgICA8Q2FyZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggNXB4XCIgfX0gY2xhc3NOYW1lPVwiY2FydFwiPlxuICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+WW91ciBPcmRlcjo8L0NhcmRUaXRsZT5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkQm9keSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICAgIDxzbWFsbD5JdGVtczo8L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cmVuZGVySXRlbXMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2NoZWNrb3V0SXRlbXMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7Y29uc29sZS5sb2coYFJvdXRlciBQYXRoOiAke3JvdXRlci5hc1BhdGh9YCl9XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNpdGVtLXByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDEpO1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLXF1YW50aXR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDEpO1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\derek\\\\Desktop\\\\Code\\\\MIT\\\\MIT_Bootcamp_Files\\\\Capstone\\\\components\\\\cart.js */"));
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

/***/ "./node_modules/next/dist/next-server/server/router.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/router.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.default=exports.route=void 0;var _pathMatch=_interopRequireDefault(__webpack_require__(/*! ../lib/router/utils/path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));var _normalizeTrailingSlash=__webpack_require__(/*! ../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const route=(0,_pathMatch.default)();exports.route=route;const customRouteTypes=new Set(['rewrite','redirect','header']);function replaceBasePath(basePath,pathname){// If replace ends up replacing the full url it'll be `undefined`, meaning we have to default it to `/`
return pathname.replace(basePath,'')||'/';}class Router{constructor({basePath='',headers=[],fsRoutes=[],rewrites=[],redirects=[],catchAllRoute,dynamicRoutes=[],pageChecker,useFileSystemPublicRoutes}){this.basePath=void 0;this.headers=void 0;this.fsRoutes=void 0;this.rewrites=void 0;this.redirects=void 0;this.catchAllRoute=void 0;this.pageChecker=void 0;this.dynamicRoutes=void 0;this.useFileSystemPublicRoutes=void 0;this.basePath=basePath;this.headers=headers;this.fsRoutes=fsRoutes;this.rewrites=rewrites;this.redirects=redirects;this.pageChecker=pageChecker;this.catchAllRoute=catchAllRoute;this.dynamicRoutes=dynamicRoutes;this.useFileSystemPublicRoutes=useFileSystemPublicRoutes;}setDynamicRoutes(routes=[]){this.dynamicRoutes=routes;}addFsRoute(fsRoute){this.fsRoutes.unshift(fsRoute);}async execute(req,res,parsedUrl){// memoize page check calls so we don't duplicate checks for pages
const pageChecks={};const memoizedPageChecker=async p=>{if(pageChecks[p]){return pageChecks[p];}const result=this.pageChecker(p);pageChecks[p]=result;return result;};let parsedUrlUpdated=parsedUrl;/*
      Desired routes order
      - headers
      - redirects
      - Check filesystem (including pages), if nothing found continue
      - User rewrites (checking filesystem and pages each match)
    */const allRoutes=[...this.headers,...this.redirects,...this.fsRoutes,// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[{type:'route',name:'page checker',requireBasePath:false,match:route('/:path*'),fn:async(checkerReq,checkerRes,params,parsedCheckerUrl)=>{let{pathname}=parsedCheckerUrl;pathname=(0,_normalizeTrailingSlash.removePathTrailingSlash)(pathname||'/');if(!pathname){return{finished:false};}if(await memoizedPageChecker(pathname)){return this.catchAllRoute.fn(checkerReq,checkerRes,params,parsedCheckerUrl);}return{finished:false};}}]:[]),...this.rewrites,// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[this.catchAllRoute]:[])];const originallyHadBasePath=!this.basePath||req._nextHadBasePath;for(const testRoute of allRoutes){// if basePath is being used, the basePath will still be included
// in the pathname here to allow custom-routes to require containing
// it or not, filesystem routes and pages must always include the basePath
// if it is set
let currentPathname=parsedUrlUpdated.pathname;const originalPathname=currentPathname;const requireBasePath=testRoute.requireBasePath!==false;const isCustomRoute=customRouteTypes.has(testRoute.type);const isPublicFolderCatchall=testRoute.name==='public folder catchall';const keepBasePath=isCustomRoute||isPublicFolderCatchall;if(!keepBasePath){currentPathname=replaceBasePath(this.basePath,currentPathname);}const newParams=testRoute.match(currentPathname);// Check if the match function matched
if(newParams){// since we require basePath be present for non-custom-routes we
// 404 here when we matched an fs route
if(!keepBasePath){if(!originallyHadBasePath&&!req._nextDidRewrite){if(requireBasePath){// consider this a non-match so the 404 renders
return false;}// page checker occurs before rewrites so we need to continue
// to check those since they don't always require basePath
continue;}parsedUrlUpdated.pathname=currentPathname;}const result=await testRoute.fn(req,res,newParams,parsedUrlUpdated);// The response was handled
if(result.finished){return true;}// since the fs route didn't match we need to re-add the basePath
// to continue checking rewrites with the basePath present
if(!keepBasePath){parsedUrlUpdated.pathname=originalPathname;}if(result.pathname){parsedUrlUpdated.pathname=result.pathname;}if(result.query){parsedUrlUpdated.query={...parsedUrlUpdated.query,...result.query};}// check filesystem
if(testRoute.check===true){const originalFsPathname=parsedUrlUpdated.pathname;const fsPathname=replaceBasePath(this.basePath,originalFsPathname);for(const fsRoute of this.fsRoutes){const fsParams=fsRoute.match(fsPathname);if(fsParams){parsedUrlUpdated.pathname=fsPathname;const fsResult=await fsRoute.fn(req,res,fsParams,parsedUrlUpdated);if(fsResult.finished){return true;}parsedUrlUpdated.pathname=originalFsPathname;}}let matchedPage=await memoizedPageChecker(fsPathname);// If we didn't match a page check dynamic routes
if(!matchedPage){for(const dynamicRoute of this.dynamicRoutes){if(dynamicRoute.match(fsPathname)){matchedPage=true;}}}// Matched a page or dynamic route so render it using catchAllRoute
if(matchedPage){parsedUrlUpdated.pathname=fsPathname;const pageParams=this.catchAllRoute.match(parsedUrlUpdated.pathname);await this.catchAllRoute.fn(req,res,pageParams,parsedUrlUpdated);return true;}}}}return false;}}exports.default=Router;
//# sourceMappingURL=router.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXIuanMiXSwibmFtZXMiOlsiQ2FydCIsImlzQXV0aGVudGljYXRlZCIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiY2FydCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZXRVcmwiLCJhc1BhdGgiLCJsZW5ndGgiLCJjaGVja1VybCIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJpdGVtTGlzdCIsIm1hcCIsIml0ZW0iLCJxdWFudGl0eSIsIm1hcmdpbkJvdHRvbSIsImlkIiwicHJpY2UiLCJuYW1lIiwiaGVpZ2h0IiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiY2hlY2tvdXRJdGVtcyIsImZvbnRXZWlnaHQiLCJjb2xvciIsInRvdGFsIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUNkLE1BQUlDLGVBQWUsR0FBRyxJQUF0Qjs7QUFEYyxvQkFFa0JDLHdEQUFVLENBQUNDLGdEQUFELENBRjVCO0FBQUEsTUFFVEMsSUFGUyxlQUVUQSxJQUZTO0FBQUEsTUFFSkMsT0FGSSxlQUVKQSxPQUZJO0FBQUEsTUFFSUMsVUFGSixlQUVJQSxVQUZKLEVBSWQ7QUFDQTtBQUNBOzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLG9CQUF3QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLElBQWYsQ0FBeEIsR0FQYyxDQVNkOztBQUNBLE1BQU1PLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUwsU0FBTyxDQUFDQyxHQUFSLHdCQUE0QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVDLE1BQWYsQ0FBNUI7O0FBQ0EsTUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixRQUFHRixNQUFNLENBQUNHLE1BQVAsSUFBaUIsV0FBcEIsRUFBaUMsT0FBTyxLQUFQLENBQWpDLEtBQ0ssSUFBR0gsTUFBTSxDQUFDRyxNQUFQLElBQWlCLEdBQWpCLElBQXdCVixJQUFJLENBQUNXLE1BQUwsSUFBZSxDQUExQyxFQUE2QyxPQUFPLEtBQVAsQ0FBN0MsS0FDQSxPQUFPLElBQVA7QUFDTixHQUpEOztBQUtBLE1BQUlDLFFBQVEsR0FBR0gsTUFBTSxFQUFyQjs7QUFFQSxNQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFJO0FBQUEsUUFDbkJDLEtBRG1CLEdBQ1ZkLElBRFUsQ0FDbkJjLEtBRG1CO0FBRXZCWCxXQUFPLENBQUNDLEdBQVIsa0JBQXNCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVEsS0FBZixDQUF0Qjs7QUFDQyxRQUFHQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0gsTUFBbEIsRUFBeUI7QUFDdkIsVUFBSUksUUFBUSxHQUFHZixJQUFJLENBQUNjLEtBQUwsQ0FBV0UsR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUNwQyxZQUFJQSxJQUFJLENBQUNDLFFBQUwsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsaUJBQ0k7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBMkIsaUJBQUssRUFBRTtBQUFFQywwQkFBWSxFQUFFO0FBQWhCLGFBQWxDO0FBQXdELGVBQUcsRUFBRUYsSUFBSSxDQUFDRyxFQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFO0FBQU0sY0FBRSxFQUFDLFlBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBK0JILElBQUksQ0FBQ0ksS0FBcEMsQ0FERixFQUVFO0FBQU0sY0FBRSxFQUFDLFdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBNkJKLElBQUksQ0FBQ0ssSUFBbEMsQ0FGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsaURBQUQ7QUFDRSxpQkFBSyxFQUFFO0FBQ0xDLG9CQUFNLEVBQUUsRUFESDtBQUVMQyxxQkFBTyxFQUFFLENBRko7QUFHTEMsbUJBQUssRUFBRSxFQUhGO0FBSUxDLHlCQUFXLEVBQUUsQ0FKUjtBQUtMQyx3QkFBVSxFQUFFO0FBTFAsYUFEVDtBQVFFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTTFCLE9BQU8sQ0FBQ2dCLElBQUQsQ0FBYjtBQUFBLGFBUlg7QUFTRSxpQkFBSyxFQUFDLE1BVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQWNFLE1BQUMsaURBQUQ7QUFDRSxpQkFBSyxFQUFFO0FBQ0xNLG9CQUFNLEVBQUUsRUFESDtBQUVMQyxxQkFBTyxFQUFFLENBRko7QUFHTEMsbUJBQUssRUFBRSxFQUhGO0FBSUxDLHlCQUFXLEVBQUU7QUFKUixhQURUO0FBT0UsbUJBQU8sRUFBRTtBQUFBLHFCQUFNeEIsVUFBVSxDQUFDZSxJQUFELENBQWhCO0FBQUEsYUFQWDtBQVFFLGlCQUFLLEVBQUMsTUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGLEVBMEJFO0FBQU0saUJBQUssRUFBRTtBQUFFVSx3QkFBVSxFQUFFO0FBQWQsYUFBYjtBQUFnQyxjQUFFLEVBQUMsZUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNHVixJQUFJLENBQUNDLFFBRFIsTUExQkYsQ0FMRixDQURKO0FBc0NEO0FBQ0YsT0F6Q1ksQ0FBZjtBQTBDRSxhQUFPSCxRQUFQO0FBQ0QsS0E1Q0gsTUE2Q0s7QUFDRCxhQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUjtBQUNIO0FBQ0YsR0FuREQ7O0FBb0RBLE1BQU1hLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBSTtBQUN4QmhCLFlBQVEsR0FBR0gsTUFBTSxFQUFqQjs7QUFDQSxRQUFHRyxRQUFILEVBQWE7QUFDWCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU8sYUFBSyxFQUFFO0FBQUVhLGVBQUssRUFBRSxHQUFUO0FBQWNELGlCQUFPLEVBQUU7QUFBdkIsU0FBZDtBQUEyQyxhQUFLLEVBQUMsT0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksYUFBSyxFQUFFO0FBQUVLLG9CQUFVLEVBQUUsR0FBZDtBQUFtQkMsZUFBSyxFQUFFO0FBQTFCLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTTlCLElBQUksQ0FBQytCLEtBQVgsQ0FGRixDQURGLEVBS0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLGlEQUFEO0FBQVEsYUFBSyxFQUFFO0FBQUNKLG9CQUFVLEVBQUUsS0FBYjtBQUFvQkYsZUFBSyxFQUFFO0FBQTNCLFNBQWY7QUFBbUQsYUFBSyxFQUFDLFNBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREEsQ0FMRixDQURGO0FBYUQsS0FkRCxNQWVJO0FBQ0YsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFPLGFBQUssRUFBRTtBQUFFQSxlQUFLLEVBQUUsR0FBVDtBQUFjRCxpQkFBTyxFQUFFO0FBQXZCLFNBQWQ7QUFBMkMsYUFBSyxFQUFDLE9BQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGFBQUssRUFBRTtBQUFFSyxvQkFBVSxFQUFFLEdBQWQ7QUFBbUJDLGVBQUssRUFBRTtBQUExQixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQU05QixJQUFJLENBQUMrQixLQUFYLENBRkYsQ0FERixDQURGO0FBUUQ7QUFDRixHQTNCRCxDQXZFYyxDQW9HaEI7OztBQUNFLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLCtDQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUVQLGFBQU8sRUFBRTtBQUFYLEtBQWI7QUFBc0MsYUFBUyxFQUFDLE1BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQVcsU0FBSyxFQUFFO0FBQUVRLFlBQU0sRUFBRTtBQUFWLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsbURBQUQ7QUFBVSxTQUFLLEVBQUU7QUFBRVIsYUFBTyxFQUFFO0FBQVgsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVMLGtCQUFZLEVBQUU7QUFBaEIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLFdBQVcsRUFEZCxDQUpGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dlLGFBQWEsRUFEaEIsQ0FQRixFQVdHekIsT0FBTyxDQUFDQyxHQUFSLHdCQUE0QkcsTUFBTSxDQUFDRyxNQUFuQyxFQVhILENBSEYsQ0FGRjtBQUFBO0FBQUE7QUFBQSx3ME5BREY7QUFxQ0Q7O0dBMUlRZCxJO1VBVVFZLHFEOzs7S0FWUlosSTtBQTJJTUEsbUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSmEsd0JBQXdCLHFDQUFxQyxzQ0FBc0MsbUJBQU8sQ0FBQywyR0FBZ0MsR0FBRyw0QkFBNEIsbUJBQU8sQ0FBQywwR0FBdUMsRUFBRSxxQ0FBcUMsZ0NBQWdDLGNBQWMscUNBQXFDLG9CQUFvQixnRUFBZ0UsNENBQTRDO0FBQ2hlLDJDQUEyQyxhQUFhLGFBQWEsaUlBQWlJLEVBQUUscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLHNCQUFzQiwwQkFBMEIsd0JBQXdCLDBCQUEwQixzQ0FBc0MsdUJBQXVCLHFCQUFxQix1QkFBdUIsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsaUNBQWlDLGlDQUFpQywwREFBMEQsNEJBQTRCLDJCQUEyQixvQkFBb0IsZ0NBQWdDLGlDQUFpQztBQUMzekIsb0JBQW9CLG9DQUFvQyxrQkFBa0Isc0JBQXNCLGlDQUFpQyxxQkFBcUIsZ0JBQWdCLCtCQUErQjtBQUNyTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx3SUFBd0ksSUFBSSxTQUFTLGtCQUFrQiw0RUFBNEUsY0FBYyxPQUFPLGlCQUFpQix3Q0FBd0MsNkVBQTZFLE9BQU8sa0JBQWtCO0FBQzVjO0FBQ0EsNkRBQTZELGlFQUFpRSxrQ0FBa0M7QUFDaEs7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHVDQUF1Qyx3REFBd0QseURBQXlELHVFQUF1RSx5REFBeUQsa0JBQWtCLGdFQUFnRSxpREFBaUQ7QUFDemMsY0FBYztBQUNkO0FBQ0Esa0JBQWtCLGlEQUFpRCxvQkFBb0I7QUFDdkYsY0FBYztBQUNkO0FBQ0EsVUFBVSwyQ0FBMkMsb0VBQW9FO0FBQ3pILG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0Esa0JBQWtCLDRDQUE0QyxvQkFBb0IsMkNBQTJDLGlCQUFpQix3QkFBd0IsNENBQTRDO0FBQ2xOLDJCQUEyQixtREFBbUQsbUVBQW1FLG9DQUFvQyx5Q0FBeUMsYUFBYSxxQ0FBcUMsbUVBQW1FLHNCQUFzQixhQUFhLCtDQUErQyxzREFBc0Q7QUFDM2QsaUJBQWlCLDhDQUE4QyxtQ0FBbUMsb0JBQW9CO0FBQ3RILGdCQUFnQixxQ0FBcUMscUVBQXFFLGlFQUFpRSxnQkFBZ0IsZUFBZTtBQUMxTixrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVhOWMwNzhjYjQ3MjhlN2JmZmEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQmFkZ2UgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyXCI7XG4vLyB3ZSBjYW4gcGFzcyBjYXJ0IGRhdGEgaW4gdmlhIHByb3BzIG1ldGhvZCBcbi8vIHRoZSBhbHRlcm5hdGl2ZSBpcyB1c2luZyB1c2VDb250ZXh0IGFzIGJlbG93XG5cbmZ1bmN0aW9uIENhcnQoKSB7XG4gIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICBsZXQge2NhcnQsYWRkSXRlbSxyZW1vdmVJdGVtfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIFxuICAvL2NvbnN0IFtjYXJ0QSwgc2V0Q2FydEFdID0gdXNlU3RhdGUoe2NhcnR9KVxuICAvL2NhcnQgPSB2YWx1ZS5jYXJ0O1xuICAvL2NvbnNvbGUubG9nKCdwcm9wczonKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICBjb25zb2xlLmxvZyhgaW4gQ0FSVDogJHtKU09OLnN0cmluZ2lmeShjYXJ0KX1gKVxuICBcbiAgLy8gICBwcm9ibGVtIGlzIHRoYXQgY2FydCBtYXkgbm90IGJlIHNldCBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKGBSb3V0ZXIgUGF0aDogJHtKU09OLnN0cmluZ2lmeShyb3V0ZXIpfWApXG4gIGNvbnN0IHNldFVybCA9ICgpID0+IHtcbiAgICBpZihyb3V0ZXIuYXNQYXRoID09IFwiL2NoZWNrb3V0XCIpIHJldHVybiBmYWxzZTtcbiAgICBlbHNlIGlmKHJvdXRlci5hc1BhdGggPT0gXCIvXCIgJiYgY2FydC5sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlXG4gICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgY2hlY2tVcmwgPSBzZXRVcmwoKTtcblxuICBjb25zdCByZW5kZXJJdGVtcyA9ICgpPT57XG4gIGxldCB7aXRlbXN9ID0gY2FydDtcbiAgIGNvbnNvbGUubG9nKGBpdGVtczogJHtKU09OLnN0cmluZ2lmeShpdGVtcyl9YClcbiAgICBpZihpdGVtcyAmJiBpdGVtcy5sZW5ndGgpe1xuICAgICAgdmFyIGl0ZW1MaXN0ID0gY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5xdWFudGl0eSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1vbmVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tcHJpY2VcIj4mbmJzcDsgJHtpdGVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLW5hbWVcIj4mbmJzcDsge2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSXRlbShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0gaWQ9XCJpdGVtLXF1YW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9eFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXG4gICAgfVxuICB9XG4gIGNvbnN0IGNoZWNrb3V0SXRlbXMgPSAoKT0+e1xuICAgIGNoZWNrVXJsID0gc2V0VXJsKCk7XG4gICAgaWYoY2hlY2tVcmwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJhZGdlIHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBhZGRpbmc6IDEwIH19IGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAxMDAsIGNvbG9yOiBcImdyYXlcIiB9fT5Ub3RhbDo8L2g1PlxuICAgICAgICAgICAgPGgzPiR7Y2FydC50b3RhbH08L2gzPlxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dC9cIj5cbiAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIxMCVcIiwgd2lkdGg6IFwiNjAlXCIgfX0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICA8YT5PcmRlcjwvYT5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QmFkZ2Ugc3R5bGU9e3sgd2lkdGg6IDIwMCwgcGFkZGluZzogMTAgfX0gY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCwgY29sb3I6IFwiZ3JheVwiIH19PlRvdGFsOjwvaDU+XG4gICAgICAgICAgICA8aDM+JHtjYXJ0LnRvdGFsfTwvaDM+XG4gICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbi8vIHJldHVybiBDYXJ0XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4gQ2FydDwvaDE+XG4gICAgICA8Q2FyZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggNXB4XCIgfX0gY2xhc3NOYW1lPVwiY2FydFwiPlxuICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+WW91ciBPcmRlcjo8L0NhcmRUaXRsZT5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkQm9keSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICAgIDxzbWFsbD5JdGVtczo8L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cmVuZGVySXRlbXMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2NoZWNrb3V0SXRlbXMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7Y29uc29sZS5sb2coYFJvdXRlciBQYXRoOiAke3JvdXRlci5hc1BhdGh9YCl9XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNpdGVtLXByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDEpO1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLXF1YW50aXR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDEpO1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9ZXhwb3J0cy5yb3V0ZT12b2lkIDA7dmFyIF9wYXRoTWF0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoXCIpKTt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCByb3V0ZT0oMCxfcGF0aE1hdGNoLmRlZmF1bHQpKCk7ZXhwb3J0cy5yb3V0ZT1yb3V0ZTtjb25zdCBjdXN0b21Sb3V0ZVR5cGVzPW5ldyBTZXQoWydyZXdyaXRlJywncmVkaXJlY3QnLCdoZWFkZXInXSk7ZnVuY3Rpb24gcmVwbGFjZUJhc2VQYXRoKGJhc2VQYXRoLHBhdGhuYW1lKXsvLyBJZiByZXBsYWNlIGVuZHMgdXAgcmVwbGFjaW5nIHRoZSBmdWxsIHVybCBpdCdsbCBiZSBgdW5kZWZpbmVkYCwgbWVhbmluZyB3ZSBoYXZlIHRvIGRlZmF1bHQgaXQgdG8gYC9gXG5yZXR1cm4gcGF0aG5hbWUucmVwbGFjZShiYXNlUGF0aCwnJyl8fCcvJzt9Y2xhc3MgUm91dGVye2NvbnN0cnVjdG9yKHtiYXNlUGF0aD0nJyxoZWFkZXJzPVtdLGZzUm91dGVzPVtdLHJld3JpdGVzPVtdLHJlZGlyZWN0cz1bXSxjYXRjaEFsbFJvdXRlLGR5bmFtaWNSb3V0ZXM9W10scGFnZUNoZWNrZXIsdXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlc30pe3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuaGVhZGVycz12b2lkIDA7dGhpcy5mc1JvdXRlcz12b2lkIDA7dGhpcy5yZXdyaXRlcz12b2lkIDA7dGhpcy5yZWRpcmVjdHM9dm9pZCAwO3RoaXMuY2F0Y2hBbGxSb3V0ZT12b2lkIDA7dGhpcy5wYWdlQ2hlY2tlcj12b2lkIDA7dGhpcy5keW5hbWljUm91dGVzPXZvaWQgMDt0aGlzLnVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXM9dm9pZCAwO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5oZWFkZXJzPWhlYWRlcnM7dGhpcy5mc1JvdXRlcz1mc1JvdXRlczt0aGlzLnJld3JpdGVzPXJld3JpdGVzO3RoaXMucmVkaXJlY3RzPXJlZGlyZWN0czt0aGlzLnBhZ2VDaGVja2VyPXBhZ2VDaGVja2VyO3RoaXMuY2F0Y2hBbGxSb3V0ZT1jYXRjaEFsbFJvdXRlO3RoaXMuZHluYW1pY1JvdXRlcz1keW5hbWljUm91dGVzO3RoaXMudXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlcz11c2VGaWxlU3lzdGVtUHVibGljUm91dGVzO31zZXREeW5hbWljUm91dGVzKHJvdXRlcz1bXSl7dGhpcy5keW5hbWljUm91dGVzPXJvdXRlczt9YWRkRnNSb3V0ZShmc1JvdXRlKXt0aGlzLmZzUm91dGVzLnVuc2hpZnQoZnNSb3V0ZSk7fWFzeW5jIGV4ZWN1dGUocmVxLHJlcyxwYXJzZWRVcmwpey8vIG1lbW9pemUgcGFnZSBjaGVjayBjYWxscyBzbyB3ZSBkb24ndCBkdXBsaWNhdGUgY2hlY2tzIGZvciBwYWdlc1xuY29uc3QgcGFnZUNoZWNrcz17fTtjb25zdCBtZW1vaXplZFBhZ2VDaGVja2VyPWFzeW5jIHA9PntpZihwYWdlQ2hlY2tzW3BdKXtyZXR1cm4gcGFnZUNoZWNrc1twXTt9Y29uc3QgcmVzdWx0PXRoaXMucGFnZUNoZWNrZXIocCk7cGFnZUNoZWNrc1twXT1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O2xldCBwYXJzZWRVcmxVcGRhdGVkPXBhcnNlZFVybDsvKlxuICAgICAgRGVzaXJlZCByb3V0ZXMgb3JkZXJcbiAgICAgIC0gaGVhZGVyc1xuICAgICAgLSByZWRpcmVjdHNcbiAgICAgIC0gQ2hlY2sgZmlsZXN5c3RlbSAoaW5jbHVkaW5nIHBhZ2VzKSwgaWYgbm90aGluZyBmb3VuZCBjb250aW51ZVxuICAgICAgLSBVc2VyIHJld3JpdGVzIChjaGVja2luZyBmaWxlc3lzdGVtIGFuZCBwYWdlcyBlYWNoIG1hdGNoKVxuICAgICovY29uc3QgYWxsUm91dGVzPVsuLi50aGlzLmhlYWRlcnMsLi4udGhpcy5yZWRpcmVjdHMsLi4udGhpcy5mc1JvdXRlcywvLyBXZSBvbmx5IGNoZWNrIHRoZSBjYXRjaC1hbGwgcm91dGUgaWYgcHVibGljIHBhZ2Ugcm91dGVzIGhhc24ndCBiZWVuXG4vLyBkaXNhYmxlZFxuLi4uKHRoaXMudXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlcz9be3R5cGU6J3JvdXRlJyxuYW1lOidwYWdlIGNoZWNrZXInLHJlcXVpcmVCYXNlUGF0aDpmYWxzZSxtYXRjaDpyb3V0ZSgnLzpwYXRoKicpLGZuOmFzeW5jKGNoZWNrZXJSZXEsY2hlY2tlclJlcyxwYXJhbXMscGFyc2VkQ2hlY2tlclVybCk9PntsZXR7cGF0aG5hbWV9PXBhcnNlZENoZWNrZXJVcmw7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lfHwnLycpO2lmKCFwYXRobmFtZSl7cmV0dXJue2ZpbmlzaGVkOmZhbHNlfTt9aWYoYXdhaXQgbWVtb2l6ZWRQYWdlQ2hlY2tlcihwYXRobmFtZSkpe3JldHVybiB0aGlzLmNhdGNoQWxsUm91dGUuZm4oY2hlY2tlclJlcSxjaGVja2VyUmVzLHBhcmFtcyxwYXJzZWRDaGVja2VyVXJsKTt9cmV0dXJue2ZpbmlzaGVkOmZhbHNlfTt9fV06W10pLC4uLnRoaXMucmV3cml0ZXMsLy8gV2Ugb25seSBjaGVjayB0aGUgY2F0Y2gtYWxsIHJvdXRlIGlmIHB1YmxpYyBwYWdlIHJvdXRlcyBoYXNuJ3QgYmVlblxuLy8gZGlzYWJsZWRcbi4uLih0aGlzLnVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXM/W3RoaXMuY2F0Y2hBbGxSb3V0ZV06W10pXTtjb25zdCBvcmlnaW5hbGx5SGFkQmFzZVBhdGg9IXRoaXMuYmFzZVBhdGh8fHJlcS5fbmV4dEhhZEJhc2VQYXRoO2Zvcihjb25zdCB0ZXN0Um91dGUgb2YgYWxsUm91dGVzKXsvLyBpZiBiYXNlUGF0aCBpcyBiZWluZyB1c2VkLCB0aGUgYmFzZVBhdGggd2lsbCBzdGlsbCBiZSBpbmNsdWRlZFxuLy8gaW4gdGhlIHBhdGhuYW1lIGhlcmUgdG8gYWxsb3cgY3VzdG9tLXJvdXRlcyB0byByZXF1aXJlIGNvbnRhaW5pbmdcbi8vIGl0IG9yIG5vdCwgZmlsZXN5c3RlbSByb3V0ZXMgYW5kIHBhZ2VzIG11c3QgYWx3YXlzIGluY2x1ZGUgdGhlIGJhc2VQYXRoXG4vLyBpZiBpdCBpcyBzZXRcbmxldCBjdXJyZW50UGF0aG5hbWU9cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZTtjb25zdCBvcmlnaW5hbFBhdGhuYW1lPWN1cnJlbnRQYXRobmFtZTtjb25zdCByZXF1aXJlQmFzZVBhdGg9dGVzdFJvdXRlLnJlcXVpcmVCYXNlUGF0aCE9PWZhbHNlO2NvbnN0IGlzQ3VzdG9tUm91dGU9Y3VzdG9tUm91dGVUeXBlcy5oYXModGVzdFJvdXRlLnR5cGUpO2NvbnN0IGlzUHVibGljRm9sZGVyQ2F0Y2hhbGw9dGVzdFJvdXRlLm5hbWU9PT0ncHVibGljIGZvbGRlciBjYXRjaGFsbCc7Y29uc3Qga2VlcEJhc2VQYXRoPWlzQ3VzdG9tUm91dGV8fGlzUHVibGljRm9sZGVyQ2F0Y2hhbGw7aWYoIWtlZXBCYXNlUGF0aCl7Y3VycmVudFBhdGhuYW1lPXJlcGxhY2VCYXNlUGF0aCh0aGlzLmJhc2VQYXRoLGN1cnJlbnRQYXRobmFtZSk7fWNvbnN0IG5ld1BhcmFtcz10ZXN0Um91dGUubWF0Y2goY3VycmVudFBhdGhuYW1lKTsvLyBDaGVjayBpZiB0aGUgbWF0Y2ggZnVuY3Rpb24gbWF0Y2hlZFxuaWYobmV3UGFyYW1zKXsvLyBzaW5jZSB3ZSByZXF1aXJlIGJhc2VQYXRoIGJlIHByZXNlbnQgZm9yIG5vbi1jdXN0b20tcm91dGVzIHdlXG4vLyA0MDQgaGVyZSB3aGVuIHdlIG1hdGNoZWQgYW4gZnMgcm91dGVcbmlmKCFrZWVwQmFzZVBhdGgpe2lmKCFvcmlnaW5hbGx5SGFkQmFzZVBhdGgmJiFyZXEuX25leHREaWRSZXdyaXRlKXtpZihyZXF1aXJlQmFzZVBhdGgpey8vIGNvbnNpZGVyIHRoaXMgYSBub24tbWF0Y2ggc28gdGhlIDQwNCByZW5kZXJzXG5yZXR1cm4gZmFsc2U7fS8vIHBhZ2UgY2hlY2tlciBvY2N1cnMgYmVmb3JlIHJld3JpdGVzIHNvIHdlIG5lZWQgdG8gY29udGludWVcbi8vIHRvIGNoZWNrIHRob3NlIHNpbmNlIHRoZXkgZG9uJ3QgYWx3YXlzIHJlcXVpcmUgYmFzZVBhdGhcbmNvbnRpbnVlO31wYXJzZWRVcmxVcGRhdGVkLnBhdGhuYW1lPWN1cnJlbnRQYXRobmFtZTt9Y29uc3QgcmVzdWx0PWF3YWl0IHRlc3RSb3V0ZS5mbihyZXEscmVzLG5ld1BhcmFtcyxwYXJzZWRVcmxVcGRhdGVkKTsvLyBUaGUgcmVzcG9uc2Ugd2FzIGhhbmRsZWRcbmlmKHJlc3VsdC5maW5pc2hlZCl7cmV0dXJuIHRydWU7fS8vIHNpbmNlIHRoZSBmcyByb3V0ZSBkaWRuJ3QgbWF0Y2ggd2UgbmVlZCB0byByZS1hZGQgdGhlIGJhc2VQYXRoXG4vLyB0byBjb250aW51ZSBjaGVja2luZyByZXdyaXRlcyB3aXRoIHRoZSBiYXNlUGF0aCBwcmVzZW50XG5pZigha2VlcEJhc2VQYXRoKXtwYXJzZWRVcmxVcGRhdGVkLnBhdGhuYW1lPW9yaWdpbmFsUGF0aG5hbWU7fWlmKHJlc3VsdC5wYXRobmFtZSl7cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZT1yZXN1bHQucGF0aG5hbWU7fWlmKHJlc3VsdC5xdWVyeSl7cGFyc2VkVXJsVXBkYXRlZC5xdWVyeT17Li4ucGFyc2VkVXJsVXBkYXRlZC5xdWVyeSwuLi5yZXN1bHQucXVlcnl9O30vLyBjaGVjayBmaWxlc3lzdGVtXG5pZih0ZXN0Um91dGUuY2hlY2s9PT10cnVlKXtjb25zdCBvcmlnaW5hbEZzUGF0aG5hbWU9cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZTtjb25zdCBmc1BhdGhuYW1lPXJlcGxhY2VCYXNlUGF0aCh0aGlzLmJhc2VQYXRoLG9yaWdpbmFsRnNQYXRobmFtZSk7Zm9yKGNvbnN0IGZzUm91dGUgb2YgdGhpcy5mc1JvdXRlcyl7Y29uc3QgZnNQYXJhbXM9ZnNSb3V0ZS5tYXRjaChmc1BhdGhuYW1lKTtpZihmc1BhcmFtcyl7cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZT1mc1BhdGhuYW1lO2NvbnN0IGZzUmVzdWx0PWF3YWl0IGZzUm91dGUuZm4ocmVxLHJlcyxmc1BhcmFtcyxwYXJzZWRVcmxVcGRhdGVkKTtpZihmc1Jlc3VsdC5maW5pc2hlZCl7cmV0dXJuIHRydWU7fXBhcnNlZFVybFVwZGF0ZWQucGF0aG5hbWU9b3JpZ2luYWxGc1BhdGhuYW1lO319bGV0IG1hdGNoZWRQYWdlPWF3YWl0IG1lbW9pemVkUGFnZUNoZWNrZXIoZnNQYXRobmFtZSk7Ly8gSWYgd2UgZGlkbid0IG1hdGNoIGEgcGFnZSBjaGVjayBkeW5hbWljIHJvdXRlc1xuaWYoIW1hdGNoZWRQYWdlKXtmb3IoY29uc3QgZHluYW1pY1JvdXRlIG9mIHRoaXMuZHluYW1pY1JvdXRlcyl7aWYoZHluYW1pY1JvdXRlLm1hdGNoKGZzUGF0aG5hbWUpKXttYXRjaGVkUGFnZT10cnVlO319fS8vIE1hdGNoZWQgYSBwYWdlIG9yIGR5bmFtaWMgcm91dGUgc28gcmVuZGVyIGl0IHVzaW5nIGNhdGNoQWxsUm91dGVcbmlmKG1hdGNoZWRQYWdlKXtwYXJzZWRVcmxVcGRhdGVkLnBhdGhuYW1lPWZzUGF0aG5hbWU7Y29uc3QgcGFnZVBhcmFtcz10aGlzLmNhdGNoQWxsUm91dGUubWF0Y2gocGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZSk7YXdhaXQgdGhpcy5jYXRjaEFsbFJvdXRlLmZuKHJlcSxyZXMscGFnZVBhcmFtcyxwYXJzZWRVcmxVcGRhdGVkKTtyZXR1cm4gdHJ1ZTt9fX19cmV0dXJuIGZhbHNlO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9