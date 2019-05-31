<template>
  <header>
    <v-container>
      <v-layout row>
        <v-flex md4>
          <h2>Star wars website</h2>
        </v-flex>
        <v-flex md8>
          <v-layout justify-space-around row>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/encyclopedia">Encyclopedia</nuxt-link>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 75px;
    background: url('~static/images/space.jpg');
    h2 {
      color: #fff;
    }
  }

</style>
