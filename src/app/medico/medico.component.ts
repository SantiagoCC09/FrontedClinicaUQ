import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent {
  constructor(private router: Router) {}

regresarMedicoGeneral (){

  this.router.navigate(['/login']);


}



}
