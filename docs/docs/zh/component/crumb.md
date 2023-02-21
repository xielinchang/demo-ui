# Crumb 文档

## 安装
```javascript
import { createApp } from 'vue';
import { jCrumb } from 'joyDesign';

const app = createApp();
app.use(jCrumb);
```

## 面包屑未选用
Crumb组件的基本使用
:::demo 

crumb/basic

:::
## 面包屑全选用
Crumb组件的基本使用
:::demo 

crumb/allsecletcrumb

:::

## 传入数据属性
| 属性         | 说明           | 类型    | 接收值                                                  | 默认值 |
| ------------ | -------------- | ------- | ------------------------------------------------------- | ------- |
| brandsInfo   | 面包屑内容     | arry    |                       | default |
|loadcrumb     |点击面包屑处理函数|function|                     | default |
|downLoadCrumb  |关闭面包屑处理函数|function|                     | default |


## 传入的数据格式
brandsInfo
| 属性         | 说明           | 类型    | 接收值                                                  | 默认值 |
| ------------ | -------------- | ------- | ------------------------------------------------------- | ------- |
| name         | 单个面包屑名字   | string    |                       | 面包1、2、3、4、5 |
|showinfo     |面包屑是否点击的标志|Boolean|                     | false |


downLoadCrumb函数和loadcrumb函数
| 接收参数         | 说明           | 类型    | 接收值                                                  | 默认值 |
| ------------  | --------------    | -------   | ------------------------------------------------------- | ------- |
| brand         | 单独面包屑的内容   | object    |                       | default|

