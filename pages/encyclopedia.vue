<template>
  <v-container
    class="encyclopedia_main"
    :style="`background-image: url(/images/space.jpg)`"
    ma-0 pa-0 fluid
  >
    <nuxt-child></nuxt-child>
  </v-container>
</template>

<script>

export default {
  name: 'encyclopedia',
};

</script>

<style scoped>
  .encyclopedia_main {
      min-height: calc(100vh - 150px);
      background-size: cover;
    }
</style>
