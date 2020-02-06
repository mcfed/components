import React from 'react';
import {Steps} from 'antd';
import {withRouter, RouteComponentProps} from 'react-router-dom';
const ref = React.createRef();

/**
 * steps：步骤信息数组，必须
 */
interface MyStepsProps extends RouteComponentProps {
  steps: object[];
}

const initialState = {
  currentIndex: 0,
  step: 1
};

type State = typeof initialState;
// type State = Readonly<typeof initialState>;

class MySteps extends React.Component<MyStepsProps, State> {
  static defaultProps = {
    steps: []
  };

  componentWillMount() {
    const currentStepRoute = this.props.location.pathname.slice(1);

    let currentStepNum = 1;
    this.props.steps.map((v: {path: string}, index) => {
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
      props: {steps}
    } = this;
    this.props.history.push(steps[step - 1]['path']);
    this.setState({
      currentIndex: step - 1,
      step
    });
  };

  getCurrentStep = () => {
    return this.state.step;
  };

  render() {
    const {steps} = this.props;
    const {currentIndex} = this.state;
    const renderDom = steps[currentIndex];
    const goRoutes = this.goRoutes;
    const getCurrentStep = this.getCurrentStep;
    return (
      <React.Fragment>
        <Steps current={currentIndex}>
          {steps.map((item: {text: string; description: string}) => (
            <Steps.Step
              key={item.text}
              title={item.text}
              description={item.description}
            />
          ))}
        </Steps>
        {React.createElement(renderDom['component'], {
          ...this.props,
          ref,
          goRoutes,
          getCurrentStep
        })}
      </React.Fragment>
    );
  }
}

export default withRouter(MySteps);
