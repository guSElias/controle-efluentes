<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type Indices from '@/interfaces/Indices'
import http from '@/http'

interface SeriesData {
  name: string;
  data: number[];
}

const ph = ref<Indices[]>([])
const series = ref<SeriesData[]>([{
  name: 'Ph',
  data: []
}])
const options = ref({
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: ['Temperatura', 'Turbidez', 'Ph', 'Nível']
  }
})

onMounted(async () => {
  try {
    const response = await http.get('get?token=KeBliILwUU--Nx1Y0OSpo84gpRBkql5k&pin=V0')
    console.log('Dados da API:', response.data)
    ph.value = response.data

    if (Array.isArray(ph.value)) {
      series.value[0].data = ph.value.map(item => item.ph)
    } else {
      console.error('A resposta da API não é um array:', ph.value)
    }

    console.log('Série de dados:', series.value)
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error)
  }
})
</script>
<template>
  <div class="container">
    <div class="card text-center">
      <apexchart height="600px" type="bar" :options="options" :series="series"></apexchart>
    </div>
  </div>
</template>
