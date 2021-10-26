<template>

<div v-if="currentUnicorn" id="app">
  <h2></h2>
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
        type="number"
      ></v-text-field>
      <v-btn
        class="mr-4"
        @click="updateUnicorn"
        rounded
        color="warning"
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

    getUnicorn(id: string) {
    UnicornDataService.get(id)
      .then((response: any) => {
        this.currentUnicorn = response.data;
        
      })
      .catch((e) => {
        console.log(e);
      });
  }

     updateUnicorn() {
       let data={
         name:this.currentUnicorn.name,
         age:this.currentUnicorn.age,
         colour:this.currentUnicorn.colour

       }

      UnicornDataService.update(this.currentUnicorn._id, data)
        .then((response) => {
          this.$router.push('/')
        })
        .catch((e) => {
          console.log(e);
        });
    }

    mounted() {
    this.getUnicorn(this.$route.params.id);
    }

}
</script>

<style scoped>

#app{
  display: block;
  justify-content: center;
  margin: 50px 400px 50px 400px;
  
}
</style>