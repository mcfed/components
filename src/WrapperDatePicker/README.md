## WrapperDatePicker

> 外包日历选择器组件：简化 DatePicker 使用复杂度。解决以下问题

- 原设计 DatePicker 类型 value 必需 使用 moment 数据类型才可以初始
- moment 类型不接受 undefined 为空数据构造 等问题。
- getFieldDecorator 获取到 值为 moment 类型， 需要 format 成字符串后才可传送后台参数

## Usage

> 使用方式 1：结合 FormItem 组件，可直接充当 ANTD 组件使用，不需要 外包 WrapperDatePicker 使用,FormItem 内部自动会进行外包转换

```jsx
<FormItem>
  <DatePicker name='datepicker' label='选择日期 ' />
</FormItem>
```

> 使用方式 2:直接外包于以下四种类型组件，并将属性写于外包组件上，不写属性于子组件内

- DatePicker

```jsx
<WrapperDatePicker name='datepicker'>
  <DatePicker />
</WrapperDatePicker>
```

- MonthPicker

```jsx
<WrapperDatePicker name='datepicker'>
  <MonthPicker />
</WrapperDatePicker>
```

- RangePicker

```jsx
<WrapperDatePicker name="datepicker">
  <RangePicker />
</WrapperDatePicker>

//使用valueFormat 和 timeRange timeRangeType 转出需要的时间格式
// timeRange 是否开启转换开始和结束增加HH:mm:ss 开始为00:00:00 结束为23:59:59
//timeRangeType 以什么时间单位作为开始和结束类型（默认为天）  - day -month -year
//

//转出以天为开始结束的时间
<WrapperDatePicker name="datepicker">
  <RangePicker valueFormat='x' timeRange={true}/>
</WrapperDatePicker>

//转出以月为开始结束的时间
<WrapperDatePicker name="datepicker">
  <RangePicker valueFormat='x' timeRange={true} timeRangeType='month'/>
</WrapperDatePicker>
```

- WeekPicker

```jsx
<WrapperDatePicker name='datepicker'>
  <WeekPicker />
</WrapperDatePicker>
```

## Props

> 暂时未扩展属性，可直接使用`DatePicker`,`MonthPicker`,`RangePicker`,`WeekPicker`内置属性。不在处于列举。

> 传入的自元素 prop value 需为 number 类型的时间戳或 string 类型的时间 若传入 string 类型的时戳会导致控件无法正常显示时间
