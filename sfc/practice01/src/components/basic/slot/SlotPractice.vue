<template>
  <h1>{{ message }}</h1>
  <alert-box>
    <div>
      {{ message }}
    </div>
  </alert-box>
</template>

<script setup>
  import AlertBox from './AlertBox.vue';
  import {ref} from 'vue';

  const message = ref('Initial Message');
</script>