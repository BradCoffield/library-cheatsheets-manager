<template>
  <div class="container">
  <div class="home" style="display:block;margin: 0 auto; width:500px;">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img src="../assets/logo-small.png" alt="Firebase logo">
    <HelloWorld msg="Library Cheatsheets Manager" style="text-align:center;"/>
  </div></div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
