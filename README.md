# Word of the Day App

A simple React Native app to display a Word of the Day, browse history, and persist data using AsyncStorage.

## Setup

1. Install dependencies:

```bash
npm install
# or
yarn install


# Run the app:

npx react-native run-android
# or
npx react-native run-ios
```

Features
Word of the Day with definition and example.

Save and view history.

Clear history option.

Made bya Arnav Suman



Installation
To run this app, you'll need Node.js and Expo CLI installed on your machine. Follow the steps below to get started.

1. Install Node.js
If you haven't already installed Node.js, you can download it from the official site:

Download Node.js

2. Install Expo CLI
Install Expo CLI globally by running:

```bash
npm install -g expo-cli
```

Running on iOS
You can run this project on an iOS simulator or iOS device using the Expo Go app.

1. Run on iOS Simulator
If you're using macOS and have Xcode installed, you can run the app on the iOS simulator with the following command:

```bash
expo start --ios

```


This command will launch the Expo Developer Tools in your browser and automatically open the iOS simulator.

2. Run on iOS Device
To run the app on a physical iOS device:

Install the Expo Go app from the App Store.

Open the Expo Developer Tools in your browser after running expo start.

Scan the QR code displayed in the Expo Developer Tools using the Expo Go app.

Running on Android
1. Run on Android Emulator
If you have Android Studio installed, you can use the built-in Android emulator. First, make sure an emulator is running by opening Android Studio, then:


```bash
expo start --android
```

This will start the app on the Android emulator.

2. Run on Android Device
To run the app on a physical Android device:

Install the Expo Go app from the Google Play Store.

Open the Expo Developer Tools in your browser after running expo start.

Scan the QR code displayed in the Expo Developer Tools using the Expo Go app.

Build and Publish
If you want to build the app and publish it to the app stores, you can use EAS Build.

1. Login to Expo:
```bash
expo login
```

2. Build for iOS and Android:
For iOS:

```bash
eas build --platform ios
For Android:
```

```bash
eas build --platform android
```

Follow the instructions to complete the build process. Once built, you can download the app binary and upload it to the App Store or Google Play Store.

Dependencies
React Native: The core framework for building the app.

Expo: For developing and running the app without requiring native code compilation.

AsyncStorage: For persisting data (history of words) between app sessions.

React Navigation: For navigation between the Home and History screens.

React Native Elements: For UI components (optional, if used).

