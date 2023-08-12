<template>
  <div>
    <h3>자식 컴포넌트</h3>
    <div>
      <button @click="plus">확인</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref(0);

const emit = defineEmits(['customEvent']);

const plus = () => {
  emit('customEvent', data.value);
}
</script>