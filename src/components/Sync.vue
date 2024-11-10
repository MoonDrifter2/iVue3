<template>
    <div class="sync">
        <h2>Https!</h2>
        <Hello />
    </div>
</template>

<script lang="ts" name="Sync" setup>
import { ref } from 'vue'
import axios from 'axios'

let say = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
console.log(say);
</script>

<style scoped>
.sync {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>