<script setup>
import { RouterLink } from 'vue-router';
import FlashMessage from './FlashMessage.vue';
import { reactive } from 'vue';
import router from '@/router'

const props = defineProps({
    userStatus: Object,
    changeStatus: Function,
    defineProperties: Function,
    songs: Object
})

const data = reactive({
    name: '',
    url: '',
    songUserId: ''
})

async function addMusic(e) {
    e.preventDefault();

    if(!data.name || !data.url) return
    data.songUserId = props.userStatus.userId;
    console.log(data);
    fetch(`http://localhost:3000/song/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.userStatus.token}`
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            
            if (res.status !== 201) {
                const obj = res.json().then( res => {
                console.log(res)
            })
            } else {
                const obj = res.json().then(res => {

                        console.log(res);
                        router.push('loadingLibrary')
                }
                )
            }
        })
}
  
</script>

<template>
    <main>
        <h1>Add a song</h1>

        <FlashMessage v-if="!props.userStatus.isLoged" msg="Log-in Before!" url="login"/>

        <form v-else>
            <div class="addMusic">
                <label for="name">Name</label>
                <input v-model="data.name" type="name" id="name" placeholder="Song Name"/>

                <label for="url">Music Link</label>
                <input v-model="data.url" type="name" id="url" placeholder="Ex: www.youtube.com/..."/>
            </div>
            <button @click="addMusic">Add Song</button>
        </form>
    </main>
</template>