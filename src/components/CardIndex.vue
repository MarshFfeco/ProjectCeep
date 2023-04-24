<script setup>
    import { ref } from 'vue';
    import { computed } from 'vue';

    import FormStudent from './FormStudent.vue';
    import FormProfessor from './FormProfessor.vue';

    const isStudent = ref(true);
    const welcomeTo = ref('Estudante');

    const IsStudent = computed({
      get() { return isStudent.value },
      set(val) { isStudent.value = val }
    })
    const WelcomeTo = computed({
      get() { return welcomeTo.value},
      set(val) {welcomeTo.value = val }
    })

    function ChangeIsStudent() {
      IsStudent.value = !isStudent.value
      WelcomeTo.value = IsStudent.value ? "Estudante" : "Professor"
    }
</script>

<template>
  <div class="card__container">
    <div class="card__container__content">
      <h1>Campus Virtual CEEP</h1>
      <p>Para os <i>Estudantes</i> e <i>Professores</i> do CEEP</p>
    </div>
    <div class="card__style">
      <div class="card__style__content">
        <h2>Bem vindo {{ WelcomeTo }}</h2>
        <v-icon
          name="md-personpincircle" 
          animation="ring" 
        />
      </div>

      <div class="card__form">
        <FormStudent 
          v-show="IsStudent" 
          @change-is-student="ChangeIsStudent" 
        />

        <FormProfessor 
          v-show="!IsStudent" 
          @change-is-student="ChangeIsStudent" 
        />
      </div>

      <div class="card__style__down">
        <a href="">
          <v-icon 
            name="bi-chevron-double-down" 
            animation="ring" 
          />
        </a>
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
                
                px-8
                py-4

                flex
                flex-col
                gap-0;

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
          min-height: 100vh;
            @apply       
                w-full
                h-full

                mt-9

                py-6
                px-4

                rounded-t-2xl
                bg-gray-50
                border-none;
            
            &__content {
                @apply 
                flex
                flex-row
                justify-between
                items-center

                font-semibold
                text-lg
                text-purple-700 
                leading-10;
            }

            &__down {
              @apply 
                flex
                justify-center
                items-center
                
                mt-8
                
              text-purple-700;
            }
        }

        &__form {
            @apply 
                w-full

                pt-9

                h-96;
        }
    }
</style>