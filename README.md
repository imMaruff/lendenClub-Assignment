This project is a Secure User Profile & Access Control System developed as part of the Full Stack evaluation.
It demonstrates secure authentication, encrypted data storage, and role-based protected access using modern backend and frontend technologies.

The system allows users to:

Register securely with sensitive identity information

Authenticate using JWT-based login

Access their profile through a protected dashboard

Ensure sensitive data is encrypted at rest and decrypted only when required

#Technology Stack
Backend

Java

Spring Boot

Spring Security

JWT (JSON Web Token)

MongoDB

BCrypt (Password Hashing)

AES Encryption (Sensitive Data)

Frontend

React.js

Axios

React Router

#Key Features

User Registration & Login

JWT-based Stateless Authentication

Encrypted Aadhaar/ID storage at database level

Secure Profile API (/profile/me)

Protected frontend routes

CORS-enabled backend for frontend communication

Full Stack integration (React + Spring Boot)

#Application Flow

User registers with username, email, password, and Aadhaar

Password is hashed using BCrypt

Aadhaar is encrypted using AES before database storage

User logs in using valid credentials

Backend issues a JWT token

JWT is sent in Authorization header for protected requests

Profile data is fetched securely and Aadhaar is decrypted only for response

#API Endpoints
Register User
POST /auth/register


Request Body:

{
  "username": "user1",
  "email": "user1@gmail.com",
  "password": "password123",
  "aadhaar": "123456789012"
}

Login User
POST /auth/login


Request Body:

{
  "username": "user1",
  "password": "password123"
}


Response:

{
  "token": "<JWT_TOKEN>"
}

Fetch User Profile (Protected)
GET /profile/me
Authorization: Bearer <JWT_TOKEN>


Response:

{
  "username": "user1",
  "email": "user1@gmail.com",
  "aadhaar": "123456789012"
}

 Database Details

Database: MongoDB
Collection: users

Field Name	Description
_id	Unique identifier
username	Username
email	Email address
password	BCrypt hashed password
aadhaarEncrypted	AES encrypted Aadhaar/ID
role	User role

Sensitive fields are encrypted before storage and never stored in plaintext.

#Security Design

Passwords are stored using BCrypt hashing

Aadhaar/ID numbers are encrypted using AES before database persistence

JWT tokens are used for stateless authentication

User identity is derived from SecurityContext, not request parameters

Protected APIs require valid JWT tokens

CORS configuration allows frontend access securely

#AI Tool Usage Log
AI Tools Used

ChatGPT

AI-Assisted Areas

JWT authentication structure

AES encryption/decryption utility

Spring Security configuration

CORS configuration guidance

React component structure

Debugging configuration and integration issues

Effectiveness Score

4 / 5

Justification:
AI tools significantly reduced development time by providing secure boilerplate code and debugging guidance. Manual effort was still required for integration, testing, and configuration validation.
