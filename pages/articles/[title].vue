<template>
  <div>
    {{ route.params }}
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style>
template {
  min-height: 1000px;
}
</style>
