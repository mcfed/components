import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Select, Input, Form, DatePicker } from "antd";
import fetch from "cross-fetch";
import WrapperDatePicker from "../WrapperDatePicker";
import { TreeSelectPicker } from "../TreeView";

import { stringify } from "qs";

const Option = Select.Option;

export default class FormItem extends Component {
  constructor(props) {
    super(props);
    let { children } = props;
    let field = children;
    if (children.props.options instanceof Array) {
      this.state = {
        childData: children.props.options
      };
    } else {
      this.state = {
        childData: []
      };
    }
  }

  static defaultProps = {
    containerTo: true
  };
  static contextTypes = {
    formRef: PropTypes.object,
    formLayout: PropTypes.object,
    colNumber: PropTypes.number
  };

  componentWillReceiveProps(nextProps) {
    let { children } = nextProps;
    let field = children;
    let { formRef } = this.context;
    //  console.log(JSON.stringify(field.props.options),JSON.stringify(this.props.children.props.options))
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
      typeof field.props.fetch === "string" &&
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
        typeof field.props.params === "function" ||
        (typeof field.props.params === "string" &&
          JSON.stringify(field.props.params) !==
            JSON.stringify(this.props.children.props.params))
      ) {
        this.fetchData(
          field.props.fetch,
          field.props.params,
          field.props.fetchCallback
        );
        // console.log("params")
      }
    }
  }
  componentDidMount() {
    let { children } = this.props;
    let field = children;
    if (
      typeof field.props.fetch === "string" &&
      field.props.fetch.length > -1
    ) {
      if (field.props.params) {
        //规避 params 无法判断差异引起首次多发请求问题，
        // 当fetch 与 params 属性同时配置，首次请求交由componentWillReceiveProps里方法进行发送
      } else {
        this.fetchData(
          field.props.fetch,
          field.props.params,
          field.props.fetchCallback
        );
      }
    }
  }
  /**
   * [fetchData 获取远程接口数据]
   * @param  {[type]} fetchUrl [description]
   * @return {[type]}          [description]
   */
  fetchData(fetchUrl, params, callback) {
    // let body={}]
    let { formRef } = this.context;
    let url;
    if (params) {
      if (typeof params === "function") {
        url = [fetchUrl, stringify(params.apply(this, [formRef]))].join("?");
      } else {
        url = [fetchUrl, stringify(params)].join("?");
      }
    } else {
      url = fetchUrl;
    }
    fetch(url, {
      method: "GET"
    })
      .then(json => {
        return json.json();
      })
      .then(result => {
        if (result.code == 0) {
          this.setChildData(
            callback ? callback(result, formRef) : result.data.items
          );
          // if (callback) {
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
  setChildData(dataList) {
    if (!(dataList instanceof Array)) {
      throw `childData数据格式有误`;
    }
    this.setState({
      childData: dataList || []
    });
  }
  renderField() {
    let { children, containerTo } = this.props;
    let { childData } = this.state;
    let field = children;
    let { defaultValue, renderable, disabled, ...otherProps } = field.props;
    let { formRef, formLayout } = this.context;
    let containerToProp = {};
    let treeDataProp = {};
    let disabledProp = {};
    // console.log(otherProps)
    if (disabled && typeof disabled === "function") {
      disabledProp = {
        disabled: disabled.apply(this, [formRef])
      };
    } else if (disabled && typeof disabled === "boolean") {
      disabledProp = {
        disabled: disabled
      };
    }

    if (
      containerTo &&
      field.type.name === "Select" &&
      !field.props.changeCalendarContainer
    ) {
      containerToProp = {
        getPopupContainer: triggerNode => triggerNode.parentNode
      };
    }
    if (
      field.type.name == "TreeSelectPicker" ||
      field.type.name == "TreeView"
    ) {
      treeDataProp = {
        treeData: this.loopTreeData(childData)
      };
    }

    // console.log(containerToProp,field.type.name)
    if (field.type.name === "PickerWrapper") {
      return React.createElement(
        WrapperDatePicker,
        Object.assign({}, otherProps, disabledProp),
        field
      );
    } else {
      if (childData.length === 0) {
        return React.createElement(
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
        return React.createElement(
          field.type,
          Object.assign(
            otherProps,
            containerToProp,
            treeDataProp,
            disabledProp
          ),
          childData.map(
            (d, idx) => field.props.renderItem && field.props.renderItem(d, idx)
          )
        );
      } else {
        return React.createElement(
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
  loopTreeData(data) {
    return data.map(item => {
      if (item.children && item.children.length) {
        return Object.assign(
          item,
          { title: item.text, value: item.id, key: item.id },
          { children: this.loopTreeData(item.children) }
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
  render() {
    let element = this.props.children;
    let { name, label, format } = element.props;
    let {
      defaultValue,
      allowClear,
      hidden,
      disabled,
      renderable,
      ...otherProps
    } = element.props;
    let { formRef, formLayout, colNumber } = this.context;
    const { getFieldDecorator } = formRef;
    let styles = {};
    let renderProps = true;

    if (element.type.name === "Input" && element.props.type === "hidden") {
      styles = {
        style: { marginBottom: 0 }
      };
    }
    if (element.props.hidden == true) {
      styles = {
        style: { display: "none" }
      };
    }
    //
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
      (typeof renderable === "boolean" && renderable === false) ||
      (typeof renderable === "function" &&
        renderable.apply(this, [formRef]) === false)
    ) {
      renderProps = false;
    }
    return renderProps ? (
      <Form.Item
        label={label}
        {...Object.assign({}, formLayout, this.props)}
        {...styles}
      >
        {getFieldDecorator(name, {
          ...otherProps,
          initialValue: defaultValue,
          hidden: element.props.hidden || false
        })(this.renderField())}
      </Form.Item>
    ) : null;
  }
}
