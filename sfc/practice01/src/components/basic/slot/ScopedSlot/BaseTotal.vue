<template>
  <base-layout>
    <template v-slot:header="HeaderProps">
      <div>
        <h1>Title</h1>
        <p>{{ HeaderProps.data }}</p>
      </div>
    </template>
    <template v-slot:main="{ mainEvent }">
      <div>
        <p>Main입니다!</p>
        <div>
          <button v-on:click="mainEvent">증가시키기</button>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div>
        <p>Footer입니다!</p>
      </div>
    </template>
  </base-layout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue';
</script>