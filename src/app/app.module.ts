import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { OlvidasteComponent } from './olvidaste/olvidaste.component';
import { PacienteComponent } from './paciente/paciente.component';
import { MedicoComponent } from './medico/medico.component';
import { PacientePerfilComponent } from './paciente-perfil/paciente-perfil.component';
import { PacienteCitasComponent } from './paciente-citas/paciente-citas.component';
import { PacientePqrsComponent } from './paciente-pqrs/paciente-pqrs.component';
import { PacienteHistorialComponent } from './paciente-historial/paciente-historial.component';
import { MedicoPerfilComponent } from './medico-perfil/medico-perfil.component';
import { MedicoCitasComponent } from './medico-citas/medico-citas.component';
import { MedicoDisponibilidadComponent } from './medico-disponibilidad/medico-disponibilidad.component';
import { MedicoHistorialComponent } from './medico-historial/medico-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    OlvidasteComponent,
    PacienteComponent,
    MedicoComponent,
    PacientePerfilComponent,
    PacienteCitasComponent,
    PacientePqrsComponent,
    PacienteHistorialComponent,
    MedicoPerfilComponent,
    MedicoCitasComponent,
    MedicoDisponibilidadComponent,
    MedicoHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
