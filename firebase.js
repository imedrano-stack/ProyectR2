// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdw1qaDIQsTei8fphxjq1X8kc2FISr6E8",
  authDomain: "authentification-e725d.firebaseapp.com",
  projectId: "authentification-e725d",
  storageBucket: "authentification-e725d.appspot.com",
  messagingSenderId: "746561433642",
  appId: "1:746561433642:web:bc56db0a160affb1af9353"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };