<!--

// Please add your own contribution below inside the Master section, no need to
// set a version number, that happens during a deploy. Thanks!
//
// These docs are aimed at users rather than danger developers, so please limit technical
// terminology in here.

// Note: if this is your first PR, you'll need to add your URL to the footnotes
//       see the bottom of this file. The list there is sorted, try to follow that.

-->

# 0.6.2

- fix: version 0.6.1 版本不可用 【样式引用未清除 导致代码报错】 0.6.2 修复此问题

# 0.6.1

fix: 改动 baseform 对 antosubmitForm 的触发方法 为 onFieldsChange
fix: buttongroups 下的 button 为 disabled 状态时 不会再增加 tooltip 做父节点了
fix： inputsearch blur 不会触发 onchange 方法了 现在 点击 search 按钮会触发 searchbar 搜索动作（不管是否有文本变化）

# 0.6.0

feat: 增加 UploadFile 组件
feat: 增加 SelectInput 组
feat: 增加 ModalOrView 组件
feat: 增加 TextMaskInput 组件
chore: 移除过时的 ModalAndView 组件
fix: McSteps 组件 重写部分逻辑[lujianan]

# 0.5.0

feat: FormItem 加入 columns 属性 支持多列布局
feat: HeadSearchBar 支持传入 className 自定义类名

# 0.4.1

fix: ErrorBoundary 修正样式引入相对路径

# 0.4.0

chore: 移除过时 SmartLInk、FormSet 组件不再使用
feat: 简化 FieldSet 重新实现

# 0.3.4

feat: Step 组件 goToNext 方法，跳转下一个流程
docs: 新增部分组件 storybook 示例

# 0.3.1

fix: ButtonGroups ButtonMenu 模式下 menu action 捕获失败
fix: ButtonGroups ButtonMenu 模式下 menu item 按照节点完整渲染
fix: ButtonGroups ButtonMenu 模式下 menu item 多次触发
fix: buttonGroup menu 模式 权限控制
feat: 增加指定 OverLay，类名字段
