<template>

<lorem> COLEGIO PECAGICO TERESITA VIDAL </lorem>
<lorem> SOMOS UNA SOLA FAMILIA </lorem>
  <section>
    <div>
      <!-- Sección del video -->
      <section class="video-section bg-gray-100 py-8">
        <div class="video-container">
          <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/uRQ1edYzLvs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </section>
    </div>
  <section class="w-full pt-2 lg:pb-10 bg-primary-50">
      <Carousel :items-to-show="isSmallScreen ? 1.3 : 1.47"  :wrapAround="true" :autoplay="4000" :transition="500">
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
    
  </section>
    <section class="w-full pt-2 lg:mb-7">
          <Carousel :items-to-show="1.47" :wrapAround="true" :autoplay="4000" :transition="500">
            <Slide v-for="item in gallery" :key="item">
              <div class="h-full rounded-md overflow-hidden">
                <div
                  class="card-carousel bg-cover"
                  :style="{ backgroundImage: 'url(' + item.url + ')' }"
                >
                <span class="flex flex-col items-center w-full h-[10vh] bg-black bg-opacity-50 gap-1">
                  <h2 class="text-white text-2xl">{{ item.title }}</h2>
                  <p class="text-white">{{ item.description }}</p>
                </span>
                </div>             
              </div>
            </Slide>
            <template #addons>
              <Pagination/>
            </template>
          </Carousel>
    </section>
    <section class="bg-primary-100 py-12">
      <div class="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="flex flex-col justify-center gap-4">
            <h1 class="text-4xl text-primary-900"> OBJETIVOS DE NUESTRA INSTITUCION </h1>
            <P>El propósito del proceso educativo TEREVIDALISTA es mejorar las habilidades académicas, políticas, científicas, tecnológicas, deportivas, artísticas y culturales de los estudiantes, proyectándolos con entusiasmo hacia el ámbito laboral y empresarial, en un entorno de convivencia saludable y respeto por el medio ambiente. Como institución emprendedora, se busca utilizar la educación como una herramienta para contribuir a la construcción de la sociedad, fomentando que los niños y niñas se conviertan en participantes activos y tecnológicamente proactivos. Los docentes TEREVIDALISTAS están preparados para promover la inclusión y la atención a la diversidad, con un fuerte compromiso docente y responsabilidad social, enfocándose en impulsar la autoformación y el emprendimiento para el mejoramiento continuo de los estudiantes, utilizando recursos que orienten hacia la participación en equipos de trabajo y la formación de redes.</P>
          </div>
          <img class="w-[70vh] rounded-md shadow shadow-primary-700 bg-cover" src=https://i.imgur.com/WD1rkIh.jpeg>
      </div>
    </section>        
          <h1 class="mb-3 text-4xl text-primary-950">Nuestra trayectoria</h1>
          <span class="flex flex-col mb-3">
            <p style="strong" class="text-2xl text-primary-950">¡Somos grandes exponentes a nivel educativo y competitivo estando rankeados en el numero x a nivel nacional!...</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ea placeat iusto reiciendis explicabo illo harum in, iure nulla maiores corrupti porro recusandae. Repudiandae recusandae consequuntur iure quia impedit minima.</p>
            <img class="w-[70vh] rounded-md shadow shadow-primary-700 bg-cover" src=https://i.imgur.com/WD1rkIh.jpeg>
          </span>
          <div class="grid grid-cols-1 lg:grid-cols-3 container gap-x-0">
            <div v-for="item in history" :key="item.title" class="flex flex-col items-center justify-center text-primary-950 py-8 bg-primary-200 lg:w-[62vh] mb-2 shadow shadow-primary-400">
              <i class="material-symbols-outlined mb-2 text-4xl">{{item.icon}}</i>
              <h2 class="text-2xl">{{ item.title }}</h2>
              <p>{{item.description}}</p>
            </div>
          </div>        
          
        </section>
         
 </template>
 

 

 <script>import { Carousel,Slide, Pagination,  Navigation } from 'vue3-carousel'; </script>
  
  
  <style scoped>

 
  /* Estilos específicos para este componente si los necesitas */
  
  /* Estilos para el video */
  .video-container {
    position: relative;
    padding-bottom: 40.25%; /* Proporción 16:9 */
    height: 0;
    overflow: hidden;
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
</style scoped>

 