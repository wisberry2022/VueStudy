<template>
  <div>
    <AsyncComp />
  </div>

  <div>
    <h1>Title</h1>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import LoadingVue from './LoadingVue.vue';
import EComponent from './EComponent.vue';

const AsyncComp = defineAsyncComponent({
  loader: () => import('./SubVue.vue'),
  loadingComponent: LoadingVue,
  delay: 0,
  errorComponent: EComponent,
  // 시간 초과 시, 에러 컴포넌트가 표시됩니다. 기본값: 무한대
  timeout: 0
});

</script>