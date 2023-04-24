<script setup>
  import Footer from './components/FooterAll.vue';
  import HeaderIndex from './components/HeaderAll.vue';
</script>

<template>
  <HeaderIndex />

  <div 
    class="content"
  >
    <RouterView />
  </div>

  <Footer /> 
</template>

<style scoped lang="scss">  .content {
    min-height: 100vh;

    @apply w-full flex flex-row justify-center items-center;

    @media (max-width: 830px) {
      @apply flex-col gap-9;
    }
  }
</style>

