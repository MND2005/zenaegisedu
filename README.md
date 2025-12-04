# ZenaEgisEdu Platform

An educational platform built with React, Firebase, and Tailwind CSS.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Firebase account

## Setup Instructions

1. Clone the repository
2. Navigate to the `frontend` directory
3. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   ```

4. Create a `.env` file in the `frontend` directory with your Firebase configuration:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

5. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Dependency Issue Resolution

This project had compatibility issues with certain dependencies:

1. `react-day-picker` requires React version 16, 17, or 18, but the project was using React 19
2. `react-day-picker` requires `date-fns` version 2.x or 3.x, but the project was using version 4.x

To resolve these conflicts:
- Downgraded React and React DOM to version 18.2.0
- Downgraded `date-fns` to version 2.30.0
- Always use `--legacy-peer-deps` flag when installing dependencies

## Deployment to Vercel

1. Push your code to a GitHub repository
2. Sign up/log in to [Vercel](https://vercel.com/)
3. Click "New Project" and import your repository
4. Configure the project:
   - Framework Preset: Create React App
   - Root Directory: Leave as root (configuration is in root vercel.json)
   - Build Command: `npm run vercel-build`
   - Output Directory: `frontend/build`
5. Add your environment variables in the Vercel dashboard
6. Deploy!

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in development mode.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.

### `npm test` or `yarn test`

Launches the test runner in interactive watch mode.