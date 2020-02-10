<template>
    <div class="login">
        <h1>PXL Shop</h1>
        <LabeledInput labelText="Username" v-model="username" type="text"/>
        <LabeledInput labelText="Password" v-model="password" type="password"/>
        <p>Don't have an account yet? Register <a @click="$emit('show-form')">here</a></p>
        <BirdButton id="birdButton" v-on:login-pressed="handleLogin" />
    </div>
</template>

<script>
    import LabeledInput from "./LabeledInput";
    import BirdButton from "./BirdButton";

    export default {
        name: 'Login',
        components: {
            LabeledInput,
            BirdButton
        },
        props:{
            apiUrl: String,
            userData: Array,
            loggedInUser: Object,
        },
        data() {
            return{
                username: '',
                password: ''
            }
        },
        methods:{
            handleLogin(){
                let user = this.userData.find(user => user.username === this.username);

                if(user && user.password === this.password){
                        this.$emit('login-user', {success: true,  username:user.username, password:user.password});
                }else{
                    this.$emit('login-user', {success: false});
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .login {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        margin-bottom: 30px;
        margin-top: 30px;
    }

    a {
        color: #42b983;

        &:hover{
            cursor: pointer;
        }
    }

    p{
        margin-top: 30px;
    }
</style>
