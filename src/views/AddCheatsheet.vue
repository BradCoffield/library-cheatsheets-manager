<template>
  <div class="container">
    <h2 class="title">Add Cheatsheet</h2>
    <section>
      <b-field label="Name">
        <b-input v-model="dataStore.name"></b-input>
      </b-field>

      <h2 class="title is-2">Available Blocks</h2>

      <h3 class="title is-3">Citation Styles</h3>
      <h4 class="title is-4">Metadata</h4>
      <b-field label="Use in production?">
        <b-switch
          v-model="dataStore.citation_styles.metadata.useInProduction"
        ></b-switch>
        Whether or not you want this block used on the actual page.
      </b-field>
      <b-field label="Full Width?">
        <b-switch
          v-model="dataStore.citation_styles.metadata.fullWidth"
        ></b-switch>
      </b-field>
      <b-field label="Block Display Name">
        <b-input
          v-model="dataStore.citation_styles.metadata.blockDisplayName"
        ></b-input>
      </b-field>
      <b-field label="Styles Wanted">
        This will be an area populated, like database types, from another single
        source of truth of all possible citation styles.
      </b-field>

      <h3 class="title is-3">Databases</h3>
      <b-field label="Use in production?">
        <b-switch
          v-model="dataStore.databases.metadata.useInProduction"
        ></b-switch>
        Whether or not you want this block used on the actual page.
      </b-field>

      <div class="form-buttons">
        <button @click="goHome" class="button is-danger">
          <span class="mdi mdi-cancel"></span> Cancel
        </button>
        <button @click="sendUpdate" class="button is-info">
          <span class="mdi mdi-check"></span> Update
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "firebase";
import router from "../router";
export default {
  name: "AddData",
  data() {
    return {
      dataStore: {
        name: "hi",
        citation_styles: {
          metadata: { useInProduction: false }
        }
      },
      ref: firebase.firestore().collection("generic-test-collection") //name of the collection in firestore that contains all your real data
    };
  },
  methods: {
    goHome() {
      router.push("/");
    },
    sendUpdate(evt) {
      evt.preventDefault();
      this.ref.doc(this.dataStore.name).set(this.dataStore, { merge: true });
    }
  }
};
</script>
