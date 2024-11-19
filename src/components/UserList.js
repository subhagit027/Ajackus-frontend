import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../utils/api";
import UserForm from "./UserForm";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [formUser, setFormUser] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(5); // Number of users per page

  const loadUsers = async () => {
    try {
      setError(null);
      const data = await fetchUsers(page, limit);
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (user) => {
    setFormUser(user);
  };

  const handleFormSubmit = () => {
    loadUsers();
    setFormUser(null);
  };

  return (
    <div>
      <h2>User List</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      {formUser && (
        <UserForm
          user={formUser}
          onClose={() => setFormUser(null)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default UserList;
