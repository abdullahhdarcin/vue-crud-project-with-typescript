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
      >
        submit
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
    id: "",
    name: "a",
    age: 0,
    colour: "a",
  };

//   private submitted: boolean = false;

  saveTutorial() {
    let data = {
      name: this.unicorn.name,
      colour: this.unicorn.colour,
      age:this.unicorn.age
    };

    console.log(data)

    UnicornDataService.create(data)
      .then((response: any) => {
        this.unicorn.id = response.data.id as string;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

      console.log(this.unicorn.name)
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