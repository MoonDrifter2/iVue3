<template>
    <div class="hello">
        Hello!{{ name }}
        <h2 v-promax="value"></h2>
    </div>
</template>

<script lang="ts" name="Hello" setup>
import { ref } from 'vue'
let value = ref(1)
</script>

<style scoped>
.hello {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>