# EditRow 组件

> 可编辑增删行元素（目前仅支持配合 FormItem 使用）

## Usage

```
<FormItem name='abc' label='123' defaultValue={[]}>
            <EditRow
            btnText={{
                add:'增加',
                delete:'删除'
              }}
              renderItem={(it: any, idx: number, callback: any) => (
                <Select onChange={(val:any)=>callback({aaa:val})} value={it.aaa}>
                  <Select.Option value='1'>first</Select.Option>
                  <Select.Option value='2'>second</Select.Option>
                  <Select.Option value='3'>thrid</Select.Option>
                  <Select.Option value='4'>four</Select.Option>
                  <Select.Option value='5'>five</Select.Option>
                </Select>
              )}
            />
          </FormItem>
```

## Option

| 参数       | 说明                                                          | 类型                     |
| ---------- | ------------------------------------------------------------- | ------------------------ |
| renderItem | 行元素展现回调函数 参数为每行元素，下标，更改本行数据回调函数 |  funciton 返回 reactNode |
| btnText    | 自定义按钮文本                                                |  object {add,delete}     |
