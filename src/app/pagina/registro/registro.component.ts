import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MensajeDTO } from 'src/app/modelo/mensaje-dto';
import { tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroPacienteDTO: RegistroPacienteDTO;
  ciudades: string[];
  tipoSangre: string[];
  eps: string[];
  archivos!: FileList;
  alerta!: Alerta;
  constructor(private imagenService: ImagenService, private authService: AuthService, private clinicaService: ClinicaService) {
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.ciudades = [];
    this.tipoSangre = [];
    this.eps = [];
    this.cargarCiudades();
    this.cargarTipoSangre();
    this.cargarEps();
  }
  public registrar() {
    if (this.registroPacienteDTO.URL_Foto.length !== 0) {
      this.authService.registrarPaciente(this.registroPacienteDTO)
        .pipe(
          tap(data => {
            const mensajeDTO = {
              respuesta: data.respuesta,
            };
            this.alerta = mensajeDTO.respuesta;
          }),
        )
        .subscribe({
          next: (data: MensajeDTO) => {
            this.limpiarCampos(); // Limpia los campos después del registro exitoso
          },
          error: (error: HttpErrorResponse) => {
            this.alerta = { mensaje: error.error.respuesta, tipo: 'danger' };
          }
        });
    } else {
      this.alerta = { mensaje: 'Debe subir una imagen', tipo: 'danger' };
    }
  }

  private limpiarCampos() {
    // Limpia los campos y muestra el mensaje de éxito
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.alerta = { mensaje: 'Registro exitoso', tipo: 'success' };
  }

  
  public sonIguales(): boolean {
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmarPassword;
  }
  private cargarCiudades() {
    this.clinicaService.listarCiudades().subscribe({
      next: data => {
        this.ciudades = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  private cargarTipoSangre() {
    this.clinicaService.listarTipoSangre().subscribe({
      next: data => {
        this.tipoSangre = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  private cargarEps() {
    this.clinicaService.listarEPS().subscribe({
      next: data => {
        this.eps = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });

  }
  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.registroPacienteDTO.URL_Foto = event.target.files[0].name;
      this.archivos = event.target.files;
    }
  }
  public subirImagen() {
    if (this.archivos != null && this.archivos.length > 0) {
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          this.registroPacienteDTO.URL_Foto = data.respuesta.url;
        },
        error: error => {
          this.alerta = { mensaje: error.error, tipo: "danger" };
        }
      });
    } else {
      this.alerta = { mensaje: 'Debe seleccionar una imagen y subirla', tipo: "danger" };
    }
  }
}
