import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function (createElement) {
        let vm =this;

        return createElement(App, {
                props: {
                    apiUrl: vm.apiUrl,
                    userData: vm.userData
                }
            }
        )
    },
    data() {
        return {
            apiUrl: 'define url here',
            userData: []
        }
    },
    created: function () {
        let vm = this;

        this.axios.get(this.apiUrl)
            .then(function (response) {
                console.log(response);
                vm.users = response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    mounted: function () {
        let el = document.querySelector(".button-bird");
        let text = document.querySelector(".button-bird__text");
        el.addEventListener('click', function () {
            el.classList.toggle('active');

            if (el.classList.contains('active')) {
                console.log('true');
                text.innerHTML = 'WELCOME';
            } else {
                text.innerHTML = 'LOGIN';
            }
        });
    }
}).$mount('#app');
