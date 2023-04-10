const submit = document.getElementById("submit");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const myForm = document.querySelector('#sign-up-form');

myForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  

submit.addEventListener("click", function(){
    if(password.value !== confirmPassword.value){
        password.classList.add('error');
        confirmPassword.classList.add('error');
    }
    else{
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
    }
    
})
    event.preventDefault();
})