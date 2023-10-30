import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroPacienteDTO: RegistroPacienteDTO;
  ciudades: string[];
  archivos!:FileList;
  
  constructor() {
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.ciudades = [];
    this.cargarCiudades();
  }
  public registrar() {
    if (this.archivos != null && this.archivos.length > 0) {
      console.log(this.registroPacienteDTO);
    } else {
      console.log("Debe cargar una foto");
    }
  }
  public sonIguales(): boolean {
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmarPassword;
  }
  private cargarCiudades() {
    this.ciudades.push("Armenia");
    this.ciudades.push("Tebaida");
    this.ciudades.push("Circasia");
    this.ciudades.push("Genova");
    this.ciudades.push("Montenegro");
    this.ciudades.push("Quimbaya");
    this.ciudades.push("Calarca");
  }
  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.archivos = event.target.files;
      console.log(files);
    }
  }
}
