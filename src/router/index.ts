import GraficoNivel from '@/components/GraficoNivel.vue'
import GraficoPh from '@/components/GraficoPh.vue'
import GraficoPrincipal from '@/components/GraficoPrincipal.vue'
import GraficoTemperatura from '@/components/GraficoTemperatura.vue'
import GraficoTurbidez from '@/components/GraficoTurbidez.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: GraficoPrincipal
    },
    {
      path: '/temperatura',
      name: 'temperatura',
      component: GraficoTemperatura
    },
    {
      path: '/turbidez',
      name: 'turbidez',
      component: GraficoTurbidez
    },
    {
      path: '/ph',
      name: 'ph',
      component: GraficoPh
    },
    {
      path: '/nivel-agua',
      name: 'nivel',
      component: GraficoNivel
    },
  ]
})

export default router
