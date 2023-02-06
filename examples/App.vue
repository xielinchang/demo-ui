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
import { ref } from 'vue';
//分页
const currentPage = ref(1);
const changePage = (val: number) => {
  currentPage.value = val;
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
      <j-query-page style="width=100%" :current-page="currentPage" :total="1000" :page-size="6" :page-count="5"
        :border-width-show="true" :item-stlye="{
          width: 30,
          height: 30,
          borderDefaultColor: '#ddd',
          borderStyle: 'dotted',
        }" @change-page="changePage"></j-query-page>
    </div>
    <djv class="section">
      <j-icon name="zoom-in" color="var(--van-color-primary)" size="var(--van-font-size-large)" />
      <j-icon name="zoom-in" color="#ff9f00" :size="22" />
      <j-icon name="zoom-in" color="#f44336" size="28px" />
      <j-icon name="zoom-in" color="#00c48f" size="2.5rem" />
    </djv>
    <div class="section">
      <j-select> </j-select>
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
    width: 650px;
    height: 200px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    box-sizing: border-box;
    margin: 10px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 0;
    justify-content: center;
    padding: 50px 30px;

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
</style>
