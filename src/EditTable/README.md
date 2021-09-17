# EditTable 组件



> 可编辑表格 API 基于 antd 组件中的 Table 组件，拓展了两个属性 editComponent，editConfig



## Usage



```tsx
editComponent: ()=> <Input placeholder='请输入名字'/>

editConfig:(instance: any, form: any) => ({

	rules: [{required:true, message: '请输入名字'},{validator: 自定义规则}]

})
```



## Option



| 参数                | 说明                                                         | 类型                |
| ------------------- | ------------------------------------------------------------ | ------------------- |
| editComponent       | 用于传递渲染的编辑组件,传递组件为 antd 基础  表单组件，也可自定义，需遵循 antd 组件的包装 |  funciton           |
| editConfig          | 用于传递初始值，验证规则等配置,支持 antd 表单基本校验方法， 可[查看文档](https://ant.design/components/form-cn/),支持按照 antd from 书写的自定义校验 | object              |
| columns             | 表格列配置                                                   | ColumnsItem[]       |
| data                | 数据数组                                                     | T[]                 |
| mode                | 编辑模式：全表格编辑，单行编辑                               | full \| row         |
| rowKey              | 数据自定义主键                                               | string              |
| hideOperation       | 隐藏操作按钮                                                 | boolean             |
| hideCancelConfirm   | 隐藏取消按钮二次确认                                         | boolean             |
| onChangeWithOutForm | 数据抛出方法自定义                                            | (data: T[]) => void |
| onChange            | 外界传入，表格数据抛出方法                                   | (data: T[]) => void |
| formatData4Form     | 导出数据自定义                                               | (data: T[]) => void |
| btnText             | 按钮文字自定义                                               | BtnText             |
| onSave              | mode为row，保存单条数据时触发的自定义方法                    | function            |
| onDelete            | 删除单条数据时触发的自定义方法                               | function            |
| maxNum              | 可添加的数据条数最大值                                       | number              |
| maxErrorMsg         | 表格数据达到最大值时的错误信息提示                           | string              |
| direction           | 设定数据新增在第一行或最后一行                               | top \| bottom       |
| hideDeleteConfirm   | 是否隐藏删除按钮的二次确认                                   | boolean             |



## BtnText



| 参数   | 说明               | 类型   |
| ------ | ------------------ | ------ |
| save   | 保存按钮文件自定义 | string |
| add    | 新增按钮文字自定义 | string |
| delete | 删除按钮文字自定义 | string |
| cancel | 取消按钮文字自定义 | string |
| edit   | 编辑按钮文字自定义 | string |



## ColumnsItem



| 参数          | 说明                       | 类型                          |
| ------------- | -------------------------- | ----------------------------- |
| dataIndex     | 列数据在数据项中对应的 key | string                        |
| editingStatus | 当前编辑状态               | boolean                       |
| renderCol     | 生成复杂数据的渲染函数     | Function(text, row, instance) |
| [propName]    | antd 相关属性              | [string]: any                 |



## 2021/09/17 优化内容（v0.7.16）

1. 数据添加方向自定义 新增属性 **direction**
2. 删除按钮二次确认框自定义添加 新增属性 **hideDeleteComfirm**
3. 控制表格数据条数上限 新增属性 **maxNum**，**maxErrorMsg**
4. 单条数据操作时直接发送请求 新增属性 **onSave**，**onDelete**
5. 表格数据最大值控制 新增属性 **maxNum**，**maxErrorMsg**
6. **editConfig** 属性调整，原先为传入对象，现在也支持传入方法，参数为instance和form
7. **rowKey** 属性将不再直接传入组件内部table中，仅用作传入数据主键的转化
8. 全表格编辑模式下，按钮显示调整，表格样式调整等
