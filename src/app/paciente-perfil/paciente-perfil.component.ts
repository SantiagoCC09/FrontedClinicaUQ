import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { TokenService } from '../servicios/token.service';
import { Alerta } from '../modelo/alerta';

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
  fechaNacimiento: string = "";
  numeroDocumento: string = "";
  contacto: string = "";
  ciudadResidencia: string = "";
  eps: string = "";
  rh: string = "";

  actualizarDatosPersonales(): void {
    // bro, las propiedades del componente (nombre, email, etc.) para actualizar los datos en el servidor o realizar otras acciones.
    console.log("Datos actualizados");
  }

  regresarPacienteGeneral(): void{

  this.router.navigate(['/paciente']);

}
cargarDatosPaciente(): void {
  this.pacienteServicio.obtenerPaciente().subscribe({
    next: (data: MensajeDTO) => {
      // Lógica para manejar los datos obtenidos del paciente

      console.log(data.respuesta);

    },
    error: (error) => {
      this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
    },
  });
}



}
