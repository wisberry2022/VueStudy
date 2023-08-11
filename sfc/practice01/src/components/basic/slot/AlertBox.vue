<template>
  <div class="alert-box">
    <slot>{{message}}</slot>
    <button>확인</button>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  const message = ref('AlertBox Message');
</script>

<style scoped>
  .alert-box {
    color: #f00;
  }
</style>