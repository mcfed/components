import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";

export default class WrapperDatePicker extends Component{

  // constructor(props){
  //   super(props)
  //   if(props.value instanceof Array){
  //     this.state={
  //       value: (props.value && props.value.length==2) ? [new moment(props.value[0],props.format),new moment(props.value[1],props.format)]:null
  //     }
  //   }else{
  //     this.state={
  //       value: (props.value && props.value!== "") ? new moment(props.value,props.format):null
  //     }
  //   }
  // }
  constructor(props){
    super(props)
    this.translateVal2State(props.value,props.format)
    // if(props.value instanceof Array){
    //   this.state={
    //     value: (props.value && props.value.length==2) ? [ moment(moment(props.value[0]).format(props.format)),moment(moment(props.value[1]).format(props.format))]:null
    //   }
    // }else{
    //   this.state={
    //     value: (props.value && props.value!== "") ? new moment(props.value,props.format):null
    //   }
    // }
  }

  // componentWillReceiveProps(nextProps){
  //   if(JSON.stringify(nextProps.value)!==JSON.stringify(this.props.value)){
  //     if(nextProps.value instanceof Array){
  //       console.log(nextProps.value)
  //       this.setState({
  //         value: (nextProps.value && nextProps.value.length==2 && nextProps.value[0]!=="" && nextProps.value[1] !=="") ? [new moment(nextProps.value[0],nextProps.format),new moment(nextProps.value[1],nextProps.format)]:null
  //       })
  //     }else{
  //       this.setState({
  //         value: (nextProps.value && nextProps.value!== "") ? new moment(nextProps.value,nextProps.format):null
  //       })
  //     }
  //   }
  // }
  componentWillReceiveProps(nextProps){
    if(JSON.stringify(nextProps.value)!==JSON.stringify(this.props.value)){
      this.translateVal2State(nextProps.value,nextProps.format)
      // if(nextProps.value instanceof Array){
      //   this.setState({
      //     value: (nextProps.value && nextProps.value.length==2 && nextProps.value[0]!=="" && nextProps.value[1] !=="") ? [ moment(moment(nextProps.value[0]).format(nextProps.format)),moment(moment(nextProps.value[1]).format(nextProps.format))]:null
      //   })
      // }else{
      //   this.setState({
      //     value: (nextProps.value && nextProps.value!== "") ? new moment(nextProps.value,nextProps.format):null
      //   })
      // }
    }
  }

  translateVal2State (value,format) {
    if(value instanceof Array){
      this.setState({
        value: (value && value.length==2) ? [ moment(moment(value[0]).format(format)),moment(moment(value[1]).format(format))]:null
      })
    }else{
      this.setState({
        value: (value && value!== "") ? new moment(value,format):null
      })
    }
  }

  onChange(date, dateString) {
    let { onChange, children } = this.props;
    // const format=children.proxps.format
    const { format, valueFormat } = children.props;
    if (date instanceof Array) {
      if (date.length == 0) {
        this.setState(
          {
            value: date
          },
          onChange(undefined)
        );
      } else {
        // console.log(format,date[0].format(format),date[1].format(format))
        this.setState(
          {
            value: date
          },
          () => {
            /*根据valueFormat判断是否需要转换输出格式，时间戳*/
            if (valueFormat) {
              if (valueFormat.toLocaleLowerCase() === "x") {
                onChange([
                  Number(moment(date[0].format(format)).format(valueFormat)),
                  Number(moment(date[1].format(format)).format(valueFormat))
                ]);
              } else {
                onChange([
                  moment(date[0].format(format)).format(valueFormat),
                  moment(date[1].format(format)).format(valueFormat)
                ]);
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
        () => {
          if (valueFormat) {
            if (valueFormat.toLocaleLowerCase() === "x") {
              onChange(Number(moment(date.format(format)).format(valueFormat)));
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

  render() {
    let { children, valueFormat, ...otherProps } = this.props;
    let { value } = this.state;
    // console.log(value)
    return React.cloneElement(children, {
      ...otherProps,
      value: value,
      onChange: this.onChange.bind(this)
    });
  }
}

WrapperDatePicker.propTypes = {
  /**
  组件传出的时间格式，同moment.format 格式
  **/
  valueFormat: PropTypes.string
};
