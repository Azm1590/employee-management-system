function AdminDashboard() {
const addEmployee = () => {
console.log('Add employee button clicked');
};

const removeEmployee = () => {
console.log('Remove employee button clicked');
};

const addManager = () => {
console.log('Add manager button clicked');
};

const removeManager = () => {
console.log('Remove manager button clicked');
};

const addDepartment = () => {
console.log('Add department button clicked');
};

const removeDepartment = () => {
console.log('Remove department button clicked');
};

const assignEmployeeToDepartment = () => {
console.log('Assign employee to department button clicked');
};

const removeEmployeeFromDepartment = () => {
console.log('Remove employee from department button clicked');
};

const addSalary = () => {
console.log('Add salary button clicked');
};

const removeSalary = () => {
console.log('Remove salary button clicked');
};

const modifyDetails = () => {
console.log('Modify employee details button clicked');
};

return (
<div>
<h2>Admin Dashboard</h2>
<button onClick={addEmployee}>Add employee</button>
<br />
<button onClick={removeEmployee}>Remove employee</button>
<br />
<button onClick={addManager}>Add manager</button>
<br />
<button onClick={removeManager}>Remove manager</button>
<br />
<button onClick={addDepartment}>Add Department</button>
<br />
<button onClick={removeDepartment}>Remove Department</button>
<br />
<button onClick={assignEmployeeToDepartment}>Assign Employee to the Department</button>
<br />
<button onClick={removeEmployeeFromDepartment}>Remove Employee From Department</button>
<br />
<button onClick={addSalary}>Add Salary</button>
<br />
<button onClick={removeSalary}>Remove Salary</button>
<br />
<button onClick={modifyDetails}>Modify Employee Details</button>
</div>
);
}

export default AdminDashboard;
