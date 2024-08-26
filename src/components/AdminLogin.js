import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function AdminLogin({ setIsAuthenticated }) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');
const navigate = useNavigate();

const handleLogin = (e) => {
e.preventDefault();
if (username === 'Ashish' && password === 'Ashish') {
setIsAuthenticated(true);
setMessage('You are logged in!');
setTimeout(() => navigate('/dashboard'), 1000); 
} else {
setMessage('Invalid username or password');
}
};

return (
<div>
<h2>Admin Login</h2>
<form onSubmit={handleLogin}>
<div>
<label>Username:</label>
<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
</div>
<div>
<label>Password:</label>
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</div>
<button type="submit">Login</button>
</form>
{message && <p>{message}</p>}
</div>
  );
}

export default AdminLogin;
