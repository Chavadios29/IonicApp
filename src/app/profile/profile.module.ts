import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page'; 
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage ]
})
export class ProfilePageModule {}
