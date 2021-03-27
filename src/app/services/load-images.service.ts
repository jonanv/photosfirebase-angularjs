import { Injectable } from '@angular/core';

// Imports
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }
}
