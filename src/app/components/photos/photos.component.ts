import { Component, OnInit } from '@angular/core';

// Imports
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {
  name: string,
  url: string
}
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styles: [
  ]
})
export class PhotosComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  public items: Observable<Item[]>;

  constructor(
    private angularFirestorage: AngularFirestore
  ) {
    this.itemsCollection = this.angularFirestorage.collection<Item>('img');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
