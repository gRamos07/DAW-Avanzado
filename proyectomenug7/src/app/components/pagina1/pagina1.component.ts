import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {
  revisoresVisible: boolean = false;
  mensajeVisible: boolean = false;

  
  asignarPropuesta() {
    
    this.mensajeVisible = true;

    
    setTimeout(() => {
      this.mensajeVisible = false;
    }, 3000);
  }
}
