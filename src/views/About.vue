<template>
    <div>
        <h2>Halaman About</h2>
        <p>Selamat Datang Halaman About</p>
    </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
    setup(props, context) {
        onMounted(() => {
            context.emit("id-menu", 3);
        })
    }
}
</script>