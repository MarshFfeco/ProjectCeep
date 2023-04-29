<script setup>
  import AAside from "../../atoms/A-aside.vue";

  import MLinkicon from "../../molecules/M-link-icon.vue"
  import MListsButton from "../../molecules/M-list-button.vue";
  import MList from "../../molecules/M-list.vue";

  import { ref } from 'vue';
  import { computed } from 'vue';

  const classMenuButton = ref('');

  const ClassMenuButton = computed({
    get() { return classMenuButton.value },
    set(val) { classMenuButton.value = val }
  })

  const menuItems = {
      "links": [
          { name: 'About', url: '#' },
          { name: 'Contact', url: '#' },
      ],
      "options": [
          { name: 'Exit', url: '#' },
      ]
  }

  function SelectedButtonMenu() {
    if(ClassMenuButton.value != "") return ClassMenuButton.value = ""
    
    ClassMenuButton.value = "button__nav" 
  } 
</script>

<template>
  <nav class="nav">
    <MLinkicon
      link="/"
      target="_self"
    >
      <template #message>
        <v-icon 
          class="text-gray-50"
          name="ri-home-2-line"
          scale="1.4"
        />
      </template>
    </MLinkicon>

    <MListsButton 
      :class-button="ClassMenuButton"
      @click="SelectedButtonMenu" 
    />

    <AAside 
      v-show="ClassMenuButton != ''" 
      a-class="nav__hidden"
    >
      <template #message>
        <MList 
          :content="menuItems.links"
          ul-class="nav__hidden__ul"
          li-class="nav__hidden__ul__li"
        />
        <MList 
          :content="menuItems.options"
          ul-class="nav__hidden__ul"
          li-class="nav__hidden__ul__li"
        />
      </template>
    </AAside>
  </nav>
</template>

<style lang="scss" scoped>
  .nav {
    height: 5vh;

    @apply 
      w-screen

      z-50

      fixed

      ps-4
      pe-4

      flex
      flex-row

      justify-between

      border-b
      border-gray-700

      bg-gray-900;

      /* &__items {
        @apply 
          w-1/2

          flex
          flex-row
          items-center
          justify-between;
      } */

      &__hidden {
        margin-top: 5vh;

        @apply
          absolute

          transition-all
          duration-100
          ease-in-out

          top-0
          left-0

          w-4/6
          h-screen

          border-r
        border-gray-800

        bg-gray-900;
      }
  }
</style>