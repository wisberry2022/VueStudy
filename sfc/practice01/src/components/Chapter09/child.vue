<template>
  <slot :results="results"></slot>
</template>

<script setup>
  const datas = defineProps(['results']);
</script>