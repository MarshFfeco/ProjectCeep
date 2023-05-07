<template>
  <div class="IndexMain__title">
    <h1> Campus Virtual CEEP</h1>
    <p>Para os <i>Estudantes</i> e <i>Professores</i> do CEEP</p>
  </div>
</template>

<style scoped lang="scss">
  .IndexMain {
    &__title {
      @apply
        h-1/6

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
  }
</style>