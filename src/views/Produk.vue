<!-- <template>
    <div>
      <h1>Produk</h1>
      <div class="flex-container">
        <div v-for="produk in state" :key="produk.id" class="card">
          <router-link class="container" :to="{ name: 'Detail', params: { id_produk: produk.id } }">
            <h4>{{ produk.nama }}</h4>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, reactive } from 'vue';
  import { Produk } from '/src/assets/Produk.js';
  
  export default {
    setup(props, context) {
      const state = reactive(Produk["Produk"]);
  
      onMounted(() => {
        context.emit("id-menu", 4);
      });
  
      return {
        state,
      };
    },
  };
  </script>
  
  <style scoped>
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
  </style>
   -->