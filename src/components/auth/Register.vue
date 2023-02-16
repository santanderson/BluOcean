<script setup>
import { ref, reactive } from 'vue';
import router from '@/router'

const props = defineProps({
    userStatus: Object,
    changeStatus: Function,
    defineProperties: Function
})

const data = reactive({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
})

async function onSub() {
    fetch(`http://localhost:3000/auth/register`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.status !== 201) {
                const obj = res.json().then( res => {
                console.log(res)
            })
            } else{
                const obj = res.json().then(res => {
                    console.log(res)
                    router.push('login')
                }
            )}
        })
}

</script>

<template>
    <main>
        <h1>Register</h1>

        <form>
            <input type="name" placeholder="Name" v-model="data.name" />
            <input type="email" placeholder="E-mail" v-model="data.email" />
            <input type="password" placeholder="Password" v-model="data.password" />
            <input type="confirm password" placeholder="Confirm Password" v-model="data.confirmpassword" />
            <button type="button" @click="onSub">register</button>
        </form>
    </main>
</template>