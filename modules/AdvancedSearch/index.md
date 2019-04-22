# AdvancedSearch
> 统一搜索组件集成事件处理工作。

## Usage
> 新增布局 子元素增加 columns 属性 ，宽度为原来的倍数 number类型
>
```html
  import {AdvancedSearchForm} from 'mcf-components'

  renderSearchFrom(){
    return (
      <AdvancedSearch layout="horizontal" filterSubmitHandler={action('button-click')}>
        <Input name="callState" label="呼叫类型"  columns={2}/>
        <Select name="inputAcc" label="hr" />
      </AdvancedSearch>
    )
  }
```


## Options

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| autoSubmitForm | 传送渲染子节点数据 [] | Array  | -  |
| showConfig | 是否显示配置项,配置搜索条件显示 | boolean | false |
| filterSubmitHandler | 搜索按钮事件监听方法  | function  | function(values) {} |
| showExpand | 是否收展，超过指定个数后隐藏  | number  | 3 |
| layout | 更改布局方式 | string | "horizontal" |
