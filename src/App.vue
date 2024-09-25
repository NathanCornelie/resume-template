<script setup lang="ts">
import { ref } from "vue";
const router = useRouter();
const name = ref("Nathan CORNELIE");
const menus = ref<string[]>(["bio", "articles", "experiences", "projects"]);
</script>

<template>
  <v-app class="bg-transparent">
    <v-app-bar :elevation="2" class="nav-bar" height="72">
      <template v-slot:prepend>
        <p class="nav-name text-start">{{ name }}</p>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <template v-slot:default class="menus">
        <div v-for="menu in menus" class="menu">
          <p @click="router.push('/' + menu)">{{ menu.toString() }}</p>
          <!--          <RouterLink to="/articles">{{menu}}</RouterLink>-->
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
    <div style="margin-top: 60px">
      <RouterView />
    </div>
  </v-app>
  hhssssssssssss
</template>

<style scoped>
body {
  background-color: #e4bad4;
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
}
.menu {
  margin: 0 10px;
}
.nav-icon {
  color: black;
}
</style>
