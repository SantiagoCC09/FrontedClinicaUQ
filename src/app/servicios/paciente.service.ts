import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { PacienteDTO } from '../modelo/paciente-dto';
import { InfoPQRSDTO } from '../modelo/info-pqrsdto';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private userUrl = "http://localhost:8081/api/pacientes";
  constructor(private http: HttpClient) { }
  public verDetallePaciente(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/detalle/${codigo}`);
  }
  public eliminarCuenta(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`);
  }
  public editarPerfil(pacienteDTO: PacienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/editar-perfil`, pacienteDTO);
  }
  public crearPQRS(registroPQRSDTO: InfoPQRSDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear-pqrs`, registroPQRSDTO);
  }
  public listarPQRSPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-pqrs/${codigoPaciente}`);
  }
}