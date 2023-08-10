<template>
  <h2>Test Component</h2>
  <div v-bind:id="test">{{ message }}</div>
  <strong v-html="rawHtml" />
  <SubTest />
</template>

<script>
  import {ref} from 'vue';

  export default {
    setup() {
      const message = ref('Hello Vue');
      const test = ref('coloring');
      const rawHtml = ref('rawHTML');

      return {
        message, test, rawHtml
      }
    }
    
  }
  
</script>
