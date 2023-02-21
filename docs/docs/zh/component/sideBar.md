# navBar 文档

## 安装

```javascript
import { createApp } from 'vue';
import {JSideBar, JSideBarItem } from 'joyDesign';

const app = createApp();
app.use(JSideBar);
app.use(JSideBarItem);
```

## 基础用法

:::demo

sideBar/basic

::: 

## 禁用

:::demo

sideBar/disabled

:::
## 监听切换事件
设置 change 方法来监听切换导航项时的事件。
:::demo

sideBar/change

:::

## Api

| 属性         | 说明                         | 类型   | 接收值 | 默认值 |
| ------------ | ---------------------------- | ------ | ------ | ------ |
| v-model      | 当前导航项的索引             | number | —      | 0      |
| fontColor    | 用来表示高亮的时候的文字颜色 | string | —      | —      |
| fontColor    | 用来表示高亮的时候的文字颜色 | string | —      | —      |
| barColor     | 下滑bar的颜色                | string | info   |        |
| barWidth     | 下滑bar的宽度                | string | info   |        |
| marginBottom | 设置相邻tab之间的距离        | string | info   |        |
| abortColor   | 禁用颜色                     | string | —      |        |

## Sidebar Events
| 事件名   | 说明              | 回调参数                |
| -------- | ----------------- | ----------------------- |
| disabled | 监听 disabled事件 | index:被禁用的下标      |
| change   | 切换导航项时触发  | index: 当前导航项的索引 |


## SidebarItem Props
 | 属性     | 说明         | 类型    | 接收值 | 默认值 |
 | -------- | ------------ | ------- | ------ | ------ |
 | disabled | 是否禁用该项 | boolean | —      | false  |
 | title    | 自定义标题   | string  | —      | —      |
