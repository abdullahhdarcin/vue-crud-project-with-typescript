<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        
      </div>
      
      <v-btn
        href="/"
        text
      >
        <v-icon>mdi-home</v-icon>
        <span class="mr-2">Homepage</span>
        
      </v-btn>

      <v-btn
        href="/add"
        text
      >
        <v-icon>mdi-plus</v-icon>
        <span class="mr-2">Add New Unicorn</span>
        
      </v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
