<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "../../node_modules/firebaseui/dist/firebaseui.css";

export default {
  mounted() {
    let uiConfig = {
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
        }
      ],
      callbacks: {
        signInSuccessWithAuthResult() {
          localStorage.setItem("authenticated", true);
          window.location.href = "/";
        }
      }
    };

    // let ui = firebaseui.auth.AuthUI.getInstance();
    //     if (!ui) {
    //       ui = new firebaseui.auth.AuthUI(window.firebase.auth());
    //     }
    //     ui.start('#firebaseui-auth-container', uiConfig);

    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start("#firebaseui-auth-container", uiConfig);

    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
