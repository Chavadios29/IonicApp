import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SensoresPage } from './sensores.page';
import { SensoresPageRoutingModule } from './sensores-routing.module';
import { ModalSensorsComponent } from '../../components/modal-sensors/modal-sensors.component';

@NgModule({
  declarations: [
    SensoresPage,
    ModalSensorsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Asegúrate de que IonicModule esté aquí
    SensoresPageRoutingModule,
  ],
})
export class SensoresPageModule {}
