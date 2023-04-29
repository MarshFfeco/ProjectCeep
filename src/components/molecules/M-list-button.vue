<script setup>
  import ANavList from '../atoms/Nav/A-nav-list.vue';
  import AButton from '../atoms/A-button.vue';

  const props = defineProps({
    classButton: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <ANavList>
    <template #component>
      <AButton 
        b-type="Menu"
        :b-style="props.classButton"
        target="_self"
      >
        <template #message>
          <v-icon 
            class="text-gray-50"
            name="md-menu"
            scale="1.5"
          />
        </template>
      </AButton>
    </template>
  </ANavList>
</template>

<style lang="scss" scoped>
.button__nav {
  @apply
    transition-all
    duration-300
        
  bg-purple-700;
}
</style>