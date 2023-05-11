<script setup>
  const props = defineProps({
    style: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <button
    type="menu"
    :class="props.style"
  >
    <v-icon 
      class="text-gray-50"
      name="md-menu"
      scale="1.5"
    />
  </button>
</template>