<template>
  <div>
    <children v-bind="post"></children>
  </div>  
</template>

<script setup>
 import Children from './Children.vue';  
 import {reactive} from 'vue';

 const datas = reactive({
  state:[
  {id:1, title: 'Vue와 함께한 나의 여행'},
  {id:2, title: 'Vue로 블로깅하기'},
  {id:3, title: 'Vue가 재미있는 이유'}
 ]});

 const post = {
  title: "Title",
  data: datas.state
 }

</script>