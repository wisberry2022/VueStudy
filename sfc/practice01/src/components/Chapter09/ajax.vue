<template>
  <div>
    <ul>
      <li v-for="data in results" :key="data.id">
        <div>
          <h2>{{ data.todo }}</h2>
          <strong>{{ data.desc }}</strong>
        </div>
      </li>
    </ul>
  </div>
  <button @click="requestAPI">확인</button>
</template>

<script setup>
  import axios from 'axios';
  import {ref} from 'vue';

  const results = ref([]);

  const requestAPI = () => {
    const url = "api/todolist/gdhong";
    
    axios.get(url)
    .then(res => results.value = res.data)
  }

  
</script>