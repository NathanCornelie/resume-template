<template>
  <div class="main">
    <h2>Articles</h2>
    <v-container>
      <v-row>
        <v-col
          v-for="(article, index) in articles"
          :key="index"
          cols="12"
          md="4"
          sm="6"
        >
          <v-card :elevation="3" class="card">
            <template v-slot:text style="height: 100%">
              <div
                class="content pa-5 d-flex flex-column justify-space-between"
              >
                <h2>
                  <a :href="article.lien">{{ article.titre }}</a>
                </h2>
                <p>{{ article.description }}</p>
                <p style="color: gray; font-size: 16px">
                  {{ article.date }}
                </p>
              </div>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const articles = ref([
  {
    titre:
      "L’Intelligenza Artificiale Rivoluziona l’Onboarding dei Dipendenti: Automazione, Personalizzazione e Produttività",
    description:
      "L’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettono",
    date: "12th March 2024",
    lien: "https://www.claim-project.it/lintelligenza-artificiale-rivoluziona-lonboarding-dei-dipendenti-automazione-personalizzazione-e-produttivita/",
  },
  {
    titre:
      "L’Intelligenza Artificiale Rivoluziona l’Onboarding dei Dipendenti: Automazione, Personalizzazione e Produttività",
    description:
      "L’uso dell’intelligenza artificiale nell’onboarding dei dipendenti sta rapidamente trasformando il modo in cui le aziende accolgono e integrano i nuovi assunti. Le tecnologie AI non solo automatizzano processi ripetitivi, ma permettono",
    date: "12th March 2024",
    lien: "https://www.claim-project.it/lintelligenza-artificiale-rivoluziona-lonboarding-dei-dipendenti-automazione-personalizzazione-e-produttivita/",
  },
  {
    titre:
      "L’Intelligenza Artificiale Rivoluziona l’Onboarding dei Dipendenti: Automazione, Personalizzazione e Produttività",
    description:
      "L’uso dell’intelligenza artificiale nell’onboarding dei dipendenti sta rapidamente trasformando il modo in cui le aziende accolgono e integrano i nuoviL’uso dell’intelligenza artificiale nell’onboarding dei dipendenti sta rapidamente trasformando il modo in cui le aziende accolgono e integrano i nuovi assunti. Le tecnologie AI non solo automatizzano processi ripetitivi, ma permettono",
    date: "12th March 2024",
    lien: "https://www.claim-project.it/lintelligenza-artificiale-rivoluziona-lonboarding-dei-dipendenti-automazione-personalizzazione-e-produttivita/",
  },
  {
    titre:
      "L’Intelligenza Artificiale Rivoluziona l’Onboarding dei Dipendenti: Automazione, Personalizzazione e Produttività",
    description:
      "L’uso dell’intelligenza artificiale nell’onboarding dei dipendenti sta rapidamente trasformando il modo in cui le aziende accolgono e integrano i nuovi assunti. Le tecnologie AI non solo automatizzano processi ripetitivi, ma permettono",
    date: "12th March 2024",
    lien: "https://www.claim-project.it/lintelligenza-artificiale-rivoluziona-lonboarding-dei-dipendenti-automazione-personalizzazione-e-produttivita/",
  },
  {
    titre:
      "L’Intelligenza Artificiale Rivoluziona l’Onboarding dei Dipendenti: Automazione, Personalizzazione e Produttività",
    description:
      "L’uso dell’intelligenza artificiale nell’onboarding dei dipendenti sta rapidamente trasformando il modo in cui le aziende accolgono e integrano i nuovi assunti. Le tecnologie AI non solo automatizzano processi ripetitivi, ma permettono",
    date: "12th March 2024",
    lien: "https://www.claim-project.it/lintelligenza-artificiale-rivoluziona-lonboarding-dei-dipendenti-automazione-personalizzazione-e-produttivita/",
  },
]);
</script>

<style scoped lang="scss">
.main {
  min-height: 100vh;
  background-color: #f6fafd;
  & > h2 {
    font-size: 26px;
    text-align: center;
    font-family: Kanit, sans-serif;
    color: #1e375a;
    text-decoration: underline;
  }
  .card {
    background-color: #ffffff;
    border: 2px solid white;
    height: 100%;

    .content {
      height: 100%;
      h2 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
      }

      p {
        margin-top: 15px;
        max-height: 120px;
        white-space: normal; /* Empêcher le retour à la ligne */
        overflow: hidden; /* Cacher le texte qui dépasse */
        display: -webkit-box;
        line-clamp: none;
        -webkit-line-clamp: 6; /* Nombre maximal de lignes avant de couper */
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
