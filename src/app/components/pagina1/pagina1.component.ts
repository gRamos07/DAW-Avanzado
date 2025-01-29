import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css'],
})
export class Pagina1Component {
  mensajeVisible: boolean = false;
  nombreArchivo: string = ''; // Para almacenar el nombre del archivo seleccionado

  asignarPropuesta() {
    this.mensajeVisible = true;

    setTimeout(() => {
      this.mensajeVisible = false;
    }, 3000);
  }

  seleccionarArchivo() {
    // Obtiene el input de tipo archivo y lo activa
    const archivoInput = document.getElementById('archivoInput') as HTMLInputElement;
    archivoInput.click();
  }

  archivoSeleccionado(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.nombreArchivo = input.files[0].name; // Almacena el nombre del archivo seleccionado
    }
  }
}
