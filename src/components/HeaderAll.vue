<script setup>
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
    
    ClassMenuButton.value = "nav__menu__button" 
  } 
</script>

<template>
  <nav class="nav">
    <ul class="nav__menu">
      <li>
        <a href="/">
          <v-icon 
            name="ri-home-2-line" 
            fill="#fff" 
            label="home"
            scale="1.5"
          />
        </a>
      </li>
    </ul>
    <ul class="nav__menu">
      <li>
        <button 
          :class="ClassMenuButton"
          @click="SelectedButtonMenu"
        >
          <v-icon 
            name="md-menu" 
            fill="#fff"
            label="Menu"
            scale="1.5"
          />
        </button>
      </li>
    </ul>


    <Transition 
      name="fase"
      mode="out-in" 
    >
      <aside 
        v-show="ClassMenuButton != ''" 
        class="nav__hidden"
      >
        <ul 
          v-for="(items, key) in menuItems"
          :key="key"
          class="nav__hidden__items"
        >
          <li
            v-for="(item, key2) in items"
            :key="key2"
            class="nav__hidden__items__l"
          >
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
      </aside>
    </Transition>
  </nav>
</template>

<style lang="scss">
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


      &__menu {
        @apply 
          w-9

          flex
          justify-center
          items-center;

          &__button {
            @apply
              transition-all
              duration-300
              ease-in-out

              rounded-lg
                 
            bg-purple-700;
          }
      }

      &__items {
        @apply 
          w-1/2

          flex
          flex-row
          items-center
          justify-between;
      }

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

          &__items {
            @apply 
            flex
            flex-col
            gap-2

            py-4
            
          text-gray-50
            font-extralight
            
            border-b
            border-gray-700;

            &__l {
              @apply px-4 py-1;

              &:hover {
                @apply bg-gray-800
              }

              a {
                @apply block w-full;
              }
            }
          }
      }
  }
</style>