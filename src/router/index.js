import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Produk from '../views/Produk.vue';
import Detail from "../views/Detail.vue";
import Detail2 from "../views/Detail2.vue"
import Kategori  from "../views/Kategori.vue";
import DetailKategori from "../views/DetailKategori.vue"
import ElektronikComponent from "../components/ElektronikComponent.vue";
import PageNotFound from "../views/PageNotFound.vue"
// import Elektronik from "../views/Elektronik.vue";

import Login from "../views/Login.vue"
import { users } from "../assets/User";


// import Elektronik from "../views/Elektoinik.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = true;
      if (loggedInUser) {
        next(); //Lanjutkan navigasi ke halaman produk jika sudah login
      } else {
        next("/login"); // Alihkan ke halaman login jika belum login
      }
    }

  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true
  },
  {
    path: "/detail/:id_kategori",
    name: "Detail2",
    component: Detail2,
    props: true
  },
  {
    path: "/ElektronikComponent/:id_kategori",
    name: "ElektronikComponent",
    component: ElektronikComponent,
    props: true
  },
  {
    path: "/detail/:id_kategori",
    name: "DetailKategori",
    component: DetailKategori,
    props: true
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true
  },
  // {
  //   path: "/elektronik/:id_kategori",
  //   name: "Elektronik",
  //   component: Elektronik,
  //   props: true
  // },
  // {
  //   path: "/elektronik/:id_produk",
  //   name: "Elektronik",
  //   component: Elektronik,
  //   props: true
  // }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;




