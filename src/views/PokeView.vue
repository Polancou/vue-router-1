<script setup lang="ts">
import {useRoute} from "vue-router";
import type {Pokemon} from "@/interface/Pokemon";
import router from "@/router";
import {useGetData} from "@/composables/getData";
const route = useRoute();

const pokeName = route.params.name;

const {data, getData, loading, error} = useGetData()

const backButton = () => {
  router.back()
}

getData(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

const PokeData = data as unknown as Pokemon||null

</script>

<template>
  <p v-if="loading">Cargando...</p>
  <div v-else>
    <div class="alert alert-danger mt-2" v-if="error">No existe el pokemon</div>
    <div v-if="PokeData != null">
      <img :src="PokeData?.sprites.front_default" alt="">
      <h1>Poke name: {{ pokeName }}</h1>
    </div>
  </div>
  <button class="btn btn-outline-primary" @click="backButton">Regresar</button>
</template>

<style scoped>

</style>