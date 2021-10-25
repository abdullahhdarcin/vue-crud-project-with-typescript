<template>
<p>asd</p>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UnicornDataService from "@/services/UnicornDataService";
import Unicorn from "@/types/Unicorn";

@Component
export default class UnicornList extends Vue {
  private unicorn: Unicorn[] = [];

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
  }
}
</script>