<template>
  <div class="container">
    <h2 class="title">Add Cheatsheet</h2>
    <section>
      <b-field label="Name">
        <b-input v-model="dataStore.name"></b-input>
      </b-field>

<h3 class="title is-3">Metadata</h3>
      <b-field label="Use in production?">
         <b-switch v-model="dataStore.metadata.useInProduction"></b-switch>
       
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
        name: "",
        metadata: {useInProduction:false}
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
