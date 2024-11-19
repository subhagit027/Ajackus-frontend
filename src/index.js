import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getUsers, addUser, updateUser, deleteUser } from "./utils/mockApi";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ id: null, firstName: "", lastName: "", email: "", department: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch users when the component loads
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle user addition
  const handleAddUser = async () => {
    const newUser = await addUser(form);
    setUsers([...users, newUser]);
    resetForm();
  };

  // Handle user update
  const handleUpdateUser = async () => {
    const updatedUser = await updateUser(form.id, form);
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    resetForm();
    setIsEditing(false);
  };

  // Handle user deletion
  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  // Reset the form
  const resetForm = () => {
    setForm({ id: null, firstName: "", lastName: "", email: "", department: "" });
  };

  // Populate the form for editing
  const populateFormForEdit = (user) => {
    setForm(user);
    setIsEditing(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>User Management</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>{isEditing ? "Edit User" : "Add User"}</h2>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          placeholder="Last Name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department"
          value={form.department}
          placeholder="Department"
          onChange={handleInputChange}
        />
        <button onClick={isEditing ? handleUpdateUser : handleAddUser}>
          {isEditing ? "Update" : "Add"}
        </button>
        {isEditing && <button onClick={resetForm}>Cancel</button>}
      </div>

      <h2>User List</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>
                <button onClick={() => populateFormForEdit(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
