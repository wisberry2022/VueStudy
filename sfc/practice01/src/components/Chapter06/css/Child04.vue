<template>
  <div :class="[$style.titleBg, $style.fontStyle]">
    <h2>Child04</h2>
  </div>
</template>

<script setup>
  import { getCurrentInstance, useCssModule } from 'vue';

  const { $style } = getCurrentInstance().type.__cssModules;
  console.log($style);

  const $newStyle = useCssModule();
  console.log($newStyle);
</script>

<style module>
  .titleBg {
    background-color: orange;
    border: solid 1px black;
    margin: 1.5em;
    padding: 1.0em;
  }

  .fontStyle {
    font-size: 15px;
    font-weight: 600;
  }
</style>