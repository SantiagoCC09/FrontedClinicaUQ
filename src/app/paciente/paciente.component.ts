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

      }else{
        if (tab == 'citas'){
          this.router.navigate(['/paciente-citas']);

        }else{

          if (tab == 'pqr'){

            this.router.navigate(['/paciente-pqrs']);

          }else{
            this.router.navigate(['/paciente-historial']);


          }
        }
      }
    }
    

  }

  activeTabIs(tab: string): boolean {
    return this.activeTab === tab;
  }



}

  