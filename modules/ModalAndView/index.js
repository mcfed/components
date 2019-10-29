import React, { Component } from "react";
import { Modal } from "antd";

class ModalAndView extends Component {
  handleBackRoute() {
    let { actions, history, router } = this.props;
    //  actions.backRoute(router)
  }
  handleSaveRoute() {
    let { formView } = this.refs;
    formView.onSubmit();
  }

  render() {
    var { route, children, ...otherProps } = this.props;
    return (
      <Modal
        title={"title"}
        visible={true}
        maskClosable={false}
        onCancel={this.handleBackRoute.bind(this)}
        onOk={this.handleSaveRoute.bind(this)}
        {...otherProps}
      >
        {React.createElement(children, Object.assign({}, otherProps))}
      </Modal>
    );
  }
}

//export default withRouter(ModalAndView)
export default ModalAndView;
