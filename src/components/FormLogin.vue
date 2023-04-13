<script setup>
    // import axios from "axios";
    import { ref } from 'vue';
    import { computed } from '@vue/reactivity';

    // axios
    //     .get("http://127.0.0.1:5000")
    //     .then((res) => {
    //             console.log(res.data)
    //     })
    //     .catch((error) => {
    //             console.log(error);
    //     });

    const email = ref();
    const  password = ref();
    const  emailError = ref();
    const  passwordError = ref();
    const isSubmit = ref();

    const Email = computed({
        get() { return email.value },
        set(val) { email.value = val }
    });
    const Password = computed({
        get() { return password.value },
        set(val) { password.value = val }
    });

    const EmailError = computed({
        get() { return emailError.value },
        set(val) { emailError.value = val }
    });
    const PasswordError = computed({
        get() { return passwordError.value },
        set(val) {  passwordError.value = val }
    });
    const IsSubmit = computed({
        get() { return isSubmit.value },
        set(val) { isSubmit.value = val }
    });

    function Login(event) { 
        event.preventDefault()
        IsSubmit.value = VerifyInformation()

        
        if(!IsSubmit) {
           return event.preventDefault()
        }

        return true
    }

    function VerifyInformation() {
        let isAccept = false;

        isAccept = ValidateEmail();
        isAccept = ValidatePassword()


        return isAccept;
    }

    function ValidateEmail() {
        let isValid = false
        let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!Email.value || Email.value == '' || Email.value == null) {
            EmailError.value = 'Preciso de um email'
            isValid = false
        } else if (!re.test(Email.value)) {
            EmailError.value = 'Preciso de um email válido';
            isValid = false
        } else {
            EmailError.value = '';
            isValid = true
        }

        return isValid
    }

    function ValidatePassword() {
        let isValid = false
        let passowrdLength = 9;

        if(!Password.value) {
            PasswordError.value = "Preciso de uma senha"
            isValid = false;
        } else if(Password.value.length <= passowrdLength) {
            PasswordError.value = "Preciso de uma senha válida"
            isValid = false;
        } else {
            PasswordError.value = ""
            isValid = true;
        }

        return isValid
    }
</script>

<template>  
        <form class="flex flex-col gap-4 w-full" method="post" @submit=Login($event) action="/teste">
            <div class="w-full flex flex-col gap-1">
                <label>Email</label>
                <input 
                    v-model="Email"
                    type="text" 
                    name="email"
                    class="border text-white border-zinc-800 shadow-sm bg-zinc-900 rounded h-10 px-3 focus:outline-none"
                >
                <span v-show="EmailError" class="text-xs text-error">{{ EmailError }}</span>
            </div>

            <div class=" w-full flex flex-col gap-1">
                <label>Senha</label>
                <input 
                    v-model="Password"
                    type="password" 
                    name="password"
                    class="border text-white border-zinc-800 shadow-sm bg-zinc-900 rounded h-10 px-3 focus:outline-none"
                >
                <span v-show="PasswordError" class="text-xs text-error">{{ PasswordError }}</span>
            </div>

            <i class="text-xs self-end cursor-pointer hover:underline">Esqueceu a Senha?</i>
        
            <button 
                type="submit"
                class="w-full mt-5 bg-indigo-500 rounded-full font-semibold text-white h-14 hover:bg-indigo-600"
            >
                Entrar
            </button>
        </form>
</template>