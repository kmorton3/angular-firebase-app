import { Injectable, OnDestroy } from '@angular/core';
//import { Auth, User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
//import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { Observable, Subscription } from 'rxjs';
import { initializeApp } from 'firebase/app';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnDestroy {
  //private subscription: Subscription;
  //user$: Observable<User | null>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private firestore: AngularFirestore) {
    initializeApp(environment.firebase);
    //this.user$ = afAuth.user;
    // Initialize your service
    // this.subscription = someObservable.subscribe((data) => {
    //   Handle data
    // });
  }

  ngOnDestroy() {
    // Clean up resources
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }

  // Implement authentication and database functions here
  // Example: Sign up a user with email and password
  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Example: Retrieve data from the Firebase Realtime Database
  getDBItems(): Observable<any[]> {
    return this.db.list('items').valueChanges();
  }

  // Example: Observable for the current user
  // getcurrentUser(): Observable<User | null> {
  //   return this.user$;
  // }

  getFirestoreUsers(): Observable<any[]> {
    return this.firestore.collection('items').valueChanges();
  }

  addItem(item: any): Promise<any> {
    return this.firestore.collection('items').add(item);
  }
}
