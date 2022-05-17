const auth_fun = (createUserWithEmailAndPassword,auth) => {

    const signupForm = document.querySelector('.login100-form');
    console.log(signupForm)

    //TODO: add login functionality

    //TODO: add onAuthStateChanged state changed

    //TODO: add Google login functionality

    //TODO: add Google create account functionality


    signupForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        const em = signupForm.email.value;
        const pw = signupForm.password.value;

        createUserWithEmailAndPassword(auth,em,pw)
        .then(cred => {
            console.log('user created:',cred.user)
            window.location.href = "./verbs.html";    
        })
        .catch(err=>console.log(err.message));
    })
};



export {auth_fun};