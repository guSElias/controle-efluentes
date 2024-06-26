<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import type Temperatura from '@/interfaces/Temperatura'
import http from '@/http'
import type GraficosProps from './types';

const temperatura = ref<Temperatura[]>([])
const props = defineProps<GraficosProps>()

const options = ref({
  chart: {
    id: 'vuechart-example'
  },
})

const series = computed(() => [
  {
    data: temperatura.value.map(item => parseFloat(item.value.toFixed(2)))
  }
])

onMounted(async () => {
  try {
    const response = await http.get('/temperatura')
    console.log('Dados da API:', response.data)
    temperatura.value = response.data
    console.log('Série de dados:', series.value)
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error)
  }
})
</script>

<template>
  <div class="container">
    <div class="card text-center">
      <h3 class="text-info">Gráfico de Temperatura</h3>
      <apexchart :height="props.height || '600px'" :type="props.type ||'area'" :options="options" :series="series"></apexchart>
    </div>
  </div>
</template>
