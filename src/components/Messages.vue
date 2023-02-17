<script setup>
const props = defineProps({
    msg: String
})


</script>

<template>
    <div class="msgContainer">
        <p>
            {{ msg }}
        </p>
    </div>
</template>

<style>
.msgContainer {
    padding: 20px;
    background-color: rgba(255, 0, 0, 0.329);
    text-align: center;
    color: white;
    font-size: 20px;
    border-radius: 5px;
}
</style>