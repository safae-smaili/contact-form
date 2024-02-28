
function send(event){
    
    //const name=document.forms["contacte"]["name"].value;
    const name = document.querySelector('input[name="name"]');
    const email=document.querySelector('input[name="email"]');
    //const number=document.querySelector('input[name="number"]');
    const message=document.querySelector('textarea[name="message"]');
    if(name.value.trim()===""){
        sendErrormessage(name.parentElement,"Please enter your name");
        isValid = false;
    }else{
        removeError(name.parentElement);
        isValid=true;
    }
    if(email.value.trim()===""){
        sendErrormessage(email.parentElement,"Please enter a valide email");
        isValid = false;
    }else{
        removeError(email.parentElement);
        isValid=true;
    
    }
    if(message.value.trim()===""||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){
        sendErrormessage(message.parentElement,"Please write your message");
        isValid = false;
    }else{
        removeError(message.parentElement)
        isValid=true;
    }
    if(!isValid){
        event.preventDefault();// Prevent form submission
    }
    
}
function sendErrormessage(position,text){
    if(position.querySelector("p")){
    removeError(position);}
    const errorMessage=document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent=text;
    
    
    position.insertAdjacentElement("beforeend",errorMessage);
    

}
function removeError(position) {
            // Remove any existing error message
            const errorElement = position.lastElementChild;
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.remove();
            }
        }














































// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent default form submission

//         // Perform form validation
//         const nameInput = document.querySelector('input[name="name"]');
//         const emailInput = document.querySelector('input[name="email"]');
//         const numberInput = document.querySelector('input[name="number"]');
//         const websiteInput = document.querySelector('input[name="website"]');
//         const messageInput = document.querySelector('#message');

//         let isValid = true;

//         // Validate name
//         if (nameInput.value.trim() === '') {
//             displayError(nameInput, 'Please enter your name            .');
//             isValid = false;
//         } else {
//             removeError(nameInput);
//         }

//         // Validate email
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(emailInput.value.trim())) {
//             displayError(emailInput, 'Please enter a valid email address.');
//             isValid = false;
//         } else {
//             removeError(emailInput);
//         }

//         // Validate number (you can add more specific validation if needed)
//         if (numberInput.value.trim() === '') {
//             displayError(numberInput, 'Please enter your phone number    .');
//             isValid = false;
//         } else {
//             removeError(numberInput);
//         }

//         // Validate website
//         // Add your validation logic for website input if needed

//         // Validate message
//         if (messageInput.value.trim() === '') {
//             displayError(messageInput, 'Please enter your message        .');
//             isValid = false;
//         } else {
//             removeError(messageInput);
//         }

//         // If form is valid, submit it
//         if (isValid) {
//             form.submit();
//         }
//     });

//     function displayError(inputElement, errorMessage) {
//         // Remove any existing error message
//         removeError(inputElement);

//         // Create error message element
//         const errorElement = document.createElement('span');
//         errorElement.classList.add('error-message');
//         errorElement.textContent = errorMessage;

//         // Insert error message after the input element
//         inputElement.insertAdjacentElement("afterend",errorElement);
//     }

//     function removeError(inputElement) {
//         // Remove any existing error message
//         const errorElement = inputElement.nextElementSibling;
//         if (errorElement && errorElement.classList.contains('error-message')) {
//             errorElement.remove();
//         }
//     }
// });

