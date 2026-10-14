import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; // Ajusta la ruta si la carpeta se llama diferente

export const routes: Routes = [
  { path: '', component: Home }, // <-- Esto hace que 'home' sea la página de bienvenida
  { path: '**', redirectTo: '' }         // Redirige cualquier ruta no encontrada al home
];