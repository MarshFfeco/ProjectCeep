<script setup>
  import AInput from '../../atoms/Inputs/A-input.vue';
  import AInputError from '../../atoms/Inputs/A-input-error.vue';
  import AButton from '../../atoms/A-button.vue';

  import { ref, computed } from 'vue';

  const emits = defineEmits(['changeIsStudent'])

  function sendEmit() {
    emits('changeIsStudent')
  }

  const buttons = [
    {
      "id": "1",
      "class": "M__Student__button__login",
      "type": "submit",
      "content": "Entrar",
      "click": ""
    },
    {
      "id": "2",
      "class": "M__Student__button__link",
      "type": "button",
      "content": "Professor",
      "click": sendEmit
    }
  ]

  const courseCode = ref("");
  const error = ref('')
  const classForm = ref('M__Student__content__input acept')

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

    ClassForm.value = isContinue ? "M__Student__content__input acept" : "M__Student__content__input error"

    if(isContinue) {
      window.location.replace("/aluno");
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
    class="M__Student" 
    method="post"
    action="/"
    @submit="submitForm($event)"
  >
    <div 
      class="M__Student__content"
    >       
      <AInput 
        id="1"
        v-model="CourseCode"
        placeholder="Digite o código"
        :class="ClassForm" 
        type="text" 
        name="code"
      />
      <AInputError 
        v-show="Error"
      >
        <template #message>
          {{ Error }}
        </template>
      </AInputError>
    </div>

    <div 
      class="M__Student__button"
    >
      <AButton 
        v-for="(button) in buttons"
        :key="button.id"
        :b-style="button.class"
        :b-type="button.type"
        @click="button.click"
      >
        <template #message>
          {{ button.content }}
        </template>
      </AButton>
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

  .M__Student {
      @apply 
        w-full
        h-full

        grid
        grid-rows-2
        
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
      }

      &__button {
        @apply 

          self-end

          flex
          flex-col
          gap-2; 

        button {
          @apply  
            cursor-pointer 
            transition-colors 
            
            text-center 
            font-bold 

            rounded-full

            px-4
            py-2
            
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
