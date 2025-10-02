import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};

// Initialize Firebase
let app;
if (firebaseConfig.projectId && getApps().length === 0) {
  try {
    app = initializeApp(firebaseConfig);
  } catch (e) {
    console.error("Failed to initialize Firebase", e);
  }
} else {
  app = getApp();
}

export { app };
