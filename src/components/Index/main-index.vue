<script setup>
  import IndexTitle from "./widget/index-title.vue"
  import IndexCard from "./widget/index-card.vue";
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
      h-full
      
      md:w-1/2
      md:mx-auto;
  }
</style>