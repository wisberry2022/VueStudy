<template>
  <div>
    X : <input v-model.number="state.x" placeholder="x를 입력하세요" />
    Y : <input v-model.number="state.y" placeholder="y를 입력하세요" />
  </div>
  <button @click="calcAdd">계산하기</button>
  <div>
    <strong>{{ state.result }}</strong>
  </div>
</template>

<script>
  import {reactive} from 'vue';


  export default {
    name: "Reactive",
    setup() {
      const state = reactive({x:10, y:20, result:30});
      
      const calcAdd = () => {
        state.result = state.x + state.y;
        console.log(state.result);
      }

      return {
        state, calcAdd
      }

    }
  }
</script>