<script setup lang="ts">
import {ref} from "vue";

const name = ref("Nathan CORNELIE")
const menus = ref<string[]>(["Bio", "Paper", "Talks","News","Experience", "Projects","Teaching"])
</script>

<template>
  <v-app class="app">
    <v-app-bar :elevation="2" class="nav-bar" height="72">
      <template v-slot:prepend>
        <p class="nav-name text-start">{{ name }}</p>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <template v-slot:default class="menus">
        <div v-for="menu in menus" class="menu">
          <p>{{menu}}</p>
        </div>
      </template>
      <template v-slot:append>
        <v-btn color="primary">

          <mdicon name="magnify"  class="nav-icon" style="margin-right: 5px" ></mdicon>
          <mdicon name="white-balance-sunny" class="nav-icon"></mdicon>
        </v-btn>

      </template>
    </v-app-bar>
    <RouterView/>
  </v-app>


</template>

<style scoped>
.app{
  background-color: #eeeeee
}
.nav-name{
  margin-left: 5px;
}
.nav-bar{
  font-size: 1.25rem;
  font-weight: 600;
}
.menus{
  width: 100%;
  justify-content: space-around;
}
.menu{
  margin: 0 10px;
}
.nav-icon{
  color: black;
}
</style>
