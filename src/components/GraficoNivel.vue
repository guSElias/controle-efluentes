<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import type Nivel from '@/interfaces/Nivel'
import http from '@/http'
import type GraficosProps from './types'

const nivel = ref<Nivel[]>([])
const props = defineProps<GraficosProps>()

const options = ref({
  chart: {
    id: 'vuechart-example'
  }
})

const series = computed(() => [
  {
    data: nivel.value.map((item) => parseFloat(item.value.toFixed(2)))
  }
])

onMounted(async () => {
  try {
    const response = await http.get('/nivel')
    console.log('Dados da API:', response.data)
    nivel.value = response.data
    console.log('Série de dados:', series.value)
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error)
  }
})
</script>

<template>
  <div class="container">
    <div class="card text-center">
      <h3 class="text-info">Gráfico de nível da água</h3>
      <apexchart
        :height="props.height || '600px'"
        :type="props.type || 'area'"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>
