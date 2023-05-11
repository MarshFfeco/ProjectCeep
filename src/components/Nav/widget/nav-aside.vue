<script setup>
    const menuItems = {
      "links": [
          { name: 'Sobre', url: '#' },
          { name: 'Contato', url: '#' },
      ],
      "options": [

          { name: 'Sair', url: 'hehe' },
      ]
  }
</script>

<template>
  <aside class="MainNavBar__Aside">
    <ul
      class="MainNavBar__Aside__ul"
    >
      <li
        v-for="(items, key) in menuItems.links"
        :key="key"  
        class="MainNavBar__Aside__li"
      >
        <a :href="items.url">{{ items.name }}</a>
      </li>
    </ul>

    <ul
      class="MainNavBar__Aside__ul"
    >
      <li
        v-for="(items, key) in menuItems.options"
        :key="key"  
        class="MainNavBar__Aside__li"
      >
        <a :href="items.url">{{ items.name }}</a>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
  .MainNavBar__Aside{
    margin-top: 5vh;
    padding-bottom: 5vh;
      @apply 
      absolute
      top-0
      left-0

      h-screen
      w-4/6

      flex
      flex-col
      justify-between

      border-r
    border-gray-800

    bg-gray-950;
    &__ul{
      @apply 
        flex
        flex-col
        gap-2
        py-4
        
        text-gray-50
        font-extralight
        
        border-b
        border-gray-700;
    }

    &__li{
      @apply 
        px-4 
        py-1;

      &:hover {
        @apply bg-gray-800
      }

      a {
        @apply 
          block 
          
          w-full 
          h-full;
      }
    }
  }
</style>