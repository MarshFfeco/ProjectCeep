<script setup>
  import navIconMenu from './extra/nav-icon-menu.vue';
  import navIconHome from './extra/nav-icon-home.vue';
  import navAside from "./extra/nav-aside.vue" 

  import { ref } from 'vue';
  import { computed } from 'vue';

  const classMenuButton = ref('');
  const ClassMenuButton = computed({

    get() { return classMenuButton.value },
    set(val) { classMenuButton.value = val }
  })

  function SelectedButtonMenu() {
    if(ClassMenuButton.value != "") return ClassMenuButton.value = ""
    
    ClassMenuButton.value = "activate__aside" 
  } 
</script>

<template>
  <nav class="MainNavBar">
    <div class="MainNavBar__Icons">
      <navIconHome />

      <navIconMenu 
        :style="ClassMenuButton" 
        @click="SelectedButtonMenu" 
      />
    </div>

    <navAside 
      v-show="ClassMenuButton != ''"
    />
  </nav>
</template>

<style scoped lang="scss">
  .MainNavBar {
    height: 5vh;
    @apply
      fixed
      left-0
      right-0

      border-b
      border-gray-700

      bg-gray-950;

    &__Icons {
      @apply
        w-full
        h-full

        px-9
        
        flex
        flex-row
        justify-between
        items-center;
    }
  }
  .activate__aside { @apply bg-purple-700; }
</style>