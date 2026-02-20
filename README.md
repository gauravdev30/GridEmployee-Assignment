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

**Assumptions & Notes**

The screens are designed to closely follow the Figma design, maintaining spacing, font sizes, colors, and layout. The primary target resolution is 1440 × 1024, as specified in Figma. The design is fully mobile-responsive, and resizing via browser developer tools retains the Figma layout consistency.

**Minor deviations from the original Figma design were made intentionally for better usability and functionality:**

Some icons were replaced with similar alternatives to indicate the same functionality.

The sidebar is made openable and closable for improved user experience.

A menu icon was added on the top bar to toggle the sidebar.

The pagination, originally at the bottom, has also been positioned on the right side for a cleaner layout.

All screens, except People and TimeManagement > Timesheet, redirect to a formatted fallback screen with a proper message instead of showing a blank or error page.

**Functionality enhancements added to the UI:**

On the Timesheet screen, a datepicker calendar has been integrated for selecting dates.

The time displayed on the Timesheet screen is dynamic and shows live time.

Search functionality is implemented for data stored in data/people.ts and data/timesheet.ts, simulating API calls for filtering results.

All reusable components are organized in a proper folder structure, improving maintainability and scalability.

**Styling and responsiveness:**

TailwindCSS is used for rapid styling and responsive design.

The Inter font is used throughout the project for readability and modern UI. Although the Figma design specifies the Brother 1816 font, it is a paid font, so Inter was used as a free, visually similar alternative.

The project is fully mobile-friendly, with proper handling of scrollbars for the sidebar and main content when viewed on smaller screens.

**Why tailwind.config.css was not included:**

This project uses the default TailwindCSS configuration, which provides all the required utilities for styling the assignment screens.

Since no custom theme extensions, colors, or plugins were needed beyond the default Tailwind setup, a separate tailwind.config.css file was unnecessary.

This approach keeps the project lightweight and focused on the UI implementation rather than unnecessary configuration overhead.

**Project stack and implementation notes:**

Built using React + TypeScript + Vite, providing fast development, type safety, and efficient builds.

The assignment is primarily UI-focused, but the added features like datepicker, search, dynamic time, and responsive sidebar demonstrate practical frontend skills.

All data is mocked in the data folder and accessed like API calls to simulate real-world applications.

This setup ensures a production-ready structure, clean code practices, and a maintainable project while closely following the Figma design.

===============================================================================================