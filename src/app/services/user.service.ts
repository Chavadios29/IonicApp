// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // URL de tu servidor Express
  private apiUrl = 'http://localhost:3001'; // Cambia a la URL de tu servidor backend si es necesario

  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);  // La ruta para obtener todos los usuarios
  }

  // Crear un nuevo usuario
  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);  // La ruta para registrar un nuevo usuario
  }

  // Iniciar sesión
  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);  // Ruta para el login
  }
}
