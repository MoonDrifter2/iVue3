<template>
    <div class="news">
        <div class="aside">
            <ul>
                <li v-for="item in newsList" :key="item.id">
                    <!-- <RouterLink :to="`/news/detail?id=${item.id}`">{{ item.title }}</RouterLink> -->
                    <!-- <RouterLink :to="{ path: '/news/detail', query: { id: item.id } }">{{ item.title }}</RouterLink> -->

                    <!-- <RouterLink :to="`/news/detail/${item.id}`">{{ item.title }}</RouterLink> -->
                    <!-- params传参（对象写法）：不能用path只能用name，params对象内属性名需要对应路由内的占位符，属性值只能是基本数据类型 -->
                    <!-- <RouterLink :to="{ name: 'more', params: { id: item.id } }">{{ item.title }}</RouterLink> -->
                    <RouterLink replace :to="{ name: 'more', params: { id: item.id }, query: { name: 'meffe' } }">{{
                        item.title
                        }}</RouterLink>
                </li>
            </ul>
        </div>

        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" name="News" setup>
import { reactive } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const newsList = reactive([
    {
        id: '001', title: '如何选择好的抗癌食品', content: '我也不知道，吃点西蓝花如何呢'
    },
    {
        id: '002', title: '如何一夜暴富', content: '别做梦了，打工人应该想着一日三餐吃什么'
    },
    {
        id: '003', title: '震惊！你竟然被我震惊到了', content: '恭喜你年轻人，你被我恭喜到了'
    }
])
</script>

<style scoped>
.news {
    display: flex;
    align-items: center;
    height: 100%;
}

.aside {
    width: 40%;
}

ul {
    list-style: none;
    padding-left: 0;
}

li {
    margin-left: 20px;
}

a {
    font-size: 24px;
    color: #0366d6;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #ff8300;
    text-decoration: underline;
}

.content {
    width: 100%;
    background-color: #f2f2f2;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>