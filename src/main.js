import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Notifications from 'vue-notification'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash,faPen,faEllipsisV,faSearch, faFilter,faPlus,faDownload, faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSidebarMenu from 'vue-sidebar-menu';


library.add(faTrash,faPen,faEllipsisV,faSearch,faFilter,faPlus,faDownload,faCaretDown,faCaretUp)

import router from './routes.js';

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter);
Vue.use(Notifications)
Vue.use(VueSidebarMenu)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
