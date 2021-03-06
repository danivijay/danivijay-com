webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rotating_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rotating-text */ "./node_modules/react-rotating-text/lib/ReactRotatingText.js");
/* harmony import */ var react_rotating_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rotating_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_BlogPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogPosts */ "./components/BlogPosts.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/danivijay/Documents/webclub/danivijay-com/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var SocialLink = function SocialLink(_ref) {
  var link = _ref.link,
      text = _ref.text,
      handler = _ref.handler,
      subText = _ref.subText;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " ", __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, text), (handler || subText) && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, " ", "(", handler && __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, handler), handler && subText && " - ", subText, ")"));
};

var index = function index() {
  return __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Dani Vijay | Full Stack Web Developer"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: "Polyglot programmer with extensive experience in JavaScript based technologies.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx("p", {
    style: {
      fontSize: "2em",
      marginBottom: "0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Hi,"), __jsx("h1", {
    style: {
      fontSize: "3em",
      marginTop: "0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "I'm Dani Vijay."), __jsx("div", {
    style: {
      fontSize: "1.5em"
    },
    className: "social-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    href: "https://twitter.com/UtmostDev",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      fontSize: "1em",
      marginRight: "5px"
    },
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTwitter"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), " ", "@UtmostDev")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/danivijay/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      fontSize: "1em",
      marginRight: "5px"
    },
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLinkedin"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), " ", "danivijay")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("a", {
    href: "https://stackoverflow.com/users/4230220/dani-vijay?tab=profile",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      fontSize: "1em",
      marginRight: "5px"
    },
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStackOverflow"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), " ", "Dani Vijay")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/danivijay",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      fontSize: "1em",
      marginRight: "5px"
    },
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGithub"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), " ", "danivijay")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("a", {
    href: "https://dev.to/danivijay",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      fontSize: "1em",
      marginRight: "5px"
    },
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faDev"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), " ", "@danivijay")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("a", {
    href: "https://medium.com/@danivijay",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      fontSize: "1em",
      marginRight: "5px"
    },
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMedium"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), " ", "@danivijay"))), __jsx("p", {
    style: {
      fontSize: "1.5em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Your friendly neighborhood ", __jsx("wbr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), "Full Stack Web Developer."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx("h2", {
    style: {
      fontWeight: "500"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "I've extensive work experience with ReactJS (", __jsx("a", {
    href: "https://stackoverflow.com/users/story/4230220?view=Timeline",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "among top 10% in StackOverflow"), "), NodeJS/ ExpressJS, Ruby on Rails, MongoDB and MySQL."), __jsx("p", {
    style: {
      fontSize: "1.2em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "I'm fascinated about new technologies, and love to add them to my arsenal for timely disposal. More than happy to learn stuff to improve projects that I'm working on.", " "), __jsx("p", {
    style: {
      fontSize: "1.2em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "I've also worked with", " ", __jsx(react_rotating_text__WEBPACK_IMPORTED_MODULE_1___default.a, {
    items: ["Lambda Functions", "VueJS", "Python", "Pandas", "PHP", "Bash", "Firebase", "AWS API Gateway", "Heroku", "Netlify", "Zeit Now", "Gatsby", "NextJS"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), __jsx(_components_BlogPosts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.3cc2fdf0153bec53cea5.hot-update.js.map