# Dashboard PDF Generator

# Dashboard PDF Generator

A small Vue 3 application to create reports, with a local history of generated reports.

## Summary

- Simulating Generate a PDF report
- Store and display a history of past reports in `localStorage`

## Features

- Responsive form UI and reusable components
- Validation for form fields
- History view with timestamps and persisted entries in `localStorage`

## Tech

- Vue 3 (Composition API)
- Vite
- Tailwind CSS
- LocalStorage for persistence

## Quick Start

1. Clone the repo and install dependencies

```bash
git clone https://github.com/akfalah/dashboard-pdf-generator.git
cd dashboard-pdf-generator
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Open the app at the URL printed by Vite (default: `http://localhost:5173`)

## Usage

- Fill the form on the home page and click the button to generate a PDF.
- Generated reports are added to the history list and persisted in `localStorage`.

## Project Structure

Key files and folders:

- `src/` — application source
  - `App.vue` — root component
  - `main.js` — app bootstrap
  - `components/` — reusable Vue components such as `TopBar.vue`, `BaseButton.vue`, `BaseInputField.vue`
  - `views/` — view components (e.g., `HomeView.vue`)
  - `utils/formatHelpers.js` — formatting helper functions
- `public/` — static assets
- `vite.config.js` — Vite configuration
