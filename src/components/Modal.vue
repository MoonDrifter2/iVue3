<template>
    <button @click="isShow = true">Show Model</button>
    <!-- 传送门 -->
    <!-- to=".modal" -->
    <teleport to="body">
        <div class="modal" v-show="isShow">
            <button @click="isShow = false">Close Model</button>
        </div>
    </teleport>
</template>

<script lang="ts" name="Modal" setup>
import { ref } from 'vue'

let isShow = ref(false)
</script>

<style scoped>
.modal {
    width: 500px;
    height: 500px;
    background-color: gray;
    border-radius: 25px;
    padding: 10px;
    box-shadow: 0 0 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>