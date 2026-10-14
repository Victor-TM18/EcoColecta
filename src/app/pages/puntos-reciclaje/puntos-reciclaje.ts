import { Component } from '@angular/core';

@Component({
  selector: 'app-puntos-reciclaje',
  templateUrl: './puntos-reciclaje.html',
  styleUrls: ['./puntos-reciclaje.css']
})
export class PuntosReciclajeComponent {
  puntos = [
    {
      nombre: 'Almacén Principal Municipal',
      direccion: 'Av. Municipalidad 123',
      horario: 'Lunes a Viernes 8:00 am - 5:00 pm',
      materiales: 'Plástico, Cartón, Vidrio, Metal',
      estado: 'Disponible'
    },
    {
      nombre: 'Oficina Centro',
      direccion: 'Calle Comercio 456 (Frente a la Plaza)',
      horario: 'Lunes a Sábado 9:00 am - 1:00 pm',
      materiales: 'Papel, Cartón, Pilas/Baterías',
      estado: 'Disponible'
    },
    {
      nombre: 'Complejo Deportivo Sur',
      direccion: 'Av. Los Deportes S/N',
      horario: 'Todos los días 7:00 am - 6:00 pm',
      materiales: 'Plástico PET y Latas de Aluminio',
      estado: 'Mantenimiento'
    }
  ];
}