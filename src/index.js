// 1. Import all page-specific functions
import {$,jQuery} from 'jquery';
import {auth_fun,weirdass} from './page_funs/auth';
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
    if (path.includes("index.html")){
        console.log("Index fired")
      //call imported auth_fun
        auth_fun(createUserWithEmailAndPassword,auth);
      //execute weird-ass jquery function
     
(function ($) {
  "use strict";


   /*==================================================================
  [ Focus input ]*/
  $('.input100').each(function(){
      $(this).on('blur', function(){
          if($(this).val().trim() != "") {
              $(this).addClass('has-val');
          }
          else {
              $(this).removeClass('has-val');
          }
      })    
  })


  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit',function(){
      var check = true;

      for(var i=0; i<input.length; i++) {
          if(validate(input[i]) == false){
              showValidate(input[i]);
              check=false;
          }
      }

      return check;
  });


  $('.validate-form .input100').each(function(){
      $(this).focus(function(){
         hideValidate(this);
      });
  });

  function validate (input) {
      if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
              return false;
          }
      }
      else {
          if($(input).val().trim() == ''){
              return false;
          }
      }
  }

  function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
  }
  
  

})(jQuery);
    }
    else if (path.includes("verbs.html")){verb_fun()}
    else if (path.includes("bookcall.html")){bookcall_fun()}
    else if (path.includes("memory.html")){memory_fun()}
    else if (path.includes("pron.html")){pron_fun()}
    else if (path.includes("vocab.html")){vocab_fun()}


});








