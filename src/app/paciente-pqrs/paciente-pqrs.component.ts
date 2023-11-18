import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';
import { PqrDTO } from '../modelo/pqr-dto';

@Component({
  selector: 'app-paciente-pqrs',
  templateUrl: './paciente-pqrs.component.html',
  styleUrls: ['./paciente-pqrs.component.css']
})
export class PacientePqrsComponent {

  listaPqr: PqrDTO[] = [];

  constructor(private router: Router, private pacienteService: PacienteService ) {}
  
  
  asunto: string = '';
  descripcion: string = '';
  mensajes: { emisor: string; contenido: string }[] = [];

  idPaciente =0;

  

  enviarPQRS() {
    // Agrega el mensaje del usuario a la lista de mensajes
    this.mensajes.push({ emisor: 'Usuario', contenido: this.descripcion });
    
    // Simula una respuesta automática
    this.mensajes.push({ emisor: 'Asistente', contenido: 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.' });

    // Limpia el campo de descripción después de enviar el mensaje
    this.descripcion = '';
  }


  regresarPacienteGeneral (){


    this.router.navigate(['/paciente']);


  }


  cargarPqr (){

    this.pacienteService.listarPQRSPaciente(this.idPaciente).subscribe({
      next: data => {
       this.listaPqr = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });


  }

}
