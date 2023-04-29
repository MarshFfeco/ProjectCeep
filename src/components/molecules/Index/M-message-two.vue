<script setup>
  import ATitletwo from '../../atoms/A-title-two.vue';

  const props = defineProps({
    welcomeTo: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="MMessageTwo">
    <ATitletwo>
      <template #message>
        Bem vindo {{ props.welcomeTo }}
      </template>
    </ATitletwo>
    <v-icon
      class="text-purple-700"
      name="md-personpincircle" 
      animation="ring" 
    />
  </div>
</template>

<style scoped lang="scss">
  .MMessageTwo {
    @apply  flex
      flex-row
      justify-between
      items-center
      font-semibold
      text-lg
      leading-10;
  }
</style>