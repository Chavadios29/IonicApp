import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SettingsPageModule } from './settings/settings.module'; // Módulos específicos
import { ProfilePageModule } from './profile/profile.module';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component'; // Importa el componente aquí
// Importa el componente aquí
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostModalComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    SettingsPageModule,
    ProfilePageModule,
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Inicializa Firebase
    provideFirestore(() => getFirestore()), // Inicializa Firestore
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}