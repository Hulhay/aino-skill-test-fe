<template>
    <div class="auth-page">
        <div class="auth-container">
            <header class="auth-heading">
                <h1>Halo...</h1>
                <p class="text-right text-base">aino.skill.test</p>
            </header>
            <form @submit.prevent="handleLogin">
                <input type="email" v-model="email" placeholder="Email" />
                <input type="password" v-model="password" placeholder="Password" />
                <input type="submit" value="Login" class="button-auth" />
            </form>
        </div>
        <p class="note">Belum punya akun? buat <router-link to="register" class="underline text-blue-700">di sini
            </router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginComponent',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async handleLogin() {
            try {
                const response = await axios.post('api/auth/login', {
                    email: this.email,
                    password: this.password
                })

                localStorage.setItem('name', response.data.data.name)
                localStorage.setItem('token', response.data.data.token)

                alert('login berhasil')
                this.$router.push('/')
            } catch (error) {
                console.log(error)
                if (error.response.data.error_message === 'email must be filled') {
                    alert('email harus diisi')
                }

                if (error.response.data.error_message === 'password must be filled') {
                    alert('password harus diisi')
                }

                if (error.response.data.error_message === 'password minimal 6 character') {
                    alert('password setidaknya berisi 6 karakter')
                }

                if (error.response.data.error_message === 'email not found') {
                    alert('email belum terdaftar')
                }

                if (error.response.data.error_message === 'wrong password') {
                    alert('password salah')
                }
            }
        }
    }
}
</script>