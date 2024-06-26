import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue'),
      children: [

      ]
    },
    {
      path: '/pokemons/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue'),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import('../views/NotFoundView.vue'),
    }
  ]
})

export default router
