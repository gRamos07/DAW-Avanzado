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
integrantes = ['Freire Vera Josue Anibal', 'Ramos Baque Pedro Gabriel'];
}
