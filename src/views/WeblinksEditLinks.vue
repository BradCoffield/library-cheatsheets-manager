<template>
  <div class="container">
    <h2 class="title">Edit Weblink</h2>

    <div class="block">
      <b-field label="Name">
        <b-input v-model="data.displayName" type="text" required></b-input>
      </b-field>
      <b-field label="URL">
        <!-- <b-input placeholder="URL" type="url"></b-input> -->
        <b-input v-model="data.url" type="url"></b-input>
      </b-field>
      <b-field label="Description">
        <b-input
          v-model="data.description"
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
import _ from "lodash";
export default {
  data() {
    return {
      key: this.$route.params.id,
      data: {},
      existingCheatsheets: [],
      existingCheatsheetsController: [],
      ref: firebase.firestore().collection("Cheatsheets"),
      ref2: firebase.firestore().collection("Weblinks"),

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
      .then(() => {
        this.ref2
          .doc(this.key)
          .get()
          .then(doc => {
            console.log(doc.data());
            let desc = doc.data().description;
            if (!desc) {
              desc = "";
            }
            this.data = {
              key: doc.id,
              displayName: doc.data().displayName,
              description: desc,
              url: doc.data().url,
              AssociatedSubjects: doc.data().AssociatedSubjects
            };
            this.lodashThings(this.existingCheatsheetsController, this.data.AssociatedSubjects);
          });
      })
      .then(() => {
        this.existingCheatsheetsController.forEach(i => {
          console.log(this.data.AssociatedSubjects);
          if (_.includes(this.data.AssociatedSubjects, i.name)) {
            console.log("yay");
            i.selected = true;
          } else {
            console.log(i, "false");
          }
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  },
  methods: {
    lodashThings: function(controllerName, otherArray) {
      //below iterates over the Controller objects and, using lodash, if the object.name is included in Firestore then change its selected (i.selected) to true

      controllerName.forEach(i => {
        if (_.includes(otherArray, i.name)) {
          i.selected = true;
        } else {
          console.log(i.name, "false");
        }
      });
    },
    submitNewWeblink() {
      let key = shortid.generate();
      console.log(key);
      this.existingCheatsheetsController.forEach(q => {
        if (q.selected === true) {
          this.addWeblink.AssociatedSubjects.push(q.name);
        }
      });
      this.ref2.doc(key).set(this.data, { merge: true });
    }
  }
};
</script>
