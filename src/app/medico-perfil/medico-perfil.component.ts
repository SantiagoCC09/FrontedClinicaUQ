import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from '../servicios/medico.service';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { MedicoDTO } from '../modelo/medico-dto';
import { Alerta } from '../modelo/alerta';

@Component({
  selector: 'app-medico-perfil',
  templateUrl: './medico-perfil.component.html',
  styleUrls: ['./medico-perfil.component.css']
})
export class MedicoPerfilComponent {

  nombre: string = '';
  email: string = '';
  telefono: string = '';
  especializacion: string = '';
  residencia: string = '';

constructor(private router: Router,private medicoService: MedicoService ) {}
alerta!: Alerta;
medicoDTO!: MedicoDTO;
ngOnInit(): void {
  // Lógica que se ejecutará al iniciar el componente
  this.cargarDatosMedico();
}


cargarDatosMedico() {
  this.medicoService.capturarDatosMedico()
    .subscribe({
      next: (mensajeDTO: any) => {
        // Verificar si existe error y respuesta dentro del mensajeDTO
        if (mensajeDTO && mensajeDTO.error != null && mensajeDTO.respuesta != null) {
          // Verificar el estado del error
          if (mensajeDTO.error === true) {
            // Manejar el error
            console.log('Error: ' + mensajeDTO.respuesta);
            this.alerta = { mensaje: 'Error: ' + mensajeDTO.respuesta, tipo: 'danger' };
          } else {
            const medicoBackend = mensajeDTO.respuesta;

            // Asignar los datos del médico al medicoDTO
            this.medicoDTO = {
              nombre: medicoBackend.nombre,
              cedula: medicoBackend.cedula,
              ciudad: medicoBackend.ciudad,
              URL_foto: medicoBackend.URL_foto,
              especializacion: medicoBackend.especialidad,
              telefono: medicoBackend.telefono,
              password: medicoBackend.password,
              correo: medicoBackend.correo
              // Agregar más propiedades según sea necesario
            };

            this.email = this.medicoDTO.correo;
            this.especializacion = this.medicoDTO.especializacion;
            this.nombre = this.medicoDTO.nombre;
            this.residencia = this.medicoDTO.ciudad;
            this.telefono = this.medicoDTO.telefono

            // Puedes realizar más acciones con los datos del médico aquí si es necesario

            // Ejemplo: Imprimir los datos en la consola
            console.log('Datos del médico:', this.medicoDTO);
          }
        }
      },
      error: (error) => {
        console.error('Error al obtener datos del médico:', error);
        this.alerta = { mensaje: 'Error al obtener datos del médico', tipo: 'danger' };
      },
    });
}




  regresarMedicoGeneral(){

    this.router.navigate(['/medico']);


  }



}
