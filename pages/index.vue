<script setup lang="ts">
import { ref } from "vue";

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
      image: "/pub1.webp",
      title: "An example preprint / working paper",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ]" +
        "ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.",
      date: "Apr 7, 2019",
    },
    {
      image: "/pub2.webp",
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
  <div class="pa-5 main">
    <v-card
      class="d-lg-flex d-block"
      min-height="500px"
      variant="outlined"
      style="border: 2px solid #1e375a24; width: 80%"
    >
      <div
        class="infos-container d-flex flex-lg-row flex-column align-center justify-space-around pa-16"
      >
        <div class="w-50 d-flex flex-column align-center justify-center">
          <v-card
            class="photo"
            max-width="340px"
            max-height="340px"
            variant="flat"
          >
            <v-img
              class="bg-white mb-16"
              src="/profile.jpeg"
              width="380px"
            ></v-img>
          </v-card>
          <p class="font-weight-bold mt-4" style="color: #1e375a">
            {{ info.name }}
          </p>
          <p>{{ info.job }}</p>
          <div class="d-flex my-5">
            <a href="https://www.linkedin.com/in/dilettachiaro/"
              ><nuxt-img src="/linkedin_logo.png" sizes="40px" class="mx-2"
            /></a>
            <a href="https://medium.com/@diletta.chiaro">
              <nuxt-img src="/medium_logo.png" sizes="40px" class="mx-2" /></a
            ><a
              href="https://scholar.google.com/citations?user=n1VGy-gAAAAJ&hl=it"
              ><nuxt-img
                src="/google_scholar_logo.png"
                sizes="40px"
                class="mx-2" /></a
            ><a href="https://github.com/dilettachiaro"
              ><nuxt-img src="/github_logo.png" sizes="40px" class="mx-2"
            /></a>
          </div>
        </div>
        <div class="d-flex flex-column align-center justify-center">
          <v-card
            class="w-lg-75 bg-transparent text-start d-flex flex-column align-center justify-center"
            :elevation="0"
          >
            <h3>About Me</h3>
            <p style="font-size: 16px">
              Chien Shiung Wu is a professor of artificial intelligence at the
              Stanford AI Lab. Her research interests include distributed
              robotics, mobile computing and programmable matter.<br />
              She leads the Robotic Neurobiology group, which develops
              self-reconfiguring robots, systems of self-organizing robots, and
              mobile sensor networks.
            </p>
            <v-btn base-color=" bg-blue-lighten-2 mt-4">
              <mdicon name="tray-arrow-down"></mdicon>
              <span>Download CV</span>
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
      </div>
    </v-card>
    <section class="d-flex justify-center my-10 py-10 align-center">
      <v-card
        variant="flat"
        class="research_card d-flex flex-column flex-lg-row flex-column flex-lg-row justify-center align-center"
      >
        <div class="research_left w-lg-50 w-66">
          <h2>My Researches</h2>
          <p>
            Use this area to speak to your mission. I’m a research scientist in
            the Moonshot team at DeepMind. I blog about machine learning, deep
            learning, and moonshots.<br />
            <br />
            I apply a range of qualitative and quantitative methods to
            comprehensively investigate the role of science and technology in
            the economy. Please reach out to collaborate 😃
          </p>
          <v-btn class="bg-blue-lighten-2"> <span>View Articles</span></v-btn>
        </div>
        <div
          class="research_right mx-0 ml-lg-10 d-flex justify-start w-66 w-lg-50"
        >
          <nuxt-img src="/research.webp" width="800" height="460" />
        </div>
      </v-card>
    </section>

    <!-- <section>
      <v-card>
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
                  <p class="pub-description text-grey-darken-2">
                    {{ pub.description }}
                  </p>
                  <p>{{ pub.date }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </section> -->
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .infos-container {
    color: rgba(30, 55, 90, 0.7);

    h3 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #1e375a;
      font-weight: bolder;
    }
  }

  .research_card {
    font-family: "Kanit", sans-serif;
    width: 80%;
    .research_left {
      padding: 20px 0;

      h2 {
        font-weight: 500;
        font-size: 32px;
        margin-bottom: 20px;
      }
      p {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        margin-bottom: 30px;
      }
      // button {
      //   font-family: "Kanit", sans-serif;
      // }
    }
    .research_right {
      border-radius: 10px;
      overflow: hidden;
      max-width: 500px;
    }
  }

  .pub {
    &:hover {
      cursor: pointer;
    }
    .pub-title:hover {
      color: #2e7d32;
    }

    .pub-description {
      font-size: 14px;
    }
  }

  .photo {
    // border: 3px solid black;
    // border-radius: 100%;
  }
  button {
    font-family: "Kanit", sans-serif;
    span {
      color: white;
      font-weight: 700;
    }
  }
}
</style>
