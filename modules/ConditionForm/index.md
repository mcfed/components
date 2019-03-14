# AdvancedSearch
> 条件因子选择并添加进输入框, 返回出sql语句。

## Usage
>
```html
  import {ConditionForm} from 'mcf-components'

  renderSearchFrom(){
    return (
      <ConditionForm callbackParentSql={this.onChildChangedSql} conditionSelect={conditionSelect} />
    )
  }
```


## Options

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| callbackParentSql | 传入的下拉列表框数组值 [] | Array  | -  |
| conditionSelect | 把textarea输入框的值回传出去的回调方法  | function  | function(values) {} |
