<template>
  <base-layout>
    <template v-slot:header-slot>
      <a-title title="로그인 하기"></a-title>
    </template>
    <template v-slot:main-slot>
      <t-login-box></t-login-box>
    </template>
  </base-layout>
</template>

<script setup>
  import BaseLayout from '../layout/Base-Layout.vue';
  import aTitle from '../atoms/a-title.vue';
  import tLoginBox from '../templates/t-loginBox.vue';
  import { provide, reactive } from 'vue';
  
  const loginData = reactive(
    {isLogin:false, id:"", pwd:""}
  );

  const setLoginData = (target, value=false) => {
    if(value) {
      loginData[target] = value;
      return;
    }
    loginData[target] = !loginData[target];    
  }

  provide('loginData', {
    loginData,
    setLoginData
  });
  
</script>