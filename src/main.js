import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

export const bus=new Vue()
Vue.use(VueRouter)
Vue.config.productionTip = false

const router= new VueRouter({
    routes:Routes,
    mode: 'history'
}) 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
