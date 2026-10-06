# Student Placement Dashboard

A professional React-based Student Placement Management Dashboard designed to help students manage job opportunities, applications, interview schedules, placement updates, and personal profile information through a centralized web application.

## Live Demo

https://kukatireshmitha986-create.github.io/Student-Placement-Dashboard/

## GitHub Repository

https://github.com/kukatireshmitha986-create/Student-Placement-Dashboard

## Project Overview

The Student Placement Dashboard is a modern, responsive, and user-friendly web application developed using React.js. It provides students with a centralized platform to monitor their placement activities, explore job opportunities, track applications, view interview schedules, receive placement notifications, and maintain their profile information.

The application uses React components, React Router, React Hooks, Context API, form validation, and browser LocalStorage to provide an interactive front-end placement management experience.

## Objectives

- Provide a centralized student placement management system.
- Allow students to create accounts and securely access the dashboard.
- Display placement statistics and application progress.
- Provide job search and filtering functionality.
- Allow students to apply for available job opportunities.
- Track application status in real time within the application.
- Display scheduled interviews and interview details.
- Provide placement-related notifications and updates.
- Allow students to manage and update their profile.
- Demonstrate modern React development concepts.
- Build a responsive interface suitable for desktop and mobile devices.

## Key Features

### Student Authentication

- Student registration.
- Student login.
- Form validation.
- Protected application routes.
- Logout functionality.
- Authentication state management using Context API.
- User information stored using LocalStorage.

### Dashboard

The dashboard provides an overview of the student's placement journey.

It displays:

- Total jobs applied.
- Applications under review.
- Scheduled interviews.
- Selected applications.
- Upcoming interviews.
- Application progress.
- Upcoming application deadlines.
- Recent placement activity.

### Job Openings

Students can browse available placement opportunities from companies such as:

- TCS
- Infosys
- Wipro
- Accenture
- Capgemini
- Zoho

Job information includes:

- Company name.
- Job role.
- Location.
- Salary package.
- Employment type.
- Application deadline.
- Application status.

Students can also:

- Search jobs by company or role.
- Filter jobs by location.
- Apply for jobs.
- Prevent duplicate applications.

### Application Tracking

The My Applications section allows students to track submitted applications.

Application statuses include:

- Under Review
- Interview Scheduled
- Selected
- Rejected

The application table displays:

- Company.
- Position.
- Package.
- Location.
- Applied date.
- Current status.

Students can update application status through the interface, and the information is stored in LocalStorage.

### Interview Management

The Interview section displays scheduled interviews based on application status.

Interview information includes:

- Company.
- Job role.
- Interview date.
- Interview time.
- Interview mode.
- Location.
- Interview status.

Supported interview modes include:

- Online
- Campus

### Notifications

The Notifications section provides placement-related updates such as:

- Application submitted notifications.
- Interview scheduled notifications.
- Selection updates.
- Application status updates.
- Placement cell announcements.
- New placement opportunity notifications.

### Student Profile

Students can manage their personal and academic information.

Profile fields include:

- Full name.
- Roll number.
- Department.
- Email address.
- Phone number.
- Graduation year.
- Skills.

The profile section also includes:

- Profile completion percentage.
- Form validation.
- Profile update functionality.
- Saved profile information.

## Technology Stack

### Frontend

- React.js
- JavaScript
- JSX
- HTML5
- CSS3

### React Technologies

- React Components
- React Hooks
- useState
- useEffect
- Context API
- React Router DOM
- Protected Routes

### Data Management

- Browser LocalStorage
- Mock placement data

### Development Tools

- Visual Studio Code
- Node.js
- npm
- Vite
- Git
- GitHub

### Deployment

- GitHub Pages
- GitHub Actions

## Project Architecture

    Student-Placement-Dashboard/
    │
    ├── public/
    │
    ├── src/
    │   │
    │   ├── assets/
    │   │
    │   ├── components/
    │   │   ├── ApplicationCard/
    │   │   ├── InterviewCard/
    │   │   ├── JobCard/
    │   │   ├── Navbar/
    │   │   ├── NotificationCard/
    │   │   ├── ProtectedRoute/
    │   │   ├── SearchBar/
    │   │   ├── Sidebar/
    │   │   └── StatCard/
    │   │
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   │
    │   ├── data/
    │   │
    │   ├── hooks/
    │   │
    │   ├── pages/
    │   │   ├── Applications/
    │   │   ├── Dashboard/
    │   │   ├── Interviews/
    │   │   ├── Jobs/
    │   │   ├── Login/
    │   │   ├── Notifications/
    │   │   ├── Profile/
    │   │   └── Registration/
    │   │
    │   ├── services/
    │   │
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── vite.config.js
    └── README.md

## Application Routes

    /login
    /register
    /dashboard
    /jobs
    /applications
    /interviews
    /notifications
    /profile

The Dashboard, Jobs, Applications, Interviews, Notifications, and Profile pages are protected routes and require authentication.

## Application Workflow

    Student Registration
            ↓
    Student Login
            ↓
    Dashboard
            ↓
    Browse Job Openings
            ↓
    Search / Filter Jobs
            ↓
    Apply for Job
            ↓
    Application Tracking
            ↓
    Interview Scheduled
            ↓
    Selection / Rejection Update
            ↓
    Placement Progress

## Dashboard Analytics

The dashboard dynamically calculates placement statistics using the applications stored in LocalStorage.

### Jobs Applied

Displays the total number of applications submitted by the student.

### Under Review

Displays applications currently waiting for further processing.

### Interviews

Displays applications for which an interview has been scheduled.

### Selected

Displays applications that have reached the selected stage.

## Data Persistence

The project uses browser LocalStorage for front-end data persistence.

The following information is stored locally:

- Registered student information.
- Current logged-in student.
- Applied jobs.
- Application status.
- Updated profile information.

This allows application data to remain available after refreshing the browser.

## Form Validation

The project includes client-side validation for important forms.

### Registration Validation

- Full name validation.
- Roll number validation.
- Department selection.
- Email validation.
- Password validation.
- Password confirmation.

### Login Validation

- Email validation.
- Password validation.
- Invalid login handling.
- Account-not-found handling.

### Profile Validation

- Full name validation.
- Roll number validation.
- Department validation.
- Email validation.
- Phone number validation.
- Graduation year validation.

## Reusable React Components

The application follows a component-based architecture.

Reusable components include:

- Navbar
- Sidebar
- JobCard
- ApplicationCard
- InterviewCard
- NotificationCard
- SearchBar
- StatCard
- ProtectedRoute

This architecture improves code organization, maintainability, and reusability.

## React Concepts Demonstrated

This project demonstrates the following React concepts:

- Functional components.
- JSX.
- Props.
- State management.
- useState hook.
- useEffect hook.
- Context API.
- React Router.
- Protected routes.
- Conditional rendering.
- Event handling.
- Form handling.
- Form validation.
- Array rendering with map().
- Dynamic filtering.
- LocalStorage integration.
- Component reusability.

## Responsive Design

The dashboard is designed to work across different screen sizes.

Responsive layouts are provided for:

- Desktop computers.
- Laptops.
- Tablets.
- Mobile devices.

The sidebar, navigation bar, cards, tables, forms, and dashboard sections adapt to smaller screen sizes.

## Screenshots

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Job Openings

![Job Openings](screenshots/job-openings.png)

### My Applications

![Applications](screenshots/applications.png)

### Interview Schedule

![Interviews](screenshots/interviews.png)

### Notifications

![Notifications](screenshots/notifications.png)

### Student Profile

![Profile](screenshots/profile.png)

## Installation and Setup

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git
- Visual Studio Code

### Clone the Repository

    git clone https://github.com/kukatireshmitha986-create/Student-Placement-Dashboard.git

### Navigate to the Project

    cd Student-Placement-Dashboard

### Install Dependencies

    npm install

### Start the Development Server

    npm run dev

The application will be available at:

    http://localhost:5173/

## Available npm Commands

### Start Development Server

    npm run dev

### Build for Production

    npm run build

### Preview Production Build

    npm run preview

### Lint the Project

    npm run lint

## GitHub Pages Deployment

The project is deployed using GitHub Pages.

Live website:

https://kukatireshmitha986-create.github.io/Student-Placement-Dashboard/

The project is configured for the GitHub Pages project path:

    /Student-Placement-Dashboard/

## GitHub Actions

The deployment process uses GitHub Actions to build and publish the Vite React application.

Whenever changes are pushed to the configured GitHub branch, the project can be rebuilt and deployed through the GitHub Pages deployment workflow.

## Mock Placement Data

The application currently uses mock placement data for demonstration purposes.

Example companies include:

| Company | Role | Location | Package |
|---|---|---|---|
| TCS | Software Developer | Chennai | 6.5 LPA |
| Infosys | Data Analyst | Bangalore | 7.2 LPA |
| Wipro | Graduate Engineer Trainee | Hyderabad | 5.8 LPA |
| Accenture | Associate Software Engineer | Pune | 7.5 LPA |
| Capgemini | Technology Analyst | Mumbai | 6.8 LPA |
| Zoho | Junior Developer | Chennai | 8 LPA |

## Project Highlights

- Professional student placement dashboard.
- Responsive user interface.
- React-based component architecture.
- Authentication and protected routes.
- Dynamic job search and filtering.
- Job application management.
- Application status tracking.
- Interview schedule management.
- Placement notification system.
- Student profile management.
- Form validation.
- LocalStorage-based data persistence.
- Reusable React components.
- GitHub Pages deployment.
- GitHub Actions deployment workflow.

## Future Enhancements

The following features can be added in future versions:

- Backend REST API integration.
- MySQL or PostgreSQL database.
- Real student authentication.
- JWT-based authentication.
- Admin dashboard.
- Placement officer management panel.
- Company registration module.
- Real-time notifications.
- Email notifications.
- Resume upload and management.
- Resume parsing.
- Advanced job recommendations.
- Application deadline reminders.
- Interview reminder notifications.
- Placement analytics with charts.
- Student performance analytics.
- Company-wise placement statistics.
- Cloud database integration.
- Role-based access control.

## Security Note

This project is primarily a front-end academic project. Authentication and application information are currently managed using browser LocalStorage for demonstration purposes.

For a production system, authentication should be implemented using a secure backend, encrypted password storage, token-based authentication, database security, HTTPS, and appropriate access-control mechanisms.

## Academic Relevance

This project demonstrates practical knowledge of:

- Front-end web development.
- React.js.
- JavaScript.
- Component-based architecture.
- State management.
- Routing.
- Form validation.
- Client-side data persistence.
- Responsive web design.
- Git and GitHub.
- Web application deployment.

It is suitable as an academic React-based front-end project demonstrating the development of a complete student placement management interface.

## Project Information

**Project Name:** Student Placement Dashboard

**Project Type:** React-Based Front-End Web Application

**Domain:** Student Placement Management

**Frontend:** React.js

**Build Tool:** Vite

**Programming Language:** JavaScript

**Styling:** CSS3

**Data Storage:** Browser LocalStorage

**Deployment:** GitHub Pages

**Repository:** https://github.com/kukatireshmitha986-create/Student-Placement-Dashboard

**Live Demo:** https://kukatireshmitha986-create.github.io/Student-Placement-Dashboard/

## Author

**Reshmitha Kukati**

AI & Data Science Student

GitHub: https://github.com/kukatireshmitha986-create

## License

This project is developed for educational and academic purposes.

## Conclusion

The Student Placement Dashboard provides a complete front-end solution for managing student placement activities through a modern React-based interface. It combines authentication, job discovery, application tracking, interview management, notifications, profile management, responsive design, and GitHub Pages deployment into a single application.

The project demonstrates practical implementation of modern React development concepts and provides a strong foundation for future integration with a backend API, database, authentication service, and advanced placement analytics.
