<script lang="ts" setup></script>

<template>
  <footer class="mt-auto bg-secondary">
    <div class="container flex flex-col items-center py-12 text-white">
      <img
        src="@/assets/images/logo-white.svg"
        class="mb-4 h-[66px] w-[66px]"
        alt="艾里攝影工作室 logo"
      />
      <nav class="mb-6">
        <ul class="flex">
          <li class="border-r pr-2 md:pr-4">
            <NuxtLink to="/about">關於艾里</NuxtLink>
          </li>
          <li class="border-r px-2 md:px-4">
            <NuxtLink to="/portfolios">攝影作品</NuxtLink>
          </li>
          <li class="border-r px-2 md:px-4">
            <NuxtLink to="/packages">攝影方案</NuxtLink>
          </li>
          <li class="pl-2 md:pl-4">
            <NuxtLink to="/contact">聯絡我們</NuxtLink>
          </li>
        </ul>
      </nav>
      <p>© 2024 Allie 艾里新生兒攝影 by Clara Cai All rights reserved</p>
    </div>
  </footer>
</template>

<style scoped></style>
