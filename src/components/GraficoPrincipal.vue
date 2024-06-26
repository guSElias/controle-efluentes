<script setup lang="ts">
import type Indices from '@/interfaces/Indices'
import { onMounted, ref } from 'vue'
import CardFiltros from './CardFiltros.vue'
import http from '@/http'

const indices = ref<Indices>()

const options = {
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: ['Temperatura', 'Turbidez', 'Ph', 'Nível']
  }
}
const series = [
  {
    data: [30, 40, 45, 50]
  },
  onMounted(async () => {
    const response = await http.get('get?token=KeBliILwUU--Nx1Y0OSpo84gpRBkql5k=V0')
    indices.value?.ph == response.data
    console.log(series.values)
  })
]
</script>
<template>
  <div class="container">
    <div class="card text-center">
      <apexchart height="500px" type="bar" :options="options" :series="series"></apexchart>
    </div>
    <div class="row">
      <CardFiltros class="mt-5" />
    </div>
  </div>
</template>
