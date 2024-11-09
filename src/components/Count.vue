<template>
    <div class="count">
        <h2>当前求和：{{ sum }}</h2>
        <h2>超级求和：{{ sumProMax }}</h2>
        <select v-model.number="base">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="sub">减</button>
    </div>
</template>

<script lang="ts" name="Count" setup>
import { ref } from 'vue'
import { useCountStore } from '@/store/count'
import { storeToRefs } from 'pinia'

const countStore = useCountStore()
let { sum, sumProMax } = storeToRefs(countStore) // 仅关注状态

// reactive内的ref会自动解包

let base = ref(1);

function add() {
    // countStore.sum += base.value // mutations

    // countStore.$patch({
    //     sum: 10
    // })

    countStore.increment(base.value)
}


function sub() {
    countStore.sum -= base.value
}
</script>

<style scoped>
.count {
    background-color: rebeccapurple;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

select {
    margin-right: 5px;
}
</style>