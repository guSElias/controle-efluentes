<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-bottom w-100">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active d-flex flex-column" href="/">
            <img class="mb-3" src="../assets/img/home-button.png" alt="Início" />
            Início
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active d-flex flex-column" href="temperatura">
            <img class="mb-3" src="../assets/img/temperatura.png" alt="Temperatura" />
            Temperatura
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active d-flex flex-column" href="turbidez">
            <img class="mb-3" src="../assets/img/turbidez.png" alt="Turbidez" />
            Turbidez
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active d-flex flex-column" href="ph">
            <img class="mb-3" src="../assets/img/ph.png" alt="Ph" />
            Ph
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active d-flex flex-column" href="nivel">
            <img class="mb-3" src="../assets/img/nivelAgua.png" alt="Nível da Água" />
            Nível da Água
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style>
img {
  height: 150px;
}
.navbar-nav {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
