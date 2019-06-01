<template>
  <footer>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <h2>All rights reserved by wookie, damn!&copy;</h2>
      </v-layout>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
};
</script>

<style lang="scss" scoped>
   footer {
    width: 100%;
    height: 75px;
    background: url('~static/images/space.jpg');
    h2 {
      color: #fff;
    }
  }
</style>
