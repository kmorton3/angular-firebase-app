import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
    selector: 'app-user-profile',
    standalone: true,
    templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
    private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
    users$: Observable<UserProfile[]>;

    constructor() {
        // get a reference to the user-profile collection
        const userProfileCollection = collection(this.firestore, 'users');

        // get documents (data) from the collection using collectionData
        this.users$ = collectionData(userProfileCollection) as Observable<UserProfile[]>;
    }
}
export interface UserProfile {
    username: string;
}