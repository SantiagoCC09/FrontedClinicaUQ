import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico-historial',
  templateUrl: './medico-historial.component.html',
  styleUrls: ['./medico-historial.component.css']
})
export class MedicoHistorialComponent {
  historial: any[] = []; // Aquí se cargan los datos desde el backend
  consultaSeleccionada: any;
  fechaFiltro: string = '';
  constructor(private router: Router) {}


  ngOnInit(): void {
    // Aquí se puede cargar los datos iniciales del historial desde el backend
    // solicitud HTTP aquí para obtener los datos
  }

  seleccionarConsulta(consulta: any): void {
    this.consultaSeleccionada = consulta;
  }

  filtrarPorFecha(): void {
    
    // Aqui debemos enviar una solicitud al backend para obtener los datos filtrados
  }

  regresarMedicoGeneral(): void {
    this.router.navigate(['/medico']);
  }
}
