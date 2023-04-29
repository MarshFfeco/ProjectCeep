<script setup>
  const props = defineProps({
    link: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <a 
    class="flex justify-center items-center"
    :href="props.link"
    :target="props.target"
  >
    <slot name="message" />
  </a>
</template>

<style scoped lang="scss">
  .MlinkIcon {
    @apply
      flex
      justify-center
      items-center;
  }
</style>