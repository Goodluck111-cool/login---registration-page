"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// animations for sign in and sign up
const container = document.getElementById("container");
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-pannel-active");
});
signInButton.addEventListener("click", () => {
  container.classList.remove("right-pannel-active");
});


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// to register user
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("registrationEmail").value;
  const password = document.getElementById("registrationPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration successful!");
      console.log(userCredential.user);

      window.location.href = "homepage.html";
    })

    .catch((error) => {
      alert(error.message);
    });
});

// to login user
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      console.log(userCredential.user);
      window.location.href = "homepage.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

