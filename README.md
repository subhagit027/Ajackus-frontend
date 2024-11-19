User Management Dashboard
# User Management Web Application

This project is a simple web application that allows users to view, add, edit, and delete user details using a mock backend API (`JSONPlaceholder`). The application demonstrates CRUD operations and showcases error handling and responsive UI design.

---

## **Features**
- **View Users:** Displays a list of users with details such as ID, First Name, Last Name, Email, and Department.
- **Add Users:** Allows adding new user details to the backend.
- **Edit Users:** Enables editing existing user details.
- **Delete Users:** Supports deleting users by sending a request to the backend.
- **Error Handling:** Displays an error message if the API request fails.

---

## **Bonus Features (Optional)**
- Pagination or infinite scrolling for the user list.
- Client-side validation for the input form.
- Responsive design for mobile and desktop screens.

---

## **Technologies Used**
- **Frontend:** ReactJS, HTML, CSS
- **Backend:** JSONPlaceholder REST API
- **State Management:** React State
- **Styling:** CSS (or a library like Bootstrap/Tailwind, if used)

---

## **Setup and Installation**

### **Prerequisites**
1. Node.js and npm installed on your system.
2. Code editor (e.g., Visual Studio Code).

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-management-app.git
   cd user-management-app
View Users
The homepage displays a list of users fetched from the /users endpoint of JSONPlaceholder.
Add a User
Click the "Add User" button.
Fill in the form with user details (First Name, Last Name, Email, Department).
Submit the form to send a POST request to the API.
Edit a User
Click the "Edit" button next to a user.
Modify the fields in the form.
Submit the form to send a PUT request with the updated details.
Delete a User
Click the "Delete" button next to a user.
Confirm the action to send a DELETE request to the API.
