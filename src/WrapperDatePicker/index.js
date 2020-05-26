import React, {Component} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default class WrapperDatePicker extends Component {
  constructor(props) {
    super(props);
    if (props.value instanceof Array) {
      // console.log('condtructor',props.value)
      this.state = {
        value:
          props.value && props.value.length == 2
            ? [
                moment(moment(props.value[0]).format(props.format)),
                moment(moment(props.value[1]).format(props.format))
              ]
            : null
      };
    } else {
      this.state = {
        value:
          props.value && props.value !== ''
            ? new moment(props.value, props.format)
            : null
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.value) !== JSON.stringify(this.props.value)) {
      this.translateVal2State(nextProps.value, nextProps.format);
    }
  }

  translateVal2State(value, format) {
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

  onChange(date, dateString) {
    let {onChange, children} = this.props;
    // const format=children.proxps.format
    // wrapperdatepick 在formitem中是隐式调用的 所以只有children 的属性暴露出来
    const {format, valueFormat, timeRange, timeRangeType} = children.props;
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
          () => {
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
                    Number(moment(date[0].format(format)).format(valueFormat)),
                    Number(moment(date[1].format(format)).format(valueFormat))
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
        () => {
          if (valueFormat) {
            if (valueFormat.toLocaleLowerCase() === 'x') {
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
    let {children, valueFormat, ...otherProps} = this.props;
    let {value} = this.state;
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
