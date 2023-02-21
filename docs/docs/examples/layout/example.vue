<script setup lang="ts" name="">
  import { ref } from 'vue';
  const currentPage = ref(1);
  const changePage = (val: number) => {
    currentPage.value = val;
  };
  const pageSize = ref(5);
</script>

<template>
    <div >
        <j-layout class="layout">
            <j-header class="bgc head">最新文章展示</j-header>  
            <j-layout>
                <j-sider width="150px" class="bgc side">
                    <div class="nav">文章1</div>
                    <div class="nav">文章2</div>
                    <div class="nav">文章3</div>
                    <div class="nav">文章4</div>
                </j-sider>
                <j-content class="bgc">
                    <p class="hidden">
                        <h4>Chatgpt文章生成器-输入标题就能让Chatgpt自动生成高质量文章</h4>  
                        2023-02-08 13:37<br>
                        不是每个人都可以成为博主，但每个人都可以使用免费的Chatgpt文章生成器工具毫不费力地编写独特的内容。
                        这些强大的工具专注于让在尽可能短的时间内更轻松地创建大量内容。这篇文章将探讨使用文章生成器进行内容创建的主要好处。
                        免费的Chatgpt文章生成器是帮助您根据预定义模板自动编写在线内容或文章的程序。
                        不是每个人都可以成为博主，但每个人都可以使用免费的Chatgpt文章生成器工具毫不费力地编写独特的内容。
                        这些强大的工具专注于让在尽可能短的时间内更轻松地创建大量内容。这篇文章将探讨使用文章生成器进行内容创建的主要好处。
                        免费的Chatgpt文章生成器是帮助您根据预定义模板自动编写在线内容或文章的程序。
                    </p>
                </j-content>    
            </j-layout>
            <j-footer class="bgc">
                <j-query-page
                    style="width=100%"
                    :page-count="5"
                    :current-page="currentPage"
                    :total="100"
                    :page-size="pageSize"
                    @change-page="changePage"
                ></j-query-page>
            </j-footer>
        </j-layout>
    </div>
</template>
<style lang="css">
.layout {
    border: 1px solid #ddd;
}
.bgc{
    background-color: #fff
}
.head{
    font-size: larger;
}
.side {
    display: block;
}
.nav {
    width: 100%;
    height: 40px;
    background-color: #ddd;
    border-radius: 2px;
    margin-top: 20px;
}
.hidden {
    display: block;
    width: 100%;
    max-height: 200px;
    overflow: scroll;
    overflow-x: hidden;
}
</style>
  