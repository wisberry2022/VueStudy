<template>
  <ul>
    <li v-for="tab in tabs" :key="tab.id">
      <button @click="changeTab(tab)">{{ tab.tabName }}</button>
    </li>
  </ul>
  <div>
    <keep-alive>
      <component v-bind:is="tabList[currentTab]" />
    </keep-alive>
  </div>
</template>

<script setup>
import AComponent from './AComponent.vue';
import BComponent from './BComponent.vue';
import CComponent from './CComponent.vue';
import { reactive, ref, watch } from 'vue';

const tabs = reactive([
  { id: 1, tabName: "AComponent" },
  { id: 2, tabName: "BComponent" },
  { id: 3, tabName: "CComponent" },
]);

const tabList = {
  AComponent,
  BComponent,
  CComponent
}

const currentTab = ref("AComponent");

const changeTab = (tab) => {
  currentTab.value = tab.tabName;
}

</script>