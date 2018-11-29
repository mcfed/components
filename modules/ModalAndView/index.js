import React, {Component, PropTypes,Children} from 'react'
import {Modal} from 'antd'

class ModalAndView extends Component {

  handleBackRoute() {
    let {actions, history,router} = this.props
  //  actions.backRoute(router)
  }
  handleSaveRoute(){
    let { formView } =this.refs
    formView.onSubmit()
  }

  render() {
    var {route, children,...otherProps} = this.props
//	console.log(this.props)
    return (
      <Modal title={"titl"} visible={true} maskClosable={false} onCancel={this.handleBackRoute.bind(this)} onOk={this.handleSaveRoute.bind(this)} {...otherProps}>
        {
          React.cloneElement(children,Object.assign({},otherProps,{
            ref:"formView"
          }))
        }
      </Modal>
    )
  }
}

//export default withRouter(ModalAndView)
export default ModalAndView
