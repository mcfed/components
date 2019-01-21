## WrapperDatePicker
>外包日历选择器组件：简化DatePicker使用复杂度。解决以下问题

  - 原设计 DatePicker 类型 value 必需 使用 moment 数据类型才可以初始
  - moment 类型不接受 undefined 为空数据构造 等问题。
  - getFieldDecorator 获取到 值为moment 类型， 需要format成字符串后才可传送后台参数

## Usage
> 使用方式1：结合FormItem 组件，可直接充当ANTD组件使用，不需要 外包WrapperDatePicker 使用,FormItem内部自动会进行外包转换
```html
  <FormItem>
    <DatePicker name="datepicker" label="选择日期 " />
  </FormItem>
```

> 使用方式2:直接外包于以下四种类型组件，并将属性写于外包组件上，不写属性于子组件内

  - DatePicker
```html
  <WrapperDatePicker name="datepicker">
    <DatePicker />
  </WrapperDatePicker>
```
  - MonthPicker
```html
  <WrapperDatePicker name="datepicker">
    <MonthPicker />
  </WrapperDatePicker>
```
  - RangePicker
```html
  <WrapperDatePicker name="datepicker">
    <RangePicker />
  </WrapperDatePicker>
```
  - WeekPicker
```html
  <WrapperDatePicker name="datepicker">
    <WeekPicker />
  </WrapperDatePicker>
```

## Props
>暂时未扩展属性，可直接使用`DatePicker`,`MonthPicker`,`RangePicker`,`WeekPicker`内置属性。不在处于列举。
