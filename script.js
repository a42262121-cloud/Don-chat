import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxsbzhaHw2vI4wQg-8HaeNcobRNpHlYKA",
  authDomain: "don-chat-v2-f8e3c.firebaseapp.com",
  projectId: "don-chat-v2-f8e3c",
  storageBucket: "don-chat-v2-f8e3c.firebasestorage.app",
  messagingSenderId: "764213594514",
  appId: "1:764213594514:web:54adac6a787c5c8d34994b"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

let currentUser = null;
let currentChat = null;
let chatType = "dm";

document.getElementById("signupBtn").onclick = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value);
};
document.getElementById("loginBtn").onclick = () => {
  signInWithEmailAndPassword(auth, email.value, password.value);
};

onAuthStateChanged(auth, user => {
  if(user){
    currentUser = user;
    document.getElementById("auth").style.display = "none";
    document.getElementById("chat").style.display = "block";
  }
});
