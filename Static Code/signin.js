
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signin-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("signin-username").value;
        const password = document.getElementById("signin-password").value;
        const messageElement = document.getElementById("signin-message");

        fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            const messageElement = document.getElementById("signin-message");
            if (data.success) {
                messageElement.innerText = 'Sign-in successful!';
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
