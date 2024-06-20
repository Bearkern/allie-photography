<script lang="ts" setup>
const route = useRoute();
const isHamburgerMenuVisible = ref(false);

const toggleHamburgerMenu = () => {
  isHamburgerMenuVisible.value = !isHamburgerMenuVisible.value;
};

watch(
  () => route.fullPath,
  () => {
    isHamburgerMenuVisible.value = false;
  },
);
</script>

<template>
  <header class="container relative py-4">
    <div class="flex justify-between">
      <h1 class="text-[0]">
        <NuxtLink
          to="/"
          class="inline-block h-[66px] w-[258px] bg-[url('@/assets/images/logo-name-white.svg')] bg-contain bg-center bg-no-repeat"
        ></NuxtLink>
        艾里攝影工作室
      </h1>
      <div>
        <button class="md:hidden" @click="toggleHamburgerMenu">
          <span class="material-symbols-outlined text-[40px]"> menu </span>
        </button>
        <nav
          class="transition-max-height absolute left-0 top-full z-10 max-h-0 w-full bg-secondary text-white duration-300 md:static md:max-h-96 md:bg-white md:text-secondary md:transition-none"
          :class="{
            'max-h-96': isHamburgerMenuVisible,
            'max-h-0 overflow-hidden': !isHamburgerMenuVisible,
          }"
        >
          <ul class="flex flex-col gap-4 py-4 text-center md:flex-row lg:gap-10">
            <li><NuxtLink to="/about">關於艾里</NuxtLink></li>
            <li><NuxtLink to="/portfolios">攝影作品</NuxtLink></li>
            <li><NuxtLink to="/packages">攝影方案</NuxtLink></li>
            <li><NuxtLink to="/contact">聯絡我們</NuxtLink></li>
            <li>
              <NuxtLink to="/booking">
                <span class="material-symbols-outlined"> shopping_cart </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
