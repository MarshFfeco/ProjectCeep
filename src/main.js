import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/index.scss'

import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiHeartFill, MdMenu, RiHome2Line, MdPersonpincircle } from "oh-vue-icons/icons";


addIcons(BiHeartFill, MdMenu, RiHome2Line, MdPersonpincircle );

window.app = createApp(App)
.component('v-icon', OhVueIcon)
.use(router)
.mount('#app')
