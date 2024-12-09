import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  items = []; // Aquí puedes inicializar tus datos de búsqueda

  constructor() {
    // Inicializa tus datos o realiza la lógica necesaria
  }
}