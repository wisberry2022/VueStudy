<template>
  <e-child @customEvent="increment"></e-child>
  <div>
    <strong>{{ count }}</strong>
  </div>
</template>

<script setup>
import EChild from './EChild.vue';
import { ref } from 'vue';

const count = ref(0);

const increment = (data) => {
  count.value = data++;
  console.log(data, count.value);
}


</script>