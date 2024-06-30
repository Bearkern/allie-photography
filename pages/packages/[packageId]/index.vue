<script lang="ts" setup>
const route = useRoute();
const { packageId } = route.params;
</script>

<template>
  <div>
    <h2>{{ packageId }}</h2>
  </div>
</template>

<style scoped></style>
