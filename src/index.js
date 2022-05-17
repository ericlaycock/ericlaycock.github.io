import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";
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


const signupForm = document.querySelector('.signup');

signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const em = signupForm.email.value;
    const pw = signupForm.password.value;

    createUserWithEmailAndPassword(auth,em,pw)
    .then(cred => console.log('user created:',cred.user))
    .catch(err=>console.log(err.message)); 


});



// const colRef = collection(db,'auth_keys');
// getDocs(colRef).then(snapshot => console.log(snapshot.docs));

