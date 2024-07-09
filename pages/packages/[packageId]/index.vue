<script lang="ts" setup>
import type { Packages, AllPhotoPackages } from '@/types';
import { usePackagesStore } from '@/stores/packages';
const packagesStore = usePackagesStore();
const { setPackages } = packagesStore;

const route = useRoute();
const { packageId } = route.params;

const { getPhotoPackages, getAllPhotoPackages } = useApi();
const { data: photoPackagesData } = await getPhotoPackages(packageId);
const { data: allPhotoPackagesData } = await getAllPhotoPackages();
const photoPackages = ref(photoPackagesData.value as Packages);
const allPhotoPackages = ref([...(allPhotoPackagesData.value as AllPhotoPackages[])]);
setPackages(photoPackages.value);

const allPhotos = ref([photoPackages.value.cover, ...photoPackages.value.photos]);
const currentImage = ref(photoPackages.value.cover);
const updateImage = (photo: string) => {
  currentImage.value = photo;
};

console.log('allPhotoPackages:', allPhotoPackages);
</script>

<template>
  <nav class="container pb-4 pt-6">
    <ol class="flex">
      <li>
        <NuxtLink to="/packages" class="font-bold text-secondary">攝影方案</NuxtLink>
      </li>
      <li class="ml-2 before:pe-2 before:content-['\e5e1']">
        {{ photoPackages.title }}
      </li>
    </ol>
  </nav>
  <section class="mb-6 bg-light py-6">
    <div class="container">
      <div class="flex gap-6">
        <div class="flex h-[400px] w-2/3 gap-2">
          <div class="h-full w-3/4 border-8 border-white">
            <img :src="currentImage" alt="cover" class="h-full w-full rounded object-cover" />
          </div>
          <ul class="flex w-1/4 flex-col gap-1 overflow-y-auto">
            <li
              v-for="(photo, index) in allPhotos"
              :key="index + 1"
              @click="updateImage(photo)"
              class=""
              :class="{ 'border-4 border-white': currentImage === photo }"
            >
              <div class="overflow-hidden rounded-lg">
                <img :src="photo" alt="photo" class="rounded" />
              </div>
            </li>
          </ul>
        </div>
        <div class="w-1/3">
          <div class="flex flex-col items-start gap-2">
            <div class="flex gap-2">
              <span class="badge bg-secondary text-white">{{ photoPackages.package }}</span>
              <h2 class="text-md">{{ photoPackages.title }}</h2>
            </div>
            <div class="flex flex-nowrap">
              <p>方案內容：</p>
              <ol>
                <li v-for="(content, index) in photoPackages.content" :key="index + 1">
                  {{ content }}
                </li>
              </ol>
            </div>
            <p>
              方案價格：<span>{{ photoPackages.price }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mb-6">
    <h3 class="mb-1">方案詳細介紹</h3>
    <ul>
      <li v-for="(item, index) in photoPackages.detail" :key="index + 1">{{ item }}</li>
    </ul>
  </section>

  <section class="container mb-6">
    <h3 class="mb-1">預訂注意事項</h3>
    <div v-html="photoPackages.notice"></div>
  </section>

  <section class="container">
    <h3 class="mb-1">了解更多方案</h3>
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
  </section>
</template>

<style scoped></style>
