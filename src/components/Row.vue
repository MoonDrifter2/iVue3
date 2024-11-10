<template>
    <div class="row">
        <h3>名字：{{ person.name }}</h3>
        <h3>年龄：{{ person.age }}</h3>
        <button @click="changePersonName">修改名字</button>
        <button @click="changePersonAge">修改年龄</button>

        <h4>摩托品牌：{{ matorcycle.brand }}</h4>
        <h4>摩托颜色：{{ matorcycle.specs.color }}色</h4>
        <h4>摩托速度：{{ matorcycle.specs.speed }}迈</h4>
        <button @click="changeMatorcyclBrand">修改摩托品牌</button>
        <button @click="changeMatorcycleColor">修改摩托颜色</button>
    </div>
</template>

<script lang="ts" name="Row" setup>
import { reactive, markRaw, toRaw } from 'vue' // 浅层式响应式API（节省性能）

let person = reactive({
    name: 'Gynmeffe',
    age: 24
})

function changePersonName() {
    person.name = '夯大力'
}

function changePersonAge() {
    person.age = 28
}

console.log(toRaw(person)); // 获取解除响应式的对象，reactive有效ref无效

let info = markRaw({ // 返回永远无法创建响应式的对象
    brand: '哈雷',
    specs: {
        color: '黑',
        speed: 110
    }
})
let matorcycle = reactive(info)

function changeMatorcyclBrand() {
    matorcycle.brand = '川崎'
}

function changeMatorcycleColor() {
    matorcycle.specs.color = '绿'
}
</script>

<style scoped>
.row {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>