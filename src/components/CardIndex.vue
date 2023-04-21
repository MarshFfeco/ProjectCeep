<script setup>
    import FormStudent from './FormStudent.vue';

</script>

<template>
  <div class="card__container">
    <div class="card__container__content">
      <h1>Campus Virtual CEEP</h1>
      <p>Para os estudantes do CEEP</p>
    </div>
    <div class="card__style">
      <div class="card__style__content">
        <h2>Bem vindo Estudante</h2>
        <v-icon
          name="md-personpincircle" 
          animation="ring" 
        />
      </div>

      <div class="card__form">
        <FormStudent />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .card {
        &__container {
            @apply 
                w-full 
                h-full
                
                pt-12
                /* PADDING MAY BE REMOVED IN FUTURE */
                ps-8
                pe-8

                flex
                flex-col
                gap-10;

                &__content {
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
        }

        &__style {
            @apply       
                w-full
                h-auto

                py-6
                px-4

                rounded-2xl    
                bg-purple-700;
            
            &__content {
                @apply 
                flex
                flex-row
                justify-between
                items-center

                font-semibold
                text-lg
                text-gray-50 
                leading-10;
            }
        }

        &__form {
            @apply 
                w-full
                h-full
                
                py-6
                px-4;
        }
    }
</style>