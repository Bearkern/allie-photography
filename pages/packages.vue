<script lang="ts" setup>
import type { AllPhotoPackage } from '../types/packages';

const { getAllPhotoPackages } = useApi();
const allPhotoPackages = ref<AllPhotoPackage[]>([]);

const AllPhotoPackagesResult = (await getAllPhotoPackages()) as {
  data: { value: AllPhotoPackage[] };
};
const { data: allPhotoPackagesData } = AllPhotoPackagesResult;

allPhotoPackages.value = [...allPhotoPackagesData.value].splice(0, 3);

const pageMap = allPhotoPackages.value.reduce((acc: any, cur: any) => {
  acc[cur.path] = cur;
  return acc;
}, {});
</script>

<template>
  <div>
    <NuxtPage :allPhotoPackages="allPhotoPackages" :pageMap="pageMap" />
  </div>
</template>

<style lang="scss" scoped></style>
