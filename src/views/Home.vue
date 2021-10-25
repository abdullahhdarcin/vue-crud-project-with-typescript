<template>
<UnicornList />
</template>

<script lang="ts">
  import Vue from 'vue'
  import UnicornList from '@/components/UnicornList.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      UnicornList
    },
  })
</script>
