import { Injectable } from '@angular/core';

// Imports
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {

  private FOLDER_IMGS = 'img';

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  private saveImage(img: { name: string, url: string }) {
    this.angularFirestore.collection(`${ this.FOLDER_IMGS }`)
      .add( img );
  }
}
