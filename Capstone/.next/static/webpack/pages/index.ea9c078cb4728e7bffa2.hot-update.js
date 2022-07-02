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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXIuanMiXSwibmFtZXMiOlsiQ2FydCIsImlzQXV0aGVudGljYXRlZCIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiY2FydCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZXRVcmwiLCJhc1BhdGgiLCJsZW5ndGgiLCJjaGVja1VybCIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJpdGVtTGlzdCIsIm1hcCIsIml0ZW0iLCJxdWFudGl0eSIsIm1hcmdpbkJvdHRvbSIsImlkIiwicHJpY2UiLCJuYW1lIiwiaGVpZ2h0IiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiY2hlY2tvdXRJdGVtcyIsImZvbnRXZWlnaHQiLCJjb2xvciIsInRvdGFsIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUNkLE1BQUlDLGVBQWUsR0FBRyxJQUF0Qjs7QUFEYyxvQkFFa0JDLHdEQUFVLENBQUNDLGdEQUFELENBRjVCO0FBQUEsTUFFVEMsSUFGUyxlQUVUQSxJQUZTO0FBQUEsTUFFSkMsT0FGSSxlQUVKQSxPQUZJO0FBQUEsTUFFSUMsVUFGSixlQUVJQSxVQUZKLEVBSWQ7QUFDQTtBQUNBOzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLG9CQUF3QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLElBQWYsQ0FBeEIsR0FQYyxDQVNkOztBQUNBLE1BQU1PLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7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RSx5REFBeUQsa0JBQWtCLGdFQUFnRSxpREFBaUQ7QUFDemMsY0FBYztBQUNkO0FBQ0Esa0JBQWtCLGlEQUFpRCxvQkFBb0I7QUFDdkYsY0FBYztBQUNkO0FBQ0EsVUFBVSwyQ0FBMkMsb0VBQW9FO0FBQ3pILG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0Esa0JBQWtCLDRDQUE0QyxvQkFBb0IsMkNBQTJDLGlCQUFpQix3QkFBd0IsNENBQTRDO0FBQ2xOLDJCQUEyQixtREFBbUQsbUVBQW1FLG9DQUFvQyx5Q0FBeUMsYUFBYSxxQ0FBcUMsbUVBQW1FLHNCQUFzQixhQUFhLCtDQUErQyxzREFBc0Q7QUFDM2QsaUJBQWlCLDhDQUE4QyxtQ0FBbUMsb0JBQW9CO0FBQ3RILGdCQUFnQixxQ0FBcUMscUVBQXFFLGlFQUFpRSxnQkFBZ0IsZUFBZTtBQUMxTixrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYTljMDc4Y2I0NzI4ZTdiZmZhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIENhcmRCb2R5LCBDYXJkVGl0bGUsIEJhZGdlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3JvdXRlclwiO1xuLy8gd2UgY2FuIHBhc3MgY2FydCBkYXRhIGluIHZpYSBwcm9wcyBtZXRob2QgXG4vLyB0aGUgYWx0ZXJuYXRpdmUgaXMgdXNpbmcgdXNlQ29udGV4dCBhcyBiZWxvd1xuXG5mdW5jdGlvbiBDYXJ0KCkge1xuICBsZXQgaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgbGV0IHtjYXJ0LGFkZEl0ZW0scmVtb3ZlSXRlbX0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBcbiAgLy9jb25zdCBbY2FydEEsIHNldENhcnRBXSA9IHVzZVN0YXRlKHtjYXJ0fSlcbiAgLy9jYXJ0ID0gdmFsdWUuY2FydDtcbiAgLy9jb25zb2xlLmxvZygncHJvcHM6JysgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgY29uc29sZS5sb2coYGluIENBUlQ6ICR7SlNPTi5zdHJpbmdpZnkoY2FydCl9YClcbiAgXG4gIC8vICAgcHJvYmxlbSBpcyB0aGF0IGNhcnQgbWF5IG5vdCBiZSBzZXQgXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZyhgUm91dGVyIFBhdGg6ICR7SlNPTi5zdHJpbmdpZnkocm91dGVyKX1gKVxuICBjb25zdCBzZXRVcmwgPSAoKSA9PiB7XG4gICAgaWYocm91dGVyLmFzUGF0aCA9PSBcIi9jaGVja291dFwiKSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSBpZihyb3V0ZXIuYXNQYXRoID09IFwiL1wiICYmIGNhcnQubGVuZ3RoID09IDApIHJldHVybiBmYWxzZVxuICAgIGVsc2UgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGNoZWNrVXJsID0gc2V0VXJsKCk7XG5cbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoKT0+e1xuICBsZXQge2l0ZW1zfSA9IGNhcnQ7XG4gICBjb25zb2xlLmxvZyhgaXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkoaXRlbXMpfWApXG4gICAgaWYoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKXtcbiAgICAgIHZhciBpdGVtTGlzdCA9IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ucXVhbnRpdHkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtb25lXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNSB9fSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLXByaWNlXCI+Jm5ic3A7ICR7aXRlbS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+Jm5ic3A7IHtpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fXhcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xuICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KVxuICAgIH1cbiAgfVxuICBjb25zdCBjaGVja291dEl0ZW1zID0gKCk9PntcbiAgICBjaGVja1VybCA9IHNldFVybCgpO1xuICAgIGlmKGNoZWNrVXJsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCYWRnZSBzdHlsZT17eyB3aWR0aDogMjAwLCBwYWRkaW5nOiAxMCB9fSBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogMTAwLCBjb2xvcjogXCJncmF5XCIgfX0+VG90YWw6PC9oNT5cbiAgICAgICAgICAgIDxoMz4ke2NhcnQudG90YWx9PC9oMz5cbiAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXQvXCI+XG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMTAlXCIsIHdpZHRoOiBcIjYwJVwiIH19IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgPGE+T3JkZXI8L2E+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJhZGdlIHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBhZGRpbmc6IDEwIH19IGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAxMDAsIGNvbG9yOiBcImdyYXlcIiB9fT5Ub3RhbDo8L2g1PlxuICAgICAgICAgICAgPGgzPiR7Y2FydC50b3RhbH08L2gzPlxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4vLyByZXR1cm4gQ2FydFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+IENhcnQ8L2gxPlxuICAgICAgPENhcmQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDVweFwiIH19IGNsYXNzTmFtZT1cImNhcnRcIj5cbiAgICAgICAgPENhcmRUaXRsZSBzdHlsZT17eyBtYXJnaW46IDEwIH19PllvdXIgT3JkZXI6PC9DYXJkVGl0bGU+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYgfX0+XG4gICAgICAgICAgICA8c21hbGw+SXRlbXM6PC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3JlbmRlckl0ZW1zKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjaGVja291dEl0ZW1zKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAge2NvbnNvbGUubG9nKGBSb3V0ZXIgUGF0aDogJHtyb3V0ZXIuYXNQYXRofWApfVxuICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgPC9DYXJkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjaXRlbS1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICBjb2xvcjogcmdiYSg5NywgOTcsIDk3LCAxKTtcbiAgICAgICAgfVxuICAgICAgICAjaXRlbS1xdWFudGl0eSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICAjaXRlbS1uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDEpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PWV4cG9ydHMucm91dGU9dm9pZCAwO3ZhciBfcGF0aE1hdGNoPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaFwiKSk7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Y29uc3Qgcm91dGU9KDAsX3BhdGhNYXRjaC5kZWZhdWx0KSgpO2V4cG9ydHMucm91dGU9cm91dGU7Y29uc3QgY3VzdG9tUm91dGVUeXBlcz1uZXcgU2V0KFsncmV3cml0ZScsJ3JlZGlyZWN0JywnaGVhZGVyJ10pO2Z1bmN0aW9uIHJlcGxhY2VCYXNlUGF0aChiYXNlUGF0aCxwYXRobmFtZSl7Ly8gSWYgcmVwbGFjZSBlbmRzIHVwIHJlcGxhY2luZyB0aGUgZnVsbCB1cmwgaXQnbGwgYmUgYHVuZGVmaW5lZGAsIG1lYW5pbmcgd2UgaGF2ZSB0byBkZWZhdWx0IGl0IHRvIGAvYFxucmV0dXJuIHBhdGhuYW1lLnJlcGxhY2UoYmFzZVBhdGgsJycpfHwnLyc7fWNsYXNzIFJvdXRlcntjb25zdHJ1Y3Rvcih7YmFzZVBhdGg9JycsaGVhZGVycz1bXSxmc1JvdXRlcz1bXSxyZXdyaXRlcz1bXSxyZWRpcmVjdHM9W10sY2F0Y2hBbGxSb3V0ZSxkeW5hbWljUm91dGVzPVtdLHBhZ2VDaGVja2VyLHVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXN9KXt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmhlYWRlcnM9dm9pZCAwO3RoaXMuZnNSb3V0ZXM9dm9pZCAwO3RoaXMucmV3cml0ZXM9dm9pZCAwO3RoaXMucmVkaXJlY3RzPXZvaWQgMDt0aGlzLmNhdGNoQWxsUm91dGU9dm9pZCAwO3RoaXMucGFnZUNoZWNrZXI9dm9pZCAwO3RoaXMuZHluYW1pY1JvdXRlcz12b2lkIDA7dGhpcy51c2VGaWxlU3lzdGVtUHVibGljUm91dGVzPXZvaWQgMDt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuaGVhZGVycz1oZWFkZXJzO3RoaXMuZnNSb3V0ZXM9ZnNSb3V0ZXM7dGhpcy5yZXdyaXRlcz1yZXdyaXRlczt0aGlzLnJlZGlyZWN0cz1yZWRpcmVjdHM7dGhpcy5wYWdlQ2hlY2tlcj1wYWdlQ2hlY2tlcjt0aGlzLmNhdGNoQWxsUm91dGU9Y2F0Y2hBbGxSb3V0ZTt0aGlzLmR5bmFtaWNSb3V0ZXM9ZHluYW1pY1JvdXRlczt0aGlzLnVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXM9dXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlczt9c2V0RHluYW1pY1JvdXRlcyhyb3V0ZXM9W10pe3RoaXMuZHluYW1pY1JvdXRlcz1yb3V0ZXM7fWFkZEZzUm91dGUoZnNSb3V0ZSl7dGhpcy5mc1JvdXRlcy51bnNoaWZ0KGZzUm91dGUpO31hc3luYyBleGVjdXRlKHJlcSxyZXMscGFyc2VkVXJsKXsvLyBtZW1vaXplIHBhZ2UgY2hlY2sgY2FsbHMgc28gd2UgZG9uJ3QgZHVwbGljYXRlIGNoZWNrcyBmb3IgcGFnZXNcbmNvbnN0IHBhZ2VDaGVja3M9e307Y29uc3QgbWVtb2l6ZWRQYWdlQ2hlY2tlcj1hc3luYyBwPT57aWYocGFnZUNoZWNrc1twXSl7cmV0dXJuIHBhZ2VDaGVja3NbcF07fWNvbnN0IHJlc3VsdD10aGlzLnBhZ2VDaGVja2VyKHApO3BhZ2VDaGVja3NbcF09cmVzdWx0O3JldHVybiByZXN1bHQ7fTtsZXQgcGFyc2VkVXJsVXBkYXRlZD1wYXJzZWRVcmw7LypcbiAgICAgIERlc2lyZWQgcm91dGVzIG9yZGVyXG4gICAgICAtIGhlYWRlcnNcbiAgICAgIC0gcmVkaXJlY3RzXG4gICAgICAtIENoZWNrIGZpbGVzeXN0ZW0gKGluY2x1ZGluZyBwYWdlcyksIGlmIG5vdGhpbmcgZm91bmQgY29udGludWVcbiAgICAgIC0gVXNlciByZXdyaXRlcyAoY2hlY2tpbmcgZmlsZXN5c3RlbSBhbmQgcGFnZXMgZWFjaCBtYXRjaClcbiAgICAqL2NvbnN0IGFsbFJvdXRlcz1bLi4udGhpcy5oZWFkZXJzLC4uLnRoaXMucmVkaXJlY3RzLC4uLnRoaXMuZnNSb3V0ZXMsLy8gV2Ugb25seSBjaGVjayB0aGUgY2F0Y2gtYWxsIHJvdXRlIGlmIHB1YmxpYyBwYWdlIHJvdXRlcyBoYXNuJ3QgYmVlblxuLy8gZGlzYWJsZWRcbi4uLih0aGlzLnVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXM/W3t0eXBlOidyb3V0ZScsbmFtZToncGFnZSBjaGVja2VyJyxyZXF1aXJlQmFzZVBhdGg6ZmFsc2UsbWF0Y2g6cm91dGUoJy86cGF0aConKSxmbjphc3luYyhjaGVja2VyUmVxLGNoZWNrZXJSZXMscGFyYW1zLHBhcnNlZENoZWNrZXJVcmwpPT57bGV0e3BhdGhuYW1lfT1wYXJzZWRDaGVja2VyVXJsO3BhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZXx8Jy8nKTtpZighcGF0aG5hbWUpe3JldHVybntmaW5pc2hlZDpmYWxzZX07fWlmKGF3YWl0IG1lbW9pemVkUGFnZUNoZWNrZXIocGF0aG5hbWUpKXtyZXR1cm4gdGhpcy5jYXRjaEFsbFJvdXRlLmZuKGNoZWNrZXJSZXEsY2hlY2tlclJlcyxwYXJhbXMscGFyc2VkQ2hlY2tlclVybCk7fXJldHVybntmaW5pc2hlZDpmYWxzZX07fX1dOltdKSwuLi50aGlzLnJld3JpdGVzLC8vIFdlIG9ubHkgY2hlY2sgdGhlIGNhdGNoLWFsbCByb3V0ZSBpZiBwdWJsaWMgcGFnZSByb3V0ZXMgaGFzbid0IGJlZW5cbi8vIGRpc2FibGVkXG4uLi4odGhpcy51c2VGaWxlU3lzdGVtUHVibGljUm91dGVzP1t0aGlzLmNhdGNoQWxsUm91dGVdOltdKV07Y29uc3Qgb3JpZ2luYWxseUhhZEJhc2VQYXRoPSF0aGlzLmJhc2VQYXRofHxyZXEuX25leHRIYWRCYXNlUGF0aDtmb3IoY29uc3QgdGVzdFJvdXRlIG9mIGFsbFJvdXRlcyl7Ly8gaWYgYmFzZVBhdGggaXMgYmVpbmcgdXNlZCwgdGhlIGJhc2VQYXRoIHdpbGwgc3RpbGwgYmUgaW5jbHVkZWRcbi8vIGluIHRoZSBwYXRobmFtZSBoZXJlIHRvIGFsbG93IGN1c3RvbS1yb3V0ZXMgdG8gcmVxdWlyZSBjb250YWluaW5nXG4vLyBpdCBvciBub3QsIGZpbGVzeXN0ZW0gcm91dGVzIGFuZCBwYWdlcyBtdXN0IGFsd2F5cyBpbmNsdWRlIHRoZSBiYXNlUGF0aFxuLy8gaWYgaXQgaXMgc2V0XG5sZXQgY3VycmVudFBhdGhuYW1lPXBhcnNlZFVybFVwZGF0ZWQucGF0aG5hbWU7Y29uc3Qgb3JpZ2luYWxQYXRobmFtZT1jdXJyZW50UGF0aG5hbWU7Y29uc3QgcmVxdWlyZUJhc2VQYXRoPXRlc3RSb3V0ZS5yZXF1aXJlQmFzZVBhdGghPT1mYWxzZTtjb25zdCBpc0N1c3RvbVJvdXRlPWN1c3RvbVJvdXRlVHlwZXMuaGFzKHRlc3RSb3V0ZS50eXBlKTtjb25zdCBpc1B1YmxpY0ZvbGRlckNhdGNoYWxsPXRlc3RSb3V0ZS5uYW1lPT09J3B1YmxpYyBmb2xkZXIgY2F0Y2hhbGwnO2NvbnN0IGtlZXBCYXNlUGF0aD1pc0N1c3RvbVJvdXRlfHxpc1B1YmxpY0ZvbGRlckNhdGNoYWxsO2lmKCFrZWVwQmFzZVBhdGgpe2N1cnJlbnRQYXRobmFtZT1yZXBsYWNlQmFzZVBhdGgodGhpcy5iYXNlUGF0aCxjdXJyZW50UGF0aG5hbWUpO31jb25zdCBuZXdQYXJhbXM9dGVzdFJvdXRlLm1hdGNoKGN1cnJlbnRQYXRobmFtZSk7Ly8gQ2hlY2sgaWYgdGhlIG1hdGNoIGZ1bmN0aW9uIG1hdGNoZWRcbmlmKG5ld1BhcmFtcyl7Ly8gc2luY2Ugd2UgcmVxdWlyZSBiYXNlUGF0aCBiZSBwcmVzZW50IGZvciBub24tY3VzdG9tLXJvdXRlcyB3ZVxuLy8gNDA0IGhlcmUgd2hlbiB3ZSBtYXRjaGVkIGFuIGZzIHJvdXRlXG5pZigha2VlcEJhc2VQYXRoKXtpZighb3JpZ2luYWxseUhhZEJhc2VQYXRoJiYhcmVxLl9uZXh0RGlkUmV3cml0ZSl7aWYocmVxdWlyZUJhc2VQYXRoKXsvLyBjb25zaWRlciB0aGlzIGEgbm9uLW1hdGNoIHNvIHRoZSA0MDQgcmVuZGVyc1xucmV0dXJuIGZhbHNlO30vLyBwYWdlIGNoZWNrZXIgb2NjdXJzIGJlZm9yZSByZXdyaXRlcyBzbyB3ZSBuZWVkIHRvIGNvbnRpbnVlXG4vLyB0byBjaGVjayB0aG9zZSBzaW5jZSB0aGV5IGRvbid0IGFsd2F5cyByZXF1aXJlIGJhc2VQYXRoXG5jb250aW51ZTt9cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZT1jdXJyZW50UGF0aG5hbWU7fWNvbnN0IHJlc3VsdD1hd2FpdCB0ZXN0Um91dGUuZm4ocmVxLHJlcyxuZXdQYXJhbXMscGFyc2VkVXJsVXBkYXRlZCk7Ly8gVGhlIHJlc3BvbnNlIHdhcyBoYW5kbGVkXG5pZihyZXN1bHQuZmluaXNoZWQpe3JldHVybiB0cnVlO30vLyBzaW5jZSB0aGUgZnMgcm91dGUgZGlkbid0IG1hdGNoIHdlIG5lZWQgdG8gcmUtYWRkIHRoZSBiYXNlUGF0aFxuLy8gdG8gY29udGludWUgY2hlY2tpbmcgcmV3cml0ZXMgd2l0aCB0aGUgYmFzZVBhdGggcHJlc2VudFxuaWYoIWtlZXBCYXNlUGF0aCl7cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZT1vcmlnaW5hbFBhdGhuYW1lO31pZihyZXN1bHQucGF0aG5hbWUpe3BhcnNlZFVybFVwZGF0ZWQucGF0aG5hbWU9cmVzdWx0LnBhdGhuYW1lO31pZihyZXN1bHQucXVlcnkpe3BhcnNlZFVybFVwZGF0ZWQucXVlcnk9ey4uLnBhcnNlZFVybFVwZGF0ZWQucXVlcnksLi4ucmVzdWx0LnF1ZXJ5fTt9Ly8gY2hlY2sgZmlsZXN5c3RlbVxuaWYodGVzdFJvdXRlLmNoZWNrPT09dHJ1ZSl7Y29uc3Qgb3JpZ2luYWxGc1BhdGhuYW1lPXBhcnNlZFVybFVwZGF0ZWQucGF0aG5hbWU7Y29uc3QgZnNQYXRobmFtZT1yZXBsYWNlQmFzZVBhdGgodGhpcy5iYXNlUGF0aCxvcmlnaW5hbEZzUGF0aG5hbWUpO2Zvcihjb25zdCBmc1JvdXRlIG9mIHRoaXMuZnNSb3V0ZXMpe2NvbnN0IGZzUGFyYW1zPWZzUm91dGUubWF0Y2goZnNQYXRobmFtZSk7aWYoZnNQYXJhbXMpe3BhcnNlZFVybFVwZGF0ZWQucGF0aG5hbWU9ZnNQYXRobmFtZTtjb25zdCBmc1Jlc3VsdD1hd2FpdCBmc1JvdXRlLmZuKHJlcSxyZXMsZnNQYXJhbXMscGFyc2VkVXJsVXBkYXRlZCk7aWYoZnNSZXN1bHQuZmluaXNoZWQpe3JldHVybiB0cnVlO31wYXJzZWRVcmxVcGRhdGVkLnBhdGhuYW1lPW9yaWdpbmFsRnNQYXRobmFtZTt9fWxldCBtYXRjaGVkUGFnZT1hd2FpdCBtZW1vaXplZFBhZ2VDaGVja2VyKGZzUGF0aG5hbWUpOy8vIElmIHdlIGRpZG4ndCBtYXRjaCBhIHBhZ2UgY2hlY2sgZHluYW1pYyByb3V0ZXNcbmlmKCFtYXRjaGVkUGFnZSl7Zm9yKGNvbnN0IGR5bmFtaWNSb3V0ZSBvZiB0aGlzLmR5bmFtaWNSb3V0ZXMpe2lmKGR5bmFtaWNSb3V0ZS5tYXRjaChmc1BhdGhuYW1lKSl7bWF0Y2hlZFBhZ2U9dHJ1ZTt9fX0vLyBNYXRjaGVkIGEgcGFnZSBvciBkeW5hbWljIHJvdXRlIHNvIHJlbmRlciBpdCB1c2luZyBjYXRjaEFsbFJvdXRlXG5pZihtYXRjaGVkUGFnZSl7cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZT1mc1BhdGhuYW1lO2NvbnN0IHBhZ2VQYXJhbXM9dGhpcy5jYXRjaEFsbFJvdXRlLm1hdGNoKHBhcnNlZFVybFVwZGF0ZWQucGF0aG5hbWUpO2F3YWl0IHRoaXMuY2F0Y2hBbGxSb3V0ZS5mbihyZXEscmVzLHBhZ2VQYXJhbXMscGFyc2VkVXJsVXBkYXRlZCk7cmV0dXJuIHRydWU7fX19fXJldHVybiBmYWxzZTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==