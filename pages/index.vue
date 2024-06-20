<script lang="ts" setup></script>

<template>
  <section class="min-h-[520px] bg-[url('@/assets/images/home-banner.jpg')] bg-cover bg-center">
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
        class="min-h-[232px] grow bg-[url('@/assets/images/home-about1.jpg')] bg-cover bg-center lg:min-h-[360px]"
      ></li>
      <li
        class="min-h-[232px] grow bg-[url('@/assets/images/home-about2.jpg')] bg-cover bg-center lg:min-h-[360px]"
      ></li>
      <li
        class="min-h-[232px] grow bg-[url('@/assets/images/home-about3.jpg')] bg-cover bg-center lg:min-h-[360px]"
      ></li>
    </ul>
  </section>
</template>

<style scoped></style>
