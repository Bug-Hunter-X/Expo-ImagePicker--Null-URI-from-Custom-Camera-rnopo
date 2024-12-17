# Expo ImagePicker Null URI from Custom Camera

This repository demonstrates a bug in the Expo ImagePicker library where a null URI is returned when selecting an image from a custom camera implementation.  The issue is intermittent and difficult to consistently reproduce.  This example shows the problem and a potential solution using promises to properly handle asynchronous operations.

## Setup:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` or `yarn install`.
4. Start the Expo development server.

## Reproducing the Bug:

1. Open the app on your device or emulator.
2. Try selecting an image from the custom camera.
3. Observe the console for errors related to null or undefined URIs.

## Solution:

The solution involves using promises to properly handle the asynchronous nature of the custom camera's image selection process. This ensures that the image URI is correctly returned before being used.