import { Injectable } from '@angular/core';

// Imports
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
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
    const storageRef = firebase.default.storage().ref();

    for(const item of images) {
      item.isUpload = true;
      if (item.progress >= 100) {
        continue;
      }

      const uploadTask: firebase.default.storage.UploadTask =
        storageRef.child(`${ this.FOLDER_IMGS }/${ item.fileName }`)
          .put(item.file);

      uploadTask.on(firebase.default.storage.TaskEvent.STATE_CHANGED,
          (snapshot: firebase.default.storage.UploadTaskSnapshot) =>
            item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          (error) => console.error('Error al subir', error),
          () => {
            console.log('Imagen cargada correctamente');
            uploadTask.snapshot.ref.getDownloadURL()
              .then(response => {
                item.url = response;
                item.isUpload = false;

                this.saveImage({
                  name: item.fileName,
                  url: item.url
                });
              });
          });
    }
  }
}
