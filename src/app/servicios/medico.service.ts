import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable, catchError, throwError } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import {Cita} from '../modelo/Cita';
@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient, private tokenService:TokenService) { 
  }
  private userUrl = "http://localhost:8081/api/medicos";

public hallarToken(): string{

let token = "";

if (this.tokenService.getToken()!= null){
token = token+this.tokenService.getToken();

}
return token;
}

// ya quedó
  // para citas pendientes
public listarCitasTodas(): Observable<MensajeDTO>{


let token = this.hallarToken();


let id = this.tokenService.extractSpecificValue(token, "id");

const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
});

  return this.http.get<MensajeDTO>(`${this.userUrl}/listarCitas-todas/${id}`, { headers });


}

crearConsulta(){


}



// ya quedó
listarCitasByFecha(date: Date): Observable<MensajeDTO> {
  let token = this.hallarToken();
  let id = this.tokenService.extractSpecificValue(token, "id");

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  // se Formatea la fecha como cadena antes de agregarla a la URL papi
  const formattedDate = date.toISOString().split('T')[0]; 

  return this.http.get<MensajeDTO>(`${this.userUrl}/listarCitas-fecha/${formattedDate}/${id}`, { headers })
    .pipe(
      catchError((error) => {
        console.error('Error en la llamada HTTP:', error);
        // se lanza un nuevo error o devolver un valor predeterminado
        return throwError('Error en la llamada HTTP');
      })
    );
}
// ya quedó

  listarCitasByNombreCliente(nombrePaciente: string): Observable<MensajeDTO> {
    let token = this.hallarToken();
    let id = this.tokenService.extractSpecificValue(token, "id");
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.get<MensajeDTO>(`${this.userUrl}/listarCitasPendientes-nombrePaciente/${nombrePaciente}/${id}`, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error en la llamada HTTP:', error);
          // se lanza un nuevo error o devolver un valor predeterminado
          return throwError('Error en la llamada HTTP');
        })
      );
  }
  
  // ya quedó
  listarCitasByIdCliente(cedulaPaciente: string): Observable<MensajeDTO> {
    let token = this.hallarToken();
    let codigoMedico = this.tokenService.extractSpecificValue(token, "id");
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.get<MensajeDTO>(`${this.userUrl}/listarCitas-cedulaPaciente?codigoMedico=${codigoMedico}&cedulaPaciente=${cedulaPaciente}`, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error en la llamada HTTP:', error);
          // se lanza un nuevo error o devolver un valor predeterminado
          return throwError('Error en la llamada HTTP');
        })
      );
  }
  
//---------------------------------------- 


// para historial
listarConsultasTodas(): Observable<MensajeDTO> {
  let token = this.hallarToken();
  let codigoMedico = this.tokenService.extractSpecificValue(token, "id");

  return this.http.get<MensajeDTO>(`${this.userUrl}/listarConsultas-todas/${codigoMedico}`)
    .pipe(
      catchError((error) => {
        console.error('Error en la llamada HTTP:', error);
        // se lanza un nuevo error o devolver un valor predeterminado
        return throwError('Error en la llamada HTTP');
      })
    );
}

listarConsultasByFecha(){


}

//--------------------



// para reservar día libre
reservarDiaLibre(){



}

capturarDatosMedico(): Observable<MensajeDTO> {
  try {
    const token = this.hallarToken();
    const idMedico = this.tokenService.extractSpecificValue(token, 'id');

    if (!token || !idMedico) {
      throw new Error('Token o ID del médico no encontrados');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<MensajeDTO>(`${this.userUrl}/obtenerMedico/${idMedico}`, { headers });
  } catch (error) {
    console.error('Error en la obtención de datos del médico:', error);
    return throwError({ mensaje: 'Error en la obtención de datos del médico', error });
  }
}








}
