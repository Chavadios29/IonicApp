import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoStreamingPage } from './video-streaming.page';

const routes: Routes = [
  {
    path: '',
    component: VideoStreamingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoStreamingPageRoutingModule {}
