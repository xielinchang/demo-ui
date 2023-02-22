# Counter 文档

## 安装

```javascript
import { createApp } from 'vue';
import { jCounter } from 'joyDesign';

const app = createApp();
app.use(jCounter);
```

## 基础样式

Counter 组件的基本使用,通过value绑定当前数值

:::demo 基本样式

counter/basic

:::

## 可输入

:::demo 可输入数值

counter/input

:::

## 分页器属性
### 基础属性
| 属性 | 说明 | 必须 | 类型 | 接收值 | 默认值 |
| --- | --- | ---- | --- | --- | --- |
| type | 类型 | 否 | string | input,default| default
| value | 绑定当前数值 | 是 | number | —| 20
| minNum,maxNum | 最小值，最大值 | 否 | string | —| 10，999