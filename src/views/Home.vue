<template>
  
    <section class="w-full pt-2 lg:pb-10 bg-primary-50">
      <div class="h-[60vh] container">
        <Carousel :items-to-show="isSmallScreen ? 1.25 : 1.3"  :wrapAround="true" :autoplay="4000" :transition="500">
          <Slide v-for="item in gallery" :key="item">
            <div class="h-full rounded-md overflow-hidden">
              <div
                class="card-carousel bg-cover"
                :style="{ backgroundImage: 'url(' + item.url + ')' }"
              >
              <div class="flex flex-col text-left justify-center items-center p-2 w-full lg:w-1/2 lg:h-[24vh] bg-primary-600 bg-opacity-80 gap-2 rounded-md overflow-wrap break-word">
                <h2 class="text-primary-50 text-xl lg:text-3xl">¡<strong>{{ item.title }}</strong>!</h2>
                <p class="text-white">{{ item.description }}</p>              
              </div>
              </div>             
            </div>
          </Slide>
          <template #addons>
            <Pagination/>
          </template>
        </Carousel>
      </div>
    </section>
    <section class="h-[70vh] bg-second-500">
      <div class="container py-4">
        <h2 class="text-primary-100 text-4xl mb-2"><strong>Llevate tu cel</strong></h2>
        <p class="text-primary-50 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta voluptatem illo id nesciunt et fugiat velit nulla aut vero? Ad ullam unde nihil rem nulla ea distinctio mollitia odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo esse dolorum consequatur sapiente! Blanditiis quae iusto vero. Architecto, quod. Ab itaque cum eius qui illum nam tenetur, molestiae impedit cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo a incidunt modi laudantium facere officia quidem accusamus? Nostrum voluptatum, itaque dolores veniam quod, necessitatibus, magnam optio maxime fuga vel illo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, culpa et soluta illo minus tenetur eius, at aliquam reprehenderit expedita ut explicabo. Ad velit, eaque similique deleniti ullam atque blanditiis?</p>        
          <form @submit.prevent="sendPhone" class="flex flex-col items-center justify-center gap-1">
            <input v-model="name" class=" p-1 radious-lg border-second-600 text-primary-800" placeholder="Name">
            <input v-model="price" class="p-1 radious-lg border-second-600 text-primary-800" placeholder="Precio">
            <button class="p-2 text-white bg-primary-400 rounded-lg">RESERVAR</button>
          </form>
      </div>  
    </section>
    
  </template>
  
<script>
  import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
  import api from '../services/api'
  
  export default {
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation
    },
    data() {
      return {
        name: null,
        price: null,
        isSmallScreen: false,
        gallery: [
          {
            url: 'https://i.imgur.com/tOu2fKd.jpeg',
            title: 'CELULARES BARATOS',
            description: 'En Teresita Vidal, aplicamos STEAM para aprender activamente en ciencia, tecnología, ingeniería, artes y matemáticas, promoviendo interés y habilidades.'
          },
          {
            url: 'https://i.imgur.com/5BgDRj2.jpeg',
            title: 'computadores baratos',
            description: 'Queremos iniciar un proyecto que brinde a los niños un ambiente amoroso y lúdico, con docentes que los guíen en su desarrollo cognitivo y psicomotriz.'
          },
          {
            url: 'https://i.imgur.com/hSBCEiW.jpeg',
            title: 'AMBIENTAL',
            description: 'En Teresita Vidal, incorporamos el cuidado ambiental en el currículo con eco-ladrillos, recolección de tapas, manejo de pilas y reutilización de aceite en el proyecto Gircol.'
          }
        ],
        
      };
    },
    mounted() {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isSmallScreen = window.innerWidth < 768;
      },
      async sendPhone(){        
        if (!this.name || !this.price){
          console.log("Necesario todos los parametros")
          return
        }
        console.log(this.name,this.price)
        const fromProps = {
          name: this.name,
          phone: this.price          
        }      
        try{          
          await api.sendPhone(fromProps)
        }catch(error){
          console.log(error)
        }
      }
    }
  };
</script>
  
  <style scoped>
  .bg-cover {
    @apply object-cover object-center;
  }

  .card-carousel{
    @apply flex flex-col items-start justify-center lg:justify-center w-[28vh] h-[50vh] md:w-[65vh] md:h-[60vh] lg:w-[125vh] bg-cover bg-center bg-gray-200 lg:p-3;
  }
  .card{
    @apply hover:scale-105 transition-transform gap-2 shadow shadow-primary-500 rounded-md p-2 bg-center bg-cover h-[40vh] flex items-end;
  }
  .ctn-cards{
    @apply grid grid-cols-1 lg:grid-cols-3 py-7 pb-8 gap-5;
  }
  </style>
  