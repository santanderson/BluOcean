<script setup>
import { ref, reactive } from 'vue';
import router from '@/router'

const props = defineProps({
    userStatus: Object,
    changeStatus: Function,
    defineProperties: Function
})

const data = reactive({
    email: '',
    password: ''
})

async function onSub() {
    fetch(`http://localhost:3000/auth/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.status !== 200) {
                const obj = res.json().then( res => {
                console.log(res)
            })
            } else{
                const obj = res.json().then(res => {
                    props.changeStatus(res.id, res.token)
                    login();
                }
            )}
        })
}

async function login() {
    fetch(`http://localhost:3000/auth/user/${props.userStatus.userId}`,
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${props.userStatus.token}`
            }
        }).then(res => {
            if (res.status !== 200) {
                const obj = res.json().then( res => {
                console.log(res)
            })
            } else {
                const re = res.json().then(res => {
                    if(res) {
                    
                        props.defineProperties(res.user.name, res.user.email)
                        router.push('/')

                    } else {
                        console.log('Algum erro ocorreu!')
                    }
                })
            }
        })
}
</script>

<template>
    <main>
        <h1>Login</h1>

        <form>
            <input type="email" placeholder="E-mail" v-model="data.email" />
            <input type="password" placeholder="Password" v-model="data.password" />
            <button type="button" @click="onSub">login</button>
        </form>
    </main>
</template>