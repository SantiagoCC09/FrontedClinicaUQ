import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-perfil',
  templateUrl: './paciente-perfil.component.html',
  styleUrls: ['./paciente-perfil.component.css']
})
export class PacientePerfilComponent {

  constructor(private router: Router) {}
  nombre: string = "";
  email: string = "";
  fechaNacimiento: string = "";
  numeroDocumento: string = "";
  contacto: string = "";
  ciudadResidencia: string = "";
  eps: string = "";
  rh: string = "";

  actualizarDatosPersonales(): void {
    // Aquí puedes utilizar las propiedades del componente (nombre, email, etc.) para actualizar los datos en el servidor o realizar otras acciones.
    console.log("Datos actualizados");
  }

  regresarPacienteGeneral(): void{

  this.router.navigate(['/paciente']);




}
}
