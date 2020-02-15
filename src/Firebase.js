import { firebase } from "@firebase/app";
import "@firebase/firestore";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
//   authDomain: "your-project.firebaseapp.com",
//   databaseURL: "https://your-project.firebaseio.com",
//   projectId: "your-project",
//   storageBucket: "your-project.appspot.com",
//   messagingSenderId: "xxxxxxxxxxxx"
// });

const libDataConfig = {
  apiKey: process.env.VUE_APP_LIBDATAFIRESTORE_API_KEY,
  authDomain: process.env.VUE_APP_LIBDATAFIRESTORE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_LIBDATAFIRESTORE_DATABASE_URL,
  projectId: process.env.VUE_APP_LIBDATAFIRESTORE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_LIBDATAFIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_LIBDATAFIRESTORE_MESSAGING_SENDER_ID
};
var secondary = firebase.initializeApp(libDataConfig, "secondary");
const dbData = secondary.firestore();
export default dbData;

// /* eslint-disable */

// import * as firebase from "firebase";
// import firestore from "firebase/firestore";

// const settings = {};

// const config = {
//   apiKey: process.env.VUE_APP_FIRESTORE_API_KEY,
//   authDomain: process.env.VUE_APP_FIRESTORE_AUTH_DOMAIN,
//   databaseURL: process.env.VUE_APP_FIRESTORE_DATABASE_URL,
//   projectId: process.env.VUE_APP_FIRESTORE_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_FIRESTORE_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_FIRESTORE_MESSAGING_SENDER_ID
// };

// firebase.initializeApp(config);

// firebase.firestore().settings(settings);

// export default firebase;
