## EditTable

> 用于展示表格数据并同时提供可编辑的操作

## Usage

| 参数              |                                   说明                                    |     类型 |    默认值 |
| ----------------- | :-----------------------------------------------------------------------: | -------: | --------: |
| columns           |                                表格列配置                                 | column[] | undefined |
| data              |                                 表格数据                                  |   data[] | undefined |
| rowKey            |                                 表格主键                                  |   string | undefined |
| hideOperation     |                              是否隐藏操作项                               |  boolean | undefined |
| hideCancelConfirm |                             是否需要取消询问                              |  boolean | undefined |
| mode              |                           编辑模式 full or row                            |   string |       row |
| onChange          |                            嵌套 formitem 使用                             | function | undefined |
| onOption          | 操作后回调(回调参数为 当前操作行数据，操作类型，取消当前编辑模式回调方法) | function | undefined |

---

### column type （antd 表格列类型基础上新增属性）

|          参数 | 说明                   | 类型             | 默认值    |
| ------------: | ---------------------- | ---------------- | --------- |
| editComponent | 编辑模式 render 方法   | function         | undefined |
|    editConfig | 编辑模式自定义属性传入 | json or function | undefined |
|  addInitValue | 新增时是否有初始化值   | any              | undefined |

## demo

```jsx
import EditTable from './index.tsx'
const tableConfig = {
    rowKey: "id",
      mode: "row",
      data: this.state.hostList,
      onOption: (data, option, cancelEdit) => {

      },
}

<EditTable {...tableConfig} />

```
