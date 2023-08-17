<template>
  <h1>{{ title }}</h1>
</template>

<script setup>
  import {ref} from 'vue';

  const props = defineProps(['title']);
  const title = ref(props.title);

</script>