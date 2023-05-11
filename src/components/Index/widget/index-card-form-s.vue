<script setup>
  import { ref, computed } from 'vue'

  import student from '../../../service/student'
  import FlashMessage from '../../Flash/message/Flash-Message.vue';


  const emits =  defineEmits(['ChangeIsProfessor'])

  function sendEmit() {
    emits('ChangeIsProfessor')
  }


  const code = ref('')
  const Code = computed({
    get() { return code.value },
    set(val) { code.value = val }
  })

  const name = ref('')
  const Name = computed({
    get() { return name.value },
    set(val) { name.value = val }
  })

  const erro = ref({
    "code": "",
    "name": ""
  })
  const Erro = computed({
    get() { return erro.value },
    set(val) { erro.value = val }
  })

  function SubmitStudent() {
    let form = {
      'code': Code.value
    }

    student.loginStudent(form).then(res => {
      if(!res.data) return Erro.value = "Código incorreto" 

      window.location.href = "student"
      Erro.value = ""
    }).catch(err => {
      console.log("erro: " + err)
    })
  }

  const isMessage = ref(false)
  const IsMessage = computed({
    get() { return isMessage.value },
    set(val) { isMessage.value = val }
  })

  function ShowMessage () { IsMessage.value = !IsMessage.value }
</script>

<template>
  <div>
    <form 
      class="IndexMain__card__FormS"
      action="#"
      @submit.prevent="SubmitStudent"
    >
      <!--GROUP INPUT-->
      <div class="IndexMain__card__FormS__input__group">
        <!--INPUT USER NAME-->
        <div class="IndexMain__card__FormS__inputs">
          <input 
            v-model="Name"
            name="name"
            autocomplete="off"
            type="text" 
            placeholder="Digite seu nome"
            required
            minlength="8"
            maxlength="8"
          >

          <span
            v-show="Erro.name"
            class="text-red-600 pt-4"
          >
            {{ Erro.name }}
          </span>
        </div>

        <!--INPUT CODE-->
        <div class="IndexMain__card__FormS__inputs">
          <div class="IndexMain__card__FormS__inputs__passwd">
            <a 
              href="#" 
              class=""
              @click="ShowMessage"
            >
              Esqueceu o código?
            </a>
          </div>
          <input 
            v-model="Code"
            name="code"
            autocomplete="off"
            type="text" 
            placeholder="Digite o código"
            required
            minlength="8"
            maxlength="8"
          >

          <span
            v-show="Erro.code"
            class="text-red-600 pt-4"
          >
            {{ Erro.code }}
          </span>
        </div>
      </div>

      <!--GROUP BUTTONS-->
      <div class="IndexMain__card__FormS__button__group">
        <!--BUTTON LOGIN USER-->
        <div class="IndexMain__card__FormS__buttons">
          <button type="submit">
            Entrar
          </button>
        </div>
        <!--BUTTON CHANGE FOR LOGIN PROFESSOR-->
        <div class="IndexMain__card__FormS__buttons">
          <a 
            href="#"  
            @click="sendEmit"
          >
            Área exclusiva para <i class="text-purple-700 font-semibold">professores</i>
          </a>
        </div>
      </div>
    </form>
    
    <FlashMessage
      v-show="IsMessage"  
      @show-message="ShowMessage"
    >
      <template #title>
        Esqueci o código?
      </template>
      <template #message>
        Entre em contato com a cordenação ou com os professores de informática.
      </template>
    </FlashMessage>
  </div>
</template>

<style scoped lang="scss">
  .IndexMain__card__FormS {
    display: grid;
    grid-template-rows: 1fr 0.5fr;
     
      @apply h-full;
    
    &__input__group { @apply h-full w-full flex flex-col justify-center gap-2; }
    &__button__group { @apply h-full w-full flex flex-col justify-end gap-3; }

    &__inputs  {
      input {
        @apply 
          w-full

          border-2 
          border-purple-700
          
          rounded-md

          appearance-none 

          focus:outline-none

          bg-white 

          py-4 
          px-3 
          
          text-purple-700 
          leading-tight;
      }

      &__passwd {
        @apply 
          w-full 
          my-1 
        
          text-sm 
          text-right 
          text-purple-700 
          font-semibold;
      }
    }

    &__buttons {
      button {
        @apply
          w-full
          py-4 
          px-3
          
          font-bold
          text-center
          text-gray-50

          border-2

          rounded-lg

          bg-purple-600
          
          transition-all
          ease-out 
          duration-300;
        
          &:hover {
            @apply bg-gray-100 text-purple-700 border-purple-700;
          }

          &:disabled {
            @apply bg-purple-950;
          }
      }
    }
  }
</style>