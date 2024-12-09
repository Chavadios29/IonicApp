import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';


@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private apiUrl = 'http://localhost:3001/auth'; // URL base del backend
  
    constructor(
      private http: HttpClient,
      private alertController: AlertController,
      private storage: Storage // Almacenamiento local para guardar datos como tokens o sesión
    ) {}
  
    /**
     * Método para registrar un nuevo usuario
     * @param name Nombre del usuario
     * @param username Nombre de usuario
     * @param email Correo electrónico
     * @param age Edad del usuario
     * @param password Contraseña
     */
    async register(
      name: string,
      username: string,
      email: string,
      age: number,
      password: string
    ): Promise<void> {
      try {
        const response: any = await this.http
          .post(`${this.apiUrl}/register`, {
            name,
            username,
            email,
            age,
            password,
            profile_img_url: null, // Puede ser opcional según tu backend
          })
          .toPromise();
  
        console.log('Respuesta del servidor (registro):', response);
  
        if (response && response.message) {
          await this.showAlert('Éxito', response.message);
        } else {
          await this.showAlert(
            'Error',
            'No se recibió una respuesta válida del servidor'
          );
        }
      } catch (error: any) {
        console.error('Error en el registro:', error);
        const message = error.error?.message || 'Ocurrió un error inesperado';
        await this.showAlert('Error', message);
      }
    }
  
    /**
     * Método para iniciar sesión
     * @param username Nombre de usuario
     * @param password Contraseña
     * @returns Devuelve `true` si el inicio de sesión fue exitoso, `false` en caso contrario
     */
    async login(username: string, password: string): Promise<boolean> {
      console.log('Datos enviados para login:', { username, password });
      try {
        const response: any = await this.http
          .post(`${this.apiUrl}/login`, { username, password })
          .toPromise();
  
        console.log('Respuesta del servidor (login):', response);
  
        if (response && response.token) {
          // Guarda el token en el almacenamiento local
          await this.saveToken(response.token);
  
          await this.showAlert(
            'Éxito',
            response.message || 'Inicio de sesión exitoso'
          );
          return true;
        } else {
          await this.showAlert('Error', 'Credenciales inválidas');
          return false;
        }
      } catch (error: any) {
        console.error('Error al intentar iniciar sesión:', error);
        const message = error.error?.message || 'Ocurrió un error inesperado';
        await this.showAlert('Error', message);
        return false;
      }
    }
  
    /**
     * Método para guardar el token de autenticación en el almacenamiento local
     * @param token Token recibido del backend
     */
    private async saveToken(token: string): Promise<void> {
      const storage = await this.storage.create();
      await storage.set('auth_token', token);
    }
  
    /**
     * Método para obtener el token almacenado
     * @returns Token almacenado o `null` si no existe
     */
    async getToken(): Promise<string | null> {
      const storage = await this.storage.create();
      return await storage.get('auth_token');
    }
  
    /**
     * Método para cerrar sesión
     */
    async logout(): Promise<void> {
      const storage = await this.storage.create();
      await storage.remove('auth_token');
      await this.showAlert('Sesión cerrada', 'Has salido de tu cuenta');
    }
  
    /**
     * Método para mostrar alertas en la aplicación
     * @param header Título de la alerta
     * @param message Mensaje de la alerta
     */
    private async showAlert(header: string, message: string): Promise<void> {
      const alert = await this.alertController.create({
        header,
        message,
        buttons: ['OK'],
      });
      await alert.present();
    }
  }