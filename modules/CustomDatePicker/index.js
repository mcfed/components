import React,{Component} from 'react'
import {DatePicker} from 'antd'
import moment from 'moment'

export default class CustomDatePicker extends Component{
    constructor(props){
      super(props)
      this.state={
        value: (props.value && props.value!== "") ? new moment(props.value,props.format):null
      }
    }

    componentWillReceiveProps(nextProps){
      if(JSON.stringify(nextProps.value)!==JSON.stringify(this.props.value)){
        this.setState({
          value: (nextProps.value && nextProps.value!== "") ? new moment(nextProps.value,nextProps.format):null
        })
      }
    }

    onChange(date, dateString){
      this.setState({
        value:date
      })
    }

    onOk(){
      const { onChange,format } = this.props
      onChange(this.state.value.format(format))
    }

    render(){
      const {...otherProps}= this.props
      return (<DatePicker {...otherProps} value={this.state.value} onChange={this.onChange.bind(this)} onOk={this.onOk.bind(this)}/>)
    }
}
