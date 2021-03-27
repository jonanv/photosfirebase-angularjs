import { Component, OnInit } from '@angular/core';

// Imports
import { FileItem } from '../../models/file-item';
import { LoadImagesService } from '../../services/load-images.service';

@Component({
  selector: 'app-load-photos',
  templateUrl: './load-photos.component.html',
  styles: [
  ]
})
export class LoadPhotosComponent implements OnInit {

  public files: FileItem[] = [];

  constructor(
    private loadImagesService: LoadImagesService
  ) { }

  ngOnInit(): void {
  }

  public loadImages(): void {
    this.loadImagesService.loadImagesFirebase(this.files);
  }
}
