import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { CreatePostModalComponent } from '../create-post-modal/create-post-modal.component'; // Importamos el componente del modal

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  posts = [
    {
      user_id: 'Usuario1',
      description: 'Una bella guacamaya',
      created_at: new Date(),
      image_url: 'assets/guacamayo.jpg',
      likes: 0,
      liked: false,
      videoUrl: 'https://www.youtube.com/watch?v=adJiFxIMNmQ'
    },
  ];

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private modalController: ModalController // Inyectamos el ModalController
  ) {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToSearch() {
    this.router.navigate(['/search']);
  }

  goToNotifications() {
    this.router.navigate(['/notifications']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
   // Método para redirigir al perfil
   goToProfile() {
    this.router.navigate(['/profile']);
  } 

  // Abrir el modal para crear una nueva publicación
  async openCreatePostModal() {
    const modal = await this.modalController.create({
      component: CreatePostModalComponent, // Componente para el modal
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        // Si se crea una nueva publicación, agregarla a la lista
        this.posts.unshift(result.data);
      }
    });

    return await modal.present();
  }

  toggleLike(post: any) {
    post.liked = !post.liked;
    post.likes = post.liked ? post.likes + 1 : post.likes - 1;
  }

  getSafeUrl(url: string): SafeUrl {
    const videoId = this.extractVideoId(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  extractVideoId(url: string): string {
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1] ? match[1] : '';
  }
}
