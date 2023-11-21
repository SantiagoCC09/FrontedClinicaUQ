import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { PacienteDTO } from '../modelo/paciente-dto';
import { InfoPQRSDTO } from '../modelo/info-pqrsdto';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private userUrl = "http://localhost:8081/api/pacientes";
  constructor(private http: HttpClient, private tokenService: TokenService) { }


  public hallarToken(): string{

    let token = "";
    
    if (this.tokenService.getToken()!= null){
    token = token+this.tokenService.getToken();
    
    }
    return token;
    }


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
    return this.http.get<MensajeDTO>(`${this.userUrl}/listarPqrs-paciente/${codigoPaciente}`);
  }


  public listarConsultasPaciente(): Observable<MensajeDTO>{

    let codigoPaciente: number = 0;
    let token = this.hallarToken();
    codigoPaciente = this.tokenService.extractSpecificValue(token, "id");
    
    
    console.log("se supone que este es el token :",token);
    console.log("se supone que este es el codigo del paciente :", codigoPaciente);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get<MensajeDTO>(`${this.userUrl}/listarConsultas-todas/${codigoPaciente}`)
      .pipe(
        catchError((error) => {
          console.error('Error en la llamada HTTP:', error);
          
          return throwError('Error en la llamada HTTP');
        })
      );
  }





  public obtenerPaciente(): Observable<MensajeDTO> {
    let codigoPaciente: number = 0;
    let token = this.hallarToken();
    codigoPaciente = this.tokenService.extractSpecificValue(token, "id");
    
    
    console.log("se supone que este es el token :",token);
    console.log("se supone que este es el codigo del paciente :", codigoPaciente);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get<MensajeDTO>(`${this.userUrl}/obtener-paciente/${codigoPaciente}`,{ headers })
      .pipe(
        catchError((error) => {
          console.error('Error en la llamada HTTP:', error);
          
          return throwError('Error en la llamada HTTP');
        })
      );
  }
  

}