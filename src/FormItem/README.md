#FormItem 组件

> 继承于 antd Form.Item 实现并进行功能扩展，简化了 antd FormItem 书写方式

- 简化了 antd FormItem 书写方式
- getFieldDecorator 方法参数 全部迁移到 Children Element props 内实现
- Children Element 扩展`options`和 `renderItem` 属性，如 Select、TreeView，实现数据渲染子节点数据
- Children Element 类型为 DatePicker.RangePicker 或者 DatePicker ，统一将 defaultValue 值转换为 moment 类型并兼容 undefined
- 增加全局布局传递功能 `formLayout` ，由 BaseForm childContext 传送统一配置 或 FormItem {...formItemLayout} 个性化配置

原书写方式

```jsx
   <FormItem label="Password">
      {getFieldDecorator('name', {initialValue:'mc',rules:[]}, <Input />)
   </FormItem>
```

转换后

```jsx
<FormItem>
  <Input name='name' defaultValue='mc' label='Password' rules={[]} />
</FormIte>
```

##FormItem

> 保留 antd 组件配置参数可以，并扩展以下属性

| 参数 | 说明 | 类型 |
| ---- | :--: | ---: |
|      |      |      |

## Children Element

> 为 ant 组件 Select、Input、CheckBox 等

| 参数          |                                       说明                                       |                       类型 | 默认值 |
| ------------- | :------------------------------------------------------------------------------: | -------------------------: | -----: |
| options       |                              传送渲染子节点数据 []                               |                      Array |      - |
| renderItem    |                      渲染子节点数据，如 Select.Option 节点                       | function(item) =>ReactNode |      - |
| containerTo   | 是否基于 parentNode 渲染 getPopupContainer:triggerNode => triggerNode.parentNode |                    Boolean |   true |
| hidden        |                               hidden 后页面不显示                                |                    Boolean |  false |
| disbled       |                      禁用表单项，也不做 redux store 传参值                       |   Boolean & funciton(form) |  false |
| renderable    |                     不渲染表单项，也不做 redux store 传参值                      |   Boolean & funciton(form) |  false |
| params        |                        fetch 传递参数，必需要返回 object                         |   Boolean & funciton(form) |  false |
| fetchCallback |                       fetch 回调处理数据，返回结果列表数据                       |           funciton(result) |  false |
| fetch         |           URL 发起 xhr 请求获取 options 数据，提供 renderItem 渲染节点           |                 string:URL |      - |

## TODO:

fetch 属生扩展 string 类型支持，并扩展支持 `string` 类型并直接发起 fetch 请求数据并存入 childData 使用。

## REFACTOR:
