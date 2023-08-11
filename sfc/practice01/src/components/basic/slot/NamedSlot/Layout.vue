<template>
  <div class="container">
    <header>
      <slot>header-template</slot>
    </header>
    <main>
      <slot>main-template</slot>
    </main>
    <footer>
      <slot>footer-template</slot>
    </footer>
  </div>
</template>

<style scoped>
  .container {
    outline: 1px solid #000;
    width: 1200px;
  }
</style>