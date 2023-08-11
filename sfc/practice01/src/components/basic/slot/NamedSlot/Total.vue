<script setup>
  import Layout from './Layout.vue';
</script>

<template>
  <Layout>
    <template #header>
      <h1>PAGE HEADER</h1>
    </template>

    <template #default>
      <p>메인 컨텐츠입니다</p>
    </template>

    <template #footer>
      <p>푸터입니다</p>
    </template>
  </Layout>  
</template>

