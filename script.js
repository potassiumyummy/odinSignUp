const form = document.getElementById('signupForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        password.setCustomValidity('Passwords do not match');
        confirmPassword.setCustomValidity('Passwords do not match');
    } else {
        password.setCustomValidity('');
        confirmPassword.setCustomValidity('');
    }
    password.reportValidity();
});
