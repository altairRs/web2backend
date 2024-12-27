const fetch = require('node-fetch');

// GET Request
fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => console.log('GET /users:', data))
    .catch(err => console.error('Error:', err));

// POST Request
fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: 'JohnDoe',
        email: 'john@example.com',
        password: 'securepassword',
    }),
})
    .then(response => response.json())
    .then(data => console.log('POST /users:', data))
    .catch(err => console.error('Error:', err));

// PUT Request
fetch('http://localhost:3000/users/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'updated@example.com' }),
})
    .then(response => response.json())
    .then(data => console.log('PUT /users/1:', data))
    .catch(err => console.error('Error:', err));

// DELETE Request
fetch('http://localhost:3000/users/1', { method: 'DELETE' })
    .then(response => {
        if (response.status === 204) {
            console.log('DELETE /users/1: User deleted successfully');
        } else {
            return response.json();
        }
    })
    .catch(err => console.error('Error:', err));
