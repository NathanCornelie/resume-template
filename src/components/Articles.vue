<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import {onMounted, ref} from "vue";


const markdownContent = ref<string | null>("null")
onMounted(()=>{
  fetch('/articles/article_on_plants.md')
      .then(response => response.text())
      .then(data => {
        markdownContent.value = data.toString()
        console.log(data)
      })
      .catch(error => {
        console.error('Erreur lors du chargement du fichier Markdown:', error)
      })
})
</script>

<template>

  <v-card class="text-start pa-5">
    <vue-markdown class="ml-5" :source="markdownContent.valueOf()" />
  </v-card>


</template>

<style scoped>

</style>