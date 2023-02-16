import { defineStore } from "pinia";

export const useSongStore = defineStore('song', {
    state: () => ({
        songs: [],
        songsLibrary: []
    }),
    actions: {
        songLibStatus () {
            this.songsLibrary = []
        }
    }
})