<script lang="ts" setup>
import { ref } from 'vue';
import jButton from '../../button';
defineOptions({
    name: ' JTableform',
});
</script>

<template>
    <div class="form">
        <div>
            <span>姓名：</span><input type="text" class="name">

        </div>
        <div>
            <span>年龄：</span><input type="text" class="age">

        </div>
        <div>
            <span>出生年月：</span><input class="year">年<input class="mouth">月<input class="days">日

        </div>
        <div>
            <span>身份证号：</span><input type="text" class="cardnumber">

        </div>
        <div>
            <span>电话号码：</span><input type="text" class="cardnumber">

        </div>
        <div>
            <span>家庭住址：</span><input type="text" class="cardnumber">
            <j-button type="primary" @click="submit(inputcontent)" class="submit">确认</j-button>
        </div>
        
    </div>
</template>


<style scoped lang="scss">
.form {
    display: flex;
    flex-direction: column;

    .year {
        width: 50px;

    }
    .mouth{
        width: 50px;
    }
    .days{
        width: 50px;
    }
    .submit{
        width: 50px;
        margin-left: 100px;
    }
    .name{
        margin-left: 33px;
    }
    .age{
        margin-left: 33px;
    }
    input{
        height: 20px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.3);
    }
}
</style>