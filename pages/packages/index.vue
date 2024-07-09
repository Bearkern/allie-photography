<script lang="ts" setup>
import type { AllPhotoPackages } from '@/types';

const { getAllPhotoPackages } = useApi();
const allPhotoPackages = ref<AllPhotoPackages[]>([]);

const AllPhotoPackagesResult = (await getAllPhotoPackages()) as {
  data: { value: AllPhotoPackages[] };
};
const { data: allPhotoPackagesData } = AllPhotoPackagesResult;

allPhotoPackages.value = [...allPhotoPackagesData.value].splice(0, 3);
</script>

<template>
  <section class="min-h-[300px] bg-gradient-to-l from-primary to-light bg-cover bg-center">
    <!-- <section class="min-h-[300px] bg-[url('@/assets/images/banners/about.jpg')] bg-cover bg-center"> -->
    <div class="container flex h-[300px] items-center">
      <h2>攝影方案</h2>
    </div>
  </section>

  <section class="container py-10 lg:py-16">
    <ul class="flex flex-col flex-wrap gap-6 md:flex-row lg:flex-nowrap">
      <li
        v-for="(photoPackage, index) in allPhotoPackages"
        :key="photoPackage._id"
        class="md:w-full"
      >
        <Card :photoPackage="photoPackage" :index="index"></Card>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
