<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
    />
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
          <span id="library-logo-text" style="font-weight:bold"
            >Vue Firestore Crud Starter</span
          >
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-dropdown label="Primary Data">
          <b-navbar-item>
            <router-link to="/data-list">Data List</router-link>
          </b-navbar-item>
          <b-navbar-item>
            <router-link to="/add-data">Add Data</router-link>
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-dropdown label="Metadata">
          <b-navbar-item>
            <router-link to="/manage-content-types">Content Types</router-link>
          </b-navbar-item>
          <b-navbar-item>
            <router-link to="/manage-topic-areas">Topic Areas</router-link>
          </b-navbar-item>
        </b-navbar-dropdown>
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
