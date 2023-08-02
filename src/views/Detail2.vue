<template>
  <div>
   
  </div>
</template>

<script>
  import { kategori } from '../assets/kategori'; // Corrected the file name to lowercase


  
  export default {
      props: [
          'id_kategori'
      ],
      setup(props){
          const detail2 = kategori["kategori"].find(function(item){
              return item.id == props.id_kategori;
          });
          return{
              detail2
          }
      }
  }
</script>