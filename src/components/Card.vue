<script setup>
    const props = defineProps({
        isProfessor: {
            type: Boolean,
            required: false
        }
    })

    const cardStyleModifier = props.isProfessor ? 'card-style dark' : 'card-style light'
    const buttonStyleModifier = props.isProfessor ? 'button-dark' : 'button-light'
    const dividerStyleModifier = props.isProfessor ? 'divider-dark' : 'divider-light'
    const leftStyleModifier = props.isProfessor ? 'left text-dark' : 'left text-light'
</script>

<template>
    <div class="container">
        <div :class=cardStyleModifier >
            <div class="content">
                <div class="title">
                    <h1>CEEP VALE DO PARAGUAÇU</h1>

                    <div>
                        <h3><slot name="type"></slot></h3>
                        <h3>ACESSAR</h3>
                    </div>
                </div>

                <div :class=buttonStyleModifier>
                    <a href="#">CONTINUAR</a>
                </div>

                <div :class=dividerStyleModifier></div>

                <div class="footer">
                    <div :class=leftStyleModifier>
                        <v-icon name="px-check" animation = "wrench" />

                        <p>comida</p>
                    </div>

                    <div class="right">
                        <dfn>
                            <abbr title="informação">
                                <v-icon name="bi-info" animation="wrench" />
                            </abbr>
                        </dfn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../assets/scss/index.scss";

    .text-dark { @apply text-gray-300 }
    .text-light { @apply text-gray-600 }

    .dark{ @apply bg-gray-900 text-gray-50 }
    .light{ @apply bg-white border-gray-200 text-gray-800 }
    .container { @apply w-full h-full flex justify-center items-center; }
    .card-style { @apply w-96 rounded-lg border border-solid pt-8 pb-4 pr-4 pl-4; }
    .content { @apply w-full flex flex-col gap-8; }

    .title {
        @apply flex flex-col gap-2;

        h1 {
            color: $title-color-purple;
            @apply font-semibold tracking-wider text-sm;
        }

        div {
            @apply flex flex-row justify-between;

            h3 {
                @apply font-bold;

             &:nth-child(1) {
                @apply text-3xl;
             }

             &:nth-child(2) {
                @apply text-lg self-center;
             }
            }
        }
    }

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
        border-transparent bg-purple-600; 
        
        &:hover {
            @apply bg-purple-700 text-white;
        }

        &:active {
            @apply bg-purple-700 text-white;
        } 
    }

    .divider-light { @apply w-full h-0 border border-solid border-gray-200; }
    .divider-dark { @apply w-full h-0 border border-solid border-gray-700; }

    .footer {
        @apply flex flex-row justify-between;

        .left {@apply flex flex-row}
        .right {cursor: pointer;}
    }
</style>