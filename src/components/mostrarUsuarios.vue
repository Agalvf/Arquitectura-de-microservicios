<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const usuarios = ref([])
const url = 'https://jsonplaceholder.typicode.com/users'

onMounted(async () => {
    const res = await axios.get(url)
    usuarios.value = res.data
})

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Mostrar Usuarios</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Telefono</th>
                            <th>Web</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuarios" :key="usuario.id">
                            <td>{{ usuario.name }}</td>
                            <td>{{ usuario.username }}</td>
                            <td>{{ usuario.email }}</td>
                            <td>{{ usuario.phone }}</td>
                            <td>{{ usuario.website }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
