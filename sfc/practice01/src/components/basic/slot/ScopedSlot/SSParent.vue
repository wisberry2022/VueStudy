<template>
  <my-component v-slot="{ text, count, event }">
    <h2>{{ count > 5 ? title : text }}</h2>
    <div>
      <button v-on:click="event">증가</button>
      <strong>{{ count }}</strong>
    </div>
  </my-component>
</template>

<script setup>
import MyComponent from './SSChild.vue';
import { ref } from 'vue';

const title = ref('Title Message When Over Count is 5');
</script>