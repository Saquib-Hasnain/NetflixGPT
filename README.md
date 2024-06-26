# Netflix GPT

A Netflix-inspired movie browsing application with GPT-powered search capabilities. Built using Create React App, TailwindCSS, Firebase, and Redux.

## Features

- **Login/Sign Up**
  - Sign In / Sign Up Forms
  - Form Validation
  - Redirect to Browse Page after authentication

- **Browse (After Authentication)**
  - Header
  - Main Movie
  - Trailer in Background
  - Title & Description
  - Movie Suggestions
  - Movie Lists

- **NetflixGPT**
  - GPT-powered Search Bar
  - Movie Suggestions

- **Responsive Design**
  - TailwindCSS for styling
  - Responsive layout for all devices

## Project Setup

Before starting the project, please add an `.env` file and include the TMDB and OPENAI keys.

### Prerequisites

- Node.js
- Firebase Account
- TMDB API Key
- OpenAI API Key

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/netflix-gpt.git
   cd netflix-gpt
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create an `.env` file in the root directory and add your TMDB and OpenAI API keys:
   ```env
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   ```

### Firebase Setup

1. Go to Firebase Console and create a new project.
2. Set up authentication (Email/Password).
3. Create a Firestore database.
4. Add your Firebase config to the `.env` file:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```

### Running the App

1. Start the development server:
   ```sh
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Deploying to Production

1. Build the project:
   ```sh
   npm run build
   ```

2. Deploy the `build` folder to your hosting provider.

## App Structure

- **Header**
  - Navigation and search bar.

- **Routing**
  - Handles different routes of the application.

- **Forms**
  - Login and Sign-up forms with validation.
  - useRef Hook for form elements.

- **Firebase**
  - Authentication and Firestore setup.
  - User account creation and sign-in API.
  - Unsubscribe from `onAuthStateChanged` callback.

- **Redux**
  - userSlice for managing user state.
  - movieSlice for managing movie data.
  - gptSlice for managing GPT search data.

- **TMDB API**
  - Register and create an app to get access token.
  - Fetch now playing movies and update store.
  - Fetch trailer video and update store.
  - Custom hooks for fetching movies and trailers.

- **Components**
  - Main Container
  - Secondary Container
  - Movie List
  - Movie Card
  - Responsive design with TailwindCSS.

- **GPT Search Page**
  - Search bar and movie suggestions.
  - GPT API call to fetch movie suggestions.
  - Reuse of Movie List component.

### Additional Features

- **Multi-language Support**
- **Memoization**
- **Environment Configuration**
  - .env file for sensitive data.
  - .gitignore to exclude `.env` file.

## Bug Fixes

- **Sign-up user displayName and profile picture update.**
- **Redirect to Login Page if user is not logged in and vice versa.**

## Conclusion

Netflix GPT is a comprehensive movie browsing application with GPT-powered search functionality, built with modern web technologies and best practices. Enjoy browsing and discovering movies!
