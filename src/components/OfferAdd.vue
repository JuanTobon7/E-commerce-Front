<template>
    <section v-if="mostrarAnuncio" class="sup ctn-Add">
        <div v-if="mostrarAnuncio" class="add w-[50vh] md:w-[60vh] h-[70vh] p-2 container bg-image">
            <div class="flex flex-col h-[75vh] justify-between">
                <span class="flex justify-end">
                    <i class="hover:cursor-pointer material-symbols-outlined text-gray-700" @click="cerrarAnuncio()">close</i>
                </span>
                <div class=" bg-black bg-opacity-50 text-white flex flex-col items-center justify-end p-4 rounded-md gap-1">
                    <h1 class="text-2xl">¡Bienvenido a nuestro sitio web!</h1>
                    <p class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, velit tempora sed similique et numquam consequuntur neque illo eos veritatis fugiat quis ipsa enim, facilis voluptatem reiciendis doloribus voluptate nihil!</p>
                    <div class="flex w-1/2 items-center justify-evenly w-full">           
                        <button class="hover:cursor-pointer bg-red-500 p-2 rounded-md" @click="cerrarAnuncio()">Cerrar</button>
                        <button  class="hover:cursor-pointer bg-primary-500 p-2 rounded-md" @click="cerrarAnuncio()">Ver mas</button>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
        mostrarAnuncio: true
        };
    },
    methods: {
        cerrarAnuncio() {
        this.mostrarAnuncio = false;
        }
    },
};
</script>

<style scoped>
.bg-image{
    background-image: url(https://i.imgur.com/jC2yZid.jpeg);
    @apply bg-center bg-cover left-0 top-0 bg-no-repeat;
}
.add {
    @apply w-[130vh] h-[80vh] rounded-md py-3;
}
.sup{
  z-index: 60; 
}
.ctn-Add{
    @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center;
}
</style>
  