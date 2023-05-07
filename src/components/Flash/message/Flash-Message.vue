<script setup>
  const emits =  defineEmits(['ShowMessage'])

  function ShowMessage() {
    emits('ShowMessage')
  }
</script>

<template>
  <Transition name="bounce">
    <section 

      class="FlashMessage"
    >
      <!--TITLE-->
      <div class="FlashMessage__title">
        <h2><slot name="title" /></h2>
      </div>
      <!--MESSAGE-->
      <div class="FlashMessage__message">
        <p><slot name="message" /></p>
      </div>
      <!--BUTTON CLOSE-->
      <div class="FlashMessage__close">
        <button 
          class="w-full h-full"
          type="button"
          @click="ShowMessage"  
        >
          <v-icon 
            name="fa-check" 
            scale="2" 
            animation="float"
          />
        </button>
      </div>
    </section>
  </Transition>
</template>

<style scoped lang="scss">
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
  .FlashMessage {
    display: grid;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    @apply
      w-full

      absolute

      left-0
      bottom-0

      px-4
      py-8

      border-t-2
      border-purple-700
      
      bg-gray-50;

      &__title {
        @apply
          text-purple-700
          
          font-semibold
          text-lg

          underline;
      }

      &__close {
        @apply 
        text-center
        text-purple-700

        mt-4

        py-3 
        px-2 

        rounded-full

        border-2
        border-purple-700

        bg-white;
      }
  }
</style>