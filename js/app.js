// Variable
 const sendBtn = document.getElementById('sendBtn');

// Event Listeners
eventListeners();

function eventListeners(){
    // App Init
    document.addEventListener('DOMContentLoaded',appInit);
}



// function
function appInit(){
    sendBtn.disabled = true;
}