<template>
    <form>
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
            <label for="email">Your Email Address</label>
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
            <label for="password">Enter Password</label>
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
        props:{apiUrl: String},
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

<style scoped>

</style>