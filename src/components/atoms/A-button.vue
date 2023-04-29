<script setup>
  const props = defineProps({
    bType: {
      type: String,
      required: true
    },
    bStyle: {
      type: String,
      required: true
    },
  })
</script>

<template>
  <button
    :type="props.bType"
    :class="props.bStyle"
  >
    <slot name="message" />
  </button>
</template>