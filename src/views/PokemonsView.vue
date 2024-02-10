<script setup lang="ts">
import axios from "axios";
import {ref} from "vue";
import type {Pokemon} from "@/interface/Pokemon";

const pokemons = ref<Array<Pokemon>>()
const getData = async () => {
  try {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
    pokemons.value = data.results
    console.log(pokemons.value)
  } catch (e) {
    console.error(e)
  }
}

getData()
</script>

<template>
  <h1>Pokemons</h1>
  <ul>
    <li v-for="poke in pokemons">
      <router-link :to="{ name: 'poke', params: { name: poke.name }}">{{poke.name}}</router-link>
    </li>
  </ul>
</template>

<style scoped>

</style>