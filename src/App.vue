<template>
  <navbar></navbar>
  <main class="pt-20 min-h-[80vh]">    
    <offerAdd></offerAdd>
    <RouterView></RouterView>
  </main>
  <defaultFooter></defaultFooter>
</template>

<script setup>
import { useRouter } from 'vue-router'
import navbar from './components/NavBar.vue'
import defaultFooter from './components/Footer.vue'
import offerAdd from './components/OfferAdd.vue'

</script>
