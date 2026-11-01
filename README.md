AI-Powered Job Recommendation & Application Portal

A full-stack job portal that helps candidates discover relevant job
opportunities and manage applications. Recruiters can publish jobs and
review applications, while administrators can manage users and job
listings.

The project combines a React frontend, a Node.js/Express backend,
MongoDB, and a Python-based recommendation service.

Features

Candidate

Create an account and manage a profile.

Search and browse job listings.

Upload a resume.

Receive job recommendations based on profile skills and job
requirements.

Apply for jobs and track application status.

Recruiter

Create and manage job listings.

View applications submitted for posted jobs.

Update application statuses.

Administrator

View platform information and analytics.

Manage users.

Review job listings.

Authentication and files

JWT-based authentication.

Password hashing.

Password reset support.

File uploads using Cloudinary.

Technology

Area                                Technologies

Frontend                            React, Vite, Redux Toolkit, React
Router, Axios, Tailwind CSS

Backend                             Node.js, Express.js, Mongoose

Database                            MongoDB

Recommendation service              Python, scikit-learn

File storage                        Cloudinary

Authentication                      JWT, bcrypt

How the application works

A candidate creates a profile and adds their skills and experience.

Recruiters publish job listings with role details and required
skills.

The recommendation service compares candidate information with job
requirements.

Relevant jobs are returned to the candidate.

Candidates can apply and follow the status of their applications.

The recommendation workflow uses text processing, TF-IDF vectorization,
and cosine similarity, as described in the project design.

Project structure

AI-Powered-Job-Recommendation-Application-Portal/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── validators/
│   ├── package.json
│   └── vercel.json
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── store/
│   ├── package.json
│   └── vite.config.js
├── database/
│   ├── seed/
│   └── index.js
├── ml_api/
│   ├── routes/
│   ├── utils/
│   ├── main.py
│   └── requirements.txt
└── README.md

Getting started

Requirements

Install the following before running the project:

Node.js and npm

Python

MongoDB (local installation or MongoDB Atlas)

Git

1. Clone the repository

git clone <YOUR_REPOSITORY_URL>
cd AI-Powered-Job-Recommendation-Application-Portal

2. Install backend dependencies

cd backend
npm install

Create a backend/.env file and add the configuration values required
by the backend. These may include your MongoDB connection string, JWT
secrets, Cloudinary credentials, email service credentials, and the
recommendation API address.

3. Install frontend dependencies

Open another terminal from the project root:

cd client
npm install

Create a client/.env file for the frontend environment variables. For
a local setup, the API base URL should point to your running backend.
Check the frontend code for the exact variable name expected by the
application.

4. Install Python service dependencies

cd ml_api
python -m venv .venv

Activate the virtual environment on Windows:

.venv\Scripts\Activate.ps1

Install the packages:

pip install -r requirements.txt

Add any required environment configuration in a local .env file if the
service expects it.

5. Start the services

Run each service in its own terminal. Use the scripts defined in each
package.json to start the backend and frontend. Start the Python
recommendation service using the entry point and command configured in
the project.

If a command differs in your local setup, check the relevant
package.json or Python entry-point file.

Environment variables and security

This project needs local configuration files for secrets and service
URLs.

Do not upload .env files.

Do not commit API keys, database passwords, JWT secrets, or private
credentials.

Keep virtual environments such as .venv/ out of Git.

Use .env.example files with placeholder values if you want to
document the required settings.

If a real secret has already been pushed to a public repository, revoke
or rotate it.

Recommendation approach

The recommendation service is designed to compare candidate skills and
job requirements:

Prepare the candidate and job text.

Convert the text into TF-IDF vectors.

Calculate cosine similarity.

Rank jobs by similarity and return relevant results.

Repository notes

This repository contains the application source code. To run it locally,
configure the required database, API credentials, and service URLs
first.

Author

Atif Khan
