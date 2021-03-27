import { Component, OnInit } from '@angular/core';

// Imports
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/item.interface';

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
