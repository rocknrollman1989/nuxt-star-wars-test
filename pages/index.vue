<template>
  <v-container class="home_page_main" :style="`background-image: url(${images})`"  ma-0 pa-0 fluid >

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: '/images/space.jpg',
    }
  }
}
</script>

<style lang="scss" scoped>

  .home_page_main {
    height: calc(100vh - 150px);
    background-size: cover;
  }

</style>
