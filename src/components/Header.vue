<script setup>
import { RouterLink } from 'vue-router';
import HomeIcon from './icons/HomeIcon.vue';
import LibraryIcon from './icons/LibraryIcon.vue';
import LoginIcon from './icons/LoginIcon.vue';
import LogOutIcon from './icons/LogOutIcon.vue';
import SignInIcon from './icons/SignInIcon.vue';
import ProfileIcon from './icons/ProfileIcon.vue';
import AddIcon from './icons/AddIcon.vue'

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
                <li><RouterLink to="/">
                    <HomeIcon/>
                    Home
                </RouterLink></li>
                <li><RouterLink to="/loadingLibrary">
                    <LibraryIcon/>
                    Your Songs
                </RouterLink></li>
                <li v-if="props.userStatus.isLoged === false"><RouterLink to="/login">
                    <LoginIcon/>
                    <span>Login</span>
                </RouterLink></li>
                <li v-else @click="endSession"><a>
                    <LogOutIcon/>
                    <span>Log Out</span>
                </a></li>
                <li v-if="props.userStatus.isLoged === false"><RouterLink to="/register">
                    <SignInIcon/>
                    Register
                </RouterLink></li>
                <li v-else><a>
                    <ProfileIcon/>
                    {{ props.userStatus.userName }}
                </a></li>
            </ul>
            <ul>
                <li><RouterLink to="/addSong">
                    <AddIcon/>
                    Add Song
                </RouterLink></li>
            </ul>
        </nav>
    </header>
</template>