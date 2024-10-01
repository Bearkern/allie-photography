<script lang="ts" setup>
import type { PhotoPackageBase } from '@/types/package';

const props = withDefaults(defineProps<{ allPhotoPackages: PhotoPackageBase[] }>(), {
  allPhotoPackages: () => [],
});
</script>

<template>
  <!-- <section class="min-h-[300px] bg-gradient-to-l from-primary to-light bg-cover bg-center"> -->
  <section
    class="relative min-h-[300px] bg-[url('@/assets/images/banners/about.jpg')] bg-cover bg-center"
  >
    <div class="absolute inset-0 bg-primary opacity-20"></div>
    <div class="container relative z-10 flex h-[300px] items-center">
      <h2>攝影方案</h2>
    </div>
  </section>
  <section class="container py-10 lg:py-16" v-bind="$attrs">
    <ul class="flex flex-col flex-wrap gap-6 md:flex-row lg:flex-nowrap">
      <li
        v-for="(photoPackage, index) in props.allPhotoPackages"
        :key="photoPackage._id"
        class="md:w-full"
      >
        <Card :photoPackage="photoPackage" :index="index"></Card>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
