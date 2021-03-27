import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import routing
import { AppRoutingModule } from './app-routing.module';

// Imports components
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { LoadPhotosComponent } from './components/load-photos/load-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    LoadPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
