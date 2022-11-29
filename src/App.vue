<script setup>
import router from './router/router';


</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/mostrarUsuarios" class="nav-link">Mostrar Usuarios</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/administrarUsuarios" class="nav-link">Administrar Usuarios</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style scoped>

</style>
