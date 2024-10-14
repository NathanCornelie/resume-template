<template>
  <div class="main"><h2>Conferences</h2></div>
  <div class="pa-10 mx-5">
    <v-row dense>
      <v-col v-for="(conference, index) in conferences" :key="index" cols="6">
        <v-card>
          <template v-slot:text>
            <div class="d-flex h-100 justify-space-between">
              <div class="py-7 d-flex flex-column justify-space-between">
                <div>
                  <a :href="conference.link">
                    <h3 class="mb-2">
                      {{ conference.name }}
                    </h3>
                  </a>
                  <p>{{ conference.place }}</p>
                </div>

                <p>{{ conference.date }}</p>
              </div>
              <div>
                <a :href="conference.link">
                  <nuxt-img style="width: 150px" src="conference.png" />
                </a>
              </div>
            </div>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { conferences } from "~/informations";
// const conferences = ref([
//   {
//     name: "Medical Imaging with Deep Learning Conference",
//     place: "Paris, FRANCE",
//     date: "24th December 2023",
//     link: "https://albarqouni.github.io/",
//   },
// ]);
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Kanit, sans-serif;
  background-color: #fff;
}
</style>
