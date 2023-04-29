<script setup>
  import AUl from '../atoms/List/A-ul.vue';
  import ALi from '../atoms/List/A-li.vue';

  const props = defineProps({
    content: {
      type: [Object],
      required: true
    },
    ulClass: {
      type: String,
      required: true
    },
    liClass: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <AUl
    :class="props.ulClass"
  >
    <template #li>
      <ALi 
        v-for="(item, key) of props.content"
        :key="key"
        :class="props.liClass"
      >
        <template #message>
          <a :href="item.url">{{ item.name }}</a>
        </template>
      </ALi>
    </template>
  </AUl>
</template>

<style lang="scss">
  .nav__hidden {
      &__ul {
        @apply 
        flex
        flex-col
        gap-2

        py-4
        
        text-gray-50
        font-extralight
        
        border-b
        border-gray-700;

        &__li {
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
</style>