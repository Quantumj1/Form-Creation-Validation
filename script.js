// Ensure all DOM-dependent code runs after the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
	'use strict';
		// Select the registration form and feedback container after the DOM is ready
		const form = document.getElementById('registration-form');
		const feedbackDiv = document.getElementById('form-feedback');
			// Select individual input fields
			const usernameInput = document.getElementById('username');
			const emailInput = document.getElementById('email');
			const passwordInput = document.getElementById('password');

		// Place any further initialization, event listeners, or DOM queries below.
				if (form) {
					form.addEventListener('submit', function(event) {
						// Prevent the form from submitting to the server so we can run client-side validation
						event.preventDefault();

						// Read trimmed values from inputs and store in constants
						const username = (usernameInput ? usernameInput.value : '').trim();
						const email = (emailInput ? emailInput.value : '').trim();
						const password = (passwordInput ? passwordInput.value : '').trim();

						// Track validation state and messages
						let isValid = true;
						const messages = [];

						// Username length validation
						if (username.length < 3) {
							isValid = false;
							messages.push('Username must be at least 3 characters long.');
						}

						// Email basic format validation: must include '@' and '.'
						if (!email.includes('@') || !email.includes('.')) {
							isValid = false;
							messages.push('Email must contain an "@" and a domain (e.g. example.com).');
						}

						// Password length validation
						if (password.length < 8) {
							isValid = false;
							messages.push('Password must be at least 8 characters long.');
						}

						// Render feedback
						if (feedbackDiv) {
							feedbackDiv.style.display = 'block';
							if (isValid) {
								feedbackDiv.textContent = 'Registration successful!';
								feedbackDiv.style.color = '#28a745';
							} else {
								feedbackDiv.innerHTML = messages.join('<br>');
								feedbackDiv.style.color = '#dc3545';
							}
						}
					});
				}

});

