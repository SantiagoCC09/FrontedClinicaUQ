import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../servicios/token.service';


@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent {
  constructor(private router: Router, private tokenService:TokenService) {}


regresarMedicoGeneral (){


  this.tokenService.logout();


}


activeTab: string = '';


showTab(tab: string){


  this.activeTab = tab;




if (tab === 'medico-perfil'){


  this.router.navigate(['/medico-perfil']);


}else{


  if (tab === 'medico-citas' ){


    this.router.navigate(['/medico-citas']);


  }else{
    if (tab === 'medico-historial'){




      this.router.navigate(['/medico-historial']);


    }else{


      this.router.navigate(['/medico-disponibilidad']);


    }
  }
}


}






}
