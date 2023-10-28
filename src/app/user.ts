import { Component, OnDestroy, inject } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, Subscription } from 'rxjs';


@Component({
    //selector: 'app-root',
    //templateUrl: './app.component.html',
    //styleUrls: ['./app.component.css']
  })
export class LoginComponent implements OnDestroy {
  private auth: Auth = inject(Auth);
  //user$ = user(auth);
  // user$: Observable<User | null>;
  //userSubscription: Subscription;

  constructor(private afAuth: AngularFireAuth) {
    // this.user$ = afAuth.user;
    // this.userSubscription = this.user$.subscribe((aUser: User | null) => {
        //handle user state changes here. Note, that user will be null if there is no currently logged in user.
     //console.log(aUser);
    //})
  }

  ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    //this.userSubscription.unsubscribe();
  }
}
