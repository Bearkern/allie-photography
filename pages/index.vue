<script lang="ts" setup>
import type { PhotoPackageBase } from '@/types/package';

const { getAllPhotoPackages } = useApi();
const allPhotoPackagesResult = (await getAllPhotoPackages()) as {
  data: { value: PhotoPackageBase[] };
};

const allPhotoPackages = ref<PhotoPackageBase[]>([]);
const { data: allPhotoPackagesData } = allPhotoPackagesResult;
allPhotoPackages.value = [...allPhotoPackagesData.value].splice(0, 3);
</script>

<template>
  <section class="min-h-[520px] bg-[url('@/assets/images/index/banner.jpg')] bg-cover bg-center">
    <div class="container flex h-full flex-col items-start justify-center">
      <p class="mb-4 text-lg text-white">
        每個生命的誕生是如此珍貴與感恩，<br />
        用最真誠的心紀錄媽咪和寶貝的每一刻、每一秒、每一個瞬間。
      </p>
      <button class="btn btn-lg">前往預約</button>
    </div>
  </section>

  <section class="container flex flex-col justify-center gap-6 py-12 lg:flex-row">
    <div class="lg:max-w-[calc(theme('screens.xl')*1/3-24px)]">
      <p class="mb-4">2021 年 5 月，艾里制定全新工作室理念。</p>
      <p class="mb-4 text-md">
        理念為明確指示艾里的前進方向，確實明示艾里「愛你寶貝」之宣言為寶貝們紀錄攝影。
      </p>
      <button class="btn btn-primary">查看更多</button>
    </div>
    <ul class="flex grow gap-4 lg:max-w-[calc(theme('screens.xl')*1/2-24px)] lg:gap-6">
      <li
        class="min-h-[232px] grow bg-[url('@/assets/images/index/about1.jpg')] bg-cover bg-center shadow lg:min-h-[360px]"
      ></li>
      <li
        class="min-h-[232px] grow bg-[url('@/assets/images/index/about2.jpg')] bg-cover bg-center shadow lg:min-h-[360px]"
      ></li>
      <li
        class="min-h-[232px] grow bg-[url('@/assets/images/index/about3.jpg')] bg-cover bg-center shadow lg:min-h-[360px]"
      ></li>
    </ul>
  </section>

  <section class="bg-light pb-16 pt-10 lg:pb-20 lg:pt-12">
    <div class="container">
      <h2 class="mb-6">攝影作品</h2>
      <ul class="flex flex-col gap-6 md:flex-row">
        <li class="md:w-1/3">
          <div class="flex h-full flex-col">
            <div class="mb-2 overflow-hidden rounded">
              <img
                src="@/assets/images/index/portfolio1.jpg"
                alt="新生兒寫真"
                class="aspect-square object-cover"
              />
            </div>
            <div>
              <h3>新生兒寫真</h3>
              <p>寶寶一生中最珍貴美的回憶，出生14-21天即可拍攝。</p>
            </div>
          </div>
        </li>
        <li class="md:w-1/3">
          <div class="flex h-full flex-col">
            <div class="mb-2 overflow-hidden rounded">
              <img
                src="@/assets/images/index/portfolio2.jpg"
                alt="孕婦寫真"
                class="aspect-square object-cover"
              />
            </div>
            <div class="mt-auto">
              <h3>孕婦寫真</h3>
              <p>孕媽咪最美麗的體態，28-32周的肚子大小最好。 曲線漂亮剛好、一切都很好！</p>
            </div>
          </div>
        </li>
        <li class="md:w-1/3">
          <div class="flex h-full flex-col">
            <div class="mb-2 overflow-hidden rounded">
              <img
                src="@/assets/images/index/portfolio3.jpg"
                alt="週歲寫真"
                class="aspect-square object-cover"
              />
            </div>
            <div>
              <h3>週歲寫真</h3>
              <p>讓我們一起來迎接寶寶的第一個生日吧～</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section class="container pb-16 pt-10 lg:pb-20 lg:pt-12">
    <h2 class="mb-6">攝影方案</h2>
    <ul class="flex flex-col flex-wrap gap-6 md:flex-row">
      <li
        v-for="(photoPackage, index) in allPhotoPackages"
        :key="photoPackage._id"
        class="md:w-full lg:w-2/3"
        :class="index % 2 === 0 ? '' : 'lg:ml-auto'"
      >
        <Card :photoPackage="photoPackage" :index="index"></Card>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
