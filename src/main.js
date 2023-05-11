import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/index.scss'

import router from './router'

import { createPinia } from 'pinia'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
  MdMenu, RiHome2Line, BiChevronDoubleDown, FaUserAlt, MdAdminpanelsettingsRound, FaCheck 
} from "oh-vue-icons/icons";


addIcons(MdMenu, RiHome2Line, BiChevronDoubleDown, MdAdminpanelsettingsRound, FaUserAlt, FaCheck);

window.app = createApp(App)
.component('v-icon', OhVueIcon)
.use(router)
.use(createPinia())
.mount('#app')
