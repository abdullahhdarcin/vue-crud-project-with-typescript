<template>
  <v-data-table
    :headers="headers"
    :items="unicorn"
    :items-per-page="5"
    class="elevation-1"
    v-model="unicorn"
  ></v-data-table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UnicornDataService from "@/services/UnicornDataService";
import Unicorn from "@/types/Unicorn";

@Component
export default class UnicornList extends Vue {
  private unicorn: Unicorn[] = [];

    data(){
        return{
        
        headers: [
          { text: 'ID', value: '_id' },       
          { text: 'Name', value: 'name' },
          { text: 'Color', value: 'colour' },
          { text: 'Age', value: 'age' }
            ],
          name:[

          ]  
        }
    }

  retrieveUnicorns() {
    UnicornDataService.getAll()
      .then((response) => {
        this.unicorn = response.data as [];
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.retrieveUnicorns();
    console.log(this.retrieveUnicorns());
    console.log(this.unicorn)
  }
}
</script>