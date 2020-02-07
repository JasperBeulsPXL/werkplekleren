<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background: $color-gradient;
        height: 100vh;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }

    #app {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #nav {
        padding: 30px;
        width: 100%;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: $primary-color;
    }
</style>
