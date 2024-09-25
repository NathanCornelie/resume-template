<template>
  <div>
    <h2>Articles</h2>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-sheet class="ma-2 pa-2 bg-transparent">
            One of three columns
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss"></style>
