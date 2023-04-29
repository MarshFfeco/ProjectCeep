<script setup>
  const props = defineProps({
    aClass: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <aside
    :class="props.aClass"
  >
    <slot name="message" />
  </aside>
</template>