import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './components/Home'
import LoginPage from './components/Login'

Vue.use(Router);

 const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    
    const loggedIn = localStorage.getItem('token');
  
    if (to.path=='/login' && loggedIn) {
      return next('/');
    }
  
    next();
  });

  
export default router;

