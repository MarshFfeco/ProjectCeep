<script setup>
  import IndexTitle from "./extra/index-title.vue"
  import IndexCard from "./extra/index-card.vue";
</script>

<template>
  <main class="IndexMain">
    <IndexTitle />

    <IndexCard />
  </main>
</template>

<style scoped lang="scss">
  .IndexMain {
    @apply
      h-full;
  }
</style>