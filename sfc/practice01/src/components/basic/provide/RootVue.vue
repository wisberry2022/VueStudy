<template>
  <div>
    <h1>Root Component</h1>
  </div>
  <a-vue></a-vue>
</template>

<script setup>
import { provide, reactive } from 'vue';
import AVue from './AVue.vue';

const items = reactive([
  { id: 1, name: "James", age: 25 },
  { id: 2, name: "Cook", age: 35 },
  { id: 3, name: "Khan", age: 53 },
]);

const pushItem = () => {
  items.push({
    id: 4, name: "Lee", age: 19
  })
}

provide('datas', {
  items,
  pushItem
});
</script>