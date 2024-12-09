import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Asegúrate de que se importa IonicModule
import { SettingsPage } from './settings.page';
import { SettingsPageRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,  // Esto es necesario para usar los componentes de Ionic
    SettingsPageRoutingModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
