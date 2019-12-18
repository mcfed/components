'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var _Form = _interopDefault(require('antd/es/form'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var moment = _interopDefault(require('moment'));
var _Button = _interopDefault(require('antd/es/button'));
var _TreeSelect = _interopDefault(require('antd/es/tree-select'));
var _Tree = _interopDefault(require('antd/es/tree'));
var _Input = _interopDefault(require('antd/es/input'));
var _Select = _interopDefault(require('antd/es/select'));
var fetch = _interopDefault(require('cross-fetch'));
var qs = require('qs');
var _Icon = _interopDefault(require('antd/es/icon'));
var _Row = _interopDefault(require('antd/es/row'));
var _Col = _interopDefault(require('antd/es/col'));
var LocaleReceiver = _interopDefault(
  require('antd/lib/locale-provider/LocaleReceiver')
);
var classNames = _interopDefault(require('classnames'));
var _Menu = _interopDefault(require('antd/es/menu'));
var _Dropdown = _interopDefault(require('antd/es/dropdown'));
var _Tooltip = _interopDefault(require('antd/es/tooltip'));
var _Modal = _interopDefault(require('antd/es/modal'));
var _Table = _interopDefault(require('antd/es/table'));
var _Checkbox = _interopDefault(require('antd/es/checkbox'));
var _Spin = _interopDefault(require('antd/es/spin'));
var _Tabs = _interopDefault(require('antd/es/tabs'));
var _Transfer = _interopDefault(require('antd/es/transfer'));
var _defineProperty = _interopDefault(
  require('babel-runtime/helpers/defineProperty')
);
var Item = _interopDefault(require('antd/es/transfer/item'));
var Animate = _interopDefault(require('rc-animate'));
var _extends = _interopDefault(require('babel-runtime/helpers/extends'));
var _possibleConstructorReturn = _interopDefault(
  require('babel-runtime/helpers/possibleConstructorReturn')
);
var Operation = _interopDefault(require('antd/es/transfer/operation'));
var LocaleReceiver$1 = _interopDefault(
  require('antd/es/locale-provider/LocaleReceiver')
);
var defaultLocale = _interopDefault(require('antd/es/locale-provider/default'));
var _message = _interopDefault(require('antd/es/message'));
var _Divider = _interopDefault(require('antd/es/divider'));
var _TimePicker = _interopDefault(require('antd/es/time-picker'));
var _Card = _interopDefault(require('antd/es/card'));
var _Collapse = _interopDefault(require('antd/es/collapse'));
var _Steps = _interopDefault(require('antd/es/steps'));

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
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

function _extends$1() {
  _extends$1 =
    Object.assign ||
    function(target) {
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

  return _extends$1.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly)
    keys = keys.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    if (i % 2) {
      var source = arguments[i] != null ? arguments[i] : {};
      ownKeys(source, true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(
        target,
        Object.getOwnPropertyDescriptors(arguments[i])
      );
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(arguments[i], key)
        );
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
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
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
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
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

var FormCreate = _Form.create;

var BaseForm =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(BaseForm, _Component);

    function BaseForm() {
      _classCallCheck(this, BaseForm);

      return _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(BaseForm).apply(this, arguments)
      );
    }

    _createClass(BaseForm, [
      {
        key: 'getChildContext',
        value: function getChildContext() {
          var _this$props = this.props,
            form = _this$props.form,
            itemLayout = _this$props.itemLayout,
            colNumber = _this$props.colNumber;
          return {
            formRef: form,
            formLayout: itemLayout,
            colNumber: colNumber
          };
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            autoSubmitForm = _this$props2.autoSubmitForm,
            itemLayout = _this$props2.itemLayout,
            colNumber = _this$props2.colNumber,
            children = _this$props2.children,
            otherProps = _objectWithoutProperties(_this$props2, [
              'autoSubmitForm',
              'itemLayout',
              'colNumber',
              'children'
            ]);

          return React__default.createElement(_Form, otherProps, children);
        }
      }
    ]);

    return BaseForm;
  })(React.Component);

_defineProperty$1(BaseForm, 'childContextTypes', {
  formRef: PropTypes.any,
  formLayout: PropTypes.object,
  colNumber: PropTypes.number
});

_defineProperty$1(BaseForm, 'propTypes', {
  layout: PropTypes.oneOf(['horizontal', 'inline', 'vertical']),
  itemLayout: PropTypes.object,
  colNumber: PropTypes.number
});

_defineProperty$1(BaseForm, 'defaultProps', {
  prefixCls: 'ant-form',
  layout: 'horizontal',
  colNumber: 1,
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
  (function(_SubmitForm) {
    _inherits(AdvancedForm, _SubmitForm);

    function AdvancedForm() {
      _classCallCheck(this, AdvancedForm);

      return _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(AdvancedForm).apply(this, arguments)
      );
    }

    return AdvancedForm;
  })(SubmitForm);

_defineProperty$1(AdvancedForm, 'propTypes', {
  layout: PropTypes.oneOf(['horizontal', 'inline', 'vertical']),
  itemLayout: PropTypes.object
});

_defineProperty$1(AdvancedForm, 'defaultProps', {
  // containerTo:true,
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

var WrapperDatePicker =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(WrapperDatePicker, _Component);

    function WrapperDatePicker(props) {
      var _this;

      _classCallCheck(this, WrapperDatePicker);

      _this = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(WrapperDatePicker).call(this, props)
      );

      if (props.value instanceof Array) {
        // console.log('condtructor',props.value)
        _this.state = {
          value:
            props.value && props.value.length == 2
              ? [
                  moment(moment(props.value[0]).format(props.format)),
                  moment(moment(props.value[1]).format(props.format))
                ]
              : null
        };
      } else {
        _this.state = {
          value:
            props.value && props.value !== ''
              ? new moment(props.value, props.format)
              : null
        };
      }

      return _this;
    }

    _createClass(WrapperDatePicker, [
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (
            JSON.stringify(nextProps.value) !== JSON.stringify(this.props.value)
          ) {
            this.translateVal2State(nextProps.value, nextProps.format);
          }
        }
      },
      {
        key: 'translateVal2State',
        value: function translateVal2State(value, format) {
          // console.log('translateval',value)
          if (value instanceof Array) {
            this.setState({
              value:
                value && value.length == 2
                  ? [
                      moment(moment(value[0]).format(format)),
                      moment(moment(value[1]).format(format))
                    ]
                  : null
            });
          } else {
            this.setState({
              value: value && value !== '' ? new moment(value, format) : null
            });
          }
        }
      },
      {
        key: 'onChange',
        value: function onChange(date, dateString) {
          var _this$props = this.props,
            onChange = _this$props.onChange,
            children = _this$props.children; // const format=children.proxps.format
          // wrapperdatepick 在formitem中是隐式调用的 所以只有children 的属性暴露出来

          var _children$props = children.props,
            format = _children$props.format,
            valueFormat = _children$props.valueFormat,
            timeRange = _children$props.timeRange,
            timeRangeType = _children$props.timeRangeType;

          if (date instanceof Array) {
            if (date.length == 0) {
              this.setState(
                {
                  value: date
                },
                onChange(undefined)
              );
            } else {
              // console.log(format,date[0].format(format),date[1].format(format),valueFormat)
              this.setState(
                {
                  value: date
                },
                function() {
                  /*根据valueFormat判断是否需要转换输出格式，时间戳*/
                  if (valueFormat) {
                    if (valueFormat.toLocaleLowerCase() === 'x') {
                      if (timeRange) {
                        onChange([
                          Number(
                            moment(date[0].format(format))
                              .startOf(timeRangeType || 'day')
                              .format(valueFormat)
                          ),
                          Number(
                            moment(date[1].format(format))
                              .endOf(timeRangeType || 'day')
                              .format(valueFormat)
                          )
                        ]);
                      } else {
                        onChange([
                          Number(
                            moment(date[0].format(format)).format(valueFormat)
                          ),
                          Number(
                            moment(date[1].format(format)).format(valueFormat)
                          )
                        ]);
                      }
                    } else {
                      if (timeRange) {
                        onChange([
                          moment(date[0].format(format))
                            .startOf(timeRangeType || 'day')
                            .format(valueFormat),
                          moment(date[1].format(format))
                            .endOf(timeRangeType || 'day')
                            .format(valueFormat)
                        ]);
                      } else {
                        onChange([
                          moment(date[0].format(format)).format(valueFormat),
                          moment(date[1].format(format)).format(valueFormat)
                        ]);
                      }
                    }
                  } else {
                    onChange([date[0].format(format), date[1].format(format)]);
                  }
                }
              );
            }
          } else {
            this.setState(
              {
                value: date
              },
              function() {
                if (valueFormat) {
                  if (valueFormat.toLocaleLowerCase() === 'x') {
                    onChange(
                      Number(moment(date.format(format)).format(valueFormat))
                    );
                  } else {
                    onChange(moment(date.format(format)).format(valueFormat));
                  }
                } else {
                  onChange(date.format(format));
                }
              }
            );
          }
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            children = _this$props2.children,
            valueFormat = _this$props2.valueFormat,
            otherProps = _objectWithoutProperties(_this$props2, [
              'children',
              'valueFormat'
            ]);

          var value = this.state.value; // console.log(value)

          return React__default.cloneElement(
            children,
            _objectSpread2({}, otherProps, {
              value: value,
              onChange: this.onChange.bind(this)
            })
          );
        }
      }
    ]);

    return WrapperDatePicker;
  })(React.Component);
WrapperDatePicker.propTypes = {
  /**
  组件传出的时间格式，同moment.format 格式
  **/
  valueFormat: PropTypes.string
};

var Search = _Input.Search;
var TreeNode = _Tree.TreeNode;
var DirectoryTree = _Tree.DirectoryTree;

var TreeView =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(TreeView, _Component);

    // state = {
    // 	checkedKeys: [],
    // }
    function TreeView(props) {
      var _this;

      _classCallCheck(this, TreeView);

      _this = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(TreeView).call(this, props)
      );

      _defineProperty$1(_assertThisInitialized(_this), 'onCheck', function(
        checkedKeys,
        e
      ) {
        _this.setState(
          {
            checkedKeys: checkedKeys
          },
          function() {
            _this.props.onChange(_this.state.checkedKeys);
          }
        );
      });

      _defineProperty$1(_assertThisInitialized(_this), 'onSelect', function(
        selectedKeys,
        e,
        selectedNodes
      ) {
        // console.log(selectedKeys,e.node)
        var onSelect = _this.props.onSelect;

        _this.setState({
          selectedKeys: selectedKeys
        });

        if (onSelect) {
          onSelect(e.node);
        }
      });

      _defineProperty$1(_assertThisInitialized(_this), 'onExpand', function(
        expandedKeys,
        e
      ) {
        // console.log(expandedKeys,'----',this.state.expandedKeys)
        _this.setState({
          expandedKeys: expandedKeys
        });
      });

      _this.state = {
        checkedKeys: props.value,
        expandedKeys: []
      };
      return _this;
    }

    _createClass(TreeView, [
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (
            JSON.stringify(nextProps.value) != JSON.stringify(this.props.value)
          ) {
            this.setState({
              checkedKeys: nextProps.value
            });
          }
        }
      },
      {
        key: 'loopTreeNode',
        value: function loopTreeNode(data) {
          var _this2 = this;

          var renderItem = this.props.renderItem;
          return data.map(function(item) {
            if (item.children && item.children.length) {
              return React__default.cloneElement(
                renderItem(item),
                {},
                _this2.loopTreeNode(item.children)
              );
            }

            return React__default.cloneElement(renderItem(item));
          });
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            treeData = _this$props.treeData,
            treeConfig = _this$props.treeConfig,
            isTreeInModal = _this$props.isTreeInModal,
            value = _this$props.value,
            onSelect = _this$props.onSelect,
            defaultKey = _this$props.defaultKey,
            scrollHeight = _this$props.scrollHeight;
          var _this$state = this.state,
            checkedKeys = _this$state.checkedKeys,
            expandedKeys = _this$state.expandedKeys; // console.log(treeData)
          //style={{maxHeight:scrollHeight,overflowY:'auto',border:'1px solid #d9d9d9'}}

          return React__default.createElement(
            'div',
            {
              className: 'ant-tree-view',
              style: scrollHeight
                ? {
                    maxHeight: scrollHeight,
                    overflowY: 'auto',
                    border: '1px solid #d9d9d9'
                  }
                : {}
            },
            React__default.createElement(
              _Tree,
              _extends$1(
                {
                  defaultSelectedKeys: checkedKeys,
                  checkedKeys: checkedKeys
                },
                treeConfig,
                {
                  expandedKeys: expandedKeys,
                  className: isTreeInModal ? 'tree-in-modal' : '',
                  onCheck: this.onCheck,
                  onSelect: this.onSelect,
                  onExpand: this.onExpand
                }
              ),
              this.loopTreeNode(treeData)
            )
          );
        }
      }
    ]);

    return TreeView;
  })(React.Component);
var TreeSelectPicker =
  /*#__PURE__*/
  (function(_Component2) {
    _inherits(TreeSelectPicker, _Component2);

    function TreeSelectPicker(props) {
      var _this3;

      _classCallCheck(this, TreeSelectPicker);

      _this3 = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(TreeSelectPicker).call(this, props)
      );
      _this3.state = {
        value: props.value
      };
      return _this3;
    } //

    _createClass(TreeSelectPicker, [
      {
        key: 'onChange',
        value: function onChange(value, label) {
          var onChange = this.props.onChange; // console.log(value,label)

          this.setState(
            {
              value: value
            },
            function() {
              onChange(value);
            }
          );
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            onChange = _this$props2.onChange,
            treeData = _this$props2.treeData,
            children = _this$props2.children,
            value = _this$props2.value,
            allowClear = _this$props2.allowClear,
            otherProps = _objectWithoutProperties(_this$props2, [
              'onChange',
              'treeData',
              'children',
              'value',
              'allowClear'
            ]); // console.log(children,this.state.value)

          if (allowClear == true) {
            return React__default.createElement(
              _TreeSelect,
              _extends$1({}, otherProps, {
                defaultValue: this.state.value,
                treeData: treeData,
                allowClear: allowClear,
                onChange: onChange,
                onSelect: this.onChange.bind(this)
              })
            );
          } else {
            return React__default.createElement(
              _TreeSelect,
              _extends$1({}, otherProps, {
                value: this.state.value,
                treeData: treeData,
                onSelect: this.onChange.bind(this)
              })
            );
          }
        }
      }
    ]);

    return TreeSelectPicker;
  })(React.Component);
var TrewViewPanel =
  /*#__PURE__*/
  (function(_Component3) {
    _inherits(TrewViewPanel, _Component3);

    function TrewViewPanel() {
      var _getPrototypeOf2;

      var _this4;

      _classCallCheck(this, TrewViewPanel);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this4 = _possibleConstructorReturn$1(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(TrewViewPanel)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty$1(_assertThisInitialized(_this4), 'state', {
        key: '',
        inside: false,
        label: '',
        value: ''
      });

      return _this4;
    }

    _createClass(TrewViewPanel, [
      {
        key: 'onSearch',
        value: function onSearch(value, event) {
          this.setState({
            key: value
          });
        }
      },
      {
        key: 'onSelect',
        value: function onSelect(node, value) {
          // console.log(node.props.title)
          this.setState({
            label: node.props.title,
            value: node.props.value
          });
        }
      },
      {
        key: 'filterTree',
        value: function filterTree(data, regexp) {
          var _this5 = this;

          // let { renderNode } = this.props
          return new Array().concat(data).filter(function(item) {
            if (item.children && item.children.length) {
              // console.log(this.filterTree(item.children,regexp))
              item.children = _this5.filterTree(item.children, regexp);
            }
            /* istanbul ignore next */

            return (
              regexp.test(item.title) ||
              (item.children && item.children.length > 0)
            );
          });
        }
      },
      {
        key: 'onMouseHandler',
        value: function onMouseHandler(status) {
          var _this$state2 = this.state,
            key = _this$state2.key,
            inside = _this$state2.inside,
            label = _this$state2.label,
            value = _this$state2.value;

          if (label != '') {
            this.setState({
              inside: !status
            });
          }
        }
      },
      {
        key: 'renderPanel',
        value: function renderPanel() {
          var _this$props3 = this.props,
            treeDataSource = _this$props3.treeDataSource,
            renderNode = _this$props3.renderNode; // console.log(treeDataSource)

          var _this$state3 = this.state,
            key = _this$state3.key,
            inside = _this$state3.inside,
            label = _this$state3.label,
            value = _this$state3.value;

          if (inside) {
            return React__default.createElement(
              'div',
              {
                className: ''
              },
              label
            );
          } else {
            return React__default.createElement(
              'div',
              {
                className: ''
              },
              React__default.createElement(Search, {
                style: {
                  marginBottom: 8
                },
                placeholder: 'Search',
                onSearch: this.onSearch.bind(this)
              }),
              React__default.createElement(TreeView, {
                treeDataSource: this.filterTree(
                  treeDataSource,
                  new RegExp(key)
                ),
                value: value,
                renderNode: renderNode,
                onSelect: this.onSelect.bind(this)
              })
            );
          }
        }
      },
      {
        key: 'render',
        value: function render() {
          // console.log(renderNode)
          var _this$props4 = this.props,
            treeDataSource = _this$props4.treeDataSource,
            renderNode = _this$props4.renderNode;
          var _this$state4 = this.state,
            key = _this$state4.key,
            inside = _this$state4.inside,
            label = _this$state4.label;
          return React__default.createElement(
            'div',
            {
              className: ''
            },
            React__default.createElement(
              _Button,
              {
                onClick: this.onMouseHandler.bind(this, inside)
              },
              !inside ? '收起' : '展开'
            ),
            this.renderPanel()
          );
        }
      }
    ]);

    return TrewViewPanel;
  })(React.Component);

var index = /*#__PURE__*/ Object.freeze({
  default: TreeView,
  TreeSelectPicker: TreeSelectPicker,
  TrewViewPanel: TrewViewPanel
});

var Option = _Select.Option;

var FormItem =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(FormItem, _Component);

    function FormItem(props) {
      var _this;

      _classCallCheck(this, FormItem);

      _this = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(FormItem).call(this, props)
      );
      var children = props.children;

      if (children.props.options instanceof Array) {
        _this.state = {
          childData: children.props.options
        };
      } else {
        _this.state = {
          childData: []
        };
      }

      return _this;
    }

    _createClass(FormItem, [
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var children = nextProps.children;
          var field = children;
          var formRef = this.context.formRef; //  console.log(JSON.stringify(field.props.options),JSON.stringify(this.props.children.props.options))

          if (
            JSON.stringify(field.props.options) !==
            JSON.stringify(this.props.children.props.options)
          ) {
            this.setState({
              childData: field.props.options
            });
          }

          if (
            field.props.fetch &&
            typeof field.props.fetch === 'string' &&
            field.props.fetch !== this.props.children.props.fetch
          ) {
            this.fetchData(
              field.props.fetch,
              field.props.params,
              field.props.fetchCallback
            );
          }

          if (field.props.params) {
            if (
              typeof field.props.params === 'function' ||
              (typeof field.props.params === 'string' &&
                JSON.stringify(field.props.params) !==
                  JSON.stringify(this.props.children.props.params))
            ) {
              this.fetchData(
                field.props.fetch,
                field.props.params,
                field.props.fetchCallback
              ); // console.log("params")
            }
          }
        }
      },
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var children = this.props.children;
          var field = children;

          if (
            typeof field.props.fetch === 'string' &&
            field.props.fetch.length > -1
          ) {
            if (field.props.params) {
              //规避 params 无法判断差异引起首次多发请求问题，
              // 当fetch 与 params 属性同时配置，首次请求交由componentWillReceiveProps里方法进行发送
              this.fetchData(
                field.props.fetch,
                field.props.params,
                field.props.fetchCallback
              );
            } else {
              this.fetchData(field.props.fetch, {}, field.props.fetchCallback);
            }
          }
        }
        /**
         * [fetchData 获取远程接口数据]
         * @param  {[type]} fetchUrl [description]
         * @return {[type]}          [description]
         */
      },
      {
        key: 'fetchData',
        value: function fetchData(fetchUrl, params, callback) {
          var _this2 = this;

          // let body={}]
          var formRef = this.context.formRef;
          var url;

          if (params) {
            if (typeof params === 'function') {
              url = [
                fetchUrl,
                qs.stringify(params.apply(this, [formRef]))
              ].join('?');
            } else {
              url = [fetchUrl, qs.stringify(params)].join('?');
            }
          } else {
            url = fetchUrl;
          }

          fetch(url, {
            method: 'GET'
          })
            .then(function(json) {
              return json.json();
            })
            .then(function(result) {
              if (result.code == 0) {
                _this2.setChildData(
                  callback ? callback(result, formRef) : result.data.items
                ); // if (callback) {
                //   this.setState({
                //     childData: callback(result, formRef)
                //   });
                // } else {
                //   if (!(result.data.items instanceof Array)) {
                //     throw `${fetchUrl}返回数据格式有误`;
                //   }
                //   this.setState({
                //     childData: result.data.items || []
                //   });
                // }
              }
            });
        }
      },
      {
        key: 'setChildData',
        value: function setChildData(dataList) {
          if (!(dataList instanceof Array)) {
            throw 'childData\u6570\u636E\u683C\u5F0F\u6709\u8BEF';
          }

          this.setState({
            childData: dataList || []
          });
        }
      },
      {
        key: 'renderField',
        value: function renderField() {
          var _this$props = this.props,
            children = _this$props.children,
            containerTo = _this$props.containerTo;
          var childData = this.state.childData;
          var field = children;

          var _field$props = field.props,
            defaultValue = _field$props.defaultValue,
            renderable = _field$props.renderable,
            disabled = _field$props.disabled,
            otherProps = _objectWithoutProperties(_field$props, [
              'defaultValue',
              'renderable',
              'disabled'
            ]);

          var _this$context = this.context,
            formRef = _this$context.formRef,
            formLayout = _this$context.formLayout;
          var containerToProp = {};
          var treeDataProp = {};
          var disabledProp = {}; // console.log(otherProps)

          if (disabled && typeof disabled === 'function') {
            disabledProp = {
              disabled: disabled.apply(this, [formRef])
            };
          } else if (disabled && typeof disabled === 'boolean') {
            disabledProp = {
              disabled: disabled
            };
          }

          if (
            containerTo &&
            field.type.name === 'Select' &&
            !field.props.changeCalendarContainer
          ) {
            containerToProp = {
              getPopupContainer: function getPopupContainer(triggerNode) {
                return triggerNode.parentNode;
              }
            };
          }

          if (
            field.type.name == 'TreeSelectPicker' ||
            field.type.name == 'TreeView'
          ) {
            treeDataProp = {
              treeData: this.loopTreeData(childData)
            };
          } // console.log(containerToProp,field.type.name)

          if (field.type.name === 'PickerWrapper') {
            return React__default.createElement(
              WrapperDatePicker,
              Object.assign({}, otherProps, disabledProp),
              field
            );
          } else {
            if (childData.length === 0) {
              return React__default.createElement(
                field.type,
                Object.assign(
                  {},
                  otherProps,
                  containerToProp,
                  treeDataProp,
                  disabledProp
                )
              );
            } else if (field.props.renderItem) {
              // console.log(field);
              return React__default.createElement(
                field.type,
                Object.assign(
                  otherProps,
                  containerToProp,
                  treeDataProp,
                  disabledProp
                ),
                childData.map(function(d, idx) {
                  return (
                    field.props.renderItem && field.props.renderItem(d, idx)
                  );
                })
              );
            } else {
              return React__default.createElement(
                field.type,
                Object.assign(
                  {},
                  otherProps,
                  containerToProp,
                  treeDataProp,
                  disabledProp
                )
              );
            }
          }
        }
      },
      {
        key: 'loopTreeData',
        value: function loopTreeData(data) {
          var _this3 = this;

          return data.map(function(item) {
            if (item.children && item.children.length) {
              return Object.assign(
                item,
                {
                  title: item.text,
                  value: item.id,
                  key: item.id
                },
                {
                  children: _this3.loopTreeData(item.children)
                }
              );
            } else {
              return Object.assign(item, {
                title: item.text,
                value: item.id,
                key: item.id
              });
            }
          });
        }
      },
      {
        key: 'render',
        value: function render() {
          var element = this.props.children;
          var _element$props = element.props,
            name = _element$props.name,
            label = _element$props.label,
            format = _element$props.format;

          var _element$props2 = element.props,
            defaultValue = _element$props2.defaultValue,
            allowClear = _element$props2.allowClear,
            hidden = _element$props2.hidden,
            disabled = _element$props2.disabled,
            renderable = _element$props2.renderable,
            otherProps = _objectWithoutProperties(_element$props2, [
              'defaultValue',
              'allowClear',
              'hidden',
              'disabled',
              'renderable'
            ]);

          var _this$context2 = this.context,
            formRef = _this$context2.formRef,
            formLayout = _this$context2.formLayout,
            colNumber = _this$context2.colNumber;
          var getFieldDecorator = formRef.getFieldDecorator;
          var styles = {};
          var renderProps = true;

          if (
            element.type.name === 'Input' &&
            element.props.type === 'hidden'
          ) {
            styles = {
              style: {
                marginBottom: 0
              }
            };
          }

          if (element.props.hidden == true) {
            styles = {
              style: {
                display: 'none'
              }
            };
          } //
          // let columns = element.props.colNumber || colNumber;
          // let boxCols = 24 / (element.props.colNumber || colNumber);
          // let labelNum = Math.round(8 / columns),
          //   spancols = 8 * columns;
          // formLayout = Object.assign({}, formLayout, {
          //   labelCol: {
          //     span: labelNum
          //   },
          //   wrapperCol: {
          //     span: 24 - labelNum
          //   }
          // });
          // else {
          //   /*colNumber 和offsetNumber 控制表单多列位置*/
          //   // console.log(colNumber, otherProps.colNumber);
          //   styles = {
          //     style: {
          //       width:
          //         (
          //           1 /
          //           (otherProps.colNumber && typeof otherProps.colNumber === "number"
          //             ? parseInt(otherProps.colNumber)
          //             : colNumber)
          //         ).toFixed(4) *
          //           100 +
          //         "%",
          //       display: "inline-block",
          //       marginLeft:
          //         otherProps.offsetNumber &&
          //         typeof otherProps.offsetNumber === "number"
          //           ? (1 / parseInt(otherProps.offsetNumber)).toFixed(4) * 100 + "%"
          //           : ""
          //     }
          //   };
          // }

          if (
            (typeof renderable === 'boolean' && renderable === false) ||
            (typeof renderable === 'function' &&
              renderable.apply(this, [formRef]) === false)
          ) {
            renderProps = false;
          }

          return renderProps
            ? React__default.createElement(
                _Form.Item,
                _extends$1(
                  {
                    label: label
                  },
                  Object.assign({}, formLayout, this.props),
                  styles
                ),
                getFieldDecorator(
                  name,
                  _objectSpread2({}, otherProps, {
                    initialValue: defaultValue,
                    hidden: element.props.hidden || false
                  })
                )(this.renderField())
              )
            : null;
        }
      }
    ]);

    return FormItem;
  })(React.Component);

_defineProperty$1(FormItem, 'defaultProps', {
  containerTo: true
});

_defineProperty$1(FormItem, 'contextTypes', {
  formRef: PropTypes.object,
  formLayout: PropTypes.object,
  colNumber: PropTypes.number
});

var Permission =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Permission, _React$Component);

    function Permission() {
      _classCallCheck(this, Permission);

      return _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(Permission).apply(this, arguments)
      );
    }

    _createClass(Permission, [
      {
        key: 'render',
        value: function render() {
          var expression = this.props.expression;
          var childrenWithProps = expression
            ? React__default.Children.map(this.props.children, function(child) {
                return React__default.cloneElement(child, {});
              })
            : null;
          return childrenWithProps;
        }
      }
    ]);

    return Permission;
  })(React__default.Component);

Permission.propTypes = {
  expression: PropTypes.any
};
Permission.defaultProps = {
  expression: true
};

var Locale = {
  searchText: '搜索',
  resetText: '重置',
  upText: '收起',
  downText: '展开'
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css =
  '.advanced-search-panel {\n  flex-shrink: 0;\n  padding-right: 170px;\n  position: relative;\n}\n.advanced-search-panel .ant-col-8 .ant-form-item {\n  margin-bottom: 0;\n}\n.advanced-search-panel .ant-form-item-label {\n  line-height: 32px;\n}\n.advanced-search-panel .ant-input-group .ant-form-item .ant-form-item-control-wrapper .ant-select .ant-select-selection {\n  margin-right: -1px;\n  height: 32px;\n  border-radius: 4px 0 0 4px;\n}\n.advanced-search-panel .advanced-search-toolbar {\n  position: absolute;\n  right: 0;\n  top: 4px;\n}\n.advanced-search-panel .advanced-search-toolbar .ant-btn {\n  margin: 0 5px;\n}\n.advanced-search-panel .advanced-search-toolbar .ant-btn-ghost {\n  border-width: 0;\n  padding-left: 0;\n  padding-right: 0;\n}\n.advanced-search-panel .advanced-search-toolbar .anticon-down {\n  cursor: pointer;\n}\n.advanced-search-panel .ant-btn-circle {\n  border-width: 0;\n}\n.advanced-search-panel .ant-select-selection--multiple .ant-select-selection__rendered {\n  overflow: hidden;\n  height: 30px;\n}\n.advanced-search-panel .ant-select-selection--multiple .ant-select-selection__rendered ul {\n  position: absolute;\n  left: 0;\n  right: 0;\n  white-space: nowrap;\n}\n.advanced-search-panel .ant-select-selection--multiple .ant-select-selection__rendered ul li {\n  float: none;\n  margin-top: 8px;\n  display: inline-block;\n}\n';
styleInject(css);

var AdvancedSearchForm =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(AdvancedSearchForm, _React$Component);

    function AdvancedSearchForm(props) {
      var _this;

      _classCallCheck(this, AdvancedSearchForm);

      _this = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(AdvancedSearchForm).call(this, props)
      );

      _defineProperty$1(_assertThisInitialized(_this), 'state', {
        expand: false,
        defKeyType: null,
        placeHolder: '',
        items: [],
        show: false,
        displayItem: []
      });

      _defineProperty$1(_assertThisInitialized(_this), 'handleSearch', function(
        e,
        values
      ) {
        e.preventDefault();
        var _this$props = _this.props,
          filterSubmitHandler = _this$props.filterSubmitHandler,
          defaultParams = _this$props.defaultParams;

        if (values) {
          filterSubmitHandler.call(
            _assertThisInitialized(_this),
            Object.assign({}, values, defaultParams)
          );
        } else {
          _this.form.validateFieldsAndScroll(function(err, values) {
            // console.log(this.form.getFieldsValue())
            // console.log(values)
            filterSubmitHandler.call(
              _assertThisInitialized(_this),
              Object.assign({}, values, defaultParams)
            );
          });
        }
      });

      _defineProperty$1(
        _assertThisInitialized(_this),
        'handleReset',
        function() {
          var form = _this.form;
          var values = form.getFieldsValue();
          var emptyValue = {}; // this.form.resetFields();

          for (var v in values) {
            // console.log(v)
            if (values.hasOwnProperty(v)) {
              emptyValue[v] = undefined;
            }
          } // console.log(emptyValue)

          form.setFieldsValue(emptyValue);
        }
      );

      _this.state.loading = props.loading;
      return _this;
    }

    _createClass(AdvancedSearchForm, [
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps.loading !== this.props.loading) {
            this.setState({
              loading: nextProps.loading
            });
          }
        }
      },
      {
        key: 'toggleExpand',
        value: function toggleExpand() {
          var expand = this.state.expand;
          this.setState({
            expand: !expand
          });
        } // To generate mock Form.Item
      },
      {
        key: 'getFields',
        value: function getFields() {
          var _this2 = this;

          var _this$props2 = this.props,
            children = _this$props2.children,
            layout = _this$props2.layout,
            classNames$$1 = _this$props2.classNames;
          var renderChildren;
          var formItemLayout =
            layout && layout !== 'inline'
              ? {
                  labelCol: {
                    span: 8
                  },
                  wrapperCol: {
                    span: 16
                  }
                }
              : {};

          if (React__default.Children.count(children) === 0) {
            return null;
          }

          if (this.state.expand == false) {
            renderChildren = [].concat(children).filter(function(ch, idx) {
              return idx < 3;
            });
          } else if (this.props.showConfig) {
            //高级配置后，前三固定 后四配置
            renderChildren = React__default.Children.toArray(children).filter(
              function(ch, idx) {
                //return this.state.displayItem.indexOf(ch.props.name)>=0 || idx<3
                return (
                  _this2.state.displayItem.indexOf(ch.props.name) >= 0 ||
                  idx < _this2.props.showExpand
                );
              }
            );
          } else {
            renderChildren = React__default.Children.toArray(children).filter(
              function(ch, idx) {
                return idx < _this2.props.showExpand + 4;
              }
            );
          }

          return renderChildren.map(function(it, i) {
            var columns = it.props.columns || 1;
            var labelNum = Math.round(8 / columns),
              spancols = 8 * columns;
            formItemLayout = Object.assign({}, formItemLayout, {
              labelCol: {
                span: labelNum
              },
              wrapperCol: {
                span: 24 - labelNum
              }
            }); // console.log(it.type === Input)

            if (it.type.name === 'Input') {
              return React__default.createElement(
                _Col,
                {
                  span: spancols,
                  key: i
                },
                React__default.createElement(
                  FormItem,
                  _extends$1(
                    {
                      colon: true
                    },
                    formItemLayout,
                    {
                      containerTo: false,
                      className: classNames$$1
                    }
                  ),
                  React__default.cloneElement(it)
                )
              );
            } else {
              return React__default.createElement(
                _Col,
                {
                  span: spancols,
                  key: i
                },
                React__default.createElement(
                  FormItem,
                  _extends$1(
                    {
                      colon: true
                    },
                    formItemLayout,
                    {
                      containerTo: it.props.containerTo || true,
                      className: classNames$$1
                    }
                  ),
                  React__default.cloneElement(it, {
                    allowClear: it.props.allowClear == false ? false : true
                  })
                )
              );
            }
          }); //return children;
        }
      },
      {
        key: 'onTypeChange',
        value: function onTypeChange(value, option) {
          this.setState({
            placeHolder: option.props.placeholder
          });
        }
      },
      {
        key: 'handleAdvancedMenu',
        value: function handleAdvancedMenu(obj) {
          if (obj.key === 'advanced') {
            alert('call advanced');
          } else if (obj.key === 'clear') {
            this.handleReset();
          } else if (obj.key === 'preview') {
            alert('call restore');
          }
        }
      },
      {
        key: 'handleClose',
        value: function handleClose() {
          this.setState({
            show: false
          });
        }
      },
      {
        key: 'saveFormRef',
        value: function saveFormRef(insta) {
          if (insta) {
            this.form = insta.props.form;
          }
        }
      },
      {
        key: 'renderKeyword',
        value: function renderKeyword() {
          return React__default.createElement(
            _Row,
            {
              gutter: 20
            },
            this.getFields()
          );
        }
      },
      {
        key: 'renderSearchToolbar',
        value: function renderSearchToolbar(locale) {
          var _this$state = this.state,
            loading = _this$state.loading,
            expand = _this$state.expand;
          var children = this.props.children;
          var contextLocale = Object.assign({}, locale, this.props.locale);
          return React__default.createElement(
            'div',
            {
              className: 'advanced-search-toolbar'
            },
            React__default.createElement(
              _Button,
              {
                htmlType: 'submit',
                disabled: loading,
                onClick: this.handleSearch.bind(this),
                type: 'primary'
              },
              contextLocale.searchText
            ),
            children.length > 3
              ? React__default.createElement(
                  _Button,
                  {
                    type: 'ghost',
                    onClick: this.toggleExpand.bind(this)
                  },
                  expand ? contextLocale.upText : contextLocale.downText,
                  React__default.createElement(_Icon, {
                    type: expand ? 'up' : 'down'
                  })
                )
              : ''
          );
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props3 = this.props,
            showConfig = _this$props3.showConfig,
            children = _this$props3.children,
            className = _this$props3.className,
            autoSubmitForm = _this$props3.autoSubmitForm,
            layout = _this$props3.layout,
            locale = _this$props3.locale;
          return React__default.createElement(
            'div',
            {
              className: classNames('advanced-search-panel', className)
            },
            React__default.createElement(
              SubmitForm,
              {
                layout: layout,
                autoSubmitForm: autoSubmitForm,
                className: 'advanced-search-form',
                onSubmit: this.handleSearch.bind(this),
                wrappedComponentRef: this.saveFormRef.bind(this)
              },
              this.renderKeyword(),
              React__default.createElement(
                LocaleReceiver,
                {
                  componentName: 'AdvancedSearch',
                  defaultLocale: Locale
                },
                this.renderSearchToolbar.bind(this)
              )
            )
          );
        }
      }
    ]);

    return AdvancedSearchForm;
  })(React__default.Component);
AdvancedSearchForm.propTypes = {
  /**
  搜索按钮事件监听方法
  **/
  filterSubmitHandler: PropTypes.func,

  /**
  是否显示配置项,配置搜索条件显示
  **/
  showConfig: PropTypes.bool,
  loading: PropTypes.bool,
  footer: PropTypes.element,
  locale: PropTypes.object,
  defaultParams: PropTypes.object,

  /**
  是否收展，超过指定个数后隐藏
  **/
  showExpand: PropTypes.number
};
AdvancedSearchForm.defaultProps = {
  autoSubmitForm: false,
  showConfig: false,
  loading: false,
  defaultParams: {},
  filterSubmitHandler: function filterSubmitHandler() {},
  showExpand: 3,
  layout: 'horizontal'
}; //export default AdvancedSearchForm = Form.create()(AdvancedSearchForm)

var css$1 =
  '.button-groups .ant-btn-group > span {\n  vertical-align: top;\n}\n';
styleInject(css$1);

var Locale$1 = {
  okText: '确认',
  cancelText: '取消',
  title: '确认框'
};

/*
 *children 1个 多个数据格式处理
 *
 */

var Confirm =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Confirm, _Component);

    function Confirm() {
      _classCallCheck(this, Confirm);

      return _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(Confirm).apply(this, arguments)
      );
    }

    _createClass(Confirm, [
      {
        key: 'onConfirmClick',
        value: function onConfirmClick(locale) {
          var _this$props = this.props,
            onConfirm = _this$props.onConfirm,
            title = _this$props.title,
            content = _this$props.content;
          var contextLocale = Object.assign({}, locale, this.props.locale);
          return _Modal.confirm({
            title: title || contextLocale.title,
            content: content,
            okText: contextLocale.okText,
            onOk: onConfirm,
            cancelText: contextLocale.cancelText
          });
        }
      },
      {
        key: 'renderConfirm',
        value: function renderConfirm(locale) {
          var children = this.props.children;
          return React__default.cloneElement(children, {
            onClick: this.onConfirmClick.bind(this, locale)
          });
        }
      },
      {
        key: 'render',
        value: function render() {
          return React__default.createElement(
            LocaleReceiver,
            {
              componentName: 'ButtonGroups',
              defaultLocale: Locale$1
            },
            this.renderConfirm.bind(this) // React.cloneElement(children,{onClick:this.onConfirmClick.bind(_this)})
          ); // return  React.cloneElement(children,{onClick:this.onConfirmClick.bind(this)})
        }
      }
    ]);

    return Confirm;
  })(React.Component);

var ButtonGroups =
  /*#__PURE__*/
  (function(_Component2) {
    _inherits(ButtonGroups, _Component2);

    function ButtonGroups() {
      _classCallCheck(this, ButtonGroups);

      return _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(ButtonGroups).apply(this, arguments)
      );
    }

    _createClass(ButtonGroups, [
      {
        key: 'renderButtonOnly',
        value: function renderButtonOnly() {
          var _this = this;

          var children = this.props.children;
          var childrenArray = React__default.Children.toArray(children); // let {appReducer} = this.context
          // console.log(this.context.appReducer)

          return childrenArray
            .filter(function(it) {
              if (it.props.permission === undefined) {
                return true;
              } else {
                return it.props.permission && it.props.permission === true;
              }
            })
            .map(function(it, idx) {
              return _this.renderReactElement(it, idx);
            });
        }
      },
      {
        key: 'renderReactElement',
        value: function renderReactElement(it, idx) {
          var _this$props2 = this.props,
            handleClick = _this$props2.handleClick,
            viewMode = _this$props2.viewMode,
            locale = _this$props2.locale;

          var _it$props = it.props,
            tip = _it$props.tip,
            confirm = _it$props.confirm,
            confirmTitle = _it$props.confirmTitle,
            placement = _it$props.placement,
            icon = _it$props.icon,
            children = _it$props.children,
            block = _it$props.block,
            actionkey = _it$props.actionkey,
            disabled = _it$props.disabled,
            permission = _it$props.permission,
            otherProps = _objectWithoutProperties(_it$props, [
              'tip',
              'confirm',
              'confirmTitle',
              'placement',
              'icon',
              'children',
              'block',
              'actionkey',
              'disabled',
              'permission'
            ]);

          var iconProps = {
            actionkey: actionkey,
            disabled: disabled
          }; //tip提示判断，判断没有tip属性时缺省显示text内容

          tip = !!tip ? tip : children; //非text文字模式下，显示icon图标，无icon属性设置时，只显示文字

          if (viewMode === 'icon' || viewMode === 'both') {
            if (!!icon) {
              iconProps = Object.assign(iconProps, {
                icon: icon
              });
            }

            if (viewMode === 'icon') {
              children = !!icon ? '' : children;
            }
          }

          if (confirm && !disabled) {
            return React__default.createElement(
              Confirm,
              Object.assign(
                {},
                {
                  locale: locale,
                  key: idx,
                  title: confirmTitle,
                  content: confirm,
                  placement: placement,
                  onConfirm: function onConfirm() {
                    handleClick(actionkey);
                  }
                }
              ),
              React__default.createElement(
                _Tooltip,
                Object.assign(
                  {},
                  {
                    key: idx,
                    title: tip,
                    icon: icon
                  }
                ),
                React__default.createElement(
                  _Button,
                  Object.assign(iconProps, otherProps),
                  children
                )
              )
            );
          } else {
            return React__default.createElement(
              _Tooltip,
              Object.assign(
                {},
                {
                  key: idx,
                  title: tip,
                  icon: icon
                }
              ),
              React__default.createElement(
                _Button,
                Object.assign(
                  iconProps,
                  otherProps,
                  !disabled
                    ? {
                        onClick: function onClick() {
                          handleClick(actionkey);
                        }
                      }
                    : {}
                ),
                children
              )
            );
          }
        } // return
      },
      {
        key: 'renderMenuReactElement',
        value: function renderMenuReactElement(it, idx) {
          var _it$props2 = it.props,
            tip = _it$props2.tip,
            children = _it$props2.children;
          return React__default.createElement(
            _Tooltip,
            Object.assign(
              {},
              {
                key: idx,
                title: tip
              }
            ),
            React__default.cloneElement(
              it,
              Object.assign({}, it.props),
              children
            )
          );
        }
      },
      {
        key: 'renderMixButtonMenu',
        value: function renderMixButtonMenu() {
          var _this2 = this;

          var _this$props3 = this.props,
            children = _this$props3.children,
            showSize = _this$props3.showSize;
          var childrenArray = React__default.Children.toArray(children);
          var endArray = childrenArray.splice(showSize);
          return React__default.createElement(
            'div',
            null,
            childrenArray // .filter((it)=>{
              //   console.log(it.props.permission)
              //   return it.props.permission==true
              // })
              .map(function(it, idx) {
                return _this2.renderReactElement(it, idx);
              }),
            React__default.createElement(
              _Dropdown,
              {
                overlay: this.renderMenuItem(endArray)
              },
              React__default.createElement(
                _Button,
                null,
                React__default.createElement(_Icon, {
                  type: 'ellipsis'
                })
              )
            )
          );
        }
      },
      {
        key: 'renderMenuItem',
        value: function renderMenuItem(itemList) {
          var _this3 = this;

          var handleClick = this.props.handleClick;
          return React__default.createElement(
            _Menu,
            {
              onClick: handleClick
            },
            itemList.map(function(it, idx) {
              return React__default.createElement(
                _Menu.Item,
                {
                  key: idx
                },
                _this3.renderMenuReactElement(it, idx)
              );
            })
          );
        }
      },
      {
        key: 'renderChildren',
        value: function renderChildren() {
          var _this$props4 = this.props,
            children = _this$props4.children,
            showSize = _this$props4.showSize,
            mode = _this$props4.mode;
          var childrenArray = React__default.Children.toArray(children);
          return React__default.createElement(
            _Button.Group,
            null,
            mode === 'ButtonGroup'
              ? this.renderButtonOnly()
              : this.renderMixButtonMenu()
          );
        }
      },
      {
        key: 'render',
        value: function render() {
          return React__default.createElement(
            'div',
            {
              className: 'button-groups'
            },
            this.renderChildren()
          );
        }
      }
    ]);

    return ButtonGroups;
  })(React.Component);
/*
 * showSize:超过收起的数目
 * handleClick : 点击事件（需子元素以actionKey区分）
 * viewMode : 按钮的展示模式，仅文字，仅图片，文字+图片
 * 子元素如需confirm确认 子元素自身添加confirm 属性 value为提醒文字
 * tip 为元素上移显示文字
 */

_defineProperty$1(ButtonGroups, 'contextTypes', {
  // appReducer:PropTypes.object
});
ButtonGroups.propTypes = {
  /**
   超过收起的数目
  **/
  showSize: PropTypes.number,

  /**
   点击事件（需子元素以actionKey区分）
  **/
  handleClick: PropTypes.func,

  /**
   按钮的展示模式，仅文字，仅图片，文字+图片
  **/
  viewMode: PropTypes.oneOf(['text', 'icon', 'both']),

  /**
   显示模式 ButtonGroup 和 ButtonMenu
  **/
  mode: PropTypes.oneOf(['ButtonGroup', 'ButtonMenu']),
  locale: PropTypes.object
};
ButtonGroups.defaultProps = {
  showSize: 5,
  handleClick: function handleClick(actionkey) {},
  viewMode: 'text',
  mode: 'ButtonGroup'
};

var TableMenu =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(TableMenu, _Component);

    function TableMenu() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, TableMenu);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn$1(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(TableMenu)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty$1(_assertThisInitialized(_this), 'state', {
        visible: true,
        columns: []
      });

      _defineProperty$1(_assertThisInitialized(_this), 'saveFormRef', function(
        form
      ) {
        return (_this.form = form);
      });

      return _this;
    }

    _createClass(TableMenu, [
      {
        key: 'componentWillMount',
        //请求远程数据接口
        value: function componentWillMount() {
          var actions = this.props.actions;
        } // //处理表格提交后动作
      },
      {
        key: 'handleOk',
        value: function handleOk() {
          var columns = this.state.columns;
          var _this$props = this.props,
            onSelectChange = _this$props.onSelectChange,
            onClosePopup = _this$props.onClosePopup; //  console.log(columns)

          onSelectChange(columns); //  this.form.onSubmit()

          onClosePopup();
        }
      },
      {
        key: 'handleSubmit',
        value: function handleSubmit(values) {
          var onSelectChange = this.props.onSelectChange;
          this.setState({
            columns: values
          });
        }
      },
      {
        key: 'handleChange',
        value: function handleChange(values) {
          var onSelectChange = this.props.onSelectChange;
          this.setState({
            columns: values
          });
        }
      },
      {
        key: 'render',
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
          return React__default.createElement(
            'div',
            {
              className: '',
              style: {
                width: 400,
                height: 200,
                padding: '10px',
                border: '1px solid #cfdae5',
                background: '#fff'
              }
            },
            React__default.createElement(
              _Form,
              {
                onSubmit: handleSubmit,
                ref: saveFormRef,
                layout: 'inline'
              },
              React__default.createElement(
                _Checkbox.Group,
                {
                  name: 'isShowArr',
                  style: {
                    width: '100%'
                  },
                  defaultValue: defaultValue,
                  onChange: this.handleChange.bind(this)
                },
                React__default.createElement(
                  _Row,
                  null,
                  columns
                    .filter(function(it) {
                      return it.title != '操作';
                    })
                    .map(function(it, idx) {
                      return React__default.createElement(
                        _Col,
                        {
                          span: 8,
                          key: idx
                        },
                        React__default.createElement(
                          _Checkbox,
                          {
                            value: it.key,
                            disabled: it.isRead == 1 ? true : false
                          },
                          it.title
                        )
                      );
                    })
                )
              ),
              React__default.createElement(
                'div',
                {
                  style: {
                    textAlign: 'right'
                  }
                },
                React__default.createElement(
                  _Button,
                  {
                    size: 'small',
                    onClick: onClosePopup
                  },
                  '\u53D6\u6D88'
                ),
                React__default.createElement(
                  _Button,
                  {
                    size: 'small',
                    type: 'primary',
                    onClick: this.handleOk.bind(this),
                    style: {
                      marginLeft: '10px'
                    }
                  },
                  '\u786E\u5B9A'
                )
              )
            )
          );
        }
      }
    ]);

    return TableMenu;
  })(React.Component);

var DataTable =
  /*#__PURE__*/
  (function(_Component2) {
    _inherits(DataTable, _Component2);

    _createClass(DataTable, [
      {
        key: 'showPopover',
        value: function showPopover() {
          this.setState({
            visible: true
          });
        }
      }
    ]);

    function DataTable(props) {
      var _this2;

      _classCallCheck(this, DataTable);

      _this2 = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(DataTable).call(this, props)
      );

      _defineProperty$1(_assertThisInitialized(_this2), 'state', {
        visible: false,
        columns: [],
        displayColumns: []
      });

      _this2.state.columns = props.columns;
      return _this2;
    }

    _createClass(DataTable, [
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var columns = nextProps.columns;
          this.setState({
            columns: columns
          });
        }
      },
      {
        key: 'onSelectChange',
        value: function onSelectChange(checkedValues) {
          //console.log(checkedValues)
          this.setState({
            columns: this.state.columns.map(function(col) {
              if (checkedValues.indexOf(col.key) >= 0) {
                col.visible = true;
              } else {
                col.visible = false;
              }

              return col;
            })
          });
        }
      },
      {
        key: 'onClosePopup',
        value: function onClosePopup() {
          this.setState({
            visible: false
          });
        }
      },
      {
        key: 'onPopupVisibleChange',
        value: function onPopupVisibleChange(_boolean) {
          // console.log('show',arguments)
          this.setState({
            visible: _boolean
          });
        }
      },
      {
        key: 'renderTableMenu',
        value: function renderTableMenu() {
          var columns = this.state.columns;
          var defaultValue = columns
            .filter(function(col) {
              return (
                col.type != 'config' &&
                (col.visible === true || col.visible === undefined)
              );
            })
            .map(function(col) {
              return col.key;
            });
          return React__default.createElement(TableMenu, {
            defaultValue: defaultValue,
            columns: columns,
            onSelectChange: this.onSelectChange.bind(this),
            onClosePopup: this.onClosePopup.bind(this)
          });
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props3 = this.props,
            pagination = _this$props3.pagination,
            showConfig = _this$props3.showConfig,
            page = _this$props3.page,
            defaultSort = _this$props3.defaultSort,
            otherProps = _objectWithoutProperties(_this$props3, [
              'pagination',
              'showConfig',
              'page',
              'defaultSort'
            ]);

          var _this$state = this.state,
            visible = _this$state.visible,
            columns = _this$state.columns;
          var newColumns; // console.log(this.props,"datatablerender")

          if (showConfig) {
            // if(true){
            newColumns = columns.filter(function(col) {
              return col.visible == true || col.visible == undefined; // return true
            }); // .concat([{
            //     title:" ",
            //     filterDropdown:(
            //       this.renderTableMenu()
            //     ),
            //     filterDropdownVisible:visible,
            //     onFilterDropdownVisibleChange:this.onPopupVisibleChange.bind(this),
            //     width:30,
            //     fixed:'right',
            //     type:'config'
            // }])
          } else {
            newColumns = columns;
          }
          /*增加是否有排序判断 增加列配置*/
          // console.log("defaultSort", defaultSort);

          if (defaultSort) {
            newColumns = newColumns.map(function(it) {
              defaultSort.columnKey == it.dataIndex
                ? (it = Object.assign(it, {
                    defaultSortOrder: defaultSort.order
                  }))
                : null;
              return it;
            });
          } // console.log("newColumns", newColumns);

          return React__default.createElement(
            _Table,
            _extends$1(
              {
                key: defaultSort && defaultSort.columnKey
              },
              otherProps,
              {
                columns: newColumns,
                pagination: !pagination
                  ? false
                  : Object.assign({}, pagination, page)
              }
            )
          );
        }
      }
    ]);

    return DataTable;
  })(React.Component);

_defineProperty$1(DataTable, 'defaultProps', {
  page: {},
  prefixCls: 'ant-table',
  pagination: {
    showTotal: function showTotal(total) {
      return '\u5171 '.concat(total, ' \u6761');
    },
    // showQuickJumper:true,
    size: 'middle',
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100']
  },
  //  scroll:{ y: 500 },
  style: {
    width: '100%'
  },
  showConfig: false,
  columns: []
});

DataTable.propTypes = {
  /**
    表格列的配置描述 同antd table columns
  **/
  columns: PropTypes.array.isRequired,

  /**
  数据数组，同antd table dataSource
  **/
  dataSource: PropTypes.array.isRequired,

  /**
  默认排序参数  {columnKey,order} columnkey代表需要排序的columns的dataIndex order 选项为‘descend ascend’之一
  e.g. {columnKey:'name',order:'descend'}
  **/
  defaultSort: PropTypes.object,
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

var Locale$2 = {
  okText: '确认',
  cancelText: '取消'
};

var css$2 =
  '.ant-panel-wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background-color: #fff;\n}\n.ant-panel-wrapper > .ant-spin-nested-loading {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.ant-panel-wrapper > .ant-spin-nested-loading > .ant-spin-container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.ant-panel-wrapper .ant-panel {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.ant-panel-wrapper .ant-panel .ant-panel-head {\n  display: flex;\n  padding: 16px 24px;\n  color: rgba(0, 0, 0, 0.65);\n  background: #fff;\n  border-bottom: 1px solid #e8e8e8;\n  border-radius: 4px 4px 0 0;\n}\n.ant-panel-wrapper .ant-panel .ant-panel-head .ant-panel-head-title {\n  margin: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n}\n.ant-panel-wrapper .ant-panel .ant-panel-body {\n  display: flex;\n  flex: 1;\n  overflow: auto;\n  flex-direction: column;\n  padding: 10px 16px;\n}\n.ant-panel-wrapper .ant-panel .ant-panel-footer {\n  padding: 10px 16px;\n  text-align: center;\n  border-top: 1px solid #e8e8e8;\n  border-radius: 0 0 4px 4px;\n}\n.ant-panel-wrapper .ant-panel .ant-panel-footer button {\n  margin: 0 4px;\n}\n';
styleInject(css$2);

var Panel =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Panel, _Component);

    function Panel() {
      _classCallCheck(this, Panel);

      return _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(Panel).apply(this, arguments)
      );
    }

    _createClass(Panel, [
      {
        key: 'renderHeader',
        value: function renderHeader() {
          var header;
          var _this$props = this.props,
            prefixCls = _this$props.prefixCls,
            title = _this$props.title,
            extra = _this$props.extra;

          if (title || extra) {
            header = React__default.createElement(
              'div',
              {
                className: prefixCls + '-head'
              },
              React__default.createElement(
                'div',
                {
                  className: prefixCls + '-head-wrapper'
                },
                title &&
                  React__default.createElement(
                    'div',
                    {
                      className: prefixCls + '-head-title'
                    },
                    title
                  ),
                extra &&
                  React__default.createElement(
                    'div',
                    {
                      className: prefixCls + '-extra'
                    },
                    extra
                  )
              )
            );
          }

          return header;
        }
      },
      {
        key: 'renderBody',
        value: function renderBody() {
          var props = this.props;
          var prefixCls = this.props.prefixCls;
          return React__default.createElement(
            'div',
            {
              className: prefixCls + '-body'
            },
            props.children
          );
        }
      },
      {
        key: 'renderFooterButton',
        value: function renderFooterButton(locale) {
          var _this$props2 = this.props,
            onOk = _this$props2.onOk,
            onCancel = _this$props2.onCancel,
            confirmLoading = _this$props2.confirmLoading;
          return [
            React__default.createElement(
              _Button,
              {
                key: 'submit',
                loading: confirmLoading,
                onClick: onOk,
                type: 'primary'
              },
              locale.okText
            ),
            React__default.createElement(
              _Button,
              {
                key: 'cancel',
                onClick: onCancel
              },
              locale.cancelText
            )
          ];
        }
      },
      {
        key: 'renderFooterLocale',
        value: function renderFooterLocale(locale) {
          var props = this.props;
          return props.footer
            ? props.footer()
            : this.renderFooterButton(locale);
        }
      },
      {
        key: 'renderFooter',
        value: function renderFooter(locale) {
          var footer;
          var props = this.props;
          var prefixCls = this.props.prefixCls;
          var contextLocale = Object.assign({}, locale, this.props.locale);

          if (props.footer != false) {
            footer = React__default.createElement(
              'div',
              {
                className: prefixCls + '-footer'
              },
              this.renderFooterLocale(contextLocale)
            );
          } else {
            footer = null;
          }

          return footer;
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props3 = this.props,
            prefixCls = _this$props3.prefixCls,
            loading = _this$props3.loading,
            className = _this$props3.className;
          return React__default.createElement(
            'div',
            {
              className: ''.concat(prefixCls, '-wrapper ').concat(className)
            },
            React__default.createElement(
              _Spin,
              {
                spinning: loading
              },
              React__default.createElement(
                'div',
                {
                  className: ''.concat(prefixCls, ' ').concat(className)
                },
                this.renderHeader(),
                this.renderBody(),
                React__default.createElement(
                  LocaleReceiver,
                  {
                    componentName: 'Panel',
                    defaultLocale: Locale$2
                  },
                  this.renderFooter.bind(this)
                )
              )
            )
          );
        }
      }
    ]);

    return Panel;
  })(React.Component);
Panel.propTypes = {
  /**
  确定按钮响应事件
  **/
  onOK: PropTypes.func,

  /**
  取消按钮响应事件
  **/
  onCancel: PropTypes.func,

  /**
  panel面板标题
  **/
  title: PropTypes.string,

  /**
  确认按钮文字自定义
  **/
  okText: PropTypes.string,

  /**
  消按钮文字自定义
  **/
  cancelText: PropTypes.string,

  /**
  自定义footer
  **/
  footer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element,
    PropTypes.func
  ]),

  /**
  二次确认时的loading状态，true时确定操作按钮不可操作
  **/
  confirmLoading: PropTypes.bool,

  /**
  国际化
  **/
  locale: PropTypes.object,

  /**
  整个panel的loading状态，true时整个面板不能操作
  **/
  loading: PropTypes.bool,

  /**
   * Panel 增加自定义 className 名称，支持自定义样式 特殊化 使用
   */
  className: PropTypes.string
};
Panel.defaultProps = {
  prefixCls: 'ant-panel',
  onOk: function onOk() {},
  loading: false,
  onCancel: function onCancel() {},
  title: '',
  confirmLoading: false,
  className: ''
};

var ModalAndView =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(ModalAndView, _Component);

    function ModalAndView() {
      _classCallCheck(this, ModalAndView);

      return _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(ModalAndView).apply(this, arguments)
      );
    }

    _createClass(ModalAndView, [
      {
        key: 'handleBackRoute',
        value: function handleBackRoute() {
          var _this$props = this.props,
            actions = _this$props.actions,
            history = _this$props.history,
            router = _this$props.router;
          actions.backRoute(router);
        }
      },
      {
        key: 'handleSaveRoute',
        value: function handleSaveRoute() {
          var formView = this.refs.formView;
          formView.onSubmit();
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            route = _this$props2.route,
            children = _this$props2.children,
            otherProps = _objectWithoutProperties(_this$props2, [
              'route',
              'children'
            ]);

          return React__default.createElement(
            _Modal,
            _extends$1(
              {
                title: 'title',
                visible: true,
                maskClosable: false,
                onCancel: this.handleBackRoute.bind(this),
                onOk: this.handleSaveRoute.bind(this)
              },
              otherProps
            ),
            React__default.createElement(
              children,
              Object.assign({}, otherProps)
            )
          );
        }
      }
    ]);

    return ModalAndView;
  })(React.Component); //export default withRouter(ModalAndView)

var TabPane = _Tabs.TabPane;

var TabsPanel =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(TabsPanel, _PureComponent);

    function TabsPanel() {
      _classCallCheck(this, TabsPanel);

      return _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(TabsPanel).apply(this, arguments)
      );
    }

    _createClass(TabsPanel, [
      {
        key: 'stringifyURL',
        value: function stringifyURL(str, options) {
          if (!str) {
            return str;
          }

          return str.replace(/:(\w+)/gi, function(match, p1) {
            var replacement = options[p1];

            if (!replacement) {
              throw new Error(
                'Could not find url parameter ' +
                  p1 +
                  ' in passed options object'
              );
            }

            return replacement;
          }); // return str
        }
      },
      {
        key: 'onChange',
        value: function onChange(activeKey) {
          var _this$props = this.props,
            history = _this$props.history,
            _this$props$match = _this$props.match,
            path = _this$props$match.path,
            params = _this$props$match.params,
            paramName = _this$props.paramName;
          history.push(
            this.stringifyURL(
              path,
              Object.assign(
                {},
                params,
                _defineProperty$1({}, paramName, activeKey)
              )
            )
          );
        }
      },
      {
        key: 'renderModule',
        value: function renderModule(child) {
          var _this$props2 = this.props,
            children = _this$props2.children,
            otherProps = _objectWithoutProperties(_this$props2, ['children']);

          var childProps = child.props;
          return React__default.createElement(
            TabPane,
            {
              tab: childProps.title,
              key: childProps.path
            },
            typeof childProps.children === 'function'
              ? React__default.createElement(childProps.children, otherProps)
              : React__default.cloneElement(childProps.children, otherProps)
          );
        }
      },
      {
        key: 'renderPanes',
        value: function renderPanes() {
          var _this = this;

          var children = this.props.children;
          return [].concat(children).map(function(child) {
            return _this.renderModule(child);
          });
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props3 = this.props,
            params = _this$props3.match.params,
            defaultPath = _this$props3.defaultPath,
            paramName = _this$props3.paramName; // console.log(params[paramName],Object.assign({},params,{[paramName]:1}))

          return React__default.createElement(
            _Tabs,
            {
              activeKey: params[paramName] || defaultPath,
              animated: false,
              onChange: this.onChange.bind(this)
            },
            this.renderPanes()
          );
        }
      }
    ]);

    return TabsPanel;
  })(React.PureComponent);
TabsPanel.propTypes = {
  paramName: PropTypes.string,
  defaultPath: PropTypes.string,
  history: PropTypes.object
};
TabsPanel.defaultProps = {
  paramName: 'type',
  defaultPath: undefined
};

var PropertyTable =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(PropertyTable, _Component);

    function PropertyTable() {
      _classCallCheck(this, PropertyTable);

      return _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(PropertyTable).apply(this, arguments)
      );
    }

    _createClass(PropertyTable, [
      {
        key: 'renderItem',
        value: function renderItem(ds, idx) {
          return React__default.createElement(
            'div',
            {
              key: idx
            },
            React__default.createElement('th', null, ds.label),
            React__default.createElement('td', null, ds.value)
          );
        }
      },
      {
        key: 'renderTableRows',
        value: function renderTableRows() {
          var dataSource = this.props.dataSource;
          return React__default.createElement(
            'tr',
            null,
            dataSource.map(this.renderItem)
          );
        }
      },
      {
        key: 'render',
        value: function render() {
          return React__default.createElement(
            'table',
            null,
            React__default.createElement('tbody', null, this.renderTableRows())
          );
        }
      }
    ]);

    return PropertyTable;
  })(React.Component);
PropertyTable.propsType = {
  dataSource: PropTypes.array.isRequired,
  renderItem: PropTypes.func
};

var css$3 =
  '.mc-transfer{\n    /* color: deepskyblue */\n}\n\n.mc-transfer .ant-transfer-list-content{\n    position: relative;\n}\n.mc-transfer .ant-transfer-list-content-item>span{\n    display: inline-block;\n    position: absolute;\n    right: 15px;\n    left: 30px;\n}\n.mc-transfer .ant-transfer-list-content-item{\n    text-overflow:inherit;\n}\n.mc-transfer .ant-transfer-list-footer div{\n    display: inline-block;\n}\n.mc-transfer .custom-item{\n    display: inline-flex;\n    -webkit-box-pack:justify;\n    -webkit-justify-content:space-between;\n    -ms-flex-pack:justify;\n    justify-content:space-between;\n    width: 100%;\n}\n.mc-transfer .custom-item>div{\n    display: inline-block;\n    text-align:center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    vertical-align: bottom;\n}\n\n/* 穿梭框左侧 */\n.mc-transfer .ant-transfer-list:first-child .ant-transfer-list-header .header-item div:not(:first-child){\n    display:none;\n}\n.mc-transfer .ant-transfer-list:first-child .ant-transfer-list-content .custom-item div:not(:first-child){\n    display:none;\n}\n.mc-transfer .ant-transfer-list:first-child .ant-transfer-list-content .custom-item div:first-child{\n    max-width: 100%!important;\n}\n\n\n\n/* 穿梭框头部样式 */\n.mc-transfer .ant-transfer-list-header-selected{\n    display: inline-block;\n    width: 90%;\n    padding: 0 20px;\n}\n.mc-transfer .header-item{\n    display: inline-flex;\n    -webkit-box-pack:justify;\n    -webkit-justify-content:space-between;\n    -ms-flex-pack:justify;\n    justify-content:space-between;\n    width: 100%;\n}';
styleInject(css$3);

function noop() {} //默认list样式

var defaultListStyle = {
  width: 300,
  height: 300
};

var NewTransferSearch =
  /*#__PURE__*/
  (function(_Transfer$Search) {
    _inherits(NewTransferSearch, _Transfer$Search);

    function NewTransferSearch(props) {
      var _this2;

      _classCallCheck(this, NewTransferSearch);

      _this2 = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(NewTransferSearch).call(this, props)
      ); // this.refInput = React.createRef();
      // this.refSelect = React.createRef();

      _defineProperty$1(_assertThisInitialized(_this2), 'render', function() {
        var _props = _this2.props,
          placeholder = _props.placeholder,
          value = _props.value,
          selectData = _props.selectData,
          defaultSelectValue = _props.defaultSelectValue,
          prefixCls = _props.prefixCls;
        var icon =
          value && value.length > 0
            ? React__default.createElement(
                'a',
                {
                  href: '#',
                  className: prefixCls + '-action',
                  onClick: _this2.handleClear
                },
                React__default.createElement(_Icon, {
                  type: 'cross-circle'
                })
              )
            : React__default.createElement(
                'span',
                {
                  className: prefixCls + '-action'
                },
                React__default.createElement(_Icon, {
                  type: 'search'
                })
              );
        return React__default.createElement(
          'div',
          {
            style: {
              display: 'flex'
            }
          },
          [
            React__default.createElement(
              _Select,
              {
                onChange: _this2.handleSelect.bind(
                  _assertThisInitialized(_this2)
                ),
                defaultValue: defaultSelectValue,
                key: 'Select'
              },
              selectData &&
                selectData.map(function(item, i) {
                  return React__default.createElement(
                    _Select.Option,
                    {
                      value: item,
                      key: i
                    },
                    item
                  );
                })
            ),
            React__default.createElement(_Input, {
              placeholder: placeholder,
              className: prefixCls,
              key: 'input',
              // value: value,
              ref: function ref(_ref) {
                _this2.refInput = _ref;
              },
              onChange: _this2.handleChange.bind(_assertThisInitialized(_this2))
            })
          ],
          icon
        );
      });

      _this2.value = {};

      _this2.handleSelect = function(value) {
        var onChange = this.props.onChange;
        this.value['select'] = value; // console.log(this.value);

        if (onChange) {
          onChange({
            target: {
              value: this.value
            }
          });
        }
      };

      _this2.handleChange = function(e) {
        var onChange = this.props.onChange;
        this.value['input'] = e.target.value;

        if (onChange) {
          onChange({
            target: {
              value: this.value
            }
          });
        }
      };

      _this2.handleClear = function(e) {
        e.preventDefault();
        var handleClear = this.props.handleClear;

        if (handleClear) {
          handleClear(e);
        }
      };

      return _this2;
    }

    return NewTransferSearch;
  })(_Transfer.Search);

var NewTransferList =
  /*#__PURE__*/
  (function(_Transfer$List) {
    _inherits(NewTransferList, _Transfer$List);

    function NewTransferList(props) {
      var _this4;

      _classCallCheck(this, NewTransferList);

      _this4 = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(NewTransferList).call(this, props)
      );

      _defineProperty$1(
        _assertThisInitialized(_this4),
        'getCheckStatus',
        function(filteredDataSource) {
          var checkedKeys = _this4.props.checkedKeys;

          if (checkedKeys.length === 0) {
            return 'none';
          } else if (
            filteredDataSource.every(function(item) {
              return checkedKeys.indexOf(item.key) >= 0;
            })
          ) {
            return 'all';
          }

          return 'part';
        }
      );

      _defineProperty$1(_assertThisInitialized(_this4), 'render', function() {
        var _this3 = _assertThisInitialized(_this4);

        var _props = _this4.props,
          prefixCls = _props.prefixCls,
          dataSource = _props.dataSource,
          selectData = _props.selectData,
          defaultSelectValue = _props.defaultSelectValue,
          titleText = _props.titleText,
          checkedKeys = _props.checkedKeys,
          lazy = _props.lazy,
          _props$body = _props.body,
          body = _props$body === undefined ? noop : _props$body,
          _props$footer = _props.footer,
          footer = _props$footer === undefined ? noop : _props$footer,
          showSearch = _props.showSearch,
          searchSelect = _props.searchSelect,
          style = _props.style,
          filter = _props.filter,
          searchPlaceholder = _props.searchPlaceholder,
          notFoundContent = _props.notFoundContent,
          itemUnit = _props.itemUnit,
          itemsUnit = _props.itemsUnit,
          onScroll = _props.onScroll; // Custom Layout
        // console.log(_props)

        var footerDom = footer(_extends({}, _this4.props));
        var bodyDom = body(_extends({}, _this4.props));
        var listCls = classNames(
          prefixCls,
          _defineProperty({}, prefixCls + '-with-footer', !!footerDom)
        );
        var filteredDataSource = [];
        var totalDataSource = [];
        var showItems = dataSource.map(function(item) {
          var _renderItem = _this3.renderItem(item),
            renderedText = _renderItem.renderedText,
            renderedEl = _renderItem.renderedEl;

          if (filter && !_this3.matchFilter(renderedText, item)) {
            return null;
          } // all show items

          totalDataSource.push(item);

          if (!item.disabled) {
            // response to checkAll items
            filteredDataSource.push(item);
          }

          var checked = checkedKeys.indexOf(item.key) >= 0;
          return React__default.createElement(Item, {
            key: item.key,
            item: item,
            lazy: lazy,
            renderedText: renderedText,
            renderedEl: renderedEl,
            checked: checked,
            prefixCls: prefixCls,
            onClick: _this3.handleSelect
          });
        });
        var unit = dataSource.length > 1 ? itemsUnit : itemUnit;
        var search = showSearch
          ? React__default.createElement(
              'div',
              {
                className: prefixCls + '-body-search-wrapper'
              },
              React__default.createElement(NewTransferSearch, {
                prefixCls: prefixCls + '-search',
                onChange: _this4.handleFilter,
                handleClear: _this4.handleClear,
                placeholder: searchPlaceholder,
                selectData: selectData,
                defaultSelectValue: defaultSelectValue,
                value: filter
              })
            )
          : null;
        var searchSelect = searchSelect || search;
        var listBody =
          bodyDom ||
          React__default.createElement(
            'div',
            {
              className: showSearch
                ? prefixCls + '-body ' + prefixCls + '-body-with-search'
                : prefixCls + '-body'
            },
            search,
            React__default.createElement(
              Animate,
              {
                component: 'ul',
                componentProps: {
                  onScroll: onScroll
                },
                className: prefixCls + '-content',
                transitionName: _this4.state.mounted
                  ? prefixCls + '-content-item-highlight'
                  : '',
                transitionLeave: false
              },
              showItems
            ),
            React__default.createElement(
              'div',
              {
                className: prefixCls + '-body-not-found'
              },
              notFoundContent
            )
          );
        var listFooter = footerDom
          ? React__default.createElement(
              'div',
              {
                className: prefixCls + '-footer'
              },
              footerDom
            )
          : null;

        var checkStatus = _this4.getCheckStatus(filteredDataSource);

        var checkedAll = checkStatus === 'all';
        var checkAllCheckbox = React__default.createElement(_Checkbox, {
          ref: function ref(_ref2) {
            _this4.refCheckbox = _ref2;
          },
          checked: checkedAll,
          indeterminate: checkStatus === 'part',
          onChange: function onChange() {
            return _this3.props.handleSelectAll(filteredDataSource, checkedAll);
          }
        }); // header 重写

        var headerBody =
          _this4.props.header &&
          _this4.props.header.map(function(value, i) {
            return React__default.createElement(
              'div',
              {
                key: ''.concat(value.text).concat(i)
              },
              value.text
            );
          });

        return React__default.createElement(
          'div',
          {
            className: listCls,
            style: style
          },
          React__default.createElement(
            'div',
            {
              className: prefixCls + '-header'
            },
            checkAllCheckbox,
            React__default.createElement(
              'span',
              {
                className: prefixCls + '-header-selected'
              },
              React__default.createElement(
                'span',
                null,
                (checkedKeys.length > 0 ? checkedKeys.length + '/' : '') +
                  totalDataSource.length,
                ' ',
                unit
              ),
              React__default.createElement(
                'span',
                {
                  className: prefixCls + '-header-title'
                },
                titleText
              ) // React.createElement(
              //   'div',
              //   { className: 'header-item' },
              //   headerBody
              // ),
            )
          ),
          listBody,
          listFooter
        );
      });

      _this4.refCheckbox = React__default.createRef();
      return _this4;
    }

    _createClass(NewTransferList, [
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          // console.log(
          //   JSON.stringify(nextProps.filter),
          //   JSON.stringify(this.props.filter)
          // );
          // if (JSON.stringify(nextProps.filter) != JSON.stringify(this.props.filter)) {
          this.setState({
            time: new Date().getTime()
          }); // }
        }
      }
    ]);

    return NewTransferList;
  })(_Transfer.List);

var NewTransfer =
  /*#__PURE__*/
  (function(_Transfer2) {
    _inherits(NewTransfer, _Transfer2);

    function NewTransfer(props) {
      var _this5;

      _classCallCheck(this, NewTransfer);

      _this5 = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(NewTransfer).call(this, props)
      );

      _defineProperty$1(
        _assertThisInitialized(_this5),
        'renderTransfer',
        function(locale) {
          var _this = _this5._this;
          var _this$props2 = _this.props,
            _this$props2$prefixCl = _this$props2.prefixCls,
            prefixCls =
              _this$props2$prefixCl === undefined
                ? 'ant-transfer'
                : _this$props2$prefixCl,
            className = _this$props2.className,
            _this$props2$operatio = _this$props2.operations,
            operations =
              _this$props2$operatio === undefined ? [] : _this$props2$operatio,
            showSearch = _this$props2.showSearch,
            notFoundContent = _this$props2.notFoundContent,
            searchPlaceholder = _this$props2.searchPlaceholder,
            body = _this$props2.body,
            footer = _this$props2.footer,
            listStyle = _this$props2.listStyle,
            filterOption = _this$props2.filterOption,
            render = _this$props2.render,
            lazy = _this$props2.lazy;
          var _this$state3 = _this.state,
            leftFilter = _this$state3.leftFilter,
            rightFilter = _this$state3.rightFilter,
            sourceSelectedKeys = _this$state3.sourceSelectedKeys,
            targetSelectedKeys = _this$state3.targetSelectedKeys;

          var _this$splitDataSource = _this.splitDataSource(_this.props),
            leftDataSource = _this$splitDataSource.leftDataSource,
            rightDataSource = _this$splitDataSource.rightDataSource;

          var leftActive = targetSelectedKeys.length > 0;
          var rightActive = sourceSelectedKeys.length > 0;
          var cls = classNames(className, prefixCls);

          var titles = _this.getTitles(locale);

          var selectData = _this$props2.selectData;
          var defaultSelectValue = _this$props2.defaultSelectValue;
          return React__default.createElement(
            'div',
            {
              className: cls
            },
            React__default.createElement(NewTransferList, {
              prefixCls: prefixCls + '-list',
              titleText: titles[0],
              dataSource: leftDataSource,
              selectData: selectData,
              defaultSelectValue: defaultSelectValue,
              filter: leftFilter,
              filterOption: filterOption,
              style: listStyle,
              checkedKeys: sourceSelectedKeys,
              handleFilter: _this.handleLeftFilter,
              handleClear: _this.handleLeftClear,
              handleSelect: _this.handleLeftSelect,
              handleSelectAll: _this.handleLeftSelectAll,
              render: render,
              showSearch: showSearch,
              searchPlaceholder: searchPlaceholder || locale.searchPlaceholder,
              notFoundContent: notFoundContent || locale.notFoundContent,
              itemUnit: locale.itemUnit,
              itemsUnit: locale.itemsUnit,
              body: body,
              footer: footer,
              lazy: lazy,
              onScroll: _this.handleLeftScroll
            }),
            React__default.createElement(Operation, {
              className: prefixCls + '-operation',
              rightActive: rightActive,
              rightArrowText: operations[0],
              moveToRight: _this.moveToRight,
              leftActive: leftActive,
              leftArrowText: operations[1],
              moveToLeft: _this.moveToLeft
            }),
            React__default.createElement(NewTransferList, {
              prefixCls: prefixCls + '-list',
              titleText: titles[1],
              dataSource: rightDataSource,
              selectData: selectData,
              defaultSelectValue: defaultSelectValue,
              filter: rightFilter,
              filterOption: filterOption,
              style: listStyle,
              checkedKeys: targetSelectedKeys,
              handleFilter: _this.handleRightFilter,
              handleClear: _this.handleRightClear,
              handleSelect: _this.handleRightSelect,
              handleSelectAll: _this.handleRightSelectAll,
              render: render,
              showSearch: showSearch,
              searchPlaceholder: searchPlaceholder || locale.searchPlaceholder,
              notFoundContent: notFoundContent || locale.notFoundContent,
              itemUnit: locale.itemUnit,
              itemsUnit: locale.itemsUnit,
              body: body,
              footer: footer,
              lazy: lazy,
              onScroll: _this.handleRightScroll
            })
          );
        }
      );

      _this5._this = _possibleConstructorReturn(
        _assertThisInitialized(_this5),
        (_Transfer.__proto__ || Object.getPrototypeOf(_Transfer)).call(
          _assertThisInitialized(_this5),
          props
        )
      );
      return _this5;
    }

    _createClass(NewTransfer, [
      {
        key: 'render',
        value: function render() {
          // console.log("渲染一次");
          return React__default.createElement(
            LocaleReceiver$1,
            {
              componentName: 'Transfer',
              defaultLocale: defaultLocale.Transfer
            },
            this.renderTransfer
          );
        }
      }
    ]);

    return NewTransfer;
  })(_Transfer);

var TransferView =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(TransferView, _React$Component);

    function TransferView() {
      var _getPrototypeOf2;

      var _this6;

      _classCallCheck(this, TransferView);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this6 = _possibleConstructorReturn$1(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(TransferView)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty$1(_assertThisInitialized(_this6), 'renderItem', function(
        item
      ) {
        var node =
          _this6.props.header &&
          _this6.props.header.map(function(value, i) {
            return React__default.createElement(
              'div',
              {
                style: {
                  maxWidth: value.width + 'px'
                },
                key: ''.concat(value.text).concat(i),
                title:
                  typeof item[value.text] === 'string' ? item[value.text] : ''
              },
              item[value.text]
            );
          });

        var width =
          (_this6.props.listStyle && _this6.props.listStyle.width) ||
          defaultListStyle.width;
        var customLabel = React__default.createElement(
          'div',
          {
            className: 'custom-item',
            style: {
              width: width - 60 + 'px'
            }
          },
          node
        );
        return {
          label: customLabel,
          // for displayed item
          value: item[_this6.props.searchItem] // for filter matching
        };
      });

      _defineProperty$1(_assertThisInitialized(_this6), 'footer', function() {
        var headerBody = _this6.props.header.map(function(value, i) {
          return React__default.createElement(
            'div',
            {
              key: ''.concat(value.text).concat(i)
            },
            value.text
          );
        });

        return headerBody;
      });

      return _this6;
    }

    _createClass(TransferView, [
      {
        key: 'render',
        value: function render() {
          return React__default.createElement(
            NewTransfer,
            _extends$1(
              {
                className: 'mc-transfer',
                listStyle: this.props.listStyle || defaultListStyle,
                render: this.renderItem
              },
              this.props
            )
          );
        }
      }
    ]);

    return TransferView;
  })(React__default.Component);

var css$4 =
  '.ant-table-tbody > .editable-row > td {\n  padding: 20px 20px;\n}\n.editable-row .ant-form-explain {\n  position: absolute;\n}\n.editable-row .ExtraColumn .ant-form-explain {\n  position: inherit;\n}\n';
styleInject(css$4);

var FormItem$1 = _Form.Item;
var EditableContext = React__default.createContext();
/* istanbul ignore next */

var EditableRow = function EditableRow(_ref) {
  var form = _ref.form,
    index = _ref.index,
    props = _objectWithoutProperties(_ref, ['form', 'index']);

  return React__default.createElement(
    EditableContext.Provider,
    {
      value: form
    },
    React__default.createElement('tr', props)
  );
};

var EditableFormRow = _Form.create()(EditableRow);

var EditTable =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(EditTable, _React$Component);

    function EditTable(props) {
      var _this;

      _classCallCheck(this, EditTable);

      _this = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(EditTable).call(this, props)
      );

      _defineProperty$1(_assertThisInitialized(_this), 'isEditing', function(
        record
      ) {
        return record.key === _this.state.editingKey;
      });

      _defineProperty$1(_assertThisInitialized(_this), 'edit', function(key) {
        if (_this.state.editingKey !== '') {
          _message.error('请先保存编辑项再进行其他编辑操作！');

          return false;
        }

        _this.setState({
          editingKey: key
        });

        _this.activeStatus();
      });

      _defineProperty$1(_assertThisInitialized(_this), 'editColumn', function(
        key
      ) {
        if (_this.state.editingKey !== '') {
          _message.error('请先保存编辑项再进行其他编辑操作！');

          return false;
        }

        _this.setState({
          editingKey: key
        });
      });

      _defineProperty$1(
        _assertThisInitialized(_this),
        'changeColumnEditStatus',
        function(record, tdObject) {
          _this.editColumn(record.key);

          _this.state.columns.map(function(item) {
            /* istanbul ignore else */
            if (item.dataIndex === tdObject.dataIndex) {
              item.editingStatus = true;
            }
          });
        }
      );

      _defineProperty$1(_assertThisInitialized(_this), 'cancel', function(
        form,
        key
      ) {
        var obj = _this.state.data.filter(function(d) {
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
          _this['delete'](key);
        }

        _this.setState({
          editingKey: ''
        });

        _this.revertStatus();
      });

      _defineProperty$1(_assertThisInitialized(_this), 'addNew', function() {
        if (_this.state.editingKey !== '') {
          _message.error('请先保存编辑项再进行添加操作！');

          return false;
        }

        var key =
          new Date().valueOf() + '' + Math.floor(Math.random() * 10 + 1);
        var obj = {
          key: key
        };

        var keyList = _toConsumableArray(_this.state.keyList);
        /* istanbul ignore else */

        if (keyList.length > 1) {
          keyList.length = keyList.length - 1;
        }

        keyList.forEach(function(d) {
          obj[d] = '';
        });

        var data = _toConsumableArray(_this.state.data);

        data.push(obj);

        _this.setState({
          data: data,
          editingKey: key
        });

        _this.activeStatus();
      });

      _this.state = {
        data: [],
        editingKey: '',
        keyList: [],
        columns: []
      };
      return _this;
    }

    _createClass(EditTable, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          /* istanbul ignore else */
          if (this.props.columns && this.props.columns.length > 0) {
            this.setState(
              {
                data: this.props.data === undefined ? [] : this.props.data,
                columns: [].concat(
                  _toConsumableArray(this.props.columns),
                  _toConsumableArray(this.state.columns)
                )
              },
              function() {
                var keyList = _this2.state.columns.map(function(c) {
                  return c.dataIndex;
                });

                _this2.setState({
                  keyList: keyList
                });
              }
            );
          }
        }
      },
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextprops) {
          /* istanbul ignore else */
          if (this.props.data != nextprops.data) {
            this.setState({
              data: nextprops.data
            });
          }
        }
      },
      {
        key: 'revertStatus',
        value: function revertStatus() {
          // 恢复每一列的编辑状态，去除所有editingStatus
          this.state.columns.map(function(item) {
            return (item.editingStatus = false);
          });
        }
      },
      {
        key: 'activeStatus',
        value: function activeStatus() {
          // 激活每一列的编辑状态，所有列editingStatus设为true
          this.state.columns.map(function(item) {
            return (item.editingStatus = true);
          });
        }
      },
      {
        key: 'delete',
        value: function _delete(key) {
          var _this3 = this;

          var newData = _toConsumableArray(this.state.data);

          this.setState(
            {
              data: newData.filter(function(c) {
                return c.key !== key;
              }),
              editingKey: ''
            },
            function() {
              _this3.props.onChange(_this3.state.data);
            }
          );
        }
      },
      {
        key: 'save',
        value: function save(form, key) {
          var _this4 = this;

          form.validateFields(function(error, row) {
            if (error) {
              return;
            }

            var newData = _toConsumableArray(_this4.state.data);

            var index = newData.findIndex(function(item) {
              return key === item.key;
            });

            if (index > -1) {
              var item = newData[index];
              newData.splice(
                index,
                1,
                _objectSpread2({}, item, {}, row, {
                  key: item.key
                })
              );
            } else {
              newData.push(row);
            }

            _this4.setState(
              {
                data: newData,
                editingKey: ''
              },
              function() {
                _this4.props.onChange(newData);
              }
            );
          });
        }
      },
      {
        key: 'renderCell',
        value: function renderCell(text, record, cellConfig) {
          var dataIndex = cellConfig.dataIndex,
            editComponent = cellConfig.editComponent,
            editConfig = cellConfig.editConfig;
          var instance = this;
          var mode = this.props.mode;
          return React__default.createElement(
            EditableContext.Consumer,
            null,
            function(form) {
              var getFieldDecorator = form.getFieldDecorator;
              var component = editComponent(text, record, instance, form);
              return React__default.createElement(
                FormItem$1,
                {
                  style: {
                    margin: 0
                  }
                },
                getFieldDecorator(
                  dataIndex,
                  _objectSpread2({}, editConfig, {
                    initialValue:
                      record[dataIndex] === ''
                        ? editConfig && editConfig.initialValue
                        : record[dataIndex]
                  })
                )(
                  React__default.createElement(
                    component.type,
                    _objectSpread2(
                      {},
                      component.props,
                      {},
                      mode !== 'row'
                        ? {
                            onChange: function onChange(e) {
                              // e is event
                              if (e.target) {
                                form.setFieldsValue(
                                  _defineProperty$1(
                                    {},
                                    dataIndex,
                                    e.target.value
                                  )
                                );
                              } else {
                                form.setFieldsValue(
                                  _defineProperty$1({}, dataIndex, e)
                                );
                              }

                              instance.save(form, record.key);
                            }
                          }
                        : {}
                    )
                  )
                )
              );
            }
          );
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this5 = this;

          var components = {
            body: {
              row: EditableFormRow // cell: EditableCell
            }
          };
          var mode = this.props.mode;
          var instance = this;
          var columns = this.state.columns.map(function(col) {
            if (!col.editComponent) {
              return col;
            }
            /* istanbul ignore next */

            return _objectSpread2({}, col, {
              // onCellClick: (record,index)=>{
              //   console.log(record,index)
              // },
              render: function render(text, row) {
                return mode === 'full' || _this5.isEditing(row)
                  ? _this5.renderCell(text, row, col)
                  : col.render
                  ? col.render(text, row, instance)
                  : text;
              }
            });
          });
          return React__default.createElement(_Table, {
            components: components,
            bordered: true,
            dataSource: this.state.data,
            columns: columns,
            rowClassName: 'editable-row',
            footer: function footer() {
              return React__default.createElement(
                _Button,
                {
                  icon: 'plus',
                  onClick: _this5.addNew,
                  style: {
                    width: '100%'
                  }
                },
                '\u65B0\u589E'
              );
            }
          });
        }
      }
    ]);

    return EditTable;
  })(React__default.Component);

EditTable.defaultProps = {
  mode: 'row'
};
EditTable.propTypes = {
  /**
  表格列配置
  **/
  columns: PropTypes.array.isRequired,

  /**
  数据数组
  **/
  data: PropTypes.array,
  mode: PropTypes.oneOf(['full', 'row'])
};

var Td = function Td(_ref) {
  var dataSource = _ref.dataSource,
    _ref$labelKey = _ref.labelKey,
    labelKey = _ref$labelKey === void 0 ? dataSource[labelKey] : _ref$labelKey,
    _ref$valueKey = _ref.valueKey,
    valueKey = _ref$valueKey === void 0 ? dataSource[valueKey] : _ref$valueKey;
  return [
    React__default.createElement(
      'th',
      {
        key: 'td' + dataSource[labelKey]
      },
      typeof dataSource[labelKey] === 'function'
        ? dataSource[labelKey]()
        : dataSource[labelKey]
    ),
    React__default.createElement(
      'td',
      {
        colSpan: dataSource.colspan ? dataSource.colspan : null,
        key: 'td1' + dataSource[valueKey]
      },
      typeof dataSource[valueKey] === 'function'
        ? dataSource[valueKey]()
        : dataSource[valueKey]
    )
  ];
};

Td.propTypes = {
  labelKey: PropTypes.string,
  valueKey: PropTypes.string
};

var css$5 =
  '.ant-table-detail .ant-table-title {\n  font-size: 14px;\n  padding: 10px 0;\n  background-color: #f8f8f8;\n  color: #000;\n}\n.ant-table-detail .ant-table-title,\n.ant-table-detail .ant-table-content .ant-table-body table th,\n.ant-table-detail .ant-table-content .ant-table-body table td {\n  text-indent: 20px;\n}\n.ant-table-detail .ant-table-content .ant-table-body table {\n  border: 1px solid #f0f0f0;\n  border-collapse: collapse;\n}\n.ant-table-detail .ant-table-content .ant-table-body table tr:not(:last-of-type) {\n  border-bottom: 1px solid #f0f0f0;\n}\n.ant-table-detail .ant-table-content .ant-table-body table tr:hover td {\n  background-color: #fff;\n}\n.ant-table-detail .ant-table-content .ant-table-body table tr td {\n  padding: 9px 16px;\n  border: none;\n  white-space: normal;\n}\n.ant-table-detail .ant-table-content .ant-table-body table tr th {\n  padding: 9px 0;\n  font-weight: normal;\n  border: 1px solid #f0f0f0;\n  width: 18%;\n  color: #000;\n  background: #e8e8e8;\n}\n';
styleInject(css$5);

var DetailTable =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(DetailTable, _React$Component);

    function DetailTable() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DetailTable);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn$1(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DetailTable)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty$1(_assertThisInitialized(_this), 'showDom', function(
        dataSource
      ) {
        var Data = [];

        if (_this.props.mode === 'object' && Array.isArray(dataSource)) {
          throw Error('使用对象模式，数据必须为object');
        }

        if (!Array.isArray(dataSource) && _this.props.mode !== 'object') {
          throw Error('数据为对象时，mode需要为object');
        }

        if (_this.props.mode && _this.props.mode === 'object') {
          for (var a in dataSource) {
            var _Data$push;

            Data.push(
              ((_Data$push = {}),
              _defineProperty$1(_Data$push, _this.props.labelKey, a),
              _defineProperty$1(
                _Data$push,
                _this.props.valueKey,
                dataSource[a]
              ),
              _Data$push)
            );
          }
        } else {
          Data = _toConsumableArray(dataSource);
        }

        var columnNumber =
          _this.props.columnNumber === undefined ? 1 : _this.props.columnNumber;

        if (columnNumber <= 0) {
          throw Error('列数必须大于0');
        }

        var array = [];

        while (Data.length > 0) {
          var ar = [];

          for (var i = 0; i < columnNumber; i++) {
            var obj = Data.shift();

            if (obj === undefined) {
              var _obj;

              obj =
                ((_obj = {}),
                _defineProperty$1(_obj, _this.props.labelKey, ''),
                _defineProperty$1(_obj, _this.props.valueKey, ''),
                _obj);
            }

            if (obj.colspan && obj.colspan > 0) {
              ar.push(obj);
              i = i + obj.colspan - 1;
            } else {
              ar.push(obj);
            }
          }

          array.push(ar);
        }

        return array.map(function(d, k) {
          return React__default.createElement(
            'tr',
            {
              key: k
            },
            d.map(function(c, v) {
              return React__default.createElement(Td, {
                key: v,
                dataSource: c,
                labelKey: _this.props.labelKey,
                valueKey: _this.props.valueKey
              });
            })
          );
        });
      });

      return _this;
    }

    _createClass(DetailTable, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            dataSource = _this$props.dataSource,
            title = _this$props.title,
            tableClass = _this$props.tableClass;
          return React__default.createElement(
            'div',
            {
              className: tableClass
            },
            React__default.createElement(
              'div',
              {
                className: 'ant-table-title'
              },
              title
            ),
            React__default.createElement(
              'div',
              {
                className: 'ant-table-content'
              },
              React__default.createElement(
                'div',
                {
                  className: 'ant-table-body'
                },
                React__default.createElement(
                  'table',
                  {
                    style: {
                      width: '100%'
                    }
                  },
                  React__default.createElement(
                    'tbody',
                    {
                      className: 'ant-table-tbody'
                    },
                    this.showDom(dataSource)
                  )
                )
              )
            )
          );
        }
      }
    ]);

    return DetailTable;
  })(React__default.Component);

DetailTable.propTypes = {
  /**
  支持数组模式和对象模式（'array',object）默认数组模式
  **/
  mode: PropTypes.oneOf(['object', 'array']),

  /**
  定义列数，不得小于0
  **/
  columnNumber: PropTypes.number,

  /**
  传递数据，根据类型传递相应的数据
  **/
  dataSource: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),

  /**
  表格外包div类名
  **/
  tableClass: PropTypes.string,

  /**
  表格title
  **/
  title: PropTypes.string,

  /**
  组模式下配置显示名称key值，默认label
  **/
  labelKey: PropTypes.string,

  /**
  数组模式下配置显示名称value值，默认value
  **/
  valueKey: PropTypes.string
};
DetailTable.defaultProps = {
  columnNumber: 2,
  title: 'datailtable',
  tableClass: 'ant-table ant-table-bordered ant-table-detail',
  labelKey: 'name',
  valueKey: 'value'
};

var up = {
  transform: 'rotate(180deg)',
  fontSize: 12,
  marginLeft: 5,
  verticalAlign: -1
};
var down = {
  fontSize: 12,
  marginLeft: 5,
  verticalAlign: -1
};

var UpDown = function UpDown(_ref) {
  var _ref$state = _ref.state,
    state = _ref$state === void 0 ? 'up' : _ref$state;
  return React__default.createElement(_Icon, {
    type: 'down',
    className: down,
    style: state === 'down' ? down : up
  });
};

var FieldSet =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(FieldSet, _React$Component);

    function FieldSet() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, FieldSet);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn$1(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(FieldSet)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty$1(_assertThisInitialized(_this), 'state', {
        hidden:
          _this.props.display === undefined
            ? false
            : _this.props.display === 'hide'
      });

      _defineProperty$1(
        _assertThisInitialized(_this),
        'showHideFun',
        function() {
          _this.setState(
            {
              hidden: !_this.state.hidden
            },
            function() {
              if (_this.props.onChange) {
                _this.props.onChange(_this.state.hidden ? 'hide' : 'show');
              }
            }
          );
        }
      );

      return _this;
    }

    _createClass(FieldSet, [
      {
        key: 'render',
        value: function render() {
          return React__default.createElement(
            'div',
            null,
            React__default.createElement(
              _Divider,
              {
                orientation: 'left'
              },
              this.props.display === undefined
                ? this.props.title
                : React__default.createElement(
                    'a',
                    {
                      onClick: this.showHideFun
                    },
                    this.props.title,
                    React__default.createElement(UpDown, {
                      state: this.state.hidden ? 'up' : 'down'
                    })
                  )
            ),
            !this.state.hidden && this.props.children
          );
        }
      }
    ]);

    return FieldSet;
  })(React__default.Component);
FieldSet.defaultProps = {
  title: '标题'
};

var downList = [
  {
    label: '应用程序名',
    value: [
      'IMP',
      'EXP',
      'DBLINK',
      'JOB',
      'PLSQLDEV',
      'SQL DEVELOPER',
      'TOAD',
      'SQLPLUS'
    ]
  },
  {
    label: '执行结果',
    value: ['成功', '失败']
  },
  {
    label: '时间域',
    value: ['周末', '工作日非工作时间', '工作日']
  },
  {
    label: '审计级别',
    value: ['高', '中', '低']
  },
  {
    label: '数据库类型',
    value: [
      'Oracle',
      'MySQL',
      'SQL Server',
      'DB2',
      'Sybase',
      'PostgreSQL',
      'Hive',
      'DaMeng',
      'KingBase',
      'Informix',
      'Mariadb',
      'GBase',
      'GBase 8s 8.3'
    ]
  }
];

var FormItem$2 = _Form.Item;

var ConditionForm =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(ConditionForm, _PureComponent);

    function ConditionForm() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ConditionForm);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn$1(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(ConditionForm)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty$1(_assertThisInitialized(_this), 'state', {
        conditionSelect: [],
        selection: [],
        isfirstSVList: false,
        isMulti: false,
        isShowSec: false,
        isShowfirstSV: true,
        callbackArr: []
      });

      _defineProperty$1(
        _assertThisInitialized(_this),
        'factorHandleChange',
        function(value) {
          var setFieldsValue = _this.props.form.setFieldsValue;
          var conditionSelect$$1 = _this.state.conditionSelect;

          _this.setState({
            isfirstSVList: false,
            isShowSec: false
          });

          setFieldsValue({
            'condition-selection': undefined,
            'value-selection': undefined
          }); //通过value反查对应的factorOperate

          function getOperateByFac(value) {
            for (var i = 0; i < conditionSelect$$1.length; i++) {
              if (conditionSelect$$1[i].value == value)
                return conditionSelect$$1[i].factorOperate;
            }

            return '';
          }

          for (var i = 0; i < downList.length; i++) {
            if (value == downList[i].label) {
              _this.setState({
                isfirstSVList: true,
                firstSVList: downList[i].value.map(function(v, index) {
                  return React__default.createElement(
                    _Select.Option,
                    {
                      key: index,
                      value: v
                    },
                    v
                  );
                })
              });

              break;
            }
          }

          setFieldsValue({
            factorLabel: '$'.concat(value)
          });

          _this.setState({
            selection: getOperateByFac(value).split(',')
          });
        }
      );

      _defineProperty$1(
        _assertThisInitialized(_this),
        'selectionHandleChange',
        function(value) {
          var _this$props$form = _this.props.form,
            setFieldsValue = _this$props$form.setFieldsValue,
            getFieldValue = _this$props$form.getFieldValue;
          setFieldsValue({
            'condition-selection': ''.concat(value)
          });
          var cs = getFieldValue('condition-selection');

          if (cs === 'between') {
            _this.setState({
              isShowSec: true
            });
          } else {
            _this.setState({
              isShowSec: false
            });
          }

          if (cs === 'is not null' || cs === 'is null') {
            _this.setState({
              isShowfirstSV: false
            });

            setFieldsValue({
              'value-selection': undefined
            });
          } else {
            _this.setState({
              isShowfirstSV: true
            });
          } //三级下拉框多选

          var cf = getFieldValue('condition-factor');
          var cfMultArr = [
            '应用程序名',
            '执行结果',
            '时间域',
            '审计级别',
            '数据库类型'
          ]; //, '服务端IP',  '物理地址', '主机名'

          if (cfMultArr.includes(cf) && (cs === 'in' || cs === 'not in')) {
            _this.setState(
              {
                isMulti: true
              },
              setFieldsValue({
                'value-selection': undefined
              })
            );
          } else {
            _this.setState(
              {
                isMulti: false
              },
              setFieldsValue({
                'value-selection': undefined
              })
            );
          }
        }
      );

      _defineProperty$1(_assertThisInitialized(_this), 'addSql', function() {
        var _this$props$form2 = _this.props.form,
          getFieldValue = _this$props$form2.getFieldValue,
          setFieldsValue = _this$props$form2.setFieldsValue;
        var isShowfirstSV = _this.state.isShowfirstSV;
        var cs = getFieldValue('condition-selection');
        var vs = getFieldValue('value-selection');
        var ao = getFieldValue('and-or'); //let sqlTextarea = getFieldValue("sql-textarea");

        var vs2 = getFieldValue('value-selection2'); //如果in 或not in要加括号 , 如果是空就空

        var inSql = ''; //in 的情况要对每个逗号给出单引号

        var isBrack = '';

        if (!isShowfirstSV);
        else {
          if (vs == '' || vs == undefined) {
            _Modal.error({
              title: '系统提示',
              okText: '确定',
              content: '\u8BF7\u5C06\u6761\u4EF6\u586B\u5199\u5B8C\u6574\uFF01'
            });

            return;
          }

          if (!(vs instanceof Array) && vs != '' && vs != undefined)
            //下拉框选择就是数组, 否则就是输入框逗号隔开
            vs = vs.split(',');
          if (vs instanceof Array && vs.toString().includes(','))
            //输入框本来用enter隔开, 现在需要用逗号隔开
            vs = vs.toString().split(','); // console.log(
          //   "vs",
          //   vs,
          //   cs,
          //   ao,
          //   `${getFieldValue("factorLabel")}`,
          //   this.validTime(vs[0])
          // );

          inSql =
            vs.length > 1
              ? vs.reduce(function(ac, cv, ci) {
                  if (ci == 1) return "'".concat(ac, "','").concat(cv, "'");
                  return ''.concat(ac, ",'").concat(cv, "'");
                })
              : "'".concat(vs, "'");
          isBrack =
            cs === 'in' || cs === 'not in'
              ? '('.concat(inSql, ')')
              : vs == ''
              ? ''
              : "'".concat(vs, "'");
        }

        var vs2Sql = vs2 ? " and '".concat(vs2, "'") : '';

        if (
          getFieldValue('factorLabel') === '$登录时间' ||
          getFieldValue('factorLabel') === '$退出时间'
        ) {
          if (
            !_this.validTime(vs[0]) ||
            (!_this.validTime(vs2) && cs === 'between')
          ) {
            _Modal.error({
              title: '系统提示',
              okText: '确定',
              content: '\u65F6\u95F4\u683C\u5F0F\u4E0D\u6B63\u786E'
            });

            return;
          }
        }

        if (getFieldValue('factorLabel') === '$返回/影响行数') {
          if (
            !_this.validAllNaturalNum(vs[0]) ||
            vs[0] > 2147483648 ||
            vs[0] < -2147483648
          ) {
            _Modal.error({
              title: '系统提示',
              okText: '确定',
              content:
                '\u8F93\u5165\u7684\u8FD4\u56DE\uFF0F\u5F71\u54CD\u884C\u6570\u8D85\u51FA\u53D6\u503C\u8303\u56F4\u3002'
            });

            return;
          }

          if (
            (!_this.validAllNaturalNum(vs2) ||
              vs2 > 2147483648 ||
              vs2 < -2147483648) &&
            cs === 'between'
          ) {
            _Modal.error({
              title: '系统提示',
              okText: '确定',
              content:
                '\u8F93\u5165\u7684\u8FD4\u56DE\uFF0F\u5F71\u54CD\u884C\u6570\u8D85\u51FA\u53D6\u503C\u8303\u56F4\u3002'
            });

            return;
          }
        }

        var sql = '"'
          .concat(getFieldValue('factorLabel'), '" ')
          .concat(cs, ' ')
          .concat(isBrack)
          .concat(vs2Sql);

        if (sql.includes('undefined')) {
          _Modal.error({
            title: '系统提示',
            okText: '确定',
            content: '\u8BF7\u5C06\u6761\u4EF6\u586B\u5199\u5B8C\u6574\uFF01'
          });

          return;
        } //let nextV = !sqlTextarea ? sql : sqlTextarea + ` ${ao} ${sql}`;
        //nextV = this.convertValue(nextV);

        sql = _this.convertValue(sql); // setFieldsValue({
        //   //and 或or 追加sqltest
        //   "sql-textarea": nextV
        // });

        var callbackArr = _this.state.callbackArr;
        if (callbackArr.length > 0) callbackArr.push(ao);
        callbackArr.push(sql);

        _this.setState({
          callbackArr: callbackArr
        });

        _this.props.callbackParentSql(callbackArr);
      });

      _defineProperty$1(_assertThisInitialized(_this), 'convertValue', function(
        v
      ) {
        v = v.replace('成功', '0');
        v = v.replace('失败', '1');
        v = v.replace('高', '3');
        v = v.replace('中', '2');
        v = v.replace('低', '1');
        return v;
      });

      _defineProperty$1(_assertThisInitialized(_this), 'onTextChange', function(
        v
      ) {
        _this.setState({
          sql: v
        });

        _this.props.callbackParentSql(v);
      });

      _defineProperty$1(_assertThisInitialized(_this), 'validTime', function(
        str
      ) {
        var regDate = /^[0-9]{4}-[0-1]?[0-9]{1}-[0-3]?[0-9]{1} ([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/;
        return regDate.test(str);
      });

      _defineProperty$1(
        _assertThisInitialized(_this),
        'validAllNaturalNum',
        function(str) {
          var re = /^-?[0-9]*$/; //判断字符串是否为正整数

          if (!re.test(str)) {
            return false;
          } else {
            return true;
          }
        }
      );

      return _this;
    }

    _createClass(ConditionForm, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var conditionSelect$$1 = this.props.conditionSelect;
          this.setState({
            conditionSelect: conditionSelect$$1
          }); //console.log("conditionSelect", conditionSelect);
        }
      },
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          //console.log('nextProps', nextProps)
          this.setState({
            conditionSelect: nextProps.conditionSelect
          });
        } //条件因子 下拉框点击事件
      },
      {
        key: 'render',
        value: function render() {
          var getFieldDecorator = this.props.form.getFieldDecorator;
          var _this$state = this.state,
            conditionSelect$$1 = _this$state.conditionSelect,
            selection = _this$state.selection,
            isfirstSVList = _this$state.isfirstSVList,
            firstSVList = _this$state.firstSVList,
            isMulti = _this$state.isMulti,
            isShowSec = _this$state.isShowSec,
            isShowfirstSV = _this$state.isShowfirstSV; //console.log('conditionSelect', conditionSelect)

          var conditionRender = conditionSelect$$1.map(function(v, i) {
            return React__default.createElement(
              _Select.Option,
              {
                key: i,
                value: v.value
              },
              v.label
            );
          });
          var selectionRender = selection.map(function(v, i) {
            return React__default.createElement(
              _Select.Option,
              {
                key: i,
                value: v
              },
              v
            );
          });
          var formItemLayout = {
            labelCol: {
              xs: {
                span: 24
              },
              sm: {
                span: 8
              }
            },
            wrapperCol: {
              xs: {
                span: 24
              },
              sm: {
                span: 12
              }
            }
          };
          return React__default.createElement(
            'div',
            null,
            React__default.createElement(
              _Row,
              {
                gutter: 12
              },
              React__default.createElement(
                _Col,
                {
                  md: 6
                },
                React__default.createElement(
                  FormItem$2,
                  _extends$1({}, formItemLayout, {
                    label: '\u6761\u4EF6\u56E0\u5B50'
                  }),
                  getFieldDecorator('condition-factor')(
                    React__default.createElement(
                      _Select,
                      {
                        placeholder: '\u8BF7\u9009\u62E9',
                        onChange: this.factorHandleChange
                      },
                      conditionRender
                    )
                  )
                )
              ),
              React__default.createElement(
                _Col,
                {
                  md: 3
                },
                getFieldDecorator('factorLabel')(
                  React__default.createElement(_Input, {
                    placeholder: '',
                    disabled: true
                  })
                )
              ),
              React__default.createElement(
                _Col,
                {
                  md: 3
                },
                React__default.createElement(
                  FormItem$2,
                  _extends$1({}, formItemLayout, {
                    label: ''
                  }),
                  getFieldDecorator('condition-selection')(
                    React__default.createElement(
                      _Select,
                      {
                        placeholder: '\u8BF7\u9009\u62E9',
                        onChange: this.selectionHandleChange
                      },
                      selectionRender
                    )
                  )
                )
              ),
              isShowfirstSV
                ? React__default.createElement(
                    _Col,
                    {
                      md: 3
                    },
                    getFieldDecorator('value-selection')(
                      isfirstSVList
                        ? React__default.createElement(
                            _Select,
                            {
                              mode: isMulti ? 'tags' : 'combobox',
                              key: isMulti ? 'tags' : 'combobox',
                              placeholder: '\u8BF7\u9009\u62E9',
                              style: {
                                width: '100%',
                                marginRight: 5
                              }
                            },
                            firstSVList
                          )
                        : React__default.createElement(_Input, {
                            placeholder: '\u8BF7\u8F93\u5165'
                          })
                    )
                  )
                : '',
              isShowSec
                ? React__default.createElement(
                    _Col,
                    {
                      md: 4
                    },
                    React__default.createElement(
                      FormItem$2,
                      _extends$1({}, formItemLayout, {
                        label: 'AND',
                        colon: false
                      }),
                      getFieldDecorator('value-selection2')(
                        React__default.createElement(_Input, {
                          placeholder: '\u8BF7\u8F93\u5165'
                        })
                      )
                    )
                  )
                : '',
              React__default.createElement(
                _Col,
                {
                  md: 5
                },
                getFieldDecorator('and-or', {
                  initialValue: 'AND'
                })(
                  React__default.createElement(
                    _Select,
                    {
                      style: {
                        width: 80,
                        marginRight: 10
                      }
                    },
                    React__default.createElement(
                      _Select.Option,
                      {
                        key: 'and',
                        value: 'AND'
                      },
                      'AND'
                    ),
                    React__default.createElement(
                      _Select.Option,
                      {
                        key: 'or',
                        value: 'OR'
                      },
                      'OR'
                    )
                  )
                ),
                React__default.createElement(
                  _Button,
                  {
                    type: 'primary',
                    onClick: this.addSql
                  },
                  '\u6DFB\u52A0'
                )
              )
            )
          );
        }
      }
    ]);

    return ConditionForm;
  })(React.PureComponent);

ConditionForm.propTypes = {
  conditionSelect: PropTypes.array.isRequired,
  //传入的下拉列表框数组值
  callbackParentSql: PropTypes.func.isRequired //把textarea输入框的值回传出去的回调方法
};
ConditionForm.defaultProps = {
  conditionSelect: [],
  callbackParentSql: function callbackParentSql() {}
};

var ErrorBoundary =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(ErrorBoundary, _React$Component);

    function ErrorBoundary(props) {
      var _this;

      _classCallCheck(this, ErrorBoundary);

      _this = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(ErrorBoundary).call(this, props)
      );
      _this.state = {
        error: null,
        errorInfo: null
      };
      return _this;
    }

    _createClass(ErrorBoundary, [
      {
        key: 'componentDidCatch',
        value: function componentDidCatch(error, errorInfo) {
          // Catch errors in any components below and re-render with error message
          this.setState({
            error: error,
            errorInfo: errorInfo
          }); // You can also log error messages to an error reporting service here
        }
      },
      {
        key: 'render',
        value: function render() {
          if (this.state.errorInfo) {
            // Error path
            return React__default.createElement(
              'div',
              null,
              React__default.createElement('h2', null, '\u51FA\u9519\u4E86.'),
              React__default.createElement(
                'details',
                {
                  style: {
                    whiteSpace: 'pre-wrap'
                  }
                },
                this.state.error && this.state.error.toString(),
                React__default.createElement('br', null),
                this.state.errorInfo.componentStack
              )
            );
          } // Normally, just render children

          return this.props.children;
        }
      }
    ]);

    return ErrorBoundary;
  })(React__default.Component);

var css$6 =
  '.td-ellipsis {\n  border-collapse: collapse;\n  white-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  /* max-width: 300px; */\n}\n';
styleInject(css$6);

/**
 * 超出截断
 * guor
 * 2019-04-19 16:02:02
 */

var Ellipsis =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Ellipsis, _React$Component);

    function Ellipsis() {
      _classCallCheck(this, Ellipsis);

      return _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(Ellipsis).apply(this, arguments)
      );
    }

    _createClass(Ellipsis, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            text = _this$props.text,
            tooltiptext = _this$props.tooltiptext,
            otherProps = _objectWithoutProperties(_this$props, [
              'text',
              'tooltiptext'
            ]);

          if (typeof tooltiptext === 'undefined') {
            tooltiptext = text;
          }

          return React__default.createElement(
            _Tooltip,
            {
              autoAdjustOverflow: true,
              title: tooltiptext,
              arrowPointAtCenter: true
            },
            React__default.createElement(
              'div',
              _extends$1(
                {
                  className: 'td-ellipsis'
                },
                Object.assign({}, otherProps)
              ),
              text
            )
          );
        }
      }
    ]);

    return Ellipsis;
  })(React__default.Component);

Ellipsis.propTypes = {
  /**
    需要显示的text文本
    **/
  text: PropTypes.string.isRequired,

  /**
    扩展显示的tooltipText文本，在出现text与tooltipText不一样的场景时使用
    **/
  tooltiptext: PropTypes.string
};
Ellipsis.defaultProps = {
  text: 'Ellipsis'
};

var css$7 = '.TimeRangePicker-compact .ant-time-picker {\n  width: 50%;\n}\n';
styleInject(css$7);

var InputGroup = _Input.Group;

var TimeRangePicker =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(TimeRangePicker, _Component);

    function TimeRangePicker(props) {
      var _this;

      _classCallCheck(this, TimeRangePicker);

      _this = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(TimeRangePicker).call(this, props)
      );
      _this.state = _objectSpread2({}, _this.translateTime(props.value));
      return _this;
    }

    _createClass(TimeRangePicker, [
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          // console.log(this.props.value,nextProps.value,JSON.stringify(this.props.value) !== JSON.stringify(nextProps.value))
          if (
            JSON.stringify(this.props.value) !== JSON.stringify(nextProps.value)
          ) {
            this.setState(
              _objectSpread2({}, this.translateTime(nextProps.value))
            );
          }
        }
      },
      {
        key: 'translateTime',
        value: function translateTime(val) {
          return {
            startTime: val && val[0] ? moment(val[0], ['hh:mm']) : '',
            endTime: val && val[1] ? moment(val[1], ['hh:mm']) : ''
          };
        }
      },
      {
        key: 'hanldeChange',
        value: function hanldeChange(type, val) {
          var _this2 = this;

          var onChange = this.props.onChange;
          val = val ? val : ''; // console.log(type)

          if (type === 'start') {
            this.setState(
              {
                startTime: val
              },
              function() {
                onChange([
                  _this2.formatTime(_this2.state.startTime),
                  _this2.formatTime(_this2.state.endTime)
                ]);
              }
            );
          } else if (type === 'end') {
            this.setState(
              {
                endTime: val
              },
              function() {
                onChange([
                  _this2.formatTime(_this2.state.startTime),
                  _this2.formatTime(_this2.state.endTime)
                ]);
              }
            );
          }
        }
      },
      {
        key: 'formatTime',
        value: function formatTime(momentTime) {
          var format = this.props.format;
          return momentTime ? moment(momentTime, ['hh:mm']).format(format) : '';
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            value = _this$props.value,
            onChange = _this$props.onChange,
            id = _this$props.id,
            label = _this$props.label,
            otherProps = _objectWithoutProperties(_this$props, [
              'value',
              'onChange',
              'id',
              'label'
            ]);

          var _this$state = this.state,
            startTime = _this$state.startTime,
            endTime = _this$state.endTime;
          return React__default.createElement(
            InputGroup,
            {
              compact: true,
              className: 'TimeRangePicker-compact'
            },
            React__default.createElement(
              _TimePicker,
              _extends$1({}, otherProps, {
                onChange: this.hanldeChange.bind(this, 'start'),
                value: startTime
              })
            ),
            React__default.createElement(
              _TimePicker,
              _extends$1({}, otherProps, {
                onChange: this.hanldeChange.bind(this, 'end'),
                value: endTime
              })
            )
          );
        }
      }
    ]);

    return TimeRangePicker;
  })(React.Component);

var css$8 =
  '.element-text-box > .ant-row {\n  display: inline-block;\n  margin-right: 10px;\n}\n.element-text-box > .ant-form-item {\n  margin-bottom: 0;\n}\n.element-text-box > .ant-form-item > .ant-col-18 {\n  width: 100%;\n}\n.element-noreset > .ant-form-item {\n  width: 100% !important;\n}\n.isBeteen > .ant-row {\n  margin: 0 10px;\n}\n';
styleInject(css$8);

var FormItemFixed =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(FormItemFixed, _Component);

    function FormItemFixed() {
      _classCallCheck(this, FormItemFixed);

      return _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(FormItemFixed).apply(this, arguments)
      );
    }

    _createClass(FormItemFixed, [
      {
        key: 'render',
        value: function render() {
          var firstChildType = React__default.Children.toArray(
            this.props.children
          ).length
            ? _typeof(React__default.Children.toArray(this.props.children)[0])
            : 'string';
          var isResetCss = this.props.isResetCss;
          return React__default.createElement(
            'div',
            {
              className: classNames({
                'element-text-box': isResetCss,
                'element-noreset': !isResetCss,
                isBeteen: firstChildType === 'string'
              }),
              style: this.props.style
            },
            this.props.children
          );
        }
      }
    ]);

    return FormItemFixed;
  })(React.Component);
FormItemFixed.propsTypes = {
  isResetCss: PropTypes.bool
};
FormItemFixed.defaultProps = {
  isResetCss: true
};

var css$9 =
  '.treeTile .ant-tree-child-tree-open li {\n  float: left !important;\n}\n.treeTile .ant-tree-treenode-switcher-open {\n  display: block !important;\n}\n.treeTile .ant-tree-child-tree-open {\n  display: block !important;\n  position: relative !important;\n  top: -32px !important;\n  left: 200px !important;\n  width: calc(-100%);\n  overflow: hidden;\n}\n.treeTile .ant-tree-child-tree > li:first-child {\n  padding-top: 4px !important;\n}\n.treeTile .ant-tree-switcher {\n  visibility: hidden !important;\n}\n.treeTile .ant-tree-treenode-switcher-open::before {\n  display: block;\n  clear: both;\n  height: 0;\n  content: "";\n  visibility: hidden;\n  overflow: hidden;\n}\n.treeNoData {\n  text-align: center;\n  color: #cccccc;\n  margin-bottom: 0px;\n}\n';
styleInject(css$9);

var TreeNode$1 = _Tree.TreeNode;

var TreeTile =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(TreeTile, _Component);

    function TreeTile(props) {
      var _this;

      _classCallCheck(this, TreeTile);

      _this = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf(TreeTile).call(this, props)
      );

      _defineProperty$1(
        _assertThisInitialized(_this),
        'getKeysFromMap',
        function(data, dataSourceKeys) {
          data.map(function(d) {
            if (!!d.children) {
              _this.getKeysFromMap(d.children, dataSourceKeys);
            }

            dataSourceKeys.push(d.key);
          });
          return dataSourceKeys;
        }
      );

      _defineProperty$1(
        _assertThisInitialized(_this),
        'renderTreeNodes',
        function(data) {
          return data.map(function(item) {
            if (item.children) {
              return React__default.createElement(
                TreeNode$1,
                {
                  title: item.title,
                  key: item.key,
                  dataRef: item
                },
                _this.renderTreeNodes(item.children)
              );
            }

            return React__default.createElement(TreeNode$1, item);
          });
        }
      );

      _defineProperty$1(_assertThisInitialized(_this), 'onCheckAll', function(
        e
      ) {
        var dataSourceKeys = _this.state.dataSourceKeys;
        var checkedKeys = e.target.checked ? dataSourceKeys : [];

        _this.setState(
          {
            checkedKeys: checkedKeys,
            indeterminate: false,
            checkAll: e.target.checked
          },
          function() {
            _this.props.onChange(checkedKeys);
          }
        );
      });

      _defineProperty$1(_assertThisInitialized(_this), 'onCheck', function(
        checkedKeys
      ) {
        var dataSourceKeys = _this.state.dataSourceKeys;

        _this.setState(
          {
            checkedKeys: checkedKeys,
            indeterminate:
              !!checkedKeys &&
              checkedKeys.length !== 0 &&
              checkedKeys.length < dataSourceKeys.length,
            checkAll:
              !!checkedKeys && checkedKeys.length === dataSourceKeys.length
          },
          function() {
            _this.props.onChange(checkedKeys);
          }
        );
      });

      _this.state = {
        indeterminate: false,
        checkAll: false,
        dataSourceKeys: [],
        checkedKeys: []
      };
      return _this;
    }

    _createClass(TreeTile, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var dataSource = this.props.dataSource;
          var dataSourceKeys = this.getKeysFromMap(dataSource, []);
          this.setState({
            dataSourceKeys: dataSourceKeys
          });
          var checkedKeys = this.props.checkedKeys;

          if (checkedKeys instanceof Array) {
            this.setState({
              checkedKeys: checkedKeys
            });
          } else {
            this.setState({
              checkedKeys: []
            });
          }
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            title = _this$props.title,
            dataSource = _this$props.dataSource;
          var checkedKeys = this.state.checkedKeys;
          return React__default.createElement(
            _Card,
            {
              size: 'small',
              title: title,
              extra: React__default.createElement(
                _Checkbox,
                {
                  onChange: this.onCheckAll,
                  indeterminate: this.state.indeterminate,
                  checked: this.state.checkAll
                },
                '\u5168\u9009'
              ),
              style: {
                width: '100%'
              }
            },
            !!dataSource && dataSource.length > 0
              ? React__default.createElement(
                  _Tree,
                  {
                    className: 'treeTile',
                    name: 'tree',
                    checkable: true,
                    blockNode: false,
                    defaultExpandAll: true,
                    onCheck: this.onCheck,
                    checkedKeys: checkedKeys
                  },
                  this.renderTreeNodes(dataSource)
                )
              : React__default.createElement(
                  'p',
                  {
                    className: 'treeNoData'
                  },
                  'no data'
                )
          );
        }
      }
    ]);

    return TreeTile;
  })(React.Component);

TreeTile.propTypes = {
  title: PropTypes.string,
  checkedKeys: PropTypes.array,
  dataSource: PropTypes.array.isRequired
};
TreeTile.defaultProps = {
  title: '请选择',
  checkedKeys: [],
  dataSource: []
};

var css$a =
  '.ant-collapse-header {\n  outline: none;\n  box-shadow: none;\n}\n.ant-collapse-header .CollapsePanel-header {\n  line-height: 32px;\n  position: relative;\n  padding: 10px;\n}\n.ant-collapse-header .CollapsePanel-header .CollapsePanel-title {\n  margin-bottom: 0;\n}\n.ant-collapse-header .CollapsePanel-header .CollapsePanel-extra {\n  float: right;\n}\n.ant-collapse-header .CollapsePanel-header .CollapsePanel-extra .ant-form-item {\n  margin-bottom: 0;\n}\n.ant-collapse-header .CollapsePanel-header .CollapsePanel-extra .ant-form-item .ant-form-item-control {\n  line-height: 32px;\n}\n';
styleInject(css$a);

var Panel$1 = _Collapse.Panel;

var CollapsePanel =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(CollapsePanel, _Component);

    function CollapsePanel() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, CollapsePanel);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn$1(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(CollapsePanel)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty$1(_assertThisInitialized(_this), 'state', {
        active: true
      });

      return _this;
    }

    _createClass(CollapsePanel, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.setActiveStatus();
        }
      },
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
          this.setActiveStatus();
        }
      },
      {
        key: 'setActiveStatus',
        value: function setActiveStatus() {
          var control = this.props.control;
          this.setState({
            active: this.isExtraIsReactDom(control)
              ? this.fieldValueChange()
              : true
          });
        }
      },
      {
        key: 'fieldValueChange',
        value: function fieldValueChange() {
          var formRef = this.context.formRef;
          var _this$props = this.props,
            control = _this$props.control,
            closeValues = _this$props.closeValues;
          /**
           * closeValues 关闭值数组【默认为空数组】
           * 若closeValues 传入则判断值是否在该数组中 存在则返回false
           * 若未传入则值转boolean
           */

          return closeValues.length
            ? closeValues.filter(function(it) {
                return it === formRef.getFieldValue(control.props.name);
              }).length === 0
            : Boolean(formRef.getFieldValue(control.props.name));
        }
      },
      {
        key: 'isExtraIsReactDom',
        value: function isExtraIsReactDom(extra) {
          return (
            _typeof(extra) === 'object' && _typeof(extra.$$typeof) === 'symbol'
          );
        }
      },
      {
        key: 'renderHeader',
        value: function renderHeader() {
          var title = this.props.title;
          return React__default.createElement(
            'div',
            {
              className: 'CollapsePanel-header'
            },
            React__default.createElement(
              'h5',
              {
                className: 'CollapsePanel-title'
              },
              title,
              React__default.createElement(
                'div',
                {
                  className: 'CollapsePanel-extra'
                },
                this.renderExtra()
              )
            )
          );
        }
      },
      {
        key: 'renderExtra',
        value: function renderExtra() {
          var control = this.props.control;
          return this.isExtraIsReactDom(control)
            ? React__default.createElement(FormItem, {}, control)
            : control;
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            children = _this$props2.children,
            title = _this$props2.title,
            control = _this$props2.control,
            renderable = _this$props2.renderable,
            otherProps = _objectWithoutProperties(_this$props2, [
              'children',
              'title',
              'control',
              'renderable'
            ]);

          var formRef = this.context.formRef;
          var active = this.state.active;
          var renderProps = true;

          if (
            (typeof renderable === 'boolean' && renderable === false) ||
            (typeof renderable === 'function' &&
              renderable.apply(this, [formRef]) === false)
          ) {
            renderProps = false;
          }
          /**
           * fixed ：如果children 没传  则不论active为什么  都不显示body
           */

          return renderProps
            ? React__default.createElement(
                Panel$1,
                _extends$1(
                  {
                    header: this.renderHeader()
                  },
                  otherProps,
                  {
                    isActive: children ? active : false
                  }
                ),
                children
              )
            : null;
        }
      }
    ]);

    return CollapsePanel;
  })(React.Component);

_defineProperty$1(CollapsePanel, 'contextTypes', {
  formRef: PropTypes.object
});
CollapsePanel.propTypes = {
  closeValues: PropTypes.array
};
CollapsePanel.defaultProps = {
  closeValues: [],
  prefixCls: 'ant-collapse'
};

var ref = React__default.createRef();

var Step =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Step, _Component);

    function Step() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Step);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn$1(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Step)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty$1(_assertThisInitialized(_this), 'state', {
        currentIndex: 0,
        step: 1
      });

      _defineProperty$1(_assertThisInitialized(_this), 'goToStep', function(
        step
      ) {
        var _assertThisInitialize = _assertThisInitialized(_this),
          steps = _assertThisInitialize.props.steps;

        _this.props.history.push(steps[step - 1].path);

        _this.setState({
          currentIndex: step - 1,
          step: step
        });
      });

      return _this;
    }

    _createClass(Step, [
      {
        key: 'componentWillMount',
        value: function componentWillMount() {
          var currentStepRoute = this.props.location.pathname.slice(1);
          var currentStepNum = 1;
          this.props.steps.map(function(v, index) {
            /* istanbul ignore else */
            if (currentStepRoute.indexOf(v.path) > -1) {
              currentStepNum = index + 1;
            }
          });
          this.setState({
            currentIndex: currentStepNum - 1,
            step: currentStepNum
          });
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var steps = this.props.steps;
          var _this$state = this.state,
            step = _this$state.step,
            currentIndex = _this$state.currentIndex;
          /* istanbul ignore next */

          var renderDom = steps[currentIndex] || steps[0];
          return React__default.createElement(
            React__default.Fragment,
            null,
            React__default.createElement(
              _Steps,
              {
                current: currentIndex
              },
              steps.map(function(item) {
                return React__default.createElement(_Steps.Step, {
                  key: item.text,
                  title: item.text,
                  description: item.description
                });
              })
            ),
            React__default.createElement(
              renderDom.component,
              _extends$1(
                {
                  ref: ref
                },
                this.props,
                {
                  goToStep: this.goToStep
                }
              )
            ),
            React__default.createElement(
              _Button.Group,
              null,
              (function() {
                switch (step) {
                  case 1:
                    return '';

                  case steps.length:
                    /* istanbul ignore next */
                    return _this2.props.showFinalLastStep
                      ? React__default.createElement(
                          _Button,
                          {
                            onClick: function onClick() {
                              return _this2.goToStep(step - 1);
                            }
                          },
                          '上一步'
                        )
                      : '';

                  default:
                    return React__default.createElement(
                      _Button,
                      {
                        onClick: function onClick() {
                          return _this2.goToStep(step - 1);
                        }
                      },
                      '上一步'
                    );
                }
              })(),
              step !== steps.length
                ? React__default.createElement(
                    _Button,
                    {
                      onClick: function onClick() {
                        return ref.current.onSubmit('handleSubmit');
                      }
                    },
                    '下一步'
                  )
                : '',
              step !== steps.length && this.props.showCancel
                ? React__default.createElement(
                    _Button,
                    {
                      onClick: function onClick() {
                        return _this2.props.history.push(_this2.props.backPath);
                      }
                    },
                    this.props.cancelText
                  )
                : '',
              step === steps.length
                ? React__default.createElement(
                    _Button,
                    {
                      onClick: function onClick() {
                        return (
                          /* istanbul ignore next */
                          _this2.props.finalSubmitFunctionName
                            ? ref.current &&
                                ref.current[
                                  _this2.props.finalSubmitFunctionName
                                ]()
                            : ref.current.onSubmit('handleSubmit')
                        );
                      }
                    },
                    this.props.finishText
                  )
                : ''
            )
          );
        }
      }
    ]);

    return Step;
  })(React.Component);
Step.defaultProps = {
  steps: [],
  cancelText: '取消',
  finishText: '完成',
  showFinalLastStep: true,
  showCancel: true,
  backPath: '/',
  location: {
    pathname: ''
  },
  history: {
    push: function push() {}
  }
};

var ExtraColumnForTest =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(ExtraColumnForTest, _React$Component);

    function ExtraColumnForTest() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ExtraColumnForTest);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn$1(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(ExtraColumnForTest)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty$1(_assertThisInitialized(_this), 'changeStart', function(
        e
      ) {
        var data = _this.state.data;
        var startValue = e.target.value === '' ? undefined : e.target.value;

        _this.props.onChange(
          Object.assign(e, {
            target: {
              value: [startValue, data && data[1], data && data[2]]
            }
          })
        );
      });

      _defineProperty$1(_assertThisInitialized(_this), 'changeEnd', function(
        e
      ) {
        var data = _this.state.data;
        var endValue = e.target.value === '' ? undefined : e.target.value;

        _this.props.onChange(
          Object.assign(e, {
            target: {
              value: [data && data[0], data && data[1], endValue]
            }
          })
        );
      });

      _defineProperty$1(
        _assertThisInitialized(_this),
        'renderDomByType',
        function() {
          var dom;
          var type = _this.props.type;

          switch (type) {
            case 'DatePicker':
              dom = _this.renderDatePickerDom();
              break;
            // ...

            default:
              dom = _this.renderDom();
          }

          return dom;
        }
      );

      _defineProperty$1(
        _assertThisInitialized(_this),
        'renderDatePickerDom',
        function() {
          return 'this is DatePickerDom';
        }
      );

      return _this;
    }

    _createClass(ExtraColumnForTest, [
      {
        key: 'componentWillMount',
        value: function componentWillMount() {
          var data = this.props.data || this.props.value;
          this.setState({
            data: data || '',
            start: data && data[0],
            end: data && data[2]
          });
        }
      },
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextprops) {
          var _this2 = this;

          /* istanbul ignore else */
          if (
            nextprops.value !== undefined &&
            nextprops.value !== this.state.data
          ) {
            // 新增时初始数组为["","",""]
            nextprops.value[1] = this.props.splitSymbol || '-';
            this.setState({
              data: nextprops.value,
              start: nextprops.value && nextprops.value[0],
              end: nextprops.value && nextprops.value[2]
            });
            /* istanbul ignore next */

            this.props.form.setFieldsValue(
              {
                start: nextprops.value && nextprops.value[0],
                end: nextprops.value && nextprops.value[2]
              },
              function() {
                _this2.props.form.validateFields(['start', 'end'], function(
                  err,
                  values
                ) {});
              }
            );
          }
        }
      },
      {
        key: 'renderDom',
        value: function renderDom() {
          var _this$state = this.state,
            start = _this$state.start,
            end = _this$state.end;
          var _this$props = this.props,
            getFieldDecorator = _this$props.form.getFieldDecorator,
            editConfig = _this$props.editConfig;
          var startConfig = {};
          var endConfig = {};

          if (editConfig instanceof Array) {
            startConfig = editConfig[0];
            endConfig = editConfig[1];
          } else {
            startConfig = editConfig;
            endConfig = editConfig;
          }

          return React__default.createElement(
            _Input.Group,
            {
              className: 'ExtraColumn'
            },
            React__default.createElement(
              _Row,
              null,
              React__default.createElement(
                _Col,
                {
                  span: 10
                },
                React__default.createElement(
                  _Form.Item,
                  null,
                  getFieldDecorator(
                    'start',
                    _objectSpread2({}, startConfig, {
                      initialValue: start
                    })
                  )(
                    React__default.createElement(_Input, {
                      onChange: this.changeStart
                    })
                  )
                )
              ),
              React__default.createElement(_Col, {
                span: 2
              }),
              React__default.createElement(
                _Col,
                {
                  span: 10
                },
                React__default.createElement(
                  _Form.Item,
                  null,
                  getFieldDecorator(
                    'end',
                    _objectSpread2({}, endConfig, {
                      initialValue: end
                    })
                  )(
                    React__default.createElement(_Input, {
                      onChange: this.changeEnd
                    })
                  )
                )
              )
            )
          );
        }
      },
      {
        key: 'render',
        value: function render() {
          return this.renderDomByType();
        }
      }
    ]);

    return ExtraColumnForTest;
  })(React__default.Component);
var index$1 = _Form.create()(ExtraColumnForTest);

exports.AdvancedSearch = AdvancedSearchForm;
exports.BaseForm = SubmitForm;
exports.FormItem = FormItem;
exports.ButtonGroups = ButtonGroups;
exports.WrapperDatePicker = WrapperDatePicker;
exports.DataTable = DataTable;
exports.Permission = Permission;
exports.Panel = Panel;
exports.ModalAndView = ModalAndView;
exports.TreeView = index;
exports.TabsPanel = TabsPanel;
exports.PropertyTable = PropertyTable;
exports.TransferView = TransferView;
exports.EditTable = EditTable;
exports.DetailTable = DetailTable;
exports.FieldSet = FieldSet;
exports.ConditionForm = ConditionForm;
exports.ErrorBoundary = ErrorBoundary;
exports.Ellipsis = Ellipsis;
exports.TimeRangePicker = TimeRangePicker;
exports.FormItemFixed = FormItemFixed;
exports.TreeTile = TreeTile;
exports.CollapsePanel = CollapsePanel;
exports.Step = Step;
exports.ExtraColumn = index$1;
