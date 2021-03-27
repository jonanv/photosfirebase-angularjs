import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import routing
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Imports environment
import { environment } from 'src/environments/environment';

// Imports components
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { LoadPhotosComponent } from './components/load-photos/load-photos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    LoadPhotosComponent,
    NavbarComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
