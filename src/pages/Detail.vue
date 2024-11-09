<template>
    <div class="detail">
        <ul>
            <li><a href="#">{{ id }}{{ name }}</a></li>
        </ul>

        <div></div>
    </div>
</template>

<script lang="ts" name="Detail" setup>
import { toRef } from 'vue'
import { useRoute } from 'vue-router' // hooks

const query = toRef(useRoute(), 'query') // 解构响应式对象会丢失响应式
console.log(query);

const params = toRef(useRoute(), 'params')
console.log(params);

defineProps(['id', 'name'])
</script>

<style scoped></style>