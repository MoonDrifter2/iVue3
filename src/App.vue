<template>
    <div class="app">
        <h1>你好Vue3</h1>
        <!-- <Effect />
        <Person />
        <Game />
        <Name />
        <Car />
        <Sum /> -->
        <Son ref="child" />

        <div>
            <button @click="showChild">Show Child</button>
        </div>

        <!-- <div class="navigate">
            <RouterLink active-class="hover" :to="{ path: '/home' }">首页</RouterLink>
            <RouterLink active-class="hover" :to="{ name: 'dongtai' }">动态</RouterLink>
            <RouterLink active-class="hover" to="/about">关于</RouterLink>
        </div>

        <div class="content">
            <RouterView></RouterView>
        </div> -->

        <!-- <Count />
        <Say /> -->

        <!-- <Shallow />
        <Row /> -->

        <!-- <Custom /> -->

        <!-- <img src="https://kimi-img.moonshot.cn/prod-chat-kimi/avatar/kimi/cs7p19in6vuktm2sao6g/白色 (1) (1) (1).png"
            alt="">
        <Modal /> -->

        <Suspense>
            <template v-slot:default>
                <Sync />
            </template>
            <template v-slot:fallback>
                <h2>加载中...</h2>
            </template>
        </Suspense>
    </div>
</template>

<script lang="ts" name="App" setup>
import { ref, Suspense } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

import Person from '@/components/Person.vue'
import Effect from '@/components/Effect.vue'
import Game from '@/components/Game.vue'
import Name from '@/components/Name.vue'
import Car from '@/components/Car.vue'
import Sum from '@/components/Sum.vue'
import Son from '@/components/Son.vue'

import Count from '@/components/Count.vue'
import Say from '@/components/Say.vue'

import Shallow from '@/components/Shallow.vue'
import Row from '@/components/Row.vue'

import Custom from '@/components/Custom.vue'
import Modal from '@/components/Modal.vue'
import Sync from '@/components/Sync.vue'

let child = ref()

function showChild() {
    console.log(child.value);
}
</script>

<style>
.app {
    display: grid;
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    row-gap: 20px;
    /* filter: saturate(0%); */
}

button {
    margin-right: 5px;
}

.navigate {
    background-color: #333;
    overflow: hidden;
    padding: 10px 0;
}

.navigate a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.navigate .hover {
    background-color: #ddd;
    color: black;
}

.content {
    background-color: #f2f2f2;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>