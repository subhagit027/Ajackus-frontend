import React, { useState } from "react";
import { addUser, updateUser } from "../utils/api";

const UserForm = ({ user = {}, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      if (user.id) {
        await updateUser(user.id, form);
      } else {
        await addUser(form);
      }
      onSubmit();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h3>{user.id ? "Edit User" : "Add User"}</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit">{user.id ? "Update" : "Add"}</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserForm;
