<template>
  <h3>Members</h3>
  <ul>
    <li>
      <RouterLink to="/members/1">멤버1</RouterLink>
    </li>
  </ul>
  <RouterView></RouterView>
  <div>
    <button @click="goBack">뒤로 가기</button>
  </div>
</template>

<script setup>
  import {useRouter} from 'vue-router';

  const router = useRouter();

  const goBack = () => {
    router.back();
  }
</script>