import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch all users
export const fetchUsers = async (page, limit) => {
  try {
    const response = await axios.get(API_URL, {
      params: { _page: page, _limit: limit },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching users.");
  }
};

// Add a new user
export const addUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    throw new Error("Error adding user.");
  }
};

// Update a user
export const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  } catch (error) {
    throw new Error("Error updating user.");
  }
};

// Delete a user
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error("Error deleting user.");
  }
};
