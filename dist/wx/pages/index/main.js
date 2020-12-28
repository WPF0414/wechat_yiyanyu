require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(12);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5eca2e54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5eca2e54", Component.options)
  } else {
    hotAPI.reload("data-v-5eca2e54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      title: ''
    };
  },

  components: {},
  methods: {
    buttonClick: function buttonClick(value) {
      var that = this;
      wx.request({
        url: 'https://v1.hitokoto.cn?c=' + value, //仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function success(res) {
          that.title = res.data.hitokoto;
        }
      });
    }
  },
  created: function created() {
    // let app = getApp()
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('header', {
    staticClass: "header"
  }, [_c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('a')
      }
    }
  }, [_vm._v("动画")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('b')
      }
    }
  }, [_vm._v("漫画")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('c')
      }
    }
  }, [_vm._v("游戏")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('d')
      }
    }
  }, [_vm._v("文学")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('e')
      }
    }
  }, [_vm._v("原创")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('f')
      }
    }
  }, [_vm._v("来自网络")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('g')
      }
    }
  }, [_vm._v("其他")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('h')
      }
    }
  }, [_vm._v("影视")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('i')
      }
    }
  }, [_vm._v("诗词")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('g')
      }
    }
  }, [_vm._v("网易云")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '10'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('k')
      }
    }
  }, [_vm._v("哲学")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '11'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('i')
      }
    }
  }, [_vm._v("抖机灵")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "margin": "0 20rpx 10rpx 5rpx"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '12'
    },
    on: {
      "click": function($event) {
        _vm.buttonClick('a')
      }
    }
  }, [_vm._v("其他")])], 1), _vm._v(" "), _c('section', {
    staticClass: "section"
  }, [_c('h1', [_vm._v(_vm._s(_vm.title))])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5eca2e54", esExports)
  }
}

/***/ })
],[8]);