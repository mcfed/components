# Step 组件

## Usage

```jsx
// antd4
import React from 'react';
import {Form} from 'antd';
import TextMask from '@mcf/components';

const FormItem = Form.Item;

const Demo = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} {...layout}>
      <FormItem name='phone' label='phone'>
        <TextMask
          maskType='phone'
          // defaultValue={18868832053}
          onChange={e => console.log(e.target.value)}
          placeholder={'请输入'}
        />
      </FormItem>
      <FormItem name='email' label='email'>
        <TextMask maskType='email' />
      </FormItem>
      <FormItem name='date' label='date'>
        <TextMask maskType='date' />
      </FormItem>
    </Form>
  );
};

// antd3
class Demo extends React.Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form {...layout}>
        <FormItem label='phone'>
          {getFieldDecorator('phone')(
            <TextMask
              maskType='phone'
              // defaultValue={18868832053}
              onChange={e => console.log(e.target.value)}
              placeholder={'请输入'}
            />
          )}
        </FormItem>
        <FormItem label='email'>
          {getFieldDecorator('email')(<TextMask maskType='email' />)}
        </FormItem>
        <FormItem label='date'>
          {getFieldDecorator('date')(<TextMask maskType='date' />)}
        </FormItem>
      </Form>
    );
  }
}

const App = Form.create()(Demo);

export default App;
```

## Options

| 参数     | 说明      | 类型   | 默认值 | 取值范围         |
| -------- | --------- | ------ | ------ | ---------------- |
| maskType | mask 类型 | string | phone  | phone,email,date |
