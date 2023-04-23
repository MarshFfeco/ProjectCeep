<script setup>
  import Footer from './components/FooterAll.vue';
  import HeaderIndex from './components/HeaderIndex.vue';
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

<style scoped lang="scss">
  /* .main {
    margin-top: 5vh;

    @apply w-full h-auto;
  } */

  .content {
    height: 90vh;
    padding-top: 5vh;

    @apply w-full flex flex-row justify-center items-center;

    @media (max-width: 830px) {
      @apply flex-col gap-9;
    }
  }
</style>

