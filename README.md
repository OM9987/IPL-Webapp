# 🏏 IPL Stats Dashboard

A comprehensive full-stack web application that provides detailed statistics about IPL matches, top players, and match data within specific date ranges.

![Screenshot of IPL Dashboard](https://github.com/user-attachments/assets/7dd228e8-10cd-42bf-b1d7-f3e339ab3588)
![Player Statistics View](https://github.com/user-attachments/assets/c69813d1-7fb9-464b-8dbb-483fd71c8d78)
![Match Details View](https://github.com/user-attachments/assets/9ccda033-0c23-4a25-a61b-f6e849f20987)
![Date Range Filter](https://github.com/user-attachments/assets/d40524e4-360e-4391-a436-eab9e7eaf607)

## 📋 Table of Contents
- [Features](#-features)
- [Project Overview](#-project-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Backend (.NET Core)](#-backend-net-core)
- [Frontend (React)](#-frontend-react)
- [Database (PostgreSQL)](#-database-postgresql)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Features

- **Match Statistics**: View detailed statistics of IPL matches, including match date, venue, teams, and total engagements
- **Top Players**: Discover the top players based on matches played
- **Matches by Date Range**: Filter and view matches based on user-specified date ranges
- **Add Players**: Easily add new players to the database via a user-friendly form
- **Responsive Design**: Optimized for all devices, ensuring a seamless experience on both desktop and mobile

## 🔍 Project Overview

**Title**: IPL_Webapp
**Description**: A full-stack web application built using PostgreSQL as the backend database, ASP.NET Core as the middleware, and React as the frontend framework.

## 💻 Tech Stack

- **Frontend**: React 18.3.1
- **Backend**: .NET Core 3.1.12
- **Database**: PostgreSQL 16
- **UI Libraries**: 
  - Bootstrap 5.3.3
  - Font Awesome 6.6.0

## 📁 Project Structure

The project is divided into two main folders:

```
ipl-stats-dashboard/
├── Backend/           # Contains all the ASP.NET files
│   ├── Controllers/   # API controllers for handling requests
│   ├── Models/        # Data models representing database entities
│   └── ...
│
├── client/            # Contains all the React files
│   ├── src/
│   │   ├── components/  # React components
│   │   │   ├── Home/
│   │   │   ├── MatchDetails/
│   │   │   ├── TopPlayers/
│   │   │   ├── MatchesByDateRange/
│   │   │   └── Form/
│   │   │
│   │   ├── App.js      # Main application routing
│   │   └── ...
│   └── ...
└── ...
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed
- **.NET Core SDK**: Required for running the backend
- **PostgreSQL**: The database system used for storing match and player data

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/OM9987/IPL-Webapp.git
   cd ipl-stats-dashboard
   ```

2. **Install Frontend Dependencies**:
   ```bash
   cd client
   npm install
   ```

3. **Run the Frontend**:
   ```bash
   npm start
   ```

4. **Run the Backend**:
   - Open the .NET Core project in your preferred IDE (e.g., Visual Studio)
   - Restore the dependencies and run the project

5. **Database Setup**:
   - Make sure your PostgreSQL server is running
   - Update the connection strings in `appsettings.json` to match your PostgreSQL credentials

## 🖥️ Backend (.NET Core)

- **.NET Version**: 8.0.14
- **Database**: PostgreSQL 16

The backend is responsible for handling all database operations, including CRUD (Create, Read, Update, Delete) operations. It also serves as the middleware, handling requests and responses between the frontend and database.

Key components:
- RESTful API endpoints to fetch match statistics, top players, and matches by date range
- Controllers to handle incoming requests
- Data models representing the entities in the database

## 🎨 Frontend (React)

- **React Version**: ^18.3.1
- **UI Libraries**: 
  - Bootstrap: ^5.3.3
  - Font Awesome: ^6.6.0

The frontend is built using React, a popular JavaScript library for building user interfaces. It handles all client-side logic, including rendering components, handling user input, and making requests to the backend.

The UI is styled with Bootstrap to provide a sleek and responsive design with easy navigation through different sections of the dashboard using the navbar.

## 🗄️ Database (PostgreSQL)

- **PostgreSQL Version**: Postgres 16

The database is built using PostgreSQL, a powerful open-source relational database management system. It stores all data for the application, including match statistics, player information, and other relevant data.

## 👥 Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository:
   ```bash
   git fork https:/github.com/OM9987/IPL-Webapp
   ```

2. Make changes:
   ```bash
   git add .
   git commit -m "Your detailed commit message"
   ```

3. Create a pull request:
   ```bash
   git pull-request
   ```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
