/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('../sass/app.scss');
import Vue from 'vue';
import router from './routes.js';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vuetify from 'vuetify';
// import '../css/style.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import DataTable from "@andresouzaabreu/vue-data-table";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";
// import "../css/index.scss"
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';
Vue.use(VueMaterial)
Vue.config.productionTip = false;
const vuetify = new Vuetify();
Vue.use(vuetify);
Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

window.Vue = require('vue');
window.router=router;
window.Fire = new Vue();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component("data-table", DataTable);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('navbar', require('./components/navBar.vue').default);
Vue.component('topnav', require('./components/topnav.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 window.onload = function() {
    const app = new Vue({
        el: '#app',
        router,
        vuetify,
    }).$mount('#app');
}
