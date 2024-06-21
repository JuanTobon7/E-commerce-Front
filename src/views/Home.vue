<template>
  <h1>HOla</h1>
  <section class="container">
    <div class="flex justify-items-center py-4 bg-primary-300 w-[30vh]">
      <form @submit.prevent="registerMethod" class="p-5 flex flex-col justify-items-center gap-2">
        <h2>Inicia sesión</h2>
        <input v-model="email" class="border-primary-500 rounded-md hover:border-primary-900 hover:scale-105 transition-transform px-2" placeholder="Email">
        <input v-model="password" class="border-primary-500 rounded-md hover:border-primary-900 hover:scale-105 transition-transform px-2" placeholder="Password">
        <button type="submit" class="rounded-md bg-primary-400 text-primary-900">Enviar</button>
      </form>
    </div>
  </section>
</template>
<script>
import {resgiter} from '../api/router'

export default {
  data() {
    return {
      email: null,
      password: null,
      message: null
    }
  },
  methods: {
    async registerMethod(){
        const email = this.email;
        const password = this.password;
        if (!email || !password) return;
        try {
            const response = await resgiter({email,password});
            this.message = response.data; 
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            this.message = error.message; 
        }
    }
  }
}

</script>