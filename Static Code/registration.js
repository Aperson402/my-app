document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const messageElement = document.getElementById("register-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("register-username").value;
        const password = document.getElementById("register-password").value;
        const messageElement = document.getElementById("register-message");

        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                messageElement.innerText = 'Registration successful! Redirecting to sign-in...';
                messageElement.style.color = 'green';
                setTimeout(() => {
                    window.location.href = 'forum.html';
                }, 2000);
            } else {
                messageElement.innerText = `Error: ${data.message}`;
                messageElement.style.color = 'red';
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
