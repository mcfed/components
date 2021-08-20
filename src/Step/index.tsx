import React, {Component, ReactNode} from 'react';
import {Button, Steps, Modal} from 'antd';
import {StepsProps} from 'antd/lib/steps/index';

export const ref: any = React.createRef();

type BtnLoadingProps = {
  cancel?: boolean;
  prev?: boolean;
  next?: boolean;
  finish?: boolean;
};

type BtnLoadingStatus = 'cancel' | 'prev' | 'next' | 'finish';

export interface McStepProps extends StepsProps {
  /**
   * 步骤数组
   */
  steps: any[];
  /**
   * 取消按钮自定义文字
   */
  cancelText?: string;
  /**
   * 完成按钮自定义文字
   */
  finishText?: string;
  /**
   * 是否展示上一步按钮
   */
  showPrev?: boolean;
  /**
   * 完成按钮点击回调方法名
   * 该方法名对应方法定义在步骤页面中
   */
  finalSubmitFunctionName?: string;
  /**
   * 是否在最后一个步骤展示上一步按钮
   */
  showFinalLastStep?: boolean;
  /**
   * 是否在最后一个步骤展示取消按钮
   * 该属性是为了向前兼容，可以在最后一步放出取消按钮
   */
  showFinalCancel?: boolean;
  /**
   * 是否展示取消按钮
   */
  showCancel?: boolean | Function;
  /**
   * 取消按钮二次确认content
   */
  cancelConfirm?: string;
  /**
   * 取消按钮二次确认title
   */
  cancelConfirmTitle?: string;
  /**
   * 取消按钮回退路径
   */
  backPath?: string;
  /**
   * 按钮状态控制
   */
  btnLoading?: BtnLoadingProps;
  /**
   * 自定义按钮设置
   */
  customBtn?: ReactNode | Function;
  /**
   * 按钮布局
   * left-靠左 center-居中 right-靠右
   */
  btnAlign?: 'left' | 'center' | 'right';
  /**
   * 按钮type和间隔是否调整
   */
  isBtnAdjust?: boolean;
  /**
   * 父组件props属性
   */
  location: any;
  /**
   * 父组件props属性
   */
  history: any;
}

interface StepState {
  currentIndex: number;
  step: number;
}

export default class TsStep extends Component<McStepProps, StepState> {
  state = {
    currentIndex: 0,
    step: 1
  };

  componentWillMount(): void {
    const {location, steps = []} = this.props;
    const currentStepRoute = `${location?.pathname?.slice(1)}${
      location?.search
    }`;

    let currentStepNum = 1;
    steps?.map((v: any, index: number) => {
      /* istanbul ignore else */
      if (currentStepRoute?.indexOf(v?.path) > -1) {
        currentStepNum = index + 1;
      }
    });

    this.setState({
      currentIndex: currentStepNum - 1,
      step: currentStepNum
    });
  }

  goToStep = (step: number): void => {
    const {history, steps} = this.props;
    history?.push(steps[step - 1]?.path);
    this.setState({
      currentIndex: step - 1,
      step
    });
  };

  handleCancel(): void {
    const {cancelConfirm, cancelConfirmTitle, backPath, history} = this.props;
    if (cancelConfirm || cancelConfirmTitle) {
      Modal.confirm({
        title: !!cancelConfirmTitle ? cancelConfirmTitle : undefined,
        content: cancelConfirm,
        onOk: () => history.push(backPath)
      });
    } else {
      history.push(backPath);
    }
  }

  handleFinish(): void {
    const {finalSubmitFunctionName} = this.props;
    if (finalSubmitFunctionName) {
      ref?.current && ref?.current[finalSubmitFunctionName]();
    } else {
      ref?.current?.onSubmit('handleSubmit');
    }
  }

  getLoading(status: BtnLoadingStatus): boolean {
    const {btnLoading} = this.props;
    if (btnLoading) {
      return btnLoading[status] || false;
    } else {
      return false;
    }
  }

  renderCancelBtn(): ReactNode | null {
    const {
      showCancel = true,
      showFinalCancel = false,
      steps,
      cancelText
    } = this.props;
    const {currentIndex, step} = this.state;
    if (showFinalCancel || step !== steps?.length) {
      let flag: boolean = false;
      if (typeof showCancel === 'boolean') {
        flag = showCancel;
      }
      if (typeof showCancel === 'function') {
        flag = showCancel(currentIndex);
      }
      return flag ? (
        <Button
          onClick={this.handleCancel.bind(this)}
          loading={this.getLoading('cancel')}>
          {cancelText || '取消'}
        </Button>
      ) : null;
    } else {
      return null;
    }
  }

  renderCustomBtn(): ReactNode | null {
    const {customBtn} = this.props;
    const {currentIndex} = this.state;
    if (typeof customBtn === 'function') {
      return customBtn(currentIndex);
    } else if (typeof customBtn === 'object') {
      return customBtn;
    } else {
      return null;
    }
  }

  renderPrev(): ReactNode | null {
    const {steps, showPrev = true, showFinalLastStep = true} = this.props;
    const {step} = this.state;
    switch (step) {
      case 1:
        return null;
      case steps?.length:
        if (showPrev && showFinalLastStep) {
          return (
            <Button
              onClick={() => this.goToStep(step - 1)}
              loading={this.getLoading('prev')}>
              {'上一步'}
            </Button>
          );
        }
      default:
        if (showPrev) {
          return (
            <Button
              onClick={() => this.goToStep(step - 1)}
              loading={this.getLoading('prev')}>
              {'上一步'}
            </Button>
          );
        }
    }
    return null;
  }

  renderNextAndFinisah(): ReactNode {
    const {steps, finishText, isBtnAdjust} = this.props;
    const {step} = this.state;
    if (step === steps?.length) {
      return (
        <Button
          type={isBtnAdjust ? 'primary' : 'default'}
          onClick={this.handleFinish.bind(this)}
          loading={this.getLoading('finish')}>
          {finishText || '完成'}
        </Button>
      );
    } else {
      return (
        <Button
          type={isBtnAdjust ? 'primary' : 'default'}
          onClick={() => ref?.current?.onSubmit('handleSubmit')}
          loading={this.getLoading('next')}>
          {'下一步'}
        </Button>
      );
    }
  }

  renderStepButtonGroups() {
    const {btnAlign = 'left', isBtnAdjust = false} = this.props;
    return (
      <Button.Group
        style={{textAlign: btnAlign}}
        className={isBtnAdjust ? 'Step-buttonGroup' : ''}>
        {this.renderCancelBtn()}
        {this.renderCustomBtn()}
        {this.renderPrev()}
        {this.renderNextAndFinisah()}
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
          {steps.map((item: any) => (
            <Steps.Step
              key={item?.text}
              title={item?.text}
              description={item?.description}
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
