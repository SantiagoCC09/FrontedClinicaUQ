import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})

export class PacienteComponent {

  constructor(private router: Router) {}

  paciente = {
    nombre: 'Nombre del Paciente',
    cedula: '1234567890'
  };

activeTab: string = '';

  showTab(tab: string): void {
    this.activeTab = tab;

    if (tab === 'terminarSesion'){
      this.router.navigate(['/login']);

    }else{
      if (tab == 'perfil'){

        this.router.navigate(['/paciente-perfil']);

      }
    }
    

  }

  activeTabIs(tab: string): boolean {
    return this.activeTab === tab;
  }



}

  