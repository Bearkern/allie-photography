<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { usePackageStore } from '@/stores/package';

const packageStore = usePackageStore();
const { photoPackage } = storeToRefs(packageStore);
</script>

<template>
  <div>
    <h3 class="mb-1">預訂注意事項</h3>
    <div v-html="photoPackage.notice"></div>
  </div>
</template>

<style lang="scss" scoped></style>
