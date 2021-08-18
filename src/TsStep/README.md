# TsStep 组件 (目前为 Step 组件的 ts 重构版本，替换原先的 Step 组件)

## Usage

```tsx
import React from 'react';
import {Step} from '@mced/components';

class FirstView extends React.Component {
  render() {
    return <div>first page</div>;
  }
}

class SecondView extends React.Component {
  render() {
    return <div>second page</div>;
  }
}

class ThirdView extends React.Component {
  render() {
    return <div>third page</div>;
  }
}

const steps = [
  {
    text: 'firstStep',
    description: 'firstStep',
    path: 'first',
    component: FirstView
  },
  {
    text: 'secondStep',
    description: 'secondStep',
    path: 'second',
    component: SecondView
  },
  {
    text: 'thirdStep',
    description: 'thirdStep',
    path: 'third',
    component: ThirdView
  }
];
return (
  <Step
    className='McSteps'
    showCancel={true}
    backPath={`/xxx`}
    steps={steps}
    {...this.props}
    showFinalLastStep={true}
  />
);
```

## Options

| 参数                    | 说明                             | 类型                    | 默认值     |
| ----------------------- | -------------------------------- | ----------------------- | ---------- |
| steps                   | 步骤数组                         | array                   | []         |
| cancelText              | 取消按钮自定义文字               | string                  | 取消       |
| finishText              | 完成按钮自定义文字               | string                  | 完成       |
| showPrev                | 是否展示上一步按钮               | boolean                 | true       |
| finalSubmitFunctionName | 完成按钮点击回调方法名           | string                  | /          |
| showFinalLastStep       | 是否在最后一个步骤展示上一步按钮 | string                  | true       |
| showFinalCancel         | 是否在最后一个步骤展示取消按钮   | boolean                 | false      |
| showCancel              | 是否展示取消按钮                 | boolean \| Function     | true       |
| cancelConfirm           | 取消按钮二次确认 content         | string                  | 系统提示？ |
| cancelConfirmTitle      | 取消按钮二次确认 title           | boolean                 | 确认执行？ |
| backPath                | 取消按钮回退路径                 | string                  | /          |
| btnLoading              | 按钮状态控制                     | BtnLoadingProps         | {}         |
| customBtn               | 自定义按钮设置                   | ReactNode \| Function   | null       |
| btnAlign                | 按钮布局                         | left \| center \| right | left       |
| isBtnAdjust             | 按钮 type 和间隔是否调整         | boolean                 | false      |

## BtnLoadingProps

| 参数   | 说明           | 类型    | 默认值 |
| ------ | -------------- | ------- | ------ |
| cancel | 取消按钮状态   | boolean | false  |
| prev   | 上一步按钮状态 | boolean | false  |
| next   | 下一步按钮状态 | boolean | false  |
| finish | 完成按钮状态   | boolean | false  |
