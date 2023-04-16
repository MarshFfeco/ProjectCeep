<script setup>
  import FormLogin from './components/FormLogin.vue';
  import Card from './components/Card.vue';
</script>

<template>
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
  <!-- <div id="Register" class="bg-indigo-500 h-screen flex xs:flex-col xs:justify-around xs:items-center lg:flex-row lg:justify-around  text-zinc-300">
    
    <div class="xs:h-1/3 lg:w-2/4 flex justify-center items-center ">
      <img class="lg:max-w-lg xs:max-w-[15rem]" src="./assets/image/login.png" alt="">
    </div>

    <FormLogin class="bg-zinc-950 lg:h-full xs:h-2/3 xs:w-full lg:px-10 xs:px-10 lg:w-1/2 flex justify-center items-center" />
  </div> -->

  <footer class="w-screen text-center flex items-center justify-center">
    <p>Made with <v-icon name="bi-heart-fill" animation="pulse" hover fill="red" /> by Anderson Borba</p>
  </footer>
</template>

<style scoped lang="scss">
  .bg {
    height: 95vh;

    @apply w-screen flex bg-gray-50;
  }

  footer {
    height: 5vh;
  }
</style>

