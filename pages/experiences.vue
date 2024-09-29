<template>
  <div class="main py-10">
    <v-expansion-panels class="mx-5 w-auto" multiple>
      <v-expansion-panel style="background-color: #f6fafd">
        <v-expansion-panel-title class="bg-white"
          ><div>
            <p>Working Experience</p>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text
          ><v-timeline direction="vertical" class="px-15" side="end">
            <v-timeline-item
              v-for="exp in experiences"
              style="width: 100%; background-color: red"
              dot-color="#64B5F6"
            >
              <template v-slot:opposite>
                <div class="d-flex flex-column align-center">
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
                <template v-slot:text>
                  <div class="d-md-flex md-flex-column align-center">
                    <div class="d-flex align-center justify-center">
                      <nuxt-img style="width: 300px" src="/claim_logo.png">
                      </nuxt-img>
                    </div>

                    <v-list class="bg-transparent">
                      <v-list-item v-for="mission in exp.missions">
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

      <v-expansion-panel style="background-color: #f6fafd">
        <v-expansion-panel-title class="bg-white"
          ><div>
            <p>Education</p>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text
          ><v-timeline direction="vertical" class="px-15" side="end">
            <v-timeline-item
              v-for="exp in experiences"
              style="width: 100%; background-color: red"
              dot-color="#64B5F6"
            >
              <template v-slot:opposite>
                <div class="d-flex flex-column align-center">
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
                <template v-slot:text>
                  <div class="d-md-flex md-flex-column align-center">
                    <div class="d-flex align-center justify-center">
                      <nuxt-img style="width: 300px" src="/claim_logo.png">
                      </nuxt-img>
                    </div>

                    <v-list class="bg-transparent">
                      <v-list-item v-for="mission in exp.missions">
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

      <v-expansion-panel style="background-color: #f6fafd">
        <v-expansion-panel-title class="bg-white"
          ><div>
            <p>Awards</p>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text
          ><v-timeline direction="vertical" class="px-15" side="end">
            <v-timeline-item
              v-for="exp in experiences"
              style="width: 100%; background-color: red"
              dot-color="#64B5F6"
            >
              <template v-slot:opposite>
                <div class="d-flex flex-column align-center">
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
                <template v-slot:text>
                  <div class="d-md-flex md-flex-column align-center">
                    <div class="d-flex align-center justify-center">
                      <nuxt-img style="width: 300px" src="/claim_logo.png">
                      </nuxt-img>
                    </div>

                    <v-list class="bg-transparent">
                      <v-list-item v-for="mission in exp.missions">
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
    </v-expansion-panels>
  </div>
</template>

<script lang="ts" setup>
const experiences = ref([
  {
    titre: "Stage Ingénieur DevOps Cloud",
    lieu: "Excellium Services Luxembourg",
    debut: "Mars 2024",
    fin: "Août 2024",
    missions: [
      {
        titre: "Réalisation de scripts d’automatisation avec Ansible",
        taches: [
          "configuration d’instances VPN clients et serveurs",
          "Ajout de règles de firewall",
        ],
      },
      {
        titre:
          "Développement d\’une application fullStack avec ReactJS en TypeScript et NodeJS",
        taches: [],
      },
      {
        titre:
          "Réalisation de pipelines AzureDevOps pour la sécurisation d’image Docker",
        taches: [],
      },
      {
        titre:
          "Développement d’outils en Python pour relever les erreurs présentes dans les fichier de configuration d’un firewall et générer des rapports.",
        taches: [],
      },
    ],
  },
  {
    titre: "Stage Ingénieur DevOps Cloud",
    lieu: "Excellium Services Luxembourg",
    debut: "Mars 2024",
    fin: "Août 2024",
    missions: [
      {
        titre: "Réalisation de scripts d’automatisation avec Ansible",
        taches: [
          "configuration d’instances VPN clients et serveurs",
          "Ajout de règles de firewall",
        ],
      },
      {
        titre:
          "Développement d\’une application fullStack avec ReactJS en TypeScript et NodeJS",
        taches: [],
      },
      {
        titre:
          "Réalisation de pipelines AzureDevOps pour la sécurisation d’image Docker",
        taches: [],
      },
      {
        titre:
          "Développement d’outils en Python pour relever les erreurs présentes dans les fichier de configuration d’un firewall et générer des rapports.",
        taches: [],
      },
    ],
  },
  {
    titre: "Stage Développeur",
    lieu: "BIAC Log SA Luxembourg",
    debut: "Juin 2023",
    fin: "Août 2023",
    missions: [
      {
        titre:
          "Développement de pages pour d’une application sur mesure de gestion pour une société luxembourgeoise en VueJS et Typescript",
        taches: [],
      },
      {
        titre:
          "Amélioration d’une API pour répondre aux besoins des pages avec le Framework .NET en C#",
        taches: [],
      },
    ],
  },
]);
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  min-height: calc(100vh - 4rem);
  background-color: #f6fafd;
}
.expCard {
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  border: 2px solid white;
}
</style>
