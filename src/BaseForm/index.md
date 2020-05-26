# BaseForm 组件

> 外包页面组件，做为页面的模块容器使用

## Usage

>

```html
  import {BaseForm,FormItem} from 'mcf-components'

  renderSearchFrom(){
    return (
    	<Panel loading={itemSpin} onOk={this.onSubmit.bind(this,"handleSubmit")} onCancel={this.handleCancel.bind(this,"handleCancel")}>
      <BaseForm layout="horizontal" onSubmit={handleSubmit} >
        <FormItem>
          <Input name="id" type="hidden" defaultValue="12" />
        </FormItem>
        <FormItem>
          <Input name="callState" label="名称" rules={[{required:true}]} defaultValue="王小二" />
        </FormItem>
        <FormItem>
          <Select name="inputAcc" label="hr" defaultValue="2" fetch={[{name:"mysql",value:"1"},{name:"oracle",value:"2"},{name:"sql_server",value:"3"}]} renderItem={renderSelectOption} />
        </FormItem>
      </BaseForm>
    </Panel>
    )
  }
```

## Options

| 参数           | 说明                            | 类型      | 默认值       |
| -------------- | ------------------------------- | --------- | ------------ |
| title          | 统一设定子 FromItem layout 布局 | object    | ""           |
| footer         | 更改布局方式                    | ReactNode | "horizontal" |
| onOk           | 确认按钮回调                    | function  | null         |
| onCancel       | 取消按钮回调                    | function  | null         |
| okText         | 确认按钮文本                    | string    | "确认"       |
| cancelText     | 取消按钮文本                    | string    | "取消"       |
| loading        | 加载状态                        | boolean   | false        |
| confirmLoading | 确认按钮状态                    | boolean   | false        |
