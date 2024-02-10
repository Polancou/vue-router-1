<script setup lang="ts">
import {useRoute} from "vue-router";
import axios from "axios";
import type {Pokemon} from "@/interface/Pokemon";
import {ref} from "vue";
import router from "@/router";
const route = useRoute();

const pokeName = route.params.name;

const PokeData = ref<Pokemon>()

const backButton = () => {
  router.back()
}

const getData = async () => {
  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    PokeData.value = data
    console.log(PokeData.value)
  } catch (e) {

  }
}

getData()
</script>

<template>
  <img :src="PokeData?.sprites.front_default" alt="">
  <h1>Poke name: {{ pokeName }}</h1>
  <button @click="backButton">Regresar</button>
</template>

<style scoped>

</style>