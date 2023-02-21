# navBar 文档

## 安装

```javascript
import { createApp } from 'vue';
import { JNavBar } from 'joyDesign';

const app = createApp();
app.use(JNavBar);
```

## 基础用法
### 样式设置
:::demo

navBar/basic1

:::
### 点击事件
:::demo

navBar/basic2

:::

## 使用插槽
通过插槽自定义导航栏两侧的内容。
:::demo 

navBar/slot

:::
## Api

| 属性        | 说明             | 类型    | 默认值  |
| ----------- | ---------------- | ------- | ------- |
| title       | 标题             | string  |         |
| left-text   | 左侧文案         | string  |         |
| right-text  | 右侧文案         | string  |         |
| left-arrow  | 是否显示左侧箭头 | boolean | false   |
| left-color  | 左侧文案颜色     | string  | skyblue |
| right-color | 右侧文案颜色     | string  | red     |
| width       | navbar盒子的宽度 | string  | 200px    |

## Slots

| 名称  | 说明                |
| ----- | ------------------- |
| left  | 自定义左侧区域内容  |
| right | 自定义 右侧区域内容 |

## Events
| 事件名      | 说明               |
| ----------- | ------------------ |
| click-left  | 点击左侧按钮时触发 |
| click-right | 点击右侧按钮时触发 |



