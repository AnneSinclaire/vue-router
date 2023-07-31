import { createWebHistory, createRouter } from "vue-router";
 import Home from "../views/Home.vue";
 import About from "../views/About.vue";
 import Contact from "../views/Contact.vue";
//  import Produk from './views/Produk';


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
      // {
      //   path: "/produk",
      //   name: "Produk",
      //   component: Produk,
      // },
      // {
      //   path: "/about",
      //   name: "About",
      //   component: About,
      // },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;




