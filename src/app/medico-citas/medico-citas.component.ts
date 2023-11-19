import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from '../servicios/medico.service';
import { Alerta } from '../modelo/alerta';
@Component({
  selector: 'app-medico-citas',
  templateUrl: './medico-citas.component.html',
  styleUrls: ['./medico-citas.component.css']
})
export class MedicoCitasComponent {

  
  
  
constructor(private router: Router, private medicoService: MedicoService) {}

 
alerta!: Alerta;

  citas = [
    { motivo: 'Consulta general', idPaciente: 123, fecha: '2023-11-06', hora: '10:00 AM', nombrePaciente: 'Juan Pérez', idCita: 456 },
    // se agregan mas citas
  ];

  citaSeleccionada: any;

  seleccionarCita(cita: any): void {
    this.citaSeleccionada = cita;
  }


regresarMedicoGeneral(){

  this.router.navigate(['/medico']);

}


listarCitasTodas(){


  this.medicoService.listarCitasTodas().subscribe({
    next: data => {
    this.llenarTabla(data.respuesta);
  },
  error: error => {
  this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
  }
  });;

}
  llenarTabla(respuesta: any) {


    throw new Error('Method not implemented.');
  }


}
