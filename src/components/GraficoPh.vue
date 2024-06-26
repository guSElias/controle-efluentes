<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="card text-center">
      <apexchart height="600px" type="bar" :options="options" :series="series"></apexchart>
    </div>
  </div>
</template>