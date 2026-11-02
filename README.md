# Fullstack Task Manager (MERN)

## **Overview**

The Fullstack Task Manager is a web-based application built to help teams organize, assign, and manage their daily tasks in one place. It provides separate features for administrators and team members, making it easier to manage users, track task progress, and communicate about assigned work.

Built with the MERN stack, the application includes user authentication, role-based access, task management, priority settings, sub-tasks, and a dashboard to monitor ongoing activities.

## **Problem Statement**

Managing team activities through spreadsheets, messages, or manual records can make it difficult to track responsibilities and deadlines. This application provides a centralized system where administrators can assign tasks, team members can update their progress, and everyone can access relevant task information.

## **Background**

As teams increasingly work on multiple projects simultaneously, keeping track of individual responsibilities becomes important. This project uses modern web technologies to provide a responsive platform for task organization and team coordination. It combines React, Redux Toolkit, Node.js, Express.js, and MongoDB to manage both frontend interactions and backend operations.

## **Admin Features**

1. **User Management**

   * Create and manage administrator accounts.
   * Add and manage team members.

2. **Task Assignment**

   * Assign tasks to individual users or multiple team members.
   * Edit task details and update task status.

3. **Task Management**

   * Organize tasks into To Do, In Progress, and Completed.
   * Set priority levels: High, Medium, Normal, and Low.
   * Create and manage sub-tasks.

4. **Asset Management**

   * Upload task-related files and images.

5. **Account Control**

   * Activate or deactivate user accounts.
   * Delete or move tasks to trash.

## **User Features**

1. **Task Management**

   * View assigned tasks and their details.
   * Update task status to In Progress or Completed.

2. **Communication**

   * Add comments to task activities.
   * Communicate through task-related discussions.

## **General Features**

1. **Authentication and Authorization**

   * Secure user login.
   * Role-based access for administrators and regular users.

2. **Profile Management**

   * View and update personal profile information.

3. **Password Management**

   * Change account passwords.

4. **Dashboard**

   * View task summaries and activity information.
   * Filter tasks by their current status.

## **Technologies Used**

**Frontend**

* React.js (Vite)
* Redux Toolkit
* Headless UI
* Tailwind CSS

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

## **Setup Instructions**

### **1. Server Setup**

**Environment Variables**

Create a `.env` file inside the `server` directory and add the following variables:

```env
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=8800
NODE_ENV=development
```

**MongoDB Configuration**

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create an account or log in.
3. Create a new cluster.
4. Select a cloud provider and region.
5. Create a database user.
6. Configure network access.
7. Copy your MongoDB connection string.
8. Add the connection string to your server `.env` file.

**Run the Server**

Open the terminal and execute:

```bash
cd server
npm install
npm start
```

## Website Preview

### Homepage
![Homepage](screenshots/homepage.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Login Page
![Login](screenshots/login.png)


The server should start successfully and connect to the MongoDB database.

### **2. Client Setup**

**Environment Variables**

Create a `.env` file inside the `client` directory:

```env
VITE_APP_BASE_URL=http://localhost:8800
VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
```

**Run the Client**

Open another terminal and execute:

```bash
cd client
npm install
npm start
```

Open your browser and visit:

```text
http://localhost:3000
```

## **Project Summary**

This project provides a centralized platform for managing team tasks, user accounts, and daily activities. It allows administrators to organize work and monitor progress while giving team members access to their assigned tasks and related discussions. The application demonstrates the use of full-stack web development technologies to build a practical task management system.
