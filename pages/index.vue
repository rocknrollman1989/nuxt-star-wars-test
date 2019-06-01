<template>
  <v-container
    class="home_page_main"
    :style="`background-image: url(${images})`"
    ma-0 pa-0 fluid
  >
  </v-container>
</template>

<script>
import { arrayOfBackgrounds, DELAY } from '~/constants/imageConstants';

export default {
  data() {
    return {
      images: '/images/space.jpg',
    };
  },
  mounted() {
    this.cangeBackgrounds();
  },
  methods: {
    cangeBackgrounds() {
      arrayOfBackgrounds.forEach((element, index) => {
        setTimeout(() => {
          this.images = element;
          if (index === arrayOfBackgrounds.length - 1) {
            clearTimeout(this);
            setTimeout(() => this.cangeBackgrounds(), DELAY);
          }
        }, DELAY * index);
      });
    },
  },
};
</script>

<style lang="scss" scoped>

  .home_page_main {
    height: calc(100vh - 150px);
    background-size: cover;
    transition: background-image 1s ease;
  }


</style>
