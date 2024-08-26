import {Link} from 'react-router-dom';

function Login() {
return(
<div>
<h2>Login</h2>
<ul>
<li>
<Link to="/login/user">User Login</Link>
</li>
<li>
<Link to="/login/admin">Admin Login</Link>
</li>
</ul>
</div>
);
}

export default Login;