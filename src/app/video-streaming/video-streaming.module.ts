import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoStreamingPageRoutingModule } from './video-streaming-routing.module';

import { VideoStreamingPage } from './video-streaming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoStreamingPageRoutingModule
  ],
  declarations: [VideoStreamingPage]
})
export class VideoStreamingPageModule {}
