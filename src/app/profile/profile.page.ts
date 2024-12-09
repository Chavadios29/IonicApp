import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html', 
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage  {
  user = {
    username: 'Usuario123',
    email: 'usuario@ejemplo.com',
    profilePicUrl: ''
  };

  constructor(private router: Router) {}

  onProfilePicChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.profilePicUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    console.log('Perfil actualizado:', this.user);
    
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
