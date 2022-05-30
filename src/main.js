import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core'

import { faGear, faUser, faStar, faHouse, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGear, faUser, faCirclePlus, faStar, faHouse);


createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')