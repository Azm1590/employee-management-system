import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import UserLogin from './components/UserLogin'; 
import AdminLogin from './components/AdminLogin'; 
import PrivacyPolicyAndTerms from './components/PrivacyPolicyAndTerms';

function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);

return (
<Router>
<div>
<img src="ashish.jpg" alt="Company logo" />
<nav>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/login">Login</Link></li>
<li><Link to="/dashboard">Dashboard</Link></li>
</ul>
</nav>
</div>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/login/user" element={<UserLogin setIsAuthenticated={setIsAuthenticated} />} />
<Route path="/login/admin" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
<Route path="/userdashboard" element={isAuthenticated ? <UserDashboard /> : <Login />} />
<Route path="/admindashboard" element={isAuthenticated ? <AdminDashboard /> : <Login />} />
<Route path="/privacy" element={<PrivacyPolicyAndTerms />} />
</Routes>
      
<footer>
<p>&copy; My Software Company. All rights reserved.</p>
<Link to="/privacy">Privacy policy and terms and conditions </Link>
</footer>
</Router>
  );
}

export default App;
