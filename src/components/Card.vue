<script setup>
    import CardInformation from "./extra/CardInformation.vue"
    import CardButton from "./extra/CardButton.vue";

    const props = defineProps({
        isProfessor: {
            type: Boolean,
            required: false
        }
    })

    const Student = [
        {
            "message": "Para Estudante do CEEP" , 
            "information": "Para todos os estudantes"
        },
        {
            "message": "Conteudo para estudantes" , 
            "information": "Conteúdo postado pelos professores"
        },
    ]

    const Professor = [
        {
            "message": "Para Professores do CEEP" , 
            "information": "Para todos os professores"
        },
        {
            "message": "Inserir Conteúdo" , 
            "information": "Inserir conteúdo para os alunos"
        },
    ]

    const cardStyleModifier = props.isProfessor ? 'card-style dark' : 'card-style light'
    const buttonStyleModifier = props.isProfessor ? 'button-dark' : 'button-light'
    const dividerStyleModifier = props.isProfessor ? 'divider-dark' : 'divider-light'

    const componentstyle = props.isProfessor ? 'information text-dark' : 'information text-light'
</script>

<template>
    <div class="container">
        <div :class=cardStyleModifier >
            <div v-if=isProfessor class="tag">
                <h4>Login necessário</h4>
            </div>

            <div class="content">
                <div class="title">
                    <h1>CEEP VALE DO PARAGUAÇU</h1>

                    <div>
                        <h3><slot name="type"></slot></h3>
                        <h3>BETA</h3>
                    </div>
                </div>

                <CardButton :style=buttonStyleModifier />

                <div :class=dividerStyleModifier></div>

                <div class="cardInformation">
                    <CardInformation 
                        v-for="item in isProfessor ? Professor : Student"
                        :style=componentstyle 
                        :Message=item.message
                        :Information=item.information
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../assets/scss/index.scss";
    
    .dark{ @apply bg-gray-900 text-gray-50 border-transparent }
    .light{ @apply bg-white border-gray-200 text-gray-800; &:hover { @apply border-purple-600; }}

    .container { @apply h-full w-full max-w-full flex justify-center items-center; }

    .tag {
        @apply w-36 text-center absolute px-4 py-2 bg-orange-400 text-gray-800 font-bold text-xs rounded-md uppercase 
        -top-4 left-0 right-0 mx-auto; 
    }
    .card-style {
         @apply w-96 rounded-lg border border-solid pt-8 pb-4 pr-4 pl-4 relative;

         @media (max-width: 830px) {
            @apply w-4/5;
        }
     }
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
    
    .divider-light { @apply w-full h-0 border border-solid border-gray-200; }
    .divider-dark { @apply w-full h-0 border border-solid border-gray-700; }

    .cardInformation {
        @apply flex flex-col gap-4;
    }
</style>