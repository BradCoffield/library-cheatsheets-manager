<template>
  <div class="container">
    <h2 class="title">Add new weblink</h2>

    <div class="block">
      <b-field label="Name">
        <b-input
          v-model="addWeblink.displayName"
          type="text"
          required
        ></b-input>
      </b-field>
      <b-field label="URL">
        <!-- <b-input placeholder="URL" type="url"></b-input> -->
        <b-input v-model="addWeblink.url" type="url"></b-input>
      </b-field>
      <b-field label="Description">
        <b-input
          v-model="addWeblink.description"
          maxlength="500"
          type="textarea"
        ></b-input>
      </b-field>

      <b-field
        label="Existing Cheatsheets - Select to associate with this weblink"
      >
        <ul v-if="existingCheatsheetsController.length > 0">
          <li
            style="display:inline"
            v-for="(item, index) in existingCheatsheetsController"
            :key="index"
          >
            <button
              class="button lil-space-here"
              :class="{
                'is-success': item.selected,
                'is-text': !item.selected
              }"
              @click="item.selected = !item.selected"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </b-field>
    </div>

    <b-button @click="submitNewWeblink()" type="is-primary" outlined
      >Submit</b-button
    >
  </div>
</template>
<script>
import firebase from "firebase";
// import router from "../router";
import shortid from "shortid";
export default {
  data() {
    return {
      data: [],
      existingCheatsheets: [],
      existingCheatsheetsController: [],
      refWeblinks: firebase.firestore().collection("Weblinks"),
      ref: firebase.firestore().collection("Cheatsheets"),

      addWeblink: {
        displayName: "",
        url: "",
        description: "",
        AssociatedSubjects: []
      }
    };
  },
  created() {
    this.ref
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.existingCheatsheets.push(doc.id);
        });
        console.log(this.existingCheatsheets);
      })
      .then(() => {
        this.existingCheatsheetsController = this.existingCheatsheets.map(
          item => {
            let rObj = {};
            rObj.name = item;
            rObj.selected = false;
            // console.log(rObj);
            return rObj;
          }
        );
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  },
  methods: {
    submitNewWeblink() {
      let key = shortid.generate();
      console.log(key);
      this.existingCheatsheetsController.forEach(q => {
        if (q.selected === true) {
          this.addWeblink.AssociatedSubjects.push(q.name);
        }
      });
      this.refWeblinks.doc(key).set(this.addWeblink, { merge: true });
    }
  }
};
</script>
