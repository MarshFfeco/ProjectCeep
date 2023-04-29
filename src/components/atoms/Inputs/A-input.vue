<!-- eslint-disable vue/require-default-prop -->
<script setup>
  import { ref, computed } from 'vue';

  const valueInput = ref('')

  const ValueInput = computed({
    get() { return valueInput.value },
    set(val) { valueInput.value = val }
  })

  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    name :{
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true
    }
  })

</script>

<template>
  <input 
    :id="props.id"
    v-model="ValueInput"
    :class="props.class" 
    :type="props.type" 
    :placeholder="props.placeholder" 
    :name="props.name"
    autocomplete="off"
  >
</template>