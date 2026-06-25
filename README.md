# Employee Management System

A Full-Stack Employee Management System developed using **Spring Boot**, **React.js**, and **MySQL**. This application helps organizations efficiently manage employee records through a modern web interface with complete CRUD functionality.

## 🚀 Features

- Add new employees
- View employee details
- Update employee information
- Delete employee records
- RESTful API integration
- Responsive user interface
- Real-time data management
- MySQL database connectivity
- Separation of frontend and backend architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Axios

### Backend
- Java Spring Boot
- Spring Data JPA
- REST API

### Database
- MySQL

### Development Tools
- Eclipse IDE (Backend Development)
- Visual Studio Code (Frontend Development)
- MySQL Workbench

---

## 📂 Project Structure

```text
Employee-Management-System/
│
├── backend/
│   ├── src/main/java
│   ├── src/main/resources
│   ├── pom.xml
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Prerequisites

Make sure the following software is installed:

- Java JDK 17 or later
- Maven
- Node.js
- npm
- MySQL Server
- Eclipse IDE
- Visual Studio Code

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/DHANAVANTHAN-A/Employee-Management-System.git
cd Employee-Management-System
```

---

## 🔧 Backend Setup (Spring Boot)

### Open Backend in Eclipse

1. Launch Eclipse IDE.
2. Select **Import Existing Maven Project**.
3. Choose the backend folder.
4. Wait for Maven dependencies to download.

### Configure Database

Create a MySQL database:

```sql
CREATE DATABASE employee_management;
```

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Run Backend

```bash
mvn spring-boot:run
```

Backend will start at:

```text
http://localhost:8080
```

---

## 💻 Frontend Setup (React.js)

### Open Frontend in VS Code

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React application:

```bash
npm start
```

or

```bash
npm run dev
```

Frontend will start at:

```text
http://localhost:3000
```

or

```text
http://localhost:5173
```

depending on the configuration.

---

## 🔗 API Integration

The React frontend communicates with the Spring Boot backend using REST APIs.

Example:

```javascript
axios.get("http://localhost:8080/api/employees");
```

---

## 📸 Application Modules

- Employee Registration
- Employee Listing
- Employee Update
- Employee Deletion
- Database Management
- REST API Communication

---

## 🎯 Future Enhancements

- User Authentication & Authorization
- Role-Based Access Control
- Search and Filtering
- Pagination
- Employee Attendance Management
- Payroll Management
- Dashboard Analytics

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Create a Pull Request

---

## 📜 License

This project is developed for educational and learning purposes.

---

## 👨‍💻 Author

**Dhanavanthan A**

GitHub: https://github.com/DHANAVANTHAN-A
