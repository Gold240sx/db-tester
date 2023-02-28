import { FacebookAuthProvider } from "firebase/auth";
const provider = new FacebookAuthProvider();
provider.addScope("user_birthday");
import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = "it";
// To apply the default browser preference instead of explicitly setting it.
firebase.auth().useDeviceLanguage();
provider.setCustomParameters({
  display: "popup",
});

import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  });
