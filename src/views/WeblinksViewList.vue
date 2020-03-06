<template>
  <section>
    <h2 class="title">Weblinks Management</h2>
    <!-- <template slot-scope="props"> -->
    <b-table
      :data="data"
      :paginated="isPaginated"
      :per-page="perPage"
      :opened-detailed="defaultOpenedDetails"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      detailed
      detail-key="key"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column field="key" label="ID" searchable="true">
          {{ props.row.key }}
        </b-table-column>
        <b-table-column field="displayName" label="Name" searchable="true">
          {{ props.row.displayName }}
        </b-table-column>
        <b-table-column field="url" label="URL"searchable="true">
          {{ props.row.url }}
        </b-table-column>
        <b-table-column field="AssociatedSubjects" label="Associated Subjects" searchable="true">
          {{ props.row.AssociatedSubjects }}
        </b-table-column>
        <b-table-column field="editButton" label="Delete Link">
          <b-button
            class="button is-danger"
            outlined
            @click.stop="deleteLink(props.row.key)"
          >
            Delete
          </b-button>
        </b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <p>
          <span class="bold">Description:</span> {{ props.row.description }}
        </p>
        <!-- <article class="media">
          <figure class="media-left">
           
          </figure>
        </article> -->
      </template></b-table
    >
    <!-- </template> -->
  </section>
</template>
<script>
import firebase from "firebase";
// import router from "../router";
// import dbData from "../Firebase";

export default {
  data() {
    return {
      data: [],
      defaultOpenedDetails: [1],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: "top",
      currentPage: 1,
      perPage: 25,
      errors: [],
      ref: firebase.firestore().collection("Cheatsheets"),
      ref2: firebase.firestore().collection("Weblinks")
    };
  },
  created() {
    this.isLoading = true;

    this.ref2.onSnapshot(querySnapshot => {
      this.data = [];
      querySnapshot.forEach(doc => {
        console.log("hi", doc.id, doc.data());
        //Check the description from the database and if it is empty create default text.
        let desc = doc.data().description;
        if (!desc) {
          desc = "No description added.";
        }
        this.data.push({
          key: doc.id,
          displayName: doc.data().displayName,
          description: desc,
          url: doc.data().url,
          AssociatedSubjects: doc.data().AssociatedSubjects.toString()
        });
      });
      this.isLoading = false;
    });
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    },
    deleteLink(id) {
      this.ref2
        .doc(id)
        .delete()
        .then(function() {
          // console.log("uid", firebase.auth().user.uid);
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          // console.log("uid", firebase.auth().user.uid);
          console.log(firebase.auth().currentUser.email);
          console.error("Error removing document: ", error);
        });
    }
  }
};
</script>
