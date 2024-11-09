import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export const useSayStore = defineStore('say', {
    state() {
        return {
            // list: [
            //     {
            //         id: 's1',
            //         title: '奥卡姆剃刀'
            //     },
            //     {
            //         id: 's2',
            //         title: '牛顿的烈焰激光剑'
            //     }
            // ]
            list: JSON.parse(localStorage.getItem('list') as string) || []
        }
    },
    actions: {
        getSay() {
            this.list.push({
                id: nanoid(),
                title: '冰淇淋哲学'
            })
        }
    }
})