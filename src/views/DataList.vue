<template>
  <section>
    <h2 class="title">Data List</h2>
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
        <b-table-column field="name" label="Name">
          {{ props.row.name }}
        </b-table-column>
        <b-table-column field="url" label="URL">
          {{ props.row.url }}
        </b-table-column>
        <b-table-column field="editButton" label="Edit Entry">
          <button class="button is-info" @click.stop="editData(props.row.key)">
            Edit
          </button>
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
import firebase from "../Firebase";
import router from "../router";

export default {
  data() {
    return {
      data: [],
      defaultOpenedDetails: [1],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: "bottom",
      currentPage: 1,
      perPage: 5,
      errors: [],
      ref: firebase.firestore().collection("generic-test-collection") //name of the collection in firestore that contains all your real data
    };
  },
  created() {
    this.isLoading = true;
    this.ref.onSnapshot(querySnapshot => {
      this.data = [];
      querySnapshot.forEach(doc => {
        console.log(doc.id, doc.data());

        //grabs the individual pieces of our individual records. So they can be table-ified
        this.data.push({
          key: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          url: doc.data().url,

          categories: doc.data().categories
        });
      });
      this.isLoading = false;
    });
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    },
    editData(id) {
      router.push({
        name: "edit-data",
        params: { id: id }
      });
    }
  }
};
</script>

<style>
#table-goodFor {
  font-size: 12px;
}
/* .table.is-striped tbody tr:not(.is-selected):nth-child(2n) {
  background-color: #ececec !important;
} */
.mdi.mdi-chevron-right {
  color: goldenrod;
}
section {
  margin-top: 3rem;
}
</style>
