# Elevate App

Welcome to Elevate, an event management app designed and developed for Hitam Hack Your Path 5.0 Hackathon. Elevate allows users to easily organize, manage, and attend events with a seamless user interface. This README file will guide you through setting up and running the Elevate app on your local machine.

## Features
- User authentication with login and signup functionality.
- My Events page to view and manage events created by the user.
- Event details page with the option to view participants and mark them as present by scanning their QR codes.
- Events Enrolled page to view events in which the user is enrolled.
- Profile page with a unique QR code for easy identification.
- Homepage displaying all events near the user, sorted by recent activity.

## Technologies Used
- React Native
- Firebase (for authentication and data storage)

## Installation
1. Clone the repository to your local machine:

```
git clone https://github.com/yourusername/elevate-app.git
```

2. Navigate to the project directory:

```
cd elevate-app
```

3. Install dependencies:

```
npm install
```

## Configuration
Before running the app, you need to set up Firebase for authentication and database services. Follow these steps:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable authentication with email/password in the Firebase project settings.
3. Create a Firebase database and update the Firebase configuration in `src/firebase/config.js` file with your project's configuration details.

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export default firebaseConfig;
```

## Running the App
After configuring Firebase, you can run the app on your local machine:

```
npm start
```

This command starts the Metro Bundler, which helps bundle your JavaScript files, and opens the Expo DevTools in your default web browser. You can then choose to run the app in an Android or iOS simulator, or on a physical device by scanning the QR code with the Expo Go app.

## Screenshots

<div align="left">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/a9094e8f-3db9-4329-8eb9-a0273724d538" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/d522b8c6-1b25-4bd8-8250-5035fecbbbe1" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/a2d6c829-b640-4389-b1fa-cee1ef14c628" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/10791198-3969-4805-963e-8f9cf9f86097" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/176881a2-21c5-4e35-be0b-c799bbc99b58" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/77b9a41b-95e2-45f4-9af9-5122fb2d9781" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/997cc9f0-7a85-4710-967f-0c4207c1775e" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/1d8f625c-83d1-4403-960c-3ba8d2f512ac" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/5de94b03-b539-409b-a79b-aea93099a367" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/e756c406-87a0-448f-9664-760d4fe10bb2" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/eb7eb8fc-e327-4c79-936b-6988a14dce32" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/e0b267f4-c810-4590-925d-f619b9c5b076" width="250">
  <img src="https://github.com/Mohammed-Shoaib01/EventElevate/assets/73358222/306dd995-ca43-4ca8-bd9c-1afa524f3766" width="250">

</div>

## Contributors!
- [Mohammed Saad]([https://github.com/](https://github.com/b1gh3ro))

## Acknowledgments
Special thanks to Hitam Hack Your Path 5.0 Hackathon for organizing the event and providing the opportunity to develop this app.
