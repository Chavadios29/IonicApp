import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-streaming',
  templateUrl: './video-streaming.page.html',
  styleUrls: ['./video-streaming.page.scss'],
})
export class VideoStreamingPage implements OnInit {
  player: any; // Referencia al reproductor de YouTube

  constructor() {}

  ngOnInit() {
    this.loadYouTubePlayer();
  }

  loadYouTubePlayer() {
    // Esperar a que la API de YouTube esté lista
    (window as any).onYouTubeIframeAPIReady = () => {
      this.player = new (window as any).YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'dQw4w9WgXcQ', // ID del video de YouTube
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
        events: {
          onReady: this.onPlayerReady,
          onError: this.onPlayerError,
        },
      });
    };
  }

  onPlayerReady(event: any) {
    console.log('Player is ready.');
  }

  onPlayerError(event: any) {
    console.error('Error loading player:', event);
  }
}
