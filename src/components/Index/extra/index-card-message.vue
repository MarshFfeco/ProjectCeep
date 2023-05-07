<script setup>
  const props = defineProps({
    welcomeTo: {
      type: String,
      required: true
    },
    toggleButton: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="IndexMain__card__message">
    <h2>Bem vindo <i>{{ props.welcomeTo }}</i></h2>
    <v-icon
      class="text-purple-700"
      :name="props.toggleButton" 
      scale="1"
    />
  </div>
</template>

<style scoped lang="scss">
  .IndexMain__card__message {
      @apply
        h-auto

        flex
        flex-row
        
        justify-between
        items-center

        font-semibold
        text-lg
        leading-10;

        i {
          @apply text-purple-700 underline;
        }
  }
</style>