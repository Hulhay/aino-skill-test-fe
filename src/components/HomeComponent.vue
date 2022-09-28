<template>
    <div class="main-screen">
        <h1>Halo {{name}}..!</h1>
        <button class="button-logout" @click="handleLogout">Logout</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'HomeComponent',
    data() {
        return {
            name: localStorage.getItem('name')
        }
    },
    methods: {
        async handleLogout() {
            try {
                await axios.post('api/auth/logout', null, {
                    headers: {
                        "Authorization": localStorage.getItem('token'),
                    }
                })

                localStorage.setItem('token', '')
                localStorage.setItem('name', '')

                alert('logout berhasil')
                this.$router.push('/login')
            } catch (error) {
                alert('logout gagal.\nerror')
            }
        }
    }
}
</script>