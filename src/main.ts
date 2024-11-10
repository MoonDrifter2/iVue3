import { createApp } from 'vue' // 引入createApp用于创建应用
import App from './App.vue' // 引入App根组件

import router from './router'

import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

import Hello from '@/components/Hello.vue'
app.component('Hello', Hello)
app.config.globalProperties.name = 'Gynmeffe'

declare module 'vue' {
    interface ComponentCustomProperties {
        name: string
    }
}

app.directive('promax', (element, { value }) => {
    element.innerText = value * 10
})

app.use(router)
app.use(pinia)
app.mount('#app')
// app.unmount()