<script setup lang="ts">
import { RouterView } from 'vue-router';
import CardFiltros from './components/CardFiltros.vue'
</script>
<template>
  <div class="container-fluid text-center">
    <h1 class="mb-3 text-primary">Controle de efluentes</h1>
    <div class="col col-rows-2 p-2">
      <div class="row-5">
        <RouterView />
      </div>
    </div>
    <CardFiltros />
  </div>
</template>
