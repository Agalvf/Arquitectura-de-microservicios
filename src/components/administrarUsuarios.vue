<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

onMounted(async () => {
    const res = await axios.get(url)
    usuarios.value = res.data
})

const usuarios = ref([])
const usuario = ref({})
const editar = ref(false)

const agregarUsuario = () => {
    usuario.value = {}
    editar.value = true
}

const editarUsuario = (user) => {
    usuario.value = user
    editar.value = true
}

const eliminarUsuario = async (user) => {
    const res = await axios.delete(`${url}/${user.id}`)
    if (res.status === 200) {
        usuarios.value = usuarios.value.filter(u => u.id !== user.id)
    }
}

const guardarUsuario = async () => {
    if (usuario.value.id) {
        const res = await axios.put(`${url}/${usuario.value.id}`, usuario.value)
        if (res.status === 200) {
            usuarios.value = usuarios.value.map(u => u.id === usuario.value.id ? usuario.value : u)
        }
    } else {
        const res = await axios.post(url, usuario.value)
        if (res.status === 201) {
            usuarios.value.push(res.data)
        }
    }
    editar.value = false
}


</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Administrar Usuarios</h1>
                <button class="btn btn-primary" @click="agregarUsuario">Agregar Usuario</button>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Telefono</th>
                            <th>Web</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuarios" :key="usuario.id">
                            <td>{{ usuario.name }}</td>
                            <td>{{ usuario.username }}</td>
                            <td>{{ usuario.email }}</td>
                            <td>{{ usuario.phone }}</td>
                            <td>{{ usuario.website }}</td>
                            <td>
                                <button class="btn btn-primary" @click="editarUsuario(usuario)">Editar</button>
                                <button class="btn btn-danger" @click="eliminarUsuario(usuario)">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row" v-if="editar">
            <div class="col-md-12">
                <h1>Editar Usuario</h1>
                <form @submit.prevent="guardarUsuario">
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" class="form-control" id="name" v-model="usuario.name">

                    </div>
                </form>
            </div>
        </div>

    </div>


</template>

<style scoped>

</style>
