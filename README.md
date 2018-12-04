# components

[![pipeline status](http://jaxlab.asuscomm.com:30000//mcf/components/badges/master/pipeline.svg)](http://jaxlab.asuscomm.com:30000/mcf/components/commits/master)

## useage

当前版本未发布npm 仓库，需要git地址安装方式
  `npm install git+http://jaxlab.asuscomm.com:30000/mcf/components.git`


## develop

  - 使用ANTD 组件 统一引入方法采用 lib 加载，因为打包方案rollup 不支持 babel-plugin-import 插件，无法完成 按包加载 ｀import {Button} from 'antd'｀-> `import Buttom from 'antd/lib/buttom'` 
  - 组件开发统一使用`develop`分支下进行开发和提交，不直接提交`master`分支代码。`devdevelop`->`master` 合并机制每日手动合并一次
