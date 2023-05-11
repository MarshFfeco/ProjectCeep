<script setup>
  import IndexCardMessage from './index-card-message.vue'
  import IndexCardFormS from './index-card-form-s.vue'
  import IndexCardFormP from './index-card-form-p.vue'
  
  import { ref, computed } from 'vue'

  const isProfessor = ref(false)
  const welcomeTo = ref("Aluno")
  const toggleButton = ref('fa-user-alt')

  const ToggleButton = computed({
    get() { return toggleButton.value },
    set(val) { toggleButton.value = val } 
  })

  const IsProfessor = computed({
    get() { return isProfessor.value },
    set(val) { isProfessor.value = val }
  })

  const WelcomTo = computed({
    get() { return welcomeTo.value },
    set(val) { welcomeTo.value = val }
  })

  function ChangeIsProfessor() {
    IsProfessor.value = !IsProfessor.value

    ChangeToggleButton()
    ChangeWelcomeTo()
  }

  function ChangeToggleButton() {
    if(IsProfessor.value) {
      ToggleButton.value = 'md-adminpanelsettings-round'
    } else {
      ToggleButton.value = 'fa-user-alt'
    }
  }

  function ChangeWelcomeTo() {
    if(WelcomTo.value == "Aluno") {
      WelcomTo.value = 'Professor'
    } else {
      WelcomTo.value = 'Aluno'
    }
  }
</script>

<template>
  <div class="IndexMain__card">
    <IndexCardMessage
      :welcome-to="WelcomTo" 
      :toggle-button="ToggleButton" 
    />

    <Transition 
      mode="out-in" 
      name="StuPro"
    >
      <IndexCardFormP 
        v-if="IsProfessor" 
        @change-is-professor="ChangeIsProfessor"    
      />
      <IndexCardFormS 
        v-else  
        @change-is-professor="ChangeIsProfessor" 
      />
    </Transition>
  </div> 
</template>

<style scoped lang="scss">

  .StuPro {
    &-enter-active,
    &-leace-active {
      transition: all 0.25s ease-out;
    }
    &-enter-from {
      opacity: 0;
      transform: translateY(20px);
    }
    &-leave-from {
      opacity: 0;
      transform: translateY(-20px);
    }
  }


  .IndexMain__card {
    display: grid;
    grid-template-rows: 0.2fr 1fr;
    @apply
      h-5/6

      px-5
      py-9

      rounded-t-lg
      
      bg-gray-50;
  }
</style>