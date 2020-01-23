<template>
  <section>
    <h2 class="title">Data List</h2>
    <b-table
      :data="data"
      :columns="columns"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      detailed
      detail-key="id"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot="detail" slot-scope="props">
        <article class="media">
          <figure class="media-left">
            <p>
              Description: {{ props.row.description }}
            </p>
          </figure>
        
        </article>
      </template></b-table
    >
  </section>
</template>

<script>
import firebase from "../Firebase";
// import router from "../router";

export default {
  data() {
    return {
      data: [],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: "bottom",
      currentPage: 1,
      perPage: 5,
      columns: [
        {
          field: "key",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "name",
          label: "Name",
          width: "100",
          searchable: true
        },
        {
          field: "url",
          label: "URL",
          width: "100",
          searchable: true
        },
        { field: "categories", label: "Categories", width: "100" }
      ],
      errors: [],
      ref: firebase.firestore().collection("generic-test-collection"), //name of the collection in firestore that contains all your real data
      defaultOpenedDetails: [1]
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
  } /* ,
  methods: {
    details(board) {
      router.push({ name: "ShowBoard", params: { id: board.key } });
    },
    alerrrt(e) {
      alert(e);
    },
    editDatabase (id) {
      router.push({
        name: 'editDatabase',
        params: { id: id }
      })
    },
  } */
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
