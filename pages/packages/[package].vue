<script lang="ts" setup>
import type { PhotoPackage, PhotoPackageBase, PhotoPackageMap } from '@/types/package';
import { usePackagesStore } from '@/stores/packages';

const packagesStore = usePackagesStore();
const { setPackages } = packagesStore;

const props = withDefaults(defineProps<{ photoPackageMap: PhotoPackageMap }>(), {
  photoPackageMap: () => ({}),
});

const route = useRoute();
const packageName = route.params.package;
const packageId = props.photoPackageMap[packageName]._id;

const { getPhotoPackages, getAllPhotoPackages } = useApi();
const { data: photoPackageData } = await getPhotoPackages(packageId);
const { data: allPhotoPackagesData } = await getAllPhotoPackages();

const photoPackage = ref(photoPackageData.value as PhotoPackage);
setPackages(photoPackage.value);

const allPhotoPackages = ref([...(allPhotoPackagesData.value as PhotoPackageBase[])]);
const morePhotoPackages = allPhotoPackages.value.filter((more: any) => more._id !== packageId);

const allPhotos = ref([photoPackage.value.cover, ...photoPackage.value.photos]);

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
  <div>
    <nav class="container pb-4 pt-6">
      <ol class="flex">
        <li>
          <NuxtLink to="/packages" class="font-bold text-secondary">攝影方案</NuxtLink>
        </li>
        <li class="ml-2 before:pe-2 before:content-['\e5e1']">
          {{ photoPackage.title }}
        </li>
      </ol>
    </nav>
    <section class="mb-6 bg-grey-100 py-6">
      <div class="container">
        <div class="flex gap-6">
          <div class="flex h-[400px] w-2/3 gap-2">
            <Swiper :modules="[SwiperThumbs]" :thumbs="{ swiper: thumbsSwiper }" class="w-3/4">
              <SwiperSlide v-for="(photo, index) in allPhotos" :key="index + 1">
                <img :src="photo" class="h-full w-full rounded object-cover" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              @swiper="setThumbsSwiper"
              :slidesPerView="3.5"
              :space-between="8"
              class="w-1/4"
              direction="vertical"
            >
              <SwiperSlide v-for="(photo, index) in allPhotos" :key="index + 1">
                <img :src="photo" class="h-full w-full rounded object-cover" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="w-1/3 rounded bg-light p-6">
            <div class="flex flex-col items-start gap-2">
              <div class="flex gap-2">
                <span class="badge bg-secondary text-white">{{ photoPackage.package }}</span>
                <h2 class="text-md">{{ photoPackage.title }}</h2>
              </div>
              <div class="flex flex-nowrap">
                <p>方案內容：</p>
                <ol>
                  <li v-for="(content, index) in photoPackage.content" :key="index + 1">
                    {{ content }}
                  </li>
                </ol>
              </div>
              <p>
                方案價格：<span>{{ photoPackage.price }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mb-6">
      <ul>
        <li>
          <NuxtLink :to="`/packages/${photoPackage.path}`">方案詳細介紹</NuxtLink>
          <NuxtLink :to="`/packages/${photoPackage.path}/notice`">預訂注意事項</NuxtLink>
        </li>
      </ul>
      <NuxtPage />
    </section>

    <section class="container mb-20">
      <h3 class="mb-2">了解更多方案</h3>
      <Swiper :slides-per-view="3" :space-between="24">
        <SwiperSlide
          v-for="(photoPackage, index) in morePhotoPackages"
          :key="photoPackage._id"
          class="more-swiper-slide"
        >
          <Card :photoPackage="photoPackage" :index="index"></Card>
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>

<style scoped lang="scss">
.more-swiper-slide {
  height: auto;
}
</style>
