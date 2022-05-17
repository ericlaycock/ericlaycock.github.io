// 1. Import all page-specific functions
import {auth_fun} from './page_funs/auth';
import {verb_fun} from './page_funs/verbs';
import {bookcall_fun} from './page_funs/bookcall';
import {memory_fun} from './page_funs/memory';
import {pron_fun} from './page_funs/pron';
import {vocab_fun} from './page_funs/vocab';

// 2. Import and initialize global firebase functionality
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS5E0sntq5dN0g7FlW0B69dhwJp_3f-b8",
  authDomain: "pineapplespanish-ff90a.firebaseapp.com",
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

window.addEventListener('DOMContentLoaded', () => {
  console.log("Path is:",path);
    if      (path==="/docs/index.html"){auth_fun(createUserWithEmailAndPassword,auth)}
    else if (path==="/docs/verbs.html"){verb_fun()}
    else if (path==="/docs/bookcall.html"){bookcall_fun()}
    else if (path==="/docs/memory.html"){memory_fun()}
    else if (path==="/docs/pron.html"){pron_fun()}
    else if (path==="/docs/vocab.html"){vocab_fun()}


});








