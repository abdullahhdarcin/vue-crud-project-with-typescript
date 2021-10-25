<template>
  <v-data-table
    :headers="headers"
    :items="unicorn"
    sort-by="calories"
    class="elevation-1">


      <template v-slot:top>
      <v-toolbar
        flat
      >
        
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
              to="/add"
            >
              New Item
            </v-btn>
          </template>
         
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
<template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editTutorial(item.id)">mdi-pencil</v-icon>
            <v-icon small @click.native="deleteUnicorn(item._id)">mdi-delete</v-icon>
          </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="removeUnicorn"
      >
        
      </v-btn>
    </template>
  </v-data-table>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UnicornDataService from "@/services/UnicornDataService";
import Unicorn from "@/types/Unicorn";

@Component
export default class UnicornList extends Vue {
  private unicorn: Unicorn[] = [];
  private currentUnicorn = {} as Unicorn

    data(){
        return{
        headers: [
          { text: 'ID', value: '_id' },       
          { text: 'Name', value: 'name' },
          { text: 'Color', value: 'colour' },
          { text: 'Age', value: 'age' },
          { text: 'Actions', value: 'actions', align:'center',sortable:false }
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

      refreshList() {
        this.retrieveUnicorns();
      }

      deleteUnicorn(id: string) {
      UnicornDataService.delete(id)
        .then(() => {
          this.refreshList();
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

<style lang="scss" scoped>
.v-data-table{
    margin:50px
}
</style>