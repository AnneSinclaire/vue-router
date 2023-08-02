<template>
  <!-- <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div> -->



  <div class="bg-white-50 dark:bg-white-800  border-white-200 dark:border-white-700 rounded-lg p-8 md:p-12 mb-8">


    <div class="grid md:grid-cols-3 gap-8">


      <div v-for="produk in state" :key="produk.id"
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ produk.nama }}</h5>
        </a>

        <a href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <router-link class="container" :to="{ name: 'Detail', params: { id_produk: produk.id } }">
            <h4>{{ produk.nama }}</h4>
          </router-link>
          <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>

  </div>
</template>
  
<script>
import { onMounted, reactive } from 'vue';
import { produk } from '../assets/produk.js';

export default {
  setup(props, context) {
    const state = reactive(produk["produk"]);

    onMounted(() => {
      context.emit("id-menu", 4);
    });

    return {
      state,
    };
  },
};
</script>
  
  <!-- <style scoped>
  .flex-container {
    display: flex;
  }
  
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* Fixed the rgba syntax */
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Fixed the rgba syntax */
  }
  
  .container {
    padding: 2px 16px;
  }
  </style> -->
  