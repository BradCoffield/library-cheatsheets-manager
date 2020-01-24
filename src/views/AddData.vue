<template>
  <div class="container">
    <h2 class="title">Add New Data</h2>
    <section>
      <b-field label="Name">
        <b-input v-model="dataStore.name"></b-input>
      </b-field>

      <b-field label="Description">
        <textarea class="textarea" v-model="dataStore.description"></textarea>
      </b-field>

      <b-field label="URL">
        <b-input v-model="dataStore.url"></b-input>
      </b-field>
      <b-field label="Categories">
        <b-input v-model="dataStore.categories" disabled></b-input>
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
import firebase from "../Firebase";
import router from "../router";
export default {
  name: "AddData",
  data() {
    return {
      dataStore: {},
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
