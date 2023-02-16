<script setup>
import { RouterLink } from 'vue-router';
import router from '@/router'

const props = defineProps({
    userStatus: Object,
    changeStatus: Function,
    defineProperties: Function,
    songs: Object
})

if (props.songs.length === 0) router.push('/');

</script>

<template>
    <main>
        <h1>Home</h1>

        <div class="songsContainer">
            <a class="song" v-for="song in props.songs" :href="song.url" target="_blank">
                <div></div>
                <h2>{{ song.name }}</h2>
            </a>
        </div>
    </main>
</template>