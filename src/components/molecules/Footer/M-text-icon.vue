<script setup>
  import AParagraph from '../../atoms/A-paragraph.vue';
</script>

<template>
  <AParagraph>
    <template #message>
      Made With 
    </template>
  </AParagraph>

  <v-icon 
    name="bi-heart-fill"
    animation="pulse"
    hover
    fill="red"
  />

  <AParagraph>
    <template #message>
      by MasrhFfeco
    </template>
  </AParagraph>
</template>