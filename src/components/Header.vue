<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    userStatus: Object,
    logOut: Function,
    songLibStatus: Function
})

function endSession () {
    props.logOut();
    location.reload();
}

</script>

<template>
    <header class="w-full bg-red text-black">
        <div class="logo">BluOcean</div>
        <nav>
            <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/loadingLibrary">Your Songs</RouterLink></li>
                <li v-if="props.userStatus.isLoged === false"><RouterLink to="/login">Login</RouterLink></li>
                <li v-else @click="endSession"><a>Log Out</a></li>
                <li v-if="props.userStatus.isLoged === false"><RouterLink to="/register">Register</RouterLink></li>
                <li v-else><a>{{ props.userStatus.userName }}</a></li>
            </ul>
            <ul>
                <li><RouterLink to="/addSong">Add Song</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>