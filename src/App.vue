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
            >Vue Firestore Crud Starter</span
          >
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item>
          <router-link to="/data-list">Data List</router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link to="/add-data">Add Data</router-link>
        </b-navbar-item>

        <!-- <b-navbar-dropdown label="Metadata">
          <b-navbar-item>
            <router-link to="/manage-content-types">Content Types</router-link>
          </b-navbar-item>
          <b-navbar-item>
            <router-link to="/manage-topic-areas">Topic Areas</router-link>
          </b-navbar-item>
        </b-navbar-dropdown> -->
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <div id="firebaseui-auth-container"></div>
            <!--  <div id="sign-in-status"></div><a @click="logOut" id="logoutlink">&nbsp;| Log out</a> 
                 
                </div> -->
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start("#firebaseui-auth-container", {
    //   signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    //   signInSuccessUrl: "/data-list"
    // });
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function() {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
          // document.getElementById("loader").style.display = "none";
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInSuccessUrl: "/",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
      // // Terms of service url.
      // tosUrl: "<your-tos-url>",
      // // Privacy policy url.
      // privacyPolicyUrl: "<your-privacy-policy-url>"
    };
    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", uiConfig);
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
