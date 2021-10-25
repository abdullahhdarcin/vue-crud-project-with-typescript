<template>
<p>asda</p>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UnicornDataService from "@/services/UnicornDataService";
import Unicorn from "@/types/Unicorn";

@Component
export default class AddUnicorn extends Vue {
  private unicorn: Unicorn = {
    id: null,
    name: "",
    age: 0,
    color: "",
  };

//   private submitted: boolean = false;

  saveTutorial() {
    let data = {
      name: this.unicorn.name,
      color: this.unicorn.color,
      age:this.unicorn.age,
      id:this.unicorn.id
    };

    // UnicornDataService.create(data)
    //   .then((response) => {
    //     this.unicorn.id = response.data.id;
    //     console.log(response.data);
    //     this.submitted = true;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  newTutorial() {
    // this.submitted = false;
    this.unicorn = {} as Unicorn;
  }
}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>