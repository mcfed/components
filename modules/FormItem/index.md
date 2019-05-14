#FormItem 组件

 > 继承于antd Form.Item实现并进行功能扩展，简化了antd  FormItem 书写方式

 * 简化了antd  FormItem 书写方式
 * getFieldDecorator 方法参数 全部迁移到 Children Element props内实现
 * Children Element 扩展`options`和 `renderItem` 属性，如 Select、TreeView，实现数据渲染子节点数据
 * Children Element 类型为DatePicker.RangePicker 或者 DatePicker ，统一将defaultValue 值转换为moment 类型并兼容 undefined
 * 增加全局布局传递功能 `formLayout` ，由BaseForm childContext 传送统一配置 或 FormItem {...formItemLayout} 个性化配置


原书写方式

 ```jsx
    <FormItem label="Password">
       {getFieldDecorator('name', {initialValue:'mc',rules:[]}, <Input />)
    </FormItem>
 ```

转换后

 ```jsx

  <FormItem>
    <Input name="name" defaultValue="mc" label="Password" rules={[]} />
  </FormIte>

 ```

##FormItem

> 保留antd组件配置参数可以，并扩展以下属性

| 参数 | 说明 | 类型 |
| - | :-: | -: |
|  ||  |


## Children Element

> 为ant组件Select、Input、CheckBox等


| 参数 | 说明 | 类型 | 默认值 |
| - | :-: | -: | -: |
| options | 传送渲染子节点数据 [] | Array  | -  |
| renderItem | 渲染子节点数据，如Select.Option节点 | function(item) =>ReactNode | - |
| containerTo | 是否基于parentNode 渲染getPopupContainer:triggerNode => triggerNode.parentNode | Boolean  | true |
| hidden | hidden后页面不显示  | Boolean  | false |
| disbled | 禁用表单项，也不做redux store传参值  | Boolean & funciton(form)  | false |
| renderable | 不渲染表单项，也不做redux store传参值  | Boolean & funciton(form)  | false |
| params | fetch 传递参数，必需要返回object  | Boolean & funciton(form)  | false |
| fetchCallback | fetch 回调处理数据，返回结果列表数据  | funciton(result)  | false |
| fetch | URL发起xhr请求获取options数据，提供renderItem 渲染节点| string:URL | - |



## TODO:

  fetch 属生扩展 string类型支持，并扩展支持 `string` 类型并直接发起 fetch 请求数据并存入 childData使用。

## REFACTOR:
