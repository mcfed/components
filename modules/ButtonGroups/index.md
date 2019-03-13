## ButtonGroups
> 按钮组组件：将一组按钮已组的方式进行组合，组合后统一事件监听采用｀分发方式｀，处理个个按钮事件处理。
## Usage
>
```html
  import {ButtonGroups} from 'mcf-components'

  renderSearchFrom(){
    return (
    <ButtonGroups handleClick={action('button-click')} viewMode="icon">
      <Button actionkey="add" icon="add">增加</Button>
      <Button actionkey="editAction" tip="编辑别乱点">编辑</Button>
      <Button actionkey="deleteAction" confirm="是否确认删除？">删除</Button>
      <Button actionkey="disableAction" disabled>禁用</Button>
    </ButtonGroups >
    )
  }
```


## Options

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| handleClick | 点击事件监听 | funciton | funciton(actionkey){} |
| showSize | 最多显示个数 | number | 5 |
| viewMode | button显示模式 `text` 、 `icon`、`both`  | string | "text" |
| mode | 显示模式 `ButtonGroup` 和 `ButtonMenu`  | number | "ButtonGroup" |

## Button options
> Button 是ANTD 组件，在ButtonGroup组件内部不要再使用`onClick`事件处理,统一使用 `ButtonGroup handleClick`处理监听。额外扩展以下属性

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| - | - | - | - |
| actionkey | 按钮事件类型名称，用于事件分发区分 | string | - | [x] |
| permission | 按钮是可见 | Boolean | - | [] |
| confirm | 确认处理框，点击后出现 配置属性文字内容 | string | - | [] |
| tip | tip 提示性方字 | string | - | [] |
| disabled | 可用性 | Boolean | false | [] |
| icon | 图片 | string | - | [] |
