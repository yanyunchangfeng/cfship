## cfship component library
## 使用 React+typescript 从零到一打造一套你自己的组件库

[![Build Status](https://api.travis-ci.com/yanyunchangfeng/cfship.svg?branch=master&status=passed)](https://travis-ci.com/yanyunchangfeng/cfship)



### 安装最后已经发布的组件库来试试

~~~javascript
npm install cfship --save
~~~

### 使用

~~~javascript
// 加载样式
import 'cfship/dist/index.css'
// 引入组件
import { Button } from 'cfship'
~~~

### 流程

* 🔥typescript with React Hooks 
* ⛑️使用 react-testing-library 完成单元测试
* 📚使用 storybook 本地调试和生成文档页面
* 🌹样式（Sass）文件从零开始，大型应用的 CSS 组织方法
* 🎉涉及全部流程，包括最后的 npm publish，husky提交发布前验证，travis CI/CD 集成，发布文档站点等

### 发布的组件预览站点

 [github page cfship](https://yanyunchangfeng.github.io/cfship) 

### 一些本地开发命令

~~~bash
//启动本地环境
npm run stroybook

//跑单元测试
npm test

//build可发布静态文件
npm run builds

//发布到 npm
npm run publish
~~~