import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  age: number | null = null;
  errorMessage: string = '';
  successMessage: string = ''; // Para manejar mensajes de éxito

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.errorMessage = ''; // Limpiar mensajes anteriores
    this.successMessage = '';

    if (this.name && this.username && this.email && this.password && this.age) {
      this.authService
        .register(this.name, this.username, this.email, this.age, this.password)
        .then(() => {
          console.log('Registro exitoso');
          this.successMessage = 'Usuario registrado con éxito.';
          setTimeout(() => {
            this.router.navigateByUrl('/login'); // Redirigir al login después de 2 segundos
          }, 2000);
        })
        .catch((error) => {
          console.error('Error al registrar:', error);
          this.errorMessage = error.error?.message || 'No se pudo completar el registro.';
        });
    } else {
      this.errorMessage = 'Por favor, complete todos los campos';
    }
  }
}
