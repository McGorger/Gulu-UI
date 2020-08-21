# 轱辘 一个UI 组件库
作者：朱恩光
## 介绍
 这是我在学习 Vue过程中做的UI框架
## 开始使用
1.开始css 样式
 使用本框架前，请在 CSS  中开启border-box   
  ```
  *,*::before,*::after{box-sizing:border-box}
  ```
 IE8及以上浏览器都支持此样式。
 你还需要设置默认颜色等变量(后续会改为SCSS变量)
 :root {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --button-radius: 4px;
            --color: #999;
            --border-color: #999;
            --border-color-hover: #666;
        }
 IE15及以上浏览器都支持此样式。
2. 安装 gulu
```
  npm i --save gulu
```
3. 引入 gulu-test-0816
```
import {Button,Icon} from 'gulu-test-0816';
import 'gulu-test-0816/dist/index.css';
export default {
  name: 'App',
  components: {
    'g-button':Button,
    'g-icon':Icon
}
}
```
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码