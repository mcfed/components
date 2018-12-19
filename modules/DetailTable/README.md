# DetailTable 组件

> 可编辑表格API基于antd组件中的Table组件，拓展了两个属性editComponent，editConfig
## Usage
```
const add = [
      {
        name: () => <div>123</div>,
        value: '1231'
      },
      {
        name: '2',
        value: '1231'
      },
      {
        name: '3',
        value: '1231'
      },
    ]
<DetailTable tableClass={'table'} dataSource={add} columnNumber={2} nameClass={'name'} valueClass={'value'} />

```
## Option
| 参数 | 说明 | 类型 |
| - | - | - |
|dataSource|传递显示数据格式为[{name:值或方法,value:值或方法}]|array|
|columnNumber|定义列数，不得小于0|number|
|nameClass|名称样式|string|
|valueClass|值样式|string|
