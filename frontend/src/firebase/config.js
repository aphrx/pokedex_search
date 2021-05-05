import firebase from "firebase/app";
import "firebase/storage";
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyBK8_bb2-icFIbDopLibcCGK_HlmYTFfcc",
        authDomain: "pokedex-b8e96.firebaseapp.com",
        projectId: "pokedex-b8e96",
        storageBucket: "pokedex-b8e96.appspot.com",
        messagingSenderId: "354733109884",
        appId: "1:354733109884:web:65778b0280908845240ff9"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      const storage = firebase.storage();
      export { storage, firebase as default };