<template>
<div id="app">
  <v-app id="inspire">
    <form>
      <v-text-field
        v-model="unicorn.name"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="unicorn.colour"
        label="Color"
      ></v-text-field>
      <v-text-field
        v-model="unicorn.age"
        label="Age"
      ></v-text-field>
      <v-btn
        class="mr-4"
        @click="saveTutorial"
        rounded
        color="warning"
      >
        Submit
      </v-btn>
    </form>
  </v-app>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UnicornDataService from "@/services/UnicornDataService";
import Unicorn from "@/types/Unicorn";

@Component
export default class AddUnicorn extends Vue {
  private unicorn: Unicorn = {
    _id: "",
    name: "",
    age: 0,
    colour: "",
  };

  saveTutorial() {
    let data = {
      name: this.unicorn.name,
      colour: this.unicorn.colour,
      age:this.unicorn.age
    };

    UnicornDataService.create(data)
      .then((response: any) => {
        this.unicorn._id = response.data.id as string;
        console.log(response.data);
        this.$router.push('/')
      })
      .catch((e) => {
        console.log(e);
      });
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