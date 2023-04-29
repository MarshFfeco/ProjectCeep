<template>
  <ul class="ANavList">
    <li>
      <slot name="component" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .ANavList {
    @apply 
      w-9

      flex
      justify-center
      items-center;
  }
</style>