<template>
  <VCustomInput v-model:message="message" />
  <div>
    <strong>{{ message }}</strong>
  </div>
</template>

<script setup>
import VCustomInput from './VCustomInput.vue'
import { ref } from 'vue';

const message = ref('');
</script>