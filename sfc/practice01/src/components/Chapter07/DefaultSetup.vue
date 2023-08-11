<template>
  <div>
    <span>{{ state.x }}</span>
  </div>
  <div>
    <span>{{ state.y }}</span>
  </div>
  <div>
    <div>
      <button @click="sum">합치기</button>
    </div>
    <strong>{{ state.result }}</strong>
  </div>
</template>

<script>
  import {reactive} from 'vue';

  export default {
    name: "AComponent",
    setup() {
      const state = reactive({x:10, y:20, result:0});

      const sum = () => {
        state.result = state.x + state.y;
      }

      return {
        state, sum
      }
    }
  }
</script>