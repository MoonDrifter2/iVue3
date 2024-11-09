<template>
    <div class="home">
        首页
    </div>
</template>

<script lang="ts" name="Home" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
    setTimeout(() => {
        // router.push('/news')
        router.replace({
            path: '/news',
            query: {}
        })
    }, 5000)
})
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>