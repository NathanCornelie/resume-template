<template>
  <div class="main px-2 px-sm-6">
    <h2>Gallery</h2>
    <v-row align="center" class="py-5">
      <v-col
        v-for="(img, idx) in gallery.imgSrc"
        :key="idx"
        cols="12"
        md="4"
        sm="12"
      >
        <v-card class="d-flex alignCenter">
          <v-img :src="`./gallery/${img}`" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { gallery } from "~/informations";
</script>

<style scoped lang="scss">
.main {
  min-height: 100vh;
  background-color: #f6fafd;
}
</style>
