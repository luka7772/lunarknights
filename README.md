# Lunar Knights: Gym Management Platform

## Team Members

- **Luka Jijavadze**
- **Mariam Maisuradze**
- **Misho Kakashvili**

---

## Project Overview

Lunar Knights is a comprehensive gym management platform built as a high-fidelity frontend prototype. The application provides a modern and user-friendly environment where visitors can explore fitness services, discover professional trainers, learn workout techniques, browse membership plans, and manage their accounts through a centralized platform.

The project was developed to simulate a real-world gym management system while following modern frontend development practices. Its scalable architecture and modular design make it fully prepared for future backend integration.

Users can:

- Explore available fitness services and training programs.
- Learn about professional trainers and their specializations.
- Browse workout guides and training modules.
- View available membership packages.
- Register, log in, and manage personal accounts.
- Contact the gym through an integrated communication portal.

---

## Website Structure & Features

### 1. Core Navigation & Layout

- **Global Header:** Responsive navigation menu with access to all major sections.
- **Responsive Design:** Built using a mobile-first approach with CSS Grid and Flexbox.
- **Single Page Application:** Seamless navigation powered by React Router.

### 2. Pages & Modules

#### Home Page
The main landing page introducing the gym, highlighting featured services, membership options, and important platform features.

#### Services Page
Displays the gym's available services, including Personal Training, Group Classes, Nutrition Coaching, and Online Training.

#### Membership Packages
Allows users to explore and compare available gym membership plans.

#### Workout Catalog
Provides workout guides and training information for different muscle groups, currently featuring Chest and Abs training modules.

#### Trainers Page
Showcases professional trainers, including their certifications, specializations, and experience.

#### User Portal
Includes Login, Registration, and Profile Management functionality for gym members.

#### Contact Page
Provides a communication channel for user inquiries, support requests, and general gym information.

### 3. Engineering Highlights

- **Component-Driven Architecture:** Built using reusable React components such as `ServiceCard`, `WorkoutCard`, and `TrainerCard`.
- **Dynamic State Simulation:** Uses React Context and Hooks to simulate authentication and user interactions.
- **Data-Centric Design:** Content is separated from the UI through data mapping, making future database integration straightforward.
- **Responsive User Experience:** Optimized for mobile devices, tablets, laptops, and desktop screens.

---

## Future Development Roadmap

### Backend Integration

Implementation of:

- PHP
- SQLite Database
- PDO Database Layer

This will enable:

- Persistent user accounts
- Secure authentication
- Membership management
- Booking systems

### Role-Based Dashboards

#### Admin Dashboard
- User Management
- Trainer Management
- Membership Administration
- Class Scheduling

#### Trainer Dashboard
- Client Management
- Workout Planning
- Progress Tracking

#### Member Dashboard
- Class Enrollment
- Membership Tracking
- Personal Workout Plans

### Community Features

Future additions include:

- In-App Messaging
- Trainer-Member Communication
- Feedback System
- Notifications and Announcements

---

## Technical Stack

### Frontend

- React.js
- React Hooks
- React Context API
- Functional Components

### Styling

- Custom CSS
- CSS Grid
- Flexbox
- Responsive Design

### Routing

- React Router DOM

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/luka7772/lunarknights.git
cd lunarknights
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Deploy the Application

```bash
npm run deploy
```


## Repository

GitHub: https://github.com/luka7772/lunarknights