<script setup>
  import mTextIcon from '../../molecules/Footer/M-text-icon.vue';
</script>

<template>
  <footer class="footer">
    <mTextIcon />
  </footer>
</template>

<style scoped lang="scss">
    .footer {
        height: 10vh;

        @apply 
          w-full 
          
          text-center 
          
          flex 
          items-center 
          gap-1 
          justify-center 
          
          bg-gray-50;
    }
</style>