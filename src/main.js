import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import ProfExp from './components/ProfExp/ProfExp.vue'
import Personal from './components/Personal/Personal.vue'
import Projects from './components/Projects/Projects.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'exp', component: ProfExp },
  { path: '/Personal', name: 'personal', component: Personal },
  { path: '/Projects', name: 'projects', component: Projects }
]

const router = new VueRouter({
  routes 
})

Vue.use(VueRouter);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
