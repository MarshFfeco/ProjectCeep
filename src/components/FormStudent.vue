<script setup>
    import { ref } from 'vue';
    import { computed } from 'vue';

    import { useVuelidate } from '@vuelidate/core'
    import { required, minLength } from '@vuelidate/validators'

    const courseCode = ref('');
    
    const CourseCode = computed({
        get() { return courseCode.value },
        set(value) { courseCode.value = value }
    })

    const rules = {
      CourseCode: { required, minLength: minLength(8) }, // Matches state.firstName  
    }

    const v$ = useVuelidate(rules, courseCode)
</script>

<template>
  <form 
    class="formStudent" 
    action="#" 
    method="post"
  >
    <div 
      class="formStudent__content"
    >
      <label 
        for="code"
      >
        Código
      </label>
            
      <input 
        v-model="CourseCode"
        :class="{ 'formStudent__content__input error': v$.CourseCode.$error ? !v$.CourseCode.$error: 'formStudent__content__input error' }" 
        type="text" 
        name="code"
        autocomplete="off"
      >

      <span 
        v-show="!v$.CourseCode.$error" 
        class="text-xs text-error"
      >
        Deu ruim
      </span>
    </div>

    <input 
      type="submit"    
      value="entrar"
    >
  </form>
</template>

<style scoped lang="scss">
    .acept {
        @apply border-red-900; 
    }

    .error {
        @apply border-gray-900; 
    }

    .formStudent {
        @apply 
            flex
            flex-col
            gap-1
            font-semibold;

        &__content {
            label {
                @apply block 
                    text-gray-900 
                    text-sm 
                    font-bold 
            }

            &__input {
                @apply 
                    w-full

                    border-b-2 
                    appearance-none 
                    focus:outline-none

                    bg-transparent 

                    py-2 
                    px-3 
                    
                    text-gray-900 
                    leading-tight;
            }
        }
    }

</style>