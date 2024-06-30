<script lang="ts" setup>
const props = defineProps({
  photoPackage: {
    type: [Object],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const route = useRoute();

const currentPath = route.path;

const isIndex = computed(() => currentPath === '/');
const isPackages = computed(() => currentPath === '/packages');

const getClass = (index: number) => {
  const baseClass = index % 2 === 0 ? 'bg-gray-100' : 'bg-light';
  const extraClass = route.path === '/packages' ? 'lg:flex-col lg:gap-2' : '';
  return `${baseClass} ${extraClass}`;
};
</script>

<template>
  <div
    class="relative flex h-full flex-col gap-2 overflow-hidden rounded p-6 md:flex-row md:gap-8"
    :class="getClass(props.index)"
  >
    <div class="md:max-w-[240px]" :class="isPackages ? 'lg:max-w-full' : ''">
      <img
        :src="props.photoPackage.cover"
        :alt="props.photoPackage.title"
        class="aspect-square object-cover"
      />
    </div>
    <div class="flex h-full w-full flex-col items-start gap-1">
      <span class="inline-block rounded-3xl bg-white px-2 py-1">{{
        props.photoPackage.package
      }}</span>
      <h3>
        <span class="mr-1">{{ props.photoPackage.title }}</span>
        <span>{{ props.photoPackage.price }}</span>
      </h3>
      <ol class="mb-6 ml-5 list-decimal md:mb-auto">
        <li v-for="content in props.photoPackage.content">{{ content }}</li>
      </ol>
      <NuxtLink to="/" class="ml-auto" :class="isIndex ? 'stretched-link' : ''">
        <div class="flex gap-1">
          <span class="material-symbols-outlined"> arrow_right_alt </span>
          <span>查看細節</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
