<template>
<div v-if="currentUnicorn" id="app">
  <v-app id="inspire">
    <form>
      <v-text-field
        v-model="currentUnicorn.name"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="currentUnicorn.colour"
        label="Color"
      ></v-text-field>
      <v-text-field
        v-model="currentUnicorn.age"
        label="Age"
      ></v-text-field>
      <v-btn
        class="mr-4"
        @click="updateUnicorn"
      >
        Update
      </v-btn>
    </form>
  </v-app>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UnicornDataService from "@/services/UnicornDataService";
import Unicorn from '@/types/Unicorn'

@Component
export default class EditUnicorn extends Vue {
    private currentUnicorn = {} as Unicorn;

    getTutorial(id: string) {
    UnicornDataService.get(id)
      .then((response: any) => {
        this.currentUnicorn = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

     updateUnicorn() {
      UnicornDataService.update(this.currentUnicorn.id, this.currentUnicorn)
        .then((response) => {
          console.log(response.data);
          console.log(this.currentUnicorn)
        })
        .catch((e) => {
          console.log(e);
        });
    }

}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}

#app{
  display: block;
  justify-content: center;
  margin: 50px 200px 50px 200px;
  
}
</style>