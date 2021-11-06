"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["themes_rouge_js_views_modules_reports_views_AppEarning_AppEarning_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _chart_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart.config */ "./themes/rouge/js/views/modules/reports/views/AppEarning/chart.config.js");
/* harmony import */ var _MainSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainSection */ "./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue");
/* harmony import */ var _ClientsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientsTable */ "./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue");
/* harmony import */ var _HeroBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroBar */ "./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue");
/* harmony import */ var _LineChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LineChart */ "./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue");
/* harmony import */ var _CardComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardComponent */ "./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AppEarning",
  components: {
    MainSection: _MainSection__WEBPACK_IMPORTED_MODULE_2__["default"],
    ClientsTable: _ClientsTable__WEBPACK_IMPORTED_MODULE_3__["default"],
    HeroBar: _HeroBar__WEBPACK_IMPORTED_MODULE_4__["default"],
    LineChart: _LineChart__WEBPACK_IMPORTED_MODULE_5__["default"],
    CardComponent: _CardComponent__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  setup: function setup() {
    var chartData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    var fillChartData = function fillChartData() {
      chartData.value = _chart_config__WEBPACK_IMPORTED_MODULE_1__.sampleChartData();
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      fillChartData();
    });
    return {
      chartData: chartData,
      fillChartData: fillChartData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Icon */ "./themes/rouge/js/components/Icon.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CardComponent',
  components: {
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    title: String,
    icon: String,
    headerIcon: String,
    hasTable: Boolean,
    empty: Boolean,
    form: Boolean,
    rounded: {
      type: String,
      "default": 'md:rounded'
    }
  },
  emits: ['header-icon-click', 'submit'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var computedHeaderIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _props$headerIcon;

      return (_props$headerIcon = props.headerIcon) !== null && _props$headerIcon !== void 0 ? _props$headerIcon : _mdi_js__WEBPACK_IMPORTED_MODULE_2__.mdiCog;
    });

    var headerIconClick = function headerIconClick() {
      emit('header-icon-click');
    }; // const headerFooterBorder = 'border-gray-100 dark:border-gray-700'
    // const headerBorder = 'border-b'


    var submit = function submit(e) {
      emit('submit', e);
    };

    return {
      computedHeaderIcon: computedHeaderIcon,
      headerIconClick: headerIconClick,
      // headerFooterBorder,
      // headerBorder,
      submit: submit
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ModalBox */ "./themes/rouge/js/components/ModalBox.vue");
/* harmony import */ var _components_CheckboxCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CheckboxCell */ "./themes/rouge/js/components/CheckboxCell.vue");
/* harmony import */ var _components_Level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Level */ "./themes/rouge/js/components/Level.vue");
/* harmony import */ var _components_JbButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/JbButtons */ "./themes/rouge/js/components/JbButtons.vue");
/* harmony import */ var _components_JbButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/JbButton */ "./themes/rouge/js/components/JbButton.vue");
/* harmony import */ var _components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/UserAvatar */ "./themes/rouge/js/components/UserAvatar.vue");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ClientsTable',
  components: {
    ModalBox: _components_ModalBox__WEBPACK_IMPORTED_MODULE_1__["default"],
    CheckboxCell: _components_CheckboxCell__WEBPACK_IMPORTED_MODULE_2__["default"],
    Level: _components_Level__WEBPACK_IMPORTED_MODULE_3__["default"],
    JbButtons: _components_JbButtons__WEBPACK_IMPORTED_MODULE_4__["default"],
    JbButton: _components_JbButton__WEBPACK_IMPORTED_MODULE_5__["default"],
    UserAvatar: _components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    checkable: Boolean
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_7__.useStore)();
    var darkMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.darkMode;
    });
    var items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.clients;
    });
    var isModalActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isModalDangerActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var perPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(10);
    var currentPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var checkedRows = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var itemsPaginated = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1));
    });
    var numPages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return Math.ceil(items.value.length / perPage.value);
    });
    var currentPageHuman = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return currentPage.value + 1;
    });
    var pagesList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var pagesList = [];

      for (var i = 0; i < numPages.value; i++) {
        pagesList.push(i);
      }

      return pagesList;
    });

    var remove = function remove(arr, cb) {
      var newArr = [];
      arr.forEach(function (item) {
        if (!cb(item)) {
          newArr.push(item);
        }
      });
      return newArr;
    };

    var checked = function checked(isChecked, client) {
      if (isChecked) {
        checkedRows.value.push(client);
      } else {
        checkedRows.value = remove(checkedRows.value, function (row) {
          return row.id === client.id;
        });
      }
    };

    return {
      darkMode: darkMode,
      isModalActive: isModalActive,
      isModalDangerActive: isModalDangerActive,
      currentPage: currentPage,
      currentPageHuman: currentPageHuman,
      numPages: numPages,
      checkedRows: checkedRows,
      itemsPaginated: itemsPaginated,
      pagesList: pagesList,
      checked: checked,
      mdiEye: _mdi_js__WEBPACK_IMPORTED_MODULE_8__.mdiEye,
      mdiTrashCan: _mdi_js__WEBPACK_IMPORTED_MODULE_8__.mdiTrashCan
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Level */ "./themes/rouge/js/components/Level.vue");
/* harmony import */ var _components_JbButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/JbButton */ "./themes/rouge/js/components/JbButton.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HeroBar',
  components: {
    Level: _components_Level__WEBPACK_IMPORTED_MODULE_1__["default"],
    JbButton: _components_JbButton__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    var darkMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.darkMode;
    });

    var darkModeToggle = function darkModeToggle() {
      store.dispatch('darkMode');
    };

    return {
      darkMode: darkMode,
      darkModeToggle: darkModeToggle,
      mdiThemeLightDark: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiThemeLightDark
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LineChart',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var root = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var chart;
    chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineController, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      chart = new chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart(root.value, {
        type: 'line',
        data: props.data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              display: false
            },
            x: {
              display: true
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    });
    var chartData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.data;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(chartData, function (data) {
      if (chart) {
        chart.data = data;
        chart.update();
      }
    });
    return {
      root: root
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MainSection',
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var isFullScreen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.isFullScreen;
    });
    return {
      isFullScreen: isFullScreen
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=template&id=615b0baf":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=template&id=615b0baf ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("App Earning");

var _hoisted_2 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hero_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hero-bar");

  var _component_clients_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("clients-table");

  var _component_card_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card-component");

  var _component_line_chart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("line-chart");

  var _component_main_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("main-section");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hero_bar, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_main_section, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card_component, {
        "class": "mb-6",
        title: "Clients",
        icon: _ctx.mdiAccountMultiple,
        "has-table": ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_clients_table, {
            checkable: ""
          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card_component, {
        title: "Performance",
        icon: _ctx.mdiFinance,
        "header-icon": _ctx.mdiReload,
        "class": "mb-6",
        onHeaderIconClick: $setup.fillChartData
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [$setup.chartData ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_line_chart, {
            data: $setup.chartData,
            "class": "h-96"
          }, null, 8
          /* PROPS */
          , ["data"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["icon", "header-icon", "onHeaderIconClick"])];
    }),
    _: 1
    /* STABLE */

  })], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=template&id=b998c192":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=template&id=b998c192 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "flex items-stretch border-b border-gray-100 dark:border-gray-700"
};
var _hoisted_2 = {
  key: 1,
  "class": "text-center py-24 text-gray-500 dark:text-gray-400"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Nothing's here…", -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.form ? 'form' : 'div'), {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900", [$props.rounded]]),
    onSubmit: $setup.submit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center py-3 flex-grow font-bold", [$props.icon ? 'px-4' : 'px-6']])
      }, [$props.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
        key: 0,
        path: $props.icon,
        "class": "mr-3"
      }, null, 8
      /* PROPS */
      , ["path"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
      /* TEXT */
      )], 2
      /* CLASS */
      ), $setup.computedHeaderIcon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
        key: 0,
        href: "#",
        "class": "flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring",
        "aria-label": "more options",
        onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $setup.headerIconClick && $setup.headerIconClick.apply($setup, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
        path: $setup.computedHeaderIcon
      }, null, 8
      /* PROPS */
      , ["path"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.empty ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, _hoisted_4)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 2,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'p-6': !$props.hasTable
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
      /* CLASS */
      ))];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["class", "onSubmit"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=template&id=8d86bea8":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=template&id=8d86bea8 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Lorem ipsum dolor sit amet "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "adipiscing elit")], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "This is sample modal", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Lorem ipsum dolor sit amet "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "adipiscing elit")], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "This is sample modal", -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  "class": "bg-gray-50 p-3 dark:bg-gray-800"
};
var _hoisted_6 = {
  key: 0
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Company", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "City", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Progress", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Created", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, null, -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "image-cell"
};
var _hoisted_15 = {
  "data-label": "Name"
};
var _hoisted_16 = {
  "data-label": "Company"
};
var _hoisted_17 = {
  "data-label": "City"
};
var _hoisted_18 = {
  "data-label": "Progress",
  "class": "progress-cell"
};
var _hoisted_19 = ["value"];
var _hoisted_20 = {
  "data-label": "Created"
};
var _hoisted_21 = ["title"];
var _hoisted_22 = {
  "class": "actions-cell"
};
var _hoisted_23 = {
  "class": "table-pagination"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_modal_box = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modal-box");

  var _component_checkbox_cell = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("checkbox-cell");

  var _component_user_avatar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("user-avatar");

  var _component_jb_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jb-button");

  var _component_jb_buttons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jb-buttons");

  var _component_level = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("level");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_modal_box, {
    modelValue: $setup.isModalActive,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.isModalActive = $event;
    }),
    title: "Sample modal"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, _hoisted_2];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_modal_box, {
    modelValue: $setup.isModalDangerActive,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.isModalDangerActive = $event;
    }),
    "large-title": "Please confirm",
    button: "danger",
    "has-cancel": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3, _hoisted_4];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]), $setup.checkedRows.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.checkedRows, function (checkedRow) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: checkedRow.id,
      "class": "inline-block bg-gray-100 px-2 py-1 rounded-sm mr-2 text-sm dark:bg-gray-700"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(checkedRow.name), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [$props.checkable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.itemsPaginated, function (client) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: client.id
    }, [$props.checkable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_checkbox_cell, {
      key: 0,
      onChecked: function onChecked($event) {
        return $setup.checked($event, client);
      }
    }, null, 8
    /* PROPS */
    , ["onChecked"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_user_avatar, {
      username: client.name,
      "class": "image"
    }, null, 8
    /* PROPS */
    , ["username"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.company), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.city), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("progress", {
      max: "100",
      value: client.progress
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.progress), 9
    /* TEXT, PROPS */
    , _hoisted_19)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
      "class": "text-gray-500 dark:text-gray-400",
      title: client.created
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.created), 9
    /* TEXT, PROPS */
    , _hoisted_21)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jb_buttons, {
      type: "justify-start lg:justify-end",
      "no-wrap": ""
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jb_button, {
          "class": "mr-3",
          color: "success",
          icon: $setup.mdiEye,
          small: "",
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return $setup.isModalActive = true;
          })
        }, null, 8
        /* PROPS */
        , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jb_button, {
          color: "danger",
          icon: $setup.mdiTrashCan,
          small: "",
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return $setup.isModalDangerActive = true;
          })
        }, null, 8
        /* PROPS */
        , ["icon"])];
      }),
      _: 1
      /* STABLE */

    })])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_level, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jb_buttons, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.pagesList, function (page) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_jb_button, {
              onClick: function onClick($event) {
                return $setup.currentPage = page;
              },
              active: page === $setup.currentPage,
              label: page + 1,
              key: page,
              outline: $setup.darkMode,
              small: ""
            }, null, 8
            /* PROPS */
            , ["onClick", "active", "label", "outline"]);
          }), 128
          /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "Page " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentPageHuman) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.numPages), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=template&id=14eb16ba":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=template&id=14eb16ba ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-white border-t border-b border-gray-100 p-6 dark:bg-gray-900 dark:border-gray-900 dark:text-white"
};
var _hoisted_2 = {
  "class": "text-3xl font-semibold leading-tight"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jb_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jb-button");

  var _component_level = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("level");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_level, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jb_button, {
        label: $setup.darkMode ? 'Light Mode' : 'Dark Mode',
        icon: $setup.mdiThemeLightDark,
        outline: $setup.darkMode,
        onClick: $setup.darkModeToggle
      }, null, 8
      /* PROPS */
      , ["label", "icon", "outline", "onClick"])];
    }),
    _: 3
    /* FORWARDED */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=template&id=13116e34":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=template&id=13116e34 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  ref: "root"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("canvas", _hoisted_1, null, 512
  /* NEED_PATCH */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=template&id=0e3b4f56":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=template&id=0e3b4f56 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["px-0 md:px-6", [$setup.isFullScreen ? 'flex h-screen items-center justify-center' : 'py-6']])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/chart.config.js":
/*!********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/chart.config.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chartColors": () => (/* binding */ chartColors),
/* harmony export */   "sampleChartData": () => (/* binding */ sampleChartData)
/* harmony export */ });
var chartColors = {
  "default": {
    primary: '#00D1B2',
    info: '#209CEE',
    danger: '#FF3860'
  }
};

var randomChartData = function randomChartData(n) {
  var data = [];

  for (var i = 0; i < n; i++) {
    data.push(Math.round(Math.random() * 200));
  }

  return data;
};

var datasetObject = function datasetObject(color, points) {
  return {
    fill: false,
    borderColor: chartColors["default"][color],
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: chartColors["default"][color],
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: chartColors["default"][color],
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: randomChartData(points),
    tension: 0.5,
    cubicInterpolationMode: 'default'
  };
};

var sampleChartData = function sampleChartData() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;
  var labels = [];

  for (var i = 1; i <= points; i++) {
    labels.push("0".concat(i));
  }

  return {
    labels: labels,
    datasets: [datasetObject('primary', points), datasetObject('info', points), datasetObject('danger', points)]
  };
};

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue":
/*!*******************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppEarning_vue_vue_type_template_id_615b0baf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppEarning.vue?vue&type=template&id=615b0baf */ "./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=template&id=615b0baf");
/* harmony import */ var _AppEarning_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppEarning.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppEarning_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppEarning_vue_vue_type_template_id_615b0baf__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue":
/*!**********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardComponent_vue_vue_type_template_id_b998c192__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardComponent.vue?vue&type=template&id=b998c192 */ "./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=template&id=b998c192");
/* harmony import */ var _CardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardComponent.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CardComponent_vue_vue_type_template_id_b998c192__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue":
/*!*********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientsTable_vue_vue_type_template_id_8d86bea8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientsTable.vue?vue&type=template&id=8d86bea8 */ "./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=template&id=8d86bea8");
/* harmony import */ var _ClientsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientsTable.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ClientsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ClientsTable_vue_vue_type_template_id_8d86bea8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue":
/*!****************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeroBar_vue_vue_type_template_id_14eb16ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroBar.vue?vue&type=template&id=14eb16ba */ "./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=template&id=14eb16ba");
/* harmony import */ var _HeroBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroBar.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HeroBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HeroBar_vue_vue_type_template_id_14eb16ba__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue":
/*!******************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LineChart_vue_vue_type_template_id_13116e34__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=template&id=13116e34 */ "./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=template&id=13116e34");
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LineChart_vue_vue_type_template_id_13116e34__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue":
/*!********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainSection_vue_vue_type_template_id_0e3b4f56__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainSection.vue?vue&type=template&id=0e3b4f56 */ "./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=template&id=0e3b4f56");
/* harmony import */ var _MainSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainSection.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MainSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MainSection_vue_vue_type_template_id_0e3b4f56__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppEarning_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppEarning_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppEarning.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientsTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeroBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LineChart.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=template&id=615b0baf":
/*!*************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=template&id=615b0baf ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppEarning_vue_vue_type_template_id_615b0baf__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppEarning_vue_vue_type_template_id_615b0baf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppEarning.vue?vue&type=template&id=615b0baf */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/AppEarning.vue?vue&type=template&id=615b0baf");


/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=template&id=b998c192":
/*!****************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=template&id=b998c192 ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardComponent_vue_vue_type_template_id_b998c192__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardComponent_vue_vue_type_template_id_b998c192__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardComponent.vue?vue&type=template&id=b998c192 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/CardComponent.vue?vue&type=template&id=b998c192");


/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=template&id=8d86bea8":
/*!***************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=template&id=8d86bea8 ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTable_vue_vue_type_template_id_8d86bea8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTable_vue_vue_type_template_id_8d86bea8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientsTable.vue?vue&type=template&id=8d86bea8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/ClientsTable.vue?vue&type=template&id=8d86bea8");


/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=template&id=14eb16ba":
/*!**********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=template&id=14eb16ba ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroBar_vue_vue_type_template_id_14eb16ba__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroBar_vue_vue_type_template_id_14eb16ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeroBar.vue?vue&type=template&id=14eb16ba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/HeroBar.vue?vue&type=template&id=14eb16ba");


/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=template&id=13116e34":
/*!************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=template&id=13116e34 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_template_id_13116e34__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_template_id_13116e34__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LineChart.vue?vue&type=template&id=13116e34 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/LineChart.vue?vue&type=template&id=13116e34");


/***/ }),

/***/ "./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=template&id=0e3b4f56":
/*!**************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=template&id=0e3b4f56 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainSection_vue_vue_type_template_id_0e3b4f56__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainSection_vue_vue_type_template_id_0e3b4f56__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainSection.vue?vue&type=template&id=0e3b4f56 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/reports/views/AppEarning/MainSection.vue?vue&type=template&id=0e3b4f56");


/***/ })

}]);