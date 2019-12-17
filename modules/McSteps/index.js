import React, { Component } from "react";
import { Steps } from "antd";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
const ref = React.createRef();

class MySteps extends Component {
  state = {
    currentIndex: 0,
    step: 1
  };

  componentWillMount() {
    const currentStepRoute = this.props.location.pathname.slice(1);

    let currentStepNum = 1;
    this.props.steps.map((v, index) => {
      if (currentStepRoute.indexOf(v.path) > -1) {
        currentStepNum = index + 1;
      }
    });

    this.setState({
      currentIndex: currentStepNum - 1,
      step: currentStepNum
    });
  }

  goRoutes = step => {
    const {
      props: { steps }
    } = this;
    this.props.history.push(steps[step - 1].path);
    this.setState({
      currentIndex: step - 1,
      step
    });
  };

  getCurrentStep = () => {
    return this.state.step;
  };

  render() {
    const { steps } = this.props;
    const { currentIndex } = this.state;
    const renderDom = steps[currentIndex];
    const goRoutes = this.goRoutes;
    const getCurrentStep = this.getCurrentStep;
    return (
      <React.Fragment>
        <Steps current={currentIndex}>
          {steps.map(item => (
            <Steps.Step
              key={item.text}
              title={item.text}
              description={item.description}
            />
          ))}
        </Steps>
        {React.createElement(renderDom.component, {
          ...this.props,
          ref,
          goRoutes,
          getCurrentStep
        })}
      </React.Fragment>
    );
  }
}

const McSteps = withRouter(MySteps)
export default McSteps;

McSteps.propTypes = {
  /**
  步骤数据 配置
  **/
  steps: PropTypes.array
};
