import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { PacienteDTO } from '../modelo/paciente-dto';
import { InfoPQRSDTO } from '../modelo/info-pqrsdto';
import { TokenService } from './token.service';
import { Cita } from '../modelo/Cita';

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



  listarCitasPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    const token = this.hallarToken(); 

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
      
    });

    return this.http.get<MensajeDTO>(`${this.userUrl}/listarCitas-todas?codigoPaciente=${codigoPaciente}`, { headers });
  }




  public eliminarCuenta(codigo: number): Observable<MensajeDTO> {
    let token = this.hallarToken();
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
      
    });
  
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud DELETE para eliminar cuenta:', error);
          return throwError('Error en la solicitud DELETE para eliminar cuenta');
        })
      );
  }
  
  
  
  
  public editarPerfil(pacienteDTO: PacienteDTO): Observable<MensajeDTO> {
    let token = this.hallarToken();
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
     
    });
  
    return this.http.put<MensajeDTO>(`${this.userUrl}/editar-perfil`, pacienteDTO, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud PUT para editar perfil:', error);
          return throwError('Error en la solicitud PUT para editar perfil');
        })
      );
  }
  




  public crearPQRS(registroPQRSDTO: InfoPQRSDTO): Observable<MensajeDTO> {
    let token = this.hallarToken();
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
      
    });
  
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear-pqrs`, registroPQRSDTO, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud POST para crear PQRS:', error);
          return throwError('Error en la solicitud POST para crear PQRS');
        })
      );
  }
  public listarPQRSPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listarPqrs-paciente/${codigoPaciente}`);
  }




  public crearCita(citaDTO: Cita): Observable<MensajeDTO> {

    let token = this.hallarToken();
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear-cita`, citaDTO, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud POST:', error);
          return throwError('Error en la solicitud POST');
        })
      );
  }


  public eliminarCita(codigoCita: number): Observable<MensajeDTO> {
    let token = this.hallarToken();
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar-cita/${codigoCita}`, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud DELETE:', error);
          return throwError('Error en la solicitud DELETE');
        })
      );
  }
  

public actualizarCita(citaDTO: Cita): Observable<MensajeDTO> {
  let token = this.hallarToken();

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.put<MensajeDTO>(`${this.userUrl}/actualizar-cita`, citaDTO, { headers })
    .pipe(
      catchError((error) => {
        console.error('Error en la solicitud PUT:', error);
        return throwError('Error en la solicitud PUT');
      })
    );
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
    
    return this.http.get<MensajeDTO>(`${this.userUrl}/listarConsultas-todas/${codigoPaciente}`, {headers})
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