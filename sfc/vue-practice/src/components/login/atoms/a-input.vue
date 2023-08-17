<template>
  <input class="iStyle" ref="iRef" :type="iType" :placeholder="placeholder"/>
</template>

<style scoped>
  .iStyle {
    border: 1px solid #ddd;
    border-radius: 15px;
    padding: 10px 9px;
    width: 250px;
    font-size: 15px;
  }
</style>

<script setup>
  import {ref, reactive, provide} from 'vue';

  const iRef = ref(null);


  const props = defineProps(['iType', 'placeholder', 'login']);
  const iType = ref(props.iType);
  const placeholder = ref(props.placeholder);
  const loginKey = props.login;
  console.log(loginKey);

  

</script>