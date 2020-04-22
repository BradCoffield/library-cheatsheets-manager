<template>
  <div class="container">
    <h2 class="title is-2">Add Cached Search</h2>
    <hr />

    <h3 class="title is-3" style="margin-top:4rem">EBSCO</h3>
    <b-field label="Search term(s)">
      <b-input v-model="cacheNewSearch_Ebsco.value"></b-input>
    </b-field>
    <div class="field">
      <b-field label="Options:"></b-field>
      <div class="block">
        <b-checkbox v-model="cacheNewSearch_Ebsco.fulltext">Full-text only</b-checkbox>

        <b-checkbox v-model="cacheNewSearch_Ebsco.daterange">Recent only</b-checkbox>

        <b-checkbox v-model="cacheNewSearch_Ebsco.scholarly">Scholarly only</b-checkbox>
      </div>
      <b-button
        @click="cacheSearch('ebsco-search', cacheNewSearch_Ebsco)"
        type="is-primary"
        outlined
        class="is-pulled-right"
      >Cache New Search</b-button>
    </div>

    <!-- <b-field label></b-field> -->

    <!-- <b-button @click="">Click Me</b-button> -->

    <div style="margin-bottom:4rem;">&nbsp;</div>

    <h3 class="title is-3" style="margin-top:4rem">Primo Books</h3>

    <b-field label="Search term(s)">
      <b-input v-model="cacheNewSearch_PrimoBooks.value"></b-input>
    </b-field>

    <div class="field">
      <b-field label="Precision:"></b-field>
      <div class="block" style="margin-left:1.5rem;">
        <b-radio
          v-model="cacheNewSearch_PrimoBooks.precision"
          name="name1"
          native-value="exact"
        >Exact</b-radio>
        <b-radio
          v-model="cacheNewSearch_PrimoBooks.precision"
          name="name1"
          native-value="begins_with"
        >Begins with</b-radio>
        <b-radio
          v-model="cacheNewSearch_PrimoBooks.precision"
          name="name1"
          native-value="contains"
        >Contains</b-radio>
      </div>

      <!-- ********************* -->

      <b-field label="Field:"></b-field>
      <div class="block" style="margin-left:1.5rem">
        <b-radio v-model="cacheNewSearch_PrimoBooks.field" name="name" native-value="any">Any</b-radio>
        <b-radio v-model="cacheNewSearch_PrimoBooks.field" name="name" native-value="title">Title</b-radio>
        <b-radio
          v-model="cacheNewSearch_PrimoBooks.field"
          name="name"
          native-value="creator"
        >Creator (author)</b-radio>
        <b-radio v-model="cacheNewSearch_PrimoBooks.field" name="name" native-value="sub">Subject</b-radio>
      </div>

      <b-button
        @click="cacheSearch('primo-book-search', cacheNewSearch_PrimoBooks)"
        type="is-primary"
        outlined
        class="is-pulled-right"
      >Cache New Search</b-button>
    </div>

    <div style="margin-bottom:4rem;">&nbsp;</div>
    <h3 class="title is-3" style="margin-top:4rem">Primo Articles</h3>
    <b-field label="Search term(s)">
      <b-input v-model="cacheNewSearch_PrimoArticles.value"></b-input>
    </b-field>
    <b-field label="Precision:"></b-field>
    <div class="block">
      <b-radio
        v-model="cacheNewSearch_PrimoArticles.precision"
        name="name1"
        native-value="exact"
      >Exact</b-radio>
      <b-radio
        v-model="cacheNewSearch_PrimoArticles.precision"
        name="name1"
        native-value="begins_with"
      >Begins with</b-radio>
      <b-radio
        v-model="cacheNewSearch_PrimoArticles.precision"
        name="name1"
        native-value="contains"
      >Contains</b-radio>
    </div>

    <!-- ********************* -->

    <b-field label="Field:"></b-field>
    <div class="block">
      <b-radio v-model="cacheNewSearch_PrimoArticles.field" name="name" native-value="any">Any</b-radio>
      <b-radio v-model="cacheNewSearch_PrimoArticles.field" name="name" native-value="title">Title</b-radio>
      <b-radio
        v-model="cacheNewSearch_PrimoArticles.field"
        name="name"
        native-value="creator"
      >Creator (author)</b-radio>
      <b-radio v-model="cacheNewSearch_PrimoArticles.field" name="name" native-value="sub">Subject</b-radio>
    </div>
    <b-field label="Full-text:"></b-field>
    <div class="block">
      <b-checkbox v-model="cacheNewSearch_PrimoArticles.fulltext">Full-text only</b-checkbox>
    </div>
    <!-- <b-button @click="">Click Me</b-button> -->
    <b-button
      @click="
          cacheSearch('primo-article-search', cacheNewSearch_PrimoArticles)
        "
      type="is-primary"
      outlined
      class="is-pulled-right"
    >Cache New Search</b-button>
    <p>.</p>
  </div>
</template>
<script>
// import firebase from "firebase";
// import router from "../router";
// import dbData from "../Firebase";

export default {
  data() {
    return {
      data: [],
      cacheNewSearch_Ebsco: {
        fulltext: false,
        daterange: false,
        scholarly: false,
        value: ""
      },
      cacheNewSearch_PrimoBooks: {
        field: "",
        precision: "",
        value: ""
      },
      cacheNewSearch_PrimoArticles: {
        field: "",
        precision: "",
        value: "",
        fulltext: ""
      }
    };
  },
  created() {
    // this.successNotifcation("YES");
  },
  methods: {
    successNotifcation(message) {
      this.$buefy.notification.open({
        duration: 5000,
        message: message,
        position: "is-bottom",
        type: "is-success",
        hasIcon: true
      });
    },
    cacheSearch(target, optionsObject) {
      console.log("hi");
      const urlBase = "https://rmc-proxy-server.herokuapp.com/api";
      const field = optionsObject.field;
      const precision = optionsObject.precision;
      const value = optionsObject.value;
      const fulltext = optionsObject.fulltext || false;
      const scholarly = optionsObject.scholarly;
      const daterange = optionsObject.daterange;
      if (target == "primo-book-search") {
        runCache(
          `${urlBase}/cache-primo-book-search/${field}/${precision}/${value}`
        );
      }
      if (target == "primo-article-search") {
        runCache(
          `${urlBase}/cache-primo-article-search/${field}/${precision}/${value}/${fulltext}`
        );
      }
      if (target == "ebsco-search") {
        runCache(
          `${urlBase}/cache-ebsco-search/${value}?scholarly=${scholarly}&fulltext=${fulltext}&daterange=${daterange}`
        );
      }
      function runCache(url) {
        console.log("yayay");
        fetch(url)
          .then(res => res.text())
          .then(function(body) {
            console.log(body, "eh!");
          });
      }
    }
  }
};
</script>
<style scoped>
.block {
  margin-left: 1.5rem;
}
.field {
  padding: 0.25rem 1rem;
}
.mbEh {
  margin-bottom: 3rem;
}
</style>