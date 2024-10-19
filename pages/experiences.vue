<template>
  <div class="main py-10">
    <!-- <v-expansion-panels class="mx-5 w-auto" multiple>
      <v-expansion-panel
        style="background-color: #f6fafd"
        v-if="experiences.length"
      >
        <v-expansion-panel-title class="bg-white"
          >
        </v-expansion-panel-title>
        <v-expansion-panel-text
          >
        </v-expansion-panel-text>
      </v-expansion-panel> -->
    <div>
      <h2>Working Experience</h2>
    </div>
    <v-timeline
      direction="vertical"
      class="px-3 px-md-15 py-5"
      side="end"
      density="comfortable"
    >
      <v-timeline-item
        v-if="display"
        v-for="exp in experiences"
        style="width: 100%; background-color: red"
        dot-color="#64B5F6"
      >
        <template v-slot:opposite>
          <div class="d-flex flex-column align-center" v-if="!isMedium">
            <p>{{ exp.debut }}</p>
            <p>-</p>
            <p>{{ exp.fin }}</p>
          </div>
        </template>

        <v-card
          variant="elevated"
          class="expCard"
          elevation="3"
          :title="exp.titre"
          :subtitle="exp.lieu"
        >
          <template v-slot:subtitle>
            <p>{{ exp.lieu }}</p>
            <p v-if="isMedium">{{ exp.debut }} -{{ exp.fin }}</p>
          </template>
          <template v-slot:text>
            <div class="d-md-flex md-flex-column align-center">
              <div class="d-flex align-center justify-center">
                <v-img style="max-width: 300px" class="image" :src="exp.image">
                </v-img>
              </div>

              <v-list class="bg-transparent">
                <v-list-item v-for="mission in exp.missions">
                  <div class="d-flex flex-column align-start justify-start">
                    <h4>{{ mission.titre }}</h4>
                    <div class="pl-2">
                      <div v-for="tache in mission.taches">
                        {{ tache }}
                      </div>
                    </div>
                  </div>
                </v-list-item>
              </v-list>
            </div>
          </template>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <!-- <v-expansion-panel
        style="background-color: #f6fafd"
        v-if="educations.length"
      >
        <v-expansion-panel-title class="bg-white"
          ><div>
            <p>Educations</p>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text
          ><v-timeline direction="vertical" class="px-15" side="end">
            <v-timeline-item
              v-for="edu in educations"
              style="width: 100%; background-color: red"
              dot-color="#64B5F6"
            >
              <template v-slot:opposite>
                <div class="d-flex flex-column align-center">
                  <p>{{ edu.debut }}</p>
                  <p>-</p>
                  <p>{{ edu.fin }}</p>
                </div>
              </template>

              <v-card
                variant="elevated"
                class="expCard"
                elevation="3"
                :title="edu.titre"
                :subtitle="edu.lieu"
              >
                <template v-slot:text>
                  <div class="d-md-flex md-flex-column align-center">
                    <div class="d-flex align-center justify-center">
                      <v-img style="width: 300px" :src="edu.image"> </v-img>
                    </div>

                    <v-list class="bg-transparent">
                      <v-list-item v-for="mission in edu.missions">
                        <div
                          class="d-flex flex-column align-start justify-start"
                        >
                          <h4>{{ mission.titre }}</h4>
                          <div class="pl-2">
                            <div v-for="tache in mission.taches">
                              {{ tache }}
                            </div>
                          </div>
                        </div>
                      </v-list-item>
                    </v-list>
                  </div>
                </template>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel style="background-color: #f6fafd" v-if="awards.length">
        <v-expansion-panel-title class="bg-white"
          ><div>
            <p>Awards</p>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text
          ><v-timeline direction="vertical" class="px-15" side="end">
            <v-timeline-item
              v-for="awd in awards"
              style="width: 100%; background-color: red"
              dot-color="#64B5F6"
            >
              <template v-slot:opposite>
                <div class="d-flex flex-column align-center">
                  <p>{{ awd.debut }}</p>
                  <p v-if="awd.fin">-</p>
                  <p v-if="awd.fin">{{ awd.fin }}</p>
                </div>
              </template>

              <v-card
                variant="elevated"
                class="expCard"
                elevation="3"
                :title="awd.titre"
                :subtitle="awd.lieu"
              >
                <template v-slot:text>
                  <div class="d-md-flex md-flex-column align-center">
                    <div class="d-flex align-center justify-center">
                      <v-img style="width: 300px" :src="awd.image"> </v-img>
                    </div>

                    <v-list class="bg-transparent">
                      <v-list-item v-for="mission in awd.missions">
                        <div
                          class="d-flex flex-column align-start justify-start"
                        >
                          <h4>{{ mission.titre }}</h4>
                          <div class="pl-2">
                            <div v-for="tache in mission.taches">
                              {{ tache }}
                            </div>
                          </div>
                        </div>
                      </v-list-item>
                    </v-list>
                  </div>
                </template>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-expansion-panel-text>
      </v-expansion-panel> -->
    <!-- </v-expansion-panels> -->
  </div>
</template>

<script lang="ts" setup>
import { experiences } from "~/informations";
import { awards } from "~/informations";
import { educations } from "~/informations";
const isMedium = ref(false);
const display = ref(false);
onMounted(() => {
  onResize();
  display.value = true;
  nextTick(() => {
    window.addEventListener("resize", onResize);
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
const onResize = () => {
  console.log(window.innerWidth);
  isMedium.value = window.innerWidth < 960;
};
</script>

<style scoped lang="scss">
.main {
  .v-timeline--vertical.v-timeline.v-timeline--side-end
    .v-timeline-item
    .v-timeline-item__opposite {
    margin-top: 30px;
  }
  width: 100%;
  min-height: calc(100vh - 4rem);
  background-color: #f6fafd;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.expCard {
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  border: 2px solid white;
  .image {
    width: 100%;
    @media (min-width: 960px) {
      width: 300px;
    }
  }
}
</style>
