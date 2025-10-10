# 🚀 Job Portal - Spring Boot & React Full Stack Application

A modern job portal application built with Spring Boot and React, enabling employers to post jobs and manage applications while allowing job seekers to search and apply for positions. Features include role-based access control, authentication, and resume uploads.

## 🛠️ Tech Stack

### Backend
- Java 17  
- Spring Boot 
- Spring Security
- Spring Data JPA
- MySQL
- Maven 

### Frontend
- React.js
- Redux
- Material-UI
- Axios
- React Router

## 📁 Project Structure

```
📦 jobportal-springboot-react
├── 📂 frontend
│   ├── 📂 public
│   │   ├── 📄 index.html
│   │   ├── 📄 favicon.ico
│   │   ├── 📄 manifest.json
│   │   ├── 📄 robots.txt
│   │   ├── 📄 logo192.png
│   │   └── 📄 logo512.png
│   ├── 📂 src
│   │   ├── 📂 pages
│   │   │   ├── 📄 AboutUs.jsx
│   │   │   ├── 📄 Contact.jsx
│   │   │   ├── 📄 Create.jsx
│   │   │   ├── 📄 Dashboard.jsx
│   │   │   ├── 📄 Feed.jsx
│   │   │   ├── 📄 Home.jsx
│   │   │   ├── 📄 SignIn.jsx
│   │   │   ├── 📄 SignUp.jsx
│   │   │   └── 📄 index.jsx
│   │   ├── 📄 App.js
│   │   ├── 📄 App.css
│   │   ├── 📄 index.js
│   │   └── 📄 index.css
│   ├── 📄 package.json
│   ├── 📄 package-lock.json
│   └── 📄 .gitignore
│
├── 📂 backend
│   ├── 📂 src
│   │   ├── 📂 main
│   │   │   ├── 📂 java
│   │   │   │   └── 📂 com
│   │   │   │       └── 📂 example
│   │   │   │           └── 📂 joblisting
│   │   │   │               ├── 📂 controller
│   │   │   │               │   └── 📄 PostController.java
│   │   │   │               ├── 📂 model
│   │   │   │               │   └── 📄 Post.java
│   │   │   │               ├── 📂 repository
│   │   │   │               │   ├── 📄 PostRepository.java
│   │   │   │               │   ├── 📄 SearchRepository.java
│   │   │   │               │   └── 📄 SearchRepositoryImpl.java
│   │   │   │               └── 📄 JoblistingApplication.java
│   │   │   └── 📂 resources
│   │   │       ├── 📂 static
│   │   │       ├── 📂 templates
│   │   │       └── 📄 application.properties
│   │   └── 📂 test
│   ├── 📄 pom.xml
│   ├── 📄 mvnw
│   ├── 📄 mvnw.cmd
│   └── 📄 .gitignore
│
└── 📄 README.md
```

## 🚀 Features

- 👥 User Authentication & Authorization
- 🔍 Job Search & Filtering
- 📝 Job Posting & Management
- 📄 Resume Upload & Management
- 📊 Application Tracking
- 📱 Responsive Design
- 🔒 Secure API Endpoints
- 📧 Email Notifications

## 🛠️ Setup & Installation

### Backend Setup
1. Clone the repository
2. Navigate to the backend directory
3. Configure MySQL database in `application.properties`
4. Run the following commands:
```bash
mvn clean install
mvn spring-boot:run
```

### Frontend Setup
1. Navigate to the frontend directory
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm start
```

## 🔧 Environment Variables

### Backend
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/jobportal
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

### Frontend
```env
REACT_APP_API_URL=http://localhost:8080/api
```

## 🤝 Contributing

We welcome contributions to improve the Job Portal! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing code style.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Hariharan S** - *Initial work* - [HARIHARANS24](https://github.com/HARIHARANS24)

## 🙏 Acknowledgments

- Spring Boot Team
- React Team
- Material-UI Team
- All contributors who have helped shape this project 
