import { Component, } from '@angular/core';
import { Router } from '@angular/router';
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
    FormsModule
  ],
  templateUrl: './InicioSesion.component.html',
  styleUrls: ['./InicioSesion.component.css'],
})

export class InicioSesionComponent {
  email: string = '';
  password: string = '';

  users = [
    {email: 'Pepito@ug.com', password: 'student', role: 'estudiante'},
    {email: 'Juanito@ug.com', password: 'student', role: 'estudiante'},
    {email: 'Maria@ug.com', password: 'secretary', role: 'secretaria'},
  ]
  constructor(private router: Router) {}
  IniciarSesion() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      this.router.navigate(['/home']);
    } else {
      alert('Usuario y/o contraseña incorrectos');
    }
  }
}