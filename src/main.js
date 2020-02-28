import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
import firebase from "firebase";

const config = {
  apiKey: process.env.VUE_APP_FIRESTORE_API_KEY,
  authDomain: process.env.VUE_APP_FIRESTORE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIRESTORE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIRESTORE_MESSAGING_SENDER_ID
};

router.beforeEach((to, from, next) => {
  if (!to.meta.protected) {
    next();
  } else {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next();
      } else {
        router.push("/login");
      }
    });
  }
});

import "./styles.scss";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  created() {
    console.log("created!", config.authDomain);

    firebase.initializeApp(config);
  },
  render: h => h(App)
}).$mount("#app");
