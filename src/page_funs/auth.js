const auth_fun = (createUserWithEmailAndPassword,auth,
    signInWithEmailAndPassword,
    signInWithPopup,GoogleAuthProvider) => {

    const loginForm = document.querySelector('.login100-form');
    const createForm = document.querySelector('.login100-formCA');
    const g_signin = document.querySelector('.g_signin');


    console.log("Auth is running");

    // Steps 1 and 2 are for index.html (the login page)

    //1. Login functionality
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const em = loginForm.email.value;
            const password = loginForm.password.value;

            signInWithEmailAndPassword(auth,em,password)
            .then(cred=>{
                console.log(cred);
                window.location.href = "./verbs.html";  
            })
            .catch(err=>console.log("Error:",err.message));

        });

    //2. Google Sign-in/Create-Account
    console.log(g_signin);
        g_signin.addEventListener('click', e => {
            console.log("g_signin 1");

            e.preventDefault();

            const provider = new GoogleAuthProvider();
            console.log("g_signin 2");

            signInWithPopup(auth, provider)
            .then((result) => {
                console.log("g_signin 3");
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                window.location.href = "./verbs.html";  
                const token = credential.accessToken;
                 // The signed-in user info.
                const user = result.user;
                 // ...
            }).catch((error) => {
                console.log(error.message);
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.email;
                // // The AuthCredential type that was used.
                //  const credential = GoogleAuthProvider.credentialFromError(error);
                 // ...
         });
        });



    

    // 3. Create new account (for createaccount.html)


    createForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        const em = createForm.email.value;
        const pw = createForm.password.value;

        createUserWithEmailAndPassword(auth,em,pw)
        .then(cred => {
            window.location.href = "./verbs.html";    
        })
        .catch(err=>console.log(err.message));
    })
};



export {auth_fun};