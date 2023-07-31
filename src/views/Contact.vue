<template>
    <div>
        <h2>Halaman Contact</h2>
        <p>Selamat Datang Di Halaman Contact</p>
    </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
    setup(props, context) {
        onMounted(() => {
            context.emit("id-menu", 2);
        })
    }
}
</script>