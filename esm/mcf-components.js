import _Form from 'antd/es/form';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _Button from 'antd/es/button';
import _TreeSelect from 'antd/es/tree-select';
import _Tree from 'antd/es/tree';
import _Input from 'antd/es/input';
import _DatePicker from 'antd/es/date-picker';
import _Select from 'antd/es/select';
import _Row from 'antd/es/row';
import _Col from 'antd/es/col';
import classNames from 'classnames';
import _Menu from 'antd/es/menu';
import _Dropdown from 'antd/es/dropdown';
import _Icon from 'antd/es/icon';
import _Tooltip from 'antd/es/tooltip';
import _Modal from 'antd/es/modal';
import _Table from 'antd/es/table';
import _Checkbox from 'antd/es/checkbox';

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

var FormCreate = _Form.create;

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
          itemLayout = _this$props.itemLayout; //  console.log("getChildContext",form)

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
          otherProps = _objectWithoutProperties(_this$props2, ["autoSubmitForm", "itemLayout", "children"]); // console.log(otherProps.form)


      return React.createElement(_Form, otherProps, children);
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
 * @extends BaseForm
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

var Search = _Input.Search;
var TreeNode = _Tree.TreeNode,
    DirectoryTree = _Tree.DirectoryTree;

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
      }, React.createElement(_Tree, _extends({
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
        return React.createElement(_TreeSelect, _extends({}, otherProps, {
          defaultValue: this.state.value,
          treeData: treeData,
          allowClear: allowClear,
          onChange: onChange,
          onSelect: this.onChange.bind(this)
        }));
      } else {
        return React.createElement(_TreeSelect, _extends({}, otherProps, {
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
      }, React.createElement(_Button, {
        onClick: this.onMouseHandler.bind(this, inside)
      }, !inside ? "收起" : "展开"), this.renderPanel());
    }
  }]);

  return TrewViewPanel;
}(Component);

var Option = _Select.Option;

var FormItem =
/*#__PURE__*/
function (_Component) {
  _inherits(FormItem, _Component);

  function FormItem(props) {
    var _this;

    _classCallCheck(this, FormItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormItem).call(this, props));

    if (props.children.props.options instanceof Array) {
      _this.state = {
        childData: props.children.props.options
      };
    } else {
      _this.state = {
        childData: []
      };
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
      } // if(field.props.fetch instanceof Array){
      //   this.setState({
      //     childData:field.props.fetch
      //   });
      // }
      // if(field.props.fetch && typeof(field.props.fetch) === 'string' && field.props.fetch !==this.props.children.props.fetch)
      // {
      //     this.fetchData(field.props.fetch,field.props.params)
      //     11
      // }

    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var children = this.props.children;
      var field = children;

      if (typeof field.props.fetch === 'string' && field.props.fetch.length > 0) {
        this.fetchData(field.props.fetch, field.props.params);
      }
    }
    /**
     * [fetchData 获取远程接口数据]
     * @param  {[type]} fetchUrl [description]
     * @return {[type]}          [description]
     */

  }, {
    key: "fetchData",
    value: function fetchData(fetchUrl, params) {
      // let body={}
      console.error("xhr还未实现!");
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
          allowClear = _field$props.allowClear,
          otherProps = _objectWithoutProperties(_field$props, ["defaultValue", "allowClear"]); // console.log(ReactDOM.findDOMNode(this));
      // getPopupContainer


      var containerToProp = {};
      var treeDataProp = {};

      if (containerTo && field.type === _Select && !field.props.changeCalendarContainer) {
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

      if (childData.length === 0) {
        return React.createElement(field.type, Object.assign({}, otherProps, containerToProp, treeDataProp));
      } else if (field.props.renderItem) {
        /**********有坑 ，待坑**************/
        return React.createElement(field.type, Object.assign({
          key: new Date().valueOf()
        }, otherProps, containerToProp, treeDataProp), childData.map(function (d, idx) {
          return field.props.renderItem && field.props.renderItem(d, idx);
        }));
      } else {
        return React.createElement(field.type, Object.assign({}, otherProps, containerToProp, treeDataProp));
      }
    }
  }, {
    key: "loopTreeData",
    value: function loopTreeData(data) {
      var _this2 = this;

      return data.map(function (item) {
        if (item.children && item.children.length) {
          return Object.assign(item, {
            title: item.text,
            value: item.id,
            key: item.id
          }, {
            children: _this2.loopTreeData(item.children)
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
          label = _element$props.label;

      var _element$props2 = element.props,
          defaultValue = _element$props2.defaultValue,
          allowClear = _element$props2.allowClear,
          otherProps = _objectWithoutProperties(_element$props2, ["defaultValue", "allowClear"]);

      var _this$context = this.context,
          getFieldDecorator = _this$context.formRef.getFieldDecorator,
          formLayout = _this$context.formLayout;
      var styles = {};

      if (element.type == _DatePicker.RangePicker) {
        defaultValue = [defaultValue[0] == "" || !defaultValue[0] ? null : moment(defaultValue[0]), defaultValue[1] == "" || !defaultValue[1] ? null : moment(defaultValue[1])];
      } //  reset antd-form-item  marginBottom value


      if (element.type === _Input && element.props.type === "hidden") {
        styles = {
          style: {
            marginBottom: 0
          }
        };
      }

      return React.createElement(_Form.Item, _extends({
        label: label
      }, Object.assign({}, {}, formLayout, this.props), {
        colon: false
      }, styles), getFieldDecorator(name, _objectSpread({}, otherProps, {
        initialValue: defaultValue
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

//import styles from './AdvancedSearch.less'

var Option$1 = _Select.Option;

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
      _this.form.resetFields();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleExpand", function () {
      var expand = _this.state.expand;

      _this.setState({
        expand: !expand
      });
    });

    return _this;
  }

  _createClass(AdvancedSearchForm, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
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
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      } : {}; // console.log(formItemLayout)

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
        if (it.props.allowClear === false) {
          return React.createElement(_Col, {
            span: 6,
            key: i
          }, React.createElement(FormItem, _extends({
            colon: true
          }, formItemLayout, {
            containerTo: false,
            className: classNames$$1
          }), React.cloneElement(it)));
        } else {
          return React.createElement(_Col, {
            span: 6,
            key: i
          }, React.createElement(FormItem, _extends({
            colon: true
          }, formItemLayout, {
            containerTo: false,
            className: classNames$$1
          }), React.cloneElement(it, {
            allowClear: true
          })));
        }
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
      return React.createElement(_Row, {
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
      }, React.createElement(_Button, {
        htmlType: "submit",
        onClick: this.handleSearch.bind(this),
        type: "primary"
      }, "\u67E5\u8BE2"))));
    }
  }]);

  return AdvancedSearchForm;
}(React.Component);
AdvancedSearchForm.propTypes = {
  filterSubmitHandler: PropTypes.func,
  showConfig: PropTypes.bool,
  footer: PropTypes.element,
  showExpand: PropTypes.number
};
AdvancedSearchForm.defaultProps = {
  autoSubmitForm: false,
  showConfig: false,
  module: "",
  filterSubmitHandler: function filterSubmitHandler() {},
  showExpand: 3,
  layout: 'horizontal' //export default AdvancedSearchForm = Form.create()(AdvancedSearchForm)

};

// import {hasPermission} from 'app/utils/ConfigUtils'

/*
*children 1个 多个数据格式处理
*
*/
var Comfirm =
/*#__PURE__*/
function (_Component) {
  _inherits(Comfirm, _Component);

  function Comfirm() {
    _classCallCheck(this, Comfirm);

    return _possibleConstructorReturn(this, _getPrototypeOf(Comfirm).apply(this, arguments));
  }

  _createClass(Comfirm, [{
    key: "onConfirmClick",
    value: function onConfirmClick() {
      var _this$props = this.props,
          onConfirm = _this$props.onConfirm,
          title = _this$props.title,
          content = _this$props.content;
      return _Modal.confirm({
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

  return Comfirm;
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
        if (it.props.permission == undefined) {
          return true;
        } else {
          return it.props.permission && it.props.permission == true;
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
          actionkey = _it$props.actionkey;

      if (confirm) {
        return React.createElement(Comfirm, Object.assign({}, {
          key: idx,
          title: "确认框",
          content: confirm,
          placement: placement,
          onConfirm: function onConfirm() {
            handleClick(actionkey);
          }
        }), React.createElement(_Tooltip, Object.assign({}, {
          key: idx,
          title: tip
        }), React.cloneElement(it, Object.assign({}, it.props), children)));
      } else {
        return React.createElement(_Tooltip, Object.assign({}, {
          key: idx,
          title: tip
        }), React.cloneElement(it, Object.assign({}, it.props, {
          onClick: function onClick() {
            handleClick(actionkey);
          }
        }), children));
      }
    } // return

  }, {
    key: "renderMenuReactElement",
    value: function renderMenuReactElement(it, idx) {
      var _it$props2 = it.props,
          tip = _it$props2.tip,
          children = _it$props2.children;
      return React.createElement(_Tooltip, Object.assign({}, {
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
      }), React.createElement(_Dropdown, {
        overlay: this.renderMenuItem(endArray)
      }, React.createElement(_Button, null, React.createElement(_Icon, {
        type: "ellipsis"
      }))));
    }
  }, {
    key: "renderMenuItem",
    value: function renderMenuItem(itemList) {
      var _this3 = this;

      var handleClick = this.props.handleClick;
      return React.createElement(_Menu, {
        onClick: handleClick
      }, itemList.map(function (it, idx) {
        return React.createElement(_Menu.Item, {
          key: idx
        }, _this3.renderMenuReactElement(it, idx));
      }));
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          showSize = _this$props3.showSize;
      var childrenArray = React.Children.toArray(children);
      return React.createElement(_Button.Group, null, childrenArray.length > showSize ? this.renderMixButtonMenu() : this.renderButtonOnly());
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


_defineProperty(ButtonGroups, "contextTypes", {
  appReducer: PropTypes.object
});
ButtonGroups.propTypes = {
  showSize: PropTypes.number,
  handleClick: PropTypes.func,
  children: PropTypes.array
};
ButtonGroups.defaultProps = {
  showSize: 5
};

//import BaseForm,{FormItem} from 'components/BaseForm'
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
      visible: true //请求远程数据接口

    });

    return _this;
  }

  _createClass(TableMenu, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var actions = this.props.actions;
    } // //处理表格提交后动作
    // handleOk(){
    //   console.log(this)
    //   this.form.onSubmit()
    //   let { onClosePopup } = this.props
    //   onClosePopup()
    // }
    // saveFormRef=(form)=>this.form=form
    // handleSubmit(values){
    //   var {onSelectChange}=this.props
    //   console.log(values)
    //    // return new API().fetchTableColumns(values).then(json => {
    //    //   onSelectChange(values.isShowArr)
    //    //   // console.log(json,values)
    //    // }).catch(ex => {
    //    //   return "error"
    //    // })
    // }

  }, {
    key: "handleChange",
    value: function handleChange(value) {
      // console.log(value)
      var onSelectChange = this.props.onSelectChange;
      onSelectChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          form = _this$props.form,
          initialValues = _this$props.initialValues,
          handleSubmit = _this$props.handleSubmit,
          children = _this$props.children,
          defaultValue = _this$props.defaultValue,
          columns = _this$props.columns,
          onClosePopup = _this$props.onClosePopup;
      var saveFormRef = this.saveFormRef;
      return React.createElement(_Form, {
        onSubmit: handleSubmit,
        ref: saveFormRef,
        layout: "inline"
      }, React.createElement(_Checkbox.Group, {
        name: "isShowArr",
        style: {
          width: '100%'
        },
        defaultValue: defaultValue,
        onChange: this.handleChange.bind(this)
      }, React.createElement(_Row, null, columns.filter(function (it) {
        return it.title != '操作';
      }).map(function (it, idx) {
        return React.createElement(_Col, {
          span: 8,
          key: idx
        }, React.createElement(_Checkbox, {
          value: it.key,
          disabled: it.isRead == 1 ? true : false
        }, it.title));
      }))));
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
      // console.log("menu")
      var columns = this.state.columns;
      var defaultValue = columns.filter(function (col) {
        return col.type != 'config' && (col.visible = true || col.visible == undefined);
      }).map(function (col) {
        return col.key;
      });
      return React.createElement("div", {
        className: "",
        style: {
          width: 400,
          height: 200,
          padding: '10px',
          border: '1px solid #cfdae5'
        }
      }, React.createElement(TableMenu, {
        defaultValue: defaultValue,
        columns: columns,
        onSelectChange: this.onSelectChange.bind(this),
        onClosePopup: this.onClosePopup.bind(this)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          pagination = _this$props2.pagination,
          showConfig = _this$props2.showConfig,
          page = _this$props2.page,
          otherProps = _objectWithoutProperties(_this$props2, ["pagination", "showConfig", "page"]);

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
      }

      return React.createElement(_Table, _extends({}, otherProps, {
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

export { AdvancedSearchForm as AdvancedSearch, SubmitForm as BaseForm, FormItem, ButtonGroups, DataTable, Permission, TreeView, PropertyTable };
