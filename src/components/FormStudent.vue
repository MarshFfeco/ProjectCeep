<script setup>
    import { ref } from 'vue';
    import { computed } from 'vue';

    const courseCode = ref('');
    const error = ref('')
    const classForm = ref('formStudent__content__input acept')
    
    const CourseCode = computed({
        get() { return courseCode.value },
        set(value) { courseCode.value = value }
    })

    const Error = computed({
      get() { return error.value },
      set(val) { error.value = val }
    })

    const ClassForm = computed({
      get() { return classForm.value },
      set(val) { classForm.value = val }
    })

    function submitForm(event) {
      let isContinue = false;
      Error.value = ''

      event.preventDefault()

      isContinue = IsNotEmpty() && IsMinLength(8) && IsNotSpace()

      ClassForm.value = Error.value == '' ? "formStudent__content__input acept" : "formStudent__content__input error"

      if(isContinue) {
        console.log("Login Feito")
      }
    }

    function IsNotEmpty() {
      let isEmpty = true;

      if(CourseCode.value == '') {
        isEmpty = false
        Error.value = "Digite um código"
      }

      return isEmpty
    }

    function IsMinLength(num) {
      let isMinLenght = true;

      if(CourseCode.value.length != num) {
        isMinLenght = false
        Error.value = "Código muinto pequeno ou muinto longo"
      }

      return isMinLenght
    }

    function IsNotSpace() {
      let isSpace = true;

      if(CourseCode.value.indexOf(' ') >= 0) {
        isSpace = false;
        Error.value = "Código possui espaço"
      }

      return isSpace;
    }
</script>

<template>
  <form 
    class="formStudent" 
    method="post"
    action="/"
    @submit="submitForm($event)"
  >
    <div 
      class="formStudent__content"
    >       
      <input 
        v-model="CourseCode"
        placeholder="Digite o código"
        :class="ClassForm" 
        type="text" 
        name="code"
        autocomplete="off"
      >

      <span 
        v-show="Error"
        class="text-xs text-error px-4"
      >
        {{ Error }}
      </span>
    </div>

    <div 
      class="formStudent__button"
    >
      <button 
        class="formStudent__button__login"
        type="submit"
      >
        Entrar
      </button>

      <button 
        class="formStudent__button__link"
        type="button"
      >
        Professor
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss">
    .error {
        @apply border-red-700; 
    }

    .acept {
        @apply border-gray-900; 
    }

    .formStudent {
        @apply 
            w-full
            h-full

            flex
            flex-col
            justify-evenly
            
            font-semibold;

        &__content {
            @apply h-1/4;

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

        &__button {
          @apply 
            h-1/2

            flex
            flex-col
            justify-evenly
            gap-2;

          button {
            @apply  
              cursor-pointer 
              transition-colors 

              w-full
              
              text-center 
              font-bold 

              px-8
              py-4
              
              border-solid;
          }

          &__login {
            @apply 
            text-gray-50
 
              border 
              border-transparent 
              bg-purple-700;

            &:hover { @apply bg-purple-900; }
          }

          &__link {
            @apply
              border-2
              border-purple-700
              text-purple-700;
          }
        }
    }

</style>