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
  import { jTooltip } from './components/tooltip';
  import JCrumb from './components/crumb';
  import JCalender from './components/calender';
  import JInput from './components/input';
  import JTableform from './components/tableform';
  import jTab from './components/tab/src/TabBar.vue';
  import jTabItem from './components/tab/src/TabItem.vue';
  import jNavBar from './components/navBar/src/navBar.vue'
import jSideBar from './components/sideBar/src/sideBar.vue'
import jSidebarItem from './components/sideBar/src/sideBarItem.vue'
  import { numberLiteralTypeAnnotation } from '@babel/types';
  // 消息框
  const open = (type: string) => {
    jMessage[type]('This is a message');
  };
  //分页
  const currentPage = ref(1);
  const changePage = (val: number) => {
    currentPage.value = val;
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
  const brandsInfo = reactive([
    { name: '面包1', showinfo: false },
    { name: '面包2', showinfo: false },
    { name: '面包3', showinfo: false },
    { name: '面包4', showinfo: false },
    { name: '面包5', showinfo: false },
  ]);
  const downLoadCrumb=(brand)=>{

}
const loadcrumb=(brand)=>{

}
// 下拉选择框
  const selectedValue = ref({ label: '测试1', value: 1 });
  const changeSelect = (label: string, value: any) => {
    selectedValue.value.label = label;
    selectedValue.value.value = value;
  };
  const options = [
    { label: '测试1', value: 1 },
    { label: '测试2', value: 2 },
    { label: '试3', value: 3 },
    { label: '测4', value: 4 },
    { label: 'ab5', value: 5 },
  ];
const submitinputcontent=(a)=>{
  
  }
  const dialogVisible = ref(false);
  const handleClick = () => {
    dialogVisible.value = true;
  };
  // 对话框 回调
  const handleClose = (done: () => void) => {
    // dialogVisible.value = false
    confirm('确认关闭？') && done();
  };
  //tab 页面
  const handleDisabled = (e: any) => {
    console.log(e.label + '已禁用');
  };
  //表单
  const submitmessage = (a: object) => {
    alert('姓名：' + a.name + ' ' + '年龄：' + a.age);
  };
  //navBar
const handleLeft = () => {
  console.log('点击左边啦')
}

const handleRight = () => {
  console.log('点击右边啦')
}
//sideBar
const activeKey = ref(0)
const sideBarDisabled = (e: any) => {
  console.log(e + '  禁用啦')
}
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
      <j-query-page
        style="width=100%"
        :current-page="currentPage"
        :total="2000"
        :page-size="pageSize"
        :page-count="5"
        :jumper-show="true"
        :total-show="true"
        :size-options="sizeOptions"
        :item-stlye="{
          width: 30,
          height: 30,
          borderDefaultColor: '#ddd',
          borderStyle: 'dotted',
        }"
        @change-page="changePage"
        @change-page-size="changePageSize"
      ></j-query-page>
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
      <j-crumb :brandsInfo="brandsInfo" @loadcrumb="loadcrumb" @downLoadCrumb="downLoadCrumb"></j-crumb>
    </div>
    <div class="section">
      <div class="tooltip-base-box">
        <div class="row center">
          <j-tooltip
            class="box-item"
            effect="dark"
            content="Top Center prompts info"
            placement="top"
          >
            <j-button>top</j-button>
          </j-tooltip>
        </div>
        <div class="row">
          <j-tooltip
            class="box-item"
            effect="dark"
            content="Left Center prompts info"
            placement="left"
          >
            <j-button class="mt-3 mb-3">left</j-button>
          </j-tooltip>
          <j-tooltip
            class="box-item"
            effect="dark"
            content="Right Center prompts info"
            placement="right"
          >
            <j-button>right</j-button>
          </j-tooltip>
        </div>
        <div class="row center">
          <j-tooltip
            class="box-item"
            effect="dark"
            content="Bottom Center prompts info"
            placement="bottom"
          >
            <j-button>bottom</j-button>
          </j-tooltip>
        </div>
      </div>
    </div>
    <div class="section">
      <j-select
        :options="options"
        type="search"
        :selected="selectedValue"
        @change-select="changeSelect"
      >
      </j-select>
    </div>
    <div class="section">
      <j-calender></j-calender>
    </div>
    <div class="section">
      <j-input @submitinputcontent="submitinputcontent"></j-input>
    </div>
    <div class="section">
      <j-tableform @submitmessage="submitmessage"></j-tableform>
    </div>
    <div class="section">
      <j-tab curActive="second" @disabled="handleDisabled" fontColor="red">
        <j-tab-item label="标签一" name="first" disabled>标签一内容</j-tab-item>
        <j-tab-item label="标签二" name="second">标签二内容</j-tab-item>
        <j-tab-item label="标签三" name="third">标签三内容</j-tab-item>
      </j-tab>
    </div>
    <div class="section">
      <j-nav-bar @click-left="handleLeft" @click-right="handleRight" title="标题1" left-text="返回1">
        <template #left>
          <j-icon name="arrow-left" style="margin-top:4px;"></j-icon>
        </template>
        <template #right>
          <j-icon name="search" size="16px"></j-icon>
        </template>
      </j-nav-bar>
    </div>

    <div class="section">
      <j-side-bar v-model:active-key="activeKey" @disabled="sideBarDisabled">
        <j-sidebar-item title="标签名1"> </j-sidebar-item>
        <j-sidebar-item title="标签名2"> </j-sidebar-item>
        <j-sidebar-item title="标签名3" disabled> </j-sidebar-item>
      </j-side-bar>
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

      .tooltip-base-box {
        width: 600px;
      }

      .tooltip-base-box .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .tooltip-base-box .center {
        justify-content: center;
      }

      .tooltip-base-box .box-item {
        margin-top: 10px;
      }
    }
  }

  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>
