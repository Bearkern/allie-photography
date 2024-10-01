<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { usePackageStore } from '@/stores/package';

const packageStore = usePackageStore();
const { photoPackage } = storeToRefs(packageStore);
</script>

<template>
  <div>
    <h3 class="mb-1">方案詳細介紹</h3>
    <ul>
      <li v-for="(item, index) in photoPackage.detail" :key="index + 1">{{ item }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
