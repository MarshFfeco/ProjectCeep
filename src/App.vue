<script setup>
  import OFooter from './components/organisms/Footer/O-footer.vue';

  import ONavigation from './components/organisms/Nav/O-navigation.vue';
</script>

<template>
  <ONavigation />

  <div 
    class="content"
  >
    <RouterView />
  </div>

  <OFooter />
</template>

<style scoped lang="scss">  
.content {
    min-height: 100vh;

    @apply w-full flex flex-row justify-center items-center;

    @media (max-width: 830px) {
      @apply flex-col gap-9;
    }
  }
</style>

