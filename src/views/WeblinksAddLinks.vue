<template>
  <div>
    <h2 class="">Add new weblink</h2>

    <div class="block">
      <b-field label="Name">
        <b-input v-model="addWeblink.name" type="text" required></b-input>
      </b-field>
      <b-field label="URL">
        <!-- <b-input placeholder="URL" type="url"></b-input> -->
        <b-input v-model="addWeblink.url" type="url"></b-input>
      </b-field>
      <b-field label="Description">
        <b-input
          v-model="addWeblink.description"
          maxlength="200"
          type="textarea"
        ></b-input>
      </b-field>
      <b-field label="Attach to existing cheatsheets">
        checkboxes here, similar to how database topics work
      </b-field>
    </div>

    <b-button @click="submitNewWeblink()" type="is-primary" outlined
      >Submit</b-button
    >
  </div>
</template>
<script>
import firebase from "firebase";
import router from "../router";
import shortid from "shortid";
export default {
  data() {
    return {
      data: [],
      ref: firebase.firestore().collection("Weblinks"),
      addWeblink: {
        name: "",
        url: "",
        description: "",
        topicalAreas: ""
      }
    };
  },
  methods: {
    submitNewWeblink() {
      let key = shortid.generate();
      console.log(key);
      this.ref.doc(key).set(this.addWeblink, { merge: true });
    }
  }
};
</script>
