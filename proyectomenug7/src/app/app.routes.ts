import { Routes } from '@angular/router';
import { HomeComponent } from './components/inicio/inicio.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { InicioSesionComponent } from './components/InicioSesion/InicioSesion.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes =  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'pagina1', component: Pagina1Component, canActivate: [AuthGuard] },
    { path: 'pagina2', component: Pagina2Component, canActivate: [AuthGuard] },
    { path: 'pagina3', component: Pagina3Component, canActivate: [AuthGuard] },
    { path: 'InicioSesion', component: InicioSesionComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
  ];
