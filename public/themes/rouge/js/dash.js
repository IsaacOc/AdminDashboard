"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["dash"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./themes/rouge/js/components/CardComponent.vue");
/* harmony import */ var _components_Level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Level */ "./themes/rouge/js/components/Level.vue");
/* harmony import */ var _components_Pill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Pill */ "./themes/rouge/js/components/Pill.vue");
/* harmony import */ var _components_UserAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/UserAvatar */ "./themes/rouge/js/components/UserAvatar.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CardClientBar',
  components: {
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    Level: _components_Level__WEBPACK_IMPORTED_MODULE_2__["default"],
    Pill: _components_Pill__WEBPACK_IMPORTED_MODULE_3__["default"],
    UserAvatar: _components_UserAvatar__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    name: String,
    login: String,
    date: String,
    progress: Number,
    text: String,
    type: String
  },
  setup: function setup(props) {
    var pillType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (props.type) {
        return props.type;
      }

      if (props.progress) {
        if (props.progress >= 60) {
          return 'success';
        }

        if (props.progress >= 40) {
          return 'warning';
        }

        return 'danger';
      }

      return 'info';
    });
    var pillIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return {
        success: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiTrendingUp,
        warning: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiTrendingNeutral,
        danger: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiTrendingDown,
        info: null
      }[pillType.value];
    });
    var pillText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _props$text;

      return (_props$text = props.text) !== null && _props$text !== void 0 ? _props$text : "".concat(props.progress, "%");
    });
    return {
      pillType: pillType,
      pillIcon: pillIcon,
      pillText: pillText
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./themes/rouge/js/components/CardComponent.vue");
/* harmony import */ var _components_Level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Level */ "./themes/rouge/js/components/Level.vue");
/* harmony import */ var _components_Pill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Pill */ "./themes/rouge/js/components/Pill.vue");
/* harmony import */ var _components_IconRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/IconRounded */ "./themes/rouge/js/components/IconRounded.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CardProductBar',
  components: {
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    Level: _components_Level__WEBPACK_IMPORTED_MODULE_2__["default"],
    Pill: _components_Pill__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconRounded: _components_IconRounded__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    amount: Number,
    date: String,
    business: String,
    type: String,
    name: String,
    account: String
  },
  setup: function setup(props) {
    var icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (props.type === 'withdrawal') {
        return {
          icon: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiCashMinus,
          type: 'danger'
        };
      } else if (props.type === 'deposit') {
        return {
          icon: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiCashPlus,
          type: 'success'
        };
      } else if (props.type === 'invoice') {
        return {
          icon: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiReceipt,
          type: 'warning'
        };
      }

      return {
        icon: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiCreditCardOutline,
        type: 'info'
      };
    });
    return {
      icon: icon
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./themes/rouge/js/components/CardComponent.vue");
/* harmony import */ var _components_GrowingNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GrowingNumber */ "./themes/rouge/js/components/GrowingNumber.vue");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Icon */ "./themes/rouge/js/components/Icon.vue");
/* harmony import */ var _components_Level__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Level */ "./themes/rouge/js/components/Level.vue");
/* harmony import */ var _components_TrendPill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/TrendPill */ "./themes/rouge/js/components/TrendPill.vue");
/* harmony import */ var _components_JbButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/JbButton */ "./themes/rouge/js/components/JbButton.vue");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CardWidget',
  components: {
    JbButton: _components_JbButton__WEBPACK_IMPORTED_MODULE_6__["default"],
    GrowingNumber: _components_GrowingNumber__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"],
    Level: _components_Level__WEBPACK_IMPORTED_MODULE_4__["default"],
    TrendPill: _components_TrendPill__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    number: {
      type: Number,
      "default": 0
    },
    icon: String,
    prefix: String,
    suffix: String,
    label: String,
    color: String,
    trend: String,
    trendType: String
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_7__.useStore)();
    var darkMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.darkMode;
    });
    return {
      darkMode: darkMode,
      mdiCog: _mdi_js__WEBPACK_IMPORTED_MODULE_8__.mdiCog
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _chart_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart.config */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/chart.config.js");
/* harmony import */ var _LineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LineChart */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue");
/* harmony import */ var _MainSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainSection */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue");
/* harmony import */ var _TitleBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TitleBar */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue");
/* harmony import */ var _HeroBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroBar */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue");
/* harmony import */ var _CardWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardWidget */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue");
/* harmony import */ var _CardComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardComponent */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue");
/* harmony import */ var _ClientsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ClientsTable */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Notification */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue");
/* harmony import */ var _JbButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JbButton */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue");
/* harmony import */ var _CardTransactionBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CardTransactionBar */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue");
/* harmony import */ var _CardClientBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CardClientBar */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue");
/* harmony import */ var _TitleSubBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TitleSubBar */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue");
// @ is an alias to /src
















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Home',
  components: {
    TitleSubBar: _TitleSubBar__WEBPACK_IMPORTED_MODULE_13__["default"],
    MainSection: _MainSection__WEBPACK_IMPORTED_MODULE_3__["default"],
    ClientsTable: _ClientsTable__WEBPACK_IMPORTED_MODULE_8__["default"],
    LineChart: _LineChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardComponent: _CardComponent__WEBPACK_IMPORTED_MODULE_7__["default"],
    CardWidget: _CardWidget__WEBPACK_IMPORTED_MODULE_6__["default"],
    HeroBar: _HeroBar__WEBPACK_IMPORTED_MODULE_5__["default"],
    TitleBar: _TitleBar__WEBPACK_IMPORTED_MODULE_4__["default"],
    Notification: _Notification__WEBPACK_IMPORTED_MODULE_9__["default"],
    JbButton: _JbButton__WEBPACK_IMPORTED_MODULE_10__["default"],
    CardTransactionBar: _CardTransactionBar__WEBPACK_IMPORTED_MODULE_11__["default"],
    CardClientBar: _CardClientBar__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  setup: function setup() {
    var titleStack = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(['Admin', 'Dashboard']);
    var chartData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    var fillChartData = function fillChartData() {
      chartData.value = _chart_config__WEBPACK_IMPORTED_MODULE_1__.sampleChartData();
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      fillChartData();
    });
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_14__.useStore)();
    var clientBarItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.clients.slice(0, 3);
    });
    var transactionBarItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.history.slice(0, 3);
    });
    var darkMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.darkMode;
    });
    return {
      titleStack: titleStack,
      chartData: chartData,
      fillChartData: fillChartData,
      clientBarItems: clientBarItems,
      transactionBarItems: transactionBarItems,
      darkMode: darkMode,
      mdiAccountMultiple: _mdi_js__WEBPACK_IMPORTED_MODULE_15__.mdiAccountMultiple,
      mdiCartOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_15__.mdiCartOutline,
      mdiChartTimelineVariant: _mdi_js__WEBPACK_IMPORTED_MODULE_15__.mdiChartTimelineVariant,
      mdiFinance: _mdi_js__WEBPACK_IMPORTED_MODULE_15__.mdiFinance,
      mdiMonitorCellphone: _mdi_js__WEBPACK_IMPORTED_MODULE_15__.mdiMonitorCellphone,
      mdiReload: _mdi_js__WEBPACK_IMPORTED_MODULE_15__.mdiReload,
      mdiGithub: _mdi_js__WEBPACK_IMPORTED_MODULE_15__.mdiGithub,
      mdiChartPie: _mdi_js__WEBPACK_IMPORTED_MODULE_15__.mdiChartPie
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/colors.js */ "./themes/rouge/js/colors.js");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Icon */ "./themes/rouge/js/components/Icon.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'JbButton',
  components: {
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    label: [String, Number],
    icon: String,
    href: String,
    target: String,
    to: [String, Object],
    type: String,
    color: {
      type: String,
      "default": 'white'
    },
    small: Boolean,
    outline: Boolean,
    active: Boolean,
    as: String
  },
  setup: function setup(props) {
    var is = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (props.as) {
        return props.as;
      }

      if (props.to) {
        return 'router-link';
      }

      if (props.href) {
        return 'a';
      }

      return 'button';
    });
    var computedType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (is.value === 'button') {
        var _props$type;

        return (_props$type = props.type) !== null && _props$type !== void 0 ? _props$type : 'button';
      }

      return null;
    });
    var iconOnly = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.icon && !props.label;
    });
    var labelClass = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.small && props.icon ? 'px-1' : 'px-2';
    });
    var componentClass = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var base = ['inline-flex', 'cursor-pointer', 'justify-center', 'items-center', 'whitespace-nowrap', 'focus:outline-none', 'transition-colors', 'focus:ring', 'duration-150', 'border', 'rounded', props.active ? 'ring ring-black dark:ring-white' : 'ring-blue-700', props.small ? 'p-1' : 'p-2', props.outline ? _colors_js__WEBPACK_IMPORTED_MODULE_1__.colorsButtonsOutline[props.color] : _colors_js__WEBPACK_IMPORTED_MODULE_1__.colorsButtons[props.color]];
      return base;
    });
    return {
      is: is,
      iconOnly: iconOnly,
      labelClass: labelClass,
      computedType: computedType,
      componentClass: componentClass,
      mdiMenuUp: _mdi_js__WEBPACK_IMPORTED_MODULE_3__.mdiMenuUp
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/colors.js */ "./themes/rouge/js/colors.js");
/* harmony import */ var _components_Level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Level */ "./themes/rouge/js/components/Level.vue");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Icon */ "./themes/rouge/js/components/Icon.vue");
/* harmony import */ var _components_JbButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/JbButton */ "./themes/rouge/js/components/JbButton.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Notification',
  components: {
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"],
    Level: _components_Level__WEBPACK_IMPORTED_MODULE_2__["default"],
    JbButton: _components_JbButton__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    icon: String,
    outline: Boolean,
    color: {
      type: String,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var componentClass = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.outline ? _colors_js__WEBPACK_IMPORTED_MODULE_1__.colorsOutline[props.color] : [].concat(_toConsumableArray(_colors_js__WEBPACK_IMPORTED_MODULE_1__.colorsBg[props.color]), _toConsumableArray(_colors_js__WEBPACK_IMPORTED_MODULE_1__.colorsBorders[props.color]));
    });
    var isDismissed = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var dismiss = function dismiss() {
      isDismissed.value = true;
    };

    var hasRightSlot = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return slots.right;
    });
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_5__.useStore)();
    var darkMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.darkMode;
    });
    return {
      componentClass: componentClass,
      isDismissed: isDismissed,
      dismiss: dismiss,
      hasRightSlot: hasRightSlot,
      darkMode: darkMode,
      mdiClose: _mdi_js__WEBPACK_IMPORTED_MODULE_6__.mdiClose
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _components_Level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Level */ "./themes/rouge/js/components/Level.vue");
/* harmony import */ var _components_JbButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/JbButton */ "./themes/rouge/js/components/JbButton.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TitleBar',
  components: {
    Level: _components_Level__WEBPACK_IMPORTED_MODULE_0__["default"],
    JbButton: _components_JbButton__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    titleStack: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  setup: function setup() {
    return {
      mdiGithub: _mdi_js__WEBPACK_IMPORTED_MODULE_2__.mdiGithub
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Icon */ "./themes/rouge/js/components/Icon.vue");
/* harmony import */ var _components_JbButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/JbButton */ "./themes/rouge/js/components/JbButton.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TitleSubBar',
  components: {
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"],
    JbButton: _components_JbButton__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    icon: String,
    title: String
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    var darkMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.darkMode;
    });
    return {
      darkMode: darkMode,
      mdiCog: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiCog
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=template&id=c949765c":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=template&id=c949765c ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-center md:text-left"
};
var _hoisted_2 = {
  "class": "text-xl"
};
var _hoisted_3 = {
  "class": "text-gray-500 dark:text-gray-400"
};
var _hoisted_4 = {
  "class": "text-gray-500 dark:text-gray-400"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_user_avatar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("user-avatar");

  var _component_level = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("level");

  var _component_pill = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pill");

  var _component_card_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card-component");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_card_component, {
    "class": "mb-6 last:mb-0",
    hoverable: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_level, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_level, {
            type: "justify-start"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_user_avatar, {
                "class": "w-12 h-12 mr-6",
                username: $props.name
              }, null, 8
              /* PROPS */
              , ["username"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.name) + " ", 1
              /* TEXT */
              ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, "@" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.login), 1
              /* TEXT */
              )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.date), 1
              /* TEXT */
              )])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pill, {
            type: $setup.pillType,
            text: $setup.pillText,
            icon: $setup.pillIcon
          }, null, 8
          /* PROPS */
          , ["type", "text", "icon"])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=template&id=0824f1f2":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=template&id=0824f1f2 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=template&id=6db6748a":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=template&id=6db6748a ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-center space-y-1 md:text-left md:mr-6"
};
var _hoisted_2 = {
  "class": "text-xl"
};
var _hoisted_3 = {
  "class": "text-gray-500 dark:text-gray-400"
};
var _hoisted_4 = {
  "class": "text-center md:text-right space-y-1"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon_rounded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon-rounded");

  var _component_level = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("level");

  var _component_pill = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pill");

  var _component_card_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card-component");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_card_component, {
    "class": "mb-6 last:mb-0",
    hoverable: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_level, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_level, {
            type: "justify-start"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon_rounded, {
                icon: $setup.icon.icon,
                type: $setup.icon.type,
                "class": "md:mr-6"
              }, null, 8
              /* PROPS */
              , ["icon", "type"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_2, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.amount), 1
              /* TEXT */
              ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.date), 1
              /* TEXT */
              ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" via " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.business), 1
              /* TEXT */
              )])])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.name), 1
          /* TEXT */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pill, {
            type: "info",
            text: $props.account,
            small: ""
          }, null, 8
          /* PROPS */
          , ["text"]), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pill, {
            type: $setup.icon.type,
            text: $props.type,
            small: ""
          }, null, 8
          /* PROPS */
          , ["type", "text"])])])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=template&id=18823bac":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=template&id=18823bac ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-lg leading-tight text-gray-500 dark:text-gray-400"
};
var _hoisted_2 = {
  "class": "text-3xl leading-tight font-semibold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_trend_pill = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("trend-pill");

  var _component_jb_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jb-button");

  var _component_level = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("level");

  var _component_growing_number = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("growing-number");

  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");

  var _component_card_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card-component");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_card_component, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.trend ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_level, {
        key: 0,
        "class": "mb-3",
        mobile: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_trend_pill, {
            trend: $props.trend,
            "trend-type": $props.trendType,
            small: ""
          }, null, 8
          /* PROPS */
          , ["trend", "trend-type"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jb_button, {
            icon: $setup.mdiCog,
            "icon-w": "w-4",
            "icon-h": "h-4",
            color: $setup.darkMode ? 'white' : 'light',
            outline: $setup.darkMode,
            small: ""
          }, null, 8
          /* PROPS */
          , ["icon", "color", "outline"])];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_level, {
        mobile: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1
          /* TEXT */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_growing_number, {
            value: $props.number,
            prefix: $props.prefix,
            suffix: $props.suffix
          }, null, 8
          /* PROPS */
          , ["value", "prefix", "suffix"])])]), $props.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
            key: 0,
            path: $props.icon,
            size: "48",
            w: "",
            h: "h-16",
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.color)
          }, null, 8
          /* PROPS */
          , ["path", "class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=template&id=50be7edc":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=template&id=50be7edc ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=template&id=4f533964":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=template&id=4f533964 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Dashboard");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Please star this project on ");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "https://github.com/justboil/admin-one-vue-tailwind",
  "class": "underline",
  target: "_blank"
}, "GitHub", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"
};
var _hoisted_5 = {
  "class": "grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6"
};
var _hoisted_6 = {
  "class": "flex flex-col justify-between"
};
var _hoisted_7 = {
  "class": "flex flex-col justify-between"
};
var _hoisted_8 = {
  key: 0
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Responsive table.", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Collapses on mobile ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_title_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("title-bar");

  var _component_hero_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hero-bar");

  var _component_jb_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jb-button");

  var _component_notification = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("notification");

  var _component_card_widget = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card-widget");

  var _component_card_transaction_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card-transaction-bar");

  var _component_card_client_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card-client-bar");

  var _component_title_sub_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("title-sub-bar");

  var _component_line_chart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("line-chart");

  var _component_card_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card-component");

  var _component_clients_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("clients-table");

  var _component_main_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("main-section");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_title_bar, {
    "title-stack": $setup.titleStack
  }, null, 8
  /* PROPS */
  , ["title-stack"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hero_bar, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_main_section, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_notification, {
        color: "info",
        icon: $setup.mdiGithub
      }, {
        right: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jb_button, {
            href: "https://github.com/justboil/admin-one-vue-tailwind",
            icon: $setup.mdiGithub,
            outline: $setup.darkMode,
            label: "GitHub",
            target: "_blank",
            small: ""
          }, null, 8
          /* PROPS */
          , ["icon", "outline"])];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_2, _hoisted_3];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card_widget, {
        trend: "12%",
        "trend-type": "up",
        color: "text-green-500",
        icon: $setup.mdiAccountMultiple,
        number: 512,
        label: "Clients"
      }, null, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card_widget, {
        trend: "12%",
        "trend-type": "down",
        color: "text-blue-500",
        icon: $setup.mdiCartOutline,
        number: 7770,
        prefix: "$",
        label: "Sales"
      }, null, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card_widget, {
        trend: "Overflow",
        "trend-type": "alert",
        color: "text-red-500",
        icon: $setup.mdiChartTimelineVariant,
        number: 256,
        suffix: "%",
        label: "Performance"
      }, null, 8
      /* PROPS */
      , ["icon"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.transactionBarItems, function (transaction, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_card_transaction_bar, {
          key: index,
          amount: transaction.amount,
          date: transaction.date,
          business: transaction.business,
          type: transaction.type,
          name: transaction.name,
          account: transaction.account
        }, null, 8
        /* PROPS */
        , ["amount", "date", "business", "type", "name", "account"]);
      }), 128
      /* KEYED_FRAGMENT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.clientBarItems, function (client) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_card_client_bar, {
          key: client.id,
          name: client.name,
          login: client.login,
          date: client.created,
          progress: client.progress
        }, null, 8
        /* PROPS */
        , ["name", "login", "date", "progress"]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_title_sub_bar, {
        icon: $setup.mdiChartPie,
        title: "Trends overview"
      }, null, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card_component, {
        title: "Performance",
        icon: $setup.mdiFinance,
        "header-icon": $setup.mdiReload,
        "class": "mb-6",
        onHeaderIconClick: $setup.fillChartData
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [$setup.chartData ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_line_chart, {
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
      , ["icon", "header-icon", "onHeaderIconClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_title_sub_bar, {
        icon: $setup.mdiAccountMultiple,
        title: "Clients"
      }, null, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_notification, {
        color: "info",
        icon: $setup.mdiMonitorCellphone
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_9, _hoisted_10];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card_component, {
        icon: $setup.mdiMonitorCellphone,
        title: "Responsive table",
        "has-table": ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_clients_table)];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["icon"])];
    }),
    _: 1
    /* STABLE */

  })], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=template&id=3a827873":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=template&id=3a827873 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=template&id=47aef7c0":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=template&id=47aef7c0 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($setup.is), {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.componentClass),
    href: $props.href,
    type: $setup.computedType,
    to: $props.to,
    target: $props.target
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
        key: 0,
        path: $props.icon
      }, null, 8
      /* PROPS */
      , ["path"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.label ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: 1,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.labelClass)
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 3
      /* TEXT, CLASS */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class", "href", "type", "to", "target"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=template&id=0bd083f8":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=template&id=0bd083f8 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=template&id=4ceceb26":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=template&id=4ceceb26 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=template&id=4b4a12a1":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=template&id=4b4a12a1 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col md:flex-row items-center"
};
var _hoisted_2 = {
  "class": "text-center md:text-left"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");

  var _component_jb_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jb-button");

  var _component_level = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("level");

  return !$setup.isDismissed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.componentClass, "px-3 py-6 md:py-3 mx-6 md:mx-0 mb-6 last:mb-0 border rounded transition-colors duration-150"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_level, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$props.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
        key: 0,
        path: $props.icon,
        w: "w-10 md:w-5",
        h: "h-10 md:h-5",
        size: "24",
        "class": "md:mr-2"
      }, null, 8
      /* PROPS */
      , ["path"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])]), $setup.hasRightSlot ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "right", {
        key: 0
      }) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_jb_button, {
        key: 1,
        icon: $setup.mdiClose,
        outline: $props.outline || $setup.darkMode && ['white', 'light'].indexOf($props.color) < 0,
        onClick: $setup.dismiss,
        small: ""
      }, null, 8
      /* PROPS */
      , ["icon", "outline", "onClick"]))];
    }),
    _: 3
    /* FORWARDED */

  })], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=template&id=b808595e&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=template&id=b808595e&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-b808595e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "p-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jb_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jb-button");

  var _component_level = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("level");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_level, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.titleStack, function (title, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: index,
          "class": "title-stack-item inline-block pr-3 text-2xl text-gray-500 dark:text-gray-400 last:pr-0 last:font-black last:text-black dark:text-gray-100"
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(title), 1
        /* TEXT */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jb_button, {
        href: "https://github.com/justboil/admin-one-vue-tailwind",
        color: "info",
        label: "Star on GitHub",
        target: "_blank",
        icon: $setup.mdiGithub
      }, null, 8
      /* PROPS */
      , ["icon"])];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=template&id=443fdee5":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=template&id=443fdee5 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-6 sm:px-0 mb-6 flex items-center justify-between"
};
var _hoisted_2 = {
  "class": "flex items-center justify-start"
};
var _hoisted_3 = {
  "class": "text-2xl"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");

  var _component_jb_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jb-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [$props.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
    key: 0,
    path: $props.icon,
    "class": "mr-3"
  }, null, 8
  /* PROPS */
  , ["path"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jb_button, {
    icon: $setup.mdiCog,
    outline: $setup.darkMode,
    small: ""
  }, null, 8
  /* PROPS */
  , ["icon", "outline"])]);
}

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/chart.config.js":
/*!*********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/chart.config.js ***!
  \*********************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nli.title-stack-item[data-v-b808595e]:not(:last-child):after {\n  content: '/';\n@apply inline-block pl-3;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleBar_vue_vue_type_style_index_0_id_b808595e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleBar_vue_vue_type_style_index_0_id_b808595e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleBar_vue_vue_type_style_index_0_id_b808595e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue":
/*!***********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardClientBar_vue_vue_type_template_id_c949765c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardClientBar.vue?vue&type=template&id=c949765c */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=template&id=c949765c");
/* harmony import */ var _CardClientBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardClientBar.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CardClientBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CardClientBar_vue_vue_type_template_id_c949765c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue":
/*!***********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardComponent_vue_vue_type_template_id_0824f1f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardComponent.vue?vue&type=template&id=0824f1f2 */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=template&id=0824f1f2");
/* harmony import */ var _CardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardComponent.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CardComponent_vue_vue_type_template_id_0824f1f2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue":
/*!****************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardTransactionBar_vue_vue_type_template_id_6db6748a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardTransactionBar.vue?vue&type=template&id=6db6748a */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=template&id=6db6748a");
/* harmony import */ var _CardTransactionBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardTransactionBar.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CardTransactionBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CardTransactionBar_vue_vue_type_template_id_6db6748a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue":
/*!********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardWidget_vue_vue_type_template_id_18823bac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardWidget.vue?vue&type=template&id=18823bac */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=template&id=18823bac");
/* harmony import */ var _CardWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardWidget.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CardWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CardWidget_vue_vue_type_template_id_18823bac__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue":
/*!**********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientsTable_vue_vue_type_template_id_50be7edc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientsTable.vue?vue&type=template&id=50be7edc */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=template&id=50be7edc");
/* harmony import */ var _ClientsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientsTable.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ClientsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ClientsTable_vue_vue_type_template_id_50be7edc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue":
/*!*******************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_4f533964__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=4f533964 */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=template&id=4f533964");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dashboard_vue_vue_type_template_id_4f533964__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue":
/*!*****************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeroBar_vue_vue_type_template_id_3a827873__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroBar.vue?vue&type=template&id=3a827873 */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=template&id=3a827873");
/* harmony import */ var _HeroBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroBar.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HeroBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HeroBar_vue_vue_type_template_id_3a827873__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue":
/*!******************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JbButton_vue_vue_type_template_id_47aef7c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JbButton.vue?vue&type=template&id=47aef7c0 */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=template&id=47aef7c0");
/* harmony import */ var _JbButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JbButton.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_JbButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_JbButton_vue_vue_type_template_id_47aef7c0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue":
/*!*******************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LineChart_vue_vue_type_template_id_0bd083f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=template&id=0bd083f8 */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=template&id=0bd083f8");
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LineChart_vue_vue_type_template_id_0bd083f8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue":
/*!*********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainSection_vue_vue_type_template_id_4ceceb26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainSection.vue?vue&type=template&id=4ceceb26 */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=template&id=4ceceb26");
/* harmony import */ var _MainSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainSection.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MainSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MainSection_vue_vue_type_template_id_4ceceb26__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue":
/*!**********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notification_vue_vue_type_template_id_4b4a12a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=4b4a12a1 */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=template&id=4b4a12a1");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Notification_vue_vue_type_template_id_4b4a12a1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue":
/*!******************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TitleBar_vue_vue_type_template_id_b808595e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=template&id=b808595e&scoped=true */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=template&id=b808595e&scoped=true");
/* harmony import */ var _TitleBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=script&lang=js");
/* harmony import */ var _TitleBar_vue_vue_type_style_index_0_id_b808595e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_TitleBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TitleBar_vue_vue_type_template_id_b808595e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-b808595e"],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue":
/*!*********************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TitleSubBar_vue_vue_type_template_id_443fdee5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleSubBar.vue?vue&type=template&id=443fdee5 */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=template&id=443fdee5");
/* harmony import */ var _TitleSubBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleSubBar.vue?vue&type=script&lang=js */ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=script&lang=js");
/* harmony import */ var _opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_rouge_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TitleSubBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TitleSubBar_vue_vue_type_template_id_443fdee5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardClientBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardClientBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardClientBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardTransactionBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardTransactionBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardTransactionBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardWidget.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientsTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeroBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JbButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JbButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./JbButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LineChart.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notification.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TitleBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleSubBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleSubBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TitleSubBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=template&id=c949765c":
/*!*****************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=template&id=c949765c ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardClientBar_vue_vue_type_template_id_c949765c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardClientBar_vue_vue_type_template_id_c949765c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardClientBar.vue?vue&type=template&id=c949765c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardClientBar.vue?vue&type=template&id=c949765c");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=template&id=0824f1f2":
/*!*****************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=template&id=0824f1f2 ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardComponent_vue_vue_type_template_id_0824f1f2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardComponent_vue_vue_type_template_id_0824f1f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardComponent.vue?vue&type=template&id=0824f1f2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardComponent.vue?vue&type=template&id=0824f1f2");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=template&id=6db6748a":
/*!**********************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=template&id=6db6748a ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardTransactionBar_vue_vue_type_template_id_6db6748a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardTransactionBar_vue_vue_type_template_id_6db6748a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardTransactionBar.vue?vue&type=template&id=6db6748a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardTransactionBar.vue?vue&type=template&id=6db6748a");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=template&id=18823bac":
/*!**************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=template&id=18823bac ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardWidget_vue_vue_type_template_id_18823bac__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardWidget_vue_vue_type_template_id_18823bac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardWidget.vue?vue&type=template&id=18823bac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/CardWidget.vue?vue&type=template&id=18823bac");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=template&id=50be7edc":
/*!****************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=template&id=50be7edc ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTable_vue_vue_type_template_id_50be7edc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTable_vue_vue_type_template_id_50be7edc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientsTable.vue?vue&type=template&id=50be7edc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/ClientsTable.vue?vue&type=template&id=50be7edc");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=template&id=4f533964":
/*!*************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=template&id=4f533964 ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_4f533964__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_4f533964__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=4f533964 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Dashboard.vue?vue&type=template&id=4f533964");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=template&id=3a827873":
/*!***********************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=template&id=3a827873 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroBar_vue_vue_type_template_id_3a827873__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroBar_vue_vue_type_template_id_3a827873__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeroBar.vue?vue&type=template&id=3a827873 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/HeroBar.vue?vue&type=template&id=3a827873");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=template&id=47aef7c0":
/*!************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=template&id=47aef7c0 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JbButton_vue_vue_type_template_id_47aef7c0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JbButton_vue_vue_type_template_id_47aef7c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./JbButton.vue?vue&type=template&id=47aef7c0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/JbButton.vue?vue&type=template&id=47aef7c0");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=template&id=0bd083f8":
/*!*************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=template&id=0bd083f8 ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_template_id_0bd083f8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_template_id_0bd083f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LineChart.vue?vue&type=template&id=0bd083f8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/LineChart.vue?vue&type=template&id=0bd083f8");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=template&id=4ceceb26":
/*!***************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=template&id=4ceceb26 ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainSection_vue_vue_type_template_id_4ceceb26__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainSection_vue_vue_type_template_id_4ceceb26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainSection.vue?vue&type=template&id=4ceceb26 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/MainSection.vue?vue&type=template&id=4ceceb26");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=template&id=4b4a12a1":
/*!****************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=template&id=4b4a12a1 ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_template_id_4b4a12a1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_template_id_4b4a12a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notification.vue?vue&type=template&id=4b4a12a1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/Notification.vue?vue&type=template&id=4b4a12a1");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=template&id=b808595e&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=template&id=b808595e&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleBar_vue_vue_type_template_id_b808595e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleBar_vue_vue_type_template_id_b808595e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TitleBar.vue?vue&type=template&id=b808595e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=template&id=b808595e&scoped=true");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=template&id=443fdee5":
/*!***************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=template&id=443fdee5 ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleSubBar_vue_vue_type_template_id_443fdee5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleSubBar_vue_vue_type_template_id_443fdee5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TitleSubBar.vue?vue&type=template&id=443fdee5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleSubBar.vue?vue&type=template&id=443fdee5");


/***/ }),

/***/ "./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css":
/*!**************************************************************************************************************************************!*\
  !*** ./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TitleBar_vue_vue_type_style_index_0_id_b808595e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./themes/rouge/js/views/modules/dashboard/views/Dashboard/TitleBar.vue?vue&type=style&index=0&id=b808595e&scoped=true&lang=css");


/***/ })

}]);