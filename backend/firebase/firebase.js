import { initializeApp, cert } from 'firebase-admin/app';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const serviceAccountPath = path.join(__dirname, 'cryptoolympia-firebase-adminsdk-lyae5-d906212ede.json');
const firebase_app = initializeApp({
  credential: cert(serviceAccountPath),
});

export default firebase_app;
