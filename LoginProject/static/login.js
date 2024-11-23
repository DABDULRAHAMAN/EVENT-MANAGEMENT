function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        document.getElementById('message').innerText = 'Please fill out all fields.';
        return;
    }

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerText = 'Login successful!';
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerText = 'Invalid credentials. Try again.';
        }
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Error connecting to server.';
        console.error('Error:', error);
    });
}
