import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paciente-historial',
  templateUrl: './paciente-historial.component.html',
  styleUrls: ['./paciente-historial.component.css']
})
export class PacienteHistorialComponent {

  constructor(private router: Router) {}

  registros = [
    { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' }
  ];

  registroSeleccionado: any;

  seleccionarRegistro(registro: any) {
    this.registroSeleccionado = registro;
  }

  regresarPacienteGeneral(): void{

    this.router.navigate(['/paciente']);
  
  
  }

}
