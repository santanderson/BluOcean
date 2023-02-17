<script setup>
import router from '@/router'

const props = defineProps({
    songsLibrary: Array,
    userStatus: Object
})

async function getter () {
    const info = {
        userId: props.userStatus.userId
    }
    fetch(`http://localhost:3000/song/yourSongs`,
    {   method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${props.userStatus.token}`
        },
        body: JSON.stringify(info)})
    .then( res => {
        if (res.status !== 200 || !res.status) {
            const obj = res.json().then( res => {
                console.log(res)
            })

        } else {
            const obj = res.json().then( res => {

                props.songsLibrary.splice(0, props.songsLibrary.length)
                for (const v of res) {
                    props.songsLibrary.push(v);
                }
            }
            )
        }

        router.push('library');
    })
}
getter();

</script>