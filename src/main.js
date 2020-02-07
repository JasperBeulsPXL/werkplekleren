import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
    mounted: function () {
        var el = document.querySelector(".button-bird");
        var text = document.querySelector(".button-bird__text");
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
