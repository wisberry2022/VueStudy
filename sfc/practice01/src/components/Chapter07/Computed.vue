<template>
  <div>
    X : <input v-model.number="state.x" placeholder="x를 입력하세요" />
    Y : <input v-model.number="state.y" placeholder="y를 입력하세요" />
  </div>
  <div>
    <strong>{{ result }}</strong>
  </div>
</template>

<script>
  import {reactive, computed} from 'vue';

  export default {
    name: "Computed",
    setup() {

      const state = reactive({x:10, y:20});
      const result = computed(() => {
        return state.x + state.y;
      })

      return {state, result}
    }
  }
</script>