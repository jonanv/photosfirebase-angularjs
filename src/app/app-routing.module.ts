import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports components
import { PhotosComponent } from './components/photos/photos.component';
import { LoadPhotosComponent } from './components/load-photos/load-photos.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent },
  { path: 'load', component: LoadPhotosComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'photos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
