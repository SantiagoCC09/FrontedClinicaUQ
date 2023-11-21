import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { TokenService } from '../servicios/token.service';
import { Alerta } from '../modelo/alerta';
import { PacienteDTO } from '../modelo/paciente-dto';

@Component({
  selector: 'app-paciente-perfil',
  templateUrl: './paciente-perfil.component.html',
  styleUrls: ['./paciente-perfil.component.css']
})
export class PacientePerfilComponent {


  alerta!: Alerta;
  
  ngOnInit(): void {
    // Lógica que se ejecutará al iniciar el componente
    this.cargarDatosPaciente();
  }
  constructor(private router: Router , private pacienteServicio: PacienteService, private tokenService : TokenService) {}
  
  nombre: string = "";
  email: string = "";
  fechaNacimiento: Date = new Date();
  numeroDocumento: string = "";
  contacto: string = "";
  ciudadResidencia: string = "";
  eps: string = "";
  rh: string = "";
 

  pacienteDTO!: PacienteDTO;
  actualizarDatosPersonales(): void {
    // bro, las propiedades del componente (nombre, email, etc.) para actualizar los datos en el servidor o realizar otras acciones.
    console.log("Datos actualizados");
  }

  regresarPacienteGeneral(): void{

  this.router.navigate(['/paciente']);

}
cargarDatosPaciente(): void {
  this.pacienteServicio.obtenerPaciente().subscribe({
    next: (mensajeDTO: any) => {
      // Verificar si existe error y respuesta dentro del mensajeDTO
      if (mensajeDTO && mensajeDTO.error != null && mensajeDTO.respuesta != null) {
        // Verificar el estado del error
        if (mensajeDTO.error === true) {
          // Manejar el error
          console.log('Error: ' + mensajeDTO.respuesta);
          this.alerta = { mensaje: 'Error: ' + mensajeDTO.respuesta, tipo: 'danger' };
        } else {
          // Asignar los valores del PacienteDTO del backend al PacienteDTO del frontend
          const pacienteBackend = mensajeDTO.respuesta;
          this.pacienteDTO = {
            nombre: pacienteBackend.nombreCompleto,
            telefono: pacienteBackend.telefono,
            correo: pacienteBackend.email,
            cedula: pacienteBackend.cedulaPaciente,
            alergias: pacienteBackend.alergias,
            URL_foto: pacienteBackend.URL_Foto,
            eps: pacienteBackend.eps,
            tipoSangre: pacienteBackend.rh,
            ciudadResidencia: pacienteBackend.ciudadResidencia,
            fechaNacimiento: pacienteBackend.fechaNacimiento
          };
          // para mostrar los datos cargados
          this.nombre = this.pacienteDTO.nombre;
          this.contacto = this.pacienteDTO.telefono
          this.email = this.pacienteDTO.correo
          this.eps = this.pacienteDTO.eps
          this.rh = this.pacienteDTO.tipoSangre
          this.numeroDocumento = this.pacienteDTO.cedula
          this.ciudadResidencia = this.pacienteDTO.ciudadResidencia
          this.fechaNacimiento = this.pacienteDTO.fechaNacimiento

          console.log(this.pacienteDTO);

          // Lógica para manejar los datos obtenidos del paciente
        }
      } else {
        // Manejar la situación donde no se encuentra la estructura esperada en mensajeDTO
        console.log('Respuesta inesperada del servidor');
        this.alerta = { mensaje: 'Respuesta inesperada del servidor', tipo: 'danger' };
      }
    },
    error: (error) => {
      // Manejar el error de la solicitud HTTP
      console.log('Error en la solicitud: ' + error.message);
      // También podrías establecer un mensaje de alerta aquí si es necesario
    },
  });
}




}
