<script setup lang="ts" name="">
import jButton from './components/button';
import jIcon from './components/icon';
import jQueryPage from './components/queryPage';
import jSelect from './components/select';
import jLayout from './components/layout';
import jHeader from './components/header';
import jContent from './components/content';
import jSider from './components/sider';
import jFooter from './components/footer';
import jDialog from './components/dialog';
import { ref, reactive } from 'vue';
import { jMessage } from './components/message';
import JCrumb from './components/crumb';
// 消息框
const open = (type: string) => {
  jMessage[type]('This is a message');
};
//分页
const currentPage = ref(1);
const changePage = (val: number) => {
  console.log(val);
  currentPage.value = val;
  console.log(currentPage.value);
};
const pageSize = ref(100);
const changePageSize = (val: number) => {
  pageSize.value = val;
};
const sizeOptions = [
  { label: '100条/页', value: 100 },
  { label: '200条/页', value: 200 },
  { label: '300条/页', value: 300 },
];
//面包屑
const brandsInfo = reactive([{ name: "面包1", showinfo: false },
{ name: "面包2", showinfo: false },
{ name: "面包3", showinfo: false },
{ name: "面包4", showinfo: false },
{ name: "面包5", showinfo: false },
])
// 下拉选择框
const selectedValue = ref('测试用例1');
const changeSelect = (label: string, value: any) => {
  selectedValue.value = label;
};
const options = [
  { label: '测试1', value: 1 },
  { label: '测试2', value: 2 },
  { label: '测试3', value: 3 },
];

const dialogVisible = ref(false);
const handleClick = () => {
  dialogVisible.value = true;
};
// 对话框 回调
const handleClose = (done: () => void) => {
  // dialogVisible.value = false
  confirm('确认关闭？') && done();
};
</script>

<template>
  <div class="joy-design">
    <div class="section">
      <div>
        <j-button type="primary" icon="edit">编辑</j-button>
        <j-button type="success" icon="check">检查</j-button>
        <j-button type="info" icon="message">消息</j-button>
        <j-button type="warning" icon="star">收藏</j-button>
        <j-button type="danger" icon="delete">删除</j-button>
      </div>
      <div>
        <j-button icon="search" circle />
        <j-button type="primary" icon="edit" circle />
        <j-button type="success" icon="check" circle />
        <j-button type="info" icon="message" circle />
        <j-button type="warning" icon="star" circle />
        <j-button type="danger" icon="delete" circle />
      </div>
    </div>
    <div class="section">
      <j-query-page style="width=100%" :current-page="currentPage" :total="2000" :page-size="pageSize" :page-count="5"
        :border-width-show="true" :size-options="sizeOptions" :item-stlye="{
          width: 30,
          height: 30,
          borderDefaultColor: '#ddd',
          borderStyle: 'dotted',
        }" @change-page="changePage" @change-page-size="changePageSize"></j-query-page>
    </div>
    <div class="section">
      <j-icon name="zoom-in" color="var(--j-color-primary)" size="var(--j-font-size-large)" />
      <j-icon name="zoom-in" color="#ff9f00" :size="22" />
      <j-icon name="zoom-in" color="#f44336" size="28px" />
      <j-icon name="zoom-in" color="#00c48f" size="2.5rem" />
    </div>
    <div class="section">
      <j-select :options="options" :selected="selectedValue" @change-select="changeSelect">
      </j-select>
    </div>
    <div class="section">
      <j-layout>
        <j-header>header</j-header>
        <j-content>content</j-content>
        <j-footer>footer</j-footer>
      </j-layout>
    </div>
    <div class="section">
      <j-layout>
        <!-- <j-header>header</j-header> -->
        <j-sider width="100px">sider</j-sider>
        <j-content>content</j-content>
        <!-- <j-footer>footer</j-footer> -->
      </j-layout>
    </div>
    <div class="section">
      <j-layout>
        <j-header>header</j-header>
        <j-layout>
          <j-sider width="100px">sider</j-sider>
          <j-content>content</j-content>
        </j-layout>
        <j-footer>footer</j-footer>
      </j-layout>
    </div>
    <div class="section">
      <j-button text @click="dialogVisible = true">打开对话框</j-button>

      <j-dialog v-if="dialogVisible" v-model="dialogVisible" title="标题" width="30%" draggable>
        <span>这是一个可拖拽的对话框</span>
        <template #footer>
          <span class="dialog-footer">
            <j-button @click="dialogVisible = false">取消</j-button>
            <j-button type="primary" @click="dialogVisible = false">确认</j-button>
          </span>
        </template>
      </j-dialog>
    </div>
    <div class="section">
      <j-button @click="open('info')">信息</j-button>
      <j-button type="success" @click="open('success')">成功</j-button>
      <j-button type="warning" @click="open('warning')">警告</j-button>
      <j-button type="danger" @click="open('error')">错误</j-button>
      <j-button type="primary" @click="open('loading')">加载中</j-button>
    </div>
    <div class="section">
      <j-crumb :brandsInfo="brandsInfo"></j-crumb>
    </div>
    <div class="section"> ... </div>
  </div>
</template>

<style scoped lang="scss">
.joy-design {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  position: relative;
  top: 50px;
  box-sizing: border-box;

  .section {
    display: flex;
    align-items: center;
    width: calc(50% - 20px);
    height: 200px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    box-sizing: border-box;
    margin: 10px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 0;
    justify-content: center;
    padding: 50px 20px;

    .j-header,
    .j-footer,
    .j-content,
    .j-sider {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .j-header,
    .j-footer {
      background-color: rgb(82, 147, 197);
      // color: var(--el-text-color-primary);
      text-align: center;
    }

    .j-sider {
      background-color: rgb(10, 50, 81);
      // color: var(--el-text-color-primary);
      text-align: center;
    }

    .j-content {
      background-color: rgb(134, 191, 235);
      // color: var(--el-text-color-primary);
      text-align: center;
      // height: 150px;
    }
  }
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
