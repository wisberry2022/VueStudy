<template>
  <div id="layout">
    <header>
      <slot name="header-slot">
        <div v-if="skeleton">
          Please set header layout
        </div>
      </slot>
    </header>
    <main>
      <slot name="main-slot">
        <div v-if="skeleton">
          please set main layout
        </div>
      </slot>
    </main>
    <footer>
      <slot name="footer-slot">
        <div v-if="skeleton">
          please set footer layout
        </div>
      </slot>
    </footer>
  </div>
</template>

<style>
  #layout {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<script setup>
  import {ref} from 'vue';

  const props = defineProps(['useSkeleton']);
  const skeleton = ref(props.useSkeleton);
</script>