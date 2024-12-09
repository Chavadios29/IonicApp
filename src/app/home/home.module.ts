import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Importar el módulo de Ionic
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Asegúrate de incluir esto
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
