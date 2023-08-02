<template>
    <div>
    <center>

        <table>
            <tr>
                <td>ID</td>
                <td>:</td>
                <td>{{ detail.id }}</td>
            </tr>
            <tr>
                <td>Nama</td>
                <td>:</td>
                <td>{{ detail.nama }}</td>
            </tr>
            <tr>
                <td>Harga</td>
                <td>:</td>
                <td>{{ detail.harga }}</td>
            </tr>
            <tr>
                <td>Deskripsi</td>
                <td>:</td>
                <td>{{ detail.deskripsi }}</td>
            </tr>
            <tr>
                <td>Gambar</td>
                <td>:</td>
                <img class="p-8 rounded-t-lg" :src="getImgSrc(produk.img)" style="width: fit-content; height: fit-content;" alt="product image" /> 
            </tr>
            <tr>
                <td>id_kategori</td>
                <td>:</td>
                <td>{{ detail.id }}</td>
            </tr>
        </table>


    </center>
        

    </div>
</template>

<script>
    import { produk } from '/src/assets/produk.js'; // Corrected the file name to lowercase


    export default {
        props: [
            'id_produk',
      
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
</script>
