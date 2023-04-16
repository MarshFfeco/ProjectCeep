import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/index.scss'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { PxCheck, BiInfo, BiHeartFill  } from "oh-vue-icons/icons";

addIcons(PxCheck, BiInfo, BiHeartFill );

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.mount('#app')
