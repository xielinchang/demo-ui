# input输入框 文档

## 安装
```javascript
import { createApp } from 'vue';
import { jInput } from 'joyDesign';

const app = createApp();
app.use(jInput);
```

## input输入框
Crumb组件的基本使用
:::demo 使用组件的时候，传入brandsInfo数据，数据格式为数组，数组元素是对象数据，包含name和showinfo两个属性。

input/basicinput

:::

## 传入数据属性
| 属性         | 说明           | 类型    | 接收值                                                  | 默认值 |
| ------------ | -------------- | ------- | ------------------------------------------------------- | ------- |
| brandsInfo   | 面包屑内容     | arry    |                       | default |

:::

## 传入的brand数据格式
