const firebaseConfig = {
  apiKey: import.meta.env.firebase.VITE_API_KEY,
  authDomain: import.meta.env.firebase.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.firebase.VITE_PROJECT_ID,
  storageBucket: import.meta.env.firebase.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.firebase.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.firebase.VITE_APP_ID,
};

export default firebaseConfig;
