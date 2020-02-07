<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <Login/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Login from '@/components/Login.vue';

    export default {
        name: 'Home',
        components: {
            Login
        },
        data() {
            return {
                users: [
                    {
                        username: "jasper",
                        password: "pxl123"
                    },
                ]
            };
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        //background-color: $secondary-color;
    }

    @media (min-width: $desktop-min-width){
        .home{
            width: 75%;
        }
    }
</style>