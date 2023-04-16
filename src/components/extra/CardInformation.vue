<script setup>
    const props = defineProps({
        style: {
            type: String,
            required: true
        },

        Message: {
            type: String,
            required: false
        },

        Information: {
            type: String,
            required: false
        },

    })
</script>

<template>
    <div class="information">
        <div :class=style>
            <v-icon name="px-check" animation="wrench" />

            <p>{{ Message }}</p>
        </div>

        <div class="right">
            <dfn>
                <abbr :title=Information>
                    <v-icon name="bi-info" animation="wrench" />
                </abbr>
            </dfn>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .text-dark { @apply text-gray-300; }
    .text-light { @apply text-gray-600; }

    .information {
        @apply flex flex-row justify-between;

        .left { @apply flex flex-row }
        .right { cursor: pointer; }
    }
</style>