<template>
  <nav class="fixed w-full z-50 bg-primary-400 py-1">  
        <Menubar :model="menu">
          <template #start>
            <div class="max-w-screen-xl flex items-center mx-auto p-4 relative lg:mr-16 hover:cursor-pointer" >
              <i class="text-3xl material-symbols-outlined">home</i>
            </div>
          </template>
          <template #item="{ item, hasSubmenu}">
            <div class="bg-primary-400 ">
              <RouterLink v-ripple :class="{ 'navigation-link':true,'px-4':item.op, 'w-40':item.op}" :to="item.path">
                {{ item.label }}
                <i v-if="hasSubmenu" class="material-symbols-outlined">expand_more</i>
              </RouterLink>              
              
            </div>
          </template>
          <template #end>
            <div class="max-w-screen-xl flex items-center mx-auto p-4 relative">
                <button class="bg-primary-50 text-primary-950 rounded-md p-2 hover:text-primary-700">
                    <p>Iniciar Sesion</p>
                </button>
            </div>
          </template>
        </Menubar>  
  </nav>
</template>
<script>
  import Menubar from 'primevue/menubar'
import { RouterLink } from 'vue-router';

  export default{
    components: {
    Menubar,
    RouterLink
},
    data() {
      return {
        menu:[
          {name:'TheHome', label:'Home',path: '/'},
          {name:'feed', label:'Nuestros Enfoques',path: '/',items:[
            {name:'feed',label:'Ambiental',path:'/',op:true},
            {name:'feed',label:'Robotico',path:'/',op:true},
            {name:'feed',label:'Ludico',path:'/',op: true},
            {name:'feed',label:'Vision',path:'/',op: true},
          ]},
          {name:'feed', label:'Actividades y Cronograma',path: '/actividades'},
          {name:'AboutMe', label:'Quienes Somos',path: '/nosotros'},
        ]
       
        }
      }
    }
</script>
<style scoped>
.navigation-link {
  @apply block rounded hover:cursor-pointer hover:bg-primary-50 hover:text-primary-800 flex items-center mr-4 w-full text-primary-950  sm:py-4 px-3;
}
.icon-color{
  @apply text-green-100
}
</style>