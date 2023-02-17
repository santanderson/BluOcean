<script setup>
import { RouterLink } from 'vue-router';
import router from '@/router'
import DeleteIcon from './icons/DeleteIcon.vue';

const props = defineProps({
    songsLibrary: Object,
    userStatus: Object
})

const data = {
    userId: '',
    songId: ''
}

async function deleteSong(e) {
    const songId = e.target.parentNode.parentNode.children[0].id;
    console.log(songId)
    
    data.userId = props.userStatus.userId;
    data.songId = songId;

    fetch(`http://localhost:3000/song/yourSongs`,
        {
            method: 'DELETE',
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
                }
                )
            }
            router.push('loadingLibrary');
        })
}

</script>

<template>
    <main>
        <h1>Your library</h1>

        <div class="songsContainer">
            <div class="song" v-for="song in props.songsLibrary">
                <a :id="song._id" :href="song.url" target="_blank">
                    <div></div>
                    <h2>{{ song.name }}</h2>
                </a>
                <DeleteIcon @click="deleteSong"/>
            </div>
        </div>
    </main>
</template>