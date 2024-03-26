<template>
  <h1>HOla</h1>
  <section class="container">
    <div class="flex justify-items-center py-4 bg-primary-300 w-[30vh]">
      <form @submit.prevent="singInMethod" class="p-5 flex flex-col justify-items-center gap-2">
        <h2>Inicia sesión</h2>
        <input v-model="name" class="border-primary-500 rounded-md hover:border-primary-900 hover:scale-105 transition-transform px-2" placeholder="Nombre">
        <button type="submit" class="rounded-md bg-primary-400 text-primary-900">Enviar</button>
      </form>
    </div>
  </section>
</template>
<script>
import {singIn} from '../api/router'

export default {
  data() {
    return {
      name: null,
      message: null
    }
  },
  methods: {
    async singInMethod(){
        const name = this.name;
        if (!name) return;
        try {
            const response = await singIn(name);
            this.message = response.data; 
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            this.message = error.message; 
        }
    }
  }
}

</script>