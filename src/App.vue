<script setup>
  import Card from './components/Card.vue';
</script>

<template class="config">
    <div class="bg">
      <Card >
        <template v-slot:type>
          ALUNO
        </template>
      </Card>
      <Card is-professor >
        <template v-slot:type>
          PROFESSOR
        </template>
      </Card>
    </div>

  <footer class="w-screen text-center flex items-center justify-center">
    <p>Made with <v-icon name="bi-heart-fill" animation="pulse" hover fill="red" /> by MarshFfeco</p>
  </footer>
</template>

<style scoped lang="scss">
  .config {
    @apply w-screen max-w-full h-auto;
  }

  .bg {
    height: auto;

    @apply w-full flex flex-row bg-gray-50 py-8;

    @media (max-width: 830px) {
      @apply flex-col gap-9;
    }
  }

  footer {
    height: 5vh;
  }
</style>

