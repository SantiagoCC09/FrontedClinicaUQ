import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';

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

  // para citas pendientes
public listarCitasTodas(): Observable<MensajeDTO>{


let token = this.hallarToken();

let id = this.tokenService.extractSpecificValue(token, "id");



  return this.http.post<MensajeDTO>(`${this.userUrl}/listarCitas-todas`, id);


}

listarCitasByFecha(){



}

listarCitasByNombreCliente(){



}

listarCitasByIdCliente(){



}
//---------------------------------------- 


// para historial
listarConsultasTodas(){



}

listarConsultasByFecha(){


}

//--------------------



// para reservar día libre
reservarDiaLibre(){



}




}
