<template>
  <div>
    X : <input v-model="x" placeholder="x를 입력하세요" />
    Y : <input v-model="y" placeholder="y를 입력하세요" />
  </div>
  <div>
    <strong>{{ x }}</strong>
    <strong>{{ y }}</strong>
  </div>
</template>

<script>
  import {ref} from 'vue';

  export default {
    name: "Test",
    setup() {
      const x = ref(10);
      const y = ref(20);
      
      return {
        x, y
      }
    }
  }
  
</script>
