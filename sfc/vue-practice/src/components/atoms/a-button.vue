<template>
  <div>
    <button @click="changeLoginData" class="loginBtn" :type="btnOption.type">{{ btnOption.text }}</button>
  </div>
</template>

<style scoped>
  .loginBtn {
    border-radius: 15px;
    padding: 5px; 
    width: 270px;
    background-color: #111;
    color: #fff; 
    font-size: 15px;
    cursor: pointer;
  }
</style>

<script setup>
  import {ref, reactive, inject} from 'vue';

  const props = defineProps(['btnOption']);
  const btnOption = reactive({
    type: props.btnOption.type,
    text: props.btnOption.text
  });

  const {loginData, setLoginData} = inject('loginData');

  const changeLoginData = () => {
    setLoginData('isLogin');
    console.log(loginData);
  }
  
</script>