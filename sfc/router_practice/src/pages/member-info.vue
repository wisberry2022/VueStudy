<template>
  <strong>멤버 정보</strong>
  <div>
    <strong>멤버 번호: </strong>
    <span>{{ memNo }}</span>
  </div> 
</template>

<script setup>
  import {useRoute} from 'vue-router';
  import {ref} from 'vue';

  const memNo = ref();

  const currentRoute = useRoute();
  memNo.value = currentRoute.params.id;

</script>