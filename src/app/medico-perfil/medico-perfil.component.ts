import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from '../servicios/medico.service';
import { MensajeDTO } from '../modelo/mensaje-dto';

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

constructor(private router: Router,private medicoService: MedicoService ) {}

ngOnInit(): void {
  // Lógica que se ejecutará al iniciar el componente
  this.cargarDatosMedico();
}



cargarDatosMedico() {
  this.medicoService.capturarDatosMedico()
    .subscribe(
      (datos: MensajeDTO) => {
        // Manejar la respuesta exitosa aquí
        console.log('Datos del médico:', datos.respuesta, datos);
        // Puedes asignar los datos a una variable de la clase o realizar otras operaciones
      },
      (error) => {
        // Manejar el error aquí
        console.error('Error al cargar datos del médico:', error);
        // Puedes mostrar un mensaje de error al usuario o realizar otras acciones
      }
    );
}



  regresarMedicoGeneral(){

    this.router.navigate(['/medico']);


  }



}
