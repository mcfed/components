import React, {Component} from 'react';
import {Button, Steps} from 'antd';
import {t} from '../i18n';

export const ref = React.createRef();

export default class Step extends Component {
  state = {
    currentIndex: 0,
    step: 1,
  };

  componentWillMount() {
    const currentStepRoute = `${this.props.location.pathname.slice(1)}${
      this.props.location.search
    }`;

    let currentStepNum = 1;
    this.props.steps.map((v, index) => {
      /* istanbul ignore else */
      if (currentStepRoute.indexOf(v.path) > -1) {
        currentStepNum = index + 1;
      }
    });

    this.setState({
      currentIndex: currentStepNum - 1,
      step: currentStepNum,
    });
  }

  goToStep = (step) => {
    const {
      props: {steps},
    } = this;
    this.props.history.push(steps[step - 1].path);
    this.setState({
      currentIndex: step - 1,
      step,
    });
  };

  renderStepButtonGroups() {
    const {steps, showPrev, showCancel} = this.props;
    const {step, currentIndex} = this.state;
    return (
      <Button.Group>
        {step !== steps.length &&
        (typeof showCancel === 'boolean'
          ? showCancel
          : showCancel(currentIndex)) ? (
          <Button onClick={() => this.props.history.push(this.props.backPath)}>
            {this.props.cancelText || t('common.cancel')}
          </Button>
        ) : (
          ''
        )}
        {(() => {
          switch (step) {
            case 1:
              return '';
            case steps.length:
              /* istanbul ignore next */
              return showPrev && this.props.showFinalLastStep ? (
                <Button onClick={() => this.goToStep(step - 1)}>
                  {t('step.prev')}
                </Button>
              ) : (
                ''
              );
            default:
              return showPrev ? (
                <Button onClick={() => this.goToStep(step - 1)}>
                  {t('step.prev')}
                </Button>
              ) : (
                ''
              );
          }
        })()}
        {step !== steps.length ? (
          <Button onClick={() => ref.current.onSubmit('handleSubmit')}>
            {t('step.next')}
          </Button>
        ) : (
          ''
        )}
        {step === steps.length ? (
          <Button
            onClick={() =>
              /* istanbul ignore next */
              this.props.finalSubmitFunctionName
                ? ref.current &&
                  ref.current[this.props.finalSubmitFunctionName]()
                : ref.current.onSubmit('handleSubmit')
            }>
            {this.props.finishText || t('step.finish')}
          </Button>
        ) : (
          ''
        )}
      </Button.Group>
    );
  }

  render() {
    const {steps} = this.props;
    const {step, currentIndex} = this.state;
    /* istanbul ignore next */
    const renderDom = steps[currentIndex] || steps[0];
    return (
      <React.Fragment>
        <Steps current={currentIndex}>
          {steps.map((item) => (
            <Steps.Step
              key={item.text}
              title={item.text}
              description={item.description}
            />
          ))}
        </Steps>

        <renderDom.component
          ref={ref}
          {...this.props}
          goToStep={this.goToStep}
          goToNext={() => this.goToStep(step + 1)}
        />

        {this.renderStepButtonGroups()}
      </React.Fragment>
    );
  }
}

Step.defaultProps = {
  steps: [],
  showPrev: true,
  showFinalLastStep: true,
  showCancel: true,
  backPath: '/',
  location: {
    pathname: '',
  },
  history: {
    push() {},
  },
};
