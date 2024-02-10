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

Below is a copy database.

Create a .env file in the root directory and add config:

```makefile
VITE_FIREBASE_API_KEY="AIzaSyAFwzQvWLPTxXnack_q8xPTnSF27bIUIIA"
VITE_FIREBASE_AUTH_DOMAIN="autohub-42e32.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="autohub-42e32"
VITE_FIREBASE_STORAGE_BUCKET="autohub-42e32.appspot.com"
VITE_FIREBASE_MESSAGING_SENDER_ID="913582839368"
VITE_FIREBASE_APP_ID="1:913582839368:web:a3f0835130948931dfea7d"
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

## images

Here are some images from project.

![About](./AutoHub/src/assets/about.png)

![Cars List](./AutoHub/src/assets/cars.png)

![Dashboard](./AutoHub/src/assets/Dashboard.png)

![Host Cars](./AutoHub/src/assets/host-cars.png)

![Host Income](./AutoHub/src/assets/income.png)

![Host Reviews ](./AutoHub/src/assets/review.png)

## Note

1. Income currently is hardcode and review page chart. Will make it dynamic when I have time.
2. Login in as user use walterhart1@gmail.com with password Happy@1 to login into test account.
