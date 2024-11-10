<template>
    <div class="custom">
        <h2>{{ msg }}</h2>
        <input type="text" v-model="msg">
    </div>
</template>

<script lang="ts" name="Custom" setup>
import { ref, customRef } from 'vue'

let initValue = 'Vue3'

import useMsgRef from '@/hooks/useMsgRef'

let msg = useMsgRef(initValue, 1000)

// let timer: number // 定时器返回定时器编号

// let msg = customRef((track, trigger) => { // track跟踪 trigger触发
//     return {
//         get() {
//             track() // 收集依赖
//             return initValue
//         },
//         set(newValue) {
//             clearTimeout(timer) // 防抖：延迟执行，并且在延迟期间内重新触发则重置延迟
//             if (newValue === initValue) return
//             timer = setTimeout(() => {
//                 initValue = newValue
//                 trigger() // 派发更新
//             }, 1000)
//         }
//     }
// })
</script>

<style scoped>
.custom {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>