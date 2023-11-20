import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medico-disponibilidad',
  templateUrl: './medico-disponibilidad.component.html',
  styleUrls: ['./medico-disponibilidad.component.css']
})
export class MedicoDisponibilidadComponent {


  ngOnInit(): void {
    // Lógica que se ejecutará al iniciar el componente
    this.cargarDisponibilidad();
  }


  
  cargarDisponibilidad() {
    throw new Error('Method not implemented.');
  }

  
  constructor(private router: Router) {}
  regresarMedicoGeneral(){

    this.router.navigate(['/medico']);


  }

  fechaFiltro: Date | undefined;
  disponibilidad: any[] = []; // Ahí va el array con datos del backend
  filaSeleccionada: any | null = null;

  seleccionarFila(fila: any): void {
    this.filaSeleccionada = fila;
  }




}
