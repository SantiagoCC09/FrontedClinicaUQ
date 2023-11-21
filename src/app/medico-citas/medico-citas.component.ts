import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from '../servicios/medico.service';
import { Alerta } from '../modelo/alerta';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-medico-citas',
  templateUrl: './medico-citas.component.html',
  styleUrls: ['./medico-citas.component.css']
})
export class MedicoCitasComponent {

  ngOnInit(): void {
    // Lógica que se ejecutará al iniciar el componente
    this.listarCitasTodas();
  }
  
  fechaFiltro: Date = new Date();
  idClienteFiltro: string = '';
  nombreClienteFiltro: string = '';
constructor(private router: Router, private medicoService: MedicoService) {}

 
alerta!: Alerta;

  citas = [
    { codigoCita: 'codigo', nombrePaciente: 123, fechaCreacion: '2023-11-06', fechaCita: '10:00 AM', motivo: 'Juan Pérez', cedulaPaciente: 456, codigoPaciente: 1 },
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
  });

}

listarCitasNombrePaciente(){


  this.medicoService.listarCitasByNombreCliente(this.nombreClienteFiltro).subscribe({
    next: data => {
    this.llenarTabla(data.respuesta);

  },
  error: error => {
  this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
  }
  });

}

listarCitasCedulaPaciente(){


  this.medicoService.listarCitasByIdCliente(this.idClienteFiltro).subscribe({
    next: data => {
    this.llenarTabla(data.respuesta);

  },
  error: error => {
  this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
  }
  });

}
listarCitasFecha(){


  this.medicoService.listarCitasByFecha(this.fechaFiltro).subscribe({
    next: data => {
    this.llenarTabla(data.respuesta);

  },
  error: error => {
  this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
  }
  });

}




  llenarTabla(respuesta: any) {


    this.citas= respuesta;
  }



  atenderCitaSeleccionada(){
    if (this.citaSeleccionada != null){


      //this.medicoService.crearConsulta().subscribe
    }


  }



}
