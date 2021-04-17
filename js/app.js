// Variable
 const sendBtn = document.getElementById('sendBtn'),
       email = document.getElementById('email'),
       subject = document.getElementById('subject'),
       message = document.getElementById('message');

// Event Listeners
eventListeners();

function eventListeners(){
    // App Init
    document.addEventListener('DOMContentLoaded',appInit);

    // Validate the form
    email.addEventListener('blur',validateField);
    subject.addEventListener('blur',validateField);
    message.addEventListener('blur',validateField);

}

// function
function appInit(){
    sendBtn.disabled = true;
}
// Validate  Fields
function validateField(){
    let errors;

    // Validate the Length of the Field
    validateLength(this)
}