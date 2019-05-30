import React,{Component} from 'react'
import {
  TimePicker,
  Input,
} from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'

const InputGroup = Input.Group


export default class TimeRangePicker extends Component{
  constructor(props){
    super(props)
    this.state = {
      startTime : props.value ? moment(props.value[0]) : "",
      endTime : props.value ? moment(props.value[1]) : ""
    }
  }
  handleChange(type,val){
    let {onChange} = this.props

    if(type === 'start'){
      this.setState({
        startTime:val
      },()=>{
        onChange([this.formatTime(this.state.startTime),this.formatTime(this.state.endTime)])
      })
    }else if(type === 'end'){
      this.setState({
        endTime:val
      },()=>{
        onChange([this.formatTime(this.state.startTime),this.formatTime(this.state.endTime)])
      })
    }
    // console.log(type,val)
  }

  formatTime(momentTime){
    let {format} = this.props
    return moment(momentTime).format(format)
  }

  render(){
    let {format} = this.props
    let {startTime, endTime} = this.state
    return <InputGroup compact>
      <TimePicker onChange={this.handleChange.bind(this,'start')} defaultValue={startTime} format={format}/>
      <TimePicker onChange={this.handleChange.bind(this,'end')} defaultValue={endTime} format={format}/>
    </InputGroup>
  }
}

TimeRangePicker.propTypes = {
  value:PropTypes.array,
  format:PropTypes.string,
}
TimeRangePicker.defaultProps = {
  format:'YYYY-MM-DD'
}
