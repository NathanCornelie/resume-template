<template>
  <v-app class="app">
    <v-app-bar :elevation="2" class="nav-bar" height="72">
      <template v-slot:prepend>
        <p class="nav-name text-start">
          <NuxtLink to="/">{{ name }}</NuxtLink>
        </p>
      </template>
      <template v-slot:default class="menus">
        <div v-for="menu in menus" class="menu d-md-block">
          <p>
            <NuxtLink :to="'/' + menu.toLowerCase()">{{
              menu.toString()
            }}</NuxtLink>
          </p>
        </div>
      </template>
      <template v-slot:append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" class="d-md-none" v-bind="props">
              <mdi-icon
                icon="mdiDotsVertical"
                size="1.6rem"
                class="nav-icon"
              ></mdi-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(menu, index) in menus"
              :key="index"
              :value="index"
            >
              <v-list-item-title
                ><NuxtLink :to="'/' + menu.toLowerCase()">{{
                  menu.toString()
                }}</NuxtLink></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>
    <div id="app">
      <NuxtPage />
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const name = ref("Diletta CHIARO");
const menus = ref<string[]>([
  "Experiences",
  "Articles",
  "Conferences",
  "Gallery",
]);
const router = useRouter();
</script>

<style scoped lang="scss">
#app {
  margin: 10px 0;

  padding-top: 4rem;
}
.app {
  width: 100%;
  background-color: #ffffff;
  p {
    font-family: Kanit, sans-serif;
  }
}
.nav-name {
  margin-left: 5px;
}
.nav-bar {
  font-size: 1.25rem;
  font-weight: 600;
}
.menus {
  width: 100%;
  justify-content: space-around;
  p {
    color: #64b5f6;
  }
}
.menu {
  display: none;
  margin: 0 10px;
}
.nav-icon {
  color: black;
}
</style>
