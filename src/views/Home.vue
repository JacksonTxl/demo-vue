<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getThisObject } from "../utils/test.ts";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      getThisObject,
      test: 12314
    };
  },
  // computed: {
  //   getThisObject
  // },
  mounted() {
    this.getThisObject()
  }
};
</script>
