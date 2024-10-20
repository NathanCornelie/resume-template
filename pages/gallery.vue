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
          <v-img :src="`./gallery/${img}`" @Click="openDialog(idx)" />
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog">
      <v-card style="height: 75dvh">
        <v-card-text class="d-flex align-center justify-center">
          <v-row
            ><v-col cols="12">
              <v-img
                class="image"
                :src="`./gallery/${gallery.imgSrc[selectedImage]}`"
              >
              </v-img> </v-col
          ></v-row>
        </v-card-text>

        <v-card-actions>
          <div class="d-flex align-center justify-center w-100">
            <v-btn @click="changeImg(-1)"
              ><mdi-icon size="20px" icon="mdiArrowLeft"
            /></v-btn>
            <v-btn @click="changeImg(1)"
              ><mdi-icon size="20px" icon="mdiArrowRight"
            /></v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { gallery } from "~/informations";
const dialog = ref(false);
const selectedImage = ref(0);
const openDialog = (idx: number) => {
  selectedImage.value = idx;
  dialog.value = true;
};
const changeImg = (sens: number) => {
  if (sens) {
    if (selectedImage.value < gallery.imgSrc.length - 1)
      selectedImage.value += 1;
    else selectedImage.value = 0;
  } else {
    if (selectedImage.value > 0) selectedImage.value -= 1;
    else selectedImage.value = gallery.imgSrc.length - 1;
  }
};
</script>

<style scoped lang="scss">
.main {
  min-height: 100vh;
  background-color: #f6fafd;
}
.image {
  max-height: calc(75dvh - 100px);
}
</style>
