import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paciente-citas',
  templateUrl: './paciente-citas.component.html',
  styleUrls: ['./paciente-citas.component.css']
})
export class PacienteCitasComponent {

  constructor(private router: Router) {}
  
  regresarPacienteGeneral(): void{

    this.router.navigate(['/paciente']);
  
  
  }
  citas = [
    { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' }
  ];

  citaSeleccionada: any;

  seleccionarCita(cita: any) {
    this.citaSeleccionada = cita;
  }


  
}
