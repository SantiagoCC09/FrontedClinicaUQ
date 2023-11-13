import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
  
})

export class PacienteComponent {

  constructor(private router: Router, private tokenService:TokenService) {}

  paciente = {
    nombre: 'Nombre del Paciente',
    cedula: '1234567890'
  };

activeTab: string = '';

  showTab(tab: string): void {
    this.activeTab = tab;

    if (tab === 'terminarSesion'){
      this.tokenService.logout();
      

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

  