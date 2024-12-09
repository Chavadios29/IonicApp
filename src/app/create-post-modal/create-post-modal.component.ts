import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.component.html',
  styleUrls: ['./create-post-modal.component.scss'],
})
export class CreatePostModalComponent {
  newPost = {
    description: '',
    image: null as string | null,
    videoUrl: ''
  };

  constructor(private modalController: ModalController) {}

  // Cerrar el modal sin crear la publicación
  close() {
    this.modalController.dismiss();
  }

  // Crear publicación y cerrar el modal
  createPost() {
    if (this.newPost.description || this.newPost.videoUrl) {
      const post = {
        user_id: 'UsuarioActual',
        description: this.newPost.description,
        created_at: new Date(),
        image_url: this.newPost.image || 'assets/image-placeholder.png',
        likes: 0,
        liked: false,
        videoUrl: this.newPost.videoUrl
      };
      // Devolver la publicación creada al componente principal
      this.modalController.dismiss(post);
    }
  }

  // Cambiar imagen
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newPost.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
