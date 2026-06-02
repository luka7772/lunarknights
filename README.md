# Lunar Knights Gym Management Platform

## Project Overview
Lunar Knights is a comprehensive gym management platform built as a high-fidelity frontend prototype. It provides a complete interface for gym members, trainers, and admins to interact with fitness services, training modules, and account management. The platform is designed with a scalable, component-driven architecture that is fully prepared for future backend integration.

## Website Structure & Features

### 1. Core Navigation & Layout
* **Global Header:** Features a responsive navigation menu with links to all major sections, user authentication status, and brand identity.
* **Responsive Architecture:** Built with a mobile-first philosophy, utilizing CSS Grid and Flexbox to ensure optimal layout across mobile devices, tablets, and desktop monitors.

### 2. Pages & Modules
* **HomePage:** The central hub providing a professional overview of the gym, promotional highlights, and quick-links to premium services.
* **ServicePage:** Detailed catalog of our core gym offerings, including:
    * **Personal Training:** Information on 1-on-1 expert coaching.
    * **Group Classes:** Overview of high-intensity group training sessions.
    * **Nutrition Coaching:** Evidence-based meal planning support.
    * **Online Training:** Digital programming access.
* **Workout Catalog:** A structured repository of fitness modules, currently featuring:
    * **Chest Exercises:** A specialized module for upper body development.
    * **Abs Exercises:** A targeted module for core strength.
 * **TrainersPage:** A directory of professional trainers featuring bios, specializations, and certifications, highlighting their role in the gym’s ecosystem.
* **User Portal:**
    * **Login & Register:** Fully interactive authentication interfaces with form handling, state validation, and error feedback.
    * **Account/Profile:** A dedicated dashboard for members to manage their profile, view personal settings, and track their fitness journey.
* **Contact Page:** Integrated communication portal for member inquiries and support.

### 3. Engineering Highlights
* **Component-Driven System:** Reusable UI components (e.g., `ServiceCard`, `WorkoutCard`) minimize code duplication and ensure design consistency.
* **Dynamic State Simulation:** Uses React Context and internal state management to simulate role-based navigation and authentication flows.
* **Data-Centric Design:** Content is decoupled from the UI, using data-mapping to structure content, making the future transition to a real database (SQLite/PDO) a modular task.

## Future Development Roadmap
* **Backend Integration:** Implementing an SQLite database with PHP/PDO to handle real-world user accounts and bookings.
* **Role-Based Dashboards:** Enabling unique views for:
    * **Admins:** User management, class scheduling, and equipment monitoring.
    * **Trainers:** Roster management, exercise planning, and performance analytics.
    * **Members:** Real-time class enrollment, waitlists, and progress tracking.
* **Community Features:** Adding in-app messaging and feedback mechanisms between trainers and members.

## Technical Stack
- **Library:** React.js (Hooks, Context, Functional Components)
- **Styling:** Custom CSS (Modular, responsive, theme-consistent)
- **Routing:** `react-router-dom` for seamless Single Page Application (SPA) navigation.

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your_repo_url>