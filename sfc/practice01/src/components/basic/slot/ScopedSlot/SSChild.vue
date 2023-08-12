<template>
  <slot :text="titleMessage" :count="count" :event="increment">카운터입니다</slot>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const increment = () => {
  count.value++;
}

const titleMessage = ref('Hello This is Children Component');
</script>