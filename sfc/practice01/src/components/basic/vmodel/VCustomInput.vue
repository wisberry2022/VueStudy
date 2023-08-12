<template>
  <input type="text" @change="emit('update:message', $event.target.value)" />
</template>

<script setup>
const message = defineProps(['message']);
const emit = defineEmits(['update:message']);

</script>