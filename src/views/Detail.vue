<!-- <template>
    <div>
        <h1>Detail {{ detail.nama }}</h1>
        <h4>Harga {{ detail.harga }}</h4>
    </div>
</template>

<script>
    import { produk } from '/src/assets/Produk.js'; // Corrected the file name to lowercase

    export default {
        props: [
            'id_Produk'
        ],
        setup(props){
            const detail = produk["produk"].find(function(item){
                return item.id == props.id_produk;
            });
            return{
                detail
            }
        }
    }
</script> -->
