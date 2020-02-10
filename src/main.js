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
        let self = this;

        return createElement(App, {
                props: {
                    apiUrl: self.apiUrl,
                    userData: self.userData,
                    loggedInUser: self.loggedInUser,
                },
                on: {
                    'login-user': function (user) {
                        self.loginUser(user);
                    }
                }
            }
        )
    },
    data() {
        return {
            apiUrl: 'define url here',
            userData: [
                {
                    username: 'jasper',
                    password: 'beuls'
                }
            ],
            loggedInUser: {
                username: '',
                password: '',
            }
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
        let self = this;
        let el = document.querySelector(".button-bird");
        let text = document.querySelector(".button-bird__text");
        el.addEventListener('click', function () {
            el.classList.toggle('active');

            if (el.classList.contains('active')) {
                if ( self.loggedInUser.username !== '' && self.loggedInUser.password !== '') {
                    text.innerHTML = 'WELCOME'
                } else {
                    text.innerHTML = 'LOGIN FAILED';
                }

            } else {
                text.innerHTML = 'LOGIN';
            }
        });
    },
    methods: {
        loginUser: function (user) {
            if (user.success) {
                this.loggedInUser.username = user.username;
                this.loggedInUser.password = user.password;
            }else{
                this.loggedInUser.username = '';
                this.loggedInUser.password = '';
            }
        }
    },
}).$mount('#app');
