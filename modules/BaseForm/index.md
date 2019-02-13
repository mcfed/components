# BaseForm 组件

 > 继承于antd Form实现并进行功能扩展,全面兼容ANTD Form 属性配置，并无需使用`Form.create(FormView)`

 ## Usage
 >
 ```html
   import {BaseForm,FormItem} from 'mcf-components'

   renderSearchFrom(){
     return (
     <BaseForm layout="horizontal" onSubmit={handleSubmit} >
       <FormItem>
         <Input name="id" type="hidden" defaultValue="12" />
       </FormItem>
       <FormItem>
         <Input name="callState" label="名称" rules={[{required:true}]} defaultValue="王小二" />
       </FormItem>
       <FormItem>
         <Select name="inputAcc" label="hr" defaultValue="2" fetch={[{name:"mysql",value:"1"},{name:"oracle",value:"2"},{name:"sql_server",value:"3"}]} renderItem={renderSelectOption} />
       </FormItem>
       <Row>
         <Col offset={6} span={18}>
           <Button name="submit" type="primary" htmlType="submit">保存</Button>
           <Button name="submit"  htmlType="submit">取消</Button>
         </Col>
       </Row>
     </BaseForm>
     )
   }
 ```


 ## Options

 | 参数 | 说明 | 类型 | 默认值 |
 | - | - | - | - |
 | itemLayout | 统一设定子FromItem layout布局  | object  | { labelCol:{ span:6 }, wrapperCol:{ span:18 } } |
 | layout | 更改布局方式 | ['horizontal','inline','vertical'] | "horizontal" |
