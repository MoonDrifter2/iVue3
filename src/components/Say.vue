<template>
    <div class="say">
        <button @click="get">增加原理</button>
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script lang="ts" name="Say" setup>
import { useSayStore } from '@/store/say'
import { storeToRefs } from 'pinia'

const sayStore = useSayStore()
let {
    list
} = storeToRefs(sayStore)

sayStore.$subscribe((mutate, state) => {
    localStorage.setItem('list', JSON.stringify(state.list))
})

function get() {
    sayStore.getSay()
}
</script>

<style scoped>
.say {
    background-color: yellowgreen;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>