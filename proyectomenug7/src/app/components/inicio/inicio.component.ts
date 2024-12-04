import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class HomeComponent {
titulo = 'Proyecto Grupo 7'
integrantes = ['Erazo Vizuete Justin Alexander', 'Ramos Baque Pedro Gabriel', 'Torres Beltran Aaron Ignacio'];
}
