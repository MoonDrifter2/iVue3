<template>
    <div class="shallow">
        <h2>求和：{{ sum }}</h2>
        <h3>名字：{{ person.name }}</h3>
        <h3>年龄：{{ person.age }}</h3>
        <button @click="add">+1</button>
        <button @click="changePersonName">修改名字</button>
        <button @click="changePersonAge">修改年龄</button>
        <button @click="changePerson">修改个人</button>

        <h4>汽车品牌：{{ car.brand }}</h4>
        <h4>汽车颜色：{{ car.specs.color }}色</h4>
        <h4>汽车速度：{{ car.specs.speed }}迈</h4>
        <button @click="changCarBrand">修改汽车品牌</button>
        <button @click="changCarColor">修改汽车颜色</button>
        <button @click="changCarSpeed">修改汽车速度</button>

        <h4>当前计数：{{ _count }}</h4>
        <button @click="changeCount">加一</button>

        <h4>摩托品牌：{{ matorcycle.brand }}</h4>
        <h4>摩托颜色：{{ matorcycle.specs.color }}色</h4>
        <h4>摩托速度：{{ matorcycle.specs.speed }}迈</h4>
        <button @click="changeMatorcyclBrand">修改摩托品牌</button>
        <button @click="changeMatorcycleColor">修改摩托颜色</button>
        <button @click="changeMatorcycle">修改摩托整体</button>
    </div>
</template>

<script lang="ts" name="Shallow" setup>
import { shallowReactive, shallowRef, reactive, ref } from 'vue' // 浅层式响应式API（节省性能）
import { shallowReadonly, readonly } from 'vue'

let sum = shallowRef(0)
let person = shallowRef({
    name: 'Gynmeffe',
    age: 24
})

let car = shallowReactive({
    brand: '特斯拉',
    specs: {
        color: '黑',
        speed: 80
    }
})

function add() { // 顶层有响应式
    sum.value++
}

function changePersonName() { // 深层无响应式
    person.value.name = '夯大力'
}

function changePersonAge() { // 深层无响应式
    person.value.age = 28
}

function changePerson() {
    person.value = {
        name: '雷军',
        age: 42
    }
}

function changCarBrand() { // 顶层有响应式
    car.brand = '迈凯伦'
}

function changCarColor() { // 深层无响应式
    car.specs.color = '红'
}

function changCarSpeed() { // 深层无响应式
    car.specs.speed = 100
}

// ====================================

let count = ref(0)
let _count = readonly(count) // 创建由ref或reactive定义的数据的深只读版本

function changeCount() {
    _count.value += 1
}

let matorcycle = reactive({
    brand: '哈雷',
    specs: {
        color: '黑',
        speed: 110
    }
})

let _matorcycle = shallowReadonly(matorcycle) //浅只读版本

function changeMatorcyclBrand() {
    _matorcycle.brand = '川崎'
}

function changeMatorcycleColor() {
    _matorcycle.specs.color = '绿'
}

function changeMatorcycle() {
    _matorcycle = {
        brand: '杜卡迪',
        specs: {
            color: '白',
            speed: 150
        }
    }
}
</script>

<style scoped>
.shallow {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>