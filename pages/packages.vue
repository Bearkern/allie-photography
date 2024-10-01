<script lang="ts" setup>
import type { PhotoPackageBase } from '@/types/package';

const { getAllPhotoPackages } = useApi();
const allPhotoPackagesResult = (await getAllPhotoPackages()) as {
  data: { value: PhotoPackageBase[] };
};

const allPhotoPackages = ref<PhotoPackageBase[]>([]);
const { data: allPhotoPackagesData } = allPhotoPackagesResult;
allPhotoPackages.value = [...allPhotoPackagesData.value].splice(0, 3);

const photoPackageMap = allPhotoPackages.value.reduce((acc: any, cur: any) => {
  acc[cur.path] = cur;
  return acc;
}, {});
</script>

<template>
  <div>
    <NuxtPage :allPhotoPackages="allPhotoPackages" :photoPackageMap="photoPackageMap" />
  </div>
</template>

<style lang="scss" scoped></style>
