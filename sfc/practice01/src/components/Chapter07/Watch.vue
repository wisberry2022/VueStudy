<template>
  <div>
    X : <input v-model.number="state.x" placeholder="x를 입력하세요" />
    Y : <input v-model.number="state.y" placeholder="y를 입력하세요" />
  </div>
  <div>
    <div>
      <h2>이전 값</h2>
      <strong>{{ values.old }}</strong>
    </div>
    <div>
      <h2>현재 값</h2>
      <strong>{{ values.current }}</strong>
    </div>
  </div>
</template>

<script>
  import {watchEffect, computed, reactive} from 'vue';

  export default {
    name: "Watch",
    setup() {
      const state = reactive({x:10, y:20});
      const values = reactive({old:30, current:0})
      
      const result = computed(() => {
        return state.x + state.y
      });

      const watchOff = watchEffect(() => {
        if(result.value > 100) {
          watchOff();
        }
        values.old = values.current;
        values.current = result.value
      });

      return {
        state, result, values
      }
    }
  }
</script>