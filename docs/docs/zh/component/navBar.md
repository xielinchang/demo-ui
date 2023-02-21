# navBar 文档

## 安装

```javascript
import { createApp } from 'vue';
import { JNavBar } from 'joyDesign';

const app = createApp();
app.use(JNavBar);
```

## 基础用法

:::demo

navBar/basic

:::

## 使用插槽
通过插槽自定义导航栏两侧的内容。
:::demo 

navBar/slot

:::
## Api

| 属性        | 说明         | 类型   | 接收值 | 默认值 |
| ----------- | ------------ | ------ | ------ | ------ |
| title       | 标题         | string | —      | —      |
| left-text   | 左侧文案     | string | info   |        |
| right-text  | 右侧文案     | string | info   |        |
| left-color  | 左侧文案颜色 | string | info   |        |
| right-color | 右侧文案颜色 | string | —      |        |

## Slots

| 名称|说明|
| ----------- | ------------------ |
|left|自定义左侧区域内容|
|right|自定义 右侧区域内容|

## Events
| 事件名      | 说明               |
| ----------- | ------------------ |
| click-left  | 点击左侧按钮时触发 |
| click-right | 点击右侧按钮时触发 |



