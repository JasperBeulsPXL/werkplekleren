<template>
    <div class="home">
        <img alt="PXL logo" src="../assets/logo_pxl_bol.png">
        <Login v-bind:class="{ hide: formIsVisible }"
               v-on:show-form="formIsVisible = !formIsVisible"
               :api-url="apiUrl"
               :user-data="userData"
               :logged-in-user="loggedInUser"
               v-on:login-user="loginUser"
        />
        <RegistrationForm
                          v-bind:class="{ show: formIsVisible }"
                          v-bind:api-url="apiUrl"
        />
    </div>
</template>

<script>
    // @ is an alias to /src
    import Login from '@/components/Login.vue';
    import RegistrationForm from "@/components/RegistrationForm";

    export default {
        name: 'Home',
        components: {
            Login,
            RegistrationForm
        },
        props: {
            apiUrl: String,
            userData: Array,
            loggedInUser: Object,
        },
        data() {
            return {
                formIsVisible: false,
            };
        },
        methods:{
            loginUser(user){
                this.$emit('login-user', user);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    img {
        max-width: 200px;
        max-height: 200px;
    }

    .registrationForm {
        display: none;
    }

    .show {
        display: flex;
    }

    .hide {
        display: none;
    }

    @media (min-width: $desktop-min-width) {
        .home {
            width: 75%;
        }
    }
</style>