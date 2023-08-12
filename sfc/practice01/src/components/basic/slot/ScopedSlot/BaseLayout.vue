<template>
  <div class="wrapper">
    <header>
      <slot name="header" :data="data">
        <div>Temp Header</div>
      </slot>
    </header>
    <main>
      <slot name="main" :mainEvent="dataIncrement">
        <div>Temp Main</div>
      </slot>
    </main>
    <footer>
      <slot name="footer">
        <div>Temp Footer</div>
      </slot>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref(10);
const dataIncrement = () => {
  data.value++;
}
</script>