<script setup>
    import { ref } from 'vue';
    import { computed } from 'vue';

    const emits = defineEmits(['changeIsStudent'])

    function sendEmit() {
      emits('changeIsStudent')
    }

    const formValues = ref({"email": '', "passwd": ''});
    const error = ref({"emailErrors": '', "passwdErrors": ''})
    const classForm = ref('formProfessor__content__input acept')
    
    const FormValues = computed({
        get() { return formValues.value },
        set(value) { formValues.value = value }
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
      Error.value.emailErrors = ''
      Error.value.passwdErrors = ''

      event.preventDefault()

      let isEmpy = IsNotEmpty()
      let isMinLen = IsMinLength(8)
      let IsNotSpa = IsNotSpace()

      isContinue = isEmpy && isMinLen && IsNotSpa

      ClassForm.value = Error.value == '' ? "formProfessor__content__input acept" : "formProfessor__content__input error"

      if(isContinue) {
        console.log("Login Feito")
      }
    }

    function IsNotEmpty() {
      let isEmpty = true;

      if(FormValues.value.email == '') {
        isEmpty = false
        Error.value.emailErrors = "Digite seu email"
      }

      if(FormValues.value.passwd == '') {
        isEmpty = false
        Error.value.passwdErrors = "Digite sua senha"
      }

      return isEmpty
    }

    function IsMinLength(num) {
      if(Error.value.passwdErrors) return
      let isMinLenght = true;

      if(FormValues.value.passwd.length != num) {
        isMinLenght = false
        Error.value.passwdErrors = "Senha muito curta ou muito comprida"
      }

      return isMinLenght
    }

    function IsNotSpace() {
      if(Error.value.emailErrors || Error.value.passwdErrors) return
      let isSpace = true;

      if(FormValues.value.email.indexOf(' ') >= 0) {
        isSpace = false;
        Error.value.emailErrors = "Email possui espaço"
      }

      if(FormValues.value.passwd.indexOf(' ') >= 0) {
        isSpace = false;
        Error.value.passwdErrors = "Senha possui espaço"
      }

      return isSpace;
    }

    const buttons = [
      {
        "id": "1",
        "class": "formProfessor__button__link",
        "type": "submit",
        "content": "Entrar",
        "click": ""
      },
      {
        "id": "2",
        "class": "formProfessor__button__login",
        "type": "button",
        "content": "Estudante",
        "click": sendEmit
      }
    ]
</script>

<template>
  <form 
    class="formProfessor" 
    method="post"
    action="/"
    @submit="submitForm($event)"
  >
    <div 
      class="formProfessor__content"
    >       
      <input 
        v-model="FormValues.email"
        placeholder="Digite seu email"
        :class="ClassForm"
        type="email" 
        name="email" 
        autocomplete="off"
      >

      <span 
        v-show="Error.emailErrors"
        class="text-xs text-error px-4"
      >
        {{ Error.emailErrors }}
      </span>
    </div>

    <div 
      class="formProfessor__content"
    >       
      <input 
        v-model="FormValues.passwd"
        placeholder="Digite ua senha"
        :class="ClassForm"
        type="password" 
        name="passwd" 
        autocomplete="off"
      >

      <span 
        v-show="Error.passwdErrors"
        class="text-xs text-error px-4"
      >
        {{ Error.passwdErrors }}
      </span>
    </div>

    <div 
      class="formProfessor__button"
    >
      <button 
        v-for="(button) in buttons"
        :key="button.id"
        :class="button.class"
        :type="button.type"
        @click="button.click"
      >
        {{ button.content }}
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

    .formProfessor {
        @apply 
            w-full
            h-full

            grid
            grid-rows-3
            
            font-semibold;

        &__content {
            @apply self-center;

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

            &:nth-child(2) {
              @apply self-start;
            }
        }

        &__button {
          @apply 

            flex
            flex-col
            gap-2;

          button {
            @apply  
              cursor-pointer 
              transition-colors 
              
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