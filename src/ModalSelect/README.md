# ModalSelect 组件

> 弹框选择对应项目（当前版本限于配合 FormItem 使用）

## Usage

```
<FormItem name='def' label='456' defaultValue=''>
            <ModalSelect trggierELement={(value:any,changeFn:any)=>{
              return <Fragment>
                <Input value={value}/>
                <Button onClick={()=>changeFn(true)}>open</Button>
              </Fragment>
            }} modalProps={(value:any,onChange:any,changeFn:any)=>{
              return {
                onOk:()=>{
                  onChange(123);
                  changeFn(false)
                },
                title:'aaa'
              }
            }} tableProps={(value:any,onChange:any)=>{
              return {
                rowSelection:{
                  type:'radio',
                  selectedRowKeys:[].concat(value),
                  onChange:(selectKeys:any,selectRows:any)=>{
                    onChange(selectKeys.pop())
                  }
                },
                size:'small',
                rowKey:'id',
                columns:[{
                  title: 1,
                  key: 'a',
                  dataIndex: 'a',
                },{
                  title: 2,
                  key: 'b',
                  dataIndex: 'b',
                },{
                  title: 3,
                  key: 'c',
                  dataIndex: 'c',
                }],
                dataSource:[{
                  id:1,
                  a:'aaa',
                  b:'aaa',
                  c:'aaa'
                },{
                  id:2,
                  a:'bbb',
                  b:'bbb',
                  c:'bbb'
                },{
                  id:3,
                  a:'ccc',
                  b:'ccc',
                  c:'ccc'
                }]
              }
            }}/>
          </FormItem>
```

## Option

| 参数                | 说明                                                         | 类型                    |
| ------------------- | ------------------------------------------------------------ | ----------------------- |
| tableProps          | 默认打开弹窗内表格属性                                       |  funciton 或 object     |
| modalProps          | 默认打开弹窗的属性                                           | funciton 或 object      |
| customRenderContent | 如果需要对弹窗内内容自定义 调用该方法 则不渲染表格           | function 返回 reactNode |
| trggierELement      | trggier 弹窗的外部元素 必填 回掉函数参数为 value 和 onChange | function 返回 reactNode |
