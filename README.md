This is a frontend assignment implemented using React, TypeScript, and Vite. The project follows the design provided via Figma and implements responsive UI for both desktop and mobile views.


**Tech Stack**

Framework / Library: React 19

Language: TypeScript

Build Tool: Vite

Styling: TailwindCSS (utility-first CSS for rapid styling and responsiveness)

Routing: React Router DOM v7

Icons: Lucide React

Date Picker: react-datepicker

Linting: ESLint with TypeScript support (typescript-eslint) and React-specific rules

=================================================================================================

**Features Implemented**

Two screens as per Figma design.

Fully responsive design (desktop & mobile).

Clean project structure with proper separation of components.

Reusable UI components wherever applicable.

Type-safe implementation using TypeScript.

ESLint configuration for consistent code style and best practices.

===============================================================================================

**Setup Instructions**

Follow the steps below to run the project locally:

Clone the repository:

git clone https://github.com/gauravdev30/GridEmployee-Assignment.git
cd GridEmployee-Assignment


Install dependencies:

npm install


Run the development server:

npm run dev


Open http://localhost:5173
 in your browser.

Vite provides Hot Module Replacement (HMR) for fast development.

Build for production:

npm run build


The production-ready build will be in the dist folder.

Preview the production build locally:

npm run preview


Run linting checks:

npm run lint


Ensures code quality, adherence to rules, and avoids common errors.

===============================================================================================

**Project Structure**

The project is organized in a modular and scalable way to separate concerns, enhance reusability, and maintain clarity. Below is the structure with explanation

src/
├─ app/
│   └─ routes/
│       └─ AppRoutes.tsx       # Handles all React Router routes for the application
├─ assets/
│   ├─ icons/                  # Contains all icons used in the project
│   │   ├─ edit.png
│   │   ├─ notification.png
│   ├─ images/                 # Stores all static images like profile, logos, and dummy images
│   │   ├─ img1.png … img12.png
│   │   ├─ logo.png
│   │   ├─ profile.png
│   └─ react.svg               # React logo used in the UI
├─ components/                 # Reusable components shared across multiple features
│   ├─ common/
│   │   ├─ ActionButton.tsx    # Generic button component
│   │   ├─ ComingSoon.tsx      # Placeholder component for upcoming features
│   │   ├─ SearchBar.tsx       # Search input component
│   │   ├─ Sidebar.tsx         # Sidebar navigation component
│   │   └─ Topbar.tsx          # Top navigation bar component
│   └─ layout/
│       └─ MainLayout.tsx      # Main layout wrapper including Sidebar and Topbar
├─ data/                       # Stores all static data and API-like mock data
│   ├─ people.ts               # Dummy data for People feature
│   └─ timesheet.ts            # Dummy data for Timesheet/TimeManagement feature
├─ features/                   # Feature-based folder structure for scalability
│   ├─ people/                 # People feature
│   │   ├─ components/
│   │   │   ├─ PeopleCard.tsx  # Displays individual person card
│   │   │   └─ PeopleGrid.tsx  # Grid layout for listing multiple people
│   │   └─ pages/
│   │       └─ People.tsx      # People screen/page
│   └─ timeManagement/         # Time Management feature
│       ├─ components/
│       │   ├─ TimesheetCard.tsx   # Displays individual timesheet entry
│       │   └─ TimesheetTable.tsx  # Table layout for timesheet data
│       └─ pages/
│           └─ TimeManagement.tsx  # Time Management screen/page
├─ App.tsx                     # Root component that initializes routing
├─ main.tsx                    # Entry point for React rendering
└─ index.css                   # Global styles and TailwindCSS imports

===============================================================================================

**Commands Summary**

npm run dev - Start development server with HMR
npm run build - Build production-ready code
npm run preview -	Preview production build locally
npm run lint -	Run ESLint to check code quality

===============================================================================================