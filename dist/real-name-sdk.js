(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RealNameSdk"] = factory();
	else
		root["RealNameSdk"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _realName = _interopRequireDefault(__webpack_require__(1));

var _config = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RealNameSdk = /*#__PURE__*/function () {
  function RealNameSdk() {
    _classCallCheck(this, RealNameSdk);

    if (!RealNameSdk.instance) {
      RealNameSdk.instance = _realName["default"].getInstance();
    }

    return RealNameSdk.instance;
  }
  /**
   * 获取单例
   */


  _createClass(RealNameSdk, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = _realName["default"].getInstance();
      }

      return this.instance;
    }
    /**
     * 获取相关提示信息的配置
     */

  }, {
    key: "getConfig",
    value: function getConfig() {
      return _config["default"];
    }
  }]);

  return RealNameSdk;
}();

exports["default"] = RealNameSdk;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RealName = /*#__PURE__*/function () {
  function RealName() {
    _classCallCheck(this, RealName);

    this.init();
  }

  _createClass(RealName, [{
    key: "init",
    value: function init() {
      this.$mask = $('<div id="real-name-sdk__mask"></div>');
      this.$wraper = $('<div id="real-name-sdk__wraper"></div>');
      $('body').append(this.$mask).append(this.$wraper);
      this.isShowing = false;
      this.listenClose();
    }
    /**
     * 监听关闭
     */

  }, {
    key: "listenClose",
    value: function listenClose() {
      var _this = this;

      this.$wraper.on('click', '.close', function () {
        _this.close();
      });
    }
    /**
     * 显示提示层
     * @param {*} param0 
     */

  }, {
    key: "show",
    value: function show(_ref) {
      var title = _ref.title,
          subTitle = _ref.subTitle,
          content = _ref.content,
          maskOpacity = _ref.maskOpacity,
          style = _ref.style,
          canClose = _ref.canClose;

      if (this.isShowing) {
        return;
      }

      if (canClose) {
        this.$wraper.append($('<i class="close" />'));
      }

      this.isShowing = true;
      var tip = this.getTip({
        title: title,
        subTitle: subTitle,
        content: content
      });
      this.$wraper.append(tip);
      this.setMaskOpacity(maskOpacity);
      this.setWraperStyle(style);
      this.$mask.css('display', 'block');
      this.$wraper.css('display', 'block');
    }
    /**
     * 设置背景罩的透明度
     * @param {*} opacity 
     */

  }, {
    key: "setMaskOpacity",
    value: function setMaskOpacity(opacity) {
      if (opacity === undefined) {
        return;
      }

      this.$mask.css({
        opacity: opacity.toString(),
        filter: "alpha(opacity=".concat(opacity * 100)
      });
    }
    /**
     * 设置提示信息的容器样式
     * @param {*} style 
     */

  }, {
    key: "setWraperStyle",
    value: function setWraperStyle(style) {
      if (style) {
        this.$wraper.css(style);
      }
    }
    /**
     * 关闭提示层
     */

  }, {
    key: "close",
    value: function close() {
      if (!this.isShowing) {
        return;
      }

      this.isShowing = false;
      this.$mask.css('display', 'none');
      this.$wraper.css('display', 'none').empty();
    }
    /**
     * 获取提示信息
     * @param {*} param0 
     */

  }, {
    key: "getTip",
    value: function getTip(_ref2) {
      var title = _ref2.title,
          subTitle = _ref2.subTitle,
          content = _ref2.content;
      var subTitleEle = subTitle ? "<h3 class='tip-content__sub-title'>".concat(subTitle, "</h3>") : '';
      return "\n      <div class='tip'>\n        <div class='tip-content'>\n          <h3 class='tip-content__title'>".concat(title, "</h3>\n          ").concat(subTitleEle, "\n          <p class='tip-content__content'>").concat(content, "</p>\n        </div>\n      </div>\n    ");
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new RealName();
      }

      return this.instance;
    }
  }]);

  return RealName;
}();

exports["default"] = RealName;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(3);
            var content = __webpack_require__(4);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#real-name-sdk__mask {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  z-index: 99990;\n  /* opacity: 0.4;\n    filter: alpha(opacity=40); */\n}\n#real-name-sdk__wraper {\n  box-sizing: border-box;\n  display: none;\n  width: 700px;\n  height: 280px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: #fff;\n  padding: 40px;\n  z-index: 99999;\n}\n#real-name-sdk__wraper .close {\n  display: inline-block;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 12px;\n  height: 12px;\n  background: url(\"https://p4.ssl.qhimg.com/t013d31002fab72ccdc.png\") center center no-repeat;\n  background-size: contain;\n  cursor: pointer;\n}\n#real-name-sdk__wraper .tip {\n  display: table;\n  height: 100%;\n}\n#real-name-sdk__wraper .tip-content {\n  display: table-cell;\n  vertical-align: middle;\n}\n#real-name-sdk__wraper .tip-content__title {\n  text-align: center;\n  line-height: 35px;\n}\n#real-name-sdk__wraper .tip-content__sub-title {\n  text-align: center;\n  line-height: 35px;\n}\n#real-name-sdk__wraper .tip-content__content {\n  margin-top: 30px;\n  line-height: 30px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * author: liuyang9
 * description: 提示信息的相关配置
 */
// 通知名称
var NoticeName = '《关于防止未成年人沉迷网络游戏的通知》';
var Config = {
  // 支付相关提示信息的配置
  pay: {
    // 年龄小于8周岁的提示
    ageLessThanEight: {
      title: '根据相关部门对于未成年用户监管要求，该帐号能充值游戏',
      content: "\u6839\u636E".concat(NoticeName, "\uFF0C\u7F51\u7EDC\u6E38\u620F\u4F01\u4E1A\u4E0D\u5F97\u4E3A\u672A\u6EE18\u5468\u5C81\u4EE5\u4E0B\u7528\u6237\u63D0\u4F9B\u6E38\u620F\u4ED8\u8D39\u670D\u52A1\u3002"),
      style: {
        height: '250px'
      }
    },
    // 8-16周岁充值金额达到上限的提示
    ageLessThanSixteen: {
      title: '该月已累计充值金额已达到上限',
      subTitle: '每个累积充值不能超过200元',
      content: "\u6839\u636E".concat(NoticeName, "\uFF0C8-16\u5C81\u7528\u6237\u5355\u6B21\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC750\u5143\u4EBA\u6C11\u5E01\uFF0C\u6BCF\u6708\u5145\u503C\u91D1\u989D\u7D2F\u8BA1\u4E0D\u5F97\u8D85\u8FC7200\u5143\u4EBA\u6C11\u5E01\u3002"),
      maskOpacity: '0.3',
      style: {
        height: '300px'
      },
      canClose: true
    },
    // 16-18周岁充值金额达到上限的提示
    ageLessThanEighteen: {
      title: '该月已累计充值金额已达到上限',
      subTitle: '每个累积充值不能超过400元',
      content: "\u6839\u636E".concat(NoticeName, "\uFF0C16-18\u5C81\u7528\u6237\u5355\u6B21\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC7100\u5143\u4EBA\u6C11\u5E01\uFF0C\u6BCF\u6708\u5145\u503C\u91D1\u989D\u7D2F\u8BA1\u4E0D\u5F97\u8D85\u8FC7400\u5143\u4EBA\u6C11\u5E01\u3002"),
      maskOpacity: '0.3',
      style: {
        height: '300px'
      },
      canClose: true
    }
  },
  // 登录相关提示信息的配置
  login: {
    // 游戏时长已达到上限的提示
    gameTimeLimit: {
      title: '您今日在该游戏时长已达到上限',
      content: "\u6839\u636E".concat(NoticeName, "\uFF0C\u672A\u6210\u5E74\u7528\u6237\u6CD5\u5B9A\u8282\u5047\u65E5\u6BCF\u65E5\u7D2F\u8BA1\u4E0D\u5F97\u8D85\u8FC73\u5C0F\u65F6\uFF0C\u5176\u5B83\u65F6\u95F4\u6BCF\u65E5\u4E0D\u5F97\u8D85\u8FC71.5\u5C0F\u65F6\u3002"),
      style: {
        width: '680px',
        height: '250px'
      }
    }
  }
};
var _default = Config;
exports["default"] = _default;

/***/ })
/******/ ])["default"];
});