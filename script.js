const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errorText = document.getElementById('errorText');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
        form.classList.add('invalid');
        errorText.textContent = "Please enter an email address";
    } else if (!validateEmail(emailValue)) {
        form.classList.add('invalid');
        errorText.textContent = "Please provide a valid email";
    } else {
        form.classList.remove('invalid');
        alert('Thank you for subscribing!');
        form.reset();
    }
});

emailInput.addEventListener('input', () => {
    if (form.classList.contains('invalid')) {
        form.classList.remove('invalid');
    }
});