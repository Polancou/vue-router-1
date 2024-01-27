<script setup lang="ts">
import axios from "axios";
import {ref} from "vue";

const pokemons = ref([])
const getData = async () => {
  try {
    const data = axios.get('https://pokeapi.co/api/v2/pokemon')
    console.log(data)
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <h1>Pokemons</h1>
</template>

<style scoped>

</style>