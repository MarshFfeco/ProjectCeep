<script setup>
    import { ref } from 'vue';
    import { computed } from 'vue';

    import MLinkIcon from '../../molecules/M-link-icon.vue';

    import MMessageOne from '../../molecules/Index/M-message-one.vue';
    import MMessageTwo from '../../molecules/Index/M-message-two.vue';

    import MStudent from '../../molecules/Form/M-student.vue';
    import MProfessor from '../../molecules/Form/M-professor.vue';

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
    <MMessageOne />

    <div class="card__style">
      <MMessageTwo :welcome-to="WelcomeTo" />

      <div class="card__form">
        <MStudent 
          v-show="IsStudent" 
          @change-is-student="ChangeIsStudent" 
        />

        <MProfessor 
          v-show="!IsStudent"
          @change-is-student="ChangeIsStudent" 
        />
      </div>

      <div class="w-full flex justify-center items-center mt-9">
        <MLinkIcon
          class=""
          link="#"
          target="_self"
        >
          <template #message>
            <v-icon 
              class="text-purple-700"
              name="bi-chevron-double-down"
              scale="1"
            />
          </template>
        </MLinkIcon>
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
    }

    &__form {
        @apply 
            w-full

            pt-10

            h-80;
    }
  }
</style>