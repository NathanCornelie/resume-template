<script setup lang="ts">

import { ref } from "vue";
import { props } from "mdi-vue/types/src/props";

const info = ref({
  name: "Nathan CORNELIE",
  job: "AI Reseacher",
  about:
    "Chien Shiung Wu is a professor of artificial " +
    "intelligence at the Stanford AI Lab. Her research interests includ" +
    "e distributed robotics, mobile computing and programmable matter. She leads the Robotic N" +
    "eurobiology group, which develops self-reconfiguring robots, systems of self-organizing robots, and" +
    " mobile sensor networks.",
  interest: [
    "Artificial Intelligence",
    "Computational Linguistics",
    "Information Retrieval",
  ],
  educations: [
    { title: "PhD Artificial Intelligence", school: "Stanford University" },
    {
      title: "MEng Artificial Intelligence",
      school: "Massachusetts Institute of Technology",
    },
    {
      title: "BSc Artificial Intelligence",
      school: "Massachusetts Institute of Technology",
    },
  ],
  publications: [
    {
      image: "/public/pub1.webp",
      title: "An example preprint / working paper",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ]" +
        "ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.",
      date: "Apr 7, 2019",
    },
    {
      image: "/public/pub2.webp",
      title: "An example preprint / working paper",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ]" +
        "ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.",
      date: "Apr 7, 2019",
    },
  ],
});
</script>

<template>
  <v-card
    class="infos-container d-lg-flex d-block bg-teal-darken-4"
    min-height="500px"
  >
    <div>
      <v-card
        class="bg-transparent d-flex flex-column justify-center align-center"
        :elevation="0"
      >
        <v-card class="photo" max-width="180px" max-height="180px">
          <v-img class="bg-white mb-16" src="/profile.jpeg" width="180px"></v-img>
        </v-card>
        <p class="font-weight-bold">{{ info.name }}</p>
        <p>{{ info.job }}</p>
      </v-card>
    </div>
    <div class="w-lg-66">
      <v-card
        class="bg-transparent text-start text-grey-lighten-2"
        :elevation="0"
      >
        <h2>About Me</h2>
        <p style="font-size: 16px">
          Chien Shiung Wu is a professor of artificial intelligence at the
          Stanford AI Lab. Her research interests include distributed robotics,
          mobile computing and programmable matter. She leads the Robotic
          Neurobiology group, which develops self-reconfiguring robots, systems
          of self-organizing robots, and mobile sensor networks.
        </p>
        <v-btn base-color=" bg-grey-darken-2 mt-4">
          <mdicon name="tray-arrow-down"></mdicon>
          <p class="text-capitalize ml-2">Dowload CV</p>
        </v-btn>
        <div class="d-flex mt-4 justify-space-between">
          <v-card class="bg-transparent text-start" :elevation="0">
            <h3>Interest</h3>
            <div>
              <li v-for="interest in info.interest">{{ interest }}</li>
            </div>
          </v-card>

          <v-card class="bg-transparent text-start" :elevation="0">
            <h3>Education</h3>
            <v-list class="bg-transparent">
              <v-list-item
                v-for="(education, index) in info.educations"
                :key="index"
                class="bg-transparent"
              >
                <template v-slot:prepend>
                  <mdicon name="school-outline"></mdicon>
                </template>
                <v-list-item-title class="ml-1">{{
                  education.title
                }}</v-list-item-title>
                <v-list-item-subtitle class="ml-2">{{
                  education.school
                }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </div>
      </v-card>
    </div>
  </v-card>
  <section class="d-md-flex justify-center my-5 align-center">
    <v-card class="w-md-66">
      <h2>&#128218; My Research</h2>
      <v-card-text>
        Use this area to speak to your mission. I’m a research scientist in the
        Moonshot team at DeepMind. I blog about machine learning, deep learning,
        and moonshots. I apply a range of qualitative and quantitative methods
        to comprehensively investigate the role of science and technology in the
        economy. Please reach out to collaborate 😃
      </v-card-text>
    </v-card>
  </section>

  <section>
    <v-card >
      <h2>Featured Publications</h2>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="(pub, index) in info.publications"
            :key="index"
            cols="6"
          >
            <v-card class="text-start mx-5 pub">
              <v-img :src="pub.image"></v-img>
              <v-card-text>
                <h3 class="pub-title">{{ pub.title }}</h3>
                <p class="pub-description text-grey-darken-2 ">{{ pub.description }}</p>
                <p>{{ pub.date }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<style scoped lang="scss">
.infos-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 60px;

  padding: 0 90px;
  width: 100%;
}
.pub{
  &:hover{
    cursor: pointer;
  }
  .pub-title:hover{
      color: #2E7D32;
    }

  .pub-description {
    font-size: 14px;
  }
}

.photo {
  border: 3px solid black;
  border-radius: 100%;
}
</style>
