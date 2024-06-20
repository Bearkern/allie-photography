<script lang="ts" setup></script>

<template>
  <div>
    <h1>關於我們</h1>
    <ul>
      <li>
        <NuxtLink to="/about">index</NuxtLink>
        <NuxtLink to="/about/faq">faq</NuxtLink>
        <NuxtLink to="/about/team">team</NuxtLink>
      </li>
    </ul>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
a {
  padding: 0 20px;
}
</style>
