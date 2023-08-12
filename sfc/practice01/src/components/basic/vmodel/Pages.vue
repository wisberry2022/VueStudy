<template>
  <CustomInput :message="message" @update:message="changeMessage" />
  <div>
    <strong>{{ message }}</strong>
  </div>
</template>

<script setup>
import CustomInput from './CustomInput.vue';
import { ref } from 'vue';

const message = ref('');
const changeMessage = (data) => {
  console.log(data);
  message.value = data;
}
</script>