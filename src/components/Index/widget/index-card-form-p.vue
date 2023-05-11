<script setup>
  import { ref, computed } from 'vue'

  import professor from '../../../service/professor'
  import FlashMessage from '../../Flash/message/Flash-Message.vue';

  const emits =  defineEmits(['ChangeIsProfessor'])

  function sendEmit() {
      emits('ChangeIsProfessor')
  }

  const passwd = ref('')
  const login = ref('')

  const Passwd = computed({
    get() { return passwd.value },
    set(val) { passwd.value = val }
  })
  const Login = computed({
    get() { return login.value },
    set(val) { login.value = val }
  })

  function SubmitProfessor() {
    let form = {
      'login': Login.value,
      'passwd': Passwd.value
    }

    professor.loginProfessor(form).then(res => {
      if(!res.data)

      window.location.href = "professor"
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
      class="IndexMain__card__FormP"
      action="#" 
      @submit.prevent="SubmitProfessor"
    >
      <!--INPUT BUTTONS-->
      <div class="IndexMain__card__FormP__input__group">
        <!--INPUT EMAIL-->
        <div class="IndexMain__card__FormP__inputs">
          <input 
            v-model="Login"
            name="email"
            autocomplete="off"
            type="email" 
            placeholder="Digite seu email"
            required
          >

        <!-- <span
          v-show="Erro.name"
          class="text-red-600 pt-4"
        >
          {{ Erro.name }}
        </span> -->
        </div>

        <!--INPUT PASSWORD-->
        <div class="IndexMain__card__FormP__inputs">
          <div class="IndexMain__card__FormP__inputs__passwd">
            <a 
              href="#" 
              class=""
              @click="ShowMessage"
            >
              Esqueceu a senha?
            </a>
          </div>
          <input 
            v-model="Passwd"
            name="passwd"
            autocomplete="off"
            type="password" 
            placeholder="Digite sua senha"
            required
            minlength="8"
            maxlength="8"
          >
 
        <!--<span
          v-show="Erro.code"
          class="text-red-600 pt-4"
        >
          {{ Erro.code }}
        </span> -->
        </div>
      </div>

      <!--GROUP BUTTONS-->
      <div class="IndexMain__card__FormP__button__group">
        <!--BUTTON LOGIN USER-->
        <div class="IndexMain__card__FormP__buttons">
          <button type="submit">
            Entrar
          </button>
        </div>
        <!--BUTTON CHANGE FOR LOGIN PROFESSOR-->
        <div class="IndexMain__card__FormP__buttons">
          <a 
            href="#"  
            @click="sendEmit"
          >
            Voltar para a área do <i class="text-purple-700 font-semibold">estudante</i>
          </a>
        </div>
      </div>
    </form>

    <FlashMessage
      v-show="IsMessage"  
      acept
      @show-message="ShowMessage"
    >
      <template #title>
        Esqueci minha Senha?
      </template>
      <template #message>
        Entre em contato com a cordenação ou com os professores de informática.
      </template>
    </FlashMessage>
  </div>
</template>

<style scoped lang="scss">
  .IndexMain__card__FormP {
    display: grid;
    grid-template-rows: 1fr 0.5fr;
    @apply 
      h-full;

    &__input__group { @apply h-full w-full flex flex-col justify-center gap-2; }
    &__button__group { @apply h-full w-full flex flex-col justify-end gap-3; }

    &__inputs {
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
          px-8
          
          font-bold
          text-center
          text-purple-600

          border-2
          border-purple-600

          rounded-lg

          bg-transparent
          
          transition-colors;
        
          &:hover {
            @apply bg-purple-700 text-gray-50;
          }

          &:disabled {
            @apply bg-purple-950;
          }
      }
    }
  }
</style>