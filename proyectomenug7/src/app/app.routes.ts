import { Routes } from '@angular/router';
import { HomeComponent } from './components/inicio/inicio.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';

export const routes: Routes =  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'pagina1', component: Pagina1Component },
    { path: 'pagina2', component: Pagina2Component },
    { path: 'pagina3', component: Pagina3Component },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
  ];
