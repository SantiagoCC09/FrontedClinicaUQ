import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

constructor(private router: Router) {}
  regresarMedicoGeneral(){

    this.router.navigate(['/medico']);


  }



}
