<template>
    <div>
        <h2>Halaman Home</h2>
        <p>Selamat Datang</p>
    </div>
</template>


<script>
import { onMounted } from 'vue'

export default {
    setup(props, context) {
        onMounted(() => {
            context.emit("id-menu", 1);
        })
    }
}
</script>