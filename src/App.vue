<script setup>
  import { ref, computed } from 'vue'
  import { cookieStore } from './store/cookie';
  // import MainNavBar from "./components/Nav/main-navbar.vue"
  import FlashMessage from './components/Flash/message/Flash-Message.vue';

  const store = cookieStore()

  const isMessage = ref(store.isAceptCookie)
  const IsMessage = computed({
    get() { return isMessage.value },
    set(val) { isMessage.value = val }
  })

  function ShowMessage () { 
    store.UserAceptCookie()
    IsMessage.value = store.isAceptCookie
  }
</script>

<template>
  <!-- <MainNavBar /> -->
  <div 
    class="content"
  >
    <RouterView />
  </div>

  <FlashMessage 
    v-show="!IsMessage"
    @show-message="ShowMessage"
  >
    <template #title>
      Uso de Cookie
    </template>
    <template #message>
      Olá! Gostaríamos de informar que nosso site utiliza cookies para melhorar sua experiência de navegação.<br>
      Ao continuar navegando em nosso site, você concorda com o uso de cookies de acordo com nossa política de privacidade
    </template>
  </FlashMessage>
</template>

<style scoped lang="scss">  
.content {
    min-height: 100vh;

    @apply w-full flex flex-row justify-center items-center;
  }
</style>

