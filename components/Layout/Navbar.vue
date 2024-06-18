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
  <header class="container py-4 relative">
    <div class="flex justify-between">
      <h1 class="text-[0]">
        <NuxtLink
          to="/"
          class="bg-contain bg-center bg-no-repeat w-[258px] h-[66px] inline-block bg-[url('@/assets/images/logo-name-white.svg')]"
        ></NuxtLink>
        艾里攝影工作室
      </h1>
      <div>
        <button class="md:hidden" @click="toggleHamburgerMenu">
          <span class="material-symbols-outlined text-[40px]"> menu </span>
        </button>
        <nav
          class="absolute bg-secondary text-white w-full max-h-0 top-full left-0 z-10 transition-max-height duration-300 md:static md:max-h-auto md:bg-white md:text-secondary md:transition-none"
          :class="{ 'max-h-96': isHamburgerMenuVisible }"
        >
          <ul
            class="flex flex-col gap-4 text-center py-4 md:flex-row lg:gap-10"
          >
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
