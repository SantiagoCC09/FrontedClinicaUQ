import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO }  from '../modelo/login-dto'
import { MensajeDTO }  from '../modelo/mensaje-dto'
import { RegistroPacienteDTO }  from '../modelo/registro-paciente-dto'
import { Observable } from 'rxjs';
import { TokenDTO } from '../modelo/token-dto';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL = "http://localhost:8081/api/auth";
  constructor(private http: HttpClient) { }

  public registrarPaciente(paciente: RegistroPacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/registrarse`, paciente);
    
  }
  
  public login(loginDTO: LoginDTO): Observable<TokenDTO> {
    return this.http.post<TokenDTO>(`${this.authURL}/login`, loginDTO);
  }
  

  



}