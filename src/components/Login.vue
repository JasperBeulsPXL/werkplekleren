<template>
    <div class="login">
        <h1>PXL Shop</h1>
        <LabeledInput labelText="Username"/>
        <LabeledInput labelText="Password"/>
        <p>Don't have an account yet? Register <a @click="$emit('show-form')">here</a></p>
        <BirdButton />
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
