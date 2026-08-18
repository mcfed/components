<!--

// Please add your own contribution below inside the Master section, no need to
// set a version number, that happens during a deploy. Thanks!
//
// These docs are aimed at users rather than danger developers, so please limit technical
// terminology in here.

// Note: if this is your first PR, you'll need to add your URL to the footnotes
//       see the bottom of this file. The list there is sorted, try to follow that.

-->

# 1.9.1

- fix: 增加国际化运行时、语言资源、中文契约常量和测试

# 0.7.7

- fix: 增加 DataTableV2 组件，新增支持列配置、密度设置、刷新、列设置保存本地缓存

# 0.7.5

- fix: 对 headsearchbar 按钮展开逻辑和 style 调整
- fix: timeRangePicker 增加 props 接受对 timePicker 的 format

# 0.7.4

- fix: 修复 collapsepanel ts 版本 formRef 读取 context bug js 遗留问题

# 0.7.3

- fix: 修复 collapsepanel ts 版本 context 缺失

# 0.7.2

- fix: 扩展 treeviewpanel 组件搜索逻辑支持服务端搜索
- fix: fixed collapsePanel types

# 0.7.1

- fix: fixed treeviewpanel bug
- fix: fixed collapsePanel bug

# 0.7.0

- feat: 增加 EditRow 组件
- feat: 增加 ModalSelect 组件
- feat: 增加 RFLayout 组件

# 0.6.19

- feat: 增加对 uploadFile 的预览图展示 thumurl

# 0.6.15

- fix: edittable 扩展 按钮 btnText 可自定义传入按钮 text

# 0.6.14

- fix: edittable 修复新数据传入 editstatus 不重置的问题

# 0.6.13

- fix: edittable 数据编译 undefined 报错问题

# 0.6.12

- fix: edittable 修改新增行至第一行

# 0.6.11

- fix: headsearchbar 重置按钮逻辑使用 antd resetFields
- fix: inputSearch 新的 value 传入不更新的问题修复
- fix： wrapperDatePicker 新值传入不更新问题修复

# 0.6.10

- fix: headsearchbar 对收起展开逻辑和展示搜索按钮逻辑整合
- fix: headsearchbar 样式问题 补充修复

# 0.6.9

- fix: headsearchbar 收起展开的样式问题修复

# 0.6.8

- feat: headsearchbar 增加收起展开功能 & 重置功能

# 0.6.7

- fix: 修复 edittable bug 扩展使用 props

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
