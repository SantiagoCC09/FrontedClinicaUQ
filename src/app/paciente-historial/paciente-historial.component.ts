import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';
import { MensajeDTO } from '../modelo/mensaje-dto';
@Component({
  selector: 'app-paciente-historial',
  templateUrl: './paciente-historial.component.html',
  styleUrls: ['./paciente-historial.component.css']
})
export class PacienteHistorialComponent {


  ngOnInit(): void {
    // Lógica que se ejecutará al iniciar el componente
    this.cargarDatosHistorial();
  }
 


  constructor(private router: Router, private pacienteServicio: PacienteService) {}

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


  cargarDatosHistorial()  {

    this.pacienteServicio.listarConsultasPaciente().subscribe(
      (mensajeDTO: MensajeDTO) => {
        
        this.registros = mensajeDTO.respuesta;
      },
      (error) => {
        console.error('Error al listar consultas del paciente:', error);
        // Puedes manejar el error según tus necesidades
      }
    );

  }




}
