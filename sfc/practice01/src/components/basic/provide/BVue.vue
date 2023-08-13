<template>
  <div>
    <h3>B-Vue</h3>
    <ul>
      <li v-for="item in items" :key="item.id">
        <div>
          <strong>{{ item.name }}</strong>
        </div>
        <div>
          <strong>{{ item.age }}</strong>
        </div>
      </li>
    </ul>
    <button @click="pushItem">추가하기</button>
  </div>
</template>

<script setup>
import { inject, reactive } from 'vue';

const defaultValue = reactive([
  { id: 1, name: "Non-User", age: "Non-User" }
])

const { items, pushItem } = inject('datas');
</script>