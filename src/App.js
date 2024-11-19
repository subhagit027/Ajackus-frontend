import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { getUsers, addUser, updateUser, deleteUser } from "./mockApi";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleAddUser = (user) => {
    if (selectedUser) {
      updateUser(selectedUser.id, user).then(() => {
        setUsers((prev) =>
          prev.map((u) => (u.id === selectedUser.id ? { ...u, ...user } : u))
        );
        setSelectedUser(null);
      });
    } else {
      addUser(user).then((newUser) => setUsers((prev) => [...prev, newUser]));
    }
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() =>
      setUsers((prev) => prev.filter((user) => user.id !== id))
    );
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSubmit={handleAddUser} selectedUser={selectedUser} />
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
    </div>
  );
};

export default App;
