<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { mapActions, storeToRefs } from 'pinia';
import { useLoginStore } from './store/loginStore';
import { useSongStore } from './store/songsStore';

const loginStore = useLoginStore(); //instância da store login

const {userStatus} = storeToRefs(loginStore); //o state
const {changeStatus} = mapActions(useLoginStore, ["changeStatus"]); //o método que irá alterar o state, é preciso importa-lo desse jeito para poder usa-lo como chamada num evento
const {defineProperties} = mapActions(useLoginStore, ["defineProperties"])
const {logOut} = mapActions(useLoginStore, ["logOut"]);


const songStore = useSongStore(); //instância da store song

const {songs} = storeToRefs(songStore);
const {songsLibrary} = storeToRefs(songStore);
const {songLibStatus} = mapActions(useSongStore, ["songLibStatus"]);

</script>

<template>
  <Header :userStatus="userStatus" :logOut="logOut"/>
  <RouterView :userStatus="userStatus" :changeStatus="changeStatus" :defineProperties="defineProperties" :songs="songs" :songsLibrary="songsLibrary" :songLibStatus="songLibStatus"/>
</template>