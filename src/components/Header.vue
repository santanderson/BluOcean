<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import HomeIcon from './icons/HomeIcon.vue';
import LibraryIcon from './icons/LibraryIcon.vue';
import LoginIcon from './icons/LoginIcon.vue';
import LogOutIcon from './icons/LogOutIcon.vue';
import SignInIcon from './icons/SignInIcon.vue';
import AddIcon from './icons/AddIcon.vue'

const ul = ref(false);

const props = defineProps({
    userStatus: Object,
    logOut: Function,
    songLibStatus: Function
})

function showMenu(e) {
    const menuButton = e.target.parentNode;
    const menu = menuButton.parentNode.children[1];

    if(!menuButton.classList.contains('active')) {
        menuButton.classList = 'active';
        menu.classList = 'active';
    }
    else if(menuButton.classList.contains('active')) { 
        menuButton.classList.remove('active')
        menu.classList.remove('active')
    }

}

function endSession () {
    props.logOut();
    location.reload();
}

</script>

<template>
    <header class="w-full bg-red text-black">

        <button id="menuButton" @click="showMenu">
            <span id="hamburguer"></span>
        </button>

        <nav ref="ul">
            <div class="logo">BluOcean</div>
            <ul class="firstUl">
                <li>
                <RouterLink to="/">
                    <HomeIcon/>
                    Home
                </RouterLink></li>
                <li>

                <RouterLink to="/loadingLibrary">
                    <LibraryIcon/>
                    Your Songs
                </RouterLink></li>

                <li v-if="props.userStatus.isLoged === false">
                <RouterLink to="/login">
                    <LoginIcon/>
                    <span>Login</span>
                </RouterLink></li>
                <li v-else @click="endSession">

                <a>
                    <LogOutIcon/>
                    <span>Log Out</span>
                </a></li>
                <li v-if="props.userStatus.isLoged === false">

                <RouterLink to="/register">
                    <SignInIcon/>
                    Register
                </RouterLink></li>

            </ul>

            <ul>
                <li>
                <RouterLink to="/addSong">
                    <AddIcon/>
                    Add Song
                </RouterLink></li>
            </ul>
        </nav>
    </header>
</template>