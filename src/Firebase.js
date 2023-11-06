import { initializeApp } from "firebase/app";
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHSAmoGnZ5skdIAhjStg5QR4kleG4H7w0",
  authDomain: "matrimoni-colab.firebaseapp.com",
  projectId: "matrimoni-colab",
  storageBucket: "matrimoni-colab.appspot.com",
  messagingSenderId: "1001152977161",
  appId: "1:1001152977161:web:6316e658405a0b0820dbd8",
  measurementId: "G-GSMJW7W7Z9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export const socialMediaAuth = (provider) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
