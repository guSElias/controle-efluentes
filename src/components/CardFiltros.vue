<script setup lang="ts">
const cards = [
  { title: 'Temperatura', image: new URL('../assets/img/temperatura.png', import.meta.url).href },
  { title: 'Turbidez', image: new URL('../assets/img/turbidez.png', import.meta.url).href },
  { title: 'Ph', image: new URL('../assets/img/ph.png', import.meta.url).href },
  { title: 'Nível da água', image: new URL('../assets/img/nivelAgua.png', import.meta.url).href }
]
console.log(cards)
</script>

<template>
  <div class="grid">
    <div class="row gap-5 justify-content-center">
      <div v-for="card in cards" :key="card.title" class="card text-center" style="width: 18rem">
        <img class="card-img-top" :src="card.image" alt="" style="height: 250px; width: 17rem;" />
        <div class="card-body">
          <h5 class="card-title">{{ card.title }}</h5>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>
