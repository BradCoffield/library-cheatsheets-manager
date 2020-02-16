<template>
  <div class="container">
    <h2 class="title">Add Cheatsheet</h2>
    <section>
      <b-field label="Name">
        <b-input v-model="dataStore.name"></b-input>
      </b-field>

      <h2 class="title is-2">Available Blocks</h2>

      <h3 class="title is-3">Citation Styles</h3>
      <h4 class="title is-4">Metadata</h4>
      <b-field label="Use in production?">
        <b-switch
          v-model="dataStore.citation_styles.metadata.useInProduction"
        ></b-switch>
      </b-field>
      <b-field label="Full Width?">
        <b-switch
          v-model="dataStore.citation_styles.metadata.fullWidth"
        ></b-switch>
      </b-field>

      <b-field label="Styles Wanted">
        This will be an area populated, like database types, from another single
        source of truth of all possible citation styles.
      </b-field>

      <h3 class="title is-3">Databases</h3>
      <b-field label="Use in production?">
        <b-switch
          v-model="dataStore.databases.metadata.useInProduction"
        ></b-switch>
      </b-field>

      <h3 class="title is-3">Digital Public Library of America</h3>
      <b-field label="Use in production?">
        <b-switch v-model="dataStore.dpla.metadata.useInProduction"></b-switch>
      </b-field>
      <b-field label="DPLA Search Term(s)">
        <b-input v-model="dataStore.dpla.topics"></b-input>
      </b-field>

      <h3 class="title is-3">EBSCO API - Academic Search Complete</h3>
      <b-field label="Use in production?">
        <b-switch
          v-model="dataStore.ebsco_api_a9h.metadata.useInProduction"
        ></b-switch>
      </b-field>
      <b-field label="Searches Currently Used">
        This will be checkboxes with the searches currently used on this
        cheatsheet. - Well, this is moot on this page but won't be moot on the
        Edit Cheatsheet page.
      </b-field>
      <b-field label="Available Cached Searches">
        this is going to query rmc-library-data "ebsco-searches" and list the
        searchTerm field. If selected and submitted will add that document name,
        which is a shortId, to the cheatsheets with that uid in the uid field.
      </b-field>
      <b-field label="Cache a new search">
        this will be an input with a run button. will talk to proxy server run
        the new search and refresh the above area so its then available to
        choose for this form.
      </b-field>

      <h3 class="title is-3">Primo Article Search</h3>
      <b-field label="Use in production?">
        <b-switch
          v-model="dataStore.primo_article_searches.metadata.useInProduction"
        ></b-switch>
      </b-field>
      <b-field label="Available Cached Searches">
        this is going to query rmc-library-data "primo-article-searches" and
        list the searchTerm field. If selected and submitted will add that
        document name, which is a shortId, to the cheatsheets with that uid in
        the uid field.
      </b-field>
      <b-field label="Cache a new search">
        this will be an input with a run button. will talk to proxy server run
        the new search and refresh the above area so its then available to
        choose for this form.
      </b-field>

      <h3 class="title is-3">Primo Book Search</h3>
      <b-field label="Use in production?">
        <b-switch
          v-model="dataStore.primo_book_searches.metadata.useInProduction"
        ></b-switch>
      </b-field>
      <b-field label="Available Cached Searches">
        this is going to query rmc-library-data "primo-book-searches" and list
        the searchTerm field. If selected and submitted will add that document
        name, which is a shortId, to the cheatsheets with that uid in the uid
        field.
      </b-field>
      <b-field label="Cache a new search">
        this will be an input with a run button. will talk to proxy server run
        the new search and refresh the above area so its then available to
        choose for this form.
      </b-field>

      <h3 class="title is-3">Primo Quick Search</h3>
      <b-field label="Use in production?">
        <b-switch
          v-model="dataStore.primo_quick_search.metadata.useInProduction"
        ></b-switch
      ></b-field>
      <h3 class="title is-3">Weblinks</h3>
      <b-field label="Use in production?">
        <b-switch
          v-model="dataStore.weblinks_block.metadata.useInProduction"
        ></b-switch
      ></b-field>

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
        name: "hi",
        citation_styles: {
          metadata: {
            useInProduction: false,
            fullWidth: false
          }
        },
        databases: {
          metadata: { useInProduction: false }
        },
        dpla: { metadata: { useInProduction: false }, topics: "" },
        ebsco_api_a9h: { metadata: { useInProduction: false } },
        primo_article_searches: { metadata: { useInProduction: false } },
        primo_book_searches: { metadata: { useInProduction: false } },
        primo_quick_search: { metadata: { useInProduction: false } },
        weblinks_block: { metadata: { useInProduction: false } }
      },
      ref: firebase.firestore().collection("Cheatsheets") //name of the collection in firestore that contains all your real data
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
