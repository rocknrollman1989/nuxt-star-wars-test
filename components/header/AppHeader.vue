<template>
  <header>
    <v-container>
      <v-layout row>
        <v-flex md4>
          <h2>Star wars website</h2>
        </v-flex>
        <v-flex md8>
          <v-layout justify-space-around row>
            <nuxt-link to="/">
              <v-btn
                dark
                style="background: transparent"
              >
                Home
              </v-btn>
            </nuxt-link>
            <div class="text-xs-center" data-app>
              <v-menu open-on-hover bottom :nudge-bottom="10" offset-y>
                <template v-slot:activator="{ on }">
                  <nuxt-link to="/encyclopedia">
                    <v-btn
                      color="primary"
                      dark
                      style="background: transparent"
                      v-on="on"
                    >
                      Encyclopedia
                    </v-btn>
                  </nuxt-link>
                </template>
                <v-list class="hover_menu">
                  <v-list-tile
                    v-for="(category, index) in categories"
                    :key="index"
                  >
                    <v-btn
                      color="primary"
                      dark
                    >
                      <nuxt-link :to="`/encyclopedia/${index}`" @click.native="getApiToFetchData(category)">
                        {{ index }}
                      </nuxt-link>
                    </v-btn>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import { SWAPI_STORE } from '~/store/swapiStore/types';

export default {
  name: 'Header',
  computed: {
    ...mapState(SWAPI_STORE, ['categories']),
  },
  methods: {
    getApiToFetchData(api) {
      console.log(api);
    },
  },
};

</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 75px;
    background: url('~static/images/space.jpg');
    h2 {
      color: #fff;
    }
    .hover_menu{
      background: transparent;
      color: #fff;
    }
  }

</style>
