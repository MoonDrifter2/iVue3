import { customRef } from 'vue'

export default function (initValue: string, delay: number) {
    let timer: number // 定时器返回定时器编号

    return customRef((track, trigger) => { // track跟踪 trigger触发
        return {
            get() {
                track() // 收集依赖（订阅）
                return initValue
            },
            set(newValue) {
                clearTimeout(timer) // 防抖：延迟执行，并且在延迟期间内重新触发则重置延迟
                if (newValue === initValue) return
                timer = setTimeout(() => {
                    initValue = newValue
                    trigger() // 派发更新（发布）
                }, delay)
            }
        }
    })
}