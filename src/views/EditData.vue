<template>
  <div class="container">
    <h2 class="title">Edit Database</h2>
    <section>
      <b-field label="Name">
        <b-input v-model="docData.name"></b-input>
      </b-field>

      <b-field label="Description">
        <textarea class="textarea" v-model="docData.description"></textarea>
      </b-field>

      <b-field label="URL">
        <b-input v-model="docData.url"></b-input>
      </b-field>

      <div class="form-buttons">
        <button @click="goHome" class="button is-danger">
          <span class="mdi mdi-cancel"></span> Cancel
        </button>
        <button @click="sendUpdate" class="button is-info">
          <span class="mdi mdi-check"></span> Update
        </button>
        <br />
        <button class="button mt-2r " @click="deleteWarningActive = true">
          <span class="mdi mdi-alert-octagram"></span>Delete Database
        </button>
      </div>
    </section>
    <b-modal :active.sync="deleteWarningActive" :width="640" scroll="keep">
      <div class="card">
        <!-- <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="/static/img/placeholder-1280x960.png" alt="Image">
                    </figure>
        </div>-->
        <div class="card-content">
          <div class="media">
            <!-- <div class="media-left">
                            <figure class="image is-48x48">
                              
                            </figure>
            </div>-->
            <div class="media-content">
              <p class="title is-4">
                <span
                  class="mdi mdi-alert-octagram has-text-danger fs24"
                ></span>
                Delete Database: {{ database.name }}
              </p>
            </div>
          </div>

          <div class="content mt-2">
            Hey, no judgement, but are you sure you want to do this? It can't be
            undone.
            <div class="has-text-right mt-2">
              <button
                class="button is-text"
                @click="deleteWarningActive = false"
              >
                Cancel
              </button>
              <button class="button is-danger" @click="deleteThisDatabase">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import firebase from "firebase";
import router from "../router";
// import _ from "lodash";
// import contentTypesList from "../components/editDatabases/EditDatabasesContentTypes";
// import relevantTopics from "../components/editDatabases/RelevantTopics";
export default {
  name: "editDatabase",
  data() {
    return {
      key: this.$route.params.id,
      database: {},

      docData: {},
      ref: firebase.firestore().collection("generic-test-collection"), //name of the collection in firestore that contains all your real data

      deleteWarningActive: false
    };
  },
  created() {
    console.log(this.key, this.$route.params);
    this.ref
      .doc(this.key)
      .get()
      .then(doc => {
        if (doc.exists) {
          this.docData = doc.data();
          return doc.data();
        } else {
          alert("No such document!");
        }
      });
  },

  methods: {
    sendUpdate(evt) {
      evt.preventDefault();
      this.ref.doc(this.key).set(this.docData, { merge: true });
      this.$buefy.toast.open({
        message: "Database Updated!",
        type: "is-success"
      });
      this.goHome();
    },
    goHome() {
      router.push("/data-list");
    },

    deleteThisDatabase() {
      firebase
        .firestore()
        .collection("databases")
        .doc(this.$route.params.id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
          //  this.$toast.open({
          //     message: "Database Deleted!",
          //     type: "is-success"
          //   });
          router.push("/databases-list");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  },
  components: {}
};
</script>

<style scoped>
/* h2 {
  font-weight: bold;
  font-size: 2rem;
} */
.mdi-alert-octagram.fs24 {
  font-size: 24px;
}
</style>
