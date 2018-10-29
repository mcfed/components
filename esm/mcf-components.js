import _Button from 'antd/es/button';
import _TreeSelect from 'antd/es/tree-select';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _extends from '@babel/runtime/helpers/esm/extends';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _Tree from 'antd/es/tree';
import _Input from 'antd/es/input';
import React, { Component } from 'react';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';
import _Select from 'antd/es/select';
import _Form from 'antd/es/form';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _Row from 'antd/es/row';
import _Col from 'antd/es/col';
import _Modal from 'antd/es/modal';
import _Transfer from 'antd/es/transfer';
import _message from 'antd/es/message';
import _toConsumableArray from '@babel/runtime/helpers/esm/toConsumableArray';
import classNames from 'classnames';
import _Menu from 'antd/es/menu';
import _Dropdown from 'antd/es/dropdown';
import _Icon from 'antd/es/icon';
import _Tooltip from 'antd/es/tooltip';
import _Pagination2 from 'antd/es/pagination';
import RcPagination from 'rc-pagination';
import Pager from 'rc-pagination/es/Pager';
import MiniSelect from 'antd/es/pagination/MiniSelect';
import enUS from 'rc-pagination/es/locale/en_US';
import LocaleReceiver from 'antd/es/locale-provider/LocaleReceiver';
import Options from 'rc-pagination/es/Options';
import _extends$1 from 'babel-runtime/helpers/extends';
import _Table2 from 'antd/es/table';

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

var _class, _temp, _dec, _class2;
var FormCreate = _Form.create; // const Option = Select.Option;

var BaseForm = (_temp = _class = (_dec = FormCreate({
  onValuesChange: function onValuesChange(props, changedValues, values) {
    // console.log(props,values)
    if (props.autoSubmitForm) {
      props.onSubmit(new Event('submit'), values);
    }
  }
}), _dec(_class2 =
/*#__PURE__*/
function (_Form2) {
  _inherits(BaseForm, _Form2);

  function BaseForm() {
    var _getPrototypeOf2;

    var _this4;

    _classCallCheck(this, BaseForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "childContextTypes", {
      formRef: PropTypes.any,
      formLayout: PropTypes.object
    });

    return _this4;
  }

  _createClass(BaseForm, [{
    key: "getChildContext",
    value: function getChildContext() {
      console.log(this.props);
      var _this$props2 = this.props,
          form = _this$props2.form,
          itemLayout = _this$props2.itemLayout;
      return {
        formRef: form,
        formLayout: itemLayout
      };
    }
    /*
    render(){
     const {autoSubmitForm,itemLayout,...otherProps} = this.props
    	return React.createElement(Form,otherProps)
    }
    */

  }]);

  return BaseForm;
}(_Form)) || _class2), _defineProperty(_class, "propTypes", {
  layout: PropTypes.oneOf(['horizontal', 'inline', 'vertical']),
  itemLayout: PropTypes.object
}), _defineProperty(_class, "defaultProps", {
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
}), _temp);
/**
 * [AdvancedForm  高级Form组件带valuesChange特征]
 * @extends BaseForm
 */

var AdvancedForm =
/*#__PURE__*/
function (_BaseForm) {
  _inherits(AdvancedForm, _BaseForm);

  function AdvancedForm() {
    _classCallCheck(this, AdvancedForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(AdvancedForm).apply(this, arguments));
  }

  return AdvancedForm;
}(BaseForm);

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

var AutoSubmitForm =
/*#__PURE__*/
function (_BaseForm2) {
  _inherits(AutoSubmitForm, _BaseForm2);

  function AutoSubmitForm() {
    _classCallCheck(this, AutoSubmitForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(AutoSubmitForm).apply(this, arguments));
  }

  return AutoSubmitForm;
}(BaseForm);

_defineProperty(AutoSubmitForm, "defaultProps", {
  // containerTo:true,
  prefixCls: 'ant-form',
  layout: "vertical"
});

var FormItem =
/*#__PURE__*/
function (_Form$Item) {
  _inherits(FormItem, _Form$Item);

  function FormItem(props) {
    var _this;

    _classCallCheck(this, FormItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormItem).call(this, props));

    if (props.fetch instanceof Array) {
      _this.state = {
        childData: props.fetch
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
      var field = children;

      if (field.props.fetch instanceof Array) {
        this.setState({
          childData: field.props.fetch
        });
      }

      if (field.props.fetch && typeof field.props.fetch === 'string' && field.props.fetch !== this.props.children.props.fetch) {
        this.fetchData(field.props.fetch, field.props.params);
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var children = this.props.children;
      var field = children;

      if (typeof field.props.fetch === 'string' && field.props.fetch.length > 0) {
        this.fetchData(field.props.fetch, field.props.params);
      } else if (field.props.fetch instanceof Array) {
        this.setState({
          childData: field.props.fetch
        });
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
      if (params && /\/listJson?$/.test(fetchUrl) ? 'POST' : 'GET') ; // body={body:params}
      // new FetchAPI().fetch(fetchUrl,{
      //   ...body,
      // 	method:/\/listJson?$/.test(fetchUrl)?'POST':'GET' //兼容listJSON 使用POST请求处理
      // }).then((json) => {
      //     this.setState({
      //       childData:json.list|| json ||[]
      //     });
      // });

    }
  }, {
    key: "renderField",
    value: function renderField() {
      var _this2 = this;

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
          getPopupContainer: function getPopupContainer() {
            return ReactDOM.findDOMNode(_this2);
          }
        };
      } // console.log("TreeSelectPicker",field.type.name)


      if (field.type == TreeSelectPicker) {
        treeDataProp = {
          treeData: this.loopTreeData(childData) //  console.log(treeDataProp)

        };
      }

      if (childData.length === 0) {
        return React.createElement(field.type, Object.assign({}, otherProps, containerToProp, treeDataProp));
      } else if (field.props.renderItem) {
        return React.createElement(field.type, Object.assign({}, otherProps, containerToProp, treeDataProp), childData.map(function (d, idx) {
          return field.props.renderItem && field.props.renderItem(d, idx);
        })); // return (
        //   <field.type {...otherProps} {...containerToProp} >
        //     {childData.map((d,idx) =>field.props.renderItem && field.props.renderItem(d,idx))}
        //   </field.type>)
      } else {
        return React.createElement(field.type, Object.assign({}, otherProps, containerToProp, treeDataProp));
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
          label = _element$props.label;

      var _element$props2 = element.props,
          defaultValue = _element$props2.defaultValue,
          allowClear = _element$props2.allowClear,
          otherProps = _objectWithoutProperties(_element$props2, ["defaultValue", "allowClear"]);

      var _this$context = this.context,
          getFieldDecorator = _this$context.formRef.getFieldDecorator,
          formLayout = _this$context.formLayout;
      console.log(formRef);
      var styles = {}; // 类型转换
      // if(element.type.name=='CalendarPicker'){
      //   defaultValue=[(defaultValue[0]==""|| !defaultValue[0]) ?null:moment(defaultValue[0]),(defaultValue[1]==""|| !defaultValue[1])?null:moment(defaultValue[1])]
      // }
      //  reset antd-form-item  marginBottom value

      if (element.type === _Input && element.props.type === "hidden") {
        styles = {
          style: {
            marginBottom: 0
          }
        };
      } //console.log(otherProps)


      return React.createElement(_Form.Item, _extends({
        label: label
      }, Object.assign({}, formLayout, this.props), {
        colon: false
      }, styles), getFieldDecorator(name, _objectSpread({}, otherProps, {
        initialValue: defaultValue
      }))(this.renderField()));
    }
  }]);

  return FormItem;
}(_Form.Item);

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

var Option = _Select.Option;

var AdvancedSearchConfig =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdvancedSearchConfig, _React$Component);

  function AdvancedSearchConfig(props) {
    var _this;

    _classCallCheck(this, AdvancedSearchConfig);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdvancedSearchConfig).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      targetKeys: [],
      selectedKeys: [],
      show: true
    });

    _this.state.targetKeys = props.selectedKeys;
    return _this;
  }

  _createClass(AdvancedSearchConfig, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var selectedKeys = nextProps.selectedKeys;
      this.setState({
        targetKeys: selectedKeys
      });
    }
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
      this.setState({
        selectedKeys: _toConsumableArray(sourceSelectedKeys).concat(_toConsumableArray(targetSelectedKeys))
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(nextTargetKeys, direction, moveKeys) {
      if (nextTargetKeys.length >= 1 && nextTargetKeys.length <= 4) {
        this.setState({
          targetKeys: nextTargetKeys
        });
      } else {
        _message.error("最多只能选择4项且最少选择1项");
      }
    }
  }, {
    key: "handleOk",
    value: function handleOk() {
      var handleSure = this.props.handleSure;
      var targetKeys = this.state.targetKeys;
      handleSure(targetKeys);
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      var handleClose = this.props.handleClose;
      handleClose.call();
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.state;
      var _this$props = this.props,
          items = _this$props.items,
          show = _this$props.show;
      return React.createElement(_Modal, {
        title: "\u67E5\u8BE2\u9879\u914D\u7F6E",
        visible: show,
        onOk: this.handleOk.bind(this),
        onCancel: this.handleCancel.bind(this)
      }, React.createElement(_Transfer, {
        dataSource: items,
        titles: ['待选查询项', '已选查询项'],
        targetKeys: state.targetKeys,
        selectedKeys: state.selectedKeys,
        onChange: this.handleChange.bind(this),
        onSelectChange: this.handleSelectChange.bind(this),
        render: function render(item) {
          return item.title;
        }
      }));
    }
  }]);

  return AdvancedSearchConfig;
}(React.Component);

var AdvancedSearchForm =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AdvancedSearchForm, _React$Component2);

  function AdvancedSearchForm(props) {
    var _this2;

    _classCallCheck(this, AdvancedSearchForm);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AdvancedSearchForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      expand: false,
      defKeyType: null,
      placeHolder: "",
      items: [],
      show: false,
      displayItem: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleSearch", function (e, values) {
      e.preventDefault();
      var filterSubmitHandler = _this2.props.filterSubmitHandler;

      if (values) {
        filterSubmitHandler.call(_assertThisInitialized(_assertThisInitialized(_this2)), values);
      } else {
        _this2.form.validateFieldsAndScroll(function (err, values) {
          // console.log(this.form.getFieldsValue())
          // console.log(values)
          filterSubmitHandler.call(_assertThisInitialized(_assertThisInitialized(_this2)), values);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleReset", function () {
      _this2.form.resetFields();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "toggleExpand", function () {
      var expand = _this2.state.expand;

      _this2.setState({
        expand: !expand
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "saveFormRef", function (form) {
      _this2.form = form;
    });

    if (props.keysOption.length) {
      var _props$keysOption$rev = props.keysOption.reverse().pop(),
          label = _props$keysOption$rev.label,
          value = _props$keysOption$rev.value;

      _this2.state.defKeyType = value;
      _this2.state.placeHolder = "\u8BF7\u8F93\u5165".concat(label);
    }

    return _this2;
  }

  _createClass(AdvancedSearchForm, [{
    key: "componentWillMount",
    value: function componentWillMount() {// let {showConfig}=this.props

      /*
      if(showConfig){
        new FetchAPI().fetchGet('/search/getSearchFieldSetJson',{body:{module}}).then((json)=>{
        var json = json.map((it)=>{ return{key:it.code,title:it.name,type:it.type,checked:it.checked,id:it.id}})
            that.setState({
              items:json,
              displayItem:json.filter((it)=>it.checked==1).map((it)=>it.key)
            })
        })
      }
      */
    }
  }, {
    key: "getFields",
    // To generate mock Form.Item
    value: function getFields() {
      var _this3 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          layout = _this$props2.layout,
          classNames$$1 = _this$props2.classNames;
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
          return _this3.state.displayItem.indexOf(ch.props.name) >= 0 || idx < _this3.props.showExpand;
        });
      } else {
        renderChildren = React.Children.toArray(children).filter(function (ch, idx) {
          return idx < _this3.props.showExpand + 4;
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
    key: "renderAdvancedConfigModal",
    value: function renderAdvancedConfigModal() {
      this.setState({
        show: true
      }); //  return (<AdvancedSearchConfig handleSure={this.handleSure.bind(this)} items={items} selectedKeys={displayItem} />)
      //  return ()
    } // 此处使用下标留坑

  }, {
    key: "renderKeyCatalog",
    value: function renderKeyCatalog() {
      var _this$state = this.state,
          defKeyType = _this$state.defKeyType,
          placeHolder = _this$state.placeHolder;
      var keysOption = this.props.keysOption; //  let {label,value}=keysOption[0]

      if (keysOption.length) {
        return React.createElement(_Col, {
          span: 6,
          key: "fixhead"
        }, React.createElement(_Input.Group, {
          compact: true,
          style: {
            textAlign: 'right'
          }
        }, React.createElement(FormItem, null, React.createElement(_Select, {
          defaultActiveFirstOption: true,
          name: "keyType",
          defaultValue: defKeyType,
          onSelect: this.onTypeChange.bind(this),
          style: {
            width: '105px'
          }
        }, keysOption.map(function (it) {
          return React.createElement(Option, {
            value: it.value,
            key: it.value,
            placeholder: "请输入" + it.label
          }, it.label);
        }))), React.createElement(FormItem, {
          labelCol: {
            span: 0
          },
          wrapperCol: {
            span: 24
          },
          style: {
            flex: 1
          }
        }, React.createElement(_Input, {
          placeholder: placeHolder,
          name: "keyWord",
          style: {}
        }))));
      } else {
        return null;
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
    key: "handleSure",
    value: function handleSure(value) {// var {module} = this.props
      // var data=this.state.items.filter(it=>value.indexOf(it.key)>=0).map(it=>{ return{searchId:it.id}})

      /*
      new FetchAPI().fetchPost('/search/saveSelJson?module='+module,{
        body:{items:data}
      }).then((json)=>{
          this.setState({
            displayItem:value,
            show:false
          })
      })
      */
    }
  }, {
    key: "renderConfig",
    value: function renderConfig() {
      var _this$state2 = this.state,
          items = _this$state2.items,
          displayItem = _this$state2.displayItem,
          show = _this$state2.show;
      var showConfig = this.props.showConfig;

      if (showConfig) {
        return React.createElement(AdvancedSearchConfig, {
          handleSure: this.handleSure.bind(this),
          handleClose: this.handleClose.bind(this),
          items: items,
          selectedKeys: displayItem,
          show: show
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          showConfig = _this$props3.showConfig,
          children = _this$props3.children,
          className = _this$props3.className,
          autoSubmitForm = _this$props3.autoSubmitForm,
          layout = _this$props3.layout;
      return React.createElement("div", {
        className: classNames("advanced-search-panel", className)
      }, this.renderConfig(), React.createElement(AdvancedForm, {
        layout: layout,
        autoSubmitForm: autoSubmitForm,
        className: "advanced-search-form",
        onSubmit: this.handleSearch.bind(this),
        ref: this.saveFormRef.bind(this)
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
  keysOption: PropTypes.array.isRequired,
  // keysOption:PropTypes.arrayOf(PropTypes.shape([{
  //     label: PropTypes.string.isRequired,
  //     value: PropTypes.number.isRequired
  // }])),
  filterSubmitHandler: PropTypes.func,
  showConfig: PropTypes.bool,
  footer: PropTypes.element,
  showExpand: PropTypes.number
};
AdvancedSearchForm.defaultProps = {
  keysOption: [{
    label: "name",
    value: 0
  }],
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

      return childrenArray // .filter((it)=>{
      //   return it.props.permission==undefined?true:hasPermission(it.props.permission)
      // })
      .map(function (it, idx) {
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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var CustomRcPagination =
/*#__PURE__*/
function (_RcPagination) {
  _inherits(CustomRcPagination, _RcPagination);

  function CustomRcPagination() {
    _classCallCheck(this, CustomRcPagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomRcPagination).apply(this, arguments));
  }

  _createClass(CustomRcPagination, [{
    key: "render",
    value: function render() {
      // When hideOnSinglePage is true and there is only 1 page, hide the pager
      if (this.props.hideOnSinglePage === true && this.props.total <= this.state.pageSize) {
        return null;
      }

      var props = this.props;
      var locale = props.locale;
      var prefixCls = props.prefixCls;
      var allPages = this.calculatePage();
      var pagerList = [];
      var jumpPrev = null;
      var jumpNext = null;
      var firstPager = null;
      var lastPager = null;
      var goButton = props.showQuickJumper && props.showQuickJumper.goButton;
      var pageBufferSize = props.showLessItems ? 1 : 5;
      var _state = this.state,
          current = _state.current,
          pageSize = _state.pageSize;
      var prevPage = current - 1 > 0 ? current - 1 : 0;
      var nextPage = current + 1 < allPages ? current + 1 : allPages;

      if (allPages <= 5 + pageBufferSize * 2) {
        for (var i = 1; i <= allPages; i++) {
          var active = this.state.current === i;
          pagerList.push(React.createElement(Pager, {
            locale: locale,
            rootPrefixCls: prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: i,
            page: i,
            active: active,
            showTitle: props.showTitle,
            itemRender: props.itemRender
          }));
        }
      } else {
        var prevItemTitle = props.showLessItems ? locale.prev_3 : locale.prev_5;
        var nextItemTitle = props.showLessItems ? locale.next_3 : locale.next_5;

        if (props.showPrevNextJumpers) {
          jumpPrev = React.createElement('li', {
            title: props.showTitle ? prevItemTitle : null,
            key: 'prev',
            onClick: this.jumpPrev,
            tabIndex: '0',
            onKeyPress: this.runIfEnterJumpPrev,
            className: prefixCls + '-jump-prev'
          }, props.itemRender(this.getJumpPrevPage(), 'jump-prev', React.createElement('a', {
            className: prefixCls + '-item-link'
          })));
          jumpNext = React.createElement('li', {
            title: props.showTitle ? nextItemTitle : null,
            key: 'next',
            tabIndex: '0',
            onClick: this.jumpNext,
            onKeyPress: this.runIfEnterJumpNext,
            className: prefixCls + '-jump-next'
          }, props.itemRender(this.getJumpNextPage(), 'jump-next', React.createElement('a', {
            className: prefixCls + '-item-link'
          })));
        }

        lastPager = React.createElement(Pager, {
          locale: props.locale,
          last: true,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: allPages,
          page: allPages,
          active: false,
          showTitle: props.showTitle,
          itemRender: props.itemRender
        });
        firstPager = React.createElement(Pager, {
          locale: props.locale,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: 1,
          page: 1,
          active: false,
          showTitle: props.showTitle,
          itemRender: props.itemRender
        });
        var left = Math.max(1, current - pageBufferSize);
        var right = Math.min(current + pageBufferSize - 1, allPages);

        if (current - 1 <= pageBufferSize) {
          right = 1 + pageBufferSize * 2;
        }

        if (allPages - current <= pageBufferSize) {
          left = allPages - pageBufferSize * 2;
        }

        for (var _i = left; _i <= right; _i++) {
          var _active = current === _i;

          pagerList.push(React.createElement(Pager, {
            locale: props.locale,
            rootPrefixCls: prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: _i,
            page: _i,
            active: _active,
            showTitle: props.showTitle,
            itemRender: props.itemRender
          }));
        }

        if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
          pagerList[0] = React.cloneElement(pagerList[0], {
            className: prefixCls + '-item-after-jump-prev'
          }); //  pagerList.unshift(jumpPrev);
        }

        if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
          pagerList[pagerList.length - 1] = React.cloneElement(pagerList[pagerList.length - 1], {
            className: prefixCls + '-item-before-jump-next'
          });
        }
        /*
            if (left !== 1) {
              pagerList.unshift(firstPager);
            }
        */

        /*
            if (right !== allPages) {
              pagerList.push(lastPager);
            }
        */

      }

      var totalText = null;

      if (props.showTotal) {
        totalText = React.createElement('li', {
          className: prefixCls + '-total-text'
        }, props.showTotal(props.total, [(current - 1) * pageSize + 1, current * pageSize > props.total ? props.total : current * pageSize]));
      }

      var prevDisabled = !this.hasPrev();
      var nextDisabled = !this.hasNext();
      return React.createElement('ul', {
        className: prefixCls + ' ' + props.className,
        style: props.style,
        unselectable: 'unselectable',
        ref: this.savePaginationNode
      }, totalText, React.createElement('li', {
        title: props.showTitle ? locale.prev_page : null,
        onClick: this.prev,
        tabIndex: prevDisabled ? null : 0,
        onKeyPress: this.runIfEnterPrev,
        className: (!prevDisabled ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-prev',
        'aria-disabled': prevDisabled
      }, props.itemRender(prevPage, 'prev', React.createElement('a', {
        className: prefixCls + '-item-link'
      }))), pagerList, React.createElement('li', {
        title: props.showTitle ? locale.next_page : null,
        onClick: this.next,
        tabIndex: nextDisabled ? null : 0,
        onKeyPress: this.runIfEnterNext,
        className: (!nextDisabled ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-next',
        'aria-disabled': nextDisabled
      }, props.itemRender(nextPage, 'next', React.createElement('a', {
        className: prefixCls + '-item-link'
      }))), React.createElement(Options, {
        locale: props.locale,
        rootPrefixCls: prefixCls,
        selectComponentClass: props.selectComponentClass,
        selectPrefixCls: props.selectPrefixCls,
        changeSize: this.props.showSizeChanger ? this.changePageSize : null,
        current: this.state.current,
        pageSize: this.state.pageSize,
        pageSizeOptions: this.props.pageSizeOptions,
        quickGo: this.props.showQuickJumper ? this.handleChange : null,
        goButton: goButton
      }));
    }
  }]);

  return CustomRcPagination;
}(RcPagination);

var CustomPagination =
/*#__PURE__*/
function (_Pagination) {
  _inherits(CustomPagination, _Pagination);

  function CustomPagination() {
    _classCallCheck(this, CustomPagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomPagination).apply(this, arguments));
  }

  _createClass(CustomPagination, [{
    key: "renderCustomPagination",
    value: function renderCustomPagination(locale) {
      console.log("renderPagination");

      var _a = this.props,
          className = _a.className,
          size = _a.size,
          restProps = __rest(_a, ["className", "size"]);

      var isSmall = size === 'small';
      return React.createElement(CustomRcPagination, _extends$1({}, restProps, {
        className: classNames(className, {
          mini: isSmall
        }),
        selectComponentClass: isSmall ? MiniSelect : _Select,
        locale: locale
      })); //return React.createElement(CustomRcPagination, _extends({}, restProps, { className: classNames(className, { mini: isSmall }), selectComponentClass: null, locale: locale }));
    }
  }, {
    key: "render",
    value: function render() {
      console.log("renderPagination");
      return React.createElement(LocaleReceiver, {
        componentName: 'Pagination',
        defaultLocale: enUS
      }, this.renderCustomPagination.bind(this));
    }
  }]);

  return CustomPagination;
}(_Pagination2);

_defineProperty(CustomPagination, "defaultProps", {
  prefixCls: 'ant-pagination',
  selectPrefixCls: 'ant-select'
});

var CustomTable =
/*#__PURE__*/
function (_Table) {
  _inherits(CustomTable, _Table);

  function CustomTable() {
    _classCallCheck(this, CustomTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomTable).apply(this, arguments));
  }

  _createClass(CustomTable, [{
    key: "renderPagination",
    value: function renderPagination(paginationPosition) {
      // 强制不需要分页
      if (!this.hasPagination()) {
        return null;
      }

      var size = 'default';
      var pagination = this.state.pagination;

      if (pagination.size) {
        size = pagination.size;
      } else if (this.props.size === 'middle' || this.props.size === 'small') {
        size = 'small';
      }

      var position = pagination.position || 'bottom';
      var total = pagination.total || this.getLocalData().length;
      return total > 0 && (position === paginationPosition || position === 'both') ? React.createElement(CustomPagination, _extends$1({
        key: 'pagination-' + paginationPosition
      }, pagination, {
        className: classNames(pagination.className, this.props.prefixCls + '-pagination'),
        onChange: this.handlePageChange,
        total: total,
        size: size,
        current: this.getMaxCurrent(total),
        onShowSizeChange: this.handleShowSizeChange
      })) : null;
    } // Get pagination, filters, sorter

  }]);

  return CustomTable;
}(_Table2);

_defineProperty(CustomTable, "defaultProps", {
  prefixCls: 'ant-table'
});

//import BaseForm,{FormItem} from 'components/BaseForm'
var DataTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTable, _Component);

  _createClass(DataTable, [{
    key: "showPopover",
    value: function showPopover() {
      this.setState({
        visible: true
      });
    }
  }]);

  function DataTable(props) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      visible: false,
      newColumns: [],
      displayColumns: []
    });

    _this.state.columns = props.columns;
    return _this;
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
        return col.type != 'config' && col.visible == true;
      }).map(function (col) {
        return col.key;
      }); // return (
      //     <div className="" style={{width:400,height:200,padding:'10px',border:'1px solid #cfdae5'}}>
      //       <TableMenu defaultValue={defaultValue} columns={columns} onSelectChange={this.onSelectChange.bind(this)} onClosePopup={this.onClosePopup.bind(this)} ></TableMenu>
      //     </div>
      //   )

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pagination = _this$props.pagination,
          showConfig = _this$props.showConfig,
          page = _this$props.page,
          otherProps = _objectWithoutProperties(_this$props, ["pagination", "showConfig", "page"]);

      var _this$state = this.state,
          visible = _this$state.visible,
          columns = _this$state.columns;
      var newColumns;

      if (showConfig) {
        newColumns = columns.filter(function (col) {
          return col.visible == true;
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

      return React.createElement(_Table2, _extends({}, otherProps, {
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

export { AdvancedSearchForm as AdvancedSearch, BaseForm, FormItem, ButtonGroups, CustomTable, DataTable, Permission, TreeView };
