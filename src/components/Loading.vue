<script setup>
import router from '@/router'

const props = defineProps({
    songs: Array
})

async function getter () {
    fetch(`http://localhost:3000/song/`)
    .then( res => {
        if (res.status !== 200 || !res.status) {
            const obj = res.json().then( res => {
                console.log(res)
            })
        } else {
            const obj = res.json().then( res => {
                
                props.songs.splice(0, props.songs.length)
                for (const v of res) {
                    props.songs.push(v);
                }
                
                router.push('home');
            }
            )
        }
    })
}
getter();

</script>