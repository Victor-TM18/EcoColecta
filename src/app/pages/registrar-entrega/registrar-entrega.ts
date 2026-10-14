import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-entrega',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-entrega.html',
  styleUrl: './registrar-entrega.css'
})
export class RegistrarEntrega {
  entrega = {
    punto: '',
    material: '',
    cantidad: null,
    ciudadano: ''
  };

  mensajeExito = false;

  guardarEntrega() {
    console.log('Entrega registrada:', this.entrega);
    this.mensajeExito = true;

    // Limpiar formulario después de registrar
    this.entrega = {
      punto: '',
      material: '',
      cantidad: null,
      ciudadano: ''
    };

    setTimeout(() => {
      this.mensajeExito = false;
    }, 4000);
  }
}