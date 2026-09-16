# ShetiBuddy

ShetiBuddy is a modern React-based agriculture group management application designed to help farmers and agricultural groups manage their communities, track group information, and streamline member-related workflows.

The app provides a clean dashboard for user registration and login, group creation, group browsing, and member/attendance management. It is built with a responsive UI, multilingual support, and animations for a more engaging experience.

## Overview

This project is a frontend application for managing agricultural groups and related data. It includes:

- User authentication flow with login and registration screens
- Group creation and configuration
- Group list and group detail navigation
- Attendance/member tracking views
- English and Marathi language support
- Responsive dashboard experience for desktop and mobile screens

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Material UI
- Framer Motion
- React Router DOM
- Axios
- React Intl

## Features

- Secure login and registration experience for users
- Create and manage agricultural groups
- View group details and owner information
- Search groups from a searchable card list
- Track attendance and member-related information
- Toggle between English and Marathi language interfaces
- Animated UI with smooth transitions and glassmorphism-inspired design

## Project Structure

```bash
shetibuddy/
├── public/
├── src/
│   ├── assets/
│   ├── Pages/
│   ├── App.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Navbar.jsx
│   ├── Register.jsx
│   ├── Sidebar.jsx
│   ├── Central.jsx
│   ├── Forgot.jsx
│   └── main.jsx
├── index.css
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/Ramkrishna2558/shetibuddy.git
cd shetibuddy
npm install
```

### Run the app

```bash
npm run dev
```

This will start the Vite development server, typically available at:

```bash
http://localhost:5173
```

## Backend Dependency

This frontend app communicates with a local backend API. The code currently uses endpoints such as:

- https://localhost:5001/api/AppUser/login
- https://localhost:5001/api/AppUser/ragister
- https://localhost:5001/api/Group
- https://localhost:5001/api/Group/Create

Make sure the backend service is running before testing login, registration, or group operations.

## Available Scripts

In the project directory, you can run:

```bash
npm run dev
```
Starts the Vite development server.

```bash
npm run build
```
Builds the app for production.

## Notes

- The application uses a local API and is intended to work with a matching backend service.
- Localization is partially implemented using `react-intl` with English and Marathi translations.
- Some routes and components are still under active development and may evolve as the app expands.

## Contributing

Contributions are welcome. If you want to improve the project, feel free to fork the repository and submit a pull request.

## Contact

Project owner: Ramkrishna2558

Repository: https://github.com/Ramkrishna2558/shetibuddy
