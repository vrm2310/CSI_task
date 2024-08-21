var emailInput = document.getElementById('email-input');
var submitIcon = document.getElementById('submit-icon');

function handleEmailInput(e) {
    e.preventDefault();
    var emailValue = emailInput.value;
    emailValue = emailValue.trim();
    console.log(emailValue);
    if(emailValue === '') {
        alert('Please enter a valid email address');
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        alert('Please enter a valid email address.');
    }
    console.log('Email submitted:', emailValue);
    alert('Thank you for registering!');
    emailInput.value = '';
}

submitIcon.addEventListener('click', handleEmailInput);
emailInput.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        handleEmailInput();
    }
});