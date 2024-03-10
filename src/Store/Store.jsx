import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const StoreData = createContext({
  SignUpNewUser: () => {},
  SignUpwithGoogle: () => {},
  SignInUser: () => {},
});

function Store({ children }) {

  const SignUpNewUser = (email, password) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("Your account has been created");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const SignUpwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        alert("You are signed in with google");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const SignInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("You are loged in");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <StoreData.Provider
        value={{
          SignUpNewUser,
          SignUpwithGoogle,
          SignInUser,
        }}
      >
        {children}
      </StoreData.Provider>
    </>
  );
}

export default Store;
