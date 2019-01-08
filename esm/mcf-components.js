function __$styleInject(css) {
  if (!css) return;

  if (typeof window == 'undefined') return;
  var style = document.createElement('style');
  style.setAttribute('media', 'screen');

  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'antd/lib/form';
import moment from 'moment';
import Tree from 'antd/lib/tree';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import TreeSelect from 'antd/lib/tree-select';
import Select from 'antd/lib/select';
import 'antd/lib/date-picker';
import fetch from 'cross-fetch';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Modal from 'antd/lib/modal';
import message from 'antd/lib/message';
import classNames from 'classnames';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Table from 'antd/lib/table';
import Checkbox from 'antd/lib/checkbox';
import Popconfirm from 'antd/lib/popconfirm';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var Td = function Td(_ref) {
  var name = _ref.name,
      value = _ref.value,
      _ref$nameClass = _ref.nameClass,
      nameClass = _ref$nameClass === void 0 ? '' : _ref$nameClass,
      _ref$valueClass = _ref.valueClass,
      valueClass = _ref$valueClass === void 0 ? '' : _ref$valueClass;
  return [React.createElement("td", {
    className: nameClass,
    key: 'td' + name
  }, typeof name === 'function' ? name() : name), React.createElement("td", {
    className: valueClass,
    key: 'td1' + name
  }, typeof value === 'function' ? value() : value)];
};

Td.propTypes = {
  nameClass: PropTypes.string,
  valueClass: PropTypes.string
};

var DetailTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DetailTable, _React$Component);

  function DetailTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DetailTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DetailTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showDom", function (dataSource) {
      var columnNumber = _this.props.columnNumber === undefined ? 1 : _this.props.columnNumber;

      if (columnNumber <= 0) {
        throw Error('列数必须大于0');
      }

      var trLength = Math.ceil(dataSource.length / columnNumber);
      var dom = [];

      var _loop = function _loop(i) {
        dom.push(React.createElement("tr", {
          key: 'tr' + i
        }, dataSource.map(function (v, k) {
          return k >= columnNumber * i && k < columnNumber * i + columnNumber && React.createElement(Td, _extends({}, _this.props, {
            key: 'td' + k,
            name: v.name,
            value: v.value
          }));
        })));
      };

      for (var i = 0; i < trLength; i++) {
        _loop(i);
      }

      return dom;
    });

    return _this;
  }

  _createClass(DetailTable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dataSource = _this$props.dataSource,
          title = _this$props.title,
          tableClass = _this$props.tableClass;
      return React.createElement("div", {
        className: tableClass
      }, React.createElement("div", {
        className: "ant-table-title"
      }, title), React.createElement("div", {
        className: "ant-table-content"
      }, React.createElement("div", {
        className: "ant-table-body"
      }, React.createElement("table", {
        style: {
          width: '100%'
        }
      }, React.createElement("tbody", {
        className: "ant-table-tbody"
      }, this.showDom(dataSource))))));
    }
  }]);

  return DetailTable;
}(React.Component);

DetailTable.propTypes = {
  columnNumber: PropTypes.number,
  dataSource: PropTypes.array,
  tableClass: PropTypes.string,
  title: PropTypes.string
};
DetailTable.defaultProps = {
  columnNumber: 2,
  tableClass: "ant-table ant-table-bordered ant-table-detail"
};

var FormCreate = Form.create;

var BaseForm =
/*#__PURE__*/
function (_Component) {
  _inherits(BaseForm, _Component);

  function BaseForm() {
    _classCallCheck(this, BaseForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(BaseForm).apply(this, arguments));
  }

  _createClass(BaseForm, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this$props = this.props,
          form = _this$props.form,
          itemLayout = _this$props.itemLayout;
      return {
        formRef: form,
        formLayout: itemLayout
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          autoSubmitForm = _this$props2.autoSubmitForm,
          itemLayout = _this$props2.itemLayout,
          children = _this$props2.children,
          otherProps = _objectWithoutProperties(_this$props2, ["autoSubmitForm", "itemLayout", "children"]);

      return React.createElement(Form, otherProps, children);
    }
  }]);

  return BaseForm;
}(Component);

_defineProperty(BaseForm, "childContextTypes", {
  formRef: PropTypes.any,
  formLayout: PropTypes.object
});

_defineProperty(BaseForm, "propTypes", {
  layout: PropTypes.oneOf(['horizontal', 'inline', 'vertical']),
  itemLayout: PropTypes.object
});

_defineProperty(BaseForm, "defaultProps", {
  prefixCls: 'ant-form',
  layout: 'horizontal',
  itemLayout: {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  }
});

var SubmitForm = FormCreate()(BaseForm);
/**

 * [AdvancedForm  高级Form组件带valuesChange特征]
 */

var AdvancedForm =
/*#__PURE__*/
function (_SubmitForm) {
  _inherits(AdvancedForm, _SubmitForm);

  function AdvancedForm() {
    _classCallCheck(this, AdvancedForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(AdvancedForm).apply(this, arguments));
  }

  return AdvancedForm;
}(SubmitForm);

_defineProperty(AdvancedForm, "propTypes", {
  layout: PropTypes.oneOf(['horizontal', 'inline', 'vertical']),
  itemLayout: PropTypes.object
});

_defineProperty(AdvancedForm, "defaultProps", {
  // containerTo:true,
  prefixCls: 'ant-form',
  layout: "horizontal",
  itemLayout: {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  }
});

var WrapperDatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(WrapperDatePicker, _Component);

  function WrapperDatePicker(props) {
    var _this;

    _classCallCheck(this, WrapperDatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WrapperDatePicker).call(this, props));

    if (props.value instanceof Array) {
      _this.state = {
        value: props.value && props.value.length == 2 ? [new moment(props.value[0], props.format), new moment(props.value[1], props.format)] : null
      };
    } else {
      _this.state = {
        value: props.value && props.value !== "" ? new moment(props.value, props.format) : null
      };
    }

    return _this;
  }

  _createClass(WrapperDatePicker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(nextProps.value) !== JSON.stringify(this.props.value)) {
        if (nextProps.value instanceof Array) {
          this.setState({
            value: nextProps.value && nextProps.value.length == 2 && nextProps.value[0] !== "" && nextProps.value[1] !== "" ? [new moment(nextProps.value[0], nextProps.format), new moment(nextProps.value[1], nextProps.format)] : null
          });
        } else {
          this.setState({
            value: nextProps.value && nextProps.value !== "" ? new moment(nextProps.value, nextProps.format) : null
          });
        }
      }
    }
  }, {
    key: "onChange",
    value: function onChange(date, dateString) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          children = _this$props.children;
      var format = children.props.format;

      if (date instanceof Array) {
        if (date.length == 0) {
          this.setState({
            value: date
          }, onChange(undefined));
        } else {
          // console.log(format,date[0].format(format),date[1].format(format))
          this.setState({
            value: date
          }, onChange([date[0].format(format), date[1].format(format)]));
        }
      } else {
        this.setState({
          value: date
        }, onChange(date.format(format)));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          otherProps = _this$props2.otherProps;
      var value = this.state.value;
      return React.cloneElement(children, _objectSpread({}, otherProps, {
        value: value,
        onChange: this.onChange.bind(this)
      }));
    }
  }]);

  return WrapperDatePicker;
}(Component);

var Search = Input.Search;
var TreeNode = Tree.TreeNode,
    DirectoryTree = Tree.DirectoryTree;

var TreeView =
/*#__PURE__*/
function (_Component) {
  _inherits(TreeView, _Component);

  // state = {
  // 	checkedKeys: [],
  // }
  function TreeView(props) {
    var _this;

    _classCallCheck(this, TreeView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeView).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCheck", function (checkedKeys, e) {
      _this.setState({
        checkedKeys: checkedKeys.checked
      }, function () {
        _this.props.onChange(_this.state.checkedKeys);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelect", function (selectedKeys, e, selectedNodes) {
      // console.log(selectedKeys,e.node)
      var onSelect = _this.props.onSelect;

      _this.setState({
        selectedKeys: selectedKeys
      });

      if (onSelect) {
        onSelect(e.node);
      }
    });

    _this.state = {
      checkedKeys: props.value
    };
    return _this;
  }

  _createClass(TreeView, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(nextProps.value) != JSON.stringify(this.props.value)) {
        this.setState({
          checkedKeys: nextProps.value
        });
      }
    }
  }, {
    key: "loopTreeNode",
    value: function loopTreeNode(data) {
      var _this2 = this;

      var renderNode = this.props.renderNode;
      return data.map(function (item) {
        if (item.children && item.children.length) {
          return React.cloneElement(renderNode(item), {}, _this2.loopTreeNode(item.children));
        }

        return React.cloneElement(renderNode(item));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          treeDataSource = _this$props.treeDataSource,
          treeConfig = _this$props.treeConfig,
          isTreeInModal = _this$props.isTreeInModal,
          value = _this$props.value,
          onSelect = _this$props.onSelect,
          defaultKey = _this$props.defaultKey;
      var checkedKeys = this.state.checkedKeys;
      return React.createElement("div", {
        className: "ant-tree-view"
      }, React.createElement(Tree, _extends({
        defaultExpandAll: true,
        defaultSelectedKeys: [checkedKeys],
        checkedKeys: checkedKeys
      }, treeConfig, {
        className: isTreeInModal ? "tree-in-modal" : '',
        defaultExpandAll: true,
        onCheck: this.onCheck,
        onSelect: this.onSelect
      }), this.loopTreeNode(treeDataSource)));
    }
  }]);

  return TreeView;
}(Component);
var TreeSelectPicker =
/*#__PURE__*/
function (_Component2) {
  _inherits(TreeSelectPicker, _Component2);

  function TreeSelectPicker(props) {
    var _this3;

    _classCallCheck(this, TreeSelectPicker);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TreeSelectPicker).call(this, props));
    _this3.state = {
      value: props.value
    };
    return _this3;
  } //


  _createClass(TreeSelectPicker, [{
    key: "onChange",
    value: function onChange(value, label) {
      var onChange = this.props.onChange; // console.log(value,label)

      this.setState({
        value: value
      }, function () {
        onChange(value);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          treeData = _this$props2.treeData,
          children = _this$props2.children,
          value = _this$props2.value,
          allowClear = _this$props2.allowClear,
          otherProps = _objectWithoutProperties(_this$props2, ["onChange", "treeData", "children", "value", "allowClear"]); // console.log(children,this.state.value)


      if (allowClear == true) {
        return React.createElement(TreeSelect, _extends({}, otherProps, {
          defaultValue: this.state.value,
          treeData: treeData,
          allowClear: allowClear,
          onChange: onChange,
          onSelect: this.onChange.bind(this)
        }));
      } else {
        return React.createElement(TreeSelect, _extends({}, otherProps, {
          value: this.state.value,
          treeData: treeData,
          onSelect: this.onChange.bind(this)
        }));
      }
    }
  }]);

  return TreeSelectPicker;
}(Component);
var TrewViewPanel =
/*#__PURE__*/
function (_Component3) {
  _inherits(TrewViewPanel, _Component3);

  function TrewViewPanel() {
    var _getPrototypeOf2;

    var _this4;

    _classCallCheck(this, TrewViewPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TrewViewPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "state", {
      key: '',
      inside: false,
      label: "",
      value: ""
    });

    return _this4;
  }

  _createClass(TrewViewPanel, [{
    key: "onSearch",
    value: function onSearch(value, event) {
      this.setState({
        key: value
      });
    }
  }, {
    key: "onSelect",
    value: function onSelect(node, value) {
      // console.log(node.props.title)
      this.setState({
        label: node.props.title,
        value: node.props.value
      });
    }
  }, {
    key: "filterTree",
    value: function filterTree(data, regexp) {
      var _this5 = this;

      // let { renderNode } = this.props
      return new Array().concat(data).filter(function (item) {
        if (item.children && item.children.length) {
          // console.log(this.filterTree(item.children,regexp))
          item.children = _this5.filterTree(item.children, regexp);
        } // console.log(item.title,regexp.test(item.title))


        return regexp.test(item.title) || item.children && item.children.length > 0;
      });
    }
  }, {
    key: "onMouseHandler",
    value: function onMouseHandler(status) {
      var _this$state = this.state,
          key = _this$state.key,
          inside = _this$state.inside,
          label = _this$state.label,
          value = _this$state.value;

      if (label != "") {
        this.setState({
          inside: !status
        });
      }
    }
  }, {
    key: "renderPanel",
    value: function renderPanel() {
      var _this$props3 = this.props,
          treeDataSource = _this$props3.treeDataSource,
          renderNode = _this$props3.renderNode; // console.log(treeDataSource)

      var _this$state2 = this.state,
          key = _this$state2.key,
          inside = _this$state2.inside,
          label = _this$state2.label,
          value = _this$state2.value;

      if (inside) {
        return React.createElement("div", {
          className: ""
        }, label);
      } else {
        return React.createElement("div", {
          className: ""
        }, React.createElement(Search, {
          style: {
            marginBottom: 8
          },
          placeholder: "Search",
          onSearch: this.onSearch.bind(this)
        }), React.createElement(TreeView, {
          treeDataSource: this.filterTree(treeDataSource, new RegExp(key)),
          value: value,
          renderNode: renderNode,
          onSelect: this.onSelect.bind(this)
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(renderNode)
      var _this$props4 = this.props,
          treeDataSource = _this$props4.treeDataSource,
          renderNode = _this$props4.renderNode;
      var _this$state3 = this.state,
          key = _this$state3.key,
          inside = _this$state3.inside,
          label = _this$state3.label;
      return React.createElement("div", {
        className: ""
      }, React.createElement(Button, {
        onClick: this.onMouseHandler.bind(this, inside)
      }, !inside ? "收起" : "展开"), this.renderPanel());
    }
  }]);

  return TrewViewPanel;
}(Component);

var Option = Select.Option;

var FormItem =
/*#__PURE__*/
function (_Component) {
  _inherits(FormItem, _Component);

  function FormItem(props) {
    var _this;

    _classCallCheck(this, FormItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormItem).call(this, props));
    var children = props.children;
    var field = children;

    if (children.props.options instanceof Array) {
      _this.state = {
        childData: children.props.options
      };
    } else {
      _this.state = {
        childData: []
      };
    }

    if (typeof field.props.fetch === 'string' && field.props.fetch.length > -1) {
      _this.fetchData(field.props.fetch, field.props.params);
    }

    return _this;
  }

  _createClass(FormItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var children = nextProps.children;
      var field = children; //  console.log(JSON.stringify(field.props.options),JSON.stringify(this.props.children.props.options))

      if (JSON.stringify(field.props.options) !== JSON.stringify(this.props.children.props.options)) {
        this.setState({
          childData: field.props.options
        });
      }

      if (field.props.fetch && typeof field.props.fetch === 'string' && field.props.fetch !== this.props.children.props.fetch) {
        this.fetchData(field.props.fetch, field.props.fetchCallback);
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
    /**
     * [fetchData 获取远程接口数据]
     * @param  {[type]} fetchUrl [description]
     * @return {[type]}          [description]
     */

  }, {
    key: "fetchData",
    value: function fetchData(fetchUrl, params) {
      var _this2 = this;

      // let body={}
      fetch(fetchUrl, {
        method: 'GET'
      }).then(function (json) {
        return json.json();
      }).then(function (result) {
        if (result.code == 0) {
          _this2.setState({
            childData: result.data.items
          });
        }
      });
    }
  }, {
    key: "renderField",
    value: function renderField() {
      var _this$props = this.props,
          children = _this$props.children,
          containerTo = _this$props.containerTo;
      var childData = this.state.childData;
      var field = children;

      var _field$props = field.props,
          defaultValue = _field$props.defaultValue,
          otherProps = _objectWithoutProperties(_field$props, ["defaultValue"]); // console.log(ReactDOM.findDOMNode(this));
      // getPopupContainer


      var containerToProp = {};
      var treeDataProp = {};

      if (containerTo && field.type === Select && !field.props.changeCalendarContainer) {
        containerToProp = {
          getPopupContainer: function getPopupContainer(triggerNode) {
            return triggerNode.parentNode;
          }
        };
      }

      if (field.type == TreeSelectPicker) {
        treeDataProp = {
          treeData: this.loopTreeData(childData)
        };
      }

      if (field.type.name === "PickerWrapper") {
        var _field$props2 = field.props,
            _children = _field$props2.children,
            _otherProps = _field$props2.otherProps;
        return React.createElement(WrapperDatePicker, _otherProps, field);
      } else {
        if (childData.length === 0) {
          return React.createElement(field.type, Object.assign({}, otherProps, containerToProp, treeDataProp));
        } else if (field.props.renderItem) {
          return React.createElement(field.type, Object.assign({
            key: new Date().valueOf()
          }, otherProps, containerToProp, treeDataProp), childData.map(function (d, idx) {
            return field.props.renderItem && field.props.renderItem(d, idx);
          }));
        } else {
          return React.createElement(field.type, Object.assign({}, otherProps, containerToProp, treeDataProp));
        }
      }
    }
  }, {
    key: "loopTreeData",
    value: function loopTreeData(data) {
      var _this3 = this;

      return data.map(function (item) {
        if (item.children && item.children.length) {
          return Object.assign(item, {
            title: item.text,
            value: item.id,
            key: item.id
          }, {
            children: _this3.loopTreeData(item.children)
          });
        } else {
          return Object.assign(item, {
            title: item.text,
            value: item.id,
            key: item.id
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.props.children;
      var _element$props = element.props,
          name = _element$props.name,
          label = _element$props.label,
          format = _element$props.format;

      var _element$props2 = element.props,
          defaultValue = _element$props2.defaultValue,
          allowClear = _element$props2.allowClear,
          otherProps = _objectWithoutProperties(_element$props2, ["defaultValue", "allowClear"]);

      var _this$context = this.context,
          getFieldDecorator = _this$context.formRef.getFieldDecorator,
          formLayout = _this$context.formLayout;
      var styles = {};

      if (element.type === Input && element.props.type === "hidden") {
        styles = {
          style: {
            marginBottom: 0
          }
        };
      }

      if (element.props.hidden == true) {
        styles = {
          style: {
            display: "none"
          }
        };
      }

      return React.createElement(Form.Item, _extends({
        label: label
      }, Object.assign({}, {}, formLayout, this.props), styles), getFieldDecorator(name, _objectSpread({}, otherProps, {
        initialValue: defaultValue,
        hidden: element.props.hidden || false
      }))(this.renderField()));
    }
  }]);

  return FormItem;
}(Component);

_defineProperty(FormItem, "defaultProps", {
  containerTo: true
});

_defineProperty(FormItem, "contextTypes", {
  formRef: PropTypes.object,
  formLayout: PropTypes.object
});

var Permission =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Permission, _React$Component);

  function Permission() {
    _classCallCheck(this, Permission);

    return _possibleConstructorReturn(this, _getPrototypeOf(Permission).apply(this, arguments));
  }

  _createClass(Permission, [{
    key: "render",
    value: function render() {
      var expression = this.props.expression;
      var childrenWithProps = expression ? React.Children.map(this.props.children, function (child) {
        return React.cloneElement(child, {});
      }) : null;
      return childrenWithProps;
    }
  }]);

  return Permission;
}(React.Component);

Permission.propTypes = {
  expression: PropTypes.any
};
Permission.defaultProps = {
  expression: true
};

var Option$1 = Select.Option;

var AdvancedSearchForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdvancedSearchForm, _React$Component);

  function AdvancedSearchForm(props) {
    var _this;

    _classCallCheck(this, AdvancedSearchForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdvancedSearchForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      expand: false,
      defKeyType: null,
      placeHolder: "",
      items: [],
      show: false,
      displayItem: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearch", function (e, values) {
      e.preventDefault();
      var filterSubmitHandler = _this.props.filterSubmitHandler;

      if (values) {
        filterSubmitHandler.call(_assertThisInitialized(_assertThisInitialized(_this)), values);
      } else {
        _this.form.validateFieldsAndScroll(function (err, values) {
          // console.log(this.form.getFieldsValue())
          // console.log(values)
          filterSubmitHandler.call(_assertThisInitialized(_assertThisInitialized(_this)), values);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReset", function () {
      var form = _this.form;
      var values = form.getFieldsValue();
      var emptyValue = {}; // this.form.resetFields();

      for (var v in values) {
        console.log(v);

        if (values.hasOwnProperty(v)) {
          emptyValue[v] = undefined;
        }
      }

      console.log(emptyValue);
      form.setFieldsValue(emptyValue);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleExpand", function () {
      var expand = _this.state.expand;

      _this.setState({
        expand: !expand
      });
    });

    _this.state.loading = props.loading;
    return _this;
  }

  _createClass(AdvancedSearchForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.loading !== this.props.loading) {
        this.setState({
          loading: nextProps.loading
        });
      }
    }
  }, {
    key: "getFields",
    // To generate mock Form.Item
    value: function getFields() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          layout = _this$props.layout,
          classNames$$1 = _this$props.classNames;
      var renderChildren;
      var formItemLayout = layout && layout !== 'inline' ? {
        labelCol: {
          span: 8
        },
        wrapperCol: {
          span: 16
        }
      } : {};

      if (React.Children.count(children) === 0) {
        return null;
      } // if(this.state.expand==false ){
      //   renderChildren = children.filter((ch,idx)=>idx<3)
      // }else if(this.props.showConfig){  //高级配置后，前三固定 后四配置


      if (this.props.showConfig) {
        //高级配置后，前三固定 后四配置
        renderChildren = React.Children.toArray(children).filter(function (ch, idx) {
          //return this.state.displayItem.indexOf(ch.props.name)>=0 || idx<3
          return _this2.state.displayItem.indexOf(ch.props.name) >= 0 || idx < _this2.props.showExpand;
        });
      } else {
        renderChildren = React.Children.toArray(children).filter(function (ch, idx) {
          return idx < _this2.props.showExpand + 4;
        });
      }

      return renderChildren.map(function (it, i) {
        return React.createElement(Col, {
          span: 8,
          key: i
        }, React.createElement(FormItem, _extends({
          colon: true
        }, formItemLayout, {
          containerTo: false,
          className: classNames$$1
        }), React.cloneElement(it)));
      }); //return children;
    }
  }, {
    key: "onTypeChange",
    value: function onTypeChange(value, option) {
      this.setState({
        placeHolder: option.props.placeholder
      });
    }
  }, {
    key: "handleAdvancedMenu",
    value: function handleAdvancedMenu(obj) {
      if (obj.key === 'advanced') {
        alert("call advanced");
      } else if (obj.key === 'clear') {
        this.handleReset();
      } else if (obj.key === 'preview') {
        alert("call restore");
      }
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        show: false
      });
    }
  }, {
    key: "saveFormRef",
    value: function saveFormRef(insta) {
      if (insta) {
        this.form = insta.props.form;
      }
    }
  }, {
    key: "renderKeyword",
    value: function renderKeyword() {
      return React.createElement(Row, {
        gutter: 20
      }, this.getFields());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          showConfig = _this$props2.showConfig,
          children = _this$props2.children,
          className = _this$props2.className,
          autoSubmitForm = _this$props2.autoSubmitForm,
          layout = _this$props2.layout;
      var loading = this.state.loading;
      return React.createElement("div", {
        className: classNames("advanced-search-panel", className)
      }, React.createElement(SubmitForm, {
        layout: layout,
        autoSubmitForm: autoSubmitForm,
        className: "advanced-search-form",
        onSubmit: this.handleSearch.bind(this),
        wrappedComponentRef: this.saveFormRef.bind(this)
      }, this.renderKeyword(), React.createElement("div", {
        className: "advanced-search-toolbar"
      }, React.createElement(Button, {
        htmlType: "submit",
        disabled: loading,
        onClick: this.handleSearch.bind(this),
        type: "primary"
      }, "\u641C\u7D22"), React.createElement(Button, {
        htmlType: "reset",
        onClick: this.handleReset.bind(this)
      }, "\u91CD\u7F6E"))));
    }
  }]);

  return AdvancedSearchForm;
}(React.Component);
AdvancedSearchForm.propTypes = {
  filterSubmitHandler: PropTypes.func,
  showConfig: PropTypes.bool,
  loading: PropTypes.bool,
  footer: PropTypes.element,
  locale: PropTypes.object,
  showExpand: PropTypes.number
};
AdvancedSearchForm.defaultProps = {
  autoSubmitForm: false,
  showConfig: false,
  loading: false,
  locale: {},
  filterSubmitHandler: function filterSubmitHandler() {},
  showExpand: 3,
  layout: 'horizontal' //export default AdvancedSearchForm = Form.create()(AdvancedSearchForm)

};

/*
*children 1个 多个数据格式处理
*
*/

var Confirm =
/*#__PURE__*/
function (_Component) {
  _inherits(Confirm, _Component);

  function Confirm() {
    _classCallCheck(this, Confirm);

    return _possibleConstructorReturn(this, _getPrototypeOf(Confirm).apply(this, arguments));
  }

  _createClass(Confirm, [{
    key: "onConfirmClick",
    value: function onConfirmClick() {
      var _this$props = this.props,
          onConfirm = _this$props.onConfirm,
          title = _this$props.title,
          content = _this$props.content;
      return Modal.confirm({
        title: title || "确认框",
        content: content,
        okText: '确认',
        onOk: onConfirm,
        cancelText: '取消'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.cloneElement(children, {
        onClick: this.onConfirmClick.bind(this)
      });
    }
  }]);

  return Confirm;
}(Component);

var ButtonGroups =
/*#__PURE__*/
function (_Component2) {
  _inherits(ButtonGroups, _Component2);

  function ButtonGroups() {
    _classCallCheck(this, ButtonGroups);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonGroups).apply(this, arguments));
  }

  _createClass(ButtonGroups, [{
    key: "renderButtonOnly",
    value: function renderButtonOnly() {
      var _this = this;

      var children = this.props.children;
      var childrenArray = React.Children.toArray(children); // let {appReducer} = this.context
      // console.log(this.context.appReducer)

      return childrenArray.filter(function (it) {
        if (it.props.permission === undefined) {
          return true;
        } else {
          return it.props.permission && it.props.permission === true;
        }
      }).map(function (it, idx) {
        return _this.renderReactElement(it, idx);
      });
    }
  }, {
    key: "renderReactElement",
    value: function renderReactElement(it, idx) {
      var handleClick = this.props.handleClick;

      var _it$props = it.props,
          tip = _it$props.tip,
          confirm = _it$props.confirm,
          placement = _it$props.placement,
          children = _it$props.children,
          block = _it$props.block,
          actionkey = _it$props.actionkey,
          disabled = _it$props.disabled,
          permission = _it$props.permission,
          otherProps = _objectWithoutProperties(_it$props, ["tip", "confirm", "placement", "children", "block", "actionkey", "disabled", "permission"]);

      if (confirm && !disabled) {
        return React.createElement(Confirm, Object.assign({}, {
          key: idx,
          title: "确认框",
          content: confirm,
          placement: placement,
          onConfirm: function onConfirm() {
            handleClick(actionkey);
          }
        }), React.createElement(Tooltip, Object.assign({}, {
          key: idx,
          title: tip
        }), React.createElement(Button, Object.assign({
          actionkey: actionkey,
          disabled: disabled
        }, otherProps), children)));
      } else {
        return React.createElement(Tooltip, Object.assign({}, {
          key: idx,
          title: tip
        }), React.createElement(Button, Object.assign({
          actionkey: actionkey,
          disabled: disabled
        }, otherProps, !disabled ? {
          onClick: function onClick() {
            handleClick(actionkey);
          }
        } : {}), children));
      }
    } // return

  }, {
    key: "renderMenuReactElement",
    value: function renderMenuReactElement(it, idx) {
      var _it$props2 = it.props,
          tip = _it$props2.tip,
          children = _it$props2.children;
      return React.createElement(Tooltip, Object.assign({}, {
        key: idx,
        title: tip
      }), React.cloneElement(it, Object.assign({}, it.props), children));
    }
  }, {
    key: "renderMixButtonMenu",
    value: function renderMixButtonMenu() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          showSize = _this$props2.showSize;
      var childrenArray = React.Children.toArray(children);
      var endArray = childrenArray.splice(showSize);
      return React.createElement("div", null, childrenArray // .filter((it)=>{
      //   console.log(it.props.permission)
      //   return it.props.permission==true
      // })
      .map(function (it, idx) {
        return _this2.renderReactElement(it, idx);
      }), React.createElement(Dropdown, {
        overlay: this.renderMenuItem(endArray)
      }, React.createElement(Button, null, React.createElement(Icon, {
        type: "ellipsis"
      }))));
    }
  }, {
    key: "renderMenuItem",
    value: function renderMenuItem(itemList) {
      var _this3 = this;

      var handleClick = this.props.handleClick;
      return React.createElement(Menu, {
        onClick: handleClick
      }, itemList.map(function (it, idx) {
        return React.createElement(Menu.Item, {
          key: idx
        }, _this3.renderMenuReactElement(it, idx));
      }));
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          showSize = _this$props3.showSize,
          mode = _this$props3.mode;
      var childrenArray = React.Children.toArray(children);
      return React.createElement(Button.Group, null, mode === 'ButtonGroup' ? this.renderButtonOnly() : this.renderMixButtonMenu());
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "button-groups"
      }, this.renderChildren());
    }
  }]);

  return ButtonGroups;
}(Component);
/*
* showSize:超过收起的数目
* handleClick : 点击事件（需子元素以actionKey区分）
* 子元素如需confirm确认 子元素自身添加confirm 属性 value为提醒文字
* tip 为元素上移显示文字
*/


_defineProperty(ButtonGroups, "contextTypes", {// appReducer:PropTypes.object
});
ButtonGroups.propTypes = {
  showSize: PropTypes.number,
  handleClick: PropTypes.func,
  mode: PropTypes.oneOf(['ButtonGroup', 'ButtonMenu'])
};
ButtonGroups.defaultProps = {
  showSize: 5,
  handleClick: function handleClick(actionkey) {},
  mode: 'ButtonGroup'
};

var TableMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(TableMenu, _Component);

  function TableMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      visible: true,
      columns: [] //请求远程数据接口

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveFormRef", function (form) {
      return _this.form = form;
    });

    return _this;
  }

  _createClass(TableMenu, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var actions = this.props.actions;
    } // //处理表格提交后动作

  }, {
    key: "handleOk",
    value: function handleOk() {
      var columns = this.state.columns;
      var _this$props = this.props,
          onSelectChange = _this$props.onSelectChange,
          onClosePopup = _this$props.onClosePopup; //  console.log(columns)

      onSelectChange(columns); //  this.form.onSubmit()

      onClosePopup();
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(values) {
      var onSelectChange = this.props.onSelectChange;
      this.setState({
        columns: values
      }); //  console.log(values)
      // return new API().fetchTableColumns(values).then(json => {
      //   onSelectChange(values.isShowArr)
      //   // console.log(json,values)
      // }).catch(ex => {
      //   return "error"
      // })
    }
  }, {
    key: "handleChange",
    value: function handleChange(values) {
      var onSelectChange = this.props.onSelectChange;
      this.setState({
        columns: values
      }); // console.log(value)
      // const { onSelectChange } =this.props
      // onSelectChange(value)
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          form = _this$props2.form,
          initialValues = _this$props2.initialValues,
          handleSubmit = _this$props2.handleSubmit,
          children = _this$props2.children,
          defaultValue = _this$props2.defaultValue,
          columns = _this$props2.columns,
          onClosePopup = _this$props2.onClosePopup;
      var saveFormRef = this.saveFormRef;
      return React.createElement("div", {
        className: "",
        style: {
          width: 400,
          height: 200,
          padding: '10px',
          border: '1px solid #cfdae5',
          background: '#fff'
        }
      }, React.createElement(Form, {
        onSubmit: handleSubmit,
        ref: saveFormRef,
        layout: "inline"
      }, React.createElement(Checkbox.Group, {
        name: "isShowArr",
        style: {
          width: '100%'
        },
        defaultValue: defaultValue,
        onChange: this.handleChange.bind(this)
      }, React.createElement(Row, null, columns.filter(function (it) {
        return it.title != '操作';
      }).map(function (it, idx) {
        return React.createElement(Col, {
          span: 8,
          key: idx
        }, React.createElement(Checkbox, {
          value: it.key,
          disabled: it.isRead == 1 ? true : false
        }, it.title));
      }))), React.createElement("div", {
        style: {
          textAlign: 'right'
        }
      }, React.createElement(Button, {
        size: "small",
        onClick: onClosePopup
      }, "\u53D6\u6D88"), React.createElement(Button, {
        size: "small",
        type: "primary",
        onClick: this.handleOk.bind(this),
        style: {
          marginLeft: '10px'
        }
      }, "\u786E\u5B9A"))));
    }
  }]);

  return TableMenu;
}(Component);

var DataTable =
/*#__PURE__*/
function (_Component2) {
  _inherits(DataTable, _Component2);

  _createClass(DataTable, [{
    key: "showPopover",
    value: function showPopover() {
      this.setState({
        visible: true
      });
    }
  }]);

  function DataTable(props) {
    var _this2;

    _classCallCheck(this, DataTable);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      visible: false,
      newColumns: [],
      displayColumns: []
    });

    _this2.state.columns = props.columns;
    return _this2;
  }

  _createClass(DataTable, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var columns = nextProps.columns;
      this.setState({
        columns: columns
      });
    }
  }, {
    key: "onSelectChange",
    value: function onSelectChange(checkedValues) {
      //console.log(checkedValues)
      this.setState({
        columns: this.state.columns.map(function (col) {
          if (checkedValues.indexOf(col.key) >= 0) {
            col.visible = true;
          } else {
            col.visible = false;
          }

          return col;
        })
      });
    }
  }, {
    key: "onClosePopup",
    value: function onClosePopup() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: "onPopupVisibleChange",
    value: function onPopupVisibleChange(boolean) {
      // console.log('show',arguments)
      this.setState({
        visible: boolean
      });
    }
  }, {
    key: "renderTableMenu",
    value: function renderTableMenu() {
      var columns = this.state.columns;
      var defaultValue = columns.filter(function (col) {
        return col.type != 'config' && (col.visible === true || col.visible === undefined);
      }).map(function (col) {
        return col.key;
      });
      return React.createElement(TableMenu, {
        defaultValue: defaultValue,
        columns: columns,
        onSelectChange: this.onSelectChange.bind(this),
        onClosePopup: this.onClosePopup.bind(this)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          pagination = _this$props3.pagination,
          showConfig = _this$props3.showConfig,
          page = _this$props3.page,
          otherProps = _objectWithoutProperties(_this$props3, ["pagination", "showConfig", "page"]);

      var _this$state = this.state,
          visible = _this$state.visible,
          columns = _this$state.columns;
      var newColumns;

      if (showConfig) {
        // if(true){
        newColumns = columns.filter(function (col) {
          return col.visible == true || col.visible == undefined; // return true
        }).concat([{
          title: " ",
          filterDropdown: this.renderTableMenu(),
          filterDropdownVisible: visible,
          onFilterDropdownVisibleChange: this.onPopupVisibleChange.bind(this),
          width: 30,
          fixed: 'right',
          type: 'config'
        }]);
      } else {
        newColumns = columns;
      } //console.log(newColumns,columns)


      return React.createElement(Table, _extends({}, otherProps, {
        columns: newColumns,
        pagination: !pagination ? false : Object.assign({}, pagination, page)
      }));
    }
  }]);

  return DataTable;
}(Component);

_defineProperty(DataTable, "defaultProps", {
  page: {},
  prefixCls: 'ant-table',
  showQuickJumper: true,
  pagination: {
    showTotal: function showTotal(total) {
      return "\u5171 ".concat(total, " \u6761");
    },
    // showQuickJumper:true,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100']
  },
  //  scroll:{ y: 500 },
  style: {
    width: "100%"
  },
  showConfig: false,
  columns: []
});

var ModalAndView =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalAndView, _Component);

  function ModalAndView() {
    _classCallCheck(this, ModalAndView);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalAndView).apply(this, arguments));
  }

  _createClass(ModalAndView, [{
    key: "handleBackRoute",
    value: function handleBackRoute() {
      var _this$props = this.props,
          actions = _this$props.actions,
          history = _this$props.history,
          router = _this$props.router; //  actions.backRoute(router)
    }
  }, {
    key: "handleSaveRoute",
    value: function handleSaveRoute() {
      var formView = this.refs.formView;
      formView.onSubmit();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          route = _this$props2.route,
          children = _this$props2.children,
          otherProps = _objectWithoutProperties(_this$props2, ["route", "children"]);

      console.log(Modal);
      console.log(React.createElement("div", null));
      console.log(this.props);
      return React.createElement(Modal, _extends({
        title: "title",
        visible: true,
        maskClosable: false,
        onCancel: this.handleBackRoute.bind(this),
        onOk: this.handleSaveRoute.bind(this)
      }, otherProps), React.cloneElement(children.type, Object.assign({}, otherProps, {
        ref: "formView"
      })));
    }
  }]);

  return ModalAndView;
}(Component); //export default withRouter(ModalAndView)

var PropertyTable =
/*#__PURE__*/
function (_Component) {
  _inherits(PropertyTable, _Component);

  function PropertyTable() {
    _classCallCheck(this, PropertyTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyTable).apply(this, arguments));
  }

  _createClass(PropertyTable, [{
    key: "renderItem",
    value: function renderItem(ds, idx) {
      return React.createElement("div", {
        key: idx
      }, React.createElement("th", null, ds.label), React.createElement("td", null, ds.value));
    }
  }, {
    key: "renderTableRows",
    value: function renderTableRows() {
      var dataSource = this.props.dataSource;
      return React.createElement("tr", null, dataSource.map(this.renderItem));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("table", null, React.createElement("tbody", null, this.renderTableRows()));
    }
  }]);

  return PropertyTable;
}(Component);
PropertyTable.propsType = {
  dataSource: PropTypes.array.isRequired,
  renderItem: PropTypes.func
};

var FormItem$1 = Form.Item;
var EditableContext = React.createContext();

var EditableRow = function EditableRow(_ref) {
  var form = _ref.form,
      index = _ref.index,
      props = _objectWithoutProperties(_ref, ["form", "index"]);

  return React.createElement(EditableContext.Provider, {
    value: form
  }, React.createElement("tr", props));
};

var EditableFormRow = Form.create()(EditableRow);

var EditableCell =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditableCell, _React$Component);

  function EditableCell() {
    _classCallCheck(this, EditableCell);

    return _possibleConstructorReturn(this, _getPrototypeOf(EditableCell).apply(this, arguments));
  }

  _createClass(EditableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          editing = _this$props.editing,
          dataIndex = _this$props.dataIndex,
          title = _this$props.title,
          record = _this$props.record,
          index = _this$props.index,
          editDom = _this$props.editDom,
          editConfig = _this$props.editConfig,
          restProps = _objectWithoutProperties(_this$props, ["editing", "dataIndex", "title", "record", "index", "editDom", "editConfig"]);

      return React.createElement(EditableContext.Consumer, null, function (form) {
        var getFieldDecorator = form.getFieldDecorator;
        return React.createElement("td", restProps, editing ? React.createElement(FormItem$1, {
          style: {
            margin: 0
          }
        }, getFieldDecorator(dataIndex, _objectSpread({}, editConfig, {
          initialValue: record[dataIndex] === '' ? editConfig.initialValue : record[dataIndex]
        }))(editDom())) : restProps.children);
      });
    }
  }]);

  return EditableCell;
}(React.Component);

var EditTable =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(EditTable, _React$Component2);

  function EditTable(props) {
    var _this;

    _classCallCheck(this, EditTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditTable).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isEditing", function (record) {
      return record.key === _this.state.editingKey;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cancel", function (form, key) {
      var obj = _this.state.data.filter(function (d) {
        return d.key === key;
      })[0];

      var Bdelete = false;

      for (var b in obj) {
        if (obj[b] === '') {
          Bdelete = true;
          break;
        }
      }

      if (Bdelete) {
        _this.delete(key);
      }

      _this.setState({
        editingKey: ''
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addNew", function () {
      if (_this.state.editingKey !== '') {
        message.error('请先保存编辑项再进行添加操作！');
        return false;
      }

      var key = new Date().valueOf() + '' + Math.floor(Math.random() * 10 + 1);
      var obj = {
        key: key
      };

      var keyList = _toConsumableArray(_this.state.keyList);

      if (keyList.length > 1) {
        keyList.length = keyList.length - 1;
      }

      keyList.forEach(function (d) {
        obj[d] = '';
      });

      var data = _toConsumableArray(_this.state.data);

      data.push(obj);

      _this.setState({
        data: data,
        editingKey: key
      });
    });

    _this.state = {
      data: [],
      editingKey: '',
      keyList: [],
      columns: [{
        title: '操作',
        dataIndex: '操作',
        render: function render(text, record) {
          var editable = _this.isEditing(record);

          return React.createElement("div", null, editable ? React.createElement("span", null, React.createElement(EditableContext.Consumer, null, function (form) {
            return React.createElement("a", {
              onClick: function onClick() {
                return _this.save(form, record.key);
              },
              style: {
                marginRight: 8
              }
            }, "\u4FDD\u5B58");
          }), React.createElement(EditableContext.Consumer, null, function (form) {
            return React.createElement(Popconfirm, {
              title: "\u786E\u8BA4\u53D6\u6D88?",
              onConfirm: function onConfirm() {
                return _this.cancel(form, record.key);
              }
            }, React.createElement("a", null, "\u53D6\u6D88"));
          })) : React.createElement("span", null, React.createElement("a", {
            style: {
              marginRight: 8
            },
            onClick: function onClick() {
              return _this.edit(record.key);
            }
          }, "\u7F16\u8F91"), React.createElement(Popconfirm, {
            title: "\u786E\u8BA4\u5220\u9664?",
            onConfirm: function onConfirm() {
              return _this.delete(record.key);
            }
          }, React.createElement("a", null, "\u5220\u9664"))));
        }
      }]
    };
    return _this;
  }

  _createClass(EditTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.columns && this.props.columns.length > 0) {
        this.setState({
          data: this.props.data === undefined ? [] : this.props.data,
          columns: _toConsumableArray(this.props.columns).concat(_toConsumableArray(this.state.columns))
        }, function () {
          var keyList = _this2.state.columns.map(function (c) {
            return c.dataIndex;
          });

          _this2.setState({
            keyList: keyList
          });
        });
      }
    }
  }, {
    key: "edit",
    value: function edit(key) {
      if (this.state.editingKey !== '') {
        message.error('请先保存编辑项再进行其他编辑操作！');
        return false;
      }

      this.setState({
        editingKey: key
      });
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var _this3 = this;

      var newData = _toConsumableArray(this.state.data);

      this.setState({
        data: newData.filter(function (c) {
          return c.key !== key;
        }),
        editingKey: ''
      }, function () {
        _this3.props.onChange(_this3.state.data);
      });
    }
  }, {
    key: "save",
    value: function save(form, key) {
      var _this4 = this;

      form.validateFields(function (error, row) {
        if (error) {
          return;
        }

        var newData = _toConsumableArray(_this4.state.data);

        var index = newData.findIndex(function (item) {
          return key === item.key;
        });

        if (index > -1) {
          var item = newData[index];
          newData.splice(index, 1, _objectSpread({}, item, row));

          _this4.setState({
            data: newData,
            editingKey: ''
          }, function () {
            _this4.props.onChange(newData);
          });
        } else {
          newData.push(row);

          _this4.setState({
            data: newData,
            editingKey: ''
          }, function () {
            _this4.props.onChange(newData);
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var components = {
        body: {
          row: EditableFormRow,
          cell: EditableCell
        }
      };
      var columns = this.state.columns.map(function (col) {
        if (!col.editComponent) {
          return col;
        }

        return _objectSpread({}, col, {
          onCell: function onCell(record) {
            return {
              record: record,
              editConfig: col.editConfig,
              editDom: col.editComponent,
              dataIndex: col.dataIndex,
              title: col.title,
              editing: _this5.isEditing(record)
            };
          }
        });
      });
      return React.createElement(Table, {
        components: components,
        bordered: true,
        dataSource: this.state.data,
        columns: columns,
        rowClassName: "editable-row",
        footer: function footer() {
          return React.createElement(Button, {
            icon: "plus",
            onClick: _this5.addNew,
            style: {
              width: '100%'
            }
          }, "\u65B0\u589E");
        }
      });
    }
  }]);

  return EditTable;
}(React.Component);

EditTable.propTypes = {
  columns: PropTypes.array.isRequired
};

export { AdvancedSearchForm as AdvancedSearch, SubmitForm as BaseForm, FormItem, ButtonGroups, WrapperDatePicker, DataTable, Permission, ModalAndView, TreeView, PropertyTable, EditTable, DetailTable };
