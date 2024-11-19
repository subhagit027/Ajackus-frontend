

let users = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", department: "IT" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", department: "HR" },
    { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice@example.com", department: "Finance" },
  ];
  
  /**
   * Simulates a delay for API calls.
   * @param {number} ms - Milliseconds to delay.
   */
  const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  /**
   * Fetches all users.
   * @returns {Promise<Array>} List of users.
   */
  export const getUsers = async () => {
    await simulateDelay(500); // Simulating network latency
    return users;
  };
  
  /**
   * Adds a new user.
   * @param {Object} user - New user data.
   * @returns {Promise<Object>} The newly added user.
   */
  export const addUser = async (user) => {
    await simulateDelay(500);
    const newUser = { id: users.length + 1, ...user };
    users.push(newUser);
    return newUser;
  };
  
  /**
   * Updates an existing user.
   * @param {number} id - ID of the user to update.
   * @param {Object} updatedData - Updated user data.
   * @returns {Promise<Object>} The updated user.
   */
  export const updateUser = async (id, updatedData) => {
    await simulateDelay(500);
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error("User not found");
    }
    users[index] = { ...users[index], ...updatedData };
    return users[index];
  };
  
  /**
   * Deletes a user by ID.
   * @param {number} id - ID of the user to delete.
   * @returns {Promise<void>}
   */
  export const deleteUser = async (id) => {
    await simulateDelay(500);
    users = users.filter((user) => user.id !== id);
  };
  