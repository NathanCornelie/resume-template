<script setup lang="ts">
import { ref } from "vue";
import { informations, links } from "~/informations";
</script>

<template>
  <div class="pa-md-5 main">
    <v-card
      class="d-lg-flex d-block"
      min-height="500px"
      variant="flat"
      style="width: 80%"
    >
      <div
        class="infos-container d-flex flex-lg-row flex-column align-center justify-space-around pa-2 pa-md-16"
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
            {{ informations.name }}
          </p>
          <p>{{ informations.job }}</p>
          <div class="d-flex my-5">
            <a :href="links.linkedin"
              ><v-img src="/linkedin_logo.png" width="40px" class="mx-2"
            /></a>
            <a :href="links.medium">
              <v-img src="/medium_logo.png" width="40px" class="mx-2" /></a
            ><a :href="links.scholar"
              ><v-img
                src="/google_scholar_logo.png"
                width="40px"
                class="mx-2" /></a
            ><a :href="links.github"
              ><v-img src="/github_logo.png" width="40px" class="mx-2"
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
              {{ informations.about }}
            </p>
            <v-btn base-color=" bg-blue-lighten-2 mt-4">
              <mdi-icon
                icon="mdiTrayArrowDown"
                color="white"
                size="1.2rem"
                class="mr-2"
              ></mdi-icon>
              <span>Download CV</span>
            </v-btn>
            <div
              class="d-flex flex-md-row flex-column mt-4 justify-space-between"
            >
              <v-card class="bg-transparent text-start" :elevation="0">
                <h3>Interest</h3>

                <div>
                  <li v-for="interest in informations.interest">
                    {{ interest }}
                  </li>
                </div>
              </v-card>

              <v-card
                class="bg-transparent text-start mt-4 mt-md-0"
                :elevation="0"
              >
                <h3>Education</h3>
                <v-list class="bg-transparent">
                  <v-list-item
                    v-for="(education, index) in informations.educations"
                    :key="index"
                    class="bg-transparent"
                  >
                    <template v-slot:prepend>
                      <mdi-icon icon="mdiSchool" size="1.6rem"></mdi-icon>
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
            {{ informations.my_researches.content }}
          </p>
          <a href="articles"
            ><v-btn class="bg-blue-lighten-2">
              <span>View Articles</span></v-btn
            ></a
          >
        </div>
        <div
          class="research_right mx-0 ml-lg-10 d-flex justify-start w-66 w-lg-50"
        >
          <v-img
            :src="informations.my_researches.image"
            width="800"
            height="460"
          />
        </div>
      </v-card>
    </section>
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

    @media (max-width: 960px) {
      border: none;
    }
    border: 2px solid #1e375a24;
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
