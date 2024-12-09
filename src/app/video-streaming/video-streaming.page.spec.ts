import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoStreamingPage } from './video-streaming.page';

describe('VideoStreamingPage', () => {
  let component: VideoStreamingPage;
  let fixture: ComponentFixture<VideoStreamingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStreamingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
