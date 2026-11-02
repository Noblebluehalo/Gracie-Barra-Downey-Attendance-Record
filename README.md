🥋 Jiu Jitsu Academy Tracker

A lightweight, full-stack web application designed for Jiu Jitsu academies to manage their student roster and track daily class attendance.

✨ Features

Student Management: Add new students, assign belt ranks (White to Black), and view your complete academy roster.

Attendance Tracking: Easily select students from your roster and record their attendance for specific class types (e.g., Gi Fundamentals, No-Gi, Open Mat).

History Dashboard: View a complete history of past classes, seeing exactly who attended and when.

Clean UI: A modern, dark-themed interface optimized for quick data entry.

🛠️ Tech Stack

Frontend: React.js, Lucide Icons

Backend: Node.js, Express.js

Database: SQLite (Zero-configuration, lightweight relational database)

📁 Project Structure

This repository contains two main directories:

/jitsu-backend - The Node.js API and SQLite database setup.

/jitsu-frontend - The React user interface.

🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites

You will need to have Node.js installed on your computer.

1. Backend Setup

Open a terminal window and navigate to the backend folder to start the server:

# Navigate to the backend directory
cd jitsu-backend

# Install dependencies
npm install

# Start the server (runs on http://localhost:5000)
node server.js


Note: The SQLite database file (jitsu.db) will be created automatically the first time you run the server.

2. Frontend Setup

Open a second terminal window, navigate to the frontend folder, and start the React app:

# Navigate to the frontend directory
cd jitsu-frontend

# Install dependencies
npm install

# Start the development server (runs on http://localhost:3000)
npm start


📝 Usage

Open your browser and go to http://localhost:3000.

Navigate to the Students tab to add a few students to your roster.

Go to the Record Attendance tab, select a date, class type, and check off the students who attended.

Check the History tab to see your saved records!

🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

📄 License

This project is open source and available under the MIT License.