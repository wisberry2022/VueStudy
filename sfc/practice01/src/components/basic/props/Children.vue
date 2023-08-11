<template>
  <h2>{{ title }}</h2>
  <ul>
    <li v-for="item in data" :key="item.id">
      {{ item.title }}
    </li>
  </ul>
</template>

<script setup>
  import {defineProps} from 'vue';
  const props = defineProps(['title', 'data']);
</script>