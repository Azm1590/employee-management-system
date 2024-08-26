import {Link} from 'react-router-dom';

function Dashboard() {
return(
<div>
<ul>
<li>
<Link to="/userdashboard">User Dashboard</Link>
</li>
<li>
<Link to="/admindashboard">Admin Dashboard</Link>
</li>
</ul>
</div>
);
}

export default Dashboard;