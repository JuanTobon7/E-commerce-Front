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

    <section class="py-8  bg-gradient-to-r from-second-400 to-second-500">
      <div class="container grid grid-cols-1 lg:grid-cols-2 gap-3">      
        <div class="flex items-center justify-center px-3">          
          <h2 class="text-5xl lg:text-6xl text-second-50"><strong>¡VEN Y PRE-INSCRIBETE!</strong></h2>
        </div>
        <div class="flex flex-col justify-center items-center text-1xl">
          <p class="text-white">Rompiendo paradigmas sobre “educación de alta calidad solo para la alta sociedad”;  <strong>TEREVIDAL</strong> promueve la educación pre-escolar y básica primaria desde la formación del ser y su comportamiento armónico entre pares</p>
          <button class="bg-second-50 text-second-950 rounded-md p-2 hover:text-second-800">
                    <p>Ver mas</p>
          </button>
        </div>
      </div>
    </section>

    <section class="py-10 bg-primary-50">
      <div class="container">        
        <div class="text-primary-900 flex flex-col gap-2 items-center justify-center">
          <h2 class="title">Ofrecemos programas especiales</h2>
          <p><strong>TERESITA VIDAL</strong> promueve el modelo educativo STEAM el cual es un enfoque integrador que fomenta el interés de los estudiantes en ciencia, tecnología, ingeniería, artes y matemáticas a medida que desarrolla una variedad de habilidades importantes. La naturaleza multidisciplinaria de STEAM aborda los Estándares ISTE que reinventa el aprendizaje.  Por lo tanto, la inclusión de programación, pensamiento computacional y robótica es esencial para dotar a los estudiantes de competencias fundamentales para el futuro, reforzando nuestro compromiso con una educación que prepara a los jóvenes para enfrentar los desafíos del siglo XXI, promoviendo la innovación, el trabajo en equipo y la resolución creativa de problemas.</p>
        </div>
        <div class="ctn-cards">
          <div class="card" v-for="programInfo in programs" :key="programInfo"  :style="{ backgroundImage: 'url(' + programInfo.url + ')' }">
            <div class="bg-black bg-opacity-45 flex flex-col items-center justify-center gap-1 w-full p-2">
              <div class="text-white flex flex-grow items-center gap-8">            
                <i class="text-3xl material-symbols-outlined">{{programInfo.icon}}</i>
                <h2 class="text-2xl">{{programInfo.title}}</h2>
              </div>
              <p class="text-xl text-white">{{ programInfo.description }}</p>
            </div>
          </div>     
        </div>      
      </div>
    </section>

    <section class="py-12 bg-second-200">
      <div class="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="flex flex-col justify-center gap-4">
            <h2 class="title text-second-950"> NUESTRA VISION </h2>
            <P>El Colegio Pedagógico Teresita Vidal implementa el modelo pedagógico ecléctico con enfoque lúdico, donde el centro es el niño y desde allí aplicamos diferentes estrategias que estimulen el amor, la pasión, el arte y la energía positiva, y así despertar la alegría de descubrir y aprender por medio de la experiencia. Toda nuestra tarea educativa está orientada al desarrollo pleno de la personalidad del individuo, sin más limitaciones que las que le imponen los derechos de los demás y el orden jurídico, intelectual, moral, espiritual, social, afectivo, ético, cívico, y demás valores humanos.</P>
            <span class="flex justify-center">
              <button class="bg-second-50 text-second-950 rounded-md p-2 hover:text-second-800">
                <p>Ver mas</p>
              </button>
            </span>
          </div>
          <img class="w-[70vh] rounded-md shadow shadow-second-400 bg-cover" src="https://i.imgur.com/MMOODSF.jpeg"/>
      </div>
    </section>

    <section class="py-10 bg-primary-50">
      <div class="container">
        <div class="flex flex-col items-center gap-2">          
          <h1 class="title text-primary-950">Nuestra trayectoria</h1>
          <span class="flex flex-col gap-1 mb-3">
            <p class="text-2xl text-primary-900"><strong>¡Somos grandes exponentes a nivel educativo y competitivo estando rankeados en el numero x a nivel nacional!...</strong></p>
            <p class="text-primary-950">De esta manera, el proceso formativo <strong>TEREVIDALISTA</strong> tiene como objetivo proyectar y mejorar las habilidades académicas, políticas, científicas, tecnológicas, deportivas, artísticas y culturales de los estudiantes; proyectándolos con pasión por nuestra cultura llanera al campo laboral y empresarial, enmarcado en un ambiente de sana convivencia y amor por el medio ambiente.  </p>
          </span>
          <div class="grid grid-cols-1 lg:grid-cols-3 container gap-x-4">
            <div v-for="item in history" :key="item.title" class="flex flex-col px-2 items-center text-center justify-center text-primary-950 py-8 bg-primary-200 lg:max-w-[62vh] mb-3 shadow shadow-primary-400 rounded-md">
              <i class="material-symbols-outlined mb-2 text-5xl">{{item.icon}}</i>
              <h2 class="text-2xl">¡{{ item.title }}!</h2>
              <p class="text-md">{{item.description}}</p>
            </div>
          </div>          
        </div>        
      </div>
    </section>
   
  </template>
  
<script>
  import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
  
  export default {
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation
    },
    data() {
      return {
        isSmallScreen: false,
        gallery: [
          {
            url: 'https://i.imgur.com/tOu2fKd.jpeg',
            title: 'ENFOQUE EDUCATIVO',
            description: 'En Teresita Vidal, aplicamos STEAM para aprender activamente en ciencia, tecnología, ingeniería, artes y matemáticas, promoviendo interés y habilidades.'
          },
          {
            url: 'https://i.imgur.com/5BgDRj2.jpeg',
            title: 'NUESTROS VALORES',
            description: 'Queremos iniciar un proyecto que brinde a los niños un ambiente amoroso y lúdico, con docentes que los guíen en su desarrollo cognitivo y psicomotriz.'
          },
          {
            url: 'https://i.imgur.com/hSBCEiW.jpeg',
            title: 'AMBIENTAL',
            description: 'En Teresita Vidal, incorporamos el cuidado ambiental en el currículo con eco-ladrillos, recolección de tapas, manejo de pilas y reutilización de aceite en el proyecto Gircol.'
          }
        ],
        programs: [
          {
            title: 'Robotica',
            description: 'Formamos futuros creadores de robots, potenciando pensamiento computacional y programación',
            url: "https://i.imgur.com/LqaFJKT.jpeg",
            icon: 'smart_toy'      
          },
          {
            title: 'Pensamiento Computacional',
            description: 'Preparamos a su hijo para el futuro, enseñándole a resolver problemas complejos con lógica y creatividad.',
            url: 'https://i.imgur.com/EKW2qzq.jpeg',
            icon: 'psychology'
          },
          {
            title: 'Promgramacion',
            description: 'Hacemos de la programacion un proceso divertido donde su hijo adquiere habilidades clave para el futuro.',
            url: 'https://i.imgur.com/oNTkvLR.jpeg',
            icon: 'developer_mode_tv'
          }
        ],
        history: [
          {
            title: 'Musica',
            description: 'Creemos que la musica es un lenguaje que armoniza la educación y la creatividad',
            icon: 'chess'
          },
          {
            title: 'Literatura',
            description: 'Guiamos a los estudiantes en la exploración de mundos imaginarios y potenciando su expresión creativa',
            icon: 'import_contacts'
          },
          {
            title: 'Matematicas',
            description: 'Con nosotros, las matemáticas son descubrimiento, y potenciación de habilidades analíticas para el éxito académico.',
            icon: 'function'
          },
          {
            title: 'Habilidades Blandas',
            description: 'Cultivamos la empatía, la comunicación efectiva y el liderazgo para que los estudiantes destaquen en cualquier entorno.',
            icon: 'person_raised_hand'
          },
          {
            title: 'Bilinguismo',
            description: 'El bilingüismo enriquece la experiencia educativa siendo la llave a la comunicacion social y global.',  
            icon: 'translate'
          },
          {
            title: 'Pensamiento critico',
            description: 'Capacitamos a estudiantes para usar habilidades del pensamiento del orden superior a problemas abiertos.',
            icon: 'mindfulness'
          }
        ]
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
  