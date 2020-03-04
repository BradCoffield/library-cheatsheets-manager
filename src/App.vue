<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
    />
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span id="library-logo-text" style="font-weight:bold"
            >Library Cheatsheets Manager</span
          >
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-dropdown label="Cheatsheets">
          <b-navbar-item>
            <router-link to="/data-list">Cheatsheet List</router-link>
          </b-navbar-item>

          <b-navbar-item>
            <router-link to="/add-cheatsheet">Add Cheatsheet</router-link>
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-dropdown label="Cached Searches">
          <b-navbar-item>
            <router-link to="/cached-searches-list-ebsco">
              EBSCO Cached Searches List</router-link
            >
          </b-navbar-item>
          <b-navbar-item>
            <router-link to="/cached-searches-list-primo-books">
              Primo Books Cached Searches List</router-link
            >
          </b-navbar-item>
          <b-navbar-item>
            <router-link to="/cached-searches-list-primo-articles">
              Primo Articles Cached Searches List</router-link
            >
          </b-navbar-item>
          <b-navbar-item>
            <router-link to="add-cached-search"> Add Cached Search</router-link>
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-dropdown label="Weblinks">
          <b-navbar-item>
            <router-link to="add-weblink"> Add Weblink</router-link>
          </b-navbar-item>
          <b-navbar-item>
            <router-link to="manage-weblinks">Manage Weblinks</router-link>
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item
          ><router-link to="/login" v-if="!authenticated"
            ><b-button type="is-primary">
              Login
            </b-button></router-link
          >
          <router-link to="/logout" v-else
            ><b-button type="is-primary" outlined>Logout</b-button></router-link
          >
        </b-navbar-item>
      </template>
    </b-navbar>

    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
// import firebase from "firebase";
// import * as firebaseui from "firebaseui";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    // console.log(secondary);
    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // var uiConfig = {
    //   callbacks: {
    //     signInSuccessWithAuthResult: function() {
    //       // User successfully signed in.
    //       // Return type determines whether we continue the redirect automatically
    //       // or whether we leave that to developer to handle.
    //       return true;
    //     },
    //     uiShown: function() {
    //       // The widget is rendered.
    //       // Hide the loader.
    //       // document.getElementById("loader").style.display = "none";
    //     }
    //   },
    //   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    //   signInFlow: "popup",
    //   signInSuccessUrl: "/",
    //   signInOptions: [
    //     // Leave the lines as is for the providers you want to offer your users.
    //     firebase.auth.GoogleAuthProvider.PROVIDER_ID
    //   ]
    // };
    // // The start method will wait until the DOM is loaded.
    // ui.start("#firebaseui-auth-container", uiConfig);
  },
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem("authenticated"));
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
