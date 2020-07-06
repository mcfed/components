import React from 'react';
import moment, {Moment} from 'moment';

//format:'YYYY-MM-DD HH:mm:ss'
//value:any
// defaultTrggier?:'onChange'
//timeRange?:false
//timeRangeType?:'day'

interface WrapperDatePickerProps {
  children: React.ReactElement;
  onChange?: any;
  value?: any;
  valueFormat?: string;
  isInitMoment?: boolean;
  format: string;
  defaultTrggier?: string;
  timeRange?: boolean;
  timeRangeType?: string;
}
interface wrapperDatePickerState {
  value: any;
  valueFormatFinal: string;
}

export default class WrapperDatePicker extends React.Component<
  WrapperDatePickerProps,
  wrapperDatePickerState
> {
  static defaultProps = {
    defaultTrggier: 'onChange',
    timeRange: false,
    isInitMoment: true,
    timeRangeType: 'day'
  };
  constructor(props: WrapperDatePickerProps) {
    super(props);
    this.state = {
      value: this.valueInit(props),
      valueFormatFinal: this.translateValueFormat(props)
    };
  }
  static getDerivedStateFromProps(
    nextprops: WrapperDatePickerProps,
    prevstate: wrapperDatePickerState
  ) {
    // console.log(nextprops, prevstate);
  }
  // componentDidUpdate(prevProps:WrapperDatePickerProps) {
  //   if(JSON.stringify(prevProps) !== JSON.stringify(this.props)){
  //     this.setState({
  //       value: this.valueInit(this.props),
  //       valueFormatFinal: this.translateValueFormat(this.props)
  //     });
  //   }
  // }
  translateValueFormat(props: WrapperDatePickerProps) {
    return props.valueFormat !== undefined ? props.valueFormat : props.format;
  }
  valueInit(props: WrapperDatePickerProps) {
    const {value, format} = props;
    return this.isValueArray(value)
      ? this.array2value(value)
      : this.single2value(value, format);
  }

  array2value(arrayValue: any[]) {
    const {format} = this.props;
    if (arrayValue.length === 0) {
      return undefined;
    }
    return [
      this.single2value(arrayValue[0], format),
      this.single2value(arrayValue[1], format)
    ];
  }
  single2value(singleValue: any, format: string) {
    const {isInitMoment} = this.props;
    if (singleValue === undefined || singleValue === '') {
      return undefined;
    }
    return isInitMoment
      ? moment(moment(singleValue).format(format))
      : moment(singleValue).format(format);
  }
  private isValueTimestamp(valueFormat: string) {
    return valueFormat.toLocaleLowerCase() === 'x';
  }
  private isValueArray(value: any) {
    return value instanceof Array;
  }
  private formatOnchangeVal(date: any[]) {
    const {onChange, timeRange, timeRangeType} = this.props;
    const {valueFormatFinal} = this.state;
    if (date.length === 0) {
      return date;
    }
    let onChangeVal = timeRange
      ? [
          date[0].startOf(timeRangeType).format(valueFormatFinal),
          date[1].endOf(timeRangeType).format(valueFormatFinal)
        ]
      : [date[0].format(valueFormatFinal), date[1].format(valueFormatFinal)];
    if (this.isValueTimestamp(valueFormatFinal)) {
      onChangeVal = onChangeVal.map(it => Number(it));
    }
    onChange(onChangeVal);
  }
  onChange(date: any, dateString: string) {
    const {onChange} = this.props;
    const {valueFormatFinal} = this.state;
    this.setState(
      {
        value: date
      },
      () => {
        if (this.isValueArray(date)) {
          this.formatOnchangeVal(date);
        } else {
          let onChangeVal = moment(date).format(valueFormatFinal);
          this.isValueTimestamp(valueFormatFinal)
            ? onChange(Number(onChangeVal))
            : onChange(onChangeVal);
        }
      }
    );
  }
  render() {
    const {
      children,
      valueFormat,
      defaultTrggier,
      timeRange,
      timeRangeType
    } = this.props;
    const {value} = this.state;
    return React.cloneElement(children, {
      value: value,
      //@ts-ignore
      [defaultTrggier]: this.onChange.bind(this)
    });
  }
}
