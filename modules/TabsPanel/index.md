## TabsPanel
> TabsPanel：将多个功能模块或页面组件 按Tabs 方式进行组合使用tab切换。
## Usage
>
```html
  import {TabsPanel,Panel} from 'mcf-components'

  renderSearchFrom(){
    return (
    <TabsPanel {...props}>
     <Panel title="身份授权" path="identityAuth">
       {
        registerModule(import("./identityAuth"))
       }
     </Panel>
     <Panel title="资产授权" path="assetAuth">
       { registerModule(import("./assetAuth"))}
     </Panel>
     <Panel title="assetMember" path="assetMember">
       { registerModule(import("./assetMember"))}
     </Panel>
    </TabsPanel>
    )
  }
```


## Options

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| - | - | - | - | - |
| history | history 对象 | object | undefined | [x]|
| match | 上级路由match对象 | object | undefined | [x] |
| children |  节面页组件 | ReactNode | Panel | [x] |
