import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
const [employeeDetail, setEmployeeDetail] = useState(null);
const [loading, setLoading] = useState(false);

const fetchData = () => {
setLoading(true);
fetch('https://jsonplaceholder.typicode.com/users/1') // Fetching details for a single employee
.then(response => response.json())
.then(userData => {
return Promise.all([
fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(response => response.json()),
fetch('https://jsonplaceholder.typicode.com/comments?postId=1').then(response => response.json())
])
.then(([postsData, commentsData]) => {
const employeePost = postsData[0];
const departmentName = userData.company.name;
const departmentHead = commentsData[0]?.name || 'No head assigned';

setEmployeeDetail({
name: userData.name,
post: employeePost?.title || 'No post assigned',
department: departmentName,
departmentHead,
});
})
.catch(error => {
console.error('Error fetching data:', error);
})
.finally(() => {
setLoading(false);
});
})
.catch(error => {
console.error('Error fetching data:', error);
setLoading(false);
});
};

return (
<div>
<h1>Employee Details</h1>
<button onClick={fetchData}>Load Employee Details</button>
{loading ? (
<p>Loading...</p>
) : (
employeeDetail && (
<div>
<p><strong>Employee name:</strong> {employeeDetail.name}</p>
<p><strong>Post:</strong> {employeeDetail.post}</p>
<p><strong>Department name:</strong> {employeeDetail.department}</p>
<p><strong>Department head:</strong> {employeeDetail.departmentHead}</p>
</div>
        )
      )}
</div>
  );
}

export default UserDashboard;
