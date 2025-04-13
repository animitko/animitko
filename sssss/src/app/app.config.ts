import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { routes } from './app.routes';
import { UserService } from './user-service.service';
import { FormsModule } from '@angular/forms';

export const firebaseConfig = {
  apiKey: "AIzaSyDZFbj1pkOp-F6JmJAgK5PtCXJRXmlU7dM",
  authDomain: "wedding-693e1.firebaseapp.com",
  databaseURL: "https://wedding-693e1-default-rtdb.firebaseio.com/", // ✅ Add this line
  projectId: "wedding-693e1",
  storageBucket: "wedding-693e1.appspot.com", // 🔧 You had a typo here (should be .appspot.com)
  messagingSenderId: "454434978435",
  appId: "1:454434978435:web:8dfe1d4d89aac34b64b9b6"
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase()), // Ensure this is correctly provided
    UserService, // Add UserService to the providers,
    FormsModule
  ]
};
