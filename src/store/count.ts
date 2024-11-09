import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// export const useCountStore = defineStore('count', {
//     state() {
//         return {
//             sum: 7
//         }
//     },
//     actions: {
//         increment(value: number) {
//             this.sum += value
//         }
//     },
//     getters: {
//         sumProMax: state => state.sum * 100
//     }
// })

export const useCountStore = defineStore('count', () => {
    let sum = ref(7)

    function increment(value: number) {
        sum.value += value
    }

    let sumProMax = computed(() => sum.value * 100)

    return { sum, sumProMax, increment }
})