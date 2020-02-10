<template>
    <form class="registrationForm">
        <div class="form-group">
            <label for="first-name">First name</label>
            <input type="text"
                   id="first-name"
                   class="form-control"
                   v-model="userData.firstName">
        </div>
        <div class="form-group">
            <label for="last-name">Last name</label>
            <input type="text"
                   id="last-name"
                   class="form-control"
                   v-model="userData.lastName">
        </div>
        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="text"
                   id="email"
                   class="form-control"
                   v-model="userData.email">
        </div>
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text"
                   id="username"
                   class="form-control"
                   v-model="userData.username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password"
                   id="password"
                   class="form-control"
                   v-model.lazy="userData.password">
        </div>
        <button @click.prevent="submit">Submit</button>
    </form>
</template>

<script>
    export default {
        name: "RegistrationForm",
        props: {apiUrl: String},
        data() {
            return {
                userData: {
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    password: '',
                },
            }
        },
        methods: {
            submit() {
                this.axios.post(this.apiUrl, {
                    firstName: this.userData.firstName,
                    lastName: this.userData.lastName,
                    username: this.userData.username,
                    email: this.userData.email,
                    password: this.userData.password
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

    .registrationForm {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-group {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        margin: 8px 0 8px 0;
        height: 30px;
        align-content: center;
        text-align: left;
    }

    label {
        display: block;
        width: 20%;
        height: 100%;
        line-height: 170%;
        max-width: 105px;
        margin-right: 5px;
    }

    input {
        width: 30%;
        min-width: 200px;
    }

    button {
        width: 40%;
        max-width: 200px;
        height: 40px;
        padding: 0.46em 1.6em;
        border: 0.1em solid #000000;
        margin:  40px;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: #000000;
        text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
        background-color: $primary-color;
        text-align: center;
        transition: all 0.15s;
    }

    button:hover {
        text-shadow: 0 0 2em rgba(255, 255, 255, 1);
        color: black;
        border-color: black;
    }

    @media (min-width: $desktop-min-width) {
        .form-group {
            width: 85%;
        }
    }
</style>