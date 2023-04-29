<script setup>
  import AParagraph from '../../atoms/A-paragraph.vue';
  import ATitleOne from '../../atoms/A-title-one.vue';
</script>

<template>
  <div class="MMessageOne">
    <ATitleOne>
      <template #message>
        Campus Virtual CEEP
      </template>
    </ATitleOne>
    <AParagraph>
      <template #message>
        Para os <i>Estudantes</i> e <i>Professores</i> do CEEP
      </template>
    </AParagraph>
  </div>
</template>

<style scoped lang="scss">
  .MMessageOne {
    @apply
      font-bold 
      text-3xl
      text-gray-50 
      leading-10;
      p {
          @apply 
              text-base
              font-normal
              leading-6
              text-gray-300;
      }
  }
</style>