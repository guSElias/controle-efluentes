<script setup lang="ts">
const cards = [
  { title: 'Temperatura', image: new URL('../assets/img/temperatura.png', import.meta.url).href },
  { title: 'Turbidez', image: new URL('../assets/img/turbidez.png', import.meta.url).href },
  { title: 'Ph', image: new URL('../assets/img/ph.png', import.meta.url).href },
  { title: 'Nível da água', image: new URL('../assets/img/nivelAgua.png', import.meta.url).href }
]
</script>

<template>
  <div class="container-grid">
    <div class="row gap-5 justify-content-center">
      <div v-for="card in cards" :key="card.title" class="card text-center" style="width: 14rem;">
        <img class="card-img-top" :src="card.image" alt="" />
        <div class="card-body">
          <h5 class="card-title">{{ card.title }}</h5>
          <button type="button" class="btn btn-primary" @click="applyFilter(card.title)">
            Adicionar filtro
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
