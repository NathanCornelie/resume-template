<template>
  <v-app class="app">
    <v-app-bar :elevation="2" class="nav-bar" height="72">
      <template v-slot:prepend>
        <p class="nav-name text-start">
          <NuxtLink to="/">{{ name }}</NuxtLink>
        </p>
      </template>
      <template v-slot:default class="menus">
        <div v-for="menu in menus" class="menu">
          <p>
            <NuxtLink :to="'/' + menu.toLowerCase()">{{
              menu.toString()
            }}</NuxtLink>
          </p>
        </div>
      </template>
      <template v-slot:append>
        <v-btn color="primary">
          <mdicon
            name="magnify"
            class="nav-icon"
            style="margin-right: 5px"
          ></mdicon>
          <mdicon name="white-balance-sunny" class="nav-icon"></mdicon>
        </v-btn>
      </template>
    </v-app-bar>
    <div id="app">
      <NuxtPage />
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const name = ref("Nathan CORNELIE");
const menus = ref<string[]>(["Experiences", "Articles", "Projects"]);
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
  margin: 0 10px;
}
.nav-icon {
  color: black;
}
</style>
