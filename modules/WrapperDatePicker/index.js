import React,{Component} from 'react'
import moment from 'moment'

export default class WrapperDatePicker extends Component{

  constructor(props){
    super(props)
    if(props.value instanceof Array){
      this.state={
        value: (props.value && props.value.length==2) ? [new moment(props.value[0],props.format),new moment(props.value[1],props.format)]:null
      }
    }else{
      this.state={
        value: (props.value && props.value!== "") ? new moment(props.value,props.format):null
      }
    }
  }

  componentWillReceiveProps(nextProps){
    if(JSON.stringify(nextProps.value)!==JSON.stringify(this.props.value)){
      if(nextProps.value instanceof Array){
        this.setState({
          value: (nextProps.value && nextProps.value.length==2 && nextProps.value[0]!=="" && nextProps.value[1] !=="") ? [new moment(nextProps.value[0],nextProps.format),new moment(nextProps.value[1],nextProps.format)]:null
        })
      }else{
        this.setState({
          value: (nextProps.value && nextProps.value!== "") ? new moment(nextProps.value,nextProps.format):null
        })
      }
    }
  }

  onChange(date,dateString){
    let {onChange,children} = this.props
    const format=children.props.format
    if(date instanceof Array){
      if(date.length==0){
        this.setState({
          value:date
        },onChange(undefined))
      }else{
        // console.log(format,date[0].format(format),date[1].format(format))
        this.setState({
          value:date
        },onChange([date[0].format(format),date[1].format(format)]))
      }
    }else{
      this.setState({
        value:date
      },onChange(date.format(format)))
    }
  }

  render(){
    let {children,otherProps}= this.props
    let {value}= this.state
    return React.cloneElement(children,{...otherProps,value:value,onChange:this.onChange.bind(this)})
  }
}
