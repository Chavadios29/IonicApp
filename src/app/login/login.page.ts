import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';  // Asegúrate de importar el servicio de autenticación
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';  
  password: string = '';  
  errorMessage: string = '';  

  constructor(private authService: AuthService, private navCtrl: NavController,private router: Router) {}

  
  async login() {
    try {
     
      const success = await this.authService.login(this.username, this.password);
      
      if (success) {
        
        this.router.navigate(['/home']); 
      } else {
        
        this.errorMessage = 'Nombre de usuario o contraseña incorrectos'; 
      }
    } catch (error) {
      this.errorMessage = 'Ocurrió un error al intentar iniciar sesión';
      console.error(error);
    }
  }
}
