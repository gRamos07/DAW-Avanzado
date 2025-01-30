import { Component, } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './InicioSesion.component.html',
  styleUrls: ['./InicioSesion.component.css'],
})
export class InicioSesionComponent {}