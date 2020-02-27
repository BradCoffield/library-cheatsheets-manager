<template>
  <section>
    <h2 class="title">Cached EBSCO Searches List</h2>
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
        <b-table-column field="key" label="ID">
          {{ props.row.key }}
        </b-table-column>
        <b-table-column field="searchTerm" label="Search Term">
          {{ props.row.searchTerm }}
        </b-table-column>
        <b-table-column field="searchOptions" label="Search Options">
          {{ props.row.searchOptions }}
        </b-table-column>
        <b-table-column field="resultsNumber" label="# of Results">
          {{ props.row.resultsLength }}
        </b-table-column>
        <b-table-column field="editButton" label="Delete Search">
          <b-button
            class="button is-danger"
            outlined
            @click.stop="deleteSearch(props.row.key)"
          >
            Delete
          </b-button>
        </b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <article class="media">
          <figure class="media-left">
            <p>Description: {{ props.row.description }}</p>
          </figure>
        </article>
      </template></b-table
    >
    <!-- </template> -->
  </section>
</template>
<script>
import firebase from "firebase";
import router from "../router";
import dbData from "../Firebase";

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
      ref: firebase.firestore().collection("Cheatsheets")
    };
  },
  created() {
    this.isLoading = true;

    dbData.collection("ebsco-searches").onSnapshot(querySnapshot => {
      this.data = [];
      querySnapshot.forEach(doc => {
        // console.log("hi", doc.id, doc.data());

        this.data.push({
          key: doc.id,
          searchTerm: doc.data().searchTerm,
          results: doc.data().results,
          resultsLength: doc.data().results.length,
          searchOptions: doc.data().searchOptions
        });
      });
      this.isLoading = false;
    });
    // this.ref.onSnapshot(querySnapshot => {
    //   this.data = [];
    //   querySnapshot.forEach(doc => {
    //     console.log(doc.id, doc.data());

    //     //grabs the individual pieces of our individual records. So they can be table-ified
    //     this.data.push({
    //       key: doc.id,
    //       searchTerm: doc.data().searchTerm,
    //       results: doc.data().results,
    //       resultsLength: doc.data().results.length,
    //       searchOptions: doc.data().searchOptions,

    //     });
    //   });
    //   this.isLoading = false;
    // });
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    },
    deleteSearch(id) {
     dbData.collection("ebsco-searches")
        .doc(id)
        .delete()
        .then(function() {
          console.log(firebase.auth())
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
               console.log( firebase.auth().currentUser.email)
          console.error("Error removing document: ", error);
        });
    }
  }
};
</script>
