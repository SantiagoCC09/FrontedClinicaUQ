import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { OlvidasteComponent } from './olvidaste/olvidaste.component';

import { PacienteComponent} from './paciente/paciente.component';
import { PacienteCitasComponent } from './paciente-citas/paciente-citas.component';
import { PacienteHistorialComponent } from './paciente-historial/paciente-historial.component';
import { PacientePerfilComponent } from './paciente-perfil/paciente-perfil.component';
import { PacientePqrsComponent } from './paciente-pqrs/paciente-pqrs.component';

import { MedicoComponent} from './medico/medico.component';
import { MedicoPerfilComponent } from './medico-perfil/medico-perfil.component';
import { MedicoDisponibilidadComponent } from './medico-disponibilidad/medico-disponibilidad.component';
import { MedicoHistorialComponent } from './medico-historial/medico-historial.component';
import { MedicoCitasComponent } from './medico-citas/medico-citas.component';


const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "olvidaste", component: OlvidasteComponent},

  {path: "paciente", component: PacienteComponent},
  {path: "paciente-citas", component: PacienteCitasComponent},
  {path: "paciente-historial", component: PacienteHistorialComponent},
  {path: "paciente-perfil", component: PacientePerfilComponent},
  {path: "paciente-pqrs", component: PacientePqrsComponent},


  {path: "medico", component: MedicoComponent},
  {path: "medico-perfil", component: MedicoPerfilComponent},
  {path: "medico-disponibilidad", component: MedicoDisponibilidadComponent},
  {path: "medico-historial", component: MedicoHistorialComponent},
  {path: "medico-citas", component: MedicoCitasComponent},



  {path: "**", pathMatch: "full", redirectTo: ""}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
