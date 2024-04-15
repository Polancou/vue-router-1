<script setup lang="ts">
import type {Pokemon} from "@/interface/Pokemon";
import {useGetData} from "@/composables/getData";
import type {PokemonList} from "@/interface/PokemonList";

const {data, getData, loading} = useGetData()

getData('https://pokeapi.co/api/v2/pokemon')
const pokemons = data as unknown as PokemonList;

</script>

<template>
  <h1>Pokemons</h1>
  <p v-if="loading">Cargando...</p>
  <ul v-else>
    <li v-for="poke in pokemons.results">
      <router-link :to="{ name: 'poke', params: { name: poke.name }}">{{poke.name}}</router-link>
    </li>
  </ul>
</template>

<style scoped>

</style>