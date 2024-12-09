import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3001/posts'; // Ruta para los posts (GET y POST)

  constructor(private http: HttpClient) {}

  // Función para obtener todas las publicaciones
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);  // Realiza una petición GET al servidor
  }

  // Función para crear una publicación
  createPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);  // Realiza una petición POST al servidor
  }

  // Función opcional para subir imágenes (si es necesario)
  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image, image.name);
    return this.http.post('http://localhost:3001/upload', formData);  // Realiza una petición POST con FormData
  }
}
