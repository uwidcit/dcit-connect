import './style.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import M from 'materialize-css'

// https://stackoverflow.com/questions/52969652/how-to-use-materializecss-with-vue-js



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-hz8QwtrMl4mxsMcVx5Z6crhM48QlMHA",
  authDomain: "dcit-connect.firebaseapp.com",
  projectId: "dcit-connect",
  storageBucket: "dcit-connect.appspot.com",
  messagingSenderId: "373376252693",
  appId: "1:373376252693:web:a219cc13151dad5bde071c",
  measurementId: "G-Q1FZ30GV9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
});

const loader = document.querySelector('#loader');
const frame = document.querySelector('#mainframe');

frame.addEventListener('load', event=>{
    loader.style.display = 'none';
    frame.style.display = 'block';
});