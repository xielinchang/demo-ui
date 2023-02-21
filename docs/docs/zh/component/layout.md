# Layout 文档

## 安装
```javascript
import { createApp } from 'vue';
import { JLayout,JHeader,JContent,JSider,JFooter } from 'joyDesign';

const app = createApp();
app.use([JLayout,JHeader,JContent,JSider,JFooter]);
```

## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：
```
<j-layout>：外层容器。 当子元素中包含 <j-header> 或 <j-footer> 时，全部子元素会垂直上下排列， 否则会水平左右排列。
<j-header>：顶栏容器。
<j-sider>：侧边栏容器。
<j-content>：主要区域容器。
<j-footer>：底栏容器。
```
## 常见页面布局
:::demo 

layout/basic

:::

:::demo 

layout/layout1

:::

:::demo 

layout/layout2

:::

:::demo 

layout/layout3

:::

:::demo 

layout/layout4

:::

:::demo 

layout/layout5

:::


## 示例使用

:::demo 

layout/example

:::




