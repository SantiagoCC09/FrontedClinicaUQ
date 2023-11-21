import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';
import { Cita } from '../modelo/Cita';
import { MensajeDTO } from '../modelo/mensaje-dto';
@Component({
  selector: 'app-paciente-citas',
  templateUrl: './paciente-citas.component.html',
  styleUrls: ['./paciente-citas.component.css']
})
export class PacienteCitasComponent {

  constructor(private router: Router, private pacienteServicio : PacienteService) {}
  
  descripcion: string ="";
  fechasDisponibles!: Date;
  horasDisponibles: string="";

  ngOnInit(): void {
    // Lógica que se ejecutará al iniciar el componente
    this.llenarTablaCitas();
  }
  


  regresarPacienteGeneral(): void{

    this.router.navigate(['/paciente']);
  
  
  }
  citas = [
    { id: 555, descripcion: 'ejemplo', fechaCita: '345345', handle: '454' },
    
  ];

  citaSeleccionada: any;

  seleccionarCita(cita: any) {
    this.citaSeleccionada = cita;
  }

  crearCita() {
    
    const nuevaCita: Cita = {
      codigoCita: 0,
      nombrePaciente: '',
      fechaCreacion: new Date(),
      fechaCita: new Date(),
      motivo: '',
      cedulaPaciente: '',
      codigoPaciente: 0
    };

    this.pacienteServicio.crearCita(nuevaCita).subscribe(
      (respuesta: MensajeDTO) => {
        // aquí se setea el código de la cita
        nuevaCita.codigoCita = respuesta.respuesta
        
      },
      (error) => {

     
        console.error('Error al crear la cita:', error);
        
      }
    );

      nuevaCita.fechaCita = this.fechasDisponibles;
      nuevaCita.motivo = this.descripcion;
      //varables de seguridad
     let x = "";
     x += nuevaCita.fechaCita
      let y = 3
      y+= nuevaCita.codigoCita



      const citaAgregar = { id: y, descripcion: nuevaCita.motivo, fechaCita: x, handle: '7' };
      this.citas.push(citaAgregar);



  }

  eliminarCita(codigoCita: number) {
    this.pacienteServicio.eliminarCita(codigoCita).subscribe(
      (respuesta: MensajeDTO) => {
        console.log('Respuesta del servidor:', respuesta);
        // Actualizar la interfaz de usuario o realizar acciones adicionales en caso de éxito
      },
      (error) => {
        console.error('Error al eliminar la cita:', error);
        // Actualizar la interfaz de usuario o realizar acciones adicionales en caso de error
      }
    );
  }
  

  actualizarCita() {
    const citaActualizada: Cita = {
      codigoCita: 0,
      nombrePaciente: '',
      fechaCreacion: new Date(),
      fechaCita: new Date(),
      motivo: '',
      cedulaPaciente: '',
      codigoPaciente: 0
    };
  
    this.pacienteServicio.actualizarCita(citaActualizada).subscribe(
      (respuesta: MensajeDTO) => {
        console.log('Respuesta del servidor:', respuesta);
        // Actualizar la interfaz de usuario o realizar acciones adicionales en caso de éxito
      },
      (error) => {
        console.error('Error al actualizar la cita:', error);
        // Actualizar la interfaz de usuario o realizar acciones adicionales en caso de error
      }
    );
  }



  llenarTablaCitas() {
    




  }
  
}
