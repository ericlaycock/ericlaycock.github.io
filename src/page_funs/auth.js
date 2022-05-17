const auth_fun = (createUserWithEmailAndPassword,auth) => {

    const signupForm = document.querySelector('.signup');

    signupForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        const em = signupForm.email.value;
        const pw = signupForm.password.value;

        createUserWithEmailAndPassword(auth,em,pw)
        .then(cred => console.log('user created:',cred.user))
        .catch(err=>console.log(err.message)); 


    })
};


export {auth_fun};