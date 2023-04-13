<script setup>
  import FormLogin from './components/FormLogin.vue';
</script>

<template>
  <div id="Register" class="bg-indigo-500 h-screen flex xs:flex-col xs:justify-around xs:items-center lg:flex-row lg:justify-around  text-zinc-300">
    
    <div class="xs:h-1/3 lg:w-2/4 flex justify-center items-center ">
      <img class="lg:max-w-lg xs:max-w-[15rem]" src="./assets/image/login.png" alt="">
    </div>

    <FormLogin class="bg-zinc-950 lg:h-full xs:h-2/3 xs:w-full lg:px-10 xs:px-10 lg:w-1/2 flex justify-center items-center" />
  </div>
</template>

