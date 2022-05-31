import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGear, faUser, faStar, faHouse, faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGear, faUser, faCirclePlus, faStar, faHouse, faTrashCan);

import { createAuth0 } from '@auth0/auth0-vue';


createApp(App)
  .use(
    createAuth0({
      domain: 'dev-lqs7ng36.us.auth0.com',
      client_id: '8IE6m1WKJjDyp2gFlxFPzf0sVFT90pl2',
      redirect_uri: 'http://localhost:8080/',
    }),
  )
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')