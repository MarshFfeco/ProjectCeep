<script setup>
    const props = defineProps({
        style: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div :class=style>
        <a href="#">CONTINUAR</a>
    </div>
</template>

<style scoped lang="scss">
    .button-light { 
        @apply cursor-pointer transition-colors w-full text-center font-bold px-8 py-4 border border-solid border-gray-800; 
        
        &:hover {
            @apply bg-gray-800 text-white;
        }

        &:active {
            @apply bg-gray-800 text-white;
        } 
    }

    .button-dark { 
        @apply cursor-pointer transition-colors w-full text-center font-bold px-8 py-4 border border-solid 
        border-transparent bg-purple-500; 
        
        &:hover {
            @apply bg-purple-700 text-white;
        }

        &:active {
            @apply bg-purple-700 text-white;
        } 
    }
</style>