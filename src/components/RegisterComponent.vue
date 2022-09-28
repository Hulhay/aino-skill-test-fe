<template>
    <div class="auth-page">
        <div class="auth-container">
            <header class="auth-heading">
                <h1>Register</h1>
                <p class="text-right text-base">aino.skill.test</p>
            </header>
            <form @submit.prevent="handleRegister">
                <input type="text" v-model="name" placeholder="Name" />
                <input type="email" v-model="email" placeholder="Email" />
                <input type="password" v-model="password" placeholder="Password" />
                <input type="submit" value="Register" class="button-auth" />
            </form>
            <p class="note">login <router-link to="login" class="underline text-blue-700">di sini
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'RegisterComponent',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async handleRegister() {
            try {
                await axios.post('api/auth/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })

                alert('register berhasil.\nsilakan coba login')
                this.$router.push('/login')
            } catch (error) {
                if (error.response.data.error_message === 'name must be filled') {
                    alert('nama harus diisi')
                }

                if (error.response.data.error_message === 'email must be filled') {
                    alert('email harus diisi')
                }

                if (error.response.data.error_message === 'password must be filled') {
                    alert('password harus diisi')
                }

                if (error.response.data.error_message === 'password minimal 6 character') {
                    alert('password setidaknya berisi 6 karakter')
                }

                if (error.response.data.error_message === 'email is used') {
                    alert('email sudah digunakan')
                }
            }
        }
    }
}
</script>