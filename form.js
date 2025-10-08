document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');
    const studentNameInput = document.getElementById('STUDENTNAME');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameerror');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Clear previous errors
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validate Student Name
        if (studentNameInput.value.trim() === '') {
            nameError.textContent = 'Student name is required.';
            isValid = false;
        } else if (studentNameInput.value.trim().length < 3) {
            nameError.textContent = 'Student name must be at least 3 characters.';
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Validate Password
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        } else if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); // Clear the form
        }
    });
});