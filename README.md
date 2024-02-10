# Auto-Hub

Auto-Hub App is a web application that allows users to browse available cars, view cars by type, login to view their recent car sales, and logout.

## Installation

To install:

```bash
git clone https://github.com/Walterhart/AutoHub.git
cd AutoHub
npm install
```

## Firebase

 Set up Firebase:
        Create a Firebase project in the Firebase Console.
        Set up Firebase Authentication and Firestore database.
        Copy your Firebase config object.
        Create a .env file in the root directory and add your Firebase config:

``` makefile
VITE_FIREBASE_API_KEY="your_api_key"
VITE_FIREBASE_AUTH_DOMAIN="your_auth_domain"
VITE_FIREBASE_PROJECT_ID="your_project_id"
VITE_FIREBASE_STORAGE_BUCKET="your_storage_bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"
VITE_FIREBASE_APP_ID="your_app_id"
```

## Usage

To run:

```bash
npm run dev
```

Open http://localhost:5174 to view in browser

## Features

Login: Users can login to the app using their email and password.
Logout: Logged-in users can logout from the app.
View Cars: Users can browse available cars.
View Car Detail: Users can view details about selected car.
View Cars by Type: Users can filter cars by type (e.g., sedan, SUV, truck).
View Recent Sales: Logged-in users can view their recent car sales.
View Review: Logged-in users can view reviews by other users.
View Host Cars: Logged-in users can view their cars being sold.
View Dashboard: Logged-in users can see dashboard that contain summarize information about their account.

## Note

1. Income currently is hardcode. Will make it dynamic when I have time.

2. App will run even without api but will not allow login features.
