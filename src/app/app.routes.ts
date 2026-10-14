import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PuntosReciclaje } from './pages/puntos-reciclaje/puntos-reciclaje';
import { RegistrarEntrega } from './pages/registrar-entrega/registrar-entrega';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'puntos', component: PuntosReciclaje },
  { path: 'registrar', component: RegistrarEntrega },
  { path: '**', redirectTo: '' }
];