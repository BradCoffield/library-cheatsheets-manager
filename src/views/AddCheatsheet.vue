<template>
  <div class="container">
    <h2 class="title is-2">Add Cheatsheet</h2>
    <section>
      <b-field label="Name">
        <b-input v-model="dataStore.name"></b-input>
      </b-field>

      <h2 class="title is-3">Available Blocks</h2>

      <div class>
        <div class="block-block">
          <h3 class="title is-3">Citation Styles</h3>
          <h4 class="title is-4">Metadata</h4>
          <b-field label="Use in production?">
            <b-switch v-model="dataStore.citation_styles.metadata.useInProduction"></b-switch>
          </b-field>
          <!-- <b-field label="Full Width?">
            <b-switch
              v-model="dataStore.citation_styles.metadata.fullWidth"
            ></b-switch>
          </b-field>-->
          <!-- ***************************************************************************************************** -->
          <b-field label="Available Citation Styles">
            <ul v-if="citationStylesController.length > 0">
              <li
                style="display:inline"
                v-for="(item, index) in citationStylesController"
                :key="index"
              >
                <button
                  class="button lil-space-here"
                  :class="{
                    'is-success': item.selected,
                    'is-text': !item.selected
                  }"
                  @click="item.selected = !item.selected"
                >{{ item.name }}</button>
              </li>
            </ul>
          </b-field>
        </div>
      </div>
      <div class>
        <div class="block-block">
          <h3 class="title is-3">Databases</h3>
          <b-field label="Use in production?">
            <b-switch v-model="dataStore.databases.metadata.useInProduction"></b-switch>
          </b-field>
        </div>
      </div>

      <div class>
        <div class="block-block">
          <h3 class="title is-3">Digital Public Library of America</h3>
          <b-field label="Use in production?">
            <b-switch v-model="dataStore.dpla.metadata.useInProduction"></b-switch>
          </b-field>
          <b-field label="DPLA Search Term(s)">
            <b-input v-model="dataStore.dpla.topics"></b-input>
          </b-field>
        </div>
      </div>

      <div class>
        <div class="block-block">
          <h3 class="title is-3">EBSCO API - Academic Search Complete</h3>
          <b-field label="Use in production?">
            <b-switch v-model="dataStore.ebsco_api_a9h.metadata.useInProduction"></b-switch>
          </b-field>
          <b-field label="Searches Currently Used">
            This will be checkboxes with the searches currently used on this
            cheatsheet. - Well, this is moot on this page but won't be moot on
            the Edit Cheatsheet page.
          </b-field>

          <!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5 -->

          <b-field label="Available Cached Searches - Select One">
            <ul v-if="ebscoCachedSearchesController.length > 0">
              <li
                style="display:inline"
                v-for="(item, index) in ebscoCachedSearchesController"
                :key="index"
              >
                <button
                  class="button lil-space-here"
                  :class="{
                    'is-success': item.selected,
                    'is-text': !item.selected
                  }"
                  @click="item.selected = !item.selected"
                >{{ item.name }}</button>
              </li>
            </ul>
          </b-field>

          <!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5 -->
        </div>
      </div>
      <!-- -----------------------------------------primo article search----------------------------------------------->
      <div class>
        <div class="block-block">
          <h3 class="title is-3">Primo Article Search</h3>
          <b-field label="Use in production?">
            <b-switch
              v-model="
                dataStore.primo_article_searches.metadata.useInProduction
              "
            ></b-switch>
          </b-field>

          <b-field label="Available Cached Searches - Select One">
            <ul v-if="primoArticleSearchesController.length > 0">
              <li
                style="display:inline"
                v-for="(item, index) in primoArticleSearchesController"
                :key="index"
              >
                <button
                  class="button lil-space-here"
                  :class="{
                    'is-success': item.selected,
                    'is-text': !item.selected
                  }"
                  @click="item.selected = !item.selected"
                >{{ item.name }}</button>
              </li>
            </ul>
          </b-field>
        </div>
      </div>

      <div class>
        <div class="block-block">
          <h3 class="title is-3">Primo Book Search</h3>
          <b-field label="Use in production?">
            <b-switch v-model="dataStore.primo_book_searches.metadata.useInProduction"></b-switch>
          </b-field>

          <b-field label="Available Cached Searches - Select One">
            <ul v-if="primoBookSearchesController.length > 0">
              <li
                style="display:inline"
                v-for="(item, index) in primoBookSearchesController"
                :key="index"
              >
                <button
                  class="button lil-space-here"
                  :class="{
                    'is-success': item.selected,
                    'is-text': !item.selected
                  }"
                  @click="item.selected = !item.selected"
                >{{ item.name }}</button>
              </li>
            </ul>
          </b-field>
        </div>
      </div>

      <div class>
        <div class="block-block">
          <h3 class="title is-3">Primo Quick Search</h3>
          <b-field label="Use in production?">
            <b-switch v-model="dataStore.primo_quick_search.metadata.useInProduction"></b-switch>
          </b-field>
        </div>
      </div>
      <div class>
        <div class="block-block">
          <h3 class="title is-3">Weblinks</h3>
          <b-field label="Use in production?">
            <b-switch v-model="dataStore.weblinks_block.metadata.useInProduction"></b-switch>
          </b-field>
        </div>
      </div>
      <!-- 
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child box">
               
              </article>
              <article class="tile is-child box">
               
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
               
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
             
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
           
          </article>
        </div>
      </div>-->

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
// import dbData from "../Firebase";
const fetch = require("node-fetch");
// import shortid from "shortid";

export default {
  name: "AddData",
  data() {
    return {
      ebscoCachedSearchesController: [],
      primoArticleSearchesController: [],
      primoBookSearchesController: [],
      citationStylesController: [],
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
      },

      dataStore: {
        name: "",
        citation_styles: {
          metadata: {
            useInProduction: false
          },
          toUse: []
        },
        databases: {
          metadata: { useInProduction: false }
        },
        dpla: { metadata: { useInProduction: false }, topics: "" },
        ebsco_api_a9h: { metadata: { useInProduction: false }, toUse: [] },
        primo_article_searches: {
          metadata: { useInProduction: false },
          toUse: []
        },
        primo_book_searches: {
          metadata: { useInProduction: false },
          toUse: []
        },
        primo_quick_search: { metadata: { useInProduction: false } },
        weblinks_block: { metadata: { useInProduction: false } }
      },
      ref: firebase.firestore().collection("Cheatsheets"), //name of the collection in firestore that contains all your real data
      ref2: firebase.firestore().collection("CitationStylesRepository")
    };
  },
  created() {
    this.getCached_Ebsco();
    this.getCached_PrimoBooks();
    this.getCached_PrimoArticles();

    this.citationStylesWanted();

    // this.cacheSearch("ebsco-search", {
    //   scholarly: true,
    //   fulltext: true,
    //   value: "Javascript",
    //   daterange: true
    // });
    // this.cacheSearch("primo-book-search", {field:"any", precision:"contains", value:"Javascript"})
  },
  methods: {
    getCached_Ebsco() {
      firebase
        .firestore()
        .collection("ebsco-searches")
        .onSnapshot(querySnapshot => {
          this.ebscoCachedSearchesController = [];
          querySnapshot.forEach(doc => {
            // doc.data().searchTerm
            let rObj = {};
            rObj.name = doc.data().searchTerm;
            rObj.id = doc.id;
            rObj.selected = false;
            this.ebscoCachedSearchesController.push(rObj);
          });
        });
    },
    getCached_PrimoBooks() {
      firebase
        .firestore()
        .collection("primo-book-searches")
        .onSnapshot(querySnapshot => {
          this.primoBookSearchesController = [];
          querySnapshot.forEach(doc => {
            // doc.data().searchTerm
            // console.log(doc.data());
            let rObj = {};
            rObj.name = doc.data().searchTerm;
            rObj.id = doc.id;
            rObj.selected = false;
            this.primoBookSearchesController.push(rObj);
          });
        });
    },
    getCached_PrimoArticles() {
      // this.primoArticleSearchesController = [];
      firebase
        .firestore()
        .collection("primo-article-searches")
        .onSnapshot(querySnapshot => {
          this.primoArticleSearchesController = [];
          querySnapshot.forEach(doc => {
            // doc.data().searchTerm
            // console.log(doc.data());
            let rObj = {};
            rObj.name = doc.data().searchTerm;
            rObj.id = doc.id;
            rObj.selected = false;
            this.primoArticleSearchesController.push(rObj);
          });
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
        console.log("ebsco-search");
        runCache(
          `${urlBase}/cache-ebsco-search/${value}?scholarly=${scholarly}&fulltext=${fulltext}&daterange=${daterange}`
        );
      }
      function runCache(url, target) {
        console.log("yayay");
        fetch(url)
          .then(res => res.text())
          .then(body => console.log(body, "eh!"))
          .then(() => {
            if (target == "primo-book-search") {
              this.getCached_PrimoBooks();
            }
            if (target == "primo-article-search") {
              this.getCached_PrimoArticles();
            }
            if (target == "ebsco-search") {
              this.getCached_Ebsco();
            }
          });
      }
    },
    citationStylesWanted() {
      this.ref2.onSnapshot(querySnapshot => {
        this.data = [];
        querySnapshot.forEach(doc => {
          console.log(doc.id, doc.data());
          let rObj = {};
          rObj.name = doc.id;
          rObj.selected = false;
          this.citationStylesController.push(rObj);
        });
      });

      console.log("hihi");
    },
    goHome() {
      router.push("/");
    },
    sendUpdate(evt) {
      evt.preventDefault();

      this.iteratorForPrep("ebscoCachedSearchesController");
      this.iteratorForPrep("primoArticleSearchesController");
      this.iteratorForPrep("primoBookSearchesController");
      this.iteratorForPrep("citationStylesController");
      this.ref.doc(this.dataStore.name).set(this.dataStore, { merge: true });
    },
    iteratorForPrep: function(targetArray) {
      console.log(targetArray);
      let self = this;

      if (targetArray == "ebscoCachedSearchesController") {
        self.ebscoCachedSearchesController.forEach(function(i) {
          if (i.selected == true) {
            self.dataStore.ebsco_api_a9h.toUse.push(i.id);
          }
        });
      }
      if (targetArray == "primoArticleSearchesController") {
        self.primoArticleSearchesController.forEach(function(i) {
          if (i.selected == true) {
            self.dataStore.primo_article_searches.toUse.push(i.id);
          }
        });
      }
      if (targetArray == "primoBookSearchesController") {
        self.primoBookSearchesController.forEach(function(i) {
          if (i.selected == true) {
            self.dataStore.primo_book_searches.toUse.push(i.id);
          }
        });
      }
      if (targetArray == "citationStylesController") {
        self.citationStylesController.forEach(function(i) {
          if (i.selected == true) {
            self.dataStore.citation_styles.toUse.push(i.name);
          }
        });
      }
    }
  }
};
</script>
