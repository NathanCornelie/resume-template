<template>
  <div class="main"><h2>Conferences</h2></div>
  <div class="pa-md-10 py-5 mx-10">
    <v-row>
      <v-col
        v-for="(conference, index) in conferences"
        :key="index"
        cols="12"
        md="6"
        sm="6"
      >
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
              <div style="width: 100%">
                <a :href="conference.link">
                  <v-img class="image" :src="conference.image" />
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
.image {
  width: 100%;
  @media (min-width: 960px) {
    width: 150px;
  }
}
</style>
