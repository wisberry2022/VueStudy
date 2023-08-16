<template>
  <div>
    <h2>Not-Found</h2>
    <p>
      존재하지 않는 페이지입니다!
      <strong>{{ currentURI }}</strong>
    </p>
  </div>
</template>

<script setup>
  import {useRoute} from 'vue-router';

  const router = useRoute();
  console.log(router);
  const currentURI = router.fullPath;
</script>