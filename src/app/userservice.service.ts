import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, Firestore } from 'firebase/firestore';
export const firebaseConfig = {
  apiKey: "AIzaSyDZFbj1pkOp-F6JmJAgK5PtCXJRXmlU7dM",
  authDomain: "wedding-693e1.firebaseapp.com",
  projectId: "wedding-693e1",
  storageBucket: "wedding-693e1.appspot.com", // fixed typo
  messagingSenderId: "454434978435",
  appId: "1:454434978435:web:8dfe1d4d89aac34b64b9b6"
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private firestore: Firestore;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.firestore = getFirestore(app);
  }

  // Save user data to Firestore
  async saveUserData(userId: string, userData: any): Promise<void> {
    const userDoc = doc(this.firestore, 'users', userId);
    await setDoc(userDoc, userData);
  }

  // Get user data from Firestore
  async getUserData(userId: string): Promise<any> {
    const userDoc = doc(this.firestore, 'users', userId);
    const snapshot = await getDoc(userDoc);
    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      return null;
    }
  }}
