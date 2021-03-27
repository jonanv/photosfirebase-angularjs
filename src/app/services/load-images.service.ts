import { Injectable } from '@angular/core';

// Imports
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {

  private FOLDER_IMGS = 'img';

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  private saveImage(img: { name: string, url: string }): void {
    this.angularFirestore.collection(`${ this.FOLDER_IMGS }`)
      .add( img );
  }

  public loadImagesFirebase(images: FileItem[]): void {
    console.log(images);
  }
}
