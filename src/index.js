// 1. Import all global functions
// import {$,jQuery} from 'jquery';
import {auth_fun,weirdass} from './page_funs/auth';
// import {verb_fun} from './page_funs/verbs';
// import {bookcall_fun} from './page_funs/bookcall';
// import {memory_fun} from './page_funs/memory';
// import {pron_fun} from './page_funs/pron';
// import {vocab_fun} from './page_funs/vocab';


// 2. Import and initialize global firebase functionality
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithPopup, GoogleAuthProvider,
    onAuthStateChanged,FacebookAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS5E0sntq5dN0g7FlW0B69dhwJp_3f-b8",
  authDomain: "app.pineapplespanish.com",
  projectId: "pineapplespanish-ff90a",
  storageBucket: "pineapplespanish-ff90a.appspot.com",
  messagingSenderId: "237714081439",
  appId: "1:237714081439:web:2d1130801f978c4fe8c4aa",
  measurementId: "G-T0PYJE03ZZ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// 3. If current pathname is <name>, trigger that page's functionality
// whenever DOMContent is loaded (on page refresh or when new page is loaded)

const path = window.location.pathname;

onAuthStateChanged(auth,user=>console.log("User updated: ",user));

window.addEventListener('DOMContentLoaded', () => {


// For index.html and createaccount.html, run the auth_fun(). Every other page has seperate functionality.
    if (path.includes("index.html") || path==="/" || path.includes("createaccount.html")){

      //call imported auth_fun
        auth_fun(createUserWithEmailAndPassword,auth,
            signInWithEmailAndPassword,
            signInWithPopup,GoogleAuthProvider,
            FacebookAuthProvider);

    }
    // Conditionally import and execute page-specific functions (faster page load if conditional import)

    else if (path.includes("verbs.html")){
        import('./page_funs/verbs')
        .then(verb_fun => verb_fun())
        .catch(err=>console.log(err));
    }
    else if (path.includes("bookcall.html")){
        import('./page_funs/bookcall')
        .then(bookcall_fun => bookcall_fun())
        .catch(err=>console.log(err));
    }
    else if (path.includes("memory.html")){
        import('./page_funs/memory')
        .then(memory_fun=>memory_fun())
        .catch(err=>console.log(err));
    }
    else if (path.includes("pron.html")){
        import('./page_funs/pron')
        .then(pron_fun=>pron_fun())
        .catch(err=>console.log(err));
    }
    else if (path.includes("vocab.html")){
        import('./page_funs/vocab')
        .then(vocab_fun=>vocab_fun())
        .catch(err=>console.log(err));
    }

});








