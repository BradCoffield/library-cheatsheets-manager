<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img src="../assets/logo-small.png" alt="Firebase logo">
    <HelloWorld msg="Vue+Firestore CRUD Starter" />
  </div>
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
