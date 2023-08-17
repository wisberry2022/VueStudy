<template>
  <div class="loginBox">
    <div class="inputBox">
      <div>
        <a-input iType="text" placeholder="아이디를 입력하세요" :login="loginData.id" />
      </div>
      <div>
        <a-input iType="password" placeholder="비밀번호를 입력하세요" :login="loginData.pwd" />
      </div>
    </div>
    <div class="submitBox">
      <a-button :btnOption="{type:'button', text:'로그인 하기'}"></a-button>
    </div>
  </div>
</template>

<style scoped>
  .loginBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }

  .inputBox {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
  }

  .submitBox {
    display: flex;
    justify-content: center;
    padding: 5px 0;
    width: 100%;
  }
</style>

<script setup>
  import aInput from '../atoms/a-input.vue';
  import aButton from '../atoms/a-button.vue';
  import {reactive} from 'vue';

  const loginData = reactive({id:"id", pwd:"pwd"});
  


</script>