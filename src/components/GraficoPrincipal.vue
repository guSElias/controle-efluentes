<script setup lang="ts">
import GraficoNivel from './GraficoNivel.vue';
import GraficoPh from './GraficoPh.vue';
import GraficoTemperatura from './GraficoTemperatura.vue';
import GraficoTurbidez from './GraficoTurbidez.vue';

</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <GraficoTemperatura height="200px" type="bar"/>
      </div>
      <div class="col-md-6">
        <GraficoTurbidez height="200px" type="bar"/>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-6">
        <GraficoPh height="200px" type="bar"/>
      </div>
      <div class="col-md-6">
        <GraficoNivel height="200px" type="bar"/>
      </div>
    </div>
  </div>
</template>