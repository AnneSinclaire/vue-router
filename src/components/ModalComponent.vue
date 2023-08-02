<script setup>
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'

const isShowModal = ref(false)
function closeModal() {
    isShowModal.value = false
}
function showModal() {
    isShowModal.value = true
}
</script>

<style>
/* Animation keyframes */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

/* Modal overlay animation */
.overlay-enter-active,
.overlay-leave-active {
    /* Add animation properties */
    animation: fadeIn 0.3s ease-in-out;
}

.overlay-leave-active {
    animation: fadeOut 0.3s ease-in-out;
}


/* Overlay styles */
.overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
}

/* Modal styles */
.modal-container {
    max-width: 500px;
    /* Adjust the width as needed */
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

/* Additional styles for the content inside the modal */
.modal-header {
    background-color: #f3f4f6;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #e5e7eb;
}

.modal-body {
    padding: 15px;
}

.modal-footer {
    padding: 15px;
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #e5e7eb;
}

/* Additional styles for the image inside the modal */
.modal-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}
</style>

<template>
    <div>
        <div class="relative max-h-full overflow-hidden bg-cover bg-no-repeat ">
            <img @click="showModal" type="button"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuM_WemmFEY5Y2pBGcwg2RjUT4W4h6VDVkw&usqp=CAU"
                class="max-w-xs transition duration-300 ease-in-out hover:scale-110 max-w-full rounded-lg shadow-xl hover:shadow-2xl "
                alt="#" />
        </div>

        <!-- Modal Overlay -->
        <transition name="overlay">
            <div class="overlay" v-if="isShowModal">
                <div class="modal-container">
                    <div class="overlay" v-if="isShowModal">
                        <div class="modal-container">
                            <div class="modal-header">Let's Absorb</div>

                            <!-- Modal Content -->
                            <div class="modal-body">
                                <img class="modal-image" src="https://i.imgur.com/p7Lg6uE.png" alt="image description">
                                <p class="mb-3 text-left text-gray-500 dark:text-gray-400">Website pembelajaran Let's Absorb
                                    sebuah tugas dari project p% yang bertujuan untuk membangun Website Pembelajaran daptive
                                    yang sesuai kurikulum.</p>
                            </div>
                            <!-- End Modal Content -->


                            <div class="modal-footer">
                                <button @click="closeModal" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tutup</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
